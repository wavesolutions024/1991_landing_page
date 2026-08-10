import { useState, useEffect, useRef } from "react";
import useReveal from "../hooks/useReveal.js";
import "../styles/cta.scss";

function CTA() {
  const ref = useReveal();
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setModalOpen(false);
    }

    if (isModalOpen) {
      document.addEventListener("keydown", onKey);
      // focus first input when modal opens
      setTimeout(() => firstInputRef.current?.focus(), 0);
    }

    return () => document.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener("openConsultationModal", handler);
    return () => window.removeEventListener("openConsultationModal", handler);
  }, []);

  function Submit(e) {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const getDate = new Date();

    const date = getDate.toDateString();

    formDatab.append("Date", date);

    fetch(
      "https://script.google.com/macros/s/AKfycbyBQLXvX8X_lKeLvymma3N6BE4mEWKf4bTV8253sXMtxg55RDpE7JFupFWEwpH4zSY7/exec",
      {
        method: "POST",
        body: formDatab,
      },
    )
      .then((res) => res.text())
      .then((data) => {
        alert("Form Submitting Successfully")
        setIsSubmitting(false); // Reset submitting state
       setModalOpen(false)
        formEle.reset(); // Reset the form
      })
      .catch((error) => {
        console.error("FULL ERROR:", error);
        console.error(error.message);
        setIsSubmitting(false);
      });
  }

  return (
    <section className="cta-banner parent" id="cta">
      <div className="cont">
        <div ref={ref} className="cta-banner__inner reveal">
          <p className="eyebrow">Limited Availability</p>
          <h2 className="cta-banner__heading">Ready for your next tattoo?</h2>
          <p className="cta-banner__sub">
            Consultations are held every Tuesday through Saturday. Tell us what
            you have in mind and we&apos;ll find the right time to start.
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
              href="https://wa.me/9607009494?text=Hi%20InkFly%20Tattoo,%20I'd%20like%20to%20book%20a%20consultation."
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
            <form className="modal__form" onSubmit={Submit}>
              <label>
                Your name
                <input required name="Name" type="text" />
              </label>
              <label>
                Your Contact Number
                <input required name="Contact" type="text" />
              </label>
              <label>
                Email
                <input required name="Email" type="email" />
              </label>
              <label>
                Select Service
                <select name="Service" id="">
                  <option value="">Select Service</option>
                  <option value="Permanent Tattoo">Permanent Tattoo</option>
                  <option value="Temporary Tattoo">Temporary Tattoo</option>
                  <option value="Peircing">Peircing</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="Message" rows="4" />
              </label>
              <div className="modal__actions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="primarybtn"
                >
                  {isSubmitting ? "sending......" : "Send Request"}
                </button>
                <button
                  type="button"
                  className="outlinebtn"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CTA;
