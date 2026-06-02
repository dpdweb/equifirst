import type { Metadata } from 'next';
import '@/app/styles/landing/globals.css';

export const metadata: Metadata = {
  // Shared metadata defaults - override per page
  robots: { index: true, follow: true },
};

/**
 * This layout intentionally does NOT include the main site's
 * <Header> or <Footer> — landing pages manage their own.
 * It renders children directly so each landing page's own
 * LandingLayout (with LandingNav + LandingFooter) takes over.
 */
export default function LandingRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}