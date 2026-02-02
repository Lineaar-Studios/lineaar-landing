"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { works } from "@/data/works";
import { WorkCard } from "./work-card";

const cardVariants = {
  initial: { y: 24, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function WorksGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.ul
      ref={ref}
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      role="list"
    >
      {works.map((work, index) => (
        <motion.li
          key={work.id}
          custom={index}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={cardVariants}
        >
          <WorkCard work={work} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
