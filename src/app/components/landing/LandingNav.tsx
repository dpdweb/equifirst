'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/landing/buy-vs-rent', label: 'Buy vs Rent' },
  { href: '/landing/handover-finance', label: 'Handover Finance' },
  { href: '/landing/equity-release', label: 'Equity Release' },
  { href: '/landing/off-plan', label: 'Off-Plan' },
];

interface LandingNavProps {
  onQuoteClick: () => void;
  /** Colour variant for the nav bar. Defaults to 'light'. */
  variant?: 'light' | 'dark' | 'cyan';
}

export default function LandingNav({ onQuoteClick, variant = 'light' }: LandingNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navClass = [
    'lp-nav',
    scrolled ? 'scrolled' : '',
    variant === 'dark' ? 'dark' : '',
    variant === 'cyan' ? 'cyan' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClass} id="lp-nav">
      <div className="lp-nav-inner">
        {/* Logo */}
        <div className="lp-logo ">
          <Image
            src="/assets/images/equifirst_logo.png"
            alt="Equifirst Capital Financing"
            width={220}
            height={150}
            priority
            style={{ height: 150, width: 'auto' }}
          />
        </div>

        {/* Links */}
        <ul className="lp-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="lp-nav-cta" onClick={onQuoteClick}>
          Get a Quote
        </button>
      </div>
    </nav>
  );
}
