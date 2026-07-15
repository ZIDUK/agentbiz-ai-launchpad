import type { NextRequest } from "next/server";

const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

/** Paths excluded from origin checks (e.g. health probes). */
const ORIGIN_CHECK_EXEMPT = new Set(["/api/health"]);

export function getAllowedOrigins(): string[] {
  const origins = new Set<string>();

  for (const key of ["BETTER_AUTH_URL", "NEXT_PUBLIC_APP_URL"] as const) {
    const value = process.env[key];
    if (!value) continue;
    try {
      origins.add(new URL(value).origin);
    } catch {
      // ignore invalid URLs
    }
  }

  if (process.env.NODE_ENV !== "production") {
    origins.add("http://localhost:3000");
    origins.add("http://127.0.0.1:3000");
    origins.add("http://localhost");
  }

  return [...origins];
}

export function isMutatingApiRequest(pathname: string, method: string): boolean {
  if (!pathname.startsWith("/api/")) return false;
  if (ORIGIN_CHECK_EXEMPT.has(pathname)) return false;
  return MUTATING_METHODS.has(method.toUpperCase());
}

export function isOriginAllowed(origin: string, allowedOrigins: string[] = getAllowedOrigins()): boolean {
  return allowedOrigins.includes(origin);
}

/**
 * Validates Origin/Referer for browser-initiated API mutations.
 * Missing Origin+Referer is allowed outside production (tests, local curl).
 */
export function validateMutationOrigin(
  request: Pick<NextRequest, "headers">,
  allowedOrigins: string[] = getAllowedOrigins(),
): { ok: true } | { ok: false; reason: string } {
  const origin = request.headers.get("origin");
  if (origin) {
    return isOriginAllowed(origin, allowedOrigins) ? { ok: true } : { ok: false, reason: "origin" };
  }

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      return isOriginAllowed(refererOrigin, allowedOrigins)
        ? { ok: true }
        : { ok: false, reason: "referer" };
    } catch {
      return { ok: false, reason: "referer-parse" };
    }
  }

  if (process.env.NODE_ENV === "production") {
    return { ok: false, reason: "missing-origin" };
  }

  return { ok: true };
}

/**
 * CSP tuned for Next.js + Tailwind + Three.js/Jarvis.
 * Looseness documented in task-11-report.md:
 * - script-src: unsafe-inline (Next hydration), unsafe-eval (Three dev tooling)
 * - style-src: unsafe-inline (Tailwind / component styles)
 */
export function getContentSecurityPolicy(): string {
  const directives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "worker-src 'self' blob:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ];
  return directives.join("; ");
}

export function getSecurityHeaders(): Record<string, string> {
  return {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "DENY",
    "Content-Security-Policy": getContentSecurityPolicy(),
  };
}
