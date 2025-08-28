import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  // Secret key for reviewers
  const previewKey = process.env.NEXT_PUBLIC_REVIEW_KEY || 'letmein'

  // Check if user already has access cookie
  const hasAccess = req.cookies.get('review_access')?.value === 'true'

  // Check if ?review=secret is in URL (grant access)
  if (url.searchParams.get('review') === previewKey) {
    const res = NextResponse.next()
    res.cookies.set('review_access', 'true', { path: '/' })
    return res
  }

  // Allow access to:
  // - coming-soon page
  // - API routes
  // - Next.js assets
  // - static files (css, js, images, fonts, etc.)
  if (
    url.pathname.startsWith('/coming-soon') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/_next') ||
    url.pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next()
  }

  // If no access → redirect to /coming-soon
  if (!hasAccess) {
    url.pathname = '/coming-soon'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
