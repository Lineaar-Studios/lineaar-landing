"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";

const cardVariants = {
  initial: { y: 28, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.15,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

export function TestimonialsList() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <ul ref={ref} className="flex flex-col gap-0 bg-white py-4 px-6 rounded-lg" role="list">
      {testimonials.map((testimonial, index) => (
        <motion.li
          key={testimonial.id}
          custom={index}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={cardVariants}
          className={
            index > 0
              ? "border-t border-violet-200/60 pt-6 pb-6"
              : "pb-6"
          }
        >
          <TestimonialCard testimonial={testimonial} />
        </motion.li>
      ))}
    </ul>
  );
}
