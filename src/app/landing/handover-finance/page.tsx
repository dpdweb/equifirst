import type { Metadata } from 'next';
import LandingLayout from '@/app/components/landing/LandingLayout';
import ProcessSection from '@/app/components/landing/ProcessSection';
import TestimonialsSection from '@/app/components/landing/TestimonialsSection';
import QuoteButton from '@/app/components/landing/QuoteButton';
import LeadForm from '@/app/components/landing/LeadForm';

export const metadata: Metadata = {
  title: 'Handover Finance — Equifirst Capital Financing',
  description:
    'Approaching property handover in Dubai? Equifirst secures your mortgage before the balance falls due — protecting your deposit and your timeline.',
};

const PAINS = [
  { icon: '⏰', title: 'Handover Is 60–90 Days Away', body: 'Your developer has given you a completion notice. The balance is due and your bank hasn\'t even started the valuation.' },
  { icon: '📋', title: 'Pre-Approval Expired', body: 'You got an approval 18 months ago. Your financial profile has changed. The bank now wants to start from scratch.' },
  { icon: '🏦', title: 'Wrong Bank for Your Developer', body: 'Not every bank is approved for every tower. Finding out at handover means missing your completion window.' },
  { icon: '💸', title: 'Valuation Comes in Short', body: 'Bank values the property below the purchase price. You need to fund a bigger gap than planned — fast.' },
];

const HELPS = [
  { title: 'Property is complete or completing within 90 days', sub: 'Whether it\'s a studio in Jumeirah Village or a penthouse in Downtown, we work across the full Dubai market.' },
  { title: 'You bought off-plan 2–4 years ago', sub: 'Your income, visa or employer may have changed. We re-package your profile across 17+ lenders.' },
  { title: 'You need multiple lender options quickly', sub: 'We run simultaneous submissions across banks — competitive rates, fastest turnaround.' },
  { title: 'Non-residents with a handover approaching', sub: 'Selected non-resident lenders are available. We identify the right match for your nationality and income structure.' },
];

const PROCESS_STEPS = [
  { label: '01', title: 'Document Review', description: 'We assess your income, visa, and developer details in 24 hours.' },
  { label: '02', title: 'Lender Match', description: 'Tower-approved bank shortlisted immediately.' },
  { label: '03', title: 'Fast Track Submission', description: 'Application submitted within 48 hours.' },
  { label: '04', title: 'Approval & Disbursal', description: 'Mortgage approved and funds released on completion.' },
];

const TESTIMONIALS = [
  {
    quote: "Isak went above and beyond to help me get my mortgage approved with my current bank. It would have been impossible without his great relationship with them and his persistence. Highly recommend him!",
    name: 'Mays A.',
  },
  {
    quote: 'I had an exceptional service from Sarah Nanakalei. She made the deal seem effortless from start to finish, assisted me with all my inquiries and very prompt with her responses.',
    name: 'Yang R.',
  },
  {
    quote: 'Highly recommend using this company for your mortgage advisory needs. Manan was very professional and supportive throughout the journey and we managed to finalize the process quickly.',
    name: 'Baha B.',
  },
];

const LEAD_FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text' as const, placeholder: 'Your name', required: true },
  { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'you@email.com', required: true },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel' as const, placeholder: '+971 50 000 0000', required: true },
  { name: 'project', label: 'Project / Developer', type: 'text' as const, placeholder: 'e.g. Emaar Harbour Views', required: true },
  { name: 'handover', label: 'Expected Handover Date', type: 'text' as const, placeholder: 'e.g. March 2026', required: true },
  {
    name: 'residency',
    label: 'Residency Status',
    type: 'select' as const,
    options: ['UAE National', 'UAE Resident (Expat)', 'Non-Resident / Overseas'],
    required: true,
  },
];

