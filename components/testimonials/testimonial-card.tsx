import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex flex-col">
      <p className="text-base font-semibold text-hero-text">
        {testimonial.name}
        <span className="mx-2 font-normal text-brand-ink-light">|</span>
        <span className="text-sm font-normal text-brand-ink-light">
          {testimonial.title} at {testimonial.company}
        </span>
      </p>
      <div className="mt-4 flex items-center gap-4 rounded-[8px] bg-hero-bg p-4">
        <div className="size-20 shrink-0 overflow-hidden rounded-[8px] bg-white/80">
          <Image
            src={testimonial.imageUrl}
            alt={testimonial.imageAlt}
            width={80}
            height={80}
            className="size-full object-cover"
            sizes="80px"
          />
        </div>
        <p className="min-w-0 flex-1 text-sm leading-relaxed text-brand-ink md:text-base">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
    </article>
  );
}
