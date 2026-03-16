"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/exercises", label: "Exercises" },
  { href: "/workouts", label: "Workouts" },
  { href: "/articles", label: "Articles" },
  { href: "/calculators", label: "Calculators" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-hero-glow" />
      <header className="container-shell pt-5">
        <div className="panel flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-white">
              FH
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-coral">
                Fitness Hub
              </p>
              <p className="text-sm text-slate-500">Train smarter, recover better.</p>
            </div>
          </Link>
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
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? "bg-ink text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="container-shell pb-12 pt-8 sm:pb-16 sm:pt-10">{children}</main>
    </div>
  );
}
