"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string>(faqItems[0].id);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <div ref={ref} className="flex flex-col gap-4">
      {faqItems.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            custom={index}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={itemVariants}
            className="rounded-[8px] bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? "" : item.id)}
              className="flex w-full items-center justify-between gap-4 rounded-[8px] px-5 py-4 text-left transition-colors hover:bg-violet-50/50"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <span className="font-title text-base font-semibold text-brand-primary md:text-lg">
                {item.question}
              </span>
              {isOpen ? (
                <ChevronUp className="shrink-0 text-brand-primary" />
              ) : (
                <ChevronDown className="shrink-0 text-brand-primary" />
              )}
            </button>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={cn(
                "overflow-hidden transition-all duration-200",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="border-t border-violet-100 px-5 py-4 text-sm text-brand-ink md:text-base">
                {item.answer}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
