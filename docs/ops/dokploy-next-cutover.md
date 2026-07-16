# Dokploy cutover — Next.js + SQLite

Checklist for replacing the Vite + nginx + Supabase stack with the Next.js `standalone` container.

## Prerequisites

- Branch `feat/next-sqlite-cutover` merged (or deploy from that branch until merge).
- Dockerfile builds with `npm run build` (no Vite Supabase build args).
- Persistent volume available for `/data`.

## Step 1 — Build settings

| Setting | Value |
|---------|-------|
| Build type | `Dockerfile` |
| Dockerfile path | `Dockerfile` |
| Docker context | `.` |
| Container port | **3000** (was 80 with nginx) |

Remove old build-time variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_GA_MEASUREMENT_ID`.

## Step 2 — Environment variables

Set in Dokploy **Environment** (runtime; not required at build time):

| Variable | Required | Example / notes |
|----------|----------|-----------------|
| `DATABASE_PATH` | Yes | `/data/agentbiz.sqlite` |
| `CV_DIR` | Yes | `/data/cvs` |
| `BETTER_AUTH_SECRET` | Yes | Random string, ≥32 chars; rotate if ever exposed |
| `BETTER_AUTH_URL` | Yes | Public origin, e.g. `https://agentbiz.io` |
| `NEXT_PUBLIC_APP_URL` | Yes | Same public origin (Better Auth client) |
| `NODE_ENV` | Auto | `production` (set by image) |

Optional analytics (if wired later): `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

**Do not** set Supabase variables for the Next stack.

## Step 3 — Volume mount

- [ ] Add volume mount: host/named volume → container path `/data`
- [ ] Confirm `cvs` subdirectory exists on the volume after first deploy

See [sqlite-backup.md](./sqlite-backup.md) for backup paths and restore.

## Step 4 — Domain

- [ ] Point domain in Dokploy to container port **3000**
- [ ] Enable HTTPS / Let's Encrypt
- [ ] Update DNS if server IP changed

## Step 5 — Deploy and smoke test

- [ ] Deploy and watch build logs for `npm run build` success
- [ ] `curl -s https://agentbiz.io/api/health` → `{"ok":true}`
- [ ] Home page and a deep link (e.g. `/services`) return 200
- [ ] Public lead form submits
- [ ] Admin login at `/admin/login` works

## Step 6 — Migrate DB and seed admin (one-shot)

On first deploy, apply Drizzle migrations to the volume, then seed the admin user. Signup is disabled in production (`NODE_ENV=production`), so seeding uses a one-shot container with `NODE_ENV=development`.

Use the **builder** image stage (includes source, migrations, and dev tooling):

```bash
# On Dokploy host or CI machine with Docker access to the volume
docker build -t agentbiz-next-builder --target builder /path/to/repo

# 6a — Apply schema to the volume (once per fresh volume)
docker run --rm \
  -v agentbiz-data:/data \
  -e DATABASE_PATH=/data/agentbiz.sqlite \
  agentbiz-next-builder \
  npx drizzle-kit migrate

# 6b — Seed admin (once per fresh volume)
docker run --rm \
  -v agentbiz-data:/data \
  -e NODE_ENV=development \
  -e DATABASE_PATH=/data/agentbiz.sqlite \
  -e CV_DIR=/data/cvs \
  -e BETTER_AUTH_SECRET='<same-as-production>' \
  -e BETTER_AUTH_URL='https://agentbiz.io' \
  -e ADMIN_EMAIL='admin@agentbiz.io' \
  -e ADMIN_PASSWORD='<strong-password>' \
  --entrypoint npx \
  agentbiz-next-builder \
  tsx --tsconfig tsconfig.next.json scripts/seed-admin.ts
```

`NODE_ENV=development` is required so `signUpEmail` is allowed for this one-shot. Re-run seed only if you intentionally reset the database.

Local equivalent:

```bash
docker build -t agentbiz-next-builder --target builder .
docker volume create agentbiz-data

docker run --rm -v agentbiz-data:/data \
  -e DATABASE_PATH=/data/agentbiz.sqlite \
  agentbiz-next-builder npx drizzle-kit migrate

docker run --rm -v agentbiz-data:/data \
  -e NODE_ENV=development \
  -e DATABASE_PATH=/data/agentbiz.sqlite \
  -e CV_DIR=/data/cvs \
  -e BETTER_AUTH_SECRET='local-dev-secret-min-32-chars-long' \
  -e BETTER_AUTH_URL='http://127.0.0.1:3000' \
  -e ADMIN_EMAIL='admin@example.com' \
  -e ADMIN_PASSWORD='changeme' \
  --entrypoint npx agentbiz-next-builder \
  tsx --tsconfig tsconfig.next.json scripts/seed-admin.ts
```

## Step 7 — Decommission Supabase stack (manual)

- [ ] Stop and remove the `agentbiz-supabase` Dokploy application on the VPS
- [ ] Remove Supabase build env vars from the main app (if any remain)
- [ ] Confirm no traffic still points at old Supabase-only endpoints

## Local Docker verify

```bash
docker build -t agentbiz-next .
docker volume create agentbiz-data
docker run -d --name agentbiz-next \
  -v agentbiz-data:/data \
  -p 3000:3000 \
  -e BETTER_AUTH_SECRET='local-dev-secret-min-32-chars' \
  -e BETTER_AUTH_URL='http://127.0.0.1:3000' \
  -e NEXT_PUBLIC_APP_URL='http://127.0.0.1:3000' \
  agentbiz-next

curl -s http://127.0.0.1:3000/api/health
# Expected: {"ok":true}

docker stop agentbiz-next && docker rm agentbiz-next
```

## Rollback

Keep the previous Vite+nginx image tag or GitHub Pages until smoke tests pass. To roll back, redeploy the old Dockerfile (nginx on port 80) and restore Supabase env vars.
