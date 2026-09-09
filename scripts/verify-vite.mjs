// Build and exercise both legacy entry points without writing into tracked assets.
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { chromium } from "@playwright/test";
import { preview } from "vite";

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
    // Read the listening socket instead of parsing ANSI-formatted CLI output.
    const server = await preview({ configFile: config, build: { outDir: output }, preview: { host: "127.0.0.1", port: 0, open: false } });
    servers.push(server);
    const address = server.httpServer.address();
    assert.ok(address && typeof address !== "string", "Preview did not open a TCP listener");
    const origin = `http://127.0.0.1:${address.port}`;
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
  await Promise.all(servers.map(server => server.close()));
  fs.rmSync(root, { recursive: true, force: true });
}
