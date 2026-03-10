
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/navbar.css";
import Link from "next/link";
import { Variants } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: "easeOut" as const
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export default function Navbar() {
const MotionLink = motion(Link);

const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

 useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <MotionLink href="/works" variants={itemVariants} className="nav-link" whileHover={{ y: -3, opacity: 0.6 }}>
              Works
            </MotionLink>
            <MotionLink href="https://github.com/Wicje" variants={itemVariants} className="nav-link">
              Media
            </MotionLink>
            <MotionLink href="https://drive.google.com/file/d/1sdJIcCYXI4e33Bt8Urr1xeLOnT3uACrA/view?usp=sharing" variants={itemVariants} className="nav-link">
              CV
            </MotionLink>
            <MotionLink href="https://x.com/ArchJosephan/" variants={itemVariants} className="nav-link">
              Twitter
            </MotionLink>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
