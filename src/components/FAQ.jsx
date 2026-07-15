import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import '../styles/faq.scss';

const FAQS = [
  {
    q: 'How far in advance should I book?',
    a: 'For custom pieces and sleeves, 3–5 weeks. Smaller minimal pieces can sometimes be scheduled within 1–2 weeks depending on the calendar.',
  },
  {
    q: 'Do you require a consultation before booking?',
    a: 'Yes. Every custom or cover-up project starts with a short in-person or video consultation so we can plan placement, size and the number of sessions needed.',
  },
  {
    q: 'What should I do before my appointment?',
    a: 'Sleep well, eat beforehand, stay hydrated, and avoid alcohol for 24 hours. Arrive with the area clean and unshaved if it\u2019s a sensitive spot.',
  },
  {
    q: 'How does aftercare work?',
    a: 'You will leave with written aftercare instructions and a recommended balm. We also check in around day 3 and day 10 of healing.',
  },
  {
    q: 'Can you cover an existing tattoo?',
    a: 'In most cases, yes. Bring a photo to your consultation and we will advise honestly on what is achievable and how it may need to be resized or darkened.',
  },
];

function FAQ() {
  const headRef = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq parent" id="faq">
      <div className="cont">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Good to Know</p>
          <h2 className="section-title">
            Frequently asked <span>questions.</span>
          </h2>
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
