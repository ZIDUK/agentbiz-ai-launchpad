# Next.js + SQLite Cutover Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace removed Supabase with a single Next.js App Router app using SQLite, Better Auth, and secure Route Handlers, then cut over marketing + Jarvis + admin from Vite.

**Architecture:** One Dokploy container runs Next `standalone`. Business data and auth live in SQLite under `/data`. CVs are files under `/data/cvs` streamed only to authenticated admins. Public POSTs are Zod-validated and rate-limited. No HubSpot/Pipedrive sync in v1.

**Tech Stack:** Next.js 15 App Router, React 18/19 as resolved by Next, Drizzle ORM + better-sqlite3, Better Auth, Zod, Tailwind + existing shadcn components, Vitest for API unit tests.

**Spec:** `docs/superpowers/specs/2026-07-15-next-sqlite-cutover-design.md`

## Global Constraints

- Minimum VPS RAM: one Node process + SQLite file volume; no Postgres/Supabase runtime.
- Security-first: httpOnly Secure cookies; `emailAndPassword.disableSignUp: true` in production; CVs never under `public/`; no stack traces to clients.
- Empty DB OK (no data restore).
- Skip external CRM sync.
- Route URL parity with `src/SiteRoutes.tsx`.
- Prefer small focused files; keep Jarvis/Three code as client components.
- Native module: `serverExternalPackages: ['better-sqlite3']` in `next.config.ts`.
- Commits: only when the human asks, unless they explicitly enable frequent commits for this plan execution.

## File map (create / ownership)

| Path | Responsibility |
|------|----------------|
| `app/layout.tsx`, `app/globals.css` | Root layout, fonts, global styles |
| `app/page.tsx` | Home (Jarvis later; stub first) |
| `app/api/health/route.ts` | Liveness |
| `app/api/auth/[...all]/route.ts` | Better Auth handler |
| `app/api/leads/route.ts` | Public lead capture |
| `app/api/applications/route.ts` | Public applications + CV upload |
| `app/api/admin/leads/route.ts` | Admin list leads |
| `app/api/admin/applications/route.ts` | Admin list/patch applications |
| `app/api/admin/applications/[id]/cv/route.ts` | Auth CV stream |
| `app/api/admin/crm/contacts/route.ts` | CRM contacts |
| `app/api/admin/crm/contacts/[id]/route.ts` | Patch contact |
| `app/api/admin/crm/contacts/[id]/activities/route.ts` | Activities |
| `lib/db/index.ts` | SQLite client + Drizzle |
| `lib/db/schema.ts` | Business + Better Auth tables |
| `lib/auth.ts` | Better Auth server |
| `lib/auth-client.ts` | Better Auth client |
| `lib/auth-guard.ts` | `requireAdminSession()` |
| `lib/rate-limit.ts` | In-memory IP rate limit |
| `lib/crm-service.ts` | Upsert contact + activity from lead/app |
| `lib/leads.ts` | Client fetch wrappers (replace Supabase) |
| `lib/applications.ts` | Client fetch wrappers |
| `lib/crm.ts` | Client admin fetch wrappers |
| `scripts/seed-admin.ts` | One-shot admin user |
| `drizzle.config.ts` | Drizzle Kit |
| `Dockerfile` | Multi-stage Next standalone |
| `vitest.config.ts`, `tests/**` | API tests |
| `middleware.ts` | Optional origin check + security headers helper |

Legacy Vite files (`vite*.config.ts`, `src/main.tsx`, nginx static) remain until Task 10 cutover verification, then remove or archive.

---

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

### Task 2: SQLite + Drizzle schema + WAL

**Files:**
- Create: `lib/db/schema.ts`, `lib/db/index.ts`, `drizzle.config.ts`, `drizzle/migrations/` (generated)
- Create: `tests/db-schema.test.ts`
- Modify: `package.json`

**Interfaces:**
- Produces: `getDb()` → Drizzle instance
- Produces: tables `resource_leads`, `applications`, `crm_contacts`, `crm_activities` + Better Auth tables (`user`, `session`, `account`, `verification`)
- Consumes: `process.env.DATABASE_PATH` default `.data/agentbiz.sqlite`

- [ ] **Step 1: Install DB packages**

```bash
npm install drizzle-orm better-sqlite3
npm install -D drizzle-kit @types/better-sqlite3
```

- [ ] **Step 2: Write failing test that inserts a lead**

