import useReveal from "../hooks/useReveal.js";
import "../styles/studio.scss";

function Studio() {
  const studioInfo = [
    {
      title: "Studio Hours",
      value: "10am - 9pm",
    },
    {
      title: "Booking",
      value: "Consultation required",
    },
    {
      title: "Deposit",
      value: "Secures your date",
    },
    {
      title: "Minimum Age",
      value: "18+, valid ID",
    },
    {
      title: "Sterilization",
      value: "Autoclave, single-use needles",
    },
    {
      title: "Payment",
      value: "Card, cash, split payment",
    },
  ];

  return (
    <section className="studio parent" id="studio">
      <div className="cont">
        <div className="studio__wrapper">
          <div className="studio__left">
            <span className="eyebrow">THE STUDIO</span>

            <h2 className="section-title">
              A Professional Tattoo , <span>Studio in Wakad</span>, Pune.
            </h2>

            <p>
              Inkfly Tattoo is a dedicated tattoo studio in Wakad, Pune, focused
              on precision, creativity, and personalised tattoo experiences.
              Every session begins with a consultation to understand your ideas,
              preferred style, placement, and expectations.
            </p>

            <p>
              We specialise in black and grey realism, fine-line tattoos,
              minimalist designs, and tattoo cover-ups. Each tattoo is
              custom-designed to complement your vision, with attention to
              detail and a commitment to professional tattooing practices.
            </p>

            <p>
              From your first consultation to the final artwork, our focus is on
              thoughtful design, careful execution, and a comfortable studio
              experience.
            </p>
          </div>

          <div className="studio__right">
            {studioInfo.map((item, index) => (
              <div className="studio__row" key={index}>
                <span>{item.title}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Studio;
