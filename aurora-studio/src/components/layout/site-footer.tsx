"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function SiteFooter() {
  const { messages } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[rgba(4,8,20,0.95)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Aurora Studio
          </p>
          <p className="mt-4 font-serif text-3xl text-white">
            {messages.footer.title}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            {messages.footer.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            {messages.footer.navigationLabel}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            {messages.footer.links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            {messages.footer.contactLabel}
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>hola@aurorastudio.demo</p>
            <p>Buenos Aires, Argentina</p>
            <p>{messages.footer.availability}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
