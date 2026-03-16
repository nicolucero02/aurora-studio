"use client";

import Link from "next/link";
import { useAppPreferences } from "@/components/app-provider";
import { Hero } from "@/components/hero";
import { InfoCard, MetricCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export default function HomePage() {
  const { t } = useAppPreferences();

  return (
    <div className="space-y-10 sm:space-y-14">
      <Hero />

      <section className="grid gap-4 md:grid-cols-3">
        {t.stats.map((stat) => (
          <MetricCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            accent={stat.accent}
          />
        ))}
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow={t.home.exploreEyebrow}
          title={t.home.exploreTitle}
          copy={t.home.exploreCopy}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {t.home.highlights.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="panel grid gap-6 overflow-hidden p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
            {t.home.toolsEyebrow}
          </p>
          <h2 className="section-title">{t.home.toolsTitle}</h2>
          <p className="section-copy">{t.home.toolsCopy}</p>
        </div>
        <Link
          href="/calculators"
          className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-slate-950 transition hover:translate-y-[-1px] hover:bg-emerald-400"
        >
          {t.home.toolsCta}
        </Link>
      </section>
    </div>
  );
}
