import useReveal from '../hooks/useReveal.js';
import '../styles/footer.scss';

function Footer() {
  const year = new Date().getFullYear();
  const dividerRef = useReveal();

  return (
    <footer className="footer parent">
      <div className="cont">
        <div className="footer__top">
          <a href="#top" className="footer__logo">
            Obscura <span>Ink</span>
          </a>

          <div className="footer__links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="mailto:studio@obscurainkco.com">Email</a>
          </div>
        </div>

        <div ref={dividerRef} className="ink-divider">
          <span className="ink-divider__needle">
            <svg viewBox="0 0 400 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="4" x2="400" y2="4" stroke="var(--gold)" strokeWidth="1.4" />
            </svg>
          </span>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Obscura Ink Tattoo Studio. All rights reserved.</p>
          <p>18 Marlowe Street, Studio 3 — By appointment only.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
