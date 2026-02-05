"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type WorkImagesProps = {
  images: Array<{ url: string; alt: string }>;
};

export function WorkImages({ images }: WorkImagesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-brand-surface"
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
