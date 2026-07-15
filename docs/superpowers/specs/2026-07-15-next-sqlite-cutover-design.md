# AgentBiz: Next.js + SQLite cutover (post-Supabase)

**Date:** 2026-07-15  
**Status:** Draft for review  
**Priority:** Minimum VPS RAM/cost, high quality and security  
**Replaces:** Self-hosted Supabase stack for AgentBiz  

## Context

Supabase self-host on Dokploy was removed to free RAM. Existing app data is treated as lost; schema starts empty. The marketing site still uses Vite + `@supabase/supabase-js` for leads, applications/CV storage, CRM, and admin auth. Those calls will fail until this design is implemented.

## Goals

- Single primary container: Next.js App Router (`standalone`) + SQLite on a Docker volume.
- Full site cutover from Vite → Next (marketing, Jarvis home, admin, APIs).
- Secure public forms and authenticated admin without RLS (server is the security perimeter).
- No HubSpot/Pipedrive sync in v1.
- No Realtime; admin uses fetch/refresh (optional light poll later).

## Non-goals (v1)

- Postgres / Supabase Cloud / reintroducing Kong/GoTrue/Logflare.
- Public signup; open registration.
- CDN object storage (R2/S3) — local volume only.
- External CRM sync (`supabase/functions/crm-sync`).
- Preserving Vite as the production entry after cutover.

## Architecture

```
Browser
  → Next.js (App Router, output: standalone)
       ├── UI: marketing routes + Jarvis home + /admin
       ├── Route Handlers: /api/leads, /api/applications, /api/admin/*, Better Auth
       └── SQLite file + CV files under /data (Docker volume)
```

| Piece | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 App Router | Full cutover + Route Handlers in one deploy |
| DB | SQLite via Drizzle + `better-sqlite3` (or libsql equivalent) | Lowest RAM; one volume |
| Auth | Better Auth (email/password, httpOnly cookies) | No GoTrue; server-side sessions |
| Files | `/data/cvs/{uuid}.pdf` | Not under `public/`; auth-gated download |
| Deploy | Dokploy single service + domain → `:3000` | Aligns with current VPS ops |

## Data model

Logical tables (Drizzle migrations):

### Auth (Better Auth–managed)

- `user`, `session`, `account`, `verification` (exact names per Better Auth schema)

### Business

**`resource_leads`**

- `id` TEXT PK (UUID)
- `name`, `email` NOT NULL
- `company` nullable
- `resource_slug`, `source` NOT NULL
- `metadata` TEXT JSON default `{}`
- `created_at` INTEGER/TEXT timestamptz equivalent NOT NULL
- Indexes: `created_at DESC`, `email`

**`applications`**

- `id` TEXT PK
- `name`, `email`, `phone`, `position`, `experience`, `cover_letter`
- `cv_path` (filesystem path/key), `cv_file_name`
- `status` enum: pending | reviewed | interviewed | accepted | rejected
- `applied_at`, `reviewed_at`, `notes`
- No public `cv_url`

**`crm_contacts`**

- Same semantics as `003_internal_crm.sql`: stage, contact_type, priority, notes, timestamps
- Unique on lowercased `email`

**`crm_activities`**

- `contact_id` FK → `crm_contacts` ON DELETE CASCADE
- activity_type, content, metadata JSON, created_at

CRM upsert/timeline formerly done by Postgres triggers → **implemented in API service layer** after lead/application create/update.

## API surface

### Public (unauthenticated)

| Method | Path | Behavior |
|--------|------|----------|
| POST | `/api/leads` | Zod validate → insert `resource_leads` → upsert CRM prospect |
| POST | `/api/applications` | multipart; validate PDF ≤ 5MB; insert + store CV; upsert CRM candidate |

Protections: Zod, honeypot field, rate limit (IP + route), max body size, Origin/Referer check where applicable, generic error bodies.

### Auth

- Better Auth handler under `/api/auth/[...all]`
- Production: no public sign-up endpoint enabled; admin seeded via env/script (`ADMIN_EMAIL` / `ADMIN_PASSWORD` once)

### Admin (session required)

