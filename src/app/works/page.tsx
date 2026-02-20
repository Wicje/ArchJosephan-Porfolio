
"use client";

import "./works.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WorksPage() {
  return (
    <section className="works-page">

      <motion.h1
        className="works-heading"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WORKS
      </motion.h1>

      <div className="works-hero">
        <div className="works-image">
          <Image
            src="/workHero.jpg"
            alt="hero"
            fill
            priority
          />
        </div>

        <div className="works-description">
          <p>
            For over five years, I worked as a Product Designer at Swivl,
            closely collaborating with product owners, developers,
            and marketing teams in a fast-changing environment.
          </p>
        </div>
      </div>

      <div className="works-gallery">
        <div className="gallery-item">
          <Image src="/work1.jpg" alt="" fill />
        </div>

        <div className="gallery-item">
          <Image src="/work2.jpg" alt="" fill />
        </div>
      </div>

      <button className="behance-btn"
      href="https://github.com/Wicje?tab=repositories"
      >
        More on GitHub
      </button>

    </section>
  );
}
