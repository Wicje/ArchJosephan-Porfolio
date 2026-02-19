"use client";

import { motion } from "framer-motion";
import "../../styles/mediahub.css";

const categories = [
  "Social media",
  "Newsletter",
  "ChitChat",
  "Talks",
  "Podcasts",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MediaHub() {
  return (
    <section className="mediahub">
      <div className="container">

        <motion.div
          className="mediahub-nav"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => (
            <span key={i}>{cat}</span>
          ))}
        </motion.div>

        <motion.div
          className="mediahub-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              className="media-card"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="media-image" />
              <div className="media-content">
                <p>
                  Sample media description that feels thoughtful and
                  authoritative.
                </p>
                <button>Explore</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
