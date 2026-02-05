"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Work } from "@/data/works";

type WorkHeroProps = {
  work: Work;
};

export function WorkHero({ work }: WorkHeroProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section className="py-6 md:py-8 max-w-[1300px] mx-auto px-3">
      <motion.div
        ref={ref}
        initial={{ y: 24, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto px-3 py-16 md:py-24 border-b border-brand-surface bg-hero-bg rounded-2xl"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-title text-4xl font-semibold leading-tight tracking-tight text-hero-text md:text-5xl">
            {work.title}
          </h1>
          <p className="mt-4 text-sm text-brand-ink-light md:text-base">
            {work.description}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
