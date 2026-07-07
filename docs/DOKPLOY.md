# Deploying AgentBiz to Dokploy

This guide covers migrating the AgentBiz marketing site from GitHub Pages to [Dokploy](https://dokploy.com).

## Current stack (summary)

| Item | Value |
|------|-------|
| Framework | React 18 + Vite 5 (SPA, **not SSR**) |
| Router | React Router 6 (`BrowserRouter`) |
| Build output | `dist/` |
| Base path | `/` (custom domain root) |
| Current CI | GitHub Actions → GitHub Pages on push to `main` |
| Backend | Supabase (client-side SDK; no server runtime) |

### Build-time environment variables

Vite bakes these into the JS bundle at **build time**. They must be set in Dokploy with **Available at build time** enabled.

| Variable | Required | Purpose |
|----------|----------|---------|
| `VITE_SUPABASE_URL` | Yes | Supabase project URL (auth, CRM, leads, storage) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Yes | Supabase anon/public key |
| `VITE_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID |

> **Note:** The GitHub Actions workflow still references legacy Firebase secrets (`VITE_FIREBASE_*`, `VITE_ADMIN_EMAILS`). The app code no longer uses them — Supabase replaced Firebase. Copy the Supabase values from your Supabase dashboard instead.

### GitHub Pages–specific artifacts (not needed on Dokploy)

- `public/404.html` — spa-github-pages redirect
- SPA redirect script in `index.html` (lines 16–37)

These are harmless on Dokploy/nginx but unnecessary once nginx serves the SPA with `try_files`. You can remove them later if you fully decommission GitHub Pages.

---

## Recommended approach: Dockerfile

Use the repo's multi-stage **Dockerfile** (Node build → nginx serve). This gives you:

- SPA routing via `nginx.conf` (`try_files … /index.html`)
- Build-time env vars for Supabase/GA
- Predictable production image (no Nixpacks guesswork)

**Alternative:** Dokploy's **Static** build type also works (`publishDirectory: dist`, enable **Static SPA**). Use that if you prefer zero Docker maintenance; still set build-time env vars the same way.

---

## Dokploy setup (step by step)

### 1. Prepare the server

1. Install Dokploy on your VPS ([install docs](https://docs.dokploy.com/docs/core/installation)).
2. Ensure ports **80** and **443** are open on the firewall.

### 2. Create the application

1. Open the Dokploy dashboard → **Projects** → create or select a project (e.g. `agentbiz`).
2. **Create Application** → connect your Git provider.
3. Select repository: `ZIDUK/agentbiz-ai-launchpad` (or your fork).
4. Branch: `main` (or your deploy branch).

### 3. Configure build

> **Important:** Dokploy defaults to **Nixpacks** or **Railpack**. You must explicitly select **Dockerfile** — the presence of a `Dockerfile` in the repo does not change the default.

| Setting | Value |
|---------|-------|
| **Build type** | `Dockerfile` |
| **Dockerfile path** | `Dockerfile` |
| **Docker context** | `.` |
| **Docker build stage** | `production` (optional; defaults to final stage) |

If using **Static** instead:

| Setting | Value |
|---------|-------|
| **Build type** | `Static` |
| **Build command** | `npm ci && npm run build` |
| **Publish directory** | `dist` |
| **Static SPA** | ✅ Enabled |

### 4. Environment variables

Go to **Environment** and add:

```
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJ...
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

For each variable, enable **Available at build time** (required for Vite).

### 5. Domain & SSL

1. Go to **Domains** → **Add Domain**.
2. Hostname: `agentbiz.io` (and optionally `www.agentbiz.io`).
3. Container port: **80**.
4. Enable **HTTPS** / Let's Encrypt in Dokploy.
5. Update DNS at your registrar:

   | Type | Name | Value |
   |------|------|-------|
   | A | `@` | Your Dokploy server IP |
   | A or CNAME | `www` | Same IP or `agentbiz.io` |

6. Wait for DNS propagation, then confirm the certificate is issued in Dokploy.

### 6. Deploy

1. Click **Deploy** (or push to `main` if auto-deploy is enabled).
2. Watch build logs for `npm run build` success.
3. Verify:
   - https://agentbiz.io loads
   - Deep links work (e.g. `/services`, `/admin`, `/trainings`)
   - Admin login and Supabase features work
   - Forms (leads, enrollments) submit correctly

### 7. Cut over from GitHub Pages

1. Deploy and test on Dokploy first (use a staging subdomain if needed).
2. Point `agentbiz.io` DNS from GitHub Pages to Dokploy (step 5).
3. Disable GitHub Pages in repo **Settings → Pages**, or disable `.github/workflows/deploy.yml` (delete the `push` trigger or disable the workflow) to avoid double deploys.
4. Remove GitHub Pages CNAME/DNS records pointing to `*.github.io`.

---

## Local verification

Build and run the Docker image locally:

```bash
docker build \
  --build-arg VITE_SUPABASE_URL="https://YOUR_PROJECT.supabase.co" \
  --build-arg VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-key" \
  --build-arg VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX" \
  -t agentbiz-web .

docker run --rm -p 8080:80 agentbiz-web
```

Open http://localhost:8080 and test SPA routes (refresh on `/services` should not 404).

---

## Troubleshooting

### Logs show Caddy / HTTP 502

**Symptom:** Container logs mention **Caddy** (or Railpack/Nixpacks build output), not **nginx**. `curl -I https://agentbiz.io` returns `HTTP/2 502`.

**Root cause:** Dokploy's default build type is **Nixpacks** or **Railpack**, not your repo `Dockerfile`. Those builders auto-detect the Node/Vite app and run **Caddy** (often on a non-80 port). Dokploy's reverse proxy forwards to **container port 80** (configured on the domain). Nothing listens on 80 → **502 Bad Gateway**.

> **Repo-level config:** Dokploy does **not** read a `dokploy.json` or similar file from the repo on deploy. Build type is stored in Dokploy's database and must be set in the **UI** (or via the `application.saveBuildType` API). Having a `Dockerfile` in the repo does **not** auto-switch the build type.

#### Fix in Dokploy UI (do this before redeploying)

1. Open Dokploy dashboard → **Projects** → your project (e.g. `agentbiz`) → application **`agentbiz-web`**.
2. Go to the **Build** (or **General** → Build) tab.
3. Set **Build type** to **`Dockerfile`** (not Nixpacks, Railpack, or Static).
4. Set **Dockerfile path** to `Dockerfile`.
5. Set **Docker context path** to `.` (dot).
6. Set **Docker build stage** to `production` (optional; matches the final stage in the Dockerfile).
7. Go to **Environment** → confirm `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, and optionally `VITE_GA_MEASUREMENT_ID` are set with **Available at build time** enabled for each.
8. Go to **Domains** → edit `agentbiz.io` (and `www` if used) → set **Container port** to **`80`** → save.
9. Click **Deploy** and watch build logs. You should see `docker build` / `npm run build`, then the production stage `FROM nginx:1.27-alpine` — **not** Caddy or Nixpacks/Railpack output.
10. If the app was created with the wrong build type and settings do not stick, **delete the application** and recreate it: on step 3 of [Dokploy setup](#3-configure-build), choose **Dockerfile** before the first deploy.

#### Verify after redeploy

On your machine:

```bash
# Should be 200, not 502; Server header often shows nginx
curl -sI https://agentbiz.io | head -5

# SPA deep link should return 200 (nginx try_files → index.html)
curl -sI https://agentbiz.io/services | head -3
```

On the Dokploy server (SSH to `2.25.74.63`):

```bash
# Container should be nginx, not caddy
docker logs agentbiz-web 2>&1 | tail -20

# Should show nginx listening on 0.0.0.0:80 inside the container
docker exec agentbiz-web wget -qO- http://127.0.0.1/ | head -5
```

Expected build-log signals: `Step N/N : FROM nginx:1.27-alpine AS production`, `npm run build`, no `Caddy` or `railpack`/`nixpacks` builder lines.

---

### Console: `supabaseUrl is required`

**Symptom:** Browser console shows `Uncaught Error: supabaseUrl is required.` The site loads (nginx 200) but admin login, forms, and other Supabase features fail.

**Root cause:** `VITE_SUPABASE_URL` was not baked into the JS bundle at build time. Vite replaces `import.meta.env.VITE_*` only during `npm run build`; runtime env vars in Dokploy do not affect an already-built SPA.

#### Fix in Dokploy UI

1. Open Dokploy → **Projects** → your project → application (e.g. `agentbiz-web`).
2. Go to **Environment**.
3. Add or edit:
   - `VITE_SUPABASE_URL` = `https://agent-supabase.agentbiz.io` (no trailing slash)
   - `VITE_SUPABASE_PUBLISHABLE_KEY` = your Supabase **anon** key (from Supabase dashboard → Settings → API, or the `ANON_KEY` in your self-hosted Supabase env)
4. For **each** variable, enable **Available at build time** (toggle/checkbox).
5. Click **Deploy** to trigger a full rebuild (not just restart). Watch build logs for `npm run build`.
6. Hard-refresh the browser (or open a private window) and confirm the error is gone.

> **Note:** If you change env vars but only restart the container without redeploying, the old bundle still lacks the URL — you must rebuild.

---

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Logs show Caddy / 502 | Build type is Nixpacks/Railpack, not Dockerfile | See [Logs show Caddy / HTTP 502](#logs-show-caddy--http-502) above |
| Console: `supabaseUrl is required` | `VITE_SUPABASE_URL` missing at build time | See [Console: supabaseUrl is required](#console-supabaseurl-is-required) above |
| Blank admin / auth errors | Supabase env vars missing at build | Same as above — set both `VITE_SUPABASE_*` vars with **Available at build time**, then redeploy |
| 404 on page refresh | SPA routing not configured | Use Dockerfile + `nginx.conf`, or enable Static SPA |
| Old site still showing | DNS still points to GitHub Pages | Update A/CNAME records; flush DNS cache |
| Build fails on `npm ci` | Lockfile out of sync | Run `npm install` locally and commit `package-lock.json` |
| Assets 404 | Wrong base path | Keep `base: '/'` in `vite.config.ts` for `agentbiz.io` |

---

## Self-hosted Supabase on Dokploy

AgentBiz runs Supabase as a **separate Dokploy Compose app** (`agentbiz-supabase`), not the Dokploy Supabase template.

| Item | Value |
|------|-------|
| Compose app | `agentbiz-supabase` |
| Compose path | `dokploy/supabase/docker-compose.yml` |
| API / Studio (via Kong) | `https://agent-supabase.agentbiz.io` |
| Dokploy server | `2.25.74.63` |

**Full step-by-step guide:** [dokploy/supabase/README.md](../dokploy/supabase/README.md)

### Quick checklist

1. **Commit & push** `dokploy/supabase/` to `main` (Dokploy pulls from Git).
2. **Generate secrets** with Supabase `utils/generate-keys.sh`; paste into Dokploy Environment.
3. **Create Compose app** — root `dokploy/supabase`, compose file `docker-compose.yml`.
4. **Domain** — `agent-supabase.agentbiz.io` → service `kong`, port **8000**, enable **HTTPS / Let's Encrypt**.
5. **DNS** — A record `agent-supabase` → `2.25.74.63`.
6. **Deploy** — wait for all containers healthy (first boot: several minutes).
7. **Verify** — `curl https://agent-supabase.agentbiz.io/auth/v1/health`
8. **Studio** — open `https://agent-supabase.agentbiz.io/` (basic auth: `DASHBOARD_USERNAME` / `DASHBOARD_PASSWORD`).
9. **Migrations** — run `supabase/migrations/001_*.sql` → `003_*.sql` in SQL Editor (see README).
10. **Frontend** — set `VITE_SUPABASE_URL` + `VITE_SUPABASE_PUBLISHABLE_KEY` on `agentbiz-web`, rebuild.

### Critical env vars (Supabase Compose app)

| Variable | Example / notes |
|----------|-----------------|
| `CONTAINER_PREFIX` | `agentbiz` |
| `POSTGRES_PASSWORD` | strong secret |
| `JWT_SECRET` | ≥32 chars |
| `ANON_KEY` / `SERVICE_ROLE_KEY` | from `generate-keys.sh` |
| `DASHBOARD_USERNAME` / `DASHBOARD_PASSWORD` | Studio login via Kong |
| `SECRET_KEY_BASE` / `VAULT_ENC_KEY` | required for Realtime + pooler |
| `LOGFLARE_API_KEY` / `LOGFLARE_PUBLIC_ACCESS_TOKEN` | same generated value is fine |
| `SUPABASE_PUBLIC_URL` | `https://agent-supabase.agentbiz.io` |
| `API_EXTERNAL_URL` | `https://agent-supabase.agentbiz.io` |
| `SITE_URL` | `https://agentbiz.io` |
| `ADDITIONAL_REDIRECT_URLS` | `https://agentbiz.io/**`, admin paths |
| `DOCKER_SOCKET_LOCATION` | `/var/run/docker.sock` |

### SSL self-signed certificate

If the browser warns about a self-signed cert on `agent-supabase.agentbiz.io`, Dokploy is proxying without a valid Let's Encrypt cert. Fix in **Domains** → enable HTTPS → wait for certificate issuance → confirm DNS points to `2.25.74.63`.

### Wire frontend after Supabase is live

In the **agentbiz-web** app Environment (build-time):

```
VITE_SUPABASE_URL=https://agent-supabase.agentbiz.io
VITE_SUPABASE_PUBLISHABLE_KEY=<same as ANON_KEY>
```

Enable **Available at build time** for both, then **Deploy** (full rebuild).

---

## Files added for Dokploy

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build (Node → nginx) |
| `nginx.conf` | SPA fallback + caching + security headers |
| `.dockerignore` | Faster, smaller Docker builds |
| `docs/DOKPLOY.md` | This guide |