```ts
// tests/db-schema.test.ts
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("resource_leads schema", () => {
  let dbPath: string;

  beforeEach(() => {
    dbPath = path.join(os.tmpdir(), `agentbiz-test-${Date.now()}.sqlite`);
    process.env.DATABASE_PATH = dbPath;
  });

  afterEach(() => {
    if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
  });

  it("inserts a resource lead", async () => {
    const { getDb, resourceLeads } = await import("@/lib/db");
    const db = getDb();
    const id = crypto.randomUUID();
    db.insert(resourceLeads)
      .values({
        id,
        name: "Ada",
        email: "ada@example.com",
        resourceSlug: "guide-1",
        source: "contact_form",
        metadata: "{}",
        createdAt: new Date().toISOString(),
      })
      .run();
    const row = db.select().from(resourceLeads).where(/* eq id */).get();
    expect(row?.email).toBe("ada@example.com");
  });
});
```

(Use `eq` from drizzle-orm in the real file.)

- [ ] **Step 3: Run — expect FAIL**

```bash
npx vitest run tests/db-schema.test.ts
```

- [ ] **Step 4: Implement schema + client**

```ts
// lib/db/schema.ts
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const resourceLeads = sqliteTable("resource_leads", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  resourceSlug: text("resource_slug").notNull(),
  source: text("source").notNull(),
  metadata: text("metadata").notNull().default("{}"),
  createdAt: text("created_at").notNull(),
});

export const applications = sqliteTable("applications", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  position: text("position").notNull(),
  experience: text("experience").notNull(),
  coverLetter: text("cover_letter").notNull().default(""),
  cvPath: text("cv_path"),
  cvFileName: text("cv_file_name"),
  status: text("status").notNull().default("pending"),
  appliedAt: text("applied_at").notNull(),
  reviewedAt: text("reviewed_at"),
  notes: text("notes"),
});

export const crmContacts = sqliteTable("crm_contacts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  company: text("company"),
  phone: text("phone"),
  stage: text("stage").notNull().default("new"),
  contactType: text("contact_type").notNull().default("prospect"),
  priority: text("priority").notNull().default("normal"),
  notes: text("notes").notNull().default(""),
  lastActivityAt: text("last_activity_at").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const crmActivities = sqliteTable("crm_activities", {
  id: text("id").primaryKey(),
  contactId: text("contact_id")
    .notNull()
    .references(() => crmContacts.id, { onDelete: "cascade" }),
  activityType: text("activity_type").notNull(),
  content: text("content").notNull().default(""),
  metadata: text("metadata").notNull().default("{}"),
  createdAt: text("created_at").notNull(),
});

// Better Auth core tables — keep column names aligned with Better Auth drizzle schema
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull().default(false),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", { mode: "timestamp" }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", { mode: "timestamp" }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});
```

```ts
// lib/db/index.ts
import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (_db) return _db;
  const dbPath = process.env.DATABASE_PATH ?? path.join(process.cwd(), ".data", "agentbiz.sqlite");
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const sqlite = new Database(dbPath);
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");
  _db = drizzle(sqlite, { schema });
  return _db;
}

export * from "./schema";
```

```ts
// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_PATH ?? "./.data/agentbiz.sqlite",
  },
});
```

Run:

```bash
mkdir -p .data
npx drizzle-kit generate
npx drizzle-kit migrate
```

Add `.data/` to `.gitignore`. Export `resourceLeads` etc. from `@/lib/db`.

- [ ] **Step 5: Fix test import/`eq`, run PASS**

```bash
npx vitest run tests/db-schema.test.ts
```

---

### Task 3: Better Auth + disable public signup + seed admin

**Files:**
- Create: `lib/auth.ts`, `lib/auth-client.ts`, `app/api/auth/[...all]/route.ts`, `scripts/seed-admin.ts`, `lib/auth-guard.ts`
- Create: `tests/auth-guard.test.ts`
- Modify: `.env.example`

**Interfaces:**
- Produces: `auth` (Better Auth instance), `authClient`, `requireAdminSession(request: Request): Promise<Session>`
- Produces: `POST/GET /api/auth/*`
- Consumes: `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`

- [ ] **Step 1: Install Better Auth**

```bash
npm install better-auth
```

- [ ] **Step 2: Implement auth server with signup disabled in production**

