import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { eq } from "drizzle-orm";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

let dbPath: string;
let cvDir: string;

const MINIMAL_PDF = Buffer.from("%PDF-1.4\n%EOF\n");

async function setupDb() {
  vi.resetModules();
  dbPath = path.join(os.tmpdir(), `apps-${Date.now()}-${Math.random()}.sqlite`);
  cvDir = path.join(os.tmpdir(), `cvs-${Date.now()}-${Math.random()}`);
  process.env.DATABASE_PATH = dbPath;
  process.env.CV_DIR = cvDir;
  const { migrate } = await import("drizzle-orm/better-sqlite3/migrator");
  const { getDb } = await import("@/lib/db");
  const db = getDb();
  migrate(db, { migrationsFolder: path.join(process.cwd(), "drizzle/migrations") });
  return db;
}

function applicationRequest(
  fields: Record<string, string>,
  cv?: { name: string; type: string; data: Buffer | Blob },
  headers: Record<string, string> = {},
) {
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    form.append(key, value);
  }
  if (cv) {
    const blob =
      cv.data instanceof Blob
        ? cv.data
        : new Blob([cv.data], { type: cv.type });
    form.append("cv", blob, cv.name);
  }
  return new Request("http://localhost/api/applications", {
    method: "POST",
    headers: {
      origin: "http://localhost:3000",
      ...headers,
    },
    body: form,
  });
}

const validFields = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  phone: "+1 555 0100",
  position: "Data Scientist",
  experience: "5 years in ML",
  cover_letter: "Excited to join AgentBiz.",
  website: "",
};

describe("POST /api/applications", () => {
  beforeEach(async () => {
    await setupDb();
    const { __resetRateLimitForTests } = await import("@/lib/rate-limit");
    __resetRateLimitForTests();
  });

  afterEach(async () => {
    const { __resetDbForTests } = await import("@/lib/db");
    __resetDbForTests();
    if (dbPath && fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
    if (cvDir && fs.existsSync(cvDir)) fs.rmSync(cvDir, { recursive: true, force: true });
  });

  it("creates an application with PDF CV on disk", async () => {
    const { POST } = await import("@/app/api/applications/route");
    const { applications } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();

    const res = await POST(
      applicationRequest(validFields, {
        name: "resume.pdf",
        type: "application/pdf",
        data: MINIMAL_PDF,
      }),
    );

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.id).toMatch(/[0-9a-f-]{36}/i);

    const row = db.select().from(applications).where(eq(applications.id, json.id)).get();
    expect(row?.email).toBe("ada@example.com");
    expect(row?.cvPath).toBe(`${json.id}.pdf`);
    expect(row?.cvFileName).toBe("resume.pdf");
    expect(fs.existsSync(path.join(cvDir, `${json.id}.pdf`))).toBe(true);
  });

  it("rejects honeypot without inserting", async () => {
    const { POST } = await import("@/app/api/applications/route");
    const { applications, crmContacts } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();

    const res = await POST(
      applicationRequest(
        { ...validFields, website: "http://spam" },
        { name: "resume.pdf", type: "application/pdf", data: MINIMAL_PDF },
      ),
    );

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ id: "ok" });
    expect(db.select().from(applications).all()).toHaveLength(0);
    expect(db.select().from(crmContacts).all()).toHaveLength(0);
  });

  it("returns 400 for invalid payload", async () => {
    const { POST } = await import("@/app/api/applications/route");
    const res = await POST(
      applicationRequest(
        { ...validFields, email: "not-an-email" },
        { name: "resume.pdf", type: "application/pdf", data: MINIMAL_PDF },
      ),
    );
    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: "Invalid request" });
  });

  it("rejects non-PDF CV", async () => {
    const { POST } = await import("@/app/api/applications/route");
    const { applications } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();

    const res = await POST(
      applicationRequest(validFields, {
        name: "resume.pdf",
        type: "application/pdf",
        data: Buffer.from("not a pdf"),
      }),
    );

    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: "Invalid request" });
    expect(db.select().from(applications).all()).toHaveLength(0);
  });

  it("rejects CV larger than 5MB", async () => {
    const { POST } = await import("@/app/api/applications/route");
    const oversized = Buffer.alloc(5 * 1024 * 1024 + 1);
    oversized.write("%PDF", 0, "utf8");

    const res = await POST(
      applicationRequest(validFields, {
        name: "big.pdf",
        type: "application/pdf",
        data: oversized,
      }),
    );

    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: "Invalid request" });
  });

  it("upserts CRM candidate with application activity", async () => {
    const { POST } = await import("@/app/api/applications/route");
    const { crmContacts, crmActivities } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();

    await POST(
      applicationRequest(validFields, {
        name: "resume.pdf",
        type: "application/pdf",
        data: MINIMAL_PDF,
      }),
    );

    const contact = db
      .select()
      .from(crmContacts)
      .where(eq(crmContacts.email, "ada@example.com"))
      .get();
    expect(contact?.contactType).toBe("candidate");

    const activity = db.select().from(crmActivities).all()[0];
    expect(activity?.activityType).toBe("application");
  });

  it("rate limits by IP", async () => {
    const { POST } = await import("@/app/api/applications/route");
    const ip = "203.0.113.99";

    for (let i = 0; i < 20; i++) {
      const res = await POST(
        applicationRequest(
          { ...validFields, email: `user${i}@example.com` },
          { name: "resume.pdf", type: "application/pdf", data: MINIMAL_PDF },
          { "x-forwarded-for": ip },
        ),
      );
      expect(res.status).toBe(200);
    }

    const blocked = await POST(
      applicationRequest(
        { ...validFields, email: "blocked@example.com" },
        { name: "resume.pdf", type: "application/pdf", data: MINIMAL_PDF },
        { "x-forwarded-for": ip },
      ),
    );
    expect(blocked.status).toBe(429);
  });
});
