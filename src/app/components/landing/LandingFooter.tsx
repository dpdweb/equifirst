/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import Image from 'next/image';

export default function LandingFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-inner">
        {/* Logo */}
        <a href="/" className="lp-logo" aria-label="Go to Equifirst home page">
          <Image
            unoptimized
            src="/assets/images/footer-logo.svg"
            alt="Equifirst Capital Financing"
            width={100}
            height={100}
            style={{ height: 100, width: 'auto' }}
          />
        </a>

        {/* Centre copy */}
        <div className="lp-footer-center">
          © {new Date().getFullYear()} Equifirst Capital Financing ·{' '}
          <a href="https://equifirst.ae/" style={{ color: 'inherit' }}>
            equifirst.ae
          </a>{' '}
          · info@equifirst.ae
          <br />
          2803 Control Tower, Motor City, Dubai
        </div>

        {/* Links */}
        <ul className="lp-footer-links">
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
          <li>
            <a href="https://equifirst.ae/" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
