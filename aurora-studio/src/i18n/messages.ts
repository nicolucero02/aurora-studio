import type {
  CaseStudy,
  FaqItem,
  ProcessStep,
  Service,
  Testimonial,
} from "@/types/content";

export type Locale = "es" | "en";

type NeedOptionMessage = {
  id: "branding" | "web" | "contenido";
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  recommendation: string;
};

type PricingPlanMessage = {
  name: string;
  description: string;
  price: string;
  badge?: string;
  features: string[];
};

type Messages = {
  navbar: {
    studioLabel: string;
    agencyLabel: string;
    cta: string;
    items: Array<{ label: string; href: string }>;
  };
  hero: {
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ value: string; label: string }>;
    assistantEyebrow: string;
    assistantTitle: string;
    assistantDescription: string;
    assistantNote: string;
    needs: NeedOptionMessage[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Service[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    description: string;
    impactLabel: string;
    items: CaseStudy[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: Testimonial[];
  };
  chat: {
    toggleOpen: string;
    toggleClose: string;
    title: string;
    subtitle: string;
    initialMessage: string;
    primaryQuestion: string;
    cta: string;
    finalCtaLabel: string;
    finalCtaNote: string;
    restart: string;
    userAnswerLabel: string;
    options: {
      branding: string;
      web: string;
      content: string;
      unsure: string;
    };
    unsure: {
      questionOne: string;
      questionTwo: string;
      answersOne: {
        brand: string;
        web: string;
        content: string;
        complete: string;
      };
      answersTwo: {
        branding: string;
        web: string;
        content: string;
      };
    };
    recommendations: {
      branding: string;
      web: string;
      content: string;
    };
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    plans: PricingPlanMessage[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    responseNote: string;
    labels: {
      name: string;
      email: string;
      company: string;
      need: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    needOptions: string[];
    submitLabel: string;
    successMessage: string;
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageShort: string;
    };
  };
  footer: {
    title: string;
    description: string;
    navigationLabel: string;
    contactLabel: string;
    availability: string;
    links: Array<{ label: string; href: string }>;
  };
};

export const messages: Record<Locale, Messages> = {
  es: {
    navbar: {
      studioLabel: "Aurora Studio",
      agencyLabel: "Agencia creativa premium",
      cta: "Solicitar propuesta",
      items: [
        { label: "Servicios", href: "#servicios" },
        { label: "Proceso", href: "#proceso" },
        { label: "Casos", href: "#casos" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
    hero: {
      primaryCta: "Reservar llamada inicial",
      secondaryCta: "Ver casos de estudio",
      stats: [
        { value: "30+", label: "Marcas acompañadas" },
        { value: "4 sem", label: "Promedio de arranque" },
        { value: "92%", label: "Clientes por referral" },
      ],
      assistantEyebrow: "Asistente guiado",
      assistantTitle: "Ahora podés resolver esta decisión en un chat corto y guiado.",
      assistantDescription:
        "El asistente de Aurora Studio te orienta en pocos pasos y te lleva directo al servicio que más sentido tiene para tu marca.",
      assistantNote:
        "Ideal para detectar rápido si te conviene empezar por Branding, Web o Contenido.",
      needs: [
        {
          id: "branding",
          label: "Branding",
          eyebrow: "Claridad de marca",
          title:
            "Si tu marca se ve bien pero no se diferencia, el problema no es solo visual.",
          description:
            "Te ayudamos a construir una identidad con posición, tono y sistema visual para que tu negocio se perciba más sólido y memorable.",
          recommendation:
            "Recomendación: empezar por una sesión estratégica y una base de marca antes de invertir en piezas sueltas.",
        },
        {
          id: "web",
          label: "Web",
          eyebrow: "Conversión digital",
          title: "No es solo cómo se ve. Es cómo convierte.",
          description:
            "Ordenamos tu propuesta, jerarquizamos mensajes y diseñamos una experiencia premium pensada para responder mejor y vender más.",
          recommendation:
            "Recomendación: priorizar una landing o sitio de pocas páginas con narrativa clara y CTA visibles.",
        },
        {
          id: "contenido",
          label: "Contenido",
          eyebrow: "Presencia constante",
          title:
            "Si publicar te consume tiempo y la marca se siente inconsistente, hace falta dirección creativa.",
          description:
            "Definimos un sistema para producir contenido alineado a tus objetivos, con menos improvisación y más coherencia entre canales.",
          recommendation:
            "Recomendación: armar una base visual y editorial antes de escalar campañas o redes.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Diseño estratégico para marcas que quieren verse y vender mejor.",
      description:
        "Cada servicio está pensado para resolver una necesidad clara sin sumar complejidad innecesaria.",
      items: [
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
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un proceso corto, claro y diseñado para avanzar sin fricción.",
      description:
        "La idea es tomar buenas decisiones rápido, con entregables concretos y foco en impacto comercial.",
      steps: [
        {
          step: "01",
          title: "Diagnóstico",
          description:
            "Aterrizamos objetivos, audiencia, contexto competitivo y oportunidades reales para no diseñar a ciegas.",
        },
        {
          step: "02",
          title: "Dirección creativa",
          description:
            "Construimos una propuesta visual y verbal alineada al nivel de marca que querés proyectar.",
        },
        {
          step: "03",
          title: "Implementación",
          description:
            "Bajamos la idea a piezas concretas, priorizando claridad, consistencia y velocidad de salida.",
        },
        {
          step: "04",
          title: "Optimización",
          description:
            "Refinamos el resultado con feedback y métricas para mejorar percepción, respuesta y conversión.",
        },
      ],
    },
    caseStudies: {
      eyebrow: "Casos de estudio",
      title: "Ejemplos de cómo una dirección creativa correcta cambia percepción y resultados.",
      description:
        "Usamos casos mock realistas para mostrar el tipo de entregable, narrativa e impacto que un estudio boutique puede ofrecer.",
      impactLabel: "Impacto estimado",
      items: [
        {
          client: "Luma Skin",
          category: "Branding + lanzamiento digital",
          summary:
            "Reposicionamos una marca de skincare indie con una identidad más premium y una narrativa centrada en confianza y ritual.",
          impact: [
            "Nueva identidad lista en 4 semanas",
            "Incremento del 38% en leads de preventa",
            "Kit visual reutilizable para campañas",
          ],
        },
        {
          client: "Northwave Labs",
          category: "Web corporativa",
          summary:
            "Rediseñamos su sitio para explicar una oferta compleja de forma simple, con foco en demo requests y credibilidad.",
          impact: [
            "Tiempo de lectura más alto en páginas clave",
            "Más claridad comercial en la propuesta",
            "Mejor performance móvil y desktop",
          ],
        },
        {
          client: "Casa Nera",
          category: "Contenido de campaña",
          summary:
            "Definimos una línea visual y editorial para acompañar la apertura de una marca lifestyle con estética boutique.",
          impact: [
            "Sistema de contenido para 3 meses",
            "Consistencia entre social, email y web",
            "Mejor recordación de marca en lanzamiento",
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "La mejor prueba no es el diseño, sino la confianza que genera.",
      description:
        "Los testimonios ayudan a bajar fricción en la decisión de compra y refuerzan credibilidad en la home.",
      items: [
        {
          quote:
            "Aurora nos ayudó a dejar de vernos improvisados. Ahora la marca transmite exactamente el nivel de servicio que damos.",
          author: "Sofia Rivas",
          role: "Fundadora, Luma Skin",
        },
        {
          quote:
            "El nuevo sitio ordenó nuestra propuesta y hizo mucho más fácil cerrar reuniones con clientes que antes no entendían lo que hacíamos.",
          author: "Martin Pereyra",
          role: "Growth Lead, Northwave Labs",
        },
        {
          quote:
            "Trabajan con criterio, no solo con gusto visual. Cada pieza tenía una intención clara y eso se notó en la respuesta de la campaña.",
          author: "Julieta Bianchi",
          role: "Directora de marca, Casa Nera",
        },
      ],
    },
    chat: {
      toggleOpen: "Abrir asistente",
      toggleClose: "Cerrar asistente",
      title: "Nora — Asistente de Aurora",
      subtitle: "Guía rápida",
      initialMessage:
        "Hola, soy Nora. Te ayudo a entender qué necesitas en menos de 1 minuto.",
      primaryQuestion: "¿Dónde sentís hoy el mayor cuello de botella?",
      cta: "Solicitar propuesta",
      finalCtaLabel: "Solicitar propuesta",
      finalCtaNote: "Te llevamos al formulario con una recomendación más clara.",
      restart: "Empezar de nuevo",
      userAnswerLabel: "Tu respuesta",
      options: {
        branding: "Branding",
        web: "Web",
        content: "Contenido",
        unsure: "No estoy seguro",
      },
      unsure: {
        questionOne: "¿Qué te está frenando más hoy?",
        questionTwo: "Si tuvieras que priorizar un primer paso, ¿cuál sería?",
        answersOne: {
          brand: "Mi marca no se diferencia",
          web: "Mi sitio no convierte",
          content: "Me cuesta sostener contenido",
          complete: "Necesito ordenar todo",
        },
        answersTwo: {
          branding: "Definir posicionamiento",
          web: "Lanzar o rediseñar el sitio",
          content: "Activar contenido constante",
        },
      },
      recommendations: {
        branding:
          "La prioridad más lógica es Branding. Antes de producir piezas nuevas, conviene definir posicionamiento, tono y sistema visual para que la marca gane claridad y valor percibido.",
        web: "La prioridad más clara es Web. Hoy el mayor impacto está en ordenar la propuesta, mejorar la narrativa y convertir mejor cada visita en una conversación comercial.",
        content:
          "La mejor entrada es Contenido. Lo más rentable ahora es crear una base visual y editorial que te permita sostener presencia con coherencia y menos desgaste interno.",
      },
    },
    pricing: {
      eyebrow: "Pricing orientativo",
      title:
        "Paquetes simples para que el cliente entienda rápido por dónde empezar.",
      description:
        "No reemplazan una propuesta formal, pero sí ayudan a filtrar expectativas y mejorar la conversión.",
      plans: [
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
          description:
            "La opción más elegida para marcas que quieren vender mejor.",
          price: "USD 1,200-1,800",
          badge: "Más elegido",
          features: [
            "Branding o sitio multipágina",
            "Sistema visual reusable",
            "Contenido base para lanzamiento",
          ],
        },
        {
          name: "Signature",
          description:
            "Para marcas que buscan una presencia premium de punta a punta.",
          price: "USD 2,000-3,000",
          features: [
            "Dirección estratégica completa",
            "Web, branding y kit de contenido",
            "Acompañamiento de implementación",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes antes de pedir una propuesta.",
      description:
        "Una FAQ corta despeja objeciones comunes y mejora la calidad del lead que llega al formulario.",
      items: [
        {
          question: "¿Trabajan con marcas nuevas o también con marcas ya lanzadas?",
          answer:
            "Con ambas. Podemos construir una identidad desde cero o intervenir en una marca existente para volverla más clara, sólida y competitiva.",
        },
        {
          question: "¿Cuánto tarda un proyecto promedio?",
          answer:
            "Depende del alcance, pero un proyecto de branding o web pequeño suele tomar entre 3 y 6 semanas. En la propuesta dejamos tiempos y entregables claros.",
        },
        {
          question: "¿El pricing es final o orientativo?",
          answer:
            "Es orientativo. Lo usamos para ayudarte a estimar inversión. El presupuesto final se ajusta según objetivos, complejidad y volumen de entregables.",
        },
        {
          question: "¿Pueden trabajar solo una parte, por ejemplo contenido?",
          answer:
            "Sí. Muchos clientes entran por una necesidad puntual y luego amplían el alcance. Diseñamos cada etapa para que tenga sentido por sí sola.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contanos qué querés construir y te mostramos el mejor siguiente paso.",
      description:
        "Usá este formulario para enviarnos contexto inicial. La estructura ya está preparada para conectarse con una API real cuando lo necesites.",
      responseNote:
        "Respuesta habitual en 24 a 48 horas. Si tu proyecto tiene fecha de lanzamiento, mencionála en el mensaje.",
      labels: {
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        need: "Necesidad principal",
        message: "Mensaje",
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@email.com",
        company: "Nombre de tu marca",
        message:
          "Necesito una web nueva para lanzar una marca de servicios B2B y mejorar la conversión.",
      },
      needOptions: ["Branding", "Web", "Contenido"],
      submitLabel: "Enviar consulta",
      successMessage:
        "Consulta simulada enviada. El siguiente paso real sería conectar una API.",
      validation: {
        nameRequired: "Tu nombre es obligatorio.",
        emailRequired: "Tu email es obligatorio.",
        emailInvalid: "Ingresá un email válido.",
        messageRequired: "Contanos brevemente qué querés lograr.",
        messageShort: "Sumá un poco más de contexto para ayudarte mejor.",
      },
    },
    footer: {
      title: "Branding, web y contenido para marcas modernas.",
      description:
        "Aurora Studio combina estrategia, identidad y experiencia digital para construir marcas más claras, memorables y listas para convertir.",
      navigationLabel: "Navegación",
      contactLabel: "Contacto",
      availability: "Disponibilidad limitada para proyectos del próximo trimestre.",
      links: [
        { label: "Servicios", href: "#servicios" },
        { label: "Casos de estudio", href: "#casos" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contacto", href: "#contacto" },
      ],
    },
  },
  en: {
    navbar: {
      studioLabel: "Aurora Studio",
      agencyLabel: "Premium creative agency",
      cta: "Request proposal",
      items: [
        { label: "Services", href: "#servicios" },
        { label: "Process", href: "#proceso" },
        { label: "Cases", href: "#casos" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contacto" },
      ],
    },
    hero: {
      primaryCta: "Book intro call",
      secondaryCta: "View case studies",
      stats: [
        { value: "30+", label: "Brands supported" },
        { value: "4 weeks", label: "Average kickoff" },
        { value: "92%", label: "Referral-based clients" },
      ],
      assistantEyebrow: "Guided assistant",
      assistantTitle: "You can now resolve this decision through a short guided chat.",
      assistantDescription:
        "Aurora Studio's assistant helps you understand the best starting service in just a few steps.",
      assistantNote:
        "Useful to quickly identify whether Branding, Web or Content is the right next move.",
      needs: [
        {
          id: "branding",
          label: "Branding",
          eyebrow: "Brand clarity",
          title:
            "If your brand looks good but still fails to stand apart, the issue is not only visual.",
          description:
            "We build an identity with positioning, tone and a visual system so your business feels sharper, stronger and easier to remember.",
          recommendation:
            "Recommendation: start with a strategic session and a core brand foundation before investing in isolated pieces.",
        },
        {
          id: "web",
          label: "Web",
          eyebrow: "Digital conversion",
          title: "It is not just how it looks. It is how it converts.",
          description:
            "We organize your offer, clarify your message and design a premium experience built to drive better responses and more sales.",
          recommendation:
            "Recommendation: prioritize a focused landing page or small site with a clear narrative and visible CTAs.",
        },
        {
          id: "contenido",
          label: "Content",
          eyebrow: "Consistent presence",
          title:
            "If publishing drains time and the brand feels inconsistent, you need stronger creative direction.",
          description:
            "We define a practical system to create content aligned with your goals, with less improvisation and more cohesion across channels.",
          recommendation:
            "Recommendation: build a visual and editorial base before scaling campaigns or social media.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Strategic design for brands that want to look sharper and sell better.",
      description:
        "Each service is shaped to solve a clear business need without adding unnecessary complexity.",
      items: [
        {
          slug: "branding",
          title: "Branding with commercial clarity",
          description:
            "We define an identity that sharpens your message, improves perceived value and makes it clear why your brand deserves attention.",
          bullets: [
            "Positioning strategy",
            "Visual and verbal system",
            "Guidelines ready to scale",
          ],
        },
        {
          slug: "web",
          title: "Websites built to convert",
          description:
            "We design clear, fast and trustworthy experiences that turn visits into conversations and sales.",
          bullets: [
            "Content architecture",
            "Responsive UI design",
            "Conversion-oriented copy",
          ],
        },
        {
          slug: "content",
          title: "Content with creative direction",
          description:
            "We create assets that support the brand across campaigns, launches and social channels without losing consistency.",
          bullets: [
            "Channel-specific messaging",
            "Campaign concepts",
            "Production of key assets",
          ],
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A short, clear process designed to move forward without friction.",
      description:
        "The goal is to make strong decisions quickly, with concrete deliverables and a commercial focus.",
      steps: [
        {
          step: "01",
          title: "Diagnosis",
          description:
            "We align goals, audience, competitive context and real opportunities so we never design blindly.",
        },
        {
          step: "02",
          title: "Creative direction",
          description:
            "We build a visual and verbal proposal aligned with the level of brand perception you want to project.",
        },
        {
          step: "03",
          title: "Implementation",
          description:
            "We translate the idea into concrete assets, prioritizing clarity, consistency and execution speed.",
        },
        {
          step: "04",
          title: "Optimization",
          description:
            "We refine the outcome with feedback and metrics to improve perception, response and conversion.",
        },
      ],
    },
    caseStudies: {
      eyebrow: "Case studies",
      title: "Examples of how the right creative direction changes perception and results.",
      description:
        "We use realistic mock cases to show the kind of deliverables, narrative and impact a boutique studio can provide.",
      impactLabel: "Estimated impact",
      items: [
        {
          client: "Luma Skin",
          category: "Branding + digital launch",
          summary:
            "We repositioned an indie skincare brand with a more premium identity and a narrative centered on trust and ritual.",
          impact: [
            "New identity delivered in 4 weeks",
            "38% increase in pre-sale leads",
            "Reusable visual kit for campaigns",
          ],
        },
        {
          client: "Northwave Labs",
          category: "Corporate website",
          summary:
            "We redesigned the site to explain a complex offer simply, with focus on demo requests and credibility.",
          impact: [
            "Longer reading time on key pages",
            "Clearer commercial positioning",
            "Better mobile and desktop performance",
          ],
        },
        {
          client: "Casa Nera",
          category: "Campaign content",
          summary:
            "We defined a visual and editorial line to support the launch of a lifestyle brand with a boutique aesthetic.",
          impact: [
            "Three-month content system",
            "Consistency across social, email and web",
            "Stronger brand recall at launch",
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "The strongest proof is not the design itself, but the trust it creates.",
      description:
        "Testimonials reduce friction in the buying decision and reinforce credibility across the homepage.",
      items: [
        {
          quote:
            "Aurora helped us stop looking improvised. Now the brand communicates exactly the level of service we deliver.",
          author: "Sofia Rivas",
          role: "Founder, Luma Skin",
        },
        {
          quote:
            "The new site organized our offer and made it much easier to close meetings with clients who previously did not understand what we did.",
          author: "Martin Pereyra",
          role: "Growth Lead, Northwave Labs",
        },
        {
          quote:
            "They work with judgment, not just visual taste. Every piece had a clear intention, and that showed in the campaign response.",
          author: "Julieta Bianchi",
          role: "Brand Director, Casa Nera",
        },
      ],
    },
    chat: {
      toggleOpen: "Open assistant",
      toggleClose: "Close assistant",
      title: "Nora — Aurora Assistant",
      subtitle: "Quick guide",
      initialMessage:
        "Hi, I'm Nora. I can help you understand what you need in under a minute.",
      primaryQuestion: "Where do you feel the biggest bottleneck right now?",
      cta: "Request proposal",
      finalCtaLabel: "Request proposal",
      finalCtaNote: "We take you to the form with a clearer recommendation.",
      restart: "Start over",
      userAnswerLabel: "Your answer",
      options: {
        branding: "Branding",
        web: "Web",
        content: "Content",
        unsure: "I'm not sure",
      },
      unsure: {
        questionOne: "What is slowing you down the most today?",
        questionTwo: "If you had to prioritize one first step, which would it be?",
        answersOne: {
          brand: "My brand does not stand apart",
          web: "My site does not convert",
          content: "It's hard to sustain content",
          complete: "I need to organize everything",
        },
        answersTwo: {
          branding: "Define positioning",
          web: "Launch or redesign the site",
          content: "Activate consistent content",
        },
      },
      recommendations: {
        branding:
          "Branding is the most logical priority. Before producing new assets, it makes sense to define positioning, tone and a visual system so the brand gains clarity and perceived value.",
        web: "Web is the clearest priority. The biggest impact right now is organizing the offer, sharpening the narrative and converting more visits into qualified conversations.",
        content:
          "Content is the strongest entry point. The highest-return move now is building a visual and editorial base that lets you stay visible with more consistency and less internal effort.",
      },
    },
    pricing: {
      eyebrow: "Indicative pricing",
      title: "Simple packages so clients can quickly understand where to start.",
      description:
        "They do not replace a formal proposal, but they help filter expectations and improve conversion.",
      plans: [
        {
          name: "Base",
          description: "Ideal for building a solid minimum presence with clear criteria.",
          price: "USD 500-800",
          features: [
            "Mini brand audit",
            "Landing page or visual refresh",
            "Key messaging and main CTA",
          ],
        },
        {
          name: "Growth",
          description: "The most chosen option for brands that want to sell better.",
          price: "USD 1,200-1,800",
          badge: "Most chosen",
          features: [
            "Branding or multi-page website",
            "Reusable visual system",
            "Launch-ready content base",
          ],
        },
        {
          name: "Signature",
          description: "For brands seeking a premium presence from end to end.",
          price: "USD 2,000-3,000",
          features: [
            "Complete strategic direction",
            "Web, branding and content kit",
            "Implementation guidance",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions before requesting a proposal.",
      description:
        "A short FAQ clears common objections and improves the quality of the lead that reaches the form.",
      items: [
        {
          question: "Do you work with new brands or also with established ones?",
          answer:
            "Both. We can build an identity from scratch or intervene in an existing brand to make it clearer, stronger and more competitive.",
        },
        {
          question: "How long does an average project take?",
          answer:
            "It depends on scope, but a small branding or website project usually takes between 3 and 6 weeks. The proposal includes clear timing and deliverables.",
        },
        {
          question: "Is the pricing final or just indicative?",
          answer:
            "It is indicative. We use it to help estimate investment. The final budget is adjusted based on goals, complexity and volume of deliverables.",
        },
        {
          question: "Can you work on just one area, like content only?",
          answer:
            "Yes. Many clients start with one specific need and then expand scope later. We design each stage so it also makes sense on its own.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what you want to build and we will map the best next step.",
      description:
        "Use this form to send initial context. The structure is already prepared to connect to a real API whenever you need it.",
      responseNote:
        "Typical response time is 24 to 48 hours. If your project has a launch date, mention it in the message.",
      labels: {
        name: "Name",
        email: "Email",
        company: "Company",
        need: "Main need",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        company: "Your brand name",
        message:
          "I need a new website to launch a B2B services brand and improve conversion.",
      },
      needOptions: ["Branding", "Web", "Content"],
      submitLabel: "Send inquiry",
      successMessage:
        "Simulated inquiry sent. The next real step would be connecting an API.",
      validation: {
        nameRequired: "Your name is required.",
        emailRequired: "Your email is required.",
        emailInvalid: "Enter a valid email address.",
        messageRequired: "Tell us briefly what you want to achieve.",
        messageShort: "Add a bit more context so we can help you better.",
      },
    },
    footer: {
      title: "Branding, web and content for modern brands.",
      description:
        "Aurora Studio combines strategy, identity and digital experience to build brands that are clearer, more memorable and ready to convert.",
      navigationLabel: "Navigation",
      contactLabel: "Contact",
      availability: "Limited availability for projects starting next quarter.",
      links: [
        { label: "Services", href: "#servicios" },
        { label: "Case studies", href: "#casos" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contacto" },
      ],
    },
  },
};
