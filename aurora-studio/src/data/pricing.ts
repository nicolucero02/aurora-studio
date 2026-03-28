import type { PricingPlan } from "@/types/content";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Base",
    description: "Ideal para ordenar una presencia mínima con criterio.",
    price: "USD 500-800",
    features: [
      "Mini auditoría de marca",
      "Landing o refresh visual",
      "Mensajes clave y CTA principal",
    ],
  },
  {
    name: "Growth",
    description: "La opción más elegida para marcas que quieren vender mejor.",
    price: "USD 1,200-1,800",
    highlighted: true,
    features: [
      "Branding o sitio multipágina",
      "Sistema visual reusable",
      "Contenido base para lanzamiento",
    ],
  },
  {
    name: "Signature",
    description: "Para marcas que buscan una presencia premium de punta a punta.",
    price: "USD 2,000-3,000",
    features: [
      "Dirección estratégica completa",
      "Web, branding y kit de contenido",
      "Acompañamiento de implementación",
    ],
  },
];
