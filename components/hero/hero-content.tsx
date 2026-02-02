"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
const transition = { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] };

export function HeroContent() {
  return (
    <div className="flex min-h-0 flex-col justify-center lg:h-full">
      <motion.h1
        id="hero-heading"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={transition}
        className="font-title text-3xl font-bold leading-tight tracking-tight text-hero-text md:text-4xl lg:text-5xl justify-between h-full"
      >
        We Build strategic solutions for Institutions
      </motion.h1>
      <motion.p
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ ...transition, delay: 0.12 }}
        className="mt-6 max-w-xl text-lg text-hero-text"
      >
        Lineaar is a branding and web studio helping institutional organizations
        turn complexity into clear, credible digital presence.
      </motion.p>
      <motion.div
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ ...transition, delay: 0.24 }}
        className="mt-8"
      >
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Schedule a meeting</Link>
        </Button>
      </motion.div>
    </div>
  );
}
