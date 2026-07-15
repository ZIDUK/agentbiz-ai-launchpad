# AgentBiz Supabase on Dokploy

Self-hosted [Supabase](https://supabase.com/docs/guides/self-hosting/docker) stack for AgentBiz, deployed as a **Dokploy Compose** application. Uses the **Momo Tea proven stack** (same services and image versions as a working production deployment), not the latest upstream compose.

| Item | Value |
|------|-------|
| Compose app name | `agentbiz-supabase` |
| Dokploy server | `2.25.74.63` |
| Supabase API (Kong) | `https://agent-supabase.agentbiz.io` |
| Marketing site (separate app) | `https://agentbiz.io` |
| Compose root in repo | `dokploy/supabase/` |

---

## What's in this folder

| Path | Purpose |
|------|---------|
| `docker-compose.yml` | Lean stack by default — kong, auth, rest, realtime, storage, imgproxy, functions, db, supavisor. Optional profiles: `studio`, `logs` |
| `volumes/logs/vector.yml` | Vector log shipper (only with `--profile logs`) |
| `.env.example` | Required env vars with AgentBiz URLs pre-filled |
| `volumes/` | Init SQL, Kong config, edge-function router (from upstream) |
| `scripts/bootstrap-volumes.sh` | Re-download volume files from Supabase GitHub |

Volume files are vendored from [supabase/docker/volumes](https://github.com/supabase/supabase/tree/master/docker/volumes). To refresh after an upstream upgrade:

```bash
cd dokploy/supabase
sh scripts/bootstrap-volumes.sh
```

**Do not** use the Dokploy Supabase template for AgentBiz — use this compose file instead. Kong listens on container ports 8000/8443 only; Dokploy terminates HTTPS and proxies to Kong.

---

## Dokploy domain mapping

Configure these in **Domains** for the Compose app `agentbiz-supabase`:

| Hostname | Service | Container port | Required |
|----------|---------|----------------|----------|
| `agent-supabase.agentbiz.io` | `kong` | **8000** | Yes — API, Auth, REST, Storage, Realtime |
| `studio-supabase.agentbiz.io` (example) | `studio` | **3000** | Optional — direct Studio UI (bypasses Kong) |

DNS (at your registrar):

| Type | Name | Value |
|------|------|-------|
| A | `agent-supabase` | `2.25.74.63` |
| A | `studio-supabase` | `2.25.74.63` (if using optional Studio subdomain) |

Enable **HTTPS / Let's Encrypt** in Dokploy for each domain.

> **Note:** With only the Kong domain mapped, Studio is still reachable at `https://agent-supabase.agentbiz.io/` (Kong basic-auth protected via `DASHBOARD_USERNAME` / `DASHBOARD_PASSWORD`).

### Service port reference (internal)

| Service | Port | Exposed via Kong? |
|---------|------|-------------------|
| `kong` | 8000 | Yes — public API gateway |
| `studio` | 3000 | Optional direct access |
| `auth` | 9999 | Via Kong `/auth/v1` |
| `rest` | 3000 | Via Kong `/rest/v1` |
| `realtime` | 4000 | Via Kong `/realtime/v1` |
| `storage` | 5000 | Via Kong `/storage/v1` |
| `functions` | 9000 | Via Kong `/functions/v1` |
| `db` / `supavisor` | 5432, 6543 | **Do not** publish publicly unless needed |

---

## Deploy on Dokploy (step by step)

### 1. Create the Compose application

1. Dokploy dashboard → **Projects** → your project (e.g. `agentbiz`).
2. **Create Service** → **Compose**.
3. **Name:** `agentbiz-supabase`
4. Connect Git repo `agentbiz-ai-launchpad`, branch `main`.
5. **Compose path:** `dokploy/supabase/docker-compose.yml`
6. **Root directory / context:** `dokploy/supabase`

### 2. Generate secrets

On your machine or the Dokploy server:

```bash
git clone --depth 1 https://github.com/supabase/supabase /tmp/supabase
cd /tmp/supabase/docker
sh utils/generate-keys.sh
```

Copy the generated values into Dokploy **Environment** (or local `.env`).

Minimum required overrides from `.env.example`:

- All `CHANGE_ME_*` secrets
- Confirm URLs: `SUPABASE_PUBLIC_URL`, `API_EXTERNAL_URL`, `SITE_URL`, `ADDITIONAL_REDIRECT_URLS`
- `CONTAINER_PREFIX=agentbiz`

### 3. Environment in Dokploy

Paste variables from `.env.example`, with real secrets. Critical vars for AgentBiz frontend:

```
SUPABASE_PUBLIC_URL=https://agent-supabase.agentbiz.io
API_EXTERNAL_URL=https://agent-supabase.agentbiz.io
SITE_URL=https://agentbiz.io
ADDITIONAL_REDIRECT_URLS=https://agentbiz.io/**,https://www.agentbiz.io/**,https://agentbiz.io/admin,https://agentbiz.io/admin/**
CONTAINER_PREFIX=agentbiz
ANON_KEY=<from generate-keys.sh>
SERVICE_ROLE_KEY=<from generate-keys.sh>
JWT_SECRET=<from generate-keys.sh>
POSTGRES_PASSWORD=<strong password>
```

### 4. Add domains

1. **Domains** → Add `agent-supabase.agentbiz.io`
2. Service: `kong`, Port: `8000`
3. Enable HTTPS
4. (Optional) Add Studio subdomain → service `studio`, port `3000`

### 5. Deploy

Click **Deploy** and wait for all services to become healthy (first boot initializes Postgres — can take several minutes).

**Orden de arranque (lean):** `db` → `kong` / `auth` / `rest` / `storage` / `realtime` / `functions` / `pooler`.

> **RAM:** By default **analytics (Logflare)**, **vector**, **studio**, and **meta** do **not** start. That typically saves **~0.5–1.2 GiB** vs the full stack. Studio logs explorer is unavailable unless you enable profiles (below).

Si `storage` o `pooler` no arrancan:

```bash
# SSH al servidor Dokploy (2.25.74.63)
docker ps -a --filter name=agentbiz --format 'table {{.Names}}\t{{.Status}}'

# Reiniciar servicios atascados (después de que db esté healthy)
docker restart agentbiz-storage agentbiz-pooler

# Ver logs
docker logs agentbiz-storage --tail 50
docker logs agentbiz-pooler --tail 50
```

### Low-RAM profiles (optional)

Default deploy is lean. Enable extras only when needed:

```bash
# Studio UI (+ postgres-meta) — on demand
COMPOSE_PROFILES=studio docker compose up -d

# Logflare + Vector (~500–900 MiB) — only if you need Studio log explorer
COMPOSE_PROFILES=logs docker compose up -d

# Both
COMPOSE_PROFILES=studio,logs docker compose up -d
```

After switching to lean mode, stop leftover heavy containers if Dokploy left them running:

```bash
docker stop agentbiz-analytics agentbiz-vector agentbiz-studio agentbiz-meta 2>/dev/null || true
docker rm agentbiz-analytics agentbiz-vector agentbiz-studio agentbiz-meta 2>/dev/null || true
# If Dokploy prefix includes a random suffix, list first:
docker ps -a --filter name=agentbiz --format '{{.Names}}\t{{.Status}}\t{{.Size}}'
```

> **Also free RAM on the same host:** Momo Tea `*-supabase-analytics` (~900 MiB) is the other Logflare. Disable it the same way if you do not need Studio logs there.
Verify:

```bash
curl -s https://agent-supabase.agentbiz.io/rest/v1/ -H "apikey: YOUR_ANON_KEY"
curl -s https://agent-supabase.agentbiz.io/auth/v1/health
# SSL válido (no "self-signed"):
curl -sI https://agent-supabase.agentbiz.io/auth/v1/health | head -5
```

### 5b. SSL / certificado autofirmado

Si el navegador muestra certificado autofirmado en `agent-supabase.agentbiz.io`:

1. Dokploy → app `agentbiz-supabase` → **Domains**
2. Editar `agent-supabase.agentbiz.io` → activar **HTTPS / Let's Encrypt**
3. Confirmar DNS: `dig +short agent-supabase.agentbiz.io` debe devolver `2.25.74.63`
4. Redeploy o esperar emisión del certificado (1–5 min)
5. Verificar: `curl -sI https://agent-supabase.agentbiz.io/auth/v1/health` — sin error SSL

---

## Variables críticas (.env)

| Variable | Valor / notas |
|----------|---------------|
| `CONTAINER_PREFIX` | `agentbiz` (prefijo de contenedores: `agentbiz-kong`, etc.) |
| `POSTGRES_PASSWORD` | Contraseña fuerte para Postgres |
| `JWT_SECRET` | ≥32 caracteres |
| `ANON_KEY` | De `generate-keys.sh` — clave pública para el frontend |
| `SERVICE_ROLE_KEY` | De `generate-keys.sh` — **nunca** en el cliente |
| `DASHBOARD_USERNAME` | Usuario Studio (ej. `supabase`) |
| `DASHBOARD_PASSWORD` | Contraseña Studio (Kong basic-auth) |
| `SECRET_KEY_BASE` | `openssl rand -base64 48` — Realtime + pooler |
| `VAULT_ENC_KEY` | `openssl rand -hex 16` — pooler (32 chars hex) |
| `LOGFLARE_API_KEY` | `openssl rand -base64 24` |
| `LOGFLARE_PUBLIC_ACCESS_TOKEN` | Mismo valor que `LOGFLARE_API_KEY` |
| `SUPABASE_PUBLIC_URL` | `https://agent-supabase.agentbiz.io` |
| `API_EXTERNAL_URL` | `https://agent-supabase.agentbiz.io` |
| `SUPABASE_HOST` | `agent-supabase.agentbiz.io` |
| `SITE_URL` | `https://agentbiz.io` |
| `ADDITIONAL_REDIRECT_URLS` | URLs de redirect OAuth (ver `.env.example`) |
| `POOLER_TENANT_ID` | `agentbiz` |
| `DOCKER_SOCKET_LOCATION` | `/var/run/docker.sock` |
| `SUPABASE_PUBLISHABLE_KEY` | Opcional — dejar vacío si usas solo JWT legacy |

## Guía rápida (checklist numerado)

1. **Push a Git** — `dokploy/supabase/` debe estar en `main`.
2. **Generar secretos** — clonar Supabase oficial y ejecutar `utils/generate-keys.sh`.
3. **Crear app Compose en Dokploy** — nombre `agentbiz-supabase`, repo `agentbiz-ai-launchpad`, rama `main`, path `dokploy/supabase/docker-compose.yml`, root `dokploy/supabase`.
4. **Pegar variables** — copiar `.env.example` con secretos reales (ver tabla abajo).
5. **Dominio** — `agent-supabase.agentbiz.io` → servicio `kong`, puerto `8000`, HTTPS activo.
6. **DNS** — registro A `agent-supabase` → `2.25.74.63`.
7. **Deploy** — esperar contenedores healthy (~5–10 min primer arranque).
8. **Verificar API** — `curl` a `/auth/v1/health` y `/rest/v1/` con `apikey`.
9. **Studio** — abrir `https://agent-supabase.agentbiz.io/` (usuario/contraseña del dashboard).
10. **Migraciones SQL** — ejecutar `001`, `002`, `003` en orden (ver sección siguiente).
11. **Frontend** — en app `agentbiz-web`: `VITE_SUPABASE_URL` + `VITE_SUPABASE_PUBLISHABLE_KEY`, rebuild.

### 6. Wire AgentBiz frontend (separate Dokploy app)

In the **agentbiz.io** application build env:

```
VITE_SUPABASE_URL=https://agent-supabase.agentbiz.io
VITE_SUPABASE_PUBLISHABLE_KEY=<same ANON_KEY>
```

Rebuild and redeploy the marketing site after Supabase is live.

---

## Run AgentBiz database migrations

After Supabase is healthy, apply migrations from the repo root `supabase/migrations/` **in order**:

| Order | File | Purpose |
|-------|------|---------|
| 1 | `001_resource_leads.sql` | Resource download / ROI leads |
| 2 | `002_crm_sync.sql` | CRM sync columns and log |
| 3 | `003_internal_crm.sql` | Internal CRM tables and triggers |

> **Prerequisito:** `002` y `003` asumen que existe la tabla `public.applications` (formulario de empleo) y el bucket `cvs` en Storage. Si vienes de Supabase Cloud, expórtalas desde el proyecto anterior. Si es instalación nueva, créalas en Studio antes de ejecutar `002`.

**Tabla `applications` (mínimo):** columnas usadas por el frontend — `id`, `name`, `email`, `phone`, `position`, `experience`, `cover_letter`, `cv_url`, `cv_file_name`, `status`, `applied_at`, `reviewed_at`, `notes`. Habilitar RLS y políticas según tu modelo de auth.

### Option A — Studio SQL Editor

1. Open Studio (`https://agent-supabase.agentbiz.io/` or optional subdomain).
2. **SQL Editor** → New query.
3. Paste and run each file in order.

### Option B — psql via Supavisor (SSH to Dokploy server)

```bash
# From dokploy/supabase on the server, with POSTGRES_PASSWORD from env
docker exec -i agentbiz-db psql -U postgres -d postgres < /path/to/repo/supabase/migrations/001_resource_leads.sql
docker exec -i agentbiz-db psql -U postgres -d postgres < /path/to/repo/supabase/migrations/002_crm_sync.sql
docker exec -i agentbiz-db psql -u postgres -d postgres < /path/to/repo/supabase/migrations/003_internal_crm.sql
```

Or copy migration files into the container first:

```bash
docker cp ../../supabase/migrations/001_resource_leads.sql agentbiz-db:/tmp/
docker exec agentbiz-db psql -U postgres -d postgres -f /tmp/001_resource_leads.sql
# repeat for 002, 003
```

### Option C — Supabase CLI (remote)

```bash
supabase db push --db-url "postgresql://postgres:PASSWORD@2.25.74.63:5432/postgres"
```

> Only expose Postgres port `5432` temporarily or use an SSH tunnel; do not leave it open on the public internet.

---

## Edge Functions (optional)

Repo functions live in `supabase/functions/` (e.g. `crm-sync`). To run them on self-hosted:

1. Copy function folders into `dokploy/supabase/volumes/functions/`:

   ```bash
   cp -r supabase/functions/crm-sync dokploy/supabase/volumes/functions/
   cp -r supabase/functions/_shared dokploy/supabase/volumes/functions/
   ```

2. Redeploy the Compose stack (or restart `functions` service).
3. Configure database webhooks per `supabase/CRM_SETUP.txt`.

---

## Volumes and persistence

| Volume path | Persists |
|-------------|----------|
| `volumes/db/data/` | PostgreSQL data (critical — back up regularly) |
| `volumes/storage/` | Uploaded files (Storage API) |
| `volumes/functions/` | Edge function source |
| `volumes/snippets/` | Studio SQL snippets |

Empty dirs use `.gitkeep`; Postgres creates `db/data` on first run.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Kong unhealthy | Ensure `volumes/api/kong.yml` exists; run `bootstrap-volumes.sh` |
| Auth redirect errors | Check `SITE_URL` and `ADDITIONAL_REDIRECT_URLS` match `agentbiz.io` |
| Frontend auth fails | Rebuild site with `VITE_SUPABASE_URL=https://agent-supabase.agentbiz.io` |
| CORS errors | `SUPABASE_PUBLIC_URL` must match the domain browsers call |
| Realtime won't connect | Kong must route to Docker service `realtime` (not hardcoded Momo hostnames) |
| Analytics / vector unhealthy | Ensure `volumes/logs/vector.yml` exists and `COMPOSE_PROFILES=logs` is set if you intentionally enabled logs |
| SSL self-signed on `agent-supabase` | Enable Let's Encrypt in Dokploy Domains (do not use raw IP) |
| Storage won't start | Wait for `db` + `rest` + `imgproxy` healthy; check `docker logs agentbiz-storage` |
| Pooler won't start | Ensure `SECRET_KEY_BASE`, `VAULT_ENC_KEY`, and `analytics` are healthy; check port 5432 not already in use on host |

---

## Upstream reference

- [Self-hosting with Docker](https://supabase.com/docs/guides/self-hosting/docker)
- [Official compose + volumes](https://github.com/supabase/supabase/tree/master/docker)
- [AgentBiz site deploy guide](../../docs/DOKPLOY.md)
