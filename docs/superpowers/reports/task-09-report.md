# Task 09 Report — Port marketing routes + Jarvis home

**Date:** 2026-07-15  
**Branch:** `feat/next-sqlite-cutover`  
**Worktree:** `.worktrees/next-sqlite-cutover`  
**Commits:** None (per task instructions)

## Summary

Ported all `SiteRoutes.tsx` marketing paths to Next.js App Router under `app/(marketing)/`, wired Jarvis `ScrollHomeShell` at `/`, added `react-router-dom` compatibility shim for existing page components, and kept admin routes unchanged.

## What changed

### Routes (25 marketing wrappers + home + not-found)

- `app/(marketing)/layout.tsx` — `MarketingProviders` (QueryClient, i18n, tooltips, toasters, SEO, analytics, cookie consent)
- `app/(marketing)/page.tsx` — Jarvis home via dynamic `ScrollHomeShell` (`ssr: false`) + `PocThemeProvider` + `poc-scroll.css`
- `app/(marketing)/**/page.tsx` — thin `"use client"` re-exports of `src/pages/*` for every checklist route
- `app/not-found.tsx` — ported `NotFound` with providers

### Infrastructure

- `lib/react-router-shim.tsx` — maps `Link`, `useNavigate`, `useParams`, `useLocation`, `useSearchParams` to Next navigation (webpack alias replaces `react-router-dom` in Next builds only)
- `src/components/marketing/MarketingProviders.tsx` — shared client providers (extracted from POC `PocProviders`, without `BrowserRouter`)
- `next.config.ts` — aliases for `@/components`, `@/pages`, `@/i18n`, `@/data`, `@/assets`, marketing `@/lib/*` modules, `react-router-dom` shim
- `tsconfig.next.json` — includes `src/pages`, `src/i18n`, `src/data`, `poc/scroll-experience`, `types/`
- `types/next-globals.d.ts` — Calendly, asset modules, `ImportMeta.env`
- Minor fixes: `ScrollBackground.tsx` ref typing, `site-config.ts` SSR-safe GA id, `useTranslation.ts` locale cast

### Unchanged

- `scripts/generate-sitemap.mjs` — already driven by `seo-routes.mjs` (paths match SiteRoutes); no edit required
- Admin `app/admin/*` — intact
- Vite POC entry (`poc/scroll-experience/main.tsx`, `PocProviders`) — excluded from Next TS compile

## Verification

### `npm test`

```
Test Files  6 passed (6)
     Tests  30 passed (30)
```

### `npm run build:next`

**PASS** — 33 static/dynamic app routes generated (marketing + admin + API).

### Curl checklist (`next start` on :3010)

| Path | HTTP |
|------|------|
| `/` | 200 |
| `/services` | 200 |
| `/services/ai-code-review` | 200 |
| `/careers` | 200 |
| `/resources` | 200 |
| `/resources/enterprise-ai-roadmap` | 200 |
| `/ai-roi-calculator` | 200 |
| `/executive-briefing` | 200 |
| `/industries` | 200 |
| `/industries/fintech` | 200 |
| `/case-studies/enterprise-ops-automation` | 200 |
| `/case-studies/healthcare-prior-auth` | 200 |
| `/thank-you/contact` | 200 |
| `/engagement` | 200 |
| `/engagement/project-based-development` | 200 |
| `/insights` | 200 |
| `/insights/why-enterprise-ai-pilots-fail` | 200 |
| `/trainings` | 200 |
| `/trainings/ai-for-operations-leaders` | 200 |
| `/trainings/ai-for-operations-leaders/enroll` | 200 |
| `/about` | 200 |
| `/privacy` | 200 |
| `/terms` | 200 |
| `/admin/login` | 200 |
| `/nonexistent-page-xyz` | 404 (expected) |

## Concerns / follow-ups

1. **Transitional architecture** — Marketing pages still live in `src/pages/` and depend on `react-router-shim`; long-term relocation to `components/pages/` and native `next/link` is follow-up cleanup.
2. **Dual `@/lib` namespaces** — Next webpack aliases route marketing analytics/SEO to `src/lib/*`; server code uses root `lib/*`. Document for future contributors.
3. **Jarvis bundle** — Home loads Three/GSAP/Lenis client-only; first paint is lightweight shell until `SphereScene` hydrates.
4. **Better Auth build warnings** — `BETTER_AUTH_SECRET` / `BETTER_AUTH_URL` unset during build (pre-existing); set in production env.
5. **Dynamic routes** — `[slug]`/`[type]` pages are server-rendered on demand; invalid slugs render in-page `NotFound` (200 with 404 UI) rather than HTTP 404 — matches Vite behavior.
