import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import '../styles/faq.scss';

const FAQS = [
  {
    q: 'Do you take walk-ins?',
    a: "No. Obscura Ink is appointment-only. Every session — tattoo or piercing — starts with a consultation so we can scope the design, placement, and timing properly before you're in the chair.",
  },
  {
    q: 'How does the consultation work?',
    a: "Book through the form on this site or the popup booking window. We'll confirm a slot, talk through references and placement, and give you a written quote before anything is scheduled.",
  },
  {
    q: 'Is a deposit required?',
    a: "Yes. A deposit secures your appointment date and is deducted from the final price of your tattoo or piercing. Deposits are non-refundable on missed appointments with less than 48 hours' notice.",
  },
  {
    q: "What's the minimum age?",
    a: "18 and older for all tattoo and piercing services, with valid government-issued ID required at your appointment. We do not tattoo or pierce minors, even with parental consent.",
  },
  {
    q: 'How should I prepare before my appointment?',
    a: "Sleep well, eat beforehand, stay hydrated, and avoid alcohol for 24 hours prior. Wear clothing that gives easy access to the area being tattooed or pierced.",
  },
  {
    q: "What's your aftercare process?",
    a: "You'll receive written aftercare instructions after every session, plus a free follow-up check-in as your tattoo or piercing heals. We're reachable by phone or email if anything looks off.",
  },
  {
    q: 'Do you do cover-ups on old or faded tattoos?',
    a: "Yes — cover-up reconstruction is one of our core specialties. Bring photos of the existing tattoo to your consultation so we can assess size, ink saturation, and design options.",
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
          <h2 className="section-title">
           Questions, answered.
          </h2>
          <p>The most common things people ask before booking a tattoo 
            or piercing consultation.
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
    <div ref={ref} className={`faq-item reveal ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <span className="faq-item__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
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
