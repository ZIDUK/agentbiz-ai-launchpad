import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { eq } from "drizzle-orm";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mockGetSession = vi.fn();
const mockHeaders = vi.fn();

vi.mock("next/headers", () => ({
  headers: () => mockHeaders(),
}));

vi.mock("@/lib/auth", () => ({
  auth: {
    api: {
      getSession: (...args: unknown[]) => mockGetSession(...args),
    },
  },
}));

let dbPath: string;
let cvDir: string;

const MINIMAL_PDF = Buffer.from("%PDF-1.4\n%EOF\n");

async function setupDb() {
  vi.resetModules();
  dbPath = path.join(os.tmpdir(), `admin-${Date.now()}-${Math.random()}.sqlite`);
  cvDir = path.join(os.tmpdir(), `admin-cvs-${Date.now()}-${Math.random()}`);
  process.env.DATABASE_PATH = dbPath;
  process.env.CV_DIR = cvDir;
  const { migrate } = await import("drizzle-orm/better-sqlite3/migrator");
  const { getDb } = await import("@/lib/db");
  const db = getDb();
  migrate(db, { migrationsFolder: path.join(process.cwd(), "drizzle/migrations") });
  return db;
}

function mockNoSession() {
  mockGetSession.mockResolvedValue(null);
}

function mockSession() {
  mockGetSession.mockResolvedValue({
    session: { id: "sess-1", userId: "user-1" },
    user: { id: "user-1", email: "admin@agentbiz.io", name: "Admin" },
  });
}

describe("admin API — unauthenticated", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockHeaders.mockResolvedValue(new Headers());
    mockNoSession();
  });

  it("rejects unauthenticated leads list", async () => {
    const { GET } = await import("@/app/api/admin/leads/route");
    const res = await GET();
    expect(res.status).toBe(401);
  });

  it("rejects unauthenticated applications list", async () => {
    const { GET } = await import("@/app/api/admin/applications/route");
    const res = await GET();
    expect(res.status).toBe(401);
  });

  it("rejects unauthenticated applications patch", async () => {
    const { PATCH } = await import("@/app/api/admin/applications/route");
    const res = await PATCH(
      new Request("http://localhost/api/admin/applications", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: "x", status: "reviewed" }),
      }),
    );
    expect(res.status).toBe(401);
  });

  it("rejects unauthenticated CV download", async () => {
    const { GET } = await import("@/app/api/admin/applications/[id]/cv/route");
    const res = await GET(new Request("http://localhost"), { params: Promise.resolve({ id: "x" }) });
    expect(res.status).toBe(401);
  });

  it("rejects unauthenticated CRM contacts list", async () => {
    const { GET } = await import("@/app/api/admin/crm/contacts/route");
    const res = await GET();
    expect(res.status).toBe(401);
  });

  it("rejects unauthenticated CRM contacts patch", async () => {
    const { PATCH } = await import("@/app/api/admin/crm/contacts/route");
    const res = await PATCH(
      new Request("http://localhost/api/admin/crm/contacts", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: "x", stage: "contacted" }),
      }),
    );
    expect(res.status).toBe(401);
  });

  it("rejects unauthenticated CRM activities list", async () => {
    const { GET } = await import("@/app/api/admin/crm/contacts/[id]/activities/route");
    const res = await GET(new Request("http://localhost"), { params: Promise.resolve({ id: "x" }) });
    expect(res.status).toBe(401);
  });

  it("rejects unauthenticated CRM activity post", async () => {
    const { POST } = await import("@/app/api/admin/crm/contacts/[id]/activities/route");
    const res = await POST(
      new Request("http://localhost", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ content: "Follow up" }),
      }),
      { params: Promise.resolve({ id: "x" }) },
    );
    expect(res.status).toBe(401);
  });
});

