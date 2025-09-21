import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  const previewKey = process.env.NEXT_PUBLIC_REVIEW_KEY || "letmein";
  const hasAccess = req.cookies.get("review_access")?.value === "true";

  // ✅ Capture Google Ads params (gclid, utm_*) into cookies
  const campaignParams = ["gclid", "utm_source", "utm_campaign", "utm_medium", "utm_term"];

  const res = NextResponse.next();

  campaignParams.forEach((param) => {
    const value = url.searchParams.get(param);
    if (value) {
      res.cookies.set(param, value, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
    }
  });

  // ✅ Handle preview key (grant review access)
  if (url.searchParams.get("review") === previewKey) {
    const redirectUrl = new URL(url.pathname || "/", req.url); // keep current path if possible
    const res = NextResponse.redirect(redirectUrl);
    res.cookies.set("review_access", "true", { path: "/" });
    return res;
  }

  // ✅ Allow certain paths always
  if (
    url.pathname.startsWith("/coming-soon") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/_next") ||
    url.pathname.match(/\.(.*)$/)
  ) {
    return res;
  }

  // ✅ Block others if no review access
  if (!hasAccess) {
    return NextResponse.redirect(new URL("/coming-soon", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
