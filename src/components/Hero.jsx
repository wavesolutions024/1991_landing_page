import useReveal from '../hooks/useReveal.js';
import '../styles/hero.scss';

function Hero() {
  const eyebrowRef = useReveal();
  const headingRef = useReveal();
  const subRef = useReveal();
  const ctaRef = useReveal();
  const statsRef = useReveal();

  return (
    <section className="hero parent" id="top">
      <div className="hero__media">
        <img
          className="bg-img-cover"
          src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1800&auto=format&fit=crop"
          alt="Tattoo artist working on a realistic sleeve piece under studio light"
        />
        <div className="hero__overlay" />
      </div>

      <div className="cont hero__content">
        <p ref={eyebrowRef} className="eyebrow reveal">
          Private Studio · By Appointment Only
        </p>

        <h1 ref={headingRef} className="hero__heading reveal reveal-delay-1">
          Skin is the
          <br />
          <span>last honest </span>canvas.
        </h1>

        <p ref={subRef} className="hero__sub reveal reveal-delay-2">
          Ink fly is a private, appointment-only studio in the heart
          of the city, specializing in hyper-realism, fine line work,
          cover-ups, and precision body piercing. One artist, one client,
          one chair at a time.
        </p>

        <div ref={ctaRef} className="hero__cta reveal reveal-delay-3">
          <a
            href="#cta"
            className="primarybtn"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('openConsultationModal'));
            }}
            aria-haspopup="dialog"
          >
            Book Consultation
          </a>
          <a
            href="#gallery"
            
            rel="noreferrer"
            className="outlinebtn"
          >
            VIEW PORTFOLIO
          </a>
        </div>

        <div ref={statsRef} className="hero__stats reveal reveal-delay-4">
          <div>
            <strong>12+</strong>
            <span>YEARS TATTOOING</span>
          </div>
          <div>
            <strong>3,400+</strong>
            <span>Sessions completed</span>
          </div>
          <div>
            <strong>4</strong>
            <span>RESIDENT ARTISTS</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>STERILE, SINGLE-USE SETUP</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span />
        Scroll
      </div>
    </section>
  );
}

export default Hero;
