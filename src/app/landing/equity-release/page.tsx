import type { Metadata } from 'next';
import LandingLayout from '@/app/components/landing/LandingLayout';
import ProcessSection from '@/app/components/landing/ProcessSection';
import TestimonialsSection from '@/app/components/landing/TestimonialsSection';
import QuoteButton from '@/app/components/landing/QuoteButton';
import LeadForm from '@/app/components/landing/LeadForm';
import MortgageForm from '@/app/components/MortgageForm';

export const metadata: Metadata = {
  title: 'Equity Release — Equifirst Capital Financing',
  description:
    'Unlock the equity in your UAE property without selling. Equifirst structures equity release finance across 17+ lenders for UAE Nationals, residents and non-residents.',
};

const STATS = [
  { num: 'AED 2M+', label: 'Average equity released per client' },
  { num: '17+', label: 'Lender panel' },
  { num: '70%', label: 'Max LTV for UAE Nationals' },
  { num: '60%', label: 'Max LTV for non-residents' },
];

const PROCESS_STEPS = [
  { label: '01', title: 'Property Assessment', description: 'We value your property and calculate available equity based on current LTV rules.' },
  { label: '02', title: 'Profile Review', description: 'Income, residency and existing liabilities mapped across 17+ lender criteria.' },
  { label: '03', title: 'Lender Submission', description: 'Full application submitted to the most competitive lenders simultaneously.' },
  { label: '04', title: 'Funds Released', description: 'Approval issued, valuation completed, funds disbursed directly to you.' },
];

const QUALIFIES = [
  { who: 'UAE Nationals', details: 'Up to 70% LTV · Min salary AED 15,000 · Salaried or self-employed · 25 year tenor' },
  { who: 'Expat Residents', details: 'Up to 65% LTV · Min salary AED 15,000 · Salaried or self-employed · 25 year tenor' },
  { who: 'Non-Residents', details: 'Up to 60% LTV · USD 5,000+ equiv. income · Documented income sources · 20 year tenor' },
];

const TESTIMONIALS = [
  {
    quote: "Isak went above and beyond to help me get my mortgage approved. It would have been impossible without his great relationship with the bank and his persistence. Truly supportive.",
    name: 'Mays A.',
  },
  {
    quote: 'I had an exceptional service from Sarah Nanakalei. She made the deal seem effortless from start to finish and was very prompt with her responses. Highly recommend.',
    name: 'Yang R.',
  },
  {
    quote: 'Highly recommend for your mortgage advisory needs. Manan was very professional and supportive throughout the journey and we managed to finalize the process quickly with the bank.',
    name: 'Baha B.',
  },
];

const LEAD_FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text' as const, placeholder: 'Your name', required: true },
  { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'you@email.com', required: true },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel' as const, placeholder: '+971 50 000 0000', required: true },
  { name: 'propertyValue', label: 'Estimated Property Value (AED)', type: 'text' as const, placeholder: 'e.g. 3,500,000', required: true },
  { name: 'outstanding', label: 'Existing Mortgage Balance (AED)', type: 'text' as const, placeholder: 'e.g. 1,200,000 or 0', required: true },
  {
    name: 'residency',
    label: 'Residency Status',
    type: 'select' as const,
    options: ['UAE National', 'UAE Resident (Expat)', 'Non-Resident / Overseas'],
    required: true,
  },
];

