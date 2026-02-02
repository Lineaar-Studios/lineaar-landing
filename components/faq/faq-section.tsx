import { FAQAccordion } from "./faq-accordion";
import { FAQHeader } from "./faq-header";

export function FAQSection() {
  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1300px] px-3">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          <FAQHeader />
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
}
