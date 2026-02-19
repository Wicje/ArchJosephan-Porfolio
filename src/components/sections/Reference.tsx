
"use client";

import { motion } from "framer-motion";
import "../../styles/reference.css";

const references = [
  {
    name: "Ksenia Kuzmych",
    role: "Product Designer at AmoProduct",
    quote:
      "She is a great mentor to work with and learn from. She excels at guiding and motivating team members.",
  },
  {
    name: "Rachel Ashworth",
    role: "Product Marketing Manager at Swivl",
    quote:
      "She applies all of our feedback forward, lending credit to her ability to adapt and grow.",
  },
  {
    name: "Diana Pykalenko",
    role: "Project Manager at Swivl",
    quote:
      "Her inclination to consider the larger picture results in visually appealing designs.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // smooth luxury easing
    },
  },
};

export default function Reference() {
  return (
    <section className="section reference">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          references.
        </motion.h2>

        <motion.div
          className="reference-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {references.map((ref, index) => (
            <motion.div
              key={index}
              className="reference-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <h4>{ref.name}</h4>
              <span className="reference-role">{ref.role}</span>
              <p className="reference-quote">{ref.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
