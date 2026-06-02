'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/landing/buy-vs-rent',      label: 'Buy vs Rent' },
  { href: '/landing/handover-finance', label: 'Handover Finance' },
  { href: '/landing/equity-release',   label: 'Equity Release' },
  { href: '/landing/off-plan',         label: 'Off-Plan' },
];

interface LandingNavProps {
  onQuoteClick: () => void;
  variant?: 'light' | 'dark' | 'cyan';
}

export default function LandingNav({ onQuoteClick, variant = 'light' }: LandingNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [menuOpen]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Close on Escape key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const navClass = [
    'lp-nav',
    scrolled           ? 'scrolled' : '',
    variant === 'dark' ? 'dark'     : '',
    variant === 'cyan' ? 'cyan'     : '',
  ]
    .filter(Boolean)
    .join(' ');

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Backdrop */}
      {menuOpen && (
        <div
          className="lp-drawer-backdrop"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      <nav className={navClass} id="lp-nav" ref={navRef}>
        <div className="lp-nav-inner">

          {/* Logo */}
          <Link href="/" className="lp-logo">
            <Image
              src="/assets/images/equifirst_logo.png"
              alt="Equifirst Capital Financing"
              width={220}
              height={150}
              priority
              style={{ height: 150, width: 'auto' }}
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="lp-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — hidden on mobile via CSS */}
          <button
            className="lp-nav-cta lp-nav-cta-desktop"
            onClick={onQuoteClick}
          >
            Get a Quote
          </button>

          {/* Hamburger — visible on mobile only */}
          <button
            className="burger"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="lp-mobile-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`burger-icon${menuOpen ? ' open' : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>

        </div>

        {/* Mobile drawer */}
        <div
          id="lp-mobile-drawer"
          className={`lp-mobile-drawer${menuOpen ? ' open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <ul className="lp-mobile-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="lp-mobile-cta">
            <button
              className="lp-nav-cta lp-btn-block"
              onClick={() => { closeMenu(); onQuoteClick(); }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