```ts
// lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb, user, session, account, verification } from "@/lib/db";

export const auth = betterAuth({
  database: drizzleAdapter(getDb(), {
    provider: "sqlite",
    schema: { user, session, account, verification },
  }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: process.env.NODE_ENV === "production",
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
});
```

```ts
// app/api/auth/[...all]/route.ts
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

```ts
// lib/auth-client.ts
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});
```

```ts
// lib/auth-guard.ts
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function requireAdminSession() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    throw new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }
  return session;
}
```

(Adapt admin route handlers to catch `Response` or return `NextResponse` — prefer a helper that returns `Session | NextResponse`.)

```ts
// Preferred shape for handlers:
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function getAdminSessionOr401() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  return { session };
}
```

- [ ] **Step 3: Seed script**

```ts
// scripts/seed-admin.ts
import { auth } from "../lib/auth";

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD required");
  await auth.api.signUpEmail({
    body: { email, password, name: "Admin" },
  });
  console.log("Admin seeded:", email);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

Note: run seed once with `NODE_ENV=development` (or temporarily `disableSignUp: false`) before locking production.

- [ ] **Step 4: Manual verify**

```bash
export DATABASE_PATH=./.data/agentbiz.sqlite
export BETTER_AUTH_SECRET="$(openssl rand -hex 32)"
export BETTER_AUTH_URL=http://127.0.0.1:3000
export ADMIN_EMAIL=admin@agentbiz.io
export ADMIN_PASSWORD='change-me-now-32chars'
npm run dev:next
# In another shell, seed then sign-in via Better Auth client or curl cookie flow
```

Expected: session cookie set; `sign-up` rejected when `NODE_ENV=production`.

- [ ] **Step 5: Document env in `.env.example`**

```
DATABASE_PATH=./.data/agentbiz.sqlite
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

---

### Task 4: Rate limit + POST /api/leads + CRM upsert

**Files:**
- Create: `lib/rate-limit.ts`, `lib/crm-service.ts`, `lib/validation/lead.ts`, `app/api/leads/route.ts`
- Create: `tests/leads-api.test.ts`

**Interfaces:**
- Produces: `assertRateLimit(key: string, limit: number, windowMs: number): boolean`
- Produces: `upsertCrmFromLead(input): string` (contact id)
- Produces: `POST /api/leads` → `{ id: string }` | 4xx

- [ ] **Step 1: Failing test — valid lead returns 200 with id**

```ts
// tests/leads-api.test.ts
import { POST } from "@/app/api/leads/route";
import { describe, expect, it, beforeEach } from "vitest";
import os from "node:os";
import path from "node:path";

beforeEach(() => {
  process.env.DATABASE_PATH = path.join(os.tmpdir(), `leads-${Date.now()}.sqlite`);
  // reset getDb singleton if needed via test helper
});

describe("POST /api/leads", () => {
  it("creates a lead", async () => {
    const req = new Request("http://localhost/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json", origin: "http://localhost:3000" },
      body: JSON.stringify({
        name: "Ada",
        email: "ada@example.com",
        resource_slug: "contact",
        source: "contact_form",
        company: "AgentBiz",
        website: "", // honeypot empty
      }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.id).toMatch(/[0-9a-f-]{36}/i);
  });

  it("rejects honeypot", async () => {
    const req = new Request("http://localhost/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: "Bot",
        email: "bot@example.com",
        resource_slug: "x",
        source: "contact_form",
        website: "http://spam",
      }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200); // silent success for bots OR 400 — pick silent 200 without insert; assert no DB row
  });
});
```

Decide honeypot behavior: **silent 200 `{ id: "ok" }` without insert** (recommended).

- [ ] **Step 2: Run — FAIL**

- [ ] **Step 3: Implement**

```ts
// lib/rate-limit.ts
const buckets = new Map<string, { count: number; resetAt: number }>();

export function assertRateLimit(key: string, limit = 20, windowMs = 60_000): boolean {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || now > b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (b.count >= limit) return false;
  b.count += 1;
  return true;
}
```

```ts
// lib/validation/lead.ts
import { z } from "zod";

export const leadBodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).optional(),
  resource_slug: z.string().trim().min(1).max(200),
  source: z.enum([
    "resource_download",
    "roi_calculator",
    "insight_newsletter",
    "contact_form",
    "training_enrollment",
  ]),
  metadata: z.record(z.unknown()).optional(),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});
