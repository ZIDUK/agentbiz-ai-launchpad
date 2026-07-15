# Task 10 Report — Docker standalone + Dokploy + backups doc

**Date:** 2026-07-15  
**Branch:** `feat/next-sqlite-cutover`  
**Worktree:** `.worktrees/next-sqlite-cutover`  
**Commits:** None (per task instructions)

## Status: DONE

## Summary

Replaced the Vite + nginx Dockerfile with a Next.js `standalone` multi-stage build (bookworm-slim + native build tools for `better-sqlite3`), updated `.dockerignore` for Next, confirmed `next.config.ts` already has `output: 'standalone'`, and added ops docs for SQLite backups and Dokploy cutover.

## What changed

| File | Change |
|------|--------|
| `Dockerfile` | Next standalone: `deps` → `builder` (`npm run build:next`) → `runner` (`node server.js` on :3000) |
| `.dockerignore` | Exclude `.next`, `.data`, `.worktrees`, `tests`, etc.; keep sources needed for build |
| `package-lock.json` | Regenerated on Linux so `npm ci` succeeds inside Docker (was macOS-only lock) |
| `docs/ops/sqlite-backup.md` | Daily backup of `/data/agentbiz.sqlite*` + `/data/cvs`; restore procedure; volume notes |
| `docs/ops/dokploy-next-cutover.md` | Port 3000, env vars, volume mount, migrate + seed one-shot, smoke checklist |

### Unchanged (verified)

- `next.config.ts` — already `output: "standalone"`, `serverExternalPackages: ["better-sqlite3"]`
- `public/` — favicons, og-image, sitemap, downloads copied via `COPY --from=builder /app/public`
- Jarvis assets — bundled via webpack from `src/` and `poc/` at build time (not served from `public/`)

## Verification

### `npm test`

```
Test Files  6 passed (6)
     Tests  30 passed (30)
```

(After `npm rebuild better-sqlite3` locally following Linux lockfile regen.)

### `docker build -t agentbiz-next .`

**PASS** — image builds in ~3 min; `npm run build:next` produces 33 routes.

### `docker run` + health

```bash
docker run -d --name agentbiz-next \
  -v agentbiz-data:/data -p 3000:3000 \
  -e BETTER_AUTH_SECRET='local-dev-secret-min-32-chars-long' \
  -e BETTER_AUTH_URL='http://127.0.0.1:3000' \
  -e NEXT_PUBLIC_APP_URL='http://127.0.0.1:3000' \
  agentbiz-next

curl -s http://127.0.0.1:3000/api/health
# {"ok":true}
```

### Migrate + seed (builder stage)

```bash
docker build -t agentbiz-next-builder --target builder .
docker run --rm -v agentbiz-data:/data -e DATABASE_PATH=/data/agentbiz.sqlite \
  agentbiz-next-builder npx drizzle-kit migrate
docker run --rm -v agentbiz-data:/data -e NODE_ENV=development ... \
  --entrypoint npx agentbiz-next-builder \
  tsx --tsconfig tsconfig.next.json scripts/seed-admin.ts
# Admin seeded: admin@example.com
```

## Human checklist (not executed here)

- [ ] **Step 3:** Dokploy — point domain to port **3000**, set env vars, mount `/data` volume
- [ ] **Step 5:** Smoke production URLs (health, form, admin login)
- [ ] **Step 6:** Stop/remove `agentbiz-supabase` on VPS

## Concerns

1. **`package-lock.json` regen** — Lock file was updated via Linux `npm install` so Docker `npm ci` works; developers on macOS may need `npm rebuild better-sqlite3` after pull.
2. **No auto-migrate in app** — Fresh volumes require `npx drizzle-kit migrate` before first request/seed (documented in cutover checklist).
3. **Build-time Better Auth warnings** — `next build` logs missing `BETTER_AUTH_*` env vars; runtime container must set them (expected).

## Next

Task 11 — hardening, remove Supabase deps, default scripts → Next.
