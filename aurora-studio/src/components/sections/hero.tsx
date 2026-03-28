"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function Hero() {
  const { messages } = useLanguage();
  const featuredNeed = messages.hero.needs[1];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(255,180,112,0.16),transparent_38%),radial-gradient(circle_at_18%_28%,rgba(116,175,255,0.12),transparent_34%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]/92">
            {featuredNeed.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-[clamp(3.2rem,7vw,5.9rem)] leading-[1.04] tracking-[-0.03em] text-white text-balance">
            {featuredNeed.title}
          </h1>
          <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-slate-300">
            {featuredNeed.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              {messages.hero.primaryCta}
            </a>
            <a
              href="#casos"
              className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              {messages.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {messages.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/8 bg-white/[0.03] px-5 py-4 backdrop-blur-[2px]"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-4 -z-10 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-7 shadow-2xl shadow-black/20 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              {messages.hero.assistantEyebrow}
            </p>
            <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight text-white">
              {messages.hero.assistantTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              {messages.hero.assistantDescription}
            </p>

            <div className="mt-8 grid gap-3">
              {messages.hero.needs.map((option) => (
                <div
                  key={option.id}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-base font-semibold text-white">{option.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {option.recommendation}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[rgba(247,178,103,0.14)] bg-[rgba(247,178,103,0.05)] p-5">
              <p className="text-sm leading-7 text-slate-100">
                {messages.hero.assistantNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
