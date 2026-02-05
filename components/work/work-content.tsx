"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Work } from "@/data/works";

type WorkContentProps = {
  work: Work;
};

const contentSections = [
  { title: "Project Overview", key: "projectOverview" as const },
  { title: "Execution", key: "execution" as const },
  { title: "Results", key: "results" as const },
];

export function WorkContent({ work }: WorkContentProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mt-16 md:mt-20"
    >
      <div className="mx-auto max-w-3xl flex flex-col gap-6">
        {contentSections.map((section, index) => (
          <motion.div
            key={section.key}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="font-title text-xl font-semibold text-hero-text md:text-2xl">
              {section.title}.
            </h2>
            <p className="mt-4 text-left text-sm leading-relaxed text-brand-ink md:text-base">
              {work[section.key]}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
