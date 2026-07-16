import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { eq } from "drizzle-orm";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("resource_leads schema", () => {
  let dbPath: string;

  beforeEach(() => {
    vi.resetModules();
    dbPath = path.join(os.tmpdir(), `agentbiz-test-${Date.now()}.sqlite`);
    process.env.DATABASE_PATH = dbPath;
  });

  afterEach(() => {
    if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
  });

  it("inserts a resource lead", async () => {
    const { getDb, resourceLeads } = await import("@/lib/db");
    const db = getDb();
    const { migrate } = await import("drizzle-orm/better-sqlite3/migrator");
    migrate(db, { migrationsFolder: path.join(process.cwd(), "drizzle/migrations") });
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
    const row = db
      .select()
      .from(resourceLeads)
      .where(eq(resourceLeads.id, id))
      .get();
    expect(row?.email).toBe("ada@example.com");
  });
});
