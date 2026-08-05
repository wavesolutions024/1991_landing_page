import useReveal from '../hooks/useReveal.js';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer parent">
      <div className="cont">

        <div className="footer__top">

          <div className="footer__about">

            <a href="/" className="footer__logo">
              Ink <span>fly</span>
            </a>

            <p>
              Private, appointment-only tattoo and piercing
              studio. Realism, fine line, cover-ups,
              and precision piercing.
            </p>

          </div>

          <div className="footer__links">

            <h4>Explore</h4>

            <ul>

              <li><a href="/">Why Choose Us</a></li>

              <li><a href="/">Services</a></li>

              <li><a href="/">Body Piercing</a></li>

              <li><a href="/">Gallery</a></li>

            </ul>

          </div>

          <div className="footer__links">

            <h4>Studio</h4>

            <ul>

              <li><a href="/">Book a Consultation</a></li>

              <li><a href="/">Aftercare Guide</a></li>

              <li><a href="/">Gift Cards</a></li>

            </ul>

          </div>

          <div className="footer__links">

            <h4>Follow</h4>

            <ul>

              <li><a href="/">Instagram</a></li>

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
