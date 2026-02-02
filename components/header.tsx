"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;

const mobileNavLinks = [...navLinks, { href: "/contact", label: "Contact Us" }] as const;

function MenuIcon({ className }: { className?: string }) {
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
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F5F5]">
      <motion.div
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-3"
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label="Lineaar home">
          <Image
            src="/linear_logo.png"
            alt="Lineaar"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav – hidden on small screens */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-brand-ink transition-colors hover:text-brand-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center md:flex">
          <Button asChild size="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile menu button – right end, visible only on small screens */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex cursor-pointer items-center gap-2 text-sm font-medium text-brand-ink transition-colors hover:text-brand-primary md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          id="mobile-menu-btn"
        >
          {menuOpen ? (
            <>
              <span>Close</span>
              <CloseIcon className="size-5" />
            </>
          ) : (
            <>
              <span>Menu</span>
              <MenuIcon className="size-5" />
            </>
          )}
        </button>
      </motion.div>

      {/* Mobile dropdown overlay */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-btn"
        className={cn(
          "fixed inset-0 top-16 z-40 md:hidden",
          menuOpen ? "visible" : "invisible pointer-events-none"
        )}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          aria-label="Close menu"
        />
        <div
          className={cn(
            "absolute right-6 top-0 flex w-auto min-w-[280px] flex-col rounded-xl border border-t-0 border-violet-200/50 bg-hero-bg p-2 shadow-lg transition-all duration-200",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {mobileNavLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[8px] px-4 py-3 text-base font-medium text-hero-text transition-colors hover:bg-white/60 hover:text-brand-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
