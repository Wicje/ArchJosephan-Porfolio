"use client";
import React from "react";
import { motion } from "framer-motion";
import "../../styles/mediahub.css";
import { Variants } from "framer-motion";
import Link from "next/link";

const contentData = [
  {
    category: "Twitter",
    imgClass: "img-social",
    desc: "(Almost) weekly, I create content around Software design. Whether that be tips & tricks I've picked up along the way or the process for companies i have worked with; I'll always show up for the work",
    btn: "FOLLOW ME",
    link: "https://twitter.com/ArchJosephan",
  },
  {
    category: "Newsletter",
    imgClass: "img-newsletter",
    desc: "Along with my design content across social media, I also write a sort-of-monthly newsletter",
    btn: "FOLLOW ME",
    link: "https://twitter.com/ArchJosephan",

  },
  {
    category: "ArchJosephan",
    imgClass: "img-chitchat",
    desc: "Every month(ish), on YouTube, I interview Developer from all across the world to learn about their story, approach to their craft and ultimately to share knowledge with the dev community.",
    btn: "SUBSCRIBE",
    link: "https://youtube.com/yourchannel",
  },
  {
    category: "Talks",
    imgClass: "img-talks",
    desc: "I was lucky enough to be invited to share my story and tips on landing higher ticket clients at SuperTeam Summit.",
    btn: "WATCH MY TALK",
    link: "https://youtube.com/talk",
  },
  {
    category: "Podcasts",
    imgClass: "img-podcasts",
    desc: (
      <>
        I sat down with one of my best mates and fellow developer{" "}
        <span className="highlight-link">CJ Young</span> to chat through my
        dev journey so far.
      </>
    ),
    btn: "WATCH/LISTEN",
     link: "https://spotify.com/podcast",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const
    },
  },
};

export default function MediaHub() {
  return (
    <section className="mediahub">
      <div className="container">
        <motion.div
          className="mediahub-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contentData.map((item, index) => (
            <motion.div
              key={index}
              className="media-column"
              variants={cardVariants}
            >
              <h3 className="media-category">{item.category}</h3>

              <motion.div
                className="media-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Special handling for stacked images in ChittChat */}
                {item.category === "ChittChat" ? (
                  <div className="stacked-images">
                    <div className="media-image img-chitchat-top" />
                    <div className="media-image img-chitchat-bottom" />
                  </div>
                ) : (
                  <div className={`media-image ${item.imgClass}`} />
                )}

                <div className="media-content">
                  <p>{item.desc}</p>
                  {item.btn && item.link && (
                     <Link href={item.link} target="_blank">
                      <button>{item.btn}</button>
                       </Link>
                    )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
