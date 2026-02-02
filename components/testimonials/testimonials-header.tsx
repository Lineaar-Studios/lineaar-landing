"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function TestimonialsHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-row items-start gap-4"
    >
      <Image
        src="/icon.svg"
        alt=""
        width={40}
        height={40}
        className="mt-0.5 shrink-0"
        aria-hidden
      />
      <h2
        id="testimonials-heading"
        className="font-title text-3xl font-semibold leading-tight tracking-tight text-brand-primary md:text-4xl"
      >
        Client feedback
        <br />
        and experiences
      </h2>
    </motion.div>
  );
}
