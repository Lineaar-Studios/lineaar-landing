"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { newsItems } from "@/data/news";
import { NewsCard } from "./news-card";

const overviewItems = newsItems.slice(0, 3);

const cardVariants = {
  initial: { y: 24, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function NewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      className="py-16"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-[1300px] px-3">
        <motion.h2
          id="news-heading"
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center font-title text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl"
        >
          Read our latest insights
        </motion.h2>
        <ul
          className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {overviewItems.map((item, index) => (
            <motion.li
              key={item.id}
              custom={index}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={cardVariants}
            >
              <NewsCard item={item} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
