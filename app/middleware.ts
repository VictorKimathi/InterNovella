// middleware.ts
import { clerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((req) => {
  const url = new URL(req.url);
  const { pathname } = url;
  const { userId } = getAuth(req);

  // Redirect to /sign-in if user is not authenticated and accessing protected route
  if (!userId && pathname === "/books") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Allow access to all other routes, including /, /sign-in, etc.
  return NextResponse.next();
});

export const config = { matcher: ["/books"] };
