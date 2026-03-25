"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";

type FormValues = {
  name: string;
  email: string;
  company: string;
  need: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  need: "Branding",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(nextValues: FormValues) {
    const nextErrors: Partial<FormValues> = {};

    if (!nextValues.name.trim()) nextErrors.name = "Tu nombre es obligatorio.";
    if (!nextValues.email.trim()) {
      nextErrors.email = "Tu email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = "Ingresá un email válido.";
    }
    if (!nextValues.message.trim()) {
      nextErrors.message = "Contanos brevemente qué querés lograr.";
    } else if (nextValues.message.trim().length < 20) {
      nextErrors.message = "Sumá un poco más de contexto para ayudarte mejor.";
    }

    return nextErrors;
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setSubmitted(false);
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setValues(initialValues);
  }

  return (
    <Container id="contacto">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Contacto
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Contanos qué querés construir y te mostramos el mejor siguiente paso.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
            Este formulario funciona del lado cliente con validación local. No
            guarda datos en backend todavía, pero deja lista la estructura para
            conectar una API más adelante.
          </p>
          <div className="mt-8 rounded-[1.5rem] bg-[var(--color-surface)] p-5 text-sm leading-7 text-slate-300">
            Respuesta habitual en 24 a 48 horas. Si tu proyecto tiene fecha de
            lanzamiento, mencionála en el mensaje.
          </div>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-200">
              Nombre
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
                placeholder="Tu nombre"
              />
              {errors.name ? (
                <span className="text-sm text-amber-300">{errors.name}</span>
              ) : null}
            </label>

            <label className="grid gap-2 text-sm text-slate-200">
              Email
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
                placeholder="tu@email.com"
                type="email"
              />
              {errors.email ? (
                <span className="text-sm text-amber-300">{errors.email}</span>
              ) : null}
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-200">
              Empresa
              <input
                name="company"
                value={values.company}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
                placeholder="Nombre de tu marca"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-200">
              Necesidad principal
              <select
                name="need"
                value={values.need}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
              >
                <option>Branding</option>
                <option>Web</option>
                <option>Contenido</option>
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm text-slate-200">
            Mensaje
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="min-h-36 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
              placeholder="Necesito una web nueva para lanzar una marca de servicios B2B y mejorar la conversión."
            />
            {errors.message ? (
              <span className="text-sm text-amber-300">{errors.message}</span>
            ) : null}
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Enviar consulta
            </button>
            {submitted ? (
              <p className="text-sm text-emerald-300">
                Consulta simulada enviada. El siguiente paso real sería conectar una API.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </Container>
  );
}
