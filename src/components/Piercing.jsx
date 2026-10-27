import useReveal from "../hooks/useReveal.js";
import "../styles/piercing.scss";
import { FiShield, FiCheckCircle, FiHeart } from "react-icons/fi";
import { LuBadgeCheck } from "react-icons/lu";

function Piercing() {
  const piercingData = [
    {
      title: "Ear Piercing",
      // price: "From ₹1,200",
      desc: "Lobe, helix, tragus, conch, and industrial — needle piercing only, no piercing guns.",
    },
    {
      title: "Nose Piercing",
      // price: "From ₹1,000",
      desc: "Nostril and septum piercing with titanium or surgical steel starter jewelry.",
    },
    {
      title: "Navel Piercing",
      // price: "From ₹1,400",
      desc: "Standard or floating navel piercing, sized and placed to your anatomy.",
    },
    {
      title: "Eyebrow Piercing",
      // price: "From ₹1,200",
      desc: "Vertical or horizontal placement, marked and confirmed before piercing.",
    },
    {
      title: "Lip & Oral",
      // price: "From ₹1,300",
      desc: "Labret, monroe, and medusa piercings using flat-back jewelry for comfort.",
    },
    {
      title: "Surface & Dermal",
      // price: "From ₹1,800",
      desc: "Flat surface anchors for collarbone, nape, and hip placements.",
    },
  ];

  const features = [
    {
      icon: <FiShield />,
      title: "Single-Use Needles",
      desc: "Every needle is sealed, sterile, and opened in front of you.",
    },
    {
      icon: <LuBadgeCheck />,
      title: "Autoclave Sterilization",
      desc: "Medical-grade sterilization between every appointment.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Implant-Grade Jewelry",
      desc: "Titanium and surgical steel starter jewelry.",
    },
    {
      icon: <FiHeart />,
      title: "Guided Aftercare",
      desc: "Written and verbal aftercare with healing check-in.",
    },
  ];

  return (
    <section className="piercing parent" id="piercing">
      <div className="cont">
        <div className="piercing__head">
          <span className="eyebrow">BODY PIERCING</span>

          <h2 className="section-title">
            Professional <span>body piercing</span>
            <br />
            <span>in Wakad,</span> Pune.
          </h2>

          <p className="section-subtitle">
            Looking for body piercing in Wakad, Pune? Inkfly Tattoo offers
            personalised piercing services with a focus on precision, hygiene,
            and comfort. Our piercing process includes sterile, single-use
            needles, suitable quality jewelry, and clear aftercare guidance to
            help you care for your new piercing.
          </p>
        </div>

        <div className="piercing__grid">
          {piercingData.map((item, index) => (
            <div className="piercing__card" key={index}>
              <div className="piercing__top">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="ink-divider"></div>

        <div className="piercing__features">
          {features.map((item, index) => (
            <div className="feature" key={index}>
              <div className="feature__icon">{item.icon}</div>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Piercing;
