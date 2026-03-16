"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAppPreferences } from "@/components/app-provider";
import { navItems } from "@/data/translations";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { t } = useAppPreferences();

  return (
    <div className="relative">
      <header className="container-shell pt-5">
        <div className="flex flex-col gap-4 rounded-[28px] border border-border bg-panel px-5 py-4 shadow-[var(--shadow-soft)] sm:px-6 xl:flex-row xl:items-center xl:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-lg font-bold text-slate-950 shadow-[0_10px_22px_rgba(34,197,94,0.28)]">
              FH
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand">
                {t.brand.name}
              </p>
              <p className="text-sm text-text-soft">{t.brand.tagline}</p>
            </div>
          </Link>
          <div className="flex flex-col gap-4 xl:items-end">
            <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-brand/50 bg-brand text-slate-950 shadow-[0_10px_22px_rgba(34,197,94,0.24)]"
                      : "border-border bg-surface-subtle text-text-soft hover:border-strong hover:bg-surface-soft hover:text-text-strong"
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
            </nav>
            <div className="flex flex-wrap items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="container-shell pb-12 pt-8 sm:pb-16 sm:pt-10">{children}</main>
    </div>
  );
}
