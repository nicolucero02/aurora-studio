import Link from "next/link";
import { useAppPreferences } from "@/components/app-provider";

export function Hero() {
  const { t } = useAppPreferences();

  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="panel p-8 sm:p-10">
        <div className="max-w-2xl space-y-6">
          <p className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            {t.hero.badge}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-text-strong sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="max-w-xl text-base leading-7 text-text-soft sm:text-lg">
            {t.hero.copy}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/workouts"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-emerald-400"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              href="/calculators"
              className="rounded-full border border-border bg-surface-subtle px-6 py-3 text-sm font-semibold text-text-strong transition hover:border-strong hover:bg-surface-soft"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div className="panel p-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-text-muted">
            {t.hero.streakLabel}
          </p>
          <p className="mt-4 text-5xl font-semibold text-text-strong">12</p>
          <p className="mt-2 text-sm text-text-soft">
            {t.hero.streakCopy}
          </p>
        </div>
        <div className="panel p-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-text-muted">
            {t.hero.focusLabel}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {t.hero.focusItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface-subtle px-3 py-2 text-sm font-medium text-text-strong"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-soft">
            {t.hero.focusCopy}
          </p>
        </div>
      </div>
    </section>
  );
}
