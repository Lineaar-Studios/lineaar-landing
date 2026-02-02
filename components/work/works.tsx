import { WorksGrid } from "./works-grid";
import { WorksHeader } from "./works-header";

export function Works() {
  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="work-highlights-heading"
    >
      <div className="mx-auto max-w-[1300px] px-3">
        <div className="flex flex-col gap-12">
          <WorksHeader />
          <WorksGrid />
        </div>
      </div>
    </section>
  );
}
