// src/components/About.tsx
import React from "react";
import "../../styles/about.css"; // make sure the path is correct

export default function About() {
  return (
    <section className="section about">

      {/* Top row: title + glass button */}
      <div className="about-super">
        <h2>about.</h2>
        <button className="glass-btn">Read CV</button>
      </div>

      {/* Main content */}
      <div className="container about-grid">

        {/* Bold big heading */}
        <div className="about-heading">
          <h2 className="about-title">
            I build visually stunning interfaces backed by solid engineering architecture that has contributed to society one way or another.
          </h2>
        </div>

        {/* Image */}
        <div className="about-image"></div>

        {/* Text beside image */}
        <div className="about-text">
          I believe in building leverage.<br />
          Teams, products, ecosystems.<br />
          Strategy meets execution.
        </div>

      </div>

    </section>
  );
}
