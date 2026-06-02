'use client';

import { useEffect } from 'react';
import MortgageForm from '@/app/components/MortgageForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Optional pre-selected page context shown as subtext */
  context?: string;
}

export default function QuoteModal({ isOpen, onClose, context }: QuoteModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lp-modal open" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
      <div className="lp-modal-backdrop" onClick={onClose} aria-hidden="true" />

      <div className="lp-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="lp-modal-x" onClick={onClose} aria-label="Close quote form">
          ×
        </button>

        <div className="lp-modal-header">
          <span className="lp-eyebrow">Start Here</span>
          <h2 id="quote-modal-title">Get your mortgage options</h2>
          <p>
            {context
              ? `Complete the details below and Equifirst will review your ${context}.`
              : 'Complete the details below and Equifirst will review your options.'}
          </p>
        </div>

        <div className="form-container-equi lp-mortgage-modal-form">
          <MortgageForm />
        </div>
      </div>
    </div>
  );
}
