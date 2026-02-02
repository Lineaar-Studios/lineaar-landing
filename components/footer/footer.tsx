import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  // { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
] as const;

const socialLinks = [
  { href: "#", ariaLabel: "Facebook", Icon: Facebook },
  { href: "#", ariaLabel: "Instagram", Icon: Instagram },
  { href: "#", ariaLabel: "LinkedIn", Icon: Linkedin },
  { href: "#", ariaLabel: "YouTube", Icon: Youtube },
] as const;

export function Footer() {
  return (
    <footer role="contentinfo">
      <div className="mx-auto max-w-[1300px] rounded-t-3xl bg-hero-bg text-hero-text">
        <div className="px-6 pt-16 pb-14 md:pt-20 md:pb-16">
          <div className="grid grid-cols-1 place-items-center gap-10 text-center md:grid-cols-3 md:place-items-center md:gap-8">
            {/* Left: Brand */}
            <div className="flex flex-col items-center md:justify-start md:items-start gap-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/footer_logo.svg"
                  alt="Lineaar"
                  width={200}
                  height={100}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="max-w-xs text-sm text-brand-ink-light md:text-left">
                Creating digital experiences. Lineaar is built on the principle
                that structure creates trust.
              </p>
              <p className="mt-2 text-xs text-brand-ink-light/90">
                © All rights reserved by Lineaar.
              </p>
            </div>

            {/* Middle: Company */}
            <div className="flex flex-col items-center md:justify-start md:items-start">
              <h3 className="font-title text-sm font-bold uppercase tracking-wider text-hero-text">
                Company
              </h3>
              <ul className="mt-4 flex flex-col gap-3 md:justify-start md:items-start" role="list">
                {companyLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-brand-ink-light transition-colors hover:text-brand-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Get in touch */}
            <div className="flex flex-col items-center md:items-start md:justify-start">
              <h3 className="font-title text-sm font-bold uppercase tracking-wider text-hero-text">
                Get in touch
              </h3>
              <a
                href="mailto:hello@lineaar.com"
                className="mt-4 inline-block text-sm text-brand-ink-light transition-colors hover:text-brand-primary"
              >
                contact@lineaar.co
              </a>
              <div className="mt-6 flex justify-center gap-3">
                {socialLinks.map(({ href, ariaLabel, Icon }) => (
                  <a
                    key={ariaLabel}
                    href={href}
                    aria-label={ariaLabel}
                    className="flex size-10 items-center justify-center rounded-[8px] border border-violet-200/80 text-brand-primary transition-colors duration-200 hover:bg-brand-primary hover:text-white"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
