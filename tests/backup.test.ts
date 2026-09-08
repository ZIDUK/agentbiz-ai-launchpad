import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import Database from "better-sqlite3";
import { it, expect } from "vitest";

it("restores a consistent SQLite snapshot and its referenced CV", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "agentbiz-backup-test-"));
  try {
    const source = path.join(root, "source");
    const backup = path.join(root, "backup");
    fs.mkdirSync(path.join(source, "cvs"), { recursive: true });
    const pdf = Buffer.from("%PDF-1.4\nfixture");
    fs.writeFileSync(path.join(source, "cvs", "fixture.pdf"), pdf);
    const db = new Database(path.join(source, "agentbiz.sqlite"));
    db.pragma("journal_mode = WAL");
    db.exec("CREATE TABLE applications(id TEXT, cv_path TEXT); INSERT INTO applications VALUES ('fixture', 'fixture.pdf');");
    db.close();
    const result = spawnSync(process.execPath, ["scripts/backup-sqlite.mjs", source, backup], { encoding: "utf8" });
    expect(result.status, result.stderr).toBe(0);
    const restore = path.join(root, "restore");
    fs.cpSync(backup, restore, { recursive: true });
    const restored = new Database(path.join(restore, "agentbiz.sqlite"));
    try {
      expect(restored.pragma("integrity_check", { simple: true })).toBe("ok");
      expect(restored.prepare("SELECT * FROM applications").get()).toEqual({ id: "fixture", cv_path: "fixture.pdf" });
      expect(fs.readFileSync(path.join(restore, "cvs", "fixture.pdf"))).toEqual(pdf);
    } finally { restored.close(); }
    expect(spawnSync(process.execPath, ["scripts/backup-sqlite.mjs", source, backup]).status).not.toBe(0);
    expect(fs.existsSync(path.join(backup, "agentbiz.sqlite"))).toBe(true);
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});
