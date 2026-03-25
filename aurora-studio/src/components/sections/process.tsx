import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <Container id="proceso" className="pt-8">
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title="Un proceso corto, claro y diseñado para avanzar sin fricción."
        description="La idea es tomar buenas decisiones rápido, con entregables concretos y foco en impacto comercial."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {processSteps.map((step) => (
          <article
            key={step.step}
            className="rounded-[2rem] border border-white/10 bg-[var(--color-surface)] p-6"
          >
            <p className="text-sm font-semibold tracking-[0.24em] text-[var(--color-accent)]">
              {step.step}
            </p>
            <h3 className="mt-5 text-2xl font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
