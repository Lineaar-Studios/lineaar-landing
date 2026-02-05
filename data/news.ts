export type ContentBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; level: 2 | 3; content: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; content: string };

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  excerpt?: string;
  intro?: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
  content?: ContentBlock[];
};

// Helper function to parse date for sorting (format: "MMM DD, YYYY")
function parseDate(dateStr: string): Date {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sept: 8, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const parts = dateStr.replace(",", "").split(" ");
  const month = months[parts[0]];
  const day = parseInt(parts[1]);
  const year = parseInt(parts[2]);
  return new Date(year, month, day);
}

export const newsItems = [
  {
    id: "1",
    slug: "why-organizations-with-no-clear-brand-fail",
    title: "Why organizations with no clear brand fail?",
    category: "Brand",
    date: "Jan 17, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=500&fit=crop",
    imageAlt: "Why organizations with no clear brand fail",
    intro:
      "A strong brand identity is the foundation of organizational success. Without it, companies struggle to connect with their audience and differentiate themselves in competitive markets.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
      alt: "Brand identity and organizational clarity",
    },
    content: [
      {
        type: "paragraph" as const,
        content:
          "In today's competitive landscape, organizations without a clear brand identity face significant challenges. A well-defined brand serves as a compass, guiding decision-making, attracting the right talent, and building trust with customers and stakeholders.",
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "The Cost of Brand Ambiguity:",
      },
      {
        type: "list" as const,
        items: [
          "Loss of market differentiation: Without a unique brand voice, companies blend into the background.",
          "Reduced customer loyalty: Customers struggle to form emotional connections with unclear brands.",
          "Internal confusion: Employees lack a clear sense of purpose and direction.",
          "Missed opportunities: Inconsistent messaging prevents effective marketing and growth.",
        ],
        ordered: false,
      },
      {
        type: "quote" as const,
        content:
          "Your brand is what people say about you when you're not in the room. Make sure they're saying the right things.",
      },
      {
        type: "paragraph" as const,
        content:
          "Successful organizations invest in brand clarity from the start. They understand that a strong brand is not just a logo or color scheme—it's the entire experience customers have with the organization, from first contact to ongoing relationship.",
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Building a Clear Brand Identity:",
      },
      {
        type: "list" as const,
        items: [
          "Define your core values and mission clearly.",
          "Develop consistent visual and verbal identity guidelines.",
          "Ensure all touchpoints reflect your brand promise.",
          "Train your team to be brand ambassadors.",
        ],
        ordered: true,
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Conclusion:",
      },
      {
        type: "paragraph" as const,
        content:
          "Organizations that invest in brand clarity create stronger connections, build lasting trust, and achieve sustainable growth. The question isn't whether you can afford to build a clear brand—it's whether you can afford not to.",
      },
    ],
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
    intro:
      "Design is more than aesthetics—it's a powerful tool for building trust and credibility. Learn how thoughtful design choices can transform user perception and organizational reputation.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
      alt: "Design and trust building",
    },
    content: [
      {
        type: "paragraph" as const,
        content:
          "Trust is the currency of modern business relationships. In an era where first impressions are often digital, design becomes the primary vehicle for establishing credibility and building lasting connections with your audience.",
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "How Design Builds Trust:",
      },
      {
        type: "list" as const,
        items: [
          "Visual consistency creates familiarity and reduces cognitive load.",
          "Clear information hierarchy guides users and demonstrates competence.",
          "Thoughtful details signal care and attention to quality.",
          "Accessible design shows respect for diverse user needs.",
        ],
        ordered: false,
      },
      {
        type: "paragraph" as const,
        content:
          "When users encounter a well-designed interface, they subconsciously associate the quality of the design with the quality of the organization behind it. This psychological connection is powerful and immediate.",
      },
      {
        type: "quote" as const,
        content:
          "Good design is obvious. Great design is transparent. It builds trust without drawing attention to itself.",
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Practical Steps:",
      },
      {
        type: "list" as const,
        items: [
          "Audit your current design touchpoints for consistency.",
          "Establish clear design principles that reflect your values.",
          "Invest in professional design resources and systems.",
          "Test designs with real users to ensure clarity and trust.",
        ],
        ordered: true,
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Conclusion:",
      },
      {
        type: "paragraph" as const,
        content:
          "Building trust through design is an ongoing process that requires commitment and consistency. By prioritizing clarity, accessibility, and thoughtful execution, organizations can create experiences that not only look good but also build lasting trust with their audience.",
      },
    ],
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
  {
    id: "4",
    slug: "critical-role-of-branding-digital-marketplace",
    title: "The critical role of branding in today's digital marketplace",
    category: "Business",
    date: "Oct 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=500&fit=crop",
    imageAlt: "Branding in digital marketplace",
    intro:
      "In an increasingly crowded digital marketplace, strong branding is no longer optional—it's essential for survival and growth. Discover how effective branding strategies can set your business apart.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
      alt: "Digital marketplace branding",
    },
    content: [
      {
        type: "paragraph" as const,
        content:
          "The digital marketplace has transformed how businesses compete and connect with customers. With millions of companies vying for attention online, branding has become the critical differentiator that determines success or failure.",
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Why Branding Matters More Than Ever:",
      },
      {
        type: "list" as const,
        items: [
          "Digital saturation: Consumers are overwhelmed with choices and rely on brand recognition.",
          "Trust building: Strong brands create emotional connections that drive loyalty.",
          "Competitive advantage: Distinctive branding helps you stand out in search results and social feeds.",
          "Premium positioning: Well-branded companies can command higher prices and attract better customers.",
        ],
        ordered: false,
      },
      {
        type: "quote" as const,
        content:
          "Your brand is your promise to your customer. It tells them what they can expect from your products and services.",
      },
      {
        type: "paragraph" as const,
        content:
          "Successful digital brands understand that branding extends beyond logos and colors. It encompasses every touchpoint—from website design to customer service interactions—creating a cohesive experience that reinforces brand values and builds trust.",
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Key Branding Strategies:",
      },
      {
        type: "list" as const,
        items: [
          "Develop a clear brand story that resonates with your target audience.",
          "Maintain consistency across all digital platforms and channels.",
          "Focus on user experience as a core component of your brand.",
          "Leverage data to understand and respond to customer perceptions.",
        ],
        ordered: true,
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Conclusion:",
      },
      {
        type: "paragraph" as const,
        content:
          "In today's digital marketplace, branding is not a luxury—it's a necessity. Companies that invest in building strong, consistent brands will find themselves better positioned to attract customers, build loyalty, and achieve sustainable growth in an increasingly competitive landscape.",
      },
    ],
  },
  {
    id: "5",
    slug: "strategies-success-social-media-marketing",
    title: "Proven strategies for success in social media marketing",
    category: "SaaS",
    date: "Oct 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop",
    imageAlt: "Social media marketing",
  },
  {
    id: "6",
    slug: "unlocking-business-potential-data-driven",
    title: "Unlocking business potential maximizing roi with data driven",
    category: "Startup",
    date: "Oct 19, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=500&fit=crop",
    imageAlt: "Data driven business",
    intro:
      "Learn how data analytics can inform your business decisions and improve your return on investment.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
      alt: "Business analytics and data visualization",
    },
    content: [
      {
        type: "paragraph" as const,
        content:
          "Data-driven decision-making is crucial for businesses aiming to maximize ROI. By leveraging analytics, companies can identify trends, optimize operations, and make informed strategic choices that drive growth and profitability.",
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Key Components of Data-Driven Decision-Making:",
      },
      {
        type: "list" as const,
        items: [
          "Data Collection: Utilize various tools to collect data from customer interactions, sales figures, and market trends.",
          "Key Performance Indicators (KPIs): Identify KPIs relevant to your business goals, such as customer acquisition cost, customer lifetime value, and conversion rates.",
          "Data Visualization: Use charts and graphs to present data clearly, making it easier to identify patterns and trends.",
        ],
        ordered: true,
      },
      {
        type: "quote" as const,
        content:
          "Data is the new oil, it powers informed decisions that drive success.",
      },
      {
        type: "paragraph" as const,
        content:
          "Companies like Amazon leverage data analytics to personalize customer experiences, optimize supply chains, and predict market demands. This approach has enabled them to achieve remarkable efficiency and customer satisfaction.",
      },
      {
        type: "heading" as const,
        level: 2 as const,
        content: "Conclusion:",
      },
      {
        type: "paragraph" as const,
        content:
          "This blog will explore how implementing data-driven strategies can transform your business operations, enhance decision-making processes, and ultimately maximize your return on investment. Start by identifying your key metrics and building a culture that values data-driven insights.",
      },
    ],
  },
  {
    id: "7",
    slug: "future-of-ecommerce-key-trends",
    title: "The future of e commerce key trends you can't afford",
    category: "App",
    date: "Oct 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop",
    imageAlt: "E-commerce trends",
  },
  {
    id: "8",
    slug: "transforming-business-customer-centric",
    title: "Transforming your business building a customer centric",
    category: "Business",
    date: "Oct 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=500&fit=crop",
    imageAlt: "Customer centric business",
  },
  {
    id: "9",
    slug: "harnessing-power-content-marketing",
    title: "Harnessing the power of content marketing for business growth",
    category: "SaaS",
    date: "Oct 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=500&fit=crop",
    imageAlt: "Content marketing",
  },
].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()) as NewsItem[];
