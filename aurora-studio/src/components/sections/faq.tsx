"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <Container>
      <SectionHeading
        eyebrow="FAQ"
        title="Preguntas frecuentes antes de pedir una propuesta."
        description="Una FAQ corta despeja objeciones comunes y mejora la calidad del lead que llega al formulario."
      />

      <div className="mt-12 grid gap-4">
        {faqs.map((item, index) => {
          const isOpen = openItem === index;

          return (
            <article
              key={item.question}
              className="rounded-[1.6rem] border border-white/10 bg-white/5"
            >
              <button
                type="button"
                onClick={() => setOpenItem(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {item.question}
                </span>
                <span className="text-2xl text-[var(--color-accent)]">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
              {isOpen ? (
                <div className="px-6 pb-6 text-sm leading-7 text-slate-300">
                  {item.answer}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </Container>
  );
}
