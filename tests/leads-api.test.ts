import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { eq } from "drizzle-orm";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

let dbPath: string;

async function setupDb() {
  vi.resetModules();
  dbPath = path.join(os.tmpdir(), `leads-${Date.now()}-${Math.random()}.sqlite`);
  process.env.DATABASE_PATH = dbPath;
  const { migrate } = await import("drizzle-orm/better-sqlite3/migrator");
  const { getDb } = await import("@/lib/db");
  const db = getDb();
  migrate(db, { migrationsFolder: path.join(process.cwd(), "drizzle/migrations") });
  return db;
}

function leadRequest(body: Record<string, unknown>, headers: Record<string, string> = {}) {
  return new Request("http://localhost/api/leads", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "http://localhost:3000",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/leads", () => {
  beforeEach(async () => {
    await setupDb();
    const { __resetRateLimitForTests } = await import("@/lib/rate-limit");
    __resetRateLimitForTests();
  });

  afterEach(async () => {
    const { __resetDbForTests } = await import("@/lib/db");
    __resetDbForTests();
    if (dbPath && fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
  });

  it("creates a lead", async () => {
    const { POST } = await import("@/app/api/leads/route");
    const res = await POST(
      leadRequest({
        name: "Ada",
        email: "ada@example.com",
        resource_slug: "contact",
        source: "contact_form",
        company: "AgentBiz",
        website: "",
      }),
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.id).toMatch(/[0-9a-f-]{36}/i);
  });

  it("rejects honeypot without inserting", async () => {
    const { POST } = await import("@/app/api/leads/route");
    const { resourceLeads, crmContacts } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();

    const res = await POST(
      leadRequest({
        name: "Bot",
        email: "bot@example.com",
        resource_slug: "x",
        source: "contact_form",
        website: "http://spam",
      }),
    );

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ id: "ok" });
    expect(db.select().from(resourceLeads).all()).toHaveLength(0);
    expect(db.select().from(crmContacts).all()).toHaveLength(0);
  });

  it("returns 400 for invalid payload", async () => {
    const { POST } = await import("@/app/api/leads/route");
    const res = await POST(
      leadRequest({
        name: "Ada",
        email: "not-an-email",
        resource_slug: "contact",
        source: "contact_form",
        website: "",
      }),
    );
    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: "Invalid request" });
  });

  it("normalizes email to lowercase in CRM", async () => {
    const { POST } = await import("@/app/api/leads/route");
    const { crmContacts } = await import("@/lib/db");
    const { getDb } = await import("@/lib/db");
    const db = getDb();

    await POST(
      leadRequest({
        name: "Ada",
        email: "Ada@Example.COM",
        resource_slug: "contact",
        source: "contact_form",
        website: "",
      }),
    );

    const contact = db.select().from(crmContacts).where(eq(crmContacts.email, "ada@example.com")).get();
    expect(contact?.email).toBe("ada@example.com");
  });

  it("rate limits by IP", async () => {
    const { POST } = await import("@/app/api/leads/route");
    const ip = "203.0.113.50";
    const body = {
      name: "Ada",
      email: "ada@example.com",
      resource_slug: "contact",
      source: "contact_form",
      website: "",
    };

    for (let i = 0; i < 20; i++) {
      const res = await POST(leadRequest({ ...body, email: `user${i}@example.com` }, { "x-forwarded-for": ip }));
      expect(res.status).toBe(200);
    }

    const blocked = await POST(leadRequest({ ...body, email: "blocked@example.com" }, { "x-forwarded-for": ip }));
    expect(blocked.status).toBe(429);
  });
});
