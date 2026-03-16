"use client";

import { useAppPreferences } from "@/components/app-provider";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M12 4a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 12.8a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.2a1 1 0 0 1 1-1Zm8-5.8a1 1 0 0 1 0 2h-1.2a1 1 0 1 1 0-2H20Zm-14.8 0a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1.2ZM17.66 5.34a1 1 0 0 1 1.41 1.41l-.85.85a1 1 0 1 1-1.41-1.41l.85-.85Zm-10.53 10.53a1 1 0 0 1 1.41 1.41l-.85.85a1 1 0 0 1-1.41-1.41l.85-.85ZM18.5 15.87l.85.85a1 1 0 0 1-1.41 1.41l-.85-.85a1 1 0 0 1 1.41-1.41ZM7.98 6.75a1 1 0 1 1-1.41 1.41l-.85-.85a1 1 0 0 1 1.41-1.41l.85.85ZM12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M14.8 3.2a1 1 0 0 1 .52 1.3A7.5 7.5 0 1 0 19.5 14a1 1 0 0 1 1.3.52a1 1 0 0 1-.08.91A9.5 9.5 0 1 1 13.57 2.28a1 1 0 0 1 1.23.92Z"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme, t } = useAppPreferences();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={t.controls.theme}
      title={t.controls.theme}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-panel text-text-main shadow-[var(--shadow-soft)] transition hover:border-brand/40 hover:bg-panel-strong hover:text-text-strong"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
