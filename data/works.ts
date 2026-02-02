export type Work = {
  id: string;
  title: string;
  client: string;
  clientLabel: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
};

export const works: Work[] = [
  {
    id: "1",
    title: "Creative web redesign",
    client: "Ingabo Museum",
    clientLabel: "Client",
    category: "Web",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=500&fit=crop",
    imageAlt: "Creative web redesign for Ingabo Museum",
  },
  {
    id: "2",
    title: "Mobile app design",
    client: "Jali Finance",
    clientLabel: "Client",
    category: "Product",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=500&fit=crop",
    imageAlt: "Mobile app design for Jali Finance",
  },
  {
    id: "3",
    title: "E-commerce platform setup",
    client: "Sky Transfers",
    clientLabel: "Client",
    category: "Web",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop",
    imageAlt: "E-commerce platform for Sky Transfers",
  },
  {
    id: "4",
    title: "Branding clarity",
    client: "Cloud Journeys",
    clientLabel: "Customer",
    category: "Brand",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=500&fit=crop",
    imageAlt: "Branding clarity for Cloud Journeys",
  },
];
