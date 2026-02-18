
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/navbar.css";


const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export default function Navbar() {


const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      
<motion.nav
  className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="container navbar-inner">
          <motion.div variants={itemVariants} className="nav-logo">
            Josephan
          </motion.div>

          <div className="nav-links">
            {["Works", "Media", "CV", "Twitter"].map((item) => (
              <motion.a
                key={item}
                variants={itemVariants}
                href="#"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <div className="nav-divider" />
    </>
  );
}
