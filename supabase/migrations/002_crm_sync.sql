-- CRM sync tracking for leads and job applications.
-- Pair with Edge Function: supabase/functions/crm-sync
-- Configure Database Webhooks in Supabase Dashboard (see supabase/CRM_SETUP.txt).

alter table public.resource_leads
  add column if not exists crm_synced_at timestamptz;

alter table public.applications
  add column if not exists crm_synced_at timestamptz;

create table if not exists public.crm_sync_log (
  id uuid primary key default gen_random_uuid(),
  record_type text not null check (record_type in ('lead', 'application')),
  record_id uuid not null,
  provider text not null,
  status text not null check (status in ('success', 'error')),
  external_id text,
  response_summary text,
  created_at timestamptz not null default now()
);

create index if not exists crm_sync_log_created_at_idx on public.crm_sync_log (created_at desc);
create index if not exists crm_sync_log_record_id_idx on public.crm_sync_log (record_id);

alter table public.crm_sync_log enable row level security;

drop policy if exists "Allow authenticated crm log reads" on public.crm_sync_log;
create policy "Allow authenticated crm log reads"
  on public.crm_sync_log
  for select
  to authenticated
  using (true);

-- Applications: trigger CRM sync when CV URL is set (second update after upload)
create or replace function public.notify_crm_on_application_cv()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if NEW.cv_url is not null
     and NEW.cv_url <> ''
     and (TG_OP = 'INSERT' or OLD.cv_url is distinct from NEW.cv_url)
     and NEW.crm_synced_at is null then
  then
    perform pg_notify(
      'crm_application_ready',
      json_build_object('id', NEW.id, 'email', NEW.email)::text
    );
  end if;
  return NEW;
end;
$$;

drop trigger if exists applications_crm_notify on public.applications;
create trigger applications_crm_notify
  after insert or update of cv_url on public.applications
  for each row
  execute function public.notify_crm_on_application_cv();