| Method | Path | Behavior |
|--------|------|----------|
| GET | `/api/admin/leads` | List leads |
| GET/PATCH | `/api/admin/applications` | List / update status/notes |
| GET | `/api/admin/applications/[id]/cv` | Stream CV (auth only) |
| GET/PATCH | `/api/admin/crm/contacts` | CRM board |
| GET/POST | `/api/admin/crm/contacts/[id]/activities` | Timeline / notes |

Unauthorized → 401. Forbidden → 403. No stack traces to clients.

## Frontend migration

1. Map `src/SiteRoutes.tsx` paths to App Router `app/**/page.tsx`.
2. Port Jarvis home from `poc/scroll-experience` into the `/` page (client islands for Three/gsap/Lenis).
3. Replace clients:
   - `src/lib/leads.ts` → `fetch('/api/leads')`
   - `src/lib/applications.ts` → `fetch('/api/applications')` + admin CV URL → authed download route
   - `src/lib/crm.ts` → admin API fetches
   - `src/hooks/useAuth.ts` → Better Auth client session
4. Remove `@supabase/supabase-js`, `src/integrations/supabase/**`.
5. Keep visual/design system (Tailwind, shadcn) unless a file must change for RSC boundaries.
6. After green deploy: default scripts/Docker use Next; Vite configs become legacy or deleted in a follow-up.

## Security requirements

- Session cookies: `httpOnly`, `Secure`, `SameSite=Lax` (or Strict if compatible).
- Secrets only in Dokploy env; never commit `.env` with production secrets.
- CV files never world-readable via static hosting.
- Password hashing via Better Auth defaults (scrypt/argon2 as configured by library).
- Security headers via Next config or middleware: CSP (tuned for Three/inline if needed), `X-Content-Type-Options`, `Referrer-Policy`, frame denial.
- Rate limiting on public POSTs.
- Admin seed credentials rotated after first login.
- Backup: cron or Dokploy job copying `/data/*.sqlite*` and `/data/cvs`.
- Dependency hygiene: lockfile, no unused Supabase compose in runtime path.

## Deployment (Dokploy)

1. Build image with Next `standalone` (multi-stage Dockerfile).
2. Mount volume at `/data`.
3. Env: `DATABASE_URL` (file path), `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` (canonical site URL), admin seed vars, `NODE_ENV=production`.
4. Domain → container port 3000.
5. Memory: sized for one Node process (document observed usage after deploy; start with modest limit and raise only if OOM).
6. Stop/remove any remaining `agentbiz-supabase` compose app.
7. Repo cleanup (follow-up): delete or archive `dokploy/supabase/` when cutover is verified.

## Delivery phases

| Phase | Outcome |
|-------|---------|
| 1 | Next scaffold, SQLite + Drizzle, Better Auth, admin seed, `/api/health` |
| 2 | Public APIs + forms wired |
| 3 | Admin UI (leads, applications, CRM, CV download) |
| 4 | Full page/route port including Jarvis home |
| 5 | Docker + Dokploy cutover, DNS, smoke tests |
| 6 | Hardening: headers, rate limit, backups, remove Supabase deps |

## Success criteria

- [ ] Public lead and application forms persist to SQLite
- [ ] Admin can log in; list leads/apps; download CV only when authenticated
- [ ] Jarvis home and existing marketing URLs work on Next
- [ ] Zero runtime dependency on Supabase URLs or `supabase-js`
- [ ] `/data` backup procedure documented and runnable
- [ ] No public registration; rate limits verified on abuse probes

## Risks and mitigations

| Risk | Mitigation |
|------|------------|
| SQLite single-writer under load | Low traffic site; WAL mode; keep writes short |
| Volume loss | Automated backups off-box |
| Three.js / CSP friction | Start CSP report-only or carefully allow needed sources |
| Large cutover regresses SEO/routes | Route parity checklist from `SiteRoutes.tsx` + sitemap regen |
| Auth misconfig in prod | Staging smoke + checklist before DNS switch |

## Open items (resolved in brainstorming)

- Storage: SQLite not Postgres (RAM) — **chosen**
- CRM HubSpot/Pipedrive: **skip v1**
- Data restore: **not required** (empty DB)
- Scope: **full Next cutover**

## Out of scope follow-ups

- Optional move to Postgres later if concurrency grows
- Reintroduce CRM sync as a separate small job
- Delete legacy Vite/POC entrypoints after stability window
