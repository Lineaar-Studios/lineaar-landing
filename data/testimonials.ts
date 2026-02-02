export type Testimonial = {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  imageUrl: string;
  imageAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jenkins Aigbugwili",
    title: "CEO, Founder",
    company: "Safe Choice Support Services",
    quote:
      "Lineaar brought clarity to our brand and digital presence. Their structured approach helped us communicate our mission with confidence to stakeholders and clients alike.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    imageAlt: "Jenkins Aigbugwili",
  },
  {
    id: "2",
    name: "Emily Carter",
    title: "Director of Communications",
    company: "Heritage Institute",
    quote:
      "Working with Lineaar transformed how we present ourselves online. We now have a website that reflects our credibility and makes complex information easy to navigate.",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    imageAlt: "Emily Carter",
  },
  {
    id: "3",
    name: "Raj Patel",
    title: "Head of Strategy",
    company: "Transparency Council",
    quote:
      "Their discipline and intentionality showed in every deliverable. Lineaar didn't just design—they built a system we can maintain and grow with over time.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    imageAlt: "Raj Patel",
  },
];
