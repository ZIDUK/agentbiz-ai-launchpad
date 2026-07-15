# Task 11 Report — Hardening + remove Supabase deps

**Date:** 2026-07-15  
**Branch:** `feat/next-sqlite-cutover`  
**Worktree:** `.worktrees/next-sqlite-cutover`  
**Commits:** None (per task instructions)

## Status: DONE

## Summary

Added security headers (CSP + standard hardening) via `middleware.ts` and `next.config.ts`, origin/referer allowlist for mutating `/api/*` requests, removed `@supabase/supabase-js` and unused `src/integrations/supabase/**`, switched default npm scripts to Next, and updated README/DEPLOYMENT/ops docs.

## What changed

| File | Change |
|------|--------|
| `lib/security.ts` | CSP, security headers, origin allowlist helpers |
| `middleware.ts` | Apply headers; block cross-origin API mutations in production |
| `next.config.ts` | Duplicate headers on all routes (static + dynamic) |
| `lib/auth.ts` | Export `getEmailPasswordConfig()` for testability |
| `package.json` | Default `dev`/`build`/`start`/`preview` → Next; remove Supabase dep |
| `package-lock.json` | Regenerated after Supabase removal |
| `Dockerfile` | `npm run build` (was `build:next`) |
| `src/integrations/supabase/*` | **Deleted** (unused) |
| `src/components/admin/LeadsManagement.tsx` | Remove Supabase empty-state copy |
| `dokploy/supabase/README.md` | Archive notice (folder kept until human confirms delete) |
| `README.md`, `DEPLOYMENT.md` | Next + SQLite stack, ops doc links |
| `docs/ops/dokploy-next-cutover.md` | `npm run build` wording |
| `tests/security.test.ts` | Headers, origin allowlist, signup-disabled asserts |

### Left unchanged (by design)

- `dokploy/supabase/` compose tree — archived, not deleted
- `supabase/migrations/`, `supabase/functions/` — historical reference only
- Rate limit logic in route handlers (already present from Task 4/5)
- CV auth guard (already 401 without session from Task 6)

## Security checklist

| Item | Result |
|------|--------|
| CSP + `X-Content-Type-Options: nosniff` + `Referrer-Policy` + `X-Frame-Options: DENY` | **PASS** — `getSecurityHeaders()` + middleware + next.config |
| Rate limit burst POST → 429 | **PASS** — `tests/leads-api.test.ts` (existing) |
| Production signup disabled | **PASS** — `tests/security.test.ts` + `getEmailPasswordConfig()` |
| CV without session → 401 | **PASS** — `tests/admin-api.test.ts` (existing) |
| Build/run without `VITE_SUPABASE_*` | **PASS** — build with vars unset; no runtime imports |
| Rotate secrets pasted in chat | **HUMAN ACTION** — rotate `BETTER_AUTH_SECRET` and any Supabase keys if ever exposed in chat/logs |

## CSP looseness (documented)

Production CSP intentionally allows:

- `script-src 'unsafe-inline' 'unsafe-eval'` — Next.js hydration chunks; Three.js/Jarvis may require eval in some builds
- `style-src 'unsafe-inline'` — Tailwind and component inline styles
- `img-src data: blob:` / `worker-src blob:` — Three.js textures and workers

Tightening (nonces/hashes) can follow once Jarvis is verified under stricter policy.

## Verification

### `npm test`

```
Test Files  7 passed (7)
     Tests  40 passed (40)
```

### `npm run build` (no Supabase env)

**PASS** — 33+ routes, middleware 34.5 kB, standalone output.

## Concerns / follow-ups

1. **Origin check in production** — Requests with no `Origin`/`Referer` are rejected on mutating API calls; legitimate server-to-server integrations would need an allowlist extension.
2. **CSP** — Monitor browser console on home/Jarvis after deploy; tighten if `unsafe-eval` proves unnecessary.
3. **`dokploy/supabase/`** — Safe to delete after human confirms no rollback to self-hosted Supabase.
4. **Secrets rotation** — Human must rotate any credentials previously shared in agent chat.

## Next steps (human)

- Deploy from this branch; smoke-test Jarvis + admin forms under production CSP
- Confirm deletion of `dokploy/supabase/` when ready
- Rotate exposed secrets
