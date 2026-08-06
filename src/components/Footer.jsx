import useReveal from '../hooks/useReveal.js';
import '../styles/footer.scss';
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer parent">
      <div className="cont">

        <div className="footer__top">

          <div className="footer__about">

            {/* <a href="/" className="footer__logo">
              Ink <span>fly</span>
            </a> */}
            <img src={logo} alt="Ink fly Logo" />

            <p>
              Private, appointment-only tattoo and piercing
              studio. Realism, fine line, cover-ups,
              and precision piercing.
            </p>

          </div>

          <div className="footer__links">

            <h4>Explore</h4>

            <ul>

              <li><a href="#why-us">Why Choose Us</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#piercing">Body Piercing</a></li>

              <li><a href="#gallery">Gallery</a></li>

            </ul>

          </div>

          <div className="footer__links">

            <h4>Studio</h4>

            <ul>

              <li><a href="/">Book a Consultation</a></li>

              <li><a href="#gallery">Recent work</a></li>

              {/* <li><a href="/">Gift Cards</a></li> */}

            </ul>

          </div>

          <div className="footer__links">

            <h4>Follow</h4>

            <ul>

              <li><a href="https://www.instagram.com/inkflytattoopune?igsh=c2Nvb3g4amFlMHhj">Instagram</a></li>

              <li><a href="/">Pinterest</a></li>

              <li><a href="/">Google Reviews</a></li>

            </ul>

          </div>

        </div>

        <div className="footer__bottom">

          <p>
            © 2026 Ink fly Studio. All rights reserved.
          </p>

          <p>
            Licensed body art facility • 18+ only
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