```

```ts
// lib/crm-service.ts
import { eq } from "drizzle-orm";
import { getDb, crmContacts, crmActivities } from "@/lib/db";

export function upsertCrmFromLead(input: {
  name: string;
  email: string;
  company?: string | null;
  content: string;
}) {
  const db = getDb();
  const email = input.email.trim().toLowerCase();
  const now = new Date().toISOString();
  const existing = db.select().from(crmContacts).where(eq(crmContacts.email, email)).get();
  let contactId = existing?.id;
  if (!contactId) {
    contactId = crypto.randomUUID();
    db.insert(crmContacts)
      .values({
        id: contactId,
        name: input.name,
        email,
        company: input.company ?? null,
        stage: "new",
        contactType: "prospect",
        priority: "normal",
        notes: "",
        lastActivityAt: now,
        createdAt: now,
        updatedAt: now,
      })
      .run();
  } else {
    db.update(crmContacts)
      .set({ lastActivityAt: now, updatedAt: now, name: input.name })
      .where(eq(crmContacts.id, contactId))
      .run();
  }
  db.insert(crmActivities)
    .values({
      id: crypto.randomUUID(),
      contactId,
      activityType: "lead_capture",
      content: input.content,
      metadata: "{}",
      createdAt: now,
    })
    .run();
  return contactId;
}
```

Implement `POST` in `app/api/leads/route.ts`: rate limit by IP → parse JSON → honeypot → Zod → insert `resource_leads` → `upsertCrmFromLead` → `{ id }`. On validation error return 400 `{ error: "Invalid request" }` without details leak of internal paths.

- [ ] **Step 4: Tests PASS**

```bash
npx vitest run tests/leads-api.test.ts
```

---

### Task 5: POST /api/applications + CV disk storage

**Files:**
- Create: `lib/validation/application.ts`, `lib/cv-storage.ts`, `app/api/applications/route.ts`
- Create: `tests/applications-api.test.ts`
- Modify: `lib/crm-service.ts` (candidate upsert)

**Interfaces:**
- Produces: `saveCvFile(id: string, file: File | Buffer, originalName: string): { cvPath: string; cvFileName: string }`
- Produces: `POST /api/applications` multipart → `{ id }`
- Consumes: `CV_DIR` default `.data/cvs`

- [ ] **Step 1: Failing multipart test** (construct `FormData` with a small PDF magic-bytes buffer or `application/pdf` Blob)

- [ ] **Step 2: Implement storage**

```ts
// lib/cv-storage.ts
import fs from "node:fs";
import path from "node:path";

const MAX_BYTES = 5 * 1024 * 1024;

