
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer section-dark">
      <div className="container footer-inner">

        <div className="footer-cta">
          <h2>
            Curious what we can build?
            <br />
            Let’s work.
          </h2>

          <div className="footer-contact">
            <a href="mailto:you@domain.com" className="footer-email">
              you@domain.com
            </a>

            <span className="availability">
              ● Available for work
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>All rights reserved © 2026</span>

          <div className="footer-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
