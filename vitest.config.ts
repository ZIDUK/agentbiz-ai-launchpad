import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  test: {
    environment: "node",
    pool: "forks",
    isolate: true,
    // Exclude legacy worktrees and build outputs so test runs stay scoped to the
    // active checkout. Old worktrees (e.g. .worktrees/next-sqlite-cutover) drag
    // in stale tests that fail in the new Next context.
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/.worktrees/**",
      "**/.git/**",
    ],
  },
});
