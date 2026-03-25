"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function SiteHeader() {
  const { locale, setLocale, messages } = useLanguage();
  const navItems = messages.navbar.items;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,10,24,0.7)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <a href="#" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 font-serif text-lg">
            A
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {messages.navbar.studioLabel}
            </p>
            <p className="text-sm text-slate-200">{messages.navbar.agencyLabel}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            {(["es", "en"] as const).map((language) => {
              const isActive = locale === language;

              return (
                <button
                  key={language}
                  type="button"
                  onClick={() => setLocale(language)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition ${
                    isActive
                      ? "bg-white text-slate-950 shadow-lg shadow-black/20"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {language}
                </button>
              );
            })}
          </div>

          <a
            href="#contacto"
            className="rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            {messages.navbar.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
