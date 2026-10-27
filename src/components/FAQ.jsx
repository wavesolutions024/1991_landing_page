import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import "../styles/faq.scss";

const FAQS = [
  {
    q: "Do I need an appointment at Inkfly Tattoo in Wakad, Pune?",
    a: "We recommend booking an appointment in advance for tattoo and body piercing services at Inkfly Tattoo in Wakad, Pune. Contact our studio to check availability and discuss your requirements before visiting."
  },
  {
    q: "How does a tattoo consultation work?",
    a: "During your tattoo consultation, we discuss your design ideas, reference images, preferred placement, size, and style. This helps us plan your custom tattoo and provide a price estimate before confirming your appointment."
  },
  {
    q: "How much does a tattoo cost in Wakad, Pune?",
    a: "Tattoo pricing depends on the design complexity, size, placement, detail, and estimated time required. Contact Inkfly Tattoo to discuss your idea and receive a price estimate based on your requirements."
  },
  {
    q: "What is the minimum age for tattoos and body piercings?",
    a: "Our studio policy requires clients to be at least 18 years old for tattoo and body piercing services. Please bring valid government-issued identification to your appointment."
  },
  {
    q: "How should I prepare for my tattoo appointment?",
    a: "Get adequate sleep, eat a proper meal, stay hydrated, and wear comfortable clothing that allows access to the tattoo area. Avoid alcohol before your appointment and inform your artist about any relevant health or skin concerns."
  },
  {
    q: "What tattoo aftercare instructions should I follow?",
    a: "Proper tattoo aftercare is important for healing and maintaining your tattoo. Follow the aftercare instructions provided by your artist, keep the area clean as directed, and contact a healthcare professional if you develop signs of infection."
  },
  {
    q: "Does Inkfly Tattoo offer tattoo cover-ups?",
    a: "Cover-up options depend on the size, colour, age, and saturation of your existing tattoo. Share clear photos of the tattoo during your consultation so our artist can assess suitable design options."
  },
  {
    q: "What body piercing services are available?",
    a: "Contact Inkfly Tattoo to confirm available body piercing options, jewellery choices, pricing, and appointment availability. Our team can also explain the piercing process and the aftercare required for your selected piercing."
  },
];

function FAQ() {
  const headRef = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq parent" id="faq">
      <div className="cont">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Questions, answered.</h2>
          <p>
            
            Have questions before booking a tattoo or body piercing in Wakad,
            Pune? Find answers about consultations, pricing, appointments,
            preparation, and aftercare at Inkfly Tattoo.
          </p>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`faq-item reveal ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <span className="faq-item__icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M5 12h14M12 5v14" />
          </svg>
        </span>
      </button>
      <div className="faq-item__panel">
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default FAQ;
