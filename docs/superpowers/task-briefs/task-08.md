### Task 8: Port Admin UI to App Router

**Files:**
- Create: `app/admin/layout.tsx`, `app/admin/page.tsx`, `app/admin/login/page.tsx`
- Port: logic from `src/pages/Admin.tsx` and related components under `src/components/**` (import from shared `components/`)

**Interfaces:**
- Unauthenticated `/admin` → redirect `/admin/login`
- Login form → Better Auth email/password → `/admin`

- [ ] **Step 1: Login page + session gate layout**
- [ ] **Step 2: Port tabs/lists; wire CV download to `/api/admin/applications/[id]/cv`
- [ ] **Step 3: Manual test login, list, download CV

