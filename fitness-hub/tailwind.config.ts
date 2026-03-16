import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#22C55E",
        accent: "#06B6D4",
        energy: "#F59E0B",
        ink: "#0F172A",
      },
      boxShadow: {
        panel: "0 20px 60px rgba(15, 23, 42, 0.16)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(34, 197, 94, 0.22), transparent 28%), radial-gradient(circle at top right, rgba(6, 182, 212, 0.2), transparent 24%), radial-gradient(circle at center right, rgba(245, 158, 11, 0.14), transparent 24%)",
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
