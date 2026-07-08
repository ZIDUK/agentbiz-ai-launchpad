# AgentBiz — Scroll Experience (production home)

The marketing site home uses a scroll-driven Jarvis-style shell (Lenis + GSAP + Canvas + Three.js). All other routes render standard pages.

## Run locally

```bash
npm run dev
```

Open **http://localhost:5174**

Legacy Vite entry (classic home, no scroll shell):

```bash
npm run dev:classic   # http://localhost:5173
```

## Build & preview

```bash
npm run build
npm run preview
```

Output: `dist/` (same path used by Dockerfile and Dokploy).

## Environment variables (build time)

| Variable | Required | Purpose |
|----------|----------|---------|
| `VITE_SUPABASE_URL` | Yes | Contact forms, leads |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Yes | Supabase anon key |
| `VITE_GA_MEASUREMENT_ID` | No | Google Analytics |

## Deploy

Uses the repo `Dockerfile` (`npm run build` → nginx). See `docs/DOKPLOY.md`.

## Architecture

| Path | Role |
|------|------|
| `ScrollHomeShell.tsx` | Jarvis visuals + production home sections (`/`) |
| `ScrollPocApp.tsx` | Full site routing via `src/SiteRoutes.tsx` |
| `ProductionHomePreview.tsx` | Home page sections (same as `Index.tsx`) |
| `journey-acts.ts` | Scroll chapter presets for background motion |
| `poc-scroll.css` | Dark/light overrides for home shell |

Inner routes (`/services`, `/careers`, …) use standard page components without the scroll canvas.
