"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { name: "Facebook", Icon: Facebook, href: "#" },
  { name: "Instagram", Icon: Instagram, href: "#" },
  { name: "Twitter", Icon: Linkedin, href: "#" },
  { name: "YouTube", Icon: Youtube, href: "#" },
] as const;

export function ContactInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex items-start gap-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-1 shrink-0 text-hero-text"
        >
          <path d="M12 2v20M2 12h20" />
        </svg>
        <h1 className="font-title text-4xl font-semibold text-hero-text md:text-5xl">
          Contact us
        </h1>
      </div>
      <p className="mt-6 text-base leading-relaxed text-brand-ink md:text-lg">
        We&apos;re here to help you bring your vision to life. Whether you have
        a question about our services or want to discuss a potential project,
        we&apos;d love to hear from you. Our team is committed to providing
        exceptional service and expertise.
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="font-title text-xl font-semibold text-hero-text">
            Email us
          </h2>
          <a
            href="mailto:contact@lineaar.co"
            className="mt-2 block text-base text-brand-ink-light transition-colors hover:text-brand-primary"
          >
            contact@lineaar.co
          </a>
        </div>

        <div>
          <h2 className="font-title text-xl font-semibold text-hero-text">
            Give us a call
          </h2>
          <a
            href="tel:+1234567890"
            className="mt-2 block text-base text-brand-ink-light transition-colors hover:text-brand-primary"
          >
            Call now
          </a>
        </div>

        <div>
          <h2 className="font-title text-xl font-semibold text-hero-text">
            Follow us
          </h2>
          <div className="mt-2 flex flex-col gap-2">
            {socialLinks.map(({ name, Icon, href }) => (
              <a
                key={name}
                href={href}
                className="flex items-center gap-2 text-base text-brand-ink-light transition-colors hover:text-brand-primary"
              >
                <Icon className="size-4" />
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
