export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What Services do you offer?",
    answer:
      "Lineaar is a branding and web studio helping institutional organizations turn complexity into clear, credible digital presence.",
  },
  {
    id: "2",
    question: "How do you ensure quality in your projects?",
    answer:
      "We follow a structured process with clear milestones, regular check-ins, and rigorous review at each stage. Our focus on brand clarity and restraint ensures deliverables that support long-term credibility.",
  },
  {
    id: "3",
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by scope—from a few weeks for focused deliverables to several months for full brand and web projects. We provide a detailed timeline and milestones at the start of every engagement.",
  },
  {
    id: "4",
    question: "Can you work with businesses of all sizes?",
    answer:
      "Yes. We work with institutions and organizations of all sizes, from small nonprofits to larger entities. Our approach scales to your needs while keeping clarity and structure at the center.",
  },
];
