import { NextResponse } from "next/server";
import authenticatedRoutes from "@/app/constants/authenticatedRoutes";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico') || pathname.startsWith("/images")) {
    return NextResponse.next()
  }
  const role = req.cookies.get("db_login");
  if (role?.value !== "true" && authenticatedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/hold', req.url))
  }
  if (role?.value === "true" && pathname === '/hold') {
    return NextResponse.redirect(new URL('/', req.url))
  }
  return NextResponse.next();
}