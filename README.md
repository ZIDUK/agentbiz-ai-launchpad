# 🚀 AgentBiz AI — Next.js + SQLite

Marketing site, Jarvis home, and admin panel on **Next.js 15** (App Router) with **SQLite**, **Better Auth**, and **Drizzle ORM**. Deployed as a Next `standalone` Docker container on Dokploy.

- **Live:** [https://agentbiz.io](https://agentbiz.io)
- **Admin:** [https://agentbiz.io/admin](https://agentbiz.io/admin)

## Stack

| Layer | Technology |
|-------|------------|
| App | Next.js 15, React 18, TypeScript |
| Data | SQLite (`better-sqlite3`) + Drizzle |
| Auth | Better Auth (admin only in production) |
| UI | Tailwind CSS, shadcn/ui |
| Tests | Vitest (API + security) |

Legacy Vite SPA scripts remain as `dev:classic` / `build:classic` for reference only.

## Local development

**Requirements:** Node.js 20.19+ (see `.nvmrc`)

```bash
npm install
cp .env.example .env   # set BETTER_AUTH_SECRET, DATABASE_PATH, etc.
npm run dev            # http://localhost:3000
```

Apply schema (first run):

```bash
npx drizzle-kit migrate
NODE_ENV=development npx tsx scripts/seed-admin.ts
```

### Commands

| Script | Purpose |
|--------|---------|
| `npm run dev` | Next dev server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm test` | Vitest suite |
| `npm run dev:classic` | Legacy Vite dev (optional) |

## Deployment

Production uses the repo **Dockerfile** (Next standalone, port **3000**, volume at `/data`).

- **Cutover checklist:** [docs/ops/dokploy-next-cutover.md](docs/ops/dokploy-next-cutover.md)
- **Backups:** [docs/ops/sqlite-backup.md](docs/ops/sqlite-backup.md)
- **Dokploy overview:** [docs/DOKPLOY.md](docs/DOKPLOY.md)

No `VITE_SUPABASE_*` or Supabase runtime is required.

## Project layout

```
app/           Next.js routes (marketing + admin + API)
lib/           DB, auth, validation, security
src/           Shared React components (Jarvis, shadcn, pages)
drizzle/       SQL migrations
tests/         Vitest API and security tests
```

---

**AgentBiz AI** — private repository.
