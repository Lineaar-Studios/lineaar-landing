import { TestimonialsHeader } from "./testimonials-header";
import { TestimonialsList } from "./testimonials-list";

export function Testimonials() {
  return (
    <section
      className="py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1300px] px-3">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          <TestimonialsHeader />
          <TestimonialsList />
        </div>
      </div>
    </section>
  );
}
