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

        {submitted ? (
          /* ── Thank-you state ── */
          <div className="lp-modal-thanks">
            <div className="lp-thanks-tick">✓</div>
            <h3>We&apos;ll be in touch shortly.</h3>
            <p>
              One of our advisors will reach out within one business day to walk through your
              options.
            </p>
          </div>
        ) : (
          /* ── Form state ── */
          <>
            <span className="lp-eyebrow">Free Consultation</span>
            <h3>Get a personalised quote</h3>
            <p className="lp-modal-sub">
              {context
                ? `Tell us a bit about your ${context} needs and we'll come back with the right structure.`
                : 'Tell us a bit about your situation and we\'ll come back with the right structure for you.'}
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="lp-field">
                <label htmlFor="qm-name">Full Name</label>
                <input
                  id="qm-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="lp-field">
                <label htmlFor="qm-email">Email</label>
                <input
                  id="qm-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="lp-field">
                <label htmlFor="qm-phone">Phone / WhatsApp</label>
                <input
                  id="qm-phone"
                  name="phone"
                  type="tel"
                  placeholder="+971 50 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="lp-field">
                <label htmlFor="qm-residency">Residency Status</label>
                <select
                  id="qm-residency"
                  name="residency"
                  value={form.residency}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select status</option>
                  <option value="uae-national">UAE National</option>
                  <option value="uae-resident">UAE Resident (Expat)</option>
                  <option value="non-resident">Non-Resident / Overseas</option>
                </select>
              </div>

              <div className="lp-field">
                <label htmlFor="qm-message">How can we help? (optional)</label>
                <textarea
                  id="qm-message"
                  name="message"
                  rows={3}
                  placeholder="e.g. Off-plan in Emaar Creek Beach, need finance before handover…"
                  value={form.message}
                  onChange={handleChange}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="lp-btn lp-btn-cyan lp-btn-block"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Get My Free Quote'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
