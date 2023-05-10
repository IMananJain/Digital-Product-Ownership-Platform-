import { NextResponse } from "next/server";
import { salesAuthenticatedRoutes, supportAuthenticatedRoutes, editorAuthenticatedRoutes } from "./app/constants/authenticatedRoutes";

export default function middleware(req) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon.ico') || pathname.startsWith('/images')) {
    return NextResponse.next()
  }
  const role = req.cookies.get("db_s_userRole");
  if (role === undefined && !req.url.includes('/login')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  else if(role?.value === 'SALES' && salesAuthenticatedRoutes.includes(pathname)){
    return NextResponse.redirect(new URL('/hold', req.url))
  }
  else if(role?.value === 'SUPPORT' && supportAuthenticatedRoutes.includes(pathname)){
    return NextResponse.redirect(new URL('/hold', req.url))
  }
  else if(role?.value === 'EDITOR' && editorAuthenticatedRoutes.includes(pathname)){
    return NextResponse.redirect(new URL('/hold', req.url))
  }
  return NextResponse.next()
}