describe("admin API — authenticated", () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    mockHeaders.mockResolvedValue(new Headers());
    mockSession();
    await setupDb();
  });

  afterEach(async () => {
    const { __resetDbForTests } = await import("@/lib/db");
    __resetDbForTests();
    if (dbPath && fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
    if (cvDir && fs.existsSync(cvDir)) fs.rmSync(cvDir, { recursive: true, force: true });
  });

  it("lists leads ordered by createdAt desc", async () => {
    const { resourceLeads } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();
    db.insert(resourceLeads)
      .values([
        {
          id: "lead-old",
          name: "Old",
          email: "old@example.com",
          resourceSlug: "x",
          source: "form",
          createdAt: "2020-01-01T00:00:00.000Z",
        },
        {
          id: "lead-new",
          name: "New",
          email: "new@example.com",
          resourceSlug: "x",
          source: "form",
          createdAt: "2025-01-01T00:00:00.000Z",
        },
      ])
      .run();

    const { GET } = await import("@/app/api/admin/leads/route");
    const res = await GET();
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json[0].id).toBe("lead-new");
    expect(json[1].id).toBe("lead-old");
  });

  it("patches application status and notes", async () => {
    const { applications } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();
    db.insert(applications)
      .values({
        id: "app-1",
        name: "Ada",
        email: "ada@example.com",
        phone: "+1",
        position: "Dev",
        experience: "5y",
        status: "pending",
        appliedAt: "2025-01-01T00:00:00.000Z",
      })
      .run();

    const { PATCH } = await import("@/app/api/admin/applications/route");
    const res = await PATCH(
      new Request("http://localhost/api/admin/applications", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: "app-1", status: "reviewed", notes: "Strong candidate" }),
      }),
    );
    expect(res.status).toBe(200);

    const row = db.select().from(applications).where(eq(applications.id, "app-1")).get();
    expect(row?.status).toBe("reviewed");
    expect(row?.notes).toBe("Strong candidate");
    expect(row?.reviewedAt).toBeTruthy();
  });

  it("streams CV PDF for authenticated admin", async () => {
    const { applications } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();
    const id = "cv-app-1";
    fs.mkdirSync(cvDir, { recursive: true });
    fs.writeFileSync(path.join(cvDir, `${id}.pdf`), MINIMAL_PDF);
    db.insert(applications)
      .values({
        id,
        name: "Ada",
        email: "ada@example.com",
        phone: "+1",
        position: "Dev",
        experience: "5y",
        cvPath: `${id}.pdf`,
        cvFileName: "resume.pdf",
        status: "pending",
        appliedAt: "2025-01-01T00:00:00.000Z",
      })
      .run();

    const { GET } = await import("@/app/api/admin/applications/[id]/cv/route");
    const res = await GET(new Request("http://localhost"), { params: Promise.resolve({ id }) });
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("application/pdf");
    expect(res.headers.get("content-disposition")).toContain("resume.pdf");
    const buf = Buffer.from(await res.arrayBuffer());
    expect(buf.subarray(0, 4).toString("utf8")).toBe("%PDF");
  });

  it("posts CRM activity note", async () => {
    const { crmContacts, crmActivities } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();
    const contactId = "contact-1";
    const now = "2025-01-01T00:00:00.000Z";
    db.insert(crmContacts)
      .values({
        id: contactId,
        name: "Ada",
        email: "ada@example.com",
        stage: "new",
        contactType: "prospect",
        priority: "normal",
        notes: "",
        lastActivityAt: now,
        createdAt: now,
        updatedAt: now,
      })
      .run();

    const { POST } = await import("@/app/api/admin/crm/contacts/[id]/activities/route");
    const res = await POST(
      new Request("http://localhost", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ content: "Called back", activityType: "call" }),
      }),
      { params: Promise.resolve({ id: contactId }) },
    );
    expect(res.status).toBe(200);

    const activity = db.select().from(crmActivities).where(eq(crmActivities.contactId, contactId)).get();
    expect(activity?.content).toBe("Called back");
    expect(activity?.activityType).toBe("call");
  });
});
