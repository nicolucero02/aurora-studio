export type Language = "en" | "es";

export type Theme = "light" | "dark";

export const navItems = [
  { href: "/", key: "home" },
  { href: "/exercises", key: "exercises" },
  { href: "/workouts", key: "workouts" },
  { href: "/articles", key: "articles" },
  { href: "/calculators", key: "calculators" },
] as const;

export const translations = {
  en: {
    brand: {
      name: "Fitness Hub",
      tagline: "Train smarter, recover better.",
    },
    nav: {
      home: "Home",
      exercises: "Exercises",
      workouts: "Workouts",
      articles: "Articles",
      calculators: "Calculators",
    },
    controls: {
      language: "Language",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      english: "EN",
      spanish: "ES",
    },
    hero: {
      badge: "Premium Fitness Platform",
      title: "Build strength, consistency and a sharper training system.",
      copy:
        "Explore guided workouts, exercise libraries, practical calculators and expert-backed content inside a polished training experience.",
      primaryCta: "Start a Workout",
      secondaryCta: "Use BMI Calculator",
      streakLabel: "Weekly streak",
      streakCopy:
        "Active training sessions completed with balanced volume, recovery and consistency.",
      focusLabel: "Focus areas",
      focusItems: ["Strength", "Mobility", "Hypertrophy", "Conditioning"],
      focusCopy:
        "Programs designed to perform across gym, home and hybrid training routines.",
    },
    stats: [
      { label: "Exercises", value: "48+", accent: "text-brand" },
      { label: "Workout Plans", value: "12", accent: "text-cyan-500" },
      { label: "Articles", value: "24", accent: "text-amber-500" },
    ],
    home: {
      exploreEyebrow: "Explore",
      exploreTitle: "Everything you need for training in one place.",
      exploreCopy:
        "A compact overview of the exercise library, training plans and educational content available in this starter project.",
      highlights: [
        {
          title: "Exercises",
          description:
            "48+ mock exercise entries with categories, target muscles and skill level.",
          badge: "Library",
          meta: "Browse movements",
        },
        {
          title: "Workouts",
          description:
            "12 sample plans covering strength, hypertrophy, athleticism and general fitness.",
          badge: "Plans",
          meta: "Follow routines",
        },
        {
          title: "Articles",
          description:
            "24 practical reads about programming, nutrition, recovery and performance habits.",
          badge: "Learn",
          meta: "Read practical guides",
        },
      ],
      toolsEyebrow: "Tools",
      toolsTitle: "Check your BMI and track key body metrics.",
      toolsCopy:
        "The calculators section includes a ready-to-use BMI calculator and leaves room for more advanced fitness tools.",
      toolsCta: "Open Calculators",
    },
    pages: {
      exercises: {
        eyebrow: "Exercises",
        title: "Movement library for strength, muscle and control.",
        copy:
          "Mock exercise data designed for browsing, filtering and future API integration.",
      },
      workouts: {
        eyebrow: "Workouts",
        title: "Training plans with clear goals and time commitment.",
        copy:
          "Each mock plan is structured so you can later replace the local content with CMS or API-backed data.",
      },
      articles: {
        eyebrow: "Articles",
        title: "Short-form content for programming, nutrition and recovery.",
        copy:
          "The article cards are mock content, but the structure is ready for category pages or dynamic routes.",
      },
      calculators: {
        eyebrow: "Calculators",
        title: "Simple tools that turn raw numbers into useful fitness context.",
        copy:
          "This starter includes a BMI calculator and leaves space to add calories, macros or one-rep-max tools later.",
      },
    },
    bmi: {
      eyebrow: "BMI Calculator",
      title: "Estimate your body mass index in seconds.",
      copy:
        "Enter your height in centimeters and your body weight in kilograms to calculate your BMI using standard metric units.",
      height: "Height (cm)",
      weight: "Weight (kg)",
      result: "Result",
      empty: "Enter valid height and weight values to calculate your BMI.",
      categories: {
        underweight: "Underweight",
        normal: "Normal weight",
        overweight: "Overweight",
        obesity: "Obesity",
      },
      ranges: [
        "Underweight: below 18.5",
        "Normal weight: 18.5 to 24.9",
        "Overweight: 25 to 29.9",
        "Obesity: 30 or higher",
      ],
    },
    exercises: [
      {
        name: "Barbell Back Squat",
        category: "Strength",
        muscles: "Quads, glutes, core",
        level: "Intermediate",
        description:
          "A foundational lower-body movement for building strength and stability.",
      },
      {
        name: "Dumbbell Bench Press",
        category: "Hypertrophy",
        muscles: "Chest, shoulders, triceps",
        level: "Beginner",
        description:
          "Pressing variation that improves upper-body control and muscle balance.",
      },
      {
        name: "Romanian Deadlift",
        category: "Posterior Chain",
        muscles: "Hamstrings, glutes, back",
        level: "Intermediate",
        description:
          "Hip hinge pattern used to develop hamstring length and pulling strength.",
      },
      {
        name: "Pull-Up",
        category: "Bodyweight",
        muscles: "Lats, biceps, upper back",
        level: "Advanced",
        description:
          "Vertical pulling movement that challenges strength-to-weight ratio.",
      },
      {
        name: "Walking Lunge",
        category: "Unilateral",
        muscles: "Quads, glutes, adductors",
        level: "Beginner",
        description:
          "Single-leg exercise that improves balance, coordination and leg endurance.",
      },
      {
        name: "Plank",
        category: "Core",
        muscles: "Abs, obliques, shoulders",
        level: "Beginner",
        description:
          "Static core hold for trunk stability and anti-extension strength.",
      },
    ],
    workouts: [
      {
        title: "Upper / Lower Split",
        duration: "4 days",
        goal: "Hypertrophy",
        description:
          "Balanced weekly split with compound lifts, accessory volume and recovery spacing.",
      },
      {
        title: "Full Body Strength",
        duration: "3 days",
        goal: "Strength",
        description:
          "Heavy compounds paired with lower total volume for sustainable progression.",
      },
      {
        title: "Athletic Conditioning",
        duration: "2 days",
        goal: "Performance",
        description:
          "Circuit-based sessions mixing sled work, carries, jumps and intervals.",
      },
      {
        title: "Home Dumbbell Plan",
        duration: "3 days",
        goal: "General Fitness",
        description:
          "Efficient sessions designed around adjustable dumbbells and limited space.",
      },
    ],
    articles: [
      {
        title: "How to Structure a Weekly Training Split",
        tag: "Programming",
        readTime: "6 min read",
        description:
          "A practical guide to matching training volume, intensity and frequency to your recovery.",
      },
      {
        title: "Protein Timing and Daily Intake Basics",
        tag: "Nutrition",
        readTime: "4 min read",
        description:
          "Key intake targets, meal spacing strategies and realistic habits for muscle retention.",
      },
      {
        title: "Why Deload Weeks Improve Long-Term Progress",
        tag: "Recovery",
        readTime: "5 min read",
        description:
          "How strategic fatigue management keeps strength, motivation and technique moving forward.",
      },
    ],
  },
  es: {
    brand: {
      name: "Fitness Hub",
      tagline: "Entrená mejor, recuperate mejor.",
    },
    nav: {
      home: "Inicio",
      exercises: "Ejercicios",
      workouts: "Rutinas",
      articles: "Artículos",
      calculators: "Calculadoras",
    },
    controls: {
      language: "Idioma",
      theme: "Tema",
      light: "Claro",
      dark: "Oscuro",
      english: "EN",
      spanish: "ES",
    },
    hero: {
      badge: "Plataforma Fitness Premium",
      title: "Construí fuerza, constancia y un sistema de entrenamiento más preciso.",
      copy:
        "Explorá rutinas guiadas, librerías de ejercicios, calculadoras prácticas y contenido respaldado por experiencia dentro de una experiencia pulida.",
      primaryCta: "Empezar rutina",
      secondaryCta: "Usar calculadora BMI",
      streakLabel: "Racha semanal",
      streakCopy:
        "Sesiones activas completadas con volumen equilibrado, recuperación y consistencia.",
      focusLabel: "Áreas de enfoque",
      focusItems: ["Fuerza", "Movilidad", "Hipertrofia", "Condición"],
      focusCopy:
        "Programas diseñados para rendir en gimnasio, casa y rutinas híbridas.",
    },
    stats: [
      { label: "Ejercicios", value: "48+", accent: "text-brand" },
      { label: "Planes", value: "12", accent: "text-cyan-500" },
      { label: "Artículos", value: "24", accent: "text-amber-500" },
    ],
    home: {
      exploreEyebrow: "Explorar",
      exploreTitle: "Todo lo que necesitás para entrenar en un solo lugar.",
      exploreCopy:
        "Una vista compacta de la librería de ejercicios, los planes de entrenamiento y el contenido educativo disponible en este proyecto base.",
      highlights: [
        {
          title: "Ejercicios",
          description:
            "Más de 48 ejercicios mock con categorías, músculos trabajados y nivel.",
          badge: "Librería",
          meta: "Ver movimientos",
        },
        {
          title: "Rutinas",
          description:
            "12 planes de ejemplo para fuerza, hipertrofia, rendimiento y fitness general.",
          badge: "Planes",
          meta: "Seguir rutinas",
        },
        {
          title: "Artículos",
          description:
            "24 lecturas prácticas sobre programación, nutrición, recuperación y hábitos.",
          badge: "Aprender",
          meta: "Leer guías",
        },
      ],
      toolsEyebrow: "Herramientas",
      toolsTitle: "Calculá tu BMI y seguí métricas corporales clave.",
      toolsCopy:
        "La sección de calculadoras incluye una calculadora BMI lista para usar y deja espacio para herramientas más avanzadas.",
      toolsCta: "Abrir calculadoras",
    },
    pages: {
      exercises: {
        eyebrow: "Ejercicios",
        title: "Librería de movimientos para fuerza, músculo y control.",
        copy:
          "Datos mock de ejercicios pensados para exploración, filtros y futura integración con APIs.",
      },
      workouts: {
        eyebrow: "Rutinas",
        title: "Planes de entrenamiento con objetivos y tiempo claros.",
        copy:
          "Cada plan mock está estructurado para que después puedas reemplazar el contenido local con un CMS o una API.",
      },
      articles: {
        eyebrow: "Artículos",
        title: "Contenido breve sobre programación, nutrición y recuperación.",
        copy:
          "Las tarjetas de artículos son contenido mock, pero la estructura ya está lista para categorías o rutas dinámicas.",
      },
      calculators: {
        eyebrow: "Calculadoras",
        title: "Herramientas simples que convierten datos en contexto útil.",
        copy:
          "Este proyecto incluye una calculadora BMI y deja espacio para sumar calorías, macros o 1RM más adelante.",
      },
    },
    bmi: {
      eyebrow: "Calculadora BMI",
      title: "Estimá tu índice de masa corporal en segundos.",
      copy:
        "Ingresá tu altura en centímetros y tu peso en kilogramos para calcular tu BMI con unidades métricas estándar.",
      height: "Altura (cm)",
      weight: "Peso (kg)",
      result: "Resultado",
      empty: "Ingresá valores válidos de altura y peso para calcular tu BMI.",
      categories: {
        underweight: "Bajo peso",
        normal: "Peso normal",
        overweight: "Sobrepeso",
        obesity: "Obesidad",
      },
      ranges: [
        "Bajo peso: menor a 18.5",
        "Peso normal: 18.5 a 24.9",
        "Sobrepeso: 25 a 29.9",
        "Obesidad: 30 o más",
      ],
    },
    exercises: [
      {
        name: "Sentadilla trasera con barra",
        category: "Fuerza",
        muscles: "Cuádriceps, glúteos, core",
        level: "Intermedio",
        description:
          "Un movimiento base del tren inferior para desarrollar fuerza y estabilidad.",
      },
      {
        name: "Press de pecho con mancuernas",
        category: "Hipertrofia",
        muscles: "Pecho, hombros, tríceps",
        level: "Principiante",
        description:
          "Variación de empuje que mejora el control del tren superior y el equilibrio muscular.",
      },
      {
        name: "Peso muerto rumano",
        category: "Cadena posterior",
        muscles: "Isquios, glúteos, espalda",
        level: "Intermedio",
        description:
          "Patrón de bisagra de cadera para desarrollar longitud de isquios y fuerza de tracción.",
      },
      {
        name: "Dominada",
        category: "Peso corporal",
        muscles: "Dorsales, bíceps, espalda alta",
        level: "Avanzado",
        description:
          "Movimiento de tracción vertical que desafía la relación fuerza-peso corporal.",
      },
      {
        name: "Zancada caminando",
        category: "Unilateral",
        muscles: "Cuádriceps, glúteos, aductores",
        level: "Principiante",
        description:
          "Ejercicio a una pierna que mejora equilibrio, coordinación y resistencia.",
      },
      {
        name: "Plancha",
        category: "Core",
        muscles: "Abdominales, oblicuos, hombros",
        level: "Principiante",
        description:
          "Sostén estático para estabilidad del tronco y fuerza anti-extensión.",
      },
    ],
    workouts: [
      {
        title: "Split superior / inferior",
        duration: "4 días",
        goal: "Hipertrofia",
        description:
          "Split semanal equilibrado con básicos, volumen accesorio y recuperación bien distribuida.",
      },
      {
        title: "Fuerza full body",
        duration: "3 días",
        goal: "Fuerza",
        description:
          "Compuestos pesados combinados con menor volumen total para progresar de forma sostenible.",
      },
      {
        title: "Acondicionamiento atlético",
        duration: "2 días",
        goal: "Rendimiento",
        description:
          "Sesiones en circuito que mezclan trineo, carries, saltos e intervalos.",
      },
      {
        title: "Plan en casa con mancuernas",
        duration: "3 días",
        goal: "Fitness general",
        description:
          "Sesiones eficientes pensadas para mancuernas ajustables y poco espacio.",
      },
    ],
    articles: [
      {
        title: "Cómo estructurar un split semanal de entrenamiento",
        tag: "Programación",
        readTime: "6 min de lectura",
        description:
          "Una guía práctica para alinear volumen, intensidad y frecuencia con tu recuperación.",
      },
      {
        title: "Fundamentos del timing y la ingesta diaria de proteína",
        tag: "Nutrición",
        readTime: "4 min de lectura",
        description:
          "Objetivos clave de ingesta, distribución de comidas y hábitos realistas para retener músculo.",
      },
      {
        title: "Por qué las semanas de descarga mejoran el progreso",
        tag: "Recuperación",
        readTime: "5 min de lectura",
        description:
          "Cómo gestionar la fatiga de forma estratégica mantiene la fuerza, la motivación y la técnica avanzando.",
      },
    ],
  },
} as const;
