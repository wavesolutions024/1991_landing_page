import useReveal from '../hooks/useReveal.js';
import '../styles/whychooseus.scss';

const REASONS = [
  {
    title: '9 Years Experience',
    desc: 'Nearly a decade focused specifically on realism and portrait work.',
    icon: (
      <path d="M12 2 3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4Z" />
    ),
  },
  {
    title: 'Sterile Studio',
    desc: 'Hospital-grade sterilization and single-use needles, every session.',
    icon: (
      <path d="M9 2h6v5.2l4 6.8a4 4 0 0 1-3.4 6H8.4A4 4 0 0 1 5 13l4-6.8V2Z" />
    ),
  },
  {
    title: 'Certified Artist',
    desc: 'Licensed and insured, with ongoing training in bloodborne pathogens.',
    icon: <path d="m12 3 8 4v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7l8-4Z" />,
  },
  {
    title: 'Premium Ink',
    desc: 'Vegan, EU-compliant pigments chosen for long-term color retention.',
    icon: <path d="M12 2c3 4 6 7.6 6 11.2A6 6 0 0 1 6 13.2C6 9.6 9 6 12 2Z" />,
  },
  {
    title: 'Personal Consultation',
    desc: 'Every piece starts with a 1-on-1 sit-down before any ink touches skin.',
    icon: (
      <path d="M4 4h16v11H8l-4 4V4Z" />
    ),
  },
];

function WhyChooseUs() {
  const headRef = useReveal();

  return (
    <section className="why parent" id="why-us">
      <div className="cont">
        <div ref={headRef} className="section-head section-head--center reveal">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title">
            The details you <span>don&apos;t see</span> matter most.
          </h2>
          <p className="section-subtitle">
            A great tattoo is a combination of craft and care — here&apos;s
            what we hold ourselves to on both sides of the needle.
          </p>
        </div>

        <div className="why__grid">
          {REASONS.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`why-card reveal reveal-delay-${(index % 4) + 1}`}>
      <span className="why-card__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          {reason.icon}
        </svg>
      </span>
      <h3>{reason.title}</h3>
      <p>{reason.desc}</p>
    </div>
  );
}

export default WhyChooseUs;
