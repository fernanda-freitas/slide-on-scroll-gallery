"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const images = [
    "zanad01.png",
    "zanad02.png",
    "zanad03.png",
    "zanad01.png",
    "zanad02.png",
  ];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -1000 * 0.6]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 1000 * 0.6]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 1800 * 0.6]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  return (
    <>
      <section className={styles.section}></section>
      <section ref={ref} className={styles.section}>
        <div className={styles.galleryholder}>
          <motion.div
            style={{ top: y }}
            className={`${styles.imageholder} ${styles.image1}`}
          >
            <Image
              src={`/images/${images[0]}`}
              className={styles.galleryimage}
              fill
              alt="image"
            ></Image>
          </motion.div>
          <motion.div
            style={{ top: y2 }}
            className={`${styles.imageholder} ${styles.image2}`}
          >
            <Image
              src={`/images/${images[1]}`}
              className={styles.galleryimage}
              fill
              alt="image"
            ></Image>
          </motion.div>
          <motion.div
            style={{ top: y3 }}
            className={`${styles.imageholder} ${styles.image3}`}
          >
            <Image
              src={`/images/${images[2]}`}
              className={styles.galleryimage}
              fill
              alt="image"
            ></Image>
          </motion.div>
          <motion.div
            style={{ top: y4 }}
            className={`${styles.imageholder} ${styles.image4}`}
          >
            <Image
              src={`/images/${images[3]}`}
              className={styles.galleryimage}
              fill
              alt="image"
            ></Image>
          </motion.div>
          <motion.div
            style={{ top: y5 }}
            className={`${styles.imageholder} ${styles.image5}`}
          >
            <Image
              src={`/images/${images[4]}`}
              className={styles.galleryimage}
              fill
              alt="image"
            ></Image>
          </motion.div>
        </div>
      </section>
      <section className={styles.section}></section>
    </>
  );
}
