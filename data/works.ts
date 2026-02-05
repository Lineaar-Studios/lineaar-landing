export type Work = {
  id: string;
  title: string;
  client: string;
  clientLabel: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  year: string;
  services: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
  projectOverview: string;
  execution: string;
  results: string;
};

export const works: Work[] = [
  {
    id: "1",
    title: "Creative web redesign",
    client: "Framer Studio",
    clientLabel: "Client",
    category: "Web",
    year: "2023",
    services: "Development, Design",
    description:
      "A complete redesign of Framer Studio's web presence to enhance user engagement and showcase their creative platform.",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=500&fit=crop",
    imageAlt: "Creative web redesign for Framer Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        alt: "Creative web redesign showcase",
      },
      {
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        alt: "Web design details",
      },
    ],
    projectOverview:
      "The client required a comprehensive web redesign to modernize their digital presence and improve user experience across all devices.",
    execution:
      "We conducted extensive user research, redesigned the information architecture, and implemented a modern, responsive design system. The new site features improved navigation, faster load times, and enhanced visual storytelling.",
    results:
      "The redesign resulted in a 45% increase in user engagement, 60% improvement in mobile traffic, and a 30% reduction in bounce rate.",
  },
  {
    id: "2",
    title: "Boosting e-commerce sales",
    client: "Dynamics",
    clientLabel: "Client",
    category: "Product",
    year: "2024",
    services: "Development, Strategy",
    description:
      "Developing a comprehensive digital marketing strategy to increase Dynamics' online visibility and generate more qualified leads.",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=500&fit=crop",
    imageAlt: "E-commerce platform for Dynamics",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        alt: "E-commerce platform interface",
      },
      {
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        alt: "E-commerce analytics dashboard",
      },
    ],
    projectOverview:
      "The client required a comprehensive digital marketing strategy to increase their online visibility and generate more qualified leads.",
    execution:
      "We crafted an integrated digital strategy, combining SEO, social media marketing, and pay-per-click (PPC) campaigns. We also created a content marketing plan, utilizing blogs and email newsletters to engage potential customers.",
    results:
      "The strategy resulted in a 40% increase in organic website traffic, a 58% growth in social media engagement, and a 15% rise in overall lead generation.",
  },
  {
    id: "3",
    title: "Enhanced digital strategy",
    client: "Ventures",
    clientLabel: "Client",
    category: "Business",
    year: "2021",
    services: "Development, Design",
    description:
      "Developing a comprehensive digital marketing strategy to increase Agency's innovations' online visibility.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop",
    imageAlt: "Enhanced digital strategy for Ventures",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        alt: "Digital strategy visualization",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        alt: "Strategy implementation results",
      },
    ],
    projectOverview:
      "The client required a comprehensive digital marketing strategy to increase their online visibility and generate more qualified leads.",
    execution:
      "We crafted an integrated digital strategy, combining SEO, social media marketing, and pay-per-click (PPC) campaigns. We also created a content marketing plan, utilizing blogs and email newsletters to engage potential customers.",
    results:
      "The strategy resulted in a 40% increase in organic website traffic, a 58% growth in social media engagement, and a 15% rise in overall lead generation.",
  },
  {
    id: "4",
    title: "Eco friendly brand refresh",
    client: "Enterprises",
    clientLabel: "Client",
    category: "Brand",
    year: "2022",
    services: "Design, Branding",
    description:
      "A complete brand refresh for Enterprises to align with their sustainability mission and modern market positioning.",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop",
    imageAlt: "Eco friendly brand refresh for Enterprises",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        alt: "Brand identity design",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        alt: "Brand application examples",
      },
    ],
    projectOverview:
      "The client needed a complete brand refresh to better communicate their commitment to sustainability and appeal to environmentally conscious consumers.",
    execution:
      "We developed a new visual identity system that incorporates natural elements, eco-friendly color palettes, and modern typography. The rebrand included logo design, brand guidelines, and comprehensive application across all touchpoints.",
    results:
      "The brand refresh led to a 50% increase in brand recognition, 35% growth in customer engagement, and positive feedback from 90% of stakeholders.",
  },
];
