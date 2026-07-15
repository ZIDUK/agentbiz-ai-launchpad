# Task 08 Report: Port Admin UI to App Router

**Date:** 2026-07-15  
**Branch:** `feat/next-sqlite-cutover`  
**Status:** DONE

## Summary

Ported the Vite/React Router admin panel to Next.js App Router under `app/admin/`, reusing existing `src/components/admin/*` client components with session gating via Better Auth and `next/link` navigation.

## Changes

### Path aliases (Next)

- `tsconfig.next.json`: `@/components/*` → `src/components/*`; `@/lib/*` → `lib/*`; `@/hooks/*` → `hooks/*` + `src/hooks/*`; included `src/components` and `src/hooks` in compile scope.
- `next.config.ts`: webpack + turbopack alias for `@/components` → `src/components`.
- Added `lib/utils.ts` (`cn` helper) so shadcn UI components resolve under Next's root `lib/` mapping.

### Admin App Router pages

| Route | File | Notes |
|-------|------|-------|
| `/admin` | `app/admin/page.tsx` | Server redirect → `/admin/crm` |
| `/admin/login` | `app/admin/login/page.tsx` | Email/password login; no signup toggle |
| `/admin/crm` | `app/admin/crm/page.tsx` | `CrmManagement` |
| `/admin/applications` | `app/admin/applications/page.tsx` | `ApplicationsManagement` |
| `/admin/leads` | `app/admin/leads/page.tsx` | `LeadsManagement` |
| `/admin/settings` | `app/admin/settings/page.tsx` | `Settings` |
| `/admin/dashboard` | `app/admin/dashboard/page.tsx` | `Dashboard` |

### Layout & auth gate

- `app/admin/layout.tsx` — `robots: { index: false, follow: false }` metadata.
- `app/admin/AdminLayoutClient.tsx` — client shell: skips gate on `/admin/login`; redirects unauthenticated users; renders `AppSidebarNext` + `AdminHeader` + Sonner toasts.

### Navigation

- **New:** `src/components/admin/AppSidebarNext.tsx` — `next/link` + `usePathname` (Vite `AppSidebar.tsx` unchanged for legacy stack).
- **Updated:** `AdminHeader` — optional `onLogout` callback for Next redirect after sign-out.

### CV downloads

- `lib/applications.ts` already maps `cv_url` → `/api/admin/applications/{id}/cv`.
- **Updated:** `ApplicationsManagement.downloadCV` uses `fetch(..., { credentials: "include" })` + blob download for cookie-authenticated CV stream.

### Build hygiene (pre-existing issues surfaced by `build:next`)

- `lib/cv-storage.ts` — regex lint + `File | Buffer` type narrowing.
- `lib/crm-service.ts` — optional chaining on `existing?.phone`.
- `LeadsManagement.tsx` — added missing `training_enrollment` source label.

## Verification

| Check | Result |
|-------|--------|
| `npm test` | **30/30 passed** |
| `npm run build:next` | **Success** — all admin routes listed in build output |
| Manual login flow | Not run (optional); build confirms client bundles compile |

### Build warnings (non-blocking)

- Better Auth: `BETTER_AUTH_SECRET` / `BETTER_AUTH_URL` warnings during static generation (`.env` present locally but secrets may be dev defaults at build time).
- ESLint: `react-refresh/only-export-components` on `app/admin/layout.tsx` (metadata + component export).

## Self-review

- No React Router `Routes` in Next admin paths.
- Login is a dedicated page; protected routes redirect to `/admin/login`.
- Vite admin at `src/pages/Admin.tsx` left intact (Task 10 cutover).
- No commits made per task constraints.

## Concerns / follow-ups

1. **Dual sidebars:** `AppSidebar` (react-router) vs `AppSidebarNext` (next/link) — consolidate at Task 10 Vite removal.
2. **Auth env at build:** Ensure production Dokploy sets `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `NEXT_PUBLIC_APP_URL`.
3. **Dashboard data:** `Dashboard` component still uses static mock stats (unchanged from Vite).

## Commits

None (per task instructions).
