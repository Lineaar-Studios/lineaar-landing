import { ServicesHeading } from "./services-heading";
import { ServicesList } from "./services-list";

export function Services() {
  return (
    <section
      className="py-16"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1250px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-start">
          <ServicesHeading />
          <div>
            <ServicesList />
          </div>
        </div>
      </div>
    </section>
  );
}
