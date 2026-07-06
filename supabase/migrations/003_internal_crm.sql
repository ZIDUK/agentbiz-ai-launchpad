-- Internal CRM: contacts, pipeline stages, and activity timeline.
-- Auto-syncs from resource_leads and applications (when cv_url is set).

create table if not exists public.crm_contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  company text,
  phone text,
  stage text not null default 'new'
    check (stage in ('new', 'contacted', 'qualified', 'proposal', 'won', 'lost')),
  contact_type text not null default 'prospect'
    check (contact_type in ('prospect', 'candidate', 'customer')),
  priority text not null default 'normal'
    check (priority in ('low', 'normal', 'high')),
  notes text not null default '',
  last_activity_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.crm_activities (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid not null references public.crm_contacts(id) on delete cascade,
  activity_type text not null
    check (activity_type in ('note', 'call', 'email', 'meeting', 'stage_change', 'lead_capture', 'application')),
  content text not null default '',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists crm_contacts_stage_idx on public.crm_contacts (stage);
create index if not exists crm_contacts_last_activity_idx on public.crm_contacts (last_activity_at desc);
create index if not exists crm_activities_contact_id_idx on public.crm_activities (contact_id, created_at desc);

alter table public.crm_contacts enable row level security;
alter table public.crm_activities enable row level security;

drop policy if exists "Allow authenticated crm contact reads" on public.crm_contacts;
create policy "Allow authenticated crm contact reads"
  on public.crm_contacts for select to authenticated using (true);

drop policy if exists "Allow authenticated crm contact writes" on public.crm_contacts;
create policy "Allow authenticated crm contact writes"
  on public.crm_contacts for all to authenticated using (true) with check (true);

drop policy if exists "Allow authenticated crm activity reads" on public.crm_activities;
create policy "Allow authenticated crm activity reads"
  on public.crm_activities for select to authenticated using (true);

drop policy if exists "Allow authenticated crm activity writes" on public.crm_activities;
create policy "Allow authenticated crm activity writes"
  on public.crm_activities for all to authenticated using (true) with check (true);

create or replace function public.touch_crm_contact_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists crm_contacts_updated_at on public.crm_contacts;
create trigger crm_contacts_updated_at
  before update on public.crm_contacts
  for each row execute function public.touch_crm_contact_updated_at();

create or replace function public.upsert_crm_contact_from_lead()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_contact_id uuid;
  v_email text := lower(trim(new.email));
begin
  insert into crm_contacts (name, email, company, stage, contact_type, last_activity_at, created_at)
  values (
    new.name,
    v_email,
    new.company,
    'new',
    'prospect',
    new.created_at,
    new.created_at
  )
  on conflict (email) do update set
    name = excluded.name,
    company = coalesce(excluded.company, crm_contacts.company),
    last_activity_at = greatest(crm_contacts.last_activity_at, excluded.last_activity_at),
    updated_at = now()
  returning id into v_contact_id;

  insert into crm_activities (contact_id, activity_type, content, metadata, created_at)
  values (
    v_contact_id,
    'lead_capture',
    'Marketing lead: ' || new.source,
    jsonb_build_object(
      'source', new.source,
      'resource_slug', new.resource_slug,
      'lead_id', new.id,
      'metadata', coalesce(new.metadata, '{}'::jsonb)
    ),
    new.created_at
  );

  return new;
end;
$$;

drop trigger if exists resource_leads_crm_sync on public.resource_leads;
create trigger resource_leads_crm_sync
  after insert on public.resource_leads
  for each row execute function public.upsert_crm_contact_from_lead();

create or replace function public.upsert_crm_contact_from_application()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_contact_id uuid;
  v_email text := lower(trim(new.email));
begin
  if new.cv_url is null or new.cv_url = '' then
    return new;
  end if;

  insert into crm_contacts (name, email, company, phone, stage, contact_type, last_activity_at, created_at)
  values (
    new.name,
    v_email,
    null,
    new.phone,
    'new',
    'candidate',
    coalesce(new.applied_at, now()),
    coalesce(new.applied_at, now())
  )
  on conflict (email) do update set
    name = excluded.name,
    phone = coalesce(excluded.phone, crm_contacts.phone),
    contact_type = case
      when crm_contacts.contact_type = 'customer' then 'customer'
      else 'candidate'
    end,
    last_activity_at = greatest(crm_contacts.last_activity_at, excluded.last_activity_at),
    updated_at = now()
  returning id into v_contact_id;

  insert into crm_activities (contact_id, activity_type, content, metadata, created_at)
  values (
    v_contact_id,
    'application',
    'Job application: ' || new.position,
    jsonb_build_object(
      'application_id', new.id,
      'position', new.position,
      'experience', new.experience,
      'cv_url', new.cv_url,
      'cv_file_name', new.cv_file_name
    ),
    coalesce(new.applied_at, now())
  );

  return new;
end;
$$;

drop trigger if exists applications_internal_crm_sync on public.applications;
create trigger applications_internal_crm_sync
  after insert or update of cv_url on public.applications
  for each row execute function public.upsert_crm_contact_from_application();

-- Backfill existing marketing leads
insert into crm_contacts (name, email, company, stage, contact_type, last_activity_at, created_at)
select
  (array_agg(name order by created_at desc))[1],
  lower(email),
  (array_agg(company order by created_at desc) filter (where company is not null))[1],
  'new',
  'prospect',
  max(created_at),
  min(created_at)
from resource_leads
group by lower(email)
on conflict (email) do update set
  last_activity_at = greatest(crm_contacts.last_activity_at, excluded.last_activity_at);

insert into crm_activities (contact_id, activity_type, content, metadata, created_at)
select
  c.id,
  'lead_capture',
  'Marketing lead: ' || rl.source,
  jsonb_build_object(
    'source', rl.source,
    'resource_slug', rl.resource_slug,
    'lead_id', rl.id,
    'metadata', coalesce(rl.metadata, '{}'::jsonb)
  ),
  rl.created_at
from resource_leads rl
join crm_contacts c on c.email = lower(rl.email)
where not exists (
  select 1 from crm_activities a
  where a.contact_id = c.id
    and a.activity_type = 'lead_capture'
    and a.metadata->>'lead_id' = rl.id::text
);
