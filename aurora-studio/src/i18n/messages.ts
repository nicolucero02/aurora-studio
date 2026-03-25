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
          title:
            "Si tu sitio actual no explica, no convence y no convierte, necesita una estructura nueva.",
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
          price: "USD 1,200+",
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
          price: "USD 2,800+",
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
          price: "USD 4,500+",
          features: [
            "Dirección estratégica completa",
            "Web, branding y kit de contenido",
            "Acompañamiento de implementación",
          ],
        },
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
          title:
            "If your current site does not explain, persuade or convert, it needs a clearer structure.",
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
            "If publishing takes too much time and your brand feels inconsistent, you need creative direction.",
          description:
            "We define a content system aligned with your goals, reducing improvisation and creating stronger consistency across channels.",
          recommendation:
            "Recommendation: build a visual and editorial base before scaling campaigns or social content.",
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
      finalCtaNote: "We'll take you to the form with a clearer recommendation.",
      restart: "Start over",
      options: {
        branding: "Branding",
        web: "Web",
        content: "Content",
        unsure: "I'm not sure",
      },
      unsure: {
        questionOne: "What's slowing you down the most right now?",
        questionTwo: "If you had to prioritize one first step, what would it be?",
        answersOne: {
          brand: "My brand doesn't stand out",
          web: "My website doesn't convert",
          content: "I struggle to stay consistent with content",
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
          "Branding is the strongest starting point. Before producing new assets, it makes sense to clarify positioning, tone and visual system so the brand feels sharper and more credible.",
        web: "Web is the clearest priority. The biggest impact right now is improving structure, messaging and how effectively the site turns visits into qualified conversations.",
        content:
          "Content is the best entry point. The smartest move now is creating a visual and editorial foundation that lets you publish with more consistency and less internal friction.",
      },
    },
    pricing: {
      eyebrow: "Indicative pricing",
      title: "Simple packages that help clients understand where to start.",
      description:
        "They do not replace a formal proposal, but they make expectations clearer and improve conversion.",
      plans: [
        {
          name: "Base",
          description: "Ideal for building a sharp minimum presence.",
          price: "USD 1,200+",
          features: [
            "Mini brand audit",
            "Landing page or visual refresh",
            "Key messaging and main CTA",
          ],
        },
        {
          name: "Growth",
          description:
            "The most popular option for brands that want to sell better.",
          price: "USD 2,800+",
          badge: "Most popular",
          features: [
            "Branding or multi-page site",
            "Reusable visual system",
            "Launch-ready base content",
          ],
        },
        {
          name: "Signature",
          description:
            "For brands that want a premium end-to-end presence.",
          price: "USD 4,500+",
          features: [
            "Full strategic direction",
            "Web, branding and content kit",
            "Implementation support",
          ],
        },
      ],
    },
  },
};
