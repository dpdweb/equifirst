import type { Metadata } from 'next';
import LandingLayout from '@/app/components/landing/LandingLayout';
import ProcessSection from '@/app/components/landing/ProcessSection';
import TestimonialsSection from '@/app/components/landing/TestimonialsSection';
import QuoteButton from '@/app/components/landing/QuoteButton';
import LeadForm from '@/app/components/landing/LeadForm';

export const metadata: Metadata = {
  title: 'Buy vs Rent — Equifirst Capital Financing',
  description:
    'The honest numbers behind buying vs renting in Dubai. Equifirst runs the real comparison for your situation across 17+ lenders.',
};

const COMPARE_ROWS = [
  { factor: 'Monthly outgoing', buy: 'Mortgage payment (fixed or variable)', rent: 'Rent (typically rising 10–20% at renewal)' },
  { factor: 'Equity building', buy: '✅ Every payment reduces loan balance', rent: '❌ Zero equity accumulation' },
  { factor: 'Capital growth', buy: '✅ Full upside on property appreciation', rent: '❌ Landlord captures all gains' },
  { factor: 'Flexibility', buy: 'Lower — selling takes 30–60 days', rent: 'Higher — exit on lease term end' },
  { factor: 'Upfront cost', buy: 'Down payment + DLD + mortgage fees', rent: 'Security deposit + agent commission' },
  { factor: 'Rate of true cost', buy: 'Typically 20–30% lower after 5 years', rent: 'Rises with market — no ceiling' },
];

const PROCESS_STEPS = [
  { label: '01', title: 'Situation Review', description: 'Income, lifestyle timeline and current rent mapped in 24 hrs.' },
  { label: '02', title: 'Break-Even Modelling', description: 'We calculate the exact point buying becomes cheaper for your numbers.' },
  { label: '03', title: 'Lender Options', description: '17+ lenders compared — rate, LTV, tenor and penalties shown side by side.' },
  { label: '04', title: 'Pre-Approval', description: 'Mortgage pre-approved so you can move fast when you find the right property.' },
  { label: '05', title: 'Purchase & Keys', description: 'End-to-end support from offer to title deed.' },
];

const TESTIMONIALS = [
  {
    quote: "Isak went above and beyond to help me get my mortgage approved with my current bank. It would have been impossible without his great relationship with them. He's professional and truly supportive.",
    name: 'Mays A.',
  },
  {
    quote: 'I had an exceptional service from Sarah Nanakalei. She made the deal seem effortless from start to finish, assisted me with all my inquiries and was very prompt with her responses.',
    name: 'Yang R.',
  },
  {
    quote: 'Highly recommend using this company for your mortgage advisory needs. Manan was very professional throughout the journey and we managed to finalize the process quickly.',
    name: 'Baha B.',
  },
];

const LEAD_FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text' as const, placeholder: 'Your name', required: true },
  { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'you@email.com', required: true },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel' as const, placeholder: '+971 50 000 0000', required: true },
  { name: 'currentRent', label: 'Current Monthly Rent (AED)', type: 'text' as const, placeholder: 'e.g. 12,000', required: true },
  { name: 'budget', label: 'Purchase Budget (AED)', type: 'text' as const, placeholder: 'e.g. 2,000,000', required: false },
  {
    name: 'residency',
    label: 'Residency Status',
    type: 'select' as const,
    options: ['UAE National', 'UAE Resident (Expat)', 'Non-Resident / Overseas'],
    required: true,
  },
];

