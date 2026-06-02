interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

interface TestimonialsSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  testimonials: Testimonial[];
  bgClass?: string;
}

export default function TestimonialsSection({
  eyebrow = 'Client Outcomes',
  heading,
  testimonials,
  bgClass = 'lp-bg-white',
}: TestimonialsSectionProps) {
  return (
    <section className={`lp-section ${bgClass}`}>
      <div className="lp-container">
        <span className="lp-eyebrow">{eyebrow}</span>
        <h2 className="lp-h2" style={{ marginTop: 18 }}>
          {heading}
        </h2>
        <div className="lp-test-grid">
          {testimonials.map((t, i) => (
            <div className="lp-test-card" key={i}>
              <div className="lp-stars">★★★★★</div>
              <p className="lp-test-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="lp-test-name">{t.name}</div>
              {t.role && <div className="lp-test-role">{t.role}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
