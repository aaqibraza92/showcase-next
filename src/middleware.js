import { NextResponse } from 'next/server'
 
export function middleware(request) {
  // const pvtRoutes = [
  //   "/",
  //   "/cart"
  // ]
  const path = request?.nextUrl?.pathname; //current path name
  // const private_route = pvtRoutes.includes(request?.nextUrl?.pathname)
  const isPublicPath = path === '/login' || path ==='/';
  // const currentUser = JSON.parse(request?.cookies?.get('user_auth')?.value);
  const token = request?.cookies.get('token')?.value || '';
  
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if(!isPublicPath && !token ){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
//private routes
export const config = {
  matcher: ['/fine-jewelry','/about','/blog'],
}