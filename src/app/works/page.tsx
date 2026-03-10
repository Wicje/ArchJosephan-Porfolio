"use client";
import "./works.css";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    src: "/firs.png",
    alt: "3d-Project",
    link: "https://memory-tunnel-eight.vercel.app/",
  },
  {
    src: "/wk2.png",
    alt: "tidy",
    link: "https://tidy-jet.vercel.app/",
  },

  {
    src: "/ton.png",
    alt: "Designer-portfolio",
    link: "https://brandit-folio.vercel.app/",
  },
  {
    src: "/wk2.png",
    alt: "tidy",
    link: "https://tidy-jet.vercel.app/",
  },
];

export default function WorksPage() {
  return (
    <section className="works-page">

      <motion.h1
        className="works-heading"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WORKS.
      </motion.h1>

      <div className="works-hero">
        <div className="works-image">
          <Image
            src="/WorkHero.jpg"
            alt="hero"
            fill
            priority
          />
        </div>

        <div className="works-description">
          <p>
            For over three Short years, I worked as a Backend Developer at CocoBase,
            closely collaborating with product owners, developers, designers
            and marketing teams in a fast-changing environment to make the world a 
            better place and pave way for more Collaborations.
          </p>
        </div>
      </div>

<div className="works-gallery">
  {projects.map((project, i) => (
    <a
      key={i}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-item"
    >
      <Image src={project.src} alt={project.alt} fill />
    </a>
  ))}
</div>

<a
  href="https://github.com/Wicje?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="behance-btn"
>
  More on GitHub
</a>

    </section>
  );
}
