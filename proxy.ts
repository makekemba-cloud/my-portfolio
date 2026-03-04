import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function proxy(request: NextRequest) {
  // Admin routes protection
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};