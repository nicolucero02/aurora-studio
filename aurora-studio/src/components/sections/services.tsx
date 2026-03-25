import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <Container id="servicios">
      <SectionHeading
        eyebrow="Servicios"
        title="Diseño estratégico para marcas que quieren verse y vender mejor."
        description="Cada servicio está pensado para resolver una necesidad clara sin sumar complejidad innecesaria."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.slug}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/[0.08]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              {service.slug}
            </p>
            <h3 className="mt-5 text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {service.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  );
}
