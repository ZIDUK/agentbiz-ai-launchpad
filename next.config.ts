import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  serverExternalPackages: ["better-sqlite3"],
  eslint: {
    dirs: ["app", "lib"],
  },
  typescript: {
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;
