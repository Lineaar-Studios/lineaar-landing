"use client";

import { motion } from "framer-motion";
import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
const transition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] };

export function Hero() {
  return (
    <section className="py-6 md:py-8" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-[1300px] px-3">
        <div className="grid grid-cols-1 gap-12 rounded-2xl bg-hero-bg px-8 md:px-12 py-8 md:py-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-stretch lg:px-16">
          <div className="min-h-0">
            <HeroContent />
          </div>
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...transition, delay: 0.2 }}
            className=""
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
