import useReveal from '../hooks/useReveal.js';
import '../styles/services.scss';

const SERVICES = [
  {
    name: 'Portrait Tattoo',
    desc: 'Faces, likenesses and memorials rendered with true tonal depth.',
    img: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Minimal Tattoo',
    desc: 'Fine single-needle line work — quiet, precise, built to last.',
    img: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Realistic Tattoo',
    desc: 'Photo-grade shading and texture for skin that reads like a photograph.',
    img: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Cover Up',
    desc: 'Rework old pieces into something you want to show, not hide.',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Sleeves',
    desc: 'Full-arm compositions planned across multiple sessions for flow.',
    img: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Custom Design',
    desc: 'An original piece drawn around your story — nothing off a wall.',
    img: 'https://images.unsplash.com/photo-1542728928-1413d1894ed1?q=80&w=900&auto=format&fit=crop',
  },
];

function Services() {
  const headRef = useReveal();

  return (
    <section className="services parent" id="services">
      <div className="cont">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">What We Tattoo</p>
          <h2 className="section-title">
            Six disciplines. <span>One standard.</span>
          </h2>
          <p className="section-subtitle">
            Every category below is handled by the same artist, start to
            finish — so the linework, saturation and healing all match.
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
