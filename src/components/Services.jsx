import useReveal from "../hooks/useReveal.js";
import "../styles/services.scss";
import img1 from "../assets/imag1.png";
import img2 from "../assets/image6.png";
import img3 from "../assets/cover-up.jpg";
import img4 from "../assets/touch-up.webp";
import img5 from "../assets/pericing.webp";
import img6 from "../assets/consultation.webp";

const SERVICES = [
  {
    name: "Custom Tattoos",
    desc: "Unique, one-of-a-kind tattoo designs created around your ideas, story, and personal style.",
    img: img1,
  },
  {
    name: "Fine Line",
    desc: "Delicate and precise tattoo work featuring clean lines, minimalist designs, florals, scripts, and intricate details.",
    img: img2,
  },
  {
    name: "Cover-Up Tattoos",
    desc: "Transform unwanted or old tattoos with creative cover-up designs that blend existing ink into a fresh new piece.",
    img: img3,
  },
  {
    name: "Tattoo Touch-Up",
    desc: "Restore faded, blurred, or worn tattoos with refreshed colors, sharper lines, and improved details.",
    img: img4,
  },
  {
    name: "Piercing",
    desc: "Professional body piercing with a focus on precision, hygiene, proper placement, and a comfortable experience.",
    img: img5,
  },
  {
    name: "Tattoo Consultation",
    desc: "Discuss your tattoo idea, design, size, placement, and style with guidance to create a tattoo that feels uniquely yours.",
    img: img6,
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
            Custom Tattoo Services <span> in Wakad,</span> Pune
          </h2>
          <p className="section-subtitle">
            From fine-line tattoos to detailed black-and-grey realism and complete sleeve designs, Inkfly Tattoo offers personalised tattoo services tailored to your style and vision. Explore our tattoo styles, discuss your ideas with our artist, and get a design created specifically for you.
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
