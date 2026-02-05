"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Work } from "@/data/works";

type WorkMetadataProps = {
  work: Work;
};

const metadataItems = [
  { label: "Client", key: "client" as const },
  { label: "Year", key: "year" as const },
  { label: "Services", key: "services" as const },
  { label: "Category", key: "category" as const },
];

export function WorkMetadata({ work }: WorkMetadataProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="grid grid-cols-2 gap-6 border-b border-brand-surface pb-8 md:grid-cols-4"
    >
      {metadataItems.map((item) => (
        <div key={item.key}>
          <p className="text-md font-medium tracking-wide text-brand-ink-light">
            {item.label}
          </p>
          <p className="mt-1 text-sm font-regular text-hero-text md:text-base">
            {work[item.key]}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
