import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicPath =
    path === "/admin" || path === "/login" || path === "/register";
  const adminToken = request.cookies.get("adminToken") || "";

  if (path === "/")
    return NextResponse.redirect(new URL("/admin", request.url));

  if (publicPath && adminToken)
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));

  if (!publicPath && !adminToken)
    return NextResponse.redirect(new URL("/admin", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/register", "/admin/:path*"],
};
