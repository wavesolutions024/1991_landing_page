import useReveal from '../hooks/useReveal.js';
import '../styles/whychooseus.scss';

const REASONS = [
  {
    title: 'Private, Appointment-Only',
    desc: 'No walk-ins, no flash-wall queue — your session is booked, scoped, and yours alone.',
    icon: (
      <path d="M12 2 3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4Z" />
    ),
  },
  {
    title: 'Licensed & Sterile',
    desc: 'Autoclave sterilization, single-use needles, and full compliance inspection records on request.',
    icon: (
      <path d="M9 2h6v5.2l4 6.8a4 4 0 0 1-3.4 6H8.4A4 4 0 0 1 5 13l4-6.8V2Z" />
    ),
  },
  {
    title: 'Portfolio-Proven Artists',
    desc: 'Every resident artist is chosen for a specific specialty — realism, linework, or cover-up reconstruction.',
    icon: <path d="m12 3 8 4v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7l8-4Z" />,
  },
  {
    title: 'Custom Design Process',
    desc: 'No pre-drawn flash sheets for custom work — every large piece is drawn from your reference and story.',
    icon: <path d="M12 2c3 4 6 7.6 6 11.2A6 6 0 0 1 6 13.2C6 9.6 9 6 12 2Z" />,
  },
  {
    title: 'Transparent Pricing',
    desc: 'Hourly and flat-rate quotes are confirmed in writing before your appointment is booked.',
    icon: (
      <path d="M4 4h16v11H8l-4 4V4Z" />
    ),
  },
  {
    title: 'Real Aftercare Support',
    desc: 'A written aftercare guide and a free follow-up check on every tattoo and piercing.',
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
            What you're actually booking.
          </h2>
          <p className="section-subtitle">
            Not another walk-in shop. Here's what sets an appointment
            at our studio apart.
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
