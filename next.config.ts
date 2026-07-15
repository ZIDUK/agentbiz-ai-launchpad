import path from "node:path";
import type { NextConfig } from "next";
import { getSecurityHeaders } from "./lib/security";

const srcDir = path.join(__dirname, "src");
const rootLibDir = path.join(__dirname, "lib");

const sharedAliases: Record<string, string> = {
  "@/components": path.join(srcDir, "components"),
  "@/pages": path.join(srcDir, "pages"),
  "@/i18n": path.join(srcDir, "i18n"),
  "@/data": path.join(srcDir, "data"),
  "@/assets": path.join(srcDir, "assets"),
  "@/lib/analytics": path.join(srcDir, "lib/analytics.ts"),
  "@/lib/seo-meta": path.join(srcDir, "lib/seo-meta.ts"),
  "@/lib/site-navigation-schema": path.join(srcDir, "lib/site-navigation-schema.ts"),
  "@/lib/utils": path.join(rootLibDir, "utils.ts"),
  "react-router-dom": path.join(rootLibDir, "react-router-shim.tsx"),
};

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
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: sharedAliases,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...sharedAliases,
    };
    return config;
  },
  async headers() {
    const securityHeaders = Object.entries(getSecurityHeaders()).map(([key, value]) => ({
      key,
      value,
    }));
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
