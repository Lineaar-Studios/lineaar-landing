export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  excerpt?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "1",
    slug: "why-organizations-with-no-clear-brand-fail",
    title: "Why organizations with no clear brand fail?",
    category: "Brand",
    date: "Jan 17, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=500&fit=crop",
    imageAlt: "Why organizations with no clear brand fail",
  },
  {
    id: "2",
    slug: "building-trust-through-design",
    title: "Building trust through design and clarity",
    category: "Design",
    date: "Oct 15, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop",
    imageAlt: "Building trust through design",
  },
  {
    id: "3",
    slug: "digital-presence-for-institutions",
    title: "Digital presence for institutional organizations",
    category: "Web",
    date: "Sept 18, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=500&fit=crop",
    imageAlt: "Digital presence for institutions",
  },
];
