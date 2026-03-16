import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        sand: "#f8fafc",
        coral: "#ff6b57",
        mint: "#7dd3c7",
        gold: "#fbbf24",
      },
      boxShadow: {
        panel: "0 20px 50px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(251, 191, 36, 0.35), transparent 30%), radial-gradient(circle at top right, rgba(125, 211, 199, 0.3), transparent 25%), linear-gradient(135deg, #fff7ed 0%, #ffffff 42%, #eff6ff 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
