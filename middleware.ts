import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isWalletConnected = request.cookies.get("isWalletConnected");

  const publicPath = path === "/login" || path === "/register";

  if (!publicPath && !isWalletConnected)
    return NextResponse.redirect(new URL("/login", request.url));

  if (publicPath && isWalletConnected)
    return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/search",
    "/create",
    "/messages",
    "profile/:path*",
    "/notifications",
  ],
};
