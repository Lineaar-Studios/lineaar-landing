import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/data/news";

type NewsCardProps = {
  item: NewsItem;
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Link
      href={`/blog/${item.slug}`}
      className="group flex cursor-pointer flex-col"
    >
      {/* Label + top border */}
      <span className="inline-block w-fit rounded-md bg-hero-bg px-2 py-1 text-sm font-medium text-brand-ink-light">
        {item.category}
      </span>
      <div className="mt-3 border-t border-brand-ink/20" />

      {/* Image left, title top-right and date bottom-right */}
      <div className="mt-4 flex gap-4">
        <div className="relative aspect-4/5 w-2/5 min-w-0 shrink-0 overflow-hidden rounded-[12px] bg-hero-bg">
          <Image
            src={item.imageUrl}
            alt={item.imageAlt}
            width={400}
            height={500}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <h3 className="font-title text-lg font-semibold leading-snug text-hero-text line-clamp-3 group-hover:text-brand-primary md:text-xl">
            {item.title}
          </h3>
          <p className="mt-4 text-sm text-brand-ink sm:mt-0">{item.date}</p>
        </div>
      </div>
    </Link>
  );
}
