import { useEffect, useState } from "react";
import "../styles/header.scss";
import logo from "../assets/logo.jpeg";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Body piercing", href: "#piercing" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Why Choose us", href: "#why-us" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="cont header__inner">
        {/* <a href="#top" className="header__logo">
          Ink <span>fly</span>
        </a> */}
        <img src={logo} alt="Ink fly Logo" />

        <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="primarybtn header__nav-cta"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('openConsultationModal'));
              setMenuOpen(false);
            }}
            aria-haspopup="dialog"
          >
            Book Consultation
          </a>
        </nav>

        <button
          type="button"
          className={`header__burger ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
