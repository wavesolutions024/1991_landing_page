import { useState, useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import '../styles/cta.scss';

function CTA() {
  const ref = useReveal();
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setModalOpen(false);
    }

    if (isModalOpen) {
      document.addEventListener('keydown', onKey);
      // focus first input when modal opens
      setTimeout(() => firstInputRef.current?.focus(), 0);
    }

    return () => document.removeEventListener('keydown', onKey);
  }, [isModalOpen]);

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener('openConsultationModal', handler);
    return () => window.removeEventListener('openConsultationModal', handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value || '';
    const email = form.email.value || '';
    const message = form.message.value || '';
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:studio@obscurainkco.com?subject=${encodeURIComponent(
      'Consultation request from ' + name
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setModalOpen(false);
  };

  return (
    <section className="cta-banner parent" id="cta">
      <div className="cont">
        <div ref={ref} className="cta-banner__inner reveal">
          <p className="eyebrow">Limited Availability</p>
          <h2 className="cta-banner__heading">
            Ready for your next tattoo?
          </h2>
          <p className="cta-banner__sub">
            Consultations are held every Tuesday through Saturday. Tell us
            what you have in mind and we&apos;ll find the right time to start.
          </p>
          <div className="cta-banner__actions">
            <button
              type="button"
              className="primarybtn"
              onClick={() => setModalOpen(true)}
              aria-haspopup="dialog"
            >
              Book Consultation
            </button>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="outlinebtn"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={`modal-overlay`}
          role="dialog"
          aria-modal="true"
          aria-label="Book consultation form"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="modal" ref={modalRef}>
            <button
              className="modal__close"
              aria-label="Close consultation form"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h3 className="modal__title">Book Consultation</h3>
            <form className="modal__form" onSubmit={handleSubmit}>
              <label>
                Your name
                <input ref={firstInputRef} required name="name" type="text" />
              </label>
              <label>
                Email
                <input required name="email" type="email" />
              </label>
              <label>
                Message
                <textarea name="message" rows="4" />
              </label>
              <div className="modal__actions">
                <button type="submit" className="primarybtn">Send Request</button>
                <button type="button" className="outlinebtn" onClick={() => setModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CTA;
