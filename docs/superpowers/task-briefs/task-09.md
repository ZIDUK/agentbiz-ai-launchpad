### Task 9: Port marketing routes + Jarvis home

**Files:**
- Create: `app/**/page.tsx` for every path in `src/SiteRoutes.tsx`
- Move/reuse: `poc/scroll-experience/*` into client components under `components/scroll-home/` or `components/jarvis/`
- Modify: `app/page.tsx` to render Jarvis shell
- Update: sitemap script for Next if needed (`scripts/generate-sitemap.mjs`)

**Route checklist (must all resolve):**

`/`, `/services`, `/services/[slug]`, `/careers`, `/resources`, `/resources/[slug]`, `/ai-roi-calculator`, `/executive-briefing`, `/industries`, `/industries/[slug]`, case-study paths, `/thank-you/[type]`, `/engagement`, `/engagement/[slug]`, `/insights`, `/insights/[slug]`, `/trainings`, `/trainings/[slug]`, `/trainings/[slug]/enroll`, `/about`, `/privacy`, `/terms`, `/admin/*`, not-found

- [ ] **Step 1: Create thin App Router wrappers that reuse existing page components** (client import of old pages is acceptable transitional pattern)

Example:

```tsx
// app/about/page.tsx
"use client";
export { default } from "@/src/pages/About";
```

Prefer relocating pages under `components/pages/` over long-term `src/pages` imports — do relocation as part of this task when an import breaks under RSC rules.

- [ ] **Step 2: Home = Jarvis `ScrollHomeShell` + providers from `PocProviders`**
- [ ] **Step 3: Fix `"use client"` boundaries for Three/gsap/Lenis**
- [ ] **Step 4: Crawl checklist with `curl -o /dev/null -w "%{http_code}"` each path — expect 200**

