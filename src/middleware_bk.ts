import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  const previewKey = process.env.NEXT_PUBLIC_REVIEW_KEY || 'letmein'
  const hasAccess = req.cookies.get('review_access')?.value === 'true'

  // grant access with secret
  if (url.searchParams.get('review') === previewKey) {
    const res = NextResponse.redirect(new URL('/', req.url)) // redirect to home (or keep current url)
    res.cookies.set('review_access', 'true', { path: '/' })
    return res
  }

  // allow these
  if (
    url.pathname.startsWith('/coming-soon') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/_next') ||
    url.pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next()
  }

  // block others
  if (!hasAccess) {
    return NextResponse.redirect(new URL('/coming-soon', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