export default function HandoverFinancePage() {
  return (
    <LandingLayout quoteContext="handover finance">
      {/* ── HERO ── */}
      <section
        className="lp-section lp-bg-ivory lp-hero"
        style={{ paddingTop: 140, paddingBottom: 96 }}
      >
        <div className="lp-diamond tr" />
        <div className="lp-container">
          <div className="lp-hero-grid">
            <div className="lp-hero-content">
              <span className="lp-eyebrow">Handover Finance</span>
              <h1 className="lp-h1" style={{ marginTop: 22 }}>
                Your handover is coming.{' '}
                <span className="lp-italic-cyan">Is your mortgage ready?</span>
              </h1>
              <p className="lp-lede" style={{ marginBottom: 36 }}>
                Most buyers don&apos;t realise their handover mortgage needs 60–90 days to arrange.
                Equifirst fast-tracks your approval so you never miss your completion window.
              </p>
              <div className="lp-hero-ctas">
                <QuoteButton label="Get a Quote" />
              </div>
            </div>

            {/* Alert card */}
            <div
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(198,182,155,0.5)',
                borderRadius: 14,
                padding: 32,
                boxShadow: '0 18px 44px rgba(44,45,46,0.07)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#fef3cd',
                  border: '1px solid #f5c518',
                  borderRadius: 8,
                  padding: '10px 16px',
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 18 }}>⚠️</span>
                <span
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#7d5c00',
                  }}
                >
                  Don&apos;t risk your deposit
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 22,
                  lineHeight: 1.45,
                  color: 'var(--charcoal)',
                  marginBottom: 24,
                }}
              >
                Buyers who approach a bank at handover — with no pre-arranged finance — face an
                average 8-week approval wait.
              </p>
              <p
                style={{ fontFamily: 'var(--sans)', fontSize: 13, color: '#555', lineHeight: 1.6 }}
              >
                That&apos;s too long. Developer grace periods run 30–60 days. Miss them and your
                deposit is forfeited. Equifirst starts the process 90+ days before your keys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="lp-section lp-bg-cream">
        <div className="lp-container">
          <span className="lp-eyebrow">Why Handover Catches Buyers Off Guard</span>
          <h2 className="lp-h2" style={{ marginTop: 18 }}>
            Four situations we see every week.{' '}
            <span className="lp-italic-cyan">All avoidable.</span>
          </h2>
          <div
            className="lp-2col-paint-grid"
          >
            {PAINS.map((p) => (
              <div
                key={p.title}
                style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(198,182,155,0.5)',
                  borderRadius: 10,
                  padding: '28px 24px',
                  display: 'flex',
                  gap: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    width: 48,
                    height: 48,
                    background: 'var(--cream)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--sans)',
                      fontWeight: 700,
                      fontSize: 15,
                      color: 'var(--charcoal)',
                      marginBottom: 6,
                    }}
                  >
                    {p.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: '#555', lineHeight: 1.55 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="lp-section lp-bg-white">
        <div className="lp-container">
          <span className="lp-eyebrow">Who We Help</span>
          <h2 className="lp-h2" style={{ marginTop: 18 }}>
            We specialise in exactly this situation.{' '}
            <span className="lp-italic-cyan">Every profile.</span>
          </h2>
          <ul className="lp-checklist" style={{ marginTop: 40 }}>
            {HELPS.map((h) => (
              <li key={h.title}>
                <span className="lp-check-icon" />
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.sub}</p>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 40 }}>
            <QuoteButton label="Check Your Eligibility" />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <ProcessSection
        heading={
          <>
            Approval in weeks, not months.{' '}
            <span className="lp-italic-cyan">Built for urgency.</span>
          </>
        }
        steps={PROCESS_STEPS}
        bgClass="lp-bg-cream"
      />

      {/* ── LEAD FORM ── */}
      <section className="lp-section lp-bg-ivory" id="lead-form">
        <div className="lp-container" style={{ maxWidth: 620 }}>
          <div
            style={{
              background: 'var(--white)',
              border: '1px solid rgba(198,182,155,0.5)',
              borderRadius: 12,
              padding: 40,
              boxShadow: '0 14px 40px rgba(44,45,46,0.08)',
            }}
          >
            <LeadForm
              heading="Tell us about your handover. We'll build the plan."
              fields={LEAD_FIELDS}
              submitLabel="Start My Handover Finance"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection
        heading={
          <>
            Handovers completed.{' '}
            <span className="lp-italic-cyan">Deposits protected.</span>
          </>
        }
        testimonials={TESTIMONIALS}
      />

      {/* ── FINAL CTA ── */}
      <section className="lp-final-cream">
        <div className="lp-container">
          <span className="lp-eyebrow">
            <span className="lp-eyebrow-center">Act Before Your Completion Notice</span>
          </span>
          <h2 className="lp-h2" style={{ marginTop: 24 }}>
            Don&apos;t let the timeline catch you out.{' '}
            <span className="lp-italic-cyan">Start now.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 17,
              color: '#555',
              maxWidth: 540,
              margin: '24px auto 32px',
            }}
          >
            A 20-minute call is enough to assess your eligibility and identify the right lenders
            for your tower and profile.
          </p>
          <QuoteButton label="Get a Quote" />
        </div>
      </section>
    </LandingLayout>
  );
}
