
import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">

        <div className="hero-left">
          <h1 className="hero-name">
            JOSEPHAN<br />
            ARCHITECT
          </h1>
          <p className="hero-email">you@domain.com</p>
        </div>

        <div className="hero-right">
          <div className="hero-avatar" />
          <p className="hero-description">
            I build scalable systems, lead teams, design architectures,
            and ship products that move markets.
            Dev. Tech Lead. Creative Architect. TPM.
          </p>
        </div>

      </div>
    </section>
  );
}
