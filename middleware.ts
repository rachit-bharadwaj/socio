import { type NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const walletAddress = request.cookies.get("walletAddress");

  const publicPath = path === "/login" || path === "/register";

  if (!publicPath && !walletAddress)
    return NextResponse.redirect(new URL("/login", request.url));

  if (publicPath && walletAddress)
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
    "/notifications",
  ],
};
