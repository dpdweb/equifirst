'use client';

import { useState, useCallback } from 'react';

interface LeadFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface LeadFormProps {
  heading: string;
  subheading?: string;
  fields: LeadFormField[];
  submitLabel?: string;
  onSuccess?: () => void;
}

export default function LeadForm({
  heading,
  subheading,
  fields,
  submitLabel = 'Find Out What You Qualify For',
  onSuccess,
}: LeadFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up real submission
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
    onSuccess?.();
  };

  return (
    <div className="lp-elig-form">
      <span className="lp-eyebrow">Start Here</span>
      <h3
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 500,
          fontSize: 26,
          margin: '8px 0 24px',
          color: 'var(--charcoal)',
          lineHeight: 1.25,
        }}
      >
        {heading}
      </h3>
      {subheading && (
        <p style={{ fontSize: 14, color: '#666', marginBottom: 20, lineHeight: 1.55 }}>
          {subheading}
        </p>
      )}

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <div className="lp-thanks-tick" style={{ margin: '0 auto 16px' }}>✓</div>
          <p style={{ fontFamily: 'var(--sans)', color: '#555' }}>
            Thanks! We&apos;ll be in touch within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {fields.map((field) => (
            <div className="lp-field" key={field.name}>
              <label htmlFor={`lf-${field.name}`}>{field.label}</label>
              {field.type === 'select' ? (
                <select
                  id={`lf-${field.name}`}
                  name={field.name}
                  value={values[field.name] ?? ''}
                  onChange={handleChange}
                  required={field.required}
                >
                  <option value="">Select…</option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={`lf-${field.name}`}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={values[field.name] ?? ''}
                  onChange={handleChange}
                  required={field.required}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="lp-btn lp-btn-cyan lp-btn-block"
            disabled={loading}
          >
            {loading ? 'Sending…' : submitLabel}
          </button>
        </form>
      )}
    </div>
  );
}
