import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
};

const categoryBadgeStyles: Record<string, string> = {
  Web: "bg-blue-100 text-brand-primary",
  Product: "bg-green-100 text-green-700",
  Brand: "bg-purple-100 text-purple-700",
  Business: "bg-amber-100 text-amber-800",
};

function getCategoryBadgeClass(category: string): string {
  return (
    categoryBadgeStyles[category] ??
    "bg-brand-surface text-brand-primary"
  );
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link
      href={`/work/${work.id}`}
      className="group flex cursor-pointer flex-col"
    >
      <article className="flex flex-col">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[8px] bg-brand-surface">
          <Image
            src={work.imageUrl}
            alt={work.imageAlt}
            width={400}
            height={500}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <span
            className={`absolute bottom-3 right-3 rounded-[6px] px-3 py-1.5 text-sm font-medium ${getCategoryBadgeClass(work.category)}`}
            aria-hidden
          >
            {work.category}
          </span>
        </div>
        <h3 className="mt-4 font-title text-lg font-semibold text-hero-text md:text-xl group-hover:text-brand-primary">
          {work.title}
        </h3>
        <p className="mt-1 text-sm text-brand-ink-light">
          {work.clientLabel}: {work.client}
        </p>
      </article>
    </Link>
  );
}
