"use client";

import { useAppPreferences } from "@/components/app-provider";
import type { Language } from "@/data/translations";

const languages: Language[] = ["en", "es"];

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useAppPreferences();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-panel p-1">
      <span className="px-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-text-soft">
        {t.controls.language}
      </span>
      {languages.map((item) => {
        const active = item === language;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              active
                ? "bg-brand text-slate-950"
                : "text-text-soft hover:bg-surface-subtle hover:text-text-main"
            }`}
          >
            {item === "en" ? t.controls.english : t.controls.spanish}
          </button>
        );
      })}
    </div>
  );
}
