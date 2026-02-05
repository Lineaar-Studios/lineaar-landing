import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/data/news";

type BlogCardProps = {
  post: NewsItem;
};

const categoryBadgeStyles: Record<string, string> = {
  Web: "bg-blue-100 text-brand-primary",
  SaaS: "bg-blue-100 text-brand-primary",
  Product: "bg-green-100 text-green-700",
  Startup: "bg-green-100 text-green-700",
  Brand: "bg-purple-100 text-purple-700",
  App: "bg-purple-100 text-purple-700",
  Business: "bg-amber-100 text-amber-800",
  Design: "bg-brand-surface text-brand-primary",
};

function getCategoryBadgeClass(category: string): string {
  return (
    categoryBadgeStyles[category] ??
    "bg-brand-surface text-brand-primary"
  );
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex cursor-pointer flex-col"
    >
      <span
        className={`inline-block w-fit rounded-md px-2 py-1 text-sm font-medium ${getCategoryBadgeClass(post.category)}`}
      >
        {post.category}
      </span>
      <div className="mt-3 border-t border-brand-ink/20" />
      <div className="mt-4 flex gap-4">
        <div className="relative aspect-square w-2/5 min-w-0 shrink-0 overflow-hidden rounded-[12px] bg-hero-bg">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            width={400}
            height={400}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <h3 className="font-title text-lg font-semibold leading-snug text-hero-text line-clamp-3 group-hover:text-brand-primary md:text-xl">
            {post.title}
          </h3>
          <p className="mt-4 text-sm text-brand-ink-light sm:mt-0">
            {post.date}
          </p>
        </div>
      </div>
    </Link>
  );
}
