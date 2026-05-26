'use client';

import { useState, useEffect, useCallback } from 'react';
import MortgageForm from '@/app/components/MortgageForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Optional pre-selected page context shown as subtext */
  context?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  residency: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  residency: '',
};

export default function QuoteModal({ isOpen, onClose, context }: QuoteModalProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your actual form submission endpoint
    await new Promise((r) => setTimeout(r, 900));

    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setSubmitted(false);
      setForm(INITIAL_FORM);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`lp-modal ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="lp-modal-backdrop" onClick={handleClose} />

      <div className="lp-modal-card">
        <button className="lp-modal-x" onClick={handleClose} aria-label="Close">
          ×
        </button>

      <div className="form-container-equi">
        <MortgageForm />
      </div>
      </div>
    </div>
  );
}
