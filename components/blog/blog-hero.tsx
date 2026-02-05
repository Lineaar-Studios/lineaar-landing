"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { NewsItem } from "@/data/news";

type BlogHeroProps = {
  post: NewsItem;
};

const categoryBadgeStyles: Record<string, string> = {
  Web: "bg-blue-100 text-brand-primary",
  SaaS: "bg-blue-100 text-brand-primary",
  Product: "bg-green-100 text-green-700",
  Startup: "bg-green-100 text-green-700",
  Brand: "bg-purple-100 text-purple-700",
  App: "bg-purple-100 text-purple-700",
  Business: "bg-amber-100 text-amber-800",
  Design: "bg-brand-surface text-brand-primary",
};

function getCategoryBadgeClass(category: string): string {
  return (
    categoryBadgeStyles[category] ??
    "bg-brand-surface text-brand-primary"
  );
}

export function BlogHero({ post }: BlogHeroProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  // Format date to uppercase (e.g., "OCT 19, 2024")
  const formattedDate = post.date.toUpperCase();

  return (
    <section className="py-6 md:py-8 max-w-[1300px] mx-auto px-3">
      <motion.div
        ref={ref}
        initial={{ y: 24, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto px-3 py-12 md:py-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-brand-ink-light">
            <span>{formattedDate}</span>
            <span className="h-1 w-1 rounded-full bg-brand-ink-light" />
            <span
              className={`rounded-md px-2 py-1 text-xs font-medium ${getCategoryBadgeClass(post.category)}`}
            >
              {post.category}
            </span>
          </div>
          <h1 className="mt-6 font-title text-4xl font-semibold leading-tight tracking-tight text-hero-text md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          {post.intro && (
            <p className="mt-6 text-base leading-relaxed text-brand-ink md:text-lg">
              {post.intro}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
