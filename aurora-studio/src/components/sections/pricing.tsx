"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PricingSection() {
  const { messages } = useLanguage();
  const pricingPlans = messages.pricing.plans;

  return (
    <Container id="pricing">
      <SectionHeading
        eyebrow={messages.pricing.eyebrow}
        title={messages.pricing.title}
        description={messages.pricing.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => {
          const variant =
            index === 0 ? "base" : index === 1 ? "growth" : "signature";

          const cardClassName =
            variant === "base"
              ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] text-white shadow-[0_24px_60px_rgba(2,6,23,0.16)]"
              : variant === "growth"
                ? "relative border-[rgba(247,178,103,0.58)] bg-[linear-gradient(180deg,rgba(247,178,103,0.16),rgba(255,255,255,0.06)_22%,rgba(255,255,255,0.04))] text-white shadow-[0_30px_90px_rgba(247,178,103,0.14)] lg:-translate-y-4"
                : "border-[rgba(129,169,255,0.22)] bg-[linear-gradient(180deg,rgba(129,169,255,0.13),rgba(255,255,255,0.04)_26%,rgba(255,255,255,0.03))] text-white shadow-[0_28px_80px_rgba(59,130,246,0.10)]";

          const eyebrowClassName =
            variant === "growth"
              ? "text-[var(--color-accent)]"
              : variant === "signature"
                ? "text-sky-200"
                : "text-slate-300";

          const copyClassName =
            variant === "base" ? "text-slate-300" : "text-slate-200";

          const bulletClassName =
            variant === "signature" ? "bg-sky-200" : "bg-[var(--color-accent)]";

          return (
            <article
              key={plan.name}
              className={`rounded-[2rem] border p-8 backdrop-blur-sm transition hover:-translate-y-1 ${cardClassName}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowClassName}`}
                  >
                    {plan.name}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold">{plan.price}</h3>
                </div>
                {plan.badge ? (
                  <span className="rounded-full border border-[rgba(247,178,103,0.32)] bg-[rgba(247,178,103,0.14)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    {plan.badge}
                  </span>
                ) : null}
              </div>

              <p className={`mt-4 text-sm leading-7 ${copyClassName}`}>
                {plan.description}
              </p>

              <div className="mt-6 h-px bg-white/10" />

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${bulletClassName}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Container>
  );
}
