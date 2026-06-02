import type { Metadata } from 'next';
// import LandingLayout from '../../../components/landing/LandingLayout';
// import ProcessSection from '../../../components/landing/ProcessSection';
// import TestimonialsSection from '../../../components/landing/TestimonialsSection';
// import LeadForm from '../../../components/landing/LeadForm';
// import QuoteButton from '../../../components/landing/QuoteButton';
import { LandingLayout } from '@/app/components/landing';
import ProcessSection from '@/app/components/landing/ProcessSection';
import TestimonialsSection from '@/app/components/landing/TestimonialsSection';
import LeadForm from '@/app/components/landing/LeadForm';
import QuoteButton from '@/app/components/landing/QuoteButton';
import styles from '@/app/styles/landing/off-plan.module.css';

export const metadata: Metadata = {
  title: 'Off-Plan Finance — Equifirst Capital Financing',
  description:
    'Structure your off-plan mortgage before you commit. Equifirst maps your developer, lender and payment plan so you collect your keys with confidence.',
};

/* ── Static data ─────────────────────────────────────────── */

const RISKS = [
  {
    num: '01',
    title: 'Mortgage Rejection at Handover',
    prob: 'Your bank pulls out 30 days before keys. Deposit and instalments at risk.',
    sol: 'Pre-approval secured 90+ days early. Multiple lender options ready.',
  },
  {
    num: '02',
    title: 'Changed Financial Profile',
    prob: 'Three years between booking and handover. Income, employer or visa shifts.',
    sol: 'Re-packaged across 17+ lenders to find one fitting your new profile.',
  },
  {
    num: '03',
    title: 'Wrong Lender for Property',
    prob: 'Not every bank finances every developer or every tower.',
    sol: 'Tower-by-tower lender mapping done before you commit to the unit.',
  },
  {
    num: '04',
    title: 'Completion Cost Shortfall',
    prob: 'Valuation comes in below purchase price. Bank lends less than expected.',
    sol: 'Conservative LTV modelling done at booking. No surprises at the end.',
  },
  {
    num: '05',
    title: 'Accepting the First Offer',
    prob: 'Buyers take whichever bank approves first. Terms quietly favour the lender.',
    sol: 'Full structure compared — fixed window, settlement penalty, valuation policy.',
  },
  {
    num: '06',
    title: 'Non-Resident Complexity',
    prob: 'Most local banks won\'t lend to non-residents on off-plan. Many learn too late.',
    sol: 'Selected international and non-resident-friendly lenders identified upfront.',
  },
];

const PROCESS_STEPS = [
  { label: '01', title: 'Pre-Qualification', description: 'Income, residency and eligibility mapped before you commit.' },
  { label: '02', title: 'Developer Check', description: 'Tower-specific lender approvals confirmed.' },
  { label: '03', title: 'Finance Plan', description: 'Payment schedule and mortgage timing aligned.' },
  { label: '04', title: 'Pre-Approval', description: 'Locked in 90+ days before handover.' },
  { label: '05', title: 'Keys in Hand', description: 'Disbursement triggered, registration completed.' },
];

const DEVELOPERS = ['Emaar', 'OMNIYAT', 'Meraas', 'Aldar', 'Damac', 'Sobha', 'Binghatti', 'Dubai Holding', 'Majid Al Futtaim', 'Ellington', 'Al Wasl Group', '+ More'];

const TESTIMONIALS = [
  {
    quote: "Isak went above and beyond to help me get my mortgage approved with my current bank. It would have been impossible without his great relationship with them and his persistence. He's professional and truly supportive. Highly recommend him!",
    name: 'Mays A.',
  },
  {
    quote: 'I had an exceptional service from Sarah Nanakalei. She made the deal seem effortless from start to finish, assisted me with all my inquiries and very prompt with her responses. I highly recommend Sarah if you are looking for a mortgage.',
    name: 'Yang R.',
  },
  {
    quote: 'Highly recommend using this company for your mortgage advisory needs. Manan was very professional and supportive throughout the journey and we managed to finalize the process fairly quickly with the bank.',
    name: 'Baha B.',
  },
];

