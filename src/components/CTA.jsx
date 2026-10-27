import { useState, useEffect, useRef } from "react";
import useReveal from "../hooks/useReveal.js";
import "../styles/cta.scss";
import axios from "axios";

function CTA() {
  const ref = useReveal();
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNo: "",
    gender: "",
    service: "",
    tattooStyle: "",
    tattooDescription: "",
    enquiryType: "landing page",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      setIsSubmitting(true);
      e.preventDefault();

      const response = await axios.post(
        `https://backend.1991tattoos.com/api/enquiry/addOutEnquiry?franchiesCode=2`,
        form,
      );

      if (response.status === 200) {
        setForm({
          name: "",
          email: "",
          mobileNo: "",
          gender: "",
          service: "",
          tattooStyle: "",
          tattooDescription: "",
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
    <section className="cta-banner parent" id="cta">
      <div className="cont">
        <div ref={ref} className="cta-banner__inner reveal">
          <p className="eyebrow">BOOK YOUR CONSULTATION</p>
          <h2 className="cta-banner__heading">
            {" "}
            Ready for Your Next Custom Tattoo?
          </h2>
          <p className="cta-banner__sub">
            Looking for a professional tattoo artist in Wakad, Pune? Share your
            idea with <span style={{color:"var(--gold)"}}>Inkfly Tattoo</span> and let’s plan a design that reflects your
            style. Contact us to discuss your tattoo design, pricing, and
            appointment availability.
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
            <form className="modal__form" onSubmit={handleSubmit}>
              <label>
                Your name
                <input
                  required
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  type="text"
                  placeholder="Enter Your Name"
                />
              </label>
              <div class="form-group">
                <label>
                  Your Contact Number
                  <input
                    required
                    name="mobileNo"
                    onChange={handleChange}
                    value={form.mobileNo}
                    type="text"
                    placeholder="Enter Contact Number"
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </label>
              </div>

              <div class="form-group">
                <label>
                  Select Gender
                  <select
                    name="gender"
                    onChange={handleChange}
                    value={form.gender}
                    id=""
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label>
                  Select Service
                  <select
                    name="service"
                    onChange={handleChange}
                    value={form.service}
                    id=""
                  >
                    <option value="">Select Service</option>
                    <option value="Permanent Tattoo">Permanent Tattoo</option>
                    <option value="Temporary Tattoo">Temporary Tattoo</option>
                    <option value="Peircing">Peircing</option>
                  </select>
                </label>
              </div>
              {/* <div class="form-group"> */}
              <label>
                Tattoo Style
                <input
                  name="tattooStyle"
                  onChange={handleChange}
                  value={form.tattooStyle}
                  type="text"
                  placeholder="Enter Tattoo Style"
                />
              </label>
              {/* <label>
                  Tattoo Budget
                  <input
                    required
                    name="budget"
                    onChange={handleChange}
                    value={form.budget}
                    type="text"
                    placeholder="Enter Tattoo Budget"
                  />
                </label> */}
              {/* </div> */}
              <label>
                Tattoo Description
                <textarea
                  name="tattooDescription"
                  onChange={handleChange}
                  value={form.tattooDescription}
                  placeholder="Enter Your Tattoo Description"
                  rows="4"
                />
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
