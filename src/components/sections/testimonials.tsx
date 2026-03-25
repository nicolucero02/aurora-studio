import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <Container>
      <SectionHeading
        eyebrow="Testimonios"
        title="La mejor prueba no es el diseño, sino la confianza que genera."
        description="Los testimonios ayudan a bajar fricción en la decisión de compra y refuerzan credibilidad en la home."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.author}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
          >
            <p className="text-lg leading-8 text-slate-100">
              “{testimonial.quote}”
            </p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
