import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSecurityHeaders, isMutatingApiRequest, validateMutationOrigin } from "@/lib/security";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isMutatingApiRequest(pathname, request.method)) {
    const originCheck = validateMutationOrigin(request);
    if (!originCheck.ok) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  // Overwrite these internal headers rather than trusting caller-supplied values.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-agentbiz-path", pathname);
  requestHeaders.set("x-agentbiz-locale", request.nextUrl.searchParams.get("lang") === "es" ? "es" : "en");
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  for (const [key, value] of Object.entries(getSecurityHeaders())) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
