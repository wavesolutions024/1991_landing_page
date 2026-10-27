import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import "../styles/hero.scss";
import axios from "axios";
import bg from "../assets/bg.jpg";

const promoItems = [
  { icon: "✦", title: "40% off", label: "TATTOO" },
  { icon: "◌", title: "30% off", label: "PIERCING" },
];

function Hero() {
  const eyebrowRef = useReveal();
  const headingRef = useReveal();
  const ctaRef = useReveal();
  const badgesRef = useReveal();
  const bookingRef = useReveal();
  const [form, setForm] = useState({
    name: "",
    mobileNo: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setIsSubmitting(true);

      const response = await axios.post(
        `https://backend.1991tattoos.com/api/enquiry/addOutEnquiry?franchiesCode=2`,
        form,
      );

      if (response.status === 200) {
        setForm({
          name: "",
          mobileNo: "",
          service: "",
        });
      }

      alert("form submitted successfully");
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero parent" id="top">
      <div className="hero__media">
        <img
          className="bg-img-cover"
          src={bg}
          alt="Close-up of a tattooed shoulder and neck"
        />
        <div className="hero__overlay" />
      </div>

      <div className="cont hero__inner">
        <div className="hero__content">
          <p ref={eyebrowRef} className="eyebrow hero__eyebrow reveal">
            Custom Tattoos. Realistic Art. Your Story.
          </p>

          <p className="hero__lead reveal reveal-delay-1">
            Art That Stays With You
          </p>

          <h1
            ref={headingRef}
            style={{ lineHeight: "75px", letterSpacing: "1px" }}
            className="hero__heading reveal reveal-delay-2"
          >
            {/* Thinking About
            <span>Getting Inked?</span> */}
            Best Tattoo <span>Studio in Wakad</span>
          </h1>

          <p style={{ paddingTop: "20px" }}>
            Get your next tattoo designed by a professional tattoo artist at
            &nbsp;
            <span style={{ color: "var(--gold)" }}>Inkfly Tattoo, Wakad</span>,
            Pune. From fine-line and minimalist designs to realistic portraits
            and custom tattoos, bring your idea to life.
          </p>

          <div ref={badgesRef} className="hero__promo reveal reveal-delay-4">
            {promoItems.map((item) => (
              <div className="hero__promo-card" key={item.label}>
                <span className="hero__promo-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <strong>{item.title}</strong>
                <small>{item.label}</small>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className="hero__cta reveal reveal-delay-5">
            <a
              target="_blank"
              href="https://wa.me/919607009494"
              className="primarybtn"
            >
              Book on WhatsApp
            </a>
            <a href="tel:919607009494"  rel="noreferrer" className="outlinebtn">
              Call Now
            </a>
          </div>
        </div>

        <aside ref={bookingRef} className="hero__booking reveal reveal-delay-3">
          <div className="hero__booking-head">FREE CONSULTATION</div>
          <h2>
            Book Your Tattoo
            <span>Consultation</span>
          </h2>

          <form className="hero__form" onSubmit={handleSubmit}>
            <label className="hero__field hero__field--full">
              <span>FULL NAME</span>
              <input
                required
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                placeholder="Full name"
              />
            </label>

            <label className="hero__field">
              <span>PHONE</span>
              <input
                type="tel"
                name="mobileNo"
                onChange={handleChange}
                value={form.mobileNo}
                placeholder="Enter your phone number"
              />
            </label>

            <label className="hero__field">
              <span>SELECT SERVICES</span>
              <select
                defaultValue=""
                name="service"
                onChange={handleChange}
                value={form.service}
                id=""
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="tattoo">Permanent Tattoo</option>
                <option value="tattoo">Tattoo Removal</option>
                <option value="piercing">Piercing</option>
                <option value="cover-up">Cover-Up</option>
              </select>
            </label>

            <button type="submit" className="primarybtn hero__submit">
              BOOK NOW
            </button>
          </form>
        </aside>
      </div>

      <div className="hero__scroll">
        <span />
        Scroll
      </div>
    </section>
  );
}

export default Hero;
