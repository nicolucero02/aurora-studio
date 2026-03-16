"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language, type Theme } from "@/data/translations";

type AppContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (typeof translations)[Language];
  mounted: boolean;
};

const AppContext = createContext<AppContextValue | null>(null);

const THEME_STORAGE_KEY = "fitness-hub-theme";
const LANGUAGE_STORAGE_KEY = "fitness-hub-language";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const nextTheme = savedTheme ?? getSystemTheme();

    if (savedLanguage === "en" || savedLanguage === "es") {
      setLanguageState(savedLanguage);
    }
    if (nextTheme === "light" || nextTheme === "dark") {
      setThemeState(nextTheme);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [mounted, theme]);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.lang = language;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language, mounted]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (!savedTheme) {
        setThemeState(media.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      theme,
      setTheme: setThemeState,
      t: translations[language],
      mounted,
    }),
    [language, theme, mounted],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppPreferences() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppPreferences must be used within AppProvider");
  }

  return context;
}
