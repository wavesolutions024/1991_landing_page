import useReveal from '../hooks/useReveal.js';
import "../styles/studio.scss";

function Studio() {
  const studioInfo = [
    {
      title: "Studio Hours",
      value: "Tue - Sat, 10am - 9pm",
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

            <span className="eyebrow">
              THE STUDIO
            </span>

            <h2 className="section-title">
              Quiet space. <span>Serious</span> craft.
            </h2>

            <p>
              Ink fly was founded on a simple idea: tattooing deserves
              the same focus as any other exacting craft. There's no walk-in
              chaos, no flash-wall pressure, no rush. Every session is booked
              in advance, one client and one artist per room, so the work —
              and the conversation before it — gets the attention it deserves.
            </p>

            <p>
              We specialize in black-and-grey realism, fine line minimalism,
              and full cover-up reconstruction, alongside a dedicated body
              piercing practice run to the same clinical standard. Every
              design is drawn from scratch for the person wearing it.
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