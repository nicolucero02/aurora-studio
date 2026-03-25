export type Service = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  client: string;
  category: string;
  summary: string;
  impact: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  highlighted?: boolean;
  features: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type NeedOption = {
  id: "branding" | "web" | "contenido";
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  recommendation: string;
};
