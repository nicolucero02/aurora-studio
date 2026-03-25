"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function Hero() {
  const { messages } = useLanguage();
  const featuredNeed = messages.hero.needs[1];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,180,112,0.24),transparent_40%),radial-gradient(circle_at_20%_30%,rgba(116,175,255,0.18),transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            {featuredNeed.eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            {featuredNeed.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {featuredNeed.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] blur-2xl" />
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-7 shadow-2xl shadow-black/20 backdrop-blur">
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
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <p className="text-base font-semibold text-white">{option.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {option.recommendation}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[rgba(247,178,103,0.16)] bg-[rgba(247,178,103,0.08)] p-5">
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
