
import "../../styles/works.css";

export default function Works() {
  return (
    <section className="section works">
      <div className="container">

        <h2 className="section-title">works.</h2>

        <div className="cube-wrapper">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face left"></div>
            <div className="face right"></div>
          </div>

          <button className="works-btn">View my works</button>
        </div>

      </div>
    </section>
  );
}
