import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  getAllowedOrigins,
  getContentSecurityPolicy,
  getSecurityHeaders,
  isMutatingApiRequest,
  isOriginAllowed,
  validateMutationOrigin,
} from "@/lib/security";

describe("security headers", () => {
  it("includes required headers", () => {
    const headers = getSecurityHeaders();
    expect(headers["X-Content-Type-Options"]).toBe("nosniff");
    expect(headers["Referrer-Policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["X-Frame-Options"]).toBe("DENY");
    expect(headers["Content-Security-Policy"]).toContain("frame-ancestors 'none'");
  });

  it("allows inline scripts/styles for Next and Three.js", () => {
    const csp = getContentSecurityPolicy();
    expect(csp).toContain("script-src 'self' 'unsafe-inline' 'unsafe-eval'");
    expect(csp).toContain("style-src 'self' 'unsafe-inline'");
    expect(csp).toContain("worker-src 'self' blob:");
  });
});

describe("origin allowlist", () => {
  const envBackup = { ...process.env };

  beforeEach(() => {
    process.env = { ...envBackup };
    process.env.BETTER_AUTH_URL = "https://agentbiz.io";
    process.env.NEXT_PUBLIC_APP_URL = "https://agentbiz.io";
    process.env.NODE_ENV = "production";
  });

  afterEach(() => {
    process.env = envBackup;
  });

  it("collects allowed origins from env", () => {
    expect(getAllowedOrigins()).toContain("https://agentbiz.io");
  });

  it("blocks cross-origin mutations in production", () => {
    const req = {
      headers: new Headers({
        origin: "https://evil.example",
      }),
    };
    expect(validateMutationOrigin(req).ok).toBe(false);
  });

  it("allows same-origin mutations", () => {
    const req = {
      headers: new Headers({
        origin: "https://agentbiz.io",
      }),
    };
    expect(validateMutationOrigin(req)).toEqual({ ok: true });
  });

  it("allows referer fallback", () => {
    const req = {
      headers: new Headers({
        referer: "https://agentbiz.io/admin/leads",
      }),
    };
    expect(validateMutationOrigin(req)).toEqual({ ok: true });
  });

  it("exempts health from mutation checks", () => {
    expect(isMutatingApiRequest("/api/health", "POST")).toBe(false);
    expect(isMutatingApiRequest("/api/leads", "POST")).toBe(true);
  });

  it("isOriginAllowed matches allowlist", () => {
    expect(isOriginAllowed("https://agentbiz.io", ["https://agentbiz.io"])).toBe(true);
    expect(isOriginAllowed("https://other.io", ["https://agentbiz.io"])).toBe(false);
  });
});

describe("production signup disabled", () => {
  const envBackup = { ...process.env };

  afterEach(() => {
    process.env = envBackup;
    vi.resetModules();
  });

  it("disables signup when NODE_ENV is production", async () => {
    process.env.NODE_ENV = "production";
    vi.resetModules();
    const { getEmailPasswordConfig } = await import("@/lib/auth");
    expect(getEmailPasswordConfig().disableSignUp).toBe(true);
  });

  it("allows signup outside production", async () => {
    process.env.NODE_ENV = "development";
    vi.resetModules();
    const { getEmailPasswordConfig } = await import("@/lib/auth");
    expect(getEmailPasswordConfig().disableSignUp).toBe(false);
  });
});
