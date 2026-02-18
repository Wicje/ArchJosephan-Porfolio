"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../styles/about.css";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const splitText = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.05 }}
      >
        {char}
      </motion.span>
    ));

  return (
    <section className="section about" ref={ref}>
      
      {/* Top row */}
      <div className="about-super">
        <h2>about.</h2>
        <button className="glass-btn">Read CV</button>
      </div>

      {/* Main content */}
      <motion.div
        className="container about-grid"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >

        {/* Bold headline with typing animation */}
        <div className="about-heading">
          <h2 className="about-title">
            {splitText(
              "I build visually stunning interfaces backed by solid engineering architecture that has contributed to society one way or another."
            )}
          </h2>
        </div>

        {/* Image */}
        <motion.div className="about-image" variants={item}></motion.div>

        {/* Text beside image */}
        <motion.div className="about-text" variants={item}>
          I believe in building leverage.<br />
          Teams, Products, Ecosystems, Communities.<br />
          Strategy meets and defines execution.
        </motion.div>

      </motion.div>
    </section>
  );
}
