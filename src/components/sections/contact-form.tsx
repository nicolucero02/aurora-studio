"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { Container } from "@/components/ui/container";

type FormValues = {
  name: string;
  email: string;
  company: string;
  need: string;
  message: string;
};

function createInitialValues(defaultNeed: string): FormValues {
  return {
    name: "",
    email: "",
    company: "",
    need: defaultNeed,
    message: "",
  };
}

export function ContactSection() {
  const { locale, messages } = useLanguage();

  return <ContactSectionContent key={locale} messages={messages} />;
}

function ContactSectionContent({
  messages,
}: {
  messages: ReturnType<typeof useLanguage>["messages"];
}) {
  const [values, setValues] = useState<FormValues>(() =>
    createInitialValues(messages.contact.needOptions[0]),
  );
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(nextValues: FormValues) {
    const nextErrors: Partial<FormValues> = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = messages.contact.validation.nameRequired;
    }
    if (!nextValues.email.trim()) {
      nextErrors.email = messages.contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
      nextErrors.email = messages.contact.validation.emailInvalid;
    }
    if (!nextValues.message.trim()) {
      nextErrors.message = messages.contact.validation.messageRequired;
    } else if (nextValues.message.trim().length < 20) {
      nextErrors.message = messages.contact.validation.messageShort;
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
    setValues(createInitialValues(messages.contact.needOptions[0]));
  }

  return (
    <Container id="contacto">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            {messages.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            {messages.contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
            {messages.contact.description}
          </p>
          <div className="mt-8 rounded-[1.5rem] bg-[var(--color-surface)] p-5 text-sm leading-7 text-slate-300">
            {messages.contact.responseNote}
          </div>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-200">
              {messages.contact.labels.name}
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                autoComplete="name"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
                placeholder={messages.contact.placeholders.name}
              />
              {errors.name ? (
                <span className="text-sm text-amber-300" role="alert">
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="grid gap-2 text-sm text-slate-200">
              {messages.contact.labels.email}
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="email"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
                placeholder={messages.contact.placeholders.email}
                type="email"
              />
              {errors.email ? (
                <span className="text-sm text-amber-300" role="alert">
                  {errors.email}
                </span>
              ) : null}
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-200">
              {messages.contact.labels.company}
              <input
                name="company"
                value={values.company}
                onChange={handleChange}
                autoComplete="organization"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
                placeholder={messages.contact.placeholders.company}
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-200">
              {messages.contact.labels.need}
              <select
                name="need"
                value={values.need}
                onChange={handleChange}
                className="rounded-2xl border border-white/10 bg-[var(--color-surface)] px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
              >
                {messages.contact.needOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm text-slate-200">
            {messages.contact.labels.message}
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="min-h-36 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[var(--color-accent)]"
              placeholder={messages.contact.placeholders.message}
            />
            {errors.message ? (
              <span className="text-sm text-amber-300" role="alert">
                {errors.message}
              </span>
            ) : null}
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              {messages.contact.submitLabel}
            </button>
            {submitted ? (
              <p className="text-sm text-emerald-300" role="status" aria-live="polite">
                {messages.contact.successMessage}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </Container>
  );
}
