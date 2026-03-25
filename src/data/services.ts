import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "branding",
    title: "Branding con criterio comercial",
    description:
      "Definimos una identidad que ordena tu mensaje, eleva percepción y deja claro por qué tu marca merece atención.",
    bullets: [
      "Estrategia de posicionamiento",
      "Sistema visual y verbal",
      "Guías listas para escalar",
    ],
  },
  {
    slug: "web",
    title: "Sitios web que convierten",
    description:
      "Diseñamos experiencias claras, rápidas y confiables para transformar visitas en conversaciones y ventas.",
    bullets: [
      "Arquitectura de contenidos",
      "Diseño UI responsive",
      "Copys orientados a conversión",
    ],
  },
  {
    slug: "contenido",
    title: "Contenido con dirección creativa",
    description:
      "Creamos piezas que sostienen la marca en campañas, lanzamientos y redes sin perder consistencia.",
    bullets: [
      "Mensajes por canal",
      "Conceptos para campañas",
      "Producción de activos clave",
    ],
  },
];
