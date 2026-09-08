// Stop application writers before running: SQLite and the CV directory must share a restore point.
import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const [source, destination] = process.argv.slice(2);
if (!source || !destination) throw new Error("Usage: node scripts/backup-sqlite.mjs SOURCE_DATA_DIR NEW_BACKUP_DIR (stop app first)");
const sourceDir = path.resolve(source);
const backupDir = path.resolve(destination);
if (backupDir === sourceDir || backupDir.startsWith(sourceDir + path.sep)) throw new Error("Backup must be outside the source directory");
if (fs.existsSync(backupDir)) throw new Error("Refusing to overwrite an existing backup");
const db = new Database(path.join(sourceDir, "agentbiz.sqlite"), { readonly: true, fileMustExist: true });
try {
  if (db.pragma("integrity_check", { simple: true }) !== "ok") throw new Error("Source database failed integrity check");
  const cvPaths = db.prepare("SELECT cv_path FROM applications WHERE cv_path IS NOT NULL").all();
  for (const { cv_path: file } of cvPaths) {
    if (path.basename(file) !== file || !fs.statSync(path.join(sourceDir, "cvs", file)).isFile()) throw new Error("Missing or invalid CV");
  }
  fs.mkdirSync(backupDir, { recursive: true, mode: 0o700 });
  await db.backup(path.join(backupDir, "agentbiz.sqlite"));
  if (fs.existsSync(path.join(sourceDir, "cvs"))) fs.cpSync(path.join(sourceDir, "cvs"), path.join(backupDir, "cvs"), { recursive: true });
  fs.writeFileSync(path.join(backupDir, "backup.json"), JSON.stringify({ createdAt: new Date().toISOString(), cvs: cvPaths.length }, null, 2), { mode: 0o600 });
  console.log("Backup completed and source integrity checked.");
} catch (error) {
  // Only remove the new directory owned by this operation.
  fs.rmSync(backupDir, { recursive: true, force: true });
  throw error;
} finally { db.close(); }
