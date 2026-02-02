"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { StatCard } from "./stat-card";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop";

const stats = [
  { value: "5+", label: "Years of service", variant: "filledDark" as const },
  { value: "20+", label: "Successful projects", variant: "filledLight" as const },
  {
    value: "97%",
    label: "Clients satisfaction rate",
    variant: "outline" as const,
  },
];

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

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-[1300px] px-3">
        <motion.h2
          id="stats-heading"
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center font-title text-3xl font-semibold tracking-tight text-brand-primary md:text-4xl"
        >
          Our success story in numbers
        </motion.h2>
        <ul
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
          role="list"
        >
          {stats.map((stat, index) => (
            <motion.li
              key={stat.label}
              custom={index}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={cardVariants}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                variant={stat.variant}
              />
            </motion.li>
          ))}
        </ul>

        {/* CTA block */}
        <div className="mt-16 md:mt-26 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:justify-between lg:gap-16">
          <div className="relative aspect-4/3 w-full min-w-0 overflow-hidden rounded-[8px]">
            <Image
              src={CTA_IMAGE}
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="font-title text-2xl font-semibold leading-tight text-brand-primary md:text-3xl">
              We thrive through helping our client&apos;s success.
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/work">More Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Schedule a meeting</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
