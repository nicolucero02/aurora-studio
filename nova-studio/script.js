const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const languageToggle = document.querySelector("#language-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const textNodes = document.querySelectorAll("[data-i18n]");
const ariaNodes = document.querySelectorAll("[data-i18n-aria-label]");

const translations = {
  es: {
    pageTitle: "Nova Studio",
    menu: "Men\u00fa",
    navServices: "Servicios",
    navProcess: "Proceso",
    navProjects: "Proyectos",
    navContact: "Contacto",
    eyebrow: "Estudio digital para marcas en movimiento",
    heroTitle: "Creamos sistemas web claros, premium y listos para crecer.",
    heroSubtitle:
      "Somos un estudio creativo digital que combina dise\u00f1o web, landing pages, experimentos con IA y automatizaciones simples para lanzar experiencias \u00fatiles, modernas y bien construidas.",
    primaryCta: "Ver capacidades",
    conceptLabel: "Laboratorio",
    conceptText:
      "Estrategia visual, prototipos r\u00e1pidos y ejecuci\u00f3n digital con criterio.",
    metricInterface: "Capacidades",
    metricInterfaceValue: "Web + IA",
    metricResponsive: "Entrega",
    metricResponsiveValue: "\u00c1gil",
    featureOneTitle: "Dise\u00f1o web",
    featureOneText:
      "Interfaces limpias, sistemas visuales consistentes y experiencias enfocadas en claridad, ritmo y conversi\u00f3n.",
    featureTwoTitle: "Landing pages",
    featureTwoText:
      "P\u00e1ginas de lanzamiento y validaci\u00f3n con narrativa fuerte, estructura modular y CTA visibles.",
    featureThreeTitle: "IA y automatizaci\u00f3n",
    featureThreeText:
      "Flujos simples para capturar leads, organizar contenido y acelerar tareas repetitivas.",
    servicesLabel: "Servicios",
    servicesTitle: "Capacidades para marcas, productos y equipos digitales.",
    servicesIntro:
      "Trabajamos en piezas enfocadas, escalables y f\u00e1ciles de presentar: desde una landing de campa\u00f1a hasta un sistema liviano de automatizaci\u00f3n.",
    serviceOneTitle: "Web design systems",
    serviceOneText:
      "Arquitectura visual, UI modular y direcci\u00f3n creativa para sitios y productos digitales.",
    serviceTwoTitle: "Landing pages premium",
    serviceTwoText:
      "Concepto, copy estructural, prototipo y desarrollo liviano para lanzamientos y campa\u00f1as.",
    serviceThreeTitle: "Experimentos con IA",
    serviceThreeText:
      "Interfaces y pruebas funcionales que exploran prompts, asistentes y experiencias generativas.",
    serviceFourTitle: "Automatizaciones simples",
    serviceFourText:
      "Flujos \u00fatiles para formularios, respuestas, bases de datos ligeras y operaciones repetitivas.",
    processLabel: "Proceso",
    processTitle: "Un proceso corto, claro y orientado a decisiones reales.",
    processOneTitle: "Direcci\u00f3n",
    processOneText:
      "Alineamos contexto, objetivos, referencias y alcance para definir una base clara.",
    processTwoTitle: "Sistema",
    processTwoText:
      "Construimos estructura, lenguaje visual y componentes para que la propuesta tenga coherencia.",
    processThreeTitle: "Prototipo",
    processThreeText:
      "Bajamos la idea a una versi\u00f3n navegable para validar narrativa, ritmo y prioridad.",
    processFourTitle: "Entrega",
    processFourText:
      "Refinamos detalles, activamos interacciones y dejamos una base lista para iterar.",
    projectsLabel: "Ejemplos",
    projectsTitle: "Tipos de proyectos que encajan con este estudio.",
    projectOneTag: "Lanzamiento",
    projectOneTitle: "Landing para producto emergente",
    projectOneText:
      "Una p\u00e1gina de alto impacto para presentar propuesta, beneficios y registro temprano.",
    projectTwoTag: "Sistema",
    projectTwoTitle: "Sitio editorial para marca digital",
    projectTwoText:
      "Un ecosistema de bloques para comunicar servicios, casos y contenido con consistencia.",
    projectThreeTag: "Experimento",
    projectThreeTitle: "Prototipo con IA aplicada",
    projectThreeText:
      "Una experiencia ligera para probar automatizaci\u00f3n, asistencia contextual y flujos de entrada.",
    closingLabel: "Contacto",
    closingTitle: "Dise\u00f1amos presencia digital con criterio visual, estructura y velocidad.",
    closingText:
      "Si necesitas una landing, una interfaz clara o una prueba con IA que se vea seria desde el d\u00eda uno, esta base ya comunica ese posicionamiento.",
    secondaryCta: "Explorar servicios",
    themeLight: "Modo claro",
    themeDark: "Modo oscuro",
    themeToggleAria: "Cambiar tema",
  },
  en: {
    pageTitle: "Nova Studio",
    menu: "Menu",
    navServices: "Services",
    navProcess: "Process",
    navProjects: "Projects",
    navContact: "Contact",
    eyebrow: "Digital studio for brands in motion",
    heroTitle: "We build clear, premium web systems ready to grow.",
    heroSubtitle:
      "We are a creative digital studio combining web design, landing pages, AI experiments, and simple automations to launch useful, modern, and well-built experiences.",
    primaryCta: "View capabilities",
    conceptLabel: "Lab",
    conceptText: "Visual strategy, rapid prototypes, and thoughtful digital execution.",
    metricInterface: "Capabilities",
    metricInterfaceValue: "Web + AI",
    metricResponsive: "Delivery",
    metricResponsiveValue: "Fast",
    featureOneTitle: "Web design",
    featureOneText:
      "Clean interfaces, consistent visual systems, and experiences shaped around clarity, rhythm, and conversion.",
    featureTwoTitle: "Landing pages",
    featureTwoText:
      "Launch and validation pages with strong narrative, modular structure, and visible CTAs.",
    featureThreeTitle: "AI and automation",
    featureThreeText:
      "Simple flows to capture leads, organize content, and speed up repetitive tasks.",
    servicesLabel: "Services",
    servicesTitle: "Capabilities for brands, products, and digital teams.",
    servicesIntro:
      "We work on focused, scalable, presentation-ready pieces, from a campaign landing page to a lightweight automation system.",
    serviceOneTitle: "Web design systems",
    serviceOneText:
      "Visual architecture, modular UI, and creative direction for websites and digital products.",
    serviceTwoTitle: "Premium landing pages",
    serviceTwoText:
      "Concept, structural copy, prototype, and lightweight development for launches and campaigns.",
    serviceThreeTitle: "AI experiments",
    serviceThreeText:
      "Interfaces and functional tests exploring prompts, assistants, and generative experiences.",
    serviceFourTitle: "Simple automations",
    serviceFourText:
      "Useful flows for forms, responses, lightweight databases, and repetitive operations.",
    processLabel: "Process",
    processTitle: "A short, clear process oriented around real decisions.",
    processOneTitle: "Direction",
    processOneText:
      "We align context, goals, references, and scope to define a clear foundation.",
    processTwoTitle: "System",
    processTwoText:
      "We build the structure, visual language, and components so the proposal stays coherent.",
    processThreeTitle: "Prototype",
    processThreeText:
      "We turn the idea into a navigable version to validate narrative, rhythm, and priority.",
    processFourTitle: "Delivery",
    processFourText:
      "We refine details, activate interactions, and leave a base ready to iterate on.",
    projectsLabel: "Examples",
    projectsTitle: "Project types that fit this studio.",
    projectOneTag: "Launch",
    projectOneTitle: "Landing page for an emerging product",
    projectOneText:
      "A high-impact page to present the offer, benefits, and early access signup.",
    projectTwoTag: "System",
    projectTwoTitle: "Editorial site for a digital brand",
    projectTwoText:
      "A block-based ecosystem to communicate services, cases, and content with consistency.",
    projectThreeTag: "Experiment",
    projectThreeTitle: "Prototype with applied AI",
    projectThreeText:
      "A lightweight experience to test automation, contextual assistance, and input flows.",
    closingLabel: "Contact",
    closingTitle: "We design digital presence with visual rigor, structure, and speed.",
    closingText:
      "If you need a landing page, a clear interface, or an AI proof of concept that already feels serious, this base now communicates that positioning.",
    secondaryCta: "Explore services",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    themeToggleAria: "Change theme",
  },
};

const savedLanguage = localStorage.getItem("nova-language") || "es";
const savedTheme = localStorage.getItem("nova-theme") || "light";

function applyLanguage(language) {
  const copy = translations[language];

  document.documentElement.lang = language;
  document.title = copy.pageTitle;

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;

    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  ariaNodes.forEach((node) => {
    const key = node.dataset.i18nAriaLabel;

    if (copy[key]) {
      node.setAttribute("aria-label", copy[key]);
    }
  });

  if (themeToggle) {
    const isDark = document.body.classList.contains("theme-dark");
    themeToggle.textContent = isDark ? copy.themeLight : copy.themeDark;
  }

  localStorage.setItem("nova-language", language);
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  const language = localStorage.getItem("nova-language") || "es";
  const copy = translations[language];

  document.body.classList.toggle("theme-dark", isDark);

  if (themeToggle) {
    themeToggle.textContent = isDark ? copy.themeLight : copy.themeDark;
  }

  localStorage.setItem("nova-theme", theme);
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetSelector = button.getAttribute("data-scroll-target");
    const target = targetSelector ? document.querySelector(targetSelector) : null;

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
    applyLanguage(nextLanguage);
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

applyTheme(savedTheme);
applyLanguage(savedLanguage);