export default function EquityReleasePage() {
  return (
    <LandingLayout quoteContext="equity release">
      {/* ── HERO ── */}
      <section
        className="lp-section lp-bg-charcoal lp-hero"
        style={{ paddingTop: 140, paddingBottom: 96 }}
      >
        <div className="lp-diamond on-dark tr" />
        <div className="lp-container">
          <div className="lp-hero-grid">
            <div className="lp-hero-content">
              <span className="lp-eyebrow on-dark">Equity Release</span>
              <h1 className="lp-h1 on-dark" style={{ marginTop: 22 }}>
                Your property holds capital.{' '}
                <span className="lp-italic-sand">Put it to work.</span>
              </h1>
              <p className="lp-lede on-dark" style={{ marginBottom: 36 }}>
                Equity release lets you borrow against your UAE property&apos;s value without
                selling. Use the funds to invest, renovate, or consolidate — Equifirst finds
                the best rate across 17+ lenders.
              </p>
              <div className="lp-hero-ctas">
                <QuoteButton label="Get a Quote" className="lp-btn lp-btn-white" />
              </div>
            </div>

            {/* Equity estimator card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 14,
                padding: 32,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--sand)',
                  marginBottom: 22,
                }}
              >
                Illustrative Equity
              </div>
              {[
                { label: 'Property Value', value: 'AED 3,500,000', bar: 100, color: 'var(--sand)' },
                { label: 'Existing Mortgage', value: 'AED 1,200,000', bar: 34, color: '#c0392b' },
                { label: 'Available Equity (70% LTV)', value: 'AED 1,250,000', bar: 36, color: 'var(--cyan)' },
              ].map((row) => (
                <div key={row.label} style={{ marginBottom: 18 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 6,
                      fontFamily: 'var(--sans)',
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.75)',
                    }}
                  >
                    <span>{row.label}</span>
                    <strong style={{ color: 'var(--white)' }}>{row.value}</strong>
                  </div>
                  <div
                    style={{
                      height: 8,
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: 999,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${row.bar}%`,
                        background: row.color,
                        borderRadius: 999,
                      }}
                    />
                  </div>
                </div>
              ))}
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.55,
                  marginTop: 18,
                  fontStyle: 'italic',
                }}
              >
                Illustrative only. Actual amount depends on lender valuation, LTV limits and
                your profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section
        style={{
          background: 'var(--cyan)',
          padding: '44px var(--pad-x)',
        }}
      >
        <div className="lp-container lp-stats-band-grid">
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 38,
                  color: 'var(--white)',
                  fontWeight: 500,
                  marginBottom: 6,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT IS EQUITY RELEASE ── */}
      <section className="lp-section lp-bg-ivory">
        <div className="lp-container">
          <div className="lp-hero-grid">
            <div>
              <span className="lp-eyebrow">What Is Equity Release?</span>
              <h2 className="lp-h2" style={{ marginTop: 18 }}>
                Borrow against your property.{' '}
                <span className="lp-italic-cyan">Keep it.</span>
              </h2>
              <p className="lp-lede" style={{ marginBottom: 18 }}>
                If you own UAE property — outright or mortgaged — you may be sitting on
                significant unlocked capital. Equity release (also called a cash-out refinance
                or equity mortgage) lets you borrow against that value as a lump sum.
              </p>
              <p className="lp-lede" style={{ marginBottom: 18 }}>
                Common uses: buying a second property, funding a business, renovating your
                home, settling overseas liabilities, or consolidating higher-interest debt.
              </p>
              <p className="lp-lede" style={{ marginBottom: 32 }}>
                You retain ownership throughout. The loan is secured against your property
                at a mortgage rate — far cheaper than personal finance.
              </p>
              <QuoteButton label="See What You Can Release" />
            </div>

            <ul className="lp-checklist">
              {[
                { h: 'No need to sell', p: 'You unlock the value without losing the asset or its rental income.' },
                { h: 'Mortgage rates, not personal loan rates', p: 'Rates typically 3–5% vs 15–25% on personal finance.' },
                { h: 'Lump sum, not monthly top-ups', p: 'You receive the full released amount on completion.' },
                { h: '17+ lenders compared', p: 'We match your profile and property to the most competitive offer.' },
                { h: 'Zero broker fee to you', p: 'Equifirst is paid by the lender. You pay nothing to us.' },
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
        </div>
      </section>

      {/* ── PROCESS ── */}
      <ProcessSection
        heading={
          <>
            From assessment to funds.{' '}
            <span className="lp-italic-cyan">Four steps.</span>
          </>
        }
        steps={PROCESS_STEPS}
        bgClass="lp-bg-white"
      />

      {/* ── WHO QUALIFIES ── */}
      <section className="lp-section lp-bg-cream" id="lead-form">
        <div className="lp-container">
          <div className="lp-hero-grid" style={{ alignItems: 'start' }}>
            <div>
              <span className="lp-eyebrow">Who Qualifies</span>
              <h2 className="lp-h2" style={{ marginTop: 18 }}>
                Three residency types.{' '}
                <span className="lp-italic-cyan">All covered.</span>
              </h2>
              <p className="lp-lede" style={{ marginBottom: 32 }}>
                Eligibility and maximum LTV varies by your residency status. Here&apos;s the
                summary — no commissions, no hidden fees.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
                {QUALIFIES.map((q) => (
                  <div
                    key={q.who}
                    style={{
                      background: 'var(--white)',
                      border: '1px solid rgba(198,182,155,0.5)',
                      borderRadius: 10,
                      padding: '22px 24px',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: 'var(--sans)',
                        fontWeight: 700,
                        fontSize: 16,
                        color: 'var(--charcoal)',
                        marginBottom: 6,
                      }}
                    >
                      {q.who}
                    </h4>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: 13, color: '#555', lineHeight: 1.6 }}>
                      {q.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-container-equi">
              <MortgageForm />
          </div>
            {/* <div
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(198,182,155,0.5)',
                borderRadius: 12,
                padding: 36,
                boxShadow: '0 14px 40px rgba(44,45,46,0.08)',
              }}
            >
              <MortgageForm />
              <LeadForm
                heading="Find out how much equity you can release."
                fields={LEAD_FIELDS}
                submitLabel="Calculate My Equity"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection
        heading={
          <>
            Equity unlocked.{' '}
            <span className="lp-italic-cyan">Capital deployed.</span>
          </>
        }
        testimonials={TESTIMONIALS}
      />

      {/* ── FINAL CTA ── */}
      <section className="lp-final-grad">
        <div className="lp-container">
          <span className="lp-eyebrow on-dark">
            <span className="lp-eyebrow-center">Your Capital Is Waiting</span>
          </span>
          <h2 className="lp-h2 on-dark" style={{ marginTop: 24 }}>
            Don&apos;t leave equity locked in the walls.{' '}
            <span className="lp-italic-sand">Put it to work.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 17,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 540,
              margin: '24px auto 32px',
            }}
          >
            A quick 20-minute call is enough to estimate your available equity and shortlist
            the right lenders.
          </p>
          <QuoteButton label="Get a Quote" className="lp-btn lp-btn-white" />
        </div>
      </section>
    </LandingLayout>
  );
}
