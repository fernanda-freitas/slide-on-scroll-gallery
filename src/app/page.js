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

  const y = useTransform(scrollYProgress, [0, 1], [0, 2000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const [dimension, setDimension] = useState({ height: 0 });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDimension();
    });
  }, []);

  console.log(dimension);

  return (
    <>
      <section className={styles.section}></section>
      <section ref={ref} className={styles.section}>
        <div className={styles.galleryholder}>
          <motion.div style={{ y }} className={styles.imageholder}>
            <Image
              src={`/images/${images[0]}`}
              className={styles.galleryimage}
              fill
              alt="image"
            ></Image>
          </motion.div>
          <motion.div style={{ y2 }} className={styles.imageholder}>
            <Image
              src={`/images/${images[0]}`}
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
