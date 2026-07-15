import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

let _sqlite: Database.Database | null = null;
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (_db) return _db;
  const dbPath = process.env.DATABASE_PATH ?? path.join(process.cwd(), ".data", "agentbiz.sqlite");
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  _sqlite = new Database(dbPath);
  _sqlite.pragma("journal_mode = WAL");
  _sqlite.pragma("foreign_keys = ON");
  _db = drizzle(_sqlite, { schema });
  return _db;
}

export function __resetDbForTests() {
  if (_sqlite) {
    _sqlite.close();
  }
  _sqlite = null;
  _db = null;
}

export * from "./schema";
