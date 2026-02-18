"use client";

import "../../styles/works.css";
import { motion } from "framer-motion";

export default function Works() {
  return (
    <section className="section works">
      <div className="container">
        <h2 className="section-title">works.</h2>

        <div className="cube-wrapper">

          <motion.div
            className="cube"
            animate={{ rotateY: 360, rotateX: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="face front" />
            <div className="face back" />
            <div className="face left" />
            <div className="face right" />
            <div className="face top" />
            <div className="face bottom" />
          </motion.div>

          <button className="works-btn">
            View my works
          </button>

        </div>
      </div>
    </section>
  );
}
