import useReveal from '../hooks/useReveal.js';
import '../styles/services.scss';

const SERVICES = [
  {
    name: 'Realism',
    desc: ' Portraits, wildlife, and photographic detail rendered in black-and-grey or full color.',
    img: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Fine Line',
    desc: 'Delicate single-needle linework — minimalist florals, script, and micro-tattoos.',
    img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Blackwork & Dotwork',
    desc: ' Bold graphic blackwork, geometric patterns, and stippled dotwork shading.',
    img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Cover Up',
    desc: ' Full reconstruction of old, faded, or unwanted tattoos into new, deliberate pieces.',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Touch-Ups & Restoration',
    desc: ' Color refresh and line restoration for tattoos that have faded over time.',
    img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Custom Illustration',
    desc: 'Original concept design built around your reference, story, and placement.',
    img: 'https://images.unsplash.com/photo-1542728928-1413d1894ed1?q=80&w=900&auto=format&fit=crop',
  },
];

function Services() {
  const headRef = useReveal();

  return (
    <section className="services parent" id="services">
      <div className="cont">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">SERVICES</p>
          <h2 className="section-title">
            Tattoo work, done <span> deliberately.</span>
          </h2>
          <p className="section-subtitle">
            From a single fine line to a full sleeve reconstruction,
            each service below is scoped in a free consultation before
            anything touches skin.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className={`service-card reveal reveal-delay-${(index % 3) + 1}`}
    >
      <div className="service-card__img">
        <img
          className="bg-img-cover"
          src={service.img}
          alt={`Example of ${service.name.toLowerCase()} tattoo work`}
          loading="lazy"
        />
      </div>
      <div className="service-card__body">
        <h3>{service.name}</h3>
        <p>{service.desc}</p>
      </div>
    </article>
  );
}

export default Services;
