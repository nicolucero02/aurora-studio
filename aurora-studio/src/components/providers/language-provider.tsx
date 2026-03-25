"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { messages, type Locale } from "@/i18n/messages";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: (typeof messages)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es";

    const storedLocale = window.localStorage.getItem("aurora-locale");
    return storedLocale === "en" ? "en" : "es";
  });

  useEffect(() => {
    window.localStorage.setItem("aurora-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: messages[locale],
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
