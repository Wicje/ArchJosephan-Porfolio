"use client";

import { motion } from "framer-motion";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer-cta">
      
      {/* MASSIVE CTA TEXT */}
      <motion.h1
        className="footer-main-cta"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        CREATIVE <br />
        ARCHITECT
      </motion.h1>

      {/* Supporting content */}
      <motion.div
        className="footer-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>
          Work seamlessly with an expert built to move
          at your speed and deliver beyond what you imagined.
        </h2>

        <button className="footer-btn">
          Book a call 
        </button>
      </motion.div>

      {/* Legal links */}
      <div className="footer-legal">
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </div>

    </section>
  );
}
