interface ProcessStep {
  label: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  steps: ProcessStep[];
  bgClass?: string;
}

export default function ProcessSection({
  eyebrow = 'The Equifirst Process',
  heading,
  steps,
  bgClass = 'lp-bg-white',
}: ProcessSectionProps) {
  const trackClass = steps.length === 4 ? 'lp-proc-track steps-4' : 'lp-proc-track';

  return (
    <section className={`lp-section ${bgClass}`}>
      <div className="lp-container">
        <span className="lp-eyebrow">{eyebrow}</span>
        <h2 className="lp-h2" style={{ marginTop: 18, maxWidth: 760 }}>
          {heading}
        </h2>
        <div className={trackClass}>
          {steps.map((step, i) => (
            <div className="lp-proc-step" key={i}>
              <div className="lp-proc-dot">{step.label}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
