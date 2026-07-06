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

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Blank admin / auth errors | Supabase env vars missing at build | Rebuild with build-time env vars set |
| 404 on page refresh | SPA routing not configured | Use Dockerfile + `nginx.conf`, or enable Static SPA |
| Old site still showing | DNS still points to GitHub Pages | Update A/CNAME records; flush DNS cache |
| Build fails on `npm ci` | Lockfile out of sync | Run `npm install` locally and commit `package-lock.json` |
| Assets 404 | Wrong base path | Keep `base: '/'` in `vite.config.ts` for `agentbiz.io` |

---

## Files added for Dokploy

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build (Node → nginx) |
| `nginx.conf` | SPA fallback + caching + security headers |
| `.dockerignore` | Faster, smaller Docker builds |
| `docs/DOKPLOY.md` | This guide |