export default function BuyVsRentPage() {
  return (
    <LandingLayout quoteContext="buy vs rent analysis">
      {/* ── HERO ── */}
      <section
        className="lp-section lp-bg-ivory lp-hero"
        style={{ paddingTop: 140, paddingBottom: 96 }}
      >
        <div className="lp-diamond tr" />
        <div className="lp-container">
          <div className="lp-hero-grid">
            <div className="lp-hero-content">
              <span className="lp-eyebrow">Buy vs Rent</span>
              <h1 className="lp-h1" style={{ marginTop: 22 }}>
                Renting feels safe.{' '}
                <span className="lp-italic-cyan">The numbers often disagree.</span>
              </h1>
              <p className="lp-lede" style={{ marginBottom: 36 }}>
                Most people rent because buying feels complex. Equifirst runs the real
                comparison for your situation — income, lifestyle, timeline — and shows you
                the honest numbers before you decide.
              </p>
              <div className="lp-hero-ctas">
                <QuoteButton label="Run My Comparison" />
                <a href="#lead-form" className="lp-btn lp-btn-cyan-outline">
                  See the Numbers
                </a>
              </div>
            </div>

            {/* Stat cards */}
            <div className="lp-stat-grid">
              {[
                { num: '30%', label: 'Average annual rent increase at renewal in Dubai (2023–2024)', color: '#c0392b' },
                { num: 'AED 0', label: 'Broker fee to you — Equifirst is paid by the lender', color: 'var(--cyan)' },
                { num: '17+', label: 'Banks on our panel — we find the most competitive rate', color: 'var(--cyan)' },
                { num: '5 yrs', label: 'Typical break-even point where buying beats renting in Dubai', color: 'var(--charcoal)' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid rgba(198,182,155,0.5)',
                    borderRadius: 10,
                    padding: '24px 20px',
                    boxShadow: '0 6px 20px rgba(44,45,46,0.06)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 38,
                      color: s.color,
                      fontWeight: 500,
                      marginBottom: 8,
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 12,
                      color: '#555',
                      lineHeight: 1.5,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTRARIAN SECTION ── */}
      <section className="lp-section lp-bg-white">
        <div className="lp-container">
          <span className="lp-eyebrow">The Honest Case for Buying</span>
          <h2 className="lp-h2" style={{ marginTop: 18, maxWidth: 720 }}>
            Renting is not the low-risk option people think it is.{' '}
            <span className="lp-italic-cyan">Here&apos;s why.</span>
          </h2>
          <div
            className="lp-test-grid">
            {[
              {
                title: 'Rent is not fixed',
                body: 'RERA allows landlords to increase rent by 5–20% at each renewal if current rent is below market. Your "affordable" apartment gets more expensive every year.',
              },
              {
                title: 'You are funding someone else\'s mortgage',
                body: 'Your rent covers the landlord\'s mortgage, maintenance, and profit. You carry none of the upside from appreciation.',
              },
              {
                title: 'The "flexibility premium" is expensive',
                body: 'The cost of not buying over 10 years — in equity foregone, rent paid, and capital appreciation missed — is typically AED 1–3M on a median Dubai property.',
              },
            ].map((c) => (
              <div
                key={c.title}
          
                style={{
                  background: 'var(--cream)',
                  border: '1px solid rgba(198,182,155,0.4)',
                  borderRadius: 10,
                  padding: '28px 24px',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 22,
                    fontWeight: 500,
                    color: 'var(--charcoal)',
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h4>
                <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: '#555', lineHeight: 1.6 }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="lp-section lp-bg-cream">
        <div className="lp-container">
          <span className="lp-eyebrow">Side By Side</span>
          <h2 className="lp-h2" style={{ marginTop: 18 }}>
            Buying vs renting — the real comparison.{' '}
            <span className="lp-italic-cyan">No spin.</span>
          </h2>
          <div className="lp-table-scroll" style={{ marginTop: 44 }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: 'var(--white)',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(44,45,46,0.06)',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      background: 'var(--charcoal)',
                      color: 'var(--white)',
                      fontFamily: 'var(--sans)',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase' as const,
                      padding: '14px 16px',
                      textAlign: 'left' as const,
                    }}
                  >
                    Factor
                  </th>
                  <th
                    style={{
                      background: 'var(--cyan)',
                      color: 'var(--white)',
                      fontFamily: 'var(--sans)',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase' as const,
                      padding: '14px 16px',
                      textAlign: 'left' as const,
                    }}
                  >
                    Buying
                  </th>
                  <th
                    style={{
                      background: 'var(--charcoal)',
                      color: 'rgba(255,255,255,0.6)',
                      fontFamily: 'var(--sans)',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase' as const,
                      padding: '14px 16px',
                      textAlign: 'left' as const,
                    }}
                  >
                    Renting
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.factor}>
                    <td
                      style={{
                        padding: '13px 16px',
                        fontFamily: 'var(--sans)',
                        fontSize: 13,
                        fontWeight: 700,
                        color: 'var(--charcoal)',
                        borderBottom: '1px solid rgba(44,45,46,0.05)',
                        background: i % 2 === 0 ? 'var(--white)' : 'var(--cream)',
                      }}
                    >
                      {row.factor}
                    </td>
                    <td
                      style={{
                        padding: '13px 16px',
                        fontFamily: 'var(--sans)',
                        fontSize: 13,
                        color: 'var(--charcoal)',
                        borderBottom: '1px solid rgba(44,45,46,0.05)',
                        background: i % 2 === 0 ? 'var(--white)' : 'var(--cream)',
                      }}
                    >
                      {row.buy}
                    </td>
                    <td
                      style={{
                        padding: '13px 16px',
                        fontFamily: 'var(--sans)',
                        fontSize: 13,
                        color: '#555',
                        borderBottom: '1px solid rgba(44,45,46,0.05)',
                        background: i % 2 === 0 ? 'var(--white)' : 'var(--cream)',
                      }}
                    >
                      {row.rent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <ProcessSection
        heading={
          <>
            From comparison to keys.{' '}
            <span className="lp-italic-cyan">Step by step.</span>
          </>
        }
        steps={PROCESS_STEPS}
      />

      {/* ── LEAD FORM ── */}
      <section className="lp-section lp-bg-cream" id="lead-form">
        <div className="lp-container">
          <div className="lp-hero-grid" style={{ alignItems: 'start' }}>
            <div>
              <span className="lp-eyebrow">Run Your Numbers</span>
              <h2 className="lp-h2" style={{ marginTop: 18 }}>
                Let&apos;s find out if buying makes sense{' '}
                <span className="lp-italic-cyan">for you.</span>
              </h2>
              <p className="lp-lede" style={{ marginBottom: 24 }}>
                Tell us your current rent and salary. We&apos;ll show you the exact break-even
                point, the mortgage options available to you, and whether buying beats renting
                for your specific situation.
              </p>
              <ul className="lp-checklist">
                {[
                  { h: 'Personalised, not generic', p: 'Built around your income, timeline and area preferences.' },
                  { h: '17+ lenders compared', p: 'We find the best rate for your profile, not the easiest approval.' },
                  { h: 'Free — always', p: 'Equifirst is paid by the lender. You pay nothing to us.' },
                ].map((item) => (
                  <li key={item.h}>
                    <span className="lp-check-icon" />
                    <div>
                      <h4>{item.h}</h4>
                      <p>{item.p}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(198,182,155,0.5)',
                borderRadius: 12,
                padding: 36,
                boxShadow: '0 14px 40px rgba(44,45,46,0.08)',
              }}
            >
              <LeadForm
                heading="Run my buy vs rent comparison."
                fields={LEAD_FIELDS}
                submitLabel="Run My Comparison"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection
        heading={
          <>
            Renters who bought.{' '}
            <span className="lp-italic-cyan">And never looked back.</span>
          </>
        }
        testimonials={TESTIMONIALS}
      />

      {/* ── FINAL CTA ── */}
      <section className="lp-final-cream">
        <div className="lp-container">
          <span className="lp-eyebrow">
            <span className="lp-eyebrow-center">Stop Paying Someone Else&apos;s Mortgage</span>
          </span>
          <h2 className="lp-h2" style={{ marginTop: 24 }}>
            The numbers are ready when you are.{' '}
            <span className="lp-italic-cyan">Run yours today.</span>
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
            A 20-minute call gives you your personalised buy vs rent comparison, a mortgage
            eligibility check, and a shortlist of the best lender options for your profile.
          </p>
          <QuoteButton label="Run My Comparison" />
        </div>
      </section>
    </LandingLayout>
  );
}
