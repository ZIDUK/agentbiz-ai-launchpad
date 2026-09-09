// Build and exercise both legacy entry points without writing into tracked assets.
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { chromium } from "@playwright/test";

const root = fs.mkdtempSync(path.join(os.tmpdir(), "agentbiz-vite-"));
const vite = path.resolve("node_modules/vite/bin/vite.js");
let browser;
const servers = [];
try {
  browser = await chromium.launch();
  for (const [index, config] of ["vite.config.ts", "vite.poc.config.ts"].entries()) {
    const output = path.join(root, String(index));
    const build = spawnSync(process.execPath, [vite, "build", "--config", config, "--outDir", output], { encoding: "utf8" });
    assert.equal(build.status, 0, build.stderr);
    const server = spawn(process.execPath, [vite, "preview", "--config", config, "--outDir", output, "--host", "127.0.0.1", "--port", "0"], { stdio: ["ignore", "pipe", "pipe"] });
    servers.push(server);
    const origin = await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Preview did not start")), 15000);
      let log = "";
      server.stdout.on("data", chunk => {
        log += chunk.toString();
        const match = log.match(/http:\/\/127\.0\.0\.1:\d+/);
        if (match) { clearTimeout(timeout); resolve(match[0]); }
      });
      server.once("exit", code => { clearTimeout(timeout); reject(new Error(`Preview exited: ${code}`)); });
    });
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    for (const route of ["/", "/services"]) {
      await page.goto(`${origin}${route}`);
      await page.locator("h1").first().waitFor({ state: "visible" });
      assert.deepEqual(errors, [], `${config} ${route} raised runtime errors`);
    }
    await page.close();
    console.log(`${config}: build, home and services verified`);
  }
} finally {
  await browser?.close();
  await Promise.all(servers.map(server => new Promise(resolve => {
    if (server.exitCode !== null) return resolve();
    server.once("exit", resolve);
    server.kill("SIGTERM");
  })));
  fs.rmSync(root, { recursive: true, force: true });
}
