"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Work } from "@/data/works";
import { WorkCard } from "./work-card";

type MoreWorkProps = {
  works: Work[];
};

export function MoreWork({ works }: MoreWorkProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <section className="bg-[#F5F5F5] py-8 md:py-10">
      <div className="mx-auto max-w-[1300px] px-3">
        <motion.h2
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center font-title text-2xl font-semibold text-brand-primary md:text-3xl"
        >
          More work
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ y: 24, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.15 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <WorkCard work={work} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
