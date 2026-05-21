'use client';

import { useState, useCallback, useEffect } from 'react';
import LandingNav from './LandingNav';
import LandingFooter from './LandingFooter';
import QuoteModal from './QuoteModal';
import '@/app/styles/landing/globals.css';


interface LandingLayoutProps {
  children: React.ReactNode;
  navVariant?: 'light' | 'dark' | 'cyan';
  /** Passed to QuoteModal to customise the message */
  quoteContext?: string;
}

export default function LandingLayout({
  children,
  navVariant = 'light',
  quoteContext,
}: LandingLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  // Allow Server Component children to trigger the modal via a custom event
  useEffect(() => {
    document.addEventListener('lp:openQuote', openModal);
    return () => document.removeEventListener('lp:openQuote', openModal);
  }, [openModal]);

  return (
    <>
      <LandingNav onQuoteClick={openModal} variant={navVariant} />
      <main>{children}</main>
      <LandingFooter />
      <QuoteModal isOpen={modalOpen} onClose={closeModal} context={quoteContext} />
    </>
  );
}
