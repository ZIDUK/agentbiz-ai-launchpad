### Task 1: Next.js scaffold + health route

**Files:**
- Create: `next.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/api/health/route.ts`, `tsconfig.next.json` (or update root `tsconfig.json`), `vitest.config.ts`
- Modify: `package.json` (scripts + deps)
- Test: `tests/health.test.ts`

**Interfaces:**
- Produces: `GET /api/health` → `{ ok: true }`
- Produces: scripts `dev:next`, `build:next`, `start:next`, `test`

- [ ] **Step 1: Write failing health test**

```ts
// tests/health.test.ts
import { GET } from "@/app/api/health/route";
import { describe, expect, it } from "vitest";

describe("GET /api/health", () => {
  it("returns ok", async () => {
    const res = await GET();
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });
  });
});
```

- [ ] **Step 2: Run test — expect FAIL (module missing)**

```bash
npx vitest run tests/health.test.ts
```

Expected: FAIL cannot find module `@/app/api/health/route`

- [ ] **Step 3: Install Next and wire scripts**

```bash
npm install next@15 react@18 react-dom@18
npm install -D vitest @vitejs/plugin-react
```

Update `package.json` scripts (keep existing Vite scripts temporarily):

```json
{
  "scripts": {
    "dev:next": "next dev",
    "build:next": "next build",
    "start:next": "next start",
    "test": "vitest run"
  }
}
```

- [ ] **Step 4: Add next.config + App Router stubs**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
```

```ts
// app/api/health/route.ts
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ ok: true });
}
```

```tsx
// app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx
export default function HomePage() {
  return <main>AgentBiz</main>;
}
```

Copy Tailwind entry into `app/globals.css` from `src/index.css` (minimum `@tailwind` directives). Point `tsconfig` paths `@/*` to project root covering `app/` and `lib/`.

- [ ] **Step 5: Run test — expect PASS**

```bash
npx vitest run tests/health.test.ts
```

- [ ] **Step 6: Smoke `next dev`**

```bash
npm run dev:next
curl -s http://127.0.0.1:3000/api/health
```

Expected: `{"ok":true}`

---
