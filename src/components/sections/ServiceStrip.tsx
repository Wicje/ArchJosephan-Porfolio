"use client";

import "../../styles/services-strip.css";
import { motion } from "framer-motion";

const services = [
  "UX Critic",
  "Prototyping",
  "Senior Developer",
  "Tech Lead",
  "Product developer",
  "Project Manager",
  "DevRel",
  "Creative Architect",
  "Founder",
];

export default function ServicesStrip() {
  return (
    <div className="services-strip">
      <motion.div
        className="services-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...services, ...services].map((item, index) => (
          <span key={index} className="service-item">
            {item} ✦
          </span>
        ))}
      </motion.div>
    </div>
  );
}
