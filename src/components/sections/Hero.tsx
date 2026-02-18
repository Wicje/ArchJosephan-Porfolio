
"use client";

import { motion } from "framer-motion";
import "../../styles/hero.css";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText =
    "Hello, I'm a Passion-Driven developer with 3years of Critical Experience in Shipping Scalable Products.Obsessed with Aesthetics,Logic and Visuals. Let's Build!!";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero section">
      <div className="container hero-grid">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-name">
            JOSEPHAN<br />
            ARCHITECT
          </h1>
          <p className="hero-email">joseloper17@gmail.com</p>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-avatar" />

          <p className="hero-description typing">
            {text}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
