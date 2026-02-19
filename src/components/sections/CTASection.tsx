
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/cta.css";

const headline = "Curious about what we can create? Let’s work together!";

export default function CTASection() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(headline.slice(0, i));
      i++;
      if (i > headline.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="cta"
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      viewport={{ once: true }}
    >
      <div className="container">

        <motion.div
          className="cta-links"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a href="#">LinkedIn</a>
          <a href="#">Github</a>
        </motion.div>

        <motion.h2
          className="cta-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {typedText}
        </motion.h2>

        <motion.div
          className="cta-contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a href="mailto:villainafen@gmail.com" className="cta-email">
            villainafen@gmail.com
          </a>

          <span className="cta-status">
            <span className="status-dot" />
            Available For Work
          </span>
        </motion.div>

        <motion.p
          className="cta-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          All rights reserved ©2026
        </motion.p>

      </div>
    </motion.section>
  );
}
