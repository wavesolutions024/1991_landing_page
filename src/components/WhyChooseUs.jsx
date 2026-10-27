import useReveal from "../hooks/useReveal.js";
import "../styles/whychooseus.scss";

const REASONS = [
  {
    title: "Private, Appointment-Based Sessions",
    desc: "Enjoy a personalised tattoo experience at our Wakad, Pune studio, with dedicated time to discuss your design, placement, size, and expectations.",
    icon: (
      <path d="M12 2 3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4Z" />
    ),
  },
  {
    title: "Hygiene-Focused Tattooing",
    desc: "Our tattooing process prioritises hygiene, appropriate sterilisation procedures, and single-use needles to support a safer studio experience.",
    icon: (
      <path d="M9 2h6v5.2l4 6.8a4 4 0 0 1-3.4 6H8.4A4 4 0 0 1 5 13l4-6.8V2Z" />
    ),
  },
  {
    title: "Specialised Tattoo Artists",
    desc: "Explore tattoo artwork across black-and-grey realism, fine-line tattoos, minimalist designs, and cover-ups to find a style that suits your vision.",
    icon: (
      <path d="m12 3 8 4v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7l8-4Z" />
    ),
  },
  {
    title: "Custom Tattoo Designs",
    desc: "Bring your references, ideas, or personal story. We work with you to develop a personalised tattoo design that reflects your concept and preferred style.",
    icon: (
      <path d="M12 2c3 4 6 7.6 6 11.2A6 6 0 0 1 6 13.2C6 9.6 9 6 12 2Z" />
    ),
  },
  {
    title: "Clear Tattoo Pricing",
    desc: "Discuss your tattoo design, size, placement, and estimated cost before confirming your appointment, so you can plan your tattoo with confidence.",
    icon: <path d="M4 4h16v11H8l-4 4V4Z" />,
  },
  {
    title: "Tattoo Aftercare Guidance",
    desc: "Understand how to care for your new tattoo with practical aftercare instructions designed to support healing and help maintain your tattoo's appearance.",
    icon: <path d="M4 4h16v11H8l-4 4V4Z" />,
  },
];

function WhyChooseUs() {
  const headRef = useReveal();

  return (
    <section className="why parent" id="why-us">
      <div className="cont">
        <div ref={headRef} className="section-head section-head--center reveal">
          <p className="eyebrow">WHY CHOOSE US</p>
          <h2 className="section-title">
            Why Choose Inkfly Tattoo Studio in Wakad, Pune?
          </h2>
          <p className="section-subtitle">
            From custom tattoo designs to personalised consultations and
            aftercare guidance, discover a thoughtful tattoo experience built
            around your ideas, your style, and attention to detail.
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
    <div
      ref={ref}
      className={`why-card reveal reveal-delay-${(index % 4) + 1}`}
    >
      <span className="why-card__icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          {reason.icon}
        </svg>
      </span>
      <h3>{reason.title}</h3>
      <p>{reason.desc}</p>
    </div>
  );
}

export default WhyChooseUs;
