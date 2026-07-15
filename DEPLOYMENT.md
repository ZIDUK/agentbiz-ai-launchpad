# Deployment — AgentBiz (Next.js + SQLite)

Production runs a **single Next.js standalone container** on Dokploy (port **3000**), with SQLite and CV files on a `/data` volume. The former Vite + nginx + Supabase stack is retired.

## Quick reference

| Item | Value |
|------|-------|
| Build | `npm run build` (Dockerfile default) |
| Runtime | `node server.js` |
| Port | **3000** |
| Data | `/data/agentbiz.sqlite`, `/data/cvs` |
| Health | `GET /api/health` → `{"ok":true}` |

## Environment (runtime)

| Variable | Required |
|----------|----------|
| `DATABASE_PATH` | Yes — e.g. `/data/agentbiz.sqlite` |
| `CV_DIR` | Yes — e.g. `/data/cvs` |
| `BETTER_AUTH_SECRET` | Yes — ≥32 chars |
| `BETTER_AUTH_URL` | Yes — public origin |
| `NEXT_PUBLIC_APP_URL` | Yes — same as auth URL |
| `NODE_ENV` | `production` in image |

Do **not** set `VITE_SUPABASE_*` for this stack.

## Docs

- [Dokploy cutover checklist](docs/ops/dokploy-next-cutover.md)
- [SQLite backup & restore](docs/ops/sqlite-backup.md)
- [Dokploy setup details](docs/DOKPLOY.md)

## Local smoke

```bash
npm install
npm run build
npm start
curl -s http://127.0.0.1:3000/api/health
```

## Security (production)

- Security headers + CSP via `middleware.ts` / `next.config.ts`
- Origin allowlist on mutating `/api/*` requests
- Rate limits on public POST endpoints
- Admin signup disabled when `NODE_ENV=production`
- CV downloads require authenticated admin session

## Legacy

GitHub Pages + Vite deployment docs in git history. Use `npm run build:classic` only if you need the old static SPA locally.

---

For support: [contacto@agentbiz.io](mailto:contacto@agentbiz.io)
