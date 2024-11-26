import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
   const database = process.env.NEXT_PUBLIC_SUPABASE_URL
   const host = database?.split('/')[1].split('.')[0]
   const token = request.cookies.get(`sb-${host}-auth-token`)

   if (!token) {
      return NextResponse.redirect(new URL('/sign-up', request.url));
   }
   //
}

export const config = {
   matcher: ['/dashboard/:path*']
}