// Isolated local fixtures only: never read or mutate the real application database.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync, spawn } from "node:child_process";
const root = fs.mkdtempSync(path.join(os.tmpdir(), "agentbiz-e2e-"));
const env = { ...process.env, DATABASE_PATH: path.join(root, "db.sqlite"), CV_DIR: path.join(root, "cvs"), BETTER_AUTH_SECRET: "e2e-only-local-secret-000000000000000000000000", BETTER_AUTH_URL: "http://127.0.0.1:3197", NEXT_PUBLIC_APP_URL: "http://127.0.0.1:3197", ADMIN_EMAIL: "e2e@example.com", ADMIN_PASSWORD: "Local-e2e-password-123!" };
for (const args of [["node_modules/drizzle-kit/bin.cjs", "migrate"], ["node_modules/tsx/dist/cli.mjs", "--tsconfig", "tsconfig.next.json", "scripts/seed-admin.ts"]]) {
  const result = spawnSync(process.execPath, args, { env: { ...env, NODE_ENV: "development" }, stdio: "inherit" });
  if (result.status !== 0) { fs.rmSync(root, { recursive: true, force: true }); process.exit(1); }
}
const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3197"], { env: { ...env, NODE_ENV: "production" }, stdio: "inherit" });
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
child.on("exit", code => { fs.rmSync(root, { recursive: true, force: true }); process.exit(code ?? 0); });
