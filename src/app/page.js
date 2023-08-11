"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, useScroll } from "framer-motion";
// import { useEffect } from "react";

export default function Home() {
  const images = [
    "zanad01.png",
    "zanad02.png",
    "zanad03.png",
    "zanad01.png",
    "zanad02.png",
  ];

  const { scrollYProgress } = useScroll();

  const scroll = {
    initial: {
      top: 0 * scrollYProgress,
    },
    animate: {
      top: 40 * scrollYProgress,
    },
  };

  return (
    <>
      <section className={styles.section}></section>
      <section className={styles.section}>
        <div className={styles.galleryholder}>
          {images.map((src, i) => {
            return (
              <motion.div
                key={i}
                className={styles.imageholder}
                variants={scroll}
                initial="initial"
                animate="animate"
              >
                <Image
                  src={`/images/${src}`}
                  className={styles.galleryimage}
                  fill
                  alt="image"
                ></Image>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section className={styles.section}></section>
    </>
  );
}