const LEAD_FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text' as const, placeholder: 'Your name', required: true },
  { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'you@email.com', required: true },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel' as const, placeholder: '+971 50 000 0000', required: true },
  { name: 'project', label: 'Developer or Project', type: 'text' as const, placeholder: 'e.g. Emaar Creek Beach', required: true },
  {
    name: 'residency',
    label: 'Residency Status',
    type: 'select' as const,
    options: ['UAE National', 'UAE Resident (Expat)', 'Non-Resident / Overseas'],
    required: true,
  },
];

/* ── Page Component ──────────────────────────────────────── */

export default function OffPlanFinancePage() {
  return (
    <LandingLayout quoteContext="off-plan finance">
      {/* ── HERO ── */}
      <section className={`lp-section ${styles.heroBg}`}>
        <div className="lp-diamond tr" />
        <div className="lp-container">
          <div className="lp-hero-grid">
            {/* Left: copy */}
            <div className="lp-hero-content">
              <span className="lp-eyebrow">&nbsp;</span>
              <h1 className="lp-h1" style={{ marginTop: 22 }}>
                Most buyers choose off-plan for the price.{' '}
                <span className="lp-italic-cyan">Smart ones structure the finance first.</span>
              </h1>
              <p className="lp-lede" style={{ marginBottom: 36 }}>
                Off-plan financing is more complex than a standard mortgage — and most buyers
                don&apos;t find out until they&apos;re at a developer&apos;s sales desk. Equifirst
                structures your off-plan finance before you commit to any purchase.
              </p>
              <div className="lp-hero-ctas">
                <QuoteButton label="Get a Quote" />
              </div>
            </div>

            {/* Right: payment plan card */}
            <div className={styles.ppCard}>
              <div className={styles.ppTitle}>Typical Payment Plan</div>

              {[
                { stage: 'On Booking', pct: 10 },
                { stage: 'During Build', pct: 50 },
                { stage: 'On Handover', pct: 40 },
              ].map(({ stage, pct }) => (
                <div className={styles.ppStage} key={stage}>
                  <div className={styles.ppRow}>
                    <span className={styles.ppStageName}>{stage}</span>
                    <span className={styles.ppStagePct}>{pct}%</span>
                  </div>
                  <div className={styles.ppBarTrack}>
                    <div className={styles.ppBarFill} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}

              <p className={styles.ppNote}>
                60% paid across booking and build. The 40% handover balance is typically financed
                via mortgage — without pre-approved finance, you risk losing your deposit.
              </p>

              <div className={styles.devTags}>
                {['Emaar', 'Nakheel', 'Meraas', 'Aldar', 'Sobha', 'Damac', 'Binghatti', '+ More'].map(
                  (d) => (
                    <div className={styles.devTag} key={d}>{d}</div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY OFF-PLAN ── */}
      <section className="lp-section lp-bg-white">
        <div className="lp-container">
          <div className={styles.whyGrid}>
            <div>
              <span className="lp-eyebrow">The Strategic Case</span>
              <h2 className="lp-h2" style={{ marginTop: 18 }}>
                Off-plan is a wealth strategy.{' '}
                <span className="lp-italic-cyan">Not just a purchase.</span>
              </h2>
              <p className="lp-lede" style={{ marginBottom: 18 }}>
                Buying before completion is a leveraged bet on Dubai&apos;s growth. You commit a
                fraction of the price upfront and capture appreciation across the build period —
                often two to four years.
              </p>
              <p className="lp-lede" style={{ marginBottom: 18 }}>
                But the structure matters as much as the asset. The wrong payment plan, the wrong
                developer-bank pairing, or the wrong mortgage timing can erase the strategy entirely.
              </p>
              <p className="lp-lede" style={{ marginBottom: 32 }}>
                Equifirst structures the finance side before you sign — so the strategy actually
                compounds rather than unravels at handover.
              </p>
              <QuoteButton label="Get a Quote" />
            </div>

            <ul className={styles.advList}>
              {[
                { icon: '📈', h: 'Buy Below Market Value', p: 'Off-plan pricing is typically 10–25% below comparable completed property in the same area.' },
                { icon: '💰', h: 'Lower Capital Required', p: 'Most plans need 10–20% upfront. Your capital stays deployable elsewhere during the build.' },
                { icon: '🏗️', h: 'Staged Payment Plans', p: 'Construction-linked or time-linked schedules — match the plan to your cash flow.' },
                { icon: '🌍', h: 'Post-Handover Plans Available', p: 'Selected developers extend payment plans 2–5 years past handover — useful for non-residents.' },
              ].map(({ icon, h, p }) => (
                <li className={styles.advItem} key={h}>
                  <div className={styles.advIcon}>{icon}</div>
                  <div>
                    <div className={styles.advH}>{h}</div>
                    <div className={styles.advP}>{p}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── RISKS ── */}
      <section className="lp-section lp-bg-cream">
        <div className="lp-container">
          <span className="lp-eyebrow">What Most Buyers Miss</span>
          <h2 className="lp-h2" style={{ marginTop: 18 }}>
            Off-plan risks are real.{' '}
            <span className="lp-italic-cyan">But entirely manageable.</span>
          </h2>

          <div className={styles.riskGrid}>
            {RISKS.map((r) => (
              <div className={styles.riskCard} key={r.num}>
                <div className={styles.riskNum}>{r.num}</div>
                <h4>{r.title}</h4>
                <p className={styles.riskProb}>{r.prob}</p>
                <p className={styles.riskSol}>{r.sol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <ProcessSection
        heading={
          <>
            From booking to keys —{' '}
            <span className="lp-italic-cyan">structured precisely.</span>
          </>
        }
        steps={PROCESS_STEPS}
      />

      {/* ── DEVELOPERS ── */}
      <section className={styles.devSection}>
        <div className="lp-container">
          <div className={styles.devLabel}>
            We Finance Properties from Dubai&apos;s Leading Developers
          </div>
          <div className={styles.devList}>
            {DEVELOPERS.map((d) => (
              <div className={styles.devBox} key={d}>{d}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY + FORM ── */}
      <section className="lp-section lp-bg-ivory" id="lead-form">
        <div className="lp-container">
          <div className={styles.eligGrid}>
            {/* Table */}
            <div>
              <span className="lp-eyebrow">Eligibility, Side By Side</span>
              <h2 className="lp-h2" style={{ marginTop: 18 }}>
                Three residency profiles.{' '}
                <span className="lp-italic-cyan">One transparent table.</span>
              </h2>
              <p className="lp-lede" style={{ marginBottom: 0 }}>
                No commission to you, no hidden bank fees, no surprises at handover.
              </p>

              <table className={styles.eligTable}>
                <thead>
                  <tr>
                    <th>Requirement</th>
                    <th>UAE Nationals</th>
                    <th>Expat Residents</th>
                    <th>Non-Residents</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Min Salary</td><td>AED 15,000</td><td>AED 15,000</td><td>USD 5,000 equiv.</td></tr>
                  <tr><td>Min Down Payment</td><td>15%</td><td>20%</td><td>30%</td></tr>
                  <tr><td>Max Tenor</td><td>25 years</td><td>25 years</td><td>20 years</td></tr>
                  <tr><td>Employment</td><td>Salaried / Self-employed</td><td>Salaried / Self-employed</td><td>Documented income</td></tr>
                  <tr>
                    <td colSpan={4} className={styles.eligFee}>
                      Broker Fee · AED 0 — Equifirst is paid by the lender, never by you
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Form */}
            <div className={styles.eligForm}>
              <LeadForm
                heading="Let's see what your off-plan finance looks like."
                fields={LEAD_FIELDS}
                submitLabel="Find Out What You Qualify For"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection
        heading={
          <>
            Off-plan structured.{' '}
            <span className="lp-italic-cyan">Keys collected.</span>
          </>
        }
        testimonials={TESTIMONIALS}
      />

      {/* ── FINAL CTA ── */}
      <section className="lp-final-cream">
        <div className="lp-diamond" style={{ top: -80, right: '8%', width: 240, height: 240 }} />
        <div className="lp-diamond" style={{ bottom: -80, left: '8%', width: 200, height: 200 }} />
        <div className="lp-container">
          <span className="lp-eyebrow">
            <span className="lp-eyebrow-center">Before You Sign Anything</span>
          </span>
          <h2 className="lp-h2" style={{ marginTop: 24 }}>
            Structure your finance{' '}
            <span className="lp-italic-cyan">before you sign anything.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 17,
              color: '#555',
              maxWidth: 560,
              margin: '24px auto 32px',
            }}
          >
            A 30-minute strategy session covers eligibility, lender mapping for your developer,
            and the exact structure that fits your profile.
          </p>
          <QuoteButton label="Get a Quote" />
        </div>
      </section>
    </LandingLayout>
  );
}