export function getCvDir() {
  const dir = process.env.CV_DIR ?? path.join(process.cwd(), ".data", "cvs");
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export function saveCvBuffer(applicationId: string, buf: Buffer, originalName: string) {
  if (buf.byteLength > MAX_BYTES) throw new Error("FILE_TOO_LARGE");
  // PDF magic %PDF
  if (buf.subarray(0, 4).toString("utf8") !== "%PDF") throw new Error("INVALID_TYPE");
  const safeName = originalName.replace(/[^\w.\-]+/g, "_").slice(0, 120);
  const stored = `${applicationId}.pdf`;
  const full = path.join(getCvDir(), stored);
  fs.writeFileSync(full, buf);
  return { cvPath: stored, cvFileName: safeName };
}
```

Only allow `application/pdf` from multipart MIME **and** magic bytes.

CRM: `contactType: "candidate"`, activity `application`.

- [ ] **Step 3: Tests PASS including reject non-PDF and >5MB**

---

### Task 6: Admin API routes (leads, applications, CV stream, CRM)

**Files:**
- Create: admin routes listed in file map
- Create: `tests/admin-api.test.ts` (mock session or seed+cookie)

**Interfaces:**
- Produces: all `/api/admin/*` from spec
- Consumes: `getAdminSessionOr401()`

- [ ] **Step 1: Tests for 401 without session**

```ts
it("rejects unauthenticated leads list", async () => {
  const { GET } = await import("@/app/api/admin/leads/route");
  const res = await GET();
  expect(res.status).toBe(401);
});
```

- [ ] **Step 2: Implement handlers**
  - List ordered by date desc
  - PATCH application status/notes
  - CV: `fs.createReadStream` / `new NextResponse(buffer)` with `Content-Disposition: attachment` and `Content-Type: application/pdf`
  - CRM list + patch stage/priority/notes + post activity note

- [ ] **Step 3: Authenticated happy-path test (seed user + call `auth.api.signInEmail` / set cookie header if feasible in Vitest; otherwise integration script)**

- [ ] **Step 4: Tests PASS**

---

### Task 7: Replace client libs + admin auth hook

**Files:**
- Modify or replace: `src/lib/leads.ts`, `src/lib/applications.ts`, `src/lib/crm.ts`, `src/hooks/useAuth.ts` → prefer new `lib/` copies used by Next pages
- Create: `components/providers/auth-provider.tsx` if needed
- Remove usage of `@/integrations/supabase/client` from these modules

**Interfaces:**
- Produces: same function names used by forms today (`createResourceLead`, `createApplication`, `getResourceLeads`, CRM getters, `signIn`/`signOut`)
- Drop Realtime: `subscribeTo*` becomes poll every 15s **or** one-shot fetch + manual refresh button

- [ ] **Step 1: Rewrite `lib/leads.ts` to `fetch("/api/leads")`**
- [ ] **Step 2: Rewrite applications/CRM similarly**
- [ ] **Step 3: `useAuth` via `authClient.useSession()`**
- [ ] **Step 4: Manual form submit against `next dev`**

---

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

---

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

---

### Task 10: Docker standalone + Dokploy + backups doc

**Files:**
- Replace: `Dockerfile` (Next standalone, not nginx/Vite)
- Create/Modify: `.dockerignore`, `docs/ops/sqlite-backup.md`
- Modify: remove Vite Supabase build ARGs from Dockerfile

**Dockerfile sketch:**

```dockerfile
# syntax=docker/dockerfile:1
FROM node:20-bookworm-slim AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS builder
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build:next

FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV DATABASE_PATH=/data/agentbiz.sqlite
ENV CV_DIR=/data/cvs
RUN mkdir -p /data/cvs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

- [ ] **Step 1: Local `docker build` + run with `-v agentbiz-data:/data`**
- [ ] **Step 2: Seed admin in container once**
- [ ] **Step 3: Dokploy: point domain to 3000, set secrets, mount volume `/data`**
- [ ] **Step 4: Write backup doc: copy `/data/agentbiz.sqlite*` + `/data/cvs` daily
- [ ] **Step 5: Smoke production URLs (health, form, admin login)
- [ ] **Step 6: Confirm `agentbiz-supabase` app is gone on the VPS**

---

### Task 11: Hardening + remove Supabase deps

**Files:**
- Modify: `next.config.ts` headers, `middleware.ts` (origin allowlist for mutations)
- Modify: `package.json` remove `@supabase/supabase-js`
- Delete: `src/integrations/supabase/**` when unused
- Optional archive: `dokploy/supabase/` (do not delete until human confirms)
- Modify: default `npm run build` / `dev` → Next scripts
- Update: `README.md` / `DEPLOYMENT.md` for new stack

Security checklist:

- [ ] CSP + `X-Content-Type-Options: nosniff` + `Referrer-Policy` + `X-Frame-Options: DENY`
- [ ] Rate limit verified (burst POST → 429)
- [ ] Production signup disabled
- [ ] CV URL guessing fails without session
- [ ] No Supabase env vars required to build/run
- [ ] Rotate any secrets previously pasted in chat

---

## Spec coverage (self-review)

| Spec item | Tasks |
|-----------|-------|
| Next standalone + SQLite | 1, 2, 10 |
| Better Auth, no public signup | 3, 11 |
| resource_leads / applications / CRM | 2, 4, 5, 6 |
| CV private storage | 5, 6 |
| Rate limit + Zod + honeypot | 4, 5 |
| Replace client libs | 7 |
| Admin UI | 8 |
| Full route cutover + Jarvis | 9 |
| Dokploy + backups | 10 |
| Remove Supabase / harden | 11 |
| Skip HubSpot sync | intentional non-task |

## Placeholder / consistency notes

- Prefer `getAdminSessionOr401()` return shape everywhere in admin routes.
- Column names camelCase in Drizzle / snake_case in SQLite columns as shown.
- Reset Drizzle singleton between Vitest cases (export `__resetDbForTests()` in `lib/db/index.ts` if needed).

---

## Execution

Plan saved to `docs/superpowers/plans/2026-07-15-next-sqlite-cutover.md`.
