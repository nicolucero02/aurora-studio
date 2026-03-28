"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudiesSection() {
  const { messages } = useLanguage();

  return (
    <Container id="casos">
      <SectionHeading
        eyebrow={messages.caseStudies.eyebrow}
        title={messages.caseStudies.title}
        description={messages.caseStudies.description}
      />

      <div className="mt-12 grid gap-6">
        {messages.caseStudies.items.map((study) => (
          <article
            key={study.client}
            className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {study.category}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-white">
                {study.client}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                {study.summary}
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[var(--color-surface)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                {messages.caseStudies.impactLabel}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {study.impact.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
