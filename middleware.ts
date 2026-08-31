import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "perpex_admin_session";

async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!token || !secret) return false;

  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicAdminRoute = pathname === "/admin/login";
  const isPublicApiRoute = pathname === "/api/admin/login";

  if (isPublicAdminRoute || isPublicApiRoute) {
    return NextResponse.next();
  }

  const authed = await isAuthenticated(request);

  if (!authed) {
    if (pathname.startsWith("/api/admin")) {
      return NextResponse.json({ success: false, error: "Authentication required." }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
