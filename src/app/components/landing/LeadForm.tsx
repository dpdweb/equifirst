'use client';

import { useCallback, useMemo, useState } from 'react';

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

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    first_name: parts[0] || 'Landing',
    last_name: parts.slice(1).join(' ') || '-',
  };
}

export default function LeadForm({
  heading,
  subheading,
  fields,
  submitLabel = 'Find Out What You Qualify For',
  onSuccess,
}: LeadFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const requiredFields = useMemo(
    () => fields.filter((field) => field.required).map((field) => field.name),
    [fields]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: '' }));
      setServerError('');
    },
    []
  );

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    requiredFields.forEach((name) => {
      if (!String(values[name] || '').trim()) {
        nextErrors[name] = 'This field is required';
      }
    });

    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (!validate()) return;

    const { first_name, last_name } = splitName(values.name || values.full_name || '');

    const payload = {
      ...values,
      first_name,
      last_name,
      email: values.email || '',
      phone: values.phone || '',
      lead_source: 'equifirst.ae',
      form_name: heading,
      landing_page:
        typeof window !== 'undefined' ? window.location.pathname : 'landing-page',
      landing_url: typeof window !== 'undefined' ? window.location.href : '',
      submitted_at: new Date().toISOString(),
    };

    setLoading(true);

    try {
      const response = await fetch('/zapapi/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Lead submission failed');
      }

      setSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error(error);
      setServerError('We could not submit the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lp-elig-form">
      <span className="lp-eyebrow">Start Here</span>
      <h3 className="lp-lead-form-title">{heading}</h3>
      {subheading && <p className="lp-lead-form-subtitle">{subheading}</p>}

      {submitted ? (
        <div className="lp-lead-form-success">
          <div className="lp-thanks-tick">✓</div>
          <p>Thanks! We&apos;ll be in touch within one business day.</p>
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
                  aria-invalid={Boolean(errors[field.name])}
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
                  aria-invalid={Boolean(errors[field.name])}
                />
              )}
              {errors[field.name] && (
                <p className="lp-field-error">{errors[field.name]}</p>
              )}
            </div>
          ))}

          {serverError && <p className="lp-form-error">{serverError}</p>}

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
