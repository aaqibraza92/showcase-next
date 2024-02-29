import { NextResponse } from 'next/server'
import { json } from 'react-router-dom';
 
export function middleware(request) {
  // const pvtRoutes = [
  //   "/",
  //   "/cart"
  // ]
  const path = request?.nextUrl?.pathname;
  console.log("==LOGIN=======>",request?.nextUrl?.pathname);
  // const private_route = pvtRoutes.includes(request?.nextUrl?.pathname)
  const isPublicPath = path === '/login' || path ==='/register';
  // const currentUser = JSON.parse(request?.cookies?.get('user_auth')?.value);
  const token = request?.cookies.get('userData')?.value || '';
  
  if (isPublicPath && token) {
    //  document.getElementById('loginbutton').click()
    return NextResponse.redirect(new URL('/', request.url))
  }
  if(!isPublicPath && !token ){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/diamonds','/login','/register'],
}