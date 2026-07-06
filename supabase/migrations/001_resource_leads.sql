-- Resource leads table for gated downloads and ROI calculator captures.
-- Run in Supabase SQL Editor for project itfdbhdnlhrkuazkcnit

create table if not exists public.resource_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  resource_slug text not null,
  source text not null default 'resource_download',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists resource_leads_created_at_idx on public.resource_leads (created_at desc);
create index if not exists resource_leads_email_idx on public.resource_leads (email);

alter table public.resource_leads enable row level security;

drop policy if exists "Allow anonymous lead inserts" on public.resource_leads;
create policy "Allow anonymous lead inserts"
  on public.resource_leads
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow authenticated lead reads" on public.resource_leads;
create policy "Allow authenticated lead reads"
  on public.resource_leads
  for select
  to authenticated
  using (true);
