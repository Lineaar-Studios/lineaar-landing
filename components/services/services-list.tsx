"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ServicesItem } from "./services-item";

const services = [
  {
    title: "Brand Clarity and Positioning",
    description:
      "We help organizations align their mission, narrative, and messaging into a clear and coherent structure.",
  },
  {
    title: "Brand Identity Design",
    description:
      "We design restrained, professional brand systems that support credibility and long-term use.",
  },
  {
    title: "Informational Website Development",
    description:
      "We build modern, maintainable websites focused on clarity, trust, and usability, not unnecessary complexity.",
  },
] as const;

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function ServicesList() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <ul ref={ref} className="flex flex-col gap-0" role="list">
      {services.map((item, index) => (
        <motion.li
          key={item.title}
          custom={index}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={itemVariants}
        >
          <ServicesItem
            title={item.title}
            description={item.description}
            showDivider={index < services.length - 1}
          />
        </motion.li>
      ))}
    </ul>
  );
}
