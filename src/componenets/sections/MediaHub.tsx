
import "../../styles/mediahub.css";

export default function MediaHub() {
  return (
    <section className="section section-dark mediahub">
      <div className="container">

        <h2>Insights & Media</h2>

        <div className="media-grid">
          <div className="media-card">Latest Podcast</div>
          <div className="media-card">Latest YouTube</div>
          <div className="media-card">Newsletter</div>
        </div>

      </div>
    </section>
  );
}
