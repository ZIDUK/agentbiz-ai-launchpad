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

  const response = NextResponse.next();
  for (const [key, value] of Object.entries(getSecurityHeaders())) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
