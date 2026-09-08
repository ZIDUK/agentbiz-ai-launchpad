import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { beforeEach, afterEach, it, expect, vi } from "vitest";
let root: string;
beforeEach(async () => {
  vi.resetModules();
  root = fs.mkdtempSync(path.join(os.tmpdir(), "agentbiz-ready-"));
  vi.stubEnv("DATABASE_PATH", path.join(root, "db.sqlite"));
  vi.stubEnv("CV_DIR", path.join(root, "cvs"));
  vi.stubEnv("BETTER_AUTH_SECRET", "test-readiness-secret-00000000000000000000");
  vi.stubEnv("BETTER_AUTH_URL", "http://localhost:3000");
});
afterEach(async () => {
  (await import("@/lib/db")).__resetDbForTests();
  vi.unstubAllEnvs();
  fs.rmSync(root, { recursive: true, force: true });
});
it("rejects readiness when schema migrations have not run", async () => {
  const { GET } = await import("@/app/api/ready/route");
  expect((await GET()).status).toBe(503);
});
it("accepts migrated storage with valid auth configuration", async () => {
  const { migrate } = await import("drizzle-orm/better-sqlite3/migrator");
  migrate((await import("@/lib/db")).getDb(), { migrationsFolder: "drizzle/migrations" });
  const { GET } = await import("@/app/api/ready/route");
  expect((await GET()).status).toBe(200);
  vi.stubEnv("BETTER_AUTH_SECRET", "");
  expect((await GET()).status).toBe(503);
});
