"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  const { messages } = useLanguage();

  return (
    <Container>
      <SectionHeading
        eyebrow={messages.testimonials.eyebrow}
        title={messages.testimonials.title}
        description={messages.testimonials.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {messages.testimonials.items.map((testimonial) => (
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
