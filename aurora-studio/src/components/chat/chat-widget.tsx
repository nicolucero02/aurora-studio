"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";

type RecommendationKey = "branding" | "web" | "content";
type FlowStep = "root" | "unsure-1" | "unsure-2" | "done";

type ChatEntry =
  | { type: "assistant"; text: string; showCta?: boolean }
  | { type: "user"; text: string };

type Option = {
  label: string;
  action: () => void;
};

export function ChatWidget() {
  const { messages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [entries, setEntries] = useState<ChatEntry[]>([
    { type: "assistant", text: messages.chat.initialMessage, showCta: false },
  ]);
  const [step, setStep] = useState<FlowStep>("root");
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  // Keeps the latest answer visible as the guided flow advances.
  useEffect(() => {
    if (!isOpen || !scrollAreaRef.current) return;

    scrollAreaRef.current.scrollTo({
      top: scrollAreaRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [entries, isOpen]);

  function pushAssistant(text: string, showCta = true) {
    setEntries((current) => [...current, { type: "assistant", text, showCta }]);
  }

  function pushUser(text: string) {
    setEntries((current) => [...current, { type: "user", text }]);
  }

  function recommend(key: RecommendationKey) {
    const optionLabel =
      key === "branding"
        ? messages.chat.options.branding
        : key === "web"
          ? messages.chat.options.web
          : messages.chat.options.content;

    pushUser(optionLabel);
    pushAssistant(messages.chat.recommendations[key]);
    setStep("done");
  }

  function restartFlow() {
    setEntries([{ type: "assistant", text: messages.chat.initialMessage, showCta: false }]);
    setStep("root");
  }

  let options: Option[] = [];

  if (step === "root") {
    options = [
      {
        label: messages.chat.options.branding,
        action: () => recommend("branding"),
      },
      {
        label: messages.chat.options.web,
        action: () => recommend("web"),
      },
      {
        label: messages.chat.options.content,
        action: () => recommend("content"),
      },
      {
        label: messages.chat.options.unsure,
        action: () => {
          pushUser(messages.chat.options.unsure);
          pushAssistant(messages.chat.unsure.questionOne, false);
          setStep("unsure-1");
        },
      },
    ];
  } else if (step === "unsure-1") {
    options = [
      {
        label: messages.chat.unsure.answersOne.brand,
        action: () => {
          pushUser(messages.chat.unsure.answersOne.brand);
          pushAssistant(messages.chat.recommendations.branding);
          setStep("done");
        },
      },
      {
        label: messages.chat.unsure.answersOne.web,
        action: () => {
          pushUser(messages.chat.unsure.answersOne.web);
          pushAssistant(messages.chat.recommendations.web);
          setStep("done");
        },
      },
      {
        label: messages.chat.unsure.answersOne.content,
        action: () => {
          pushUser(messages.chat.unsure.answersOne.content);
          pushAssistant(messages.chat.recommendations.content);
          setStep("done");
        },
      },
      {
        label: messages.chat.unsure.answersOne.complete,
        action: () => {
          pushUser(messages.chat.unsure.answersOne.complete);
          pushAssistant(messages.chat.unsure.questionTwo, false);
          setStep("unsure-2");
        },
      },
    ];
  } else if (step === "unsure-2") {
    options = [
      {
        label: messages.chat.unsure.answersTwo.branding,
        action: () => {
          pushUser(messages.chat.unsure.answersTwo.branding);
          pushAssistant(messages.chat.recommendations.branding);
          setStep("done");
        },
      },
      {
        label: messages.chat.unsure.answersTwo.web,
        action: () => {
          pushUser(messages.chat.unsure.answersTwo.web);
          pushAssistant(messages.chat.recommendations.web);
          setStep("done");
        },
      },
      {
        label: messages.chat.unsure.answersTwo.content,
        action: () => {
          pushUser(messages.chat.unsure.answersTwo.content);
          pushAssistant(messages.chat.recommendations.content);
          setStep("done");
        },
      },
    ];
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex justify-end sm:right-6 sm:bottom-6">
      <div className="pointer-events-auto w-[min(20rem,calc(100vw-2rem))] sm:w-80">
        <div
          className={`origin-bottom-right overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,14,32,0.98),rgba(8,12,24,0.96))] shadow-[0_26px_90px_rgba(2,6,23,0.52)] backdrop-blur-xl transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-6 scale-[0.97] opacity-0"
          }`}
        >
          <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] px-4 py-3.5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {messages.chat.subtitle}
                </p>
                <h3 className="mt-1.5 font-serif text-xl leading-tight text-white">
                  {messages.chat.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 transition hover:border-white/20 hover:bg-white/8 hover:text-white"
                aria-label={messages.chat.toggleClose}
              >
                ×
              </button>
            </div>
          </div>

          <div
            ref={scrollAreaRef}
            className="chat-scroll max-h-[52vh] space-y-3 overflow-y-auto px-4 py-4 sm:max-h-[24rem]"
          >
            {entries.map((entry, index) => (
              <div
                key={`${entry.type}-${index}`}
                className={entry.type === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={`max-w-[88%] rounded-[1.25rem] px-3.5 py-3 text-sm leading-6 shadow-[0_12px_30px_rgba(2,6,23,0.14)] transition-all duration-200 ${
                    entry.type === "user"
                      ? "rounded-br-md bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(243,244,246,0.98))] text-slate-950"
                      : "rounded-bl-md border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] text-slate-200"
                  }`}
                >
                  <p
                    className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${
                      entry.type === "user"
                        ? "text-slate-500"
                        : "text-[var(--color-accent)]"
                    }`}
                  >
                    {entry.type === "user" ? "Tu respuesta" : messages.chat.title}
                  </p>
                  <p>{entry.text}</p>
                  {entry.type === "assistant" && entry.showCta ? (
                    <a
                      href="#contacto"
                      className="mt-4 inline-flex items-center rounded-full border border-[rgba(247,178,103,0.28)] bg-[linear-gradient(180deg,rgba(247,178,103,0.22),rgba(247,178,103,0.12))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)] transition hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,rgba(247,178,103,0.28),rgba(247,178,103,0.16))]"
                    >
                      {messages.chat.cta}
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 bg-[rgba(255,255,255,0.02)] px-4 py-3.5">
            {step === "done" ? (
              <div className="space-y-3">
                <a
                  href="#contacto"
                  className="flex w-full items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5"
                >
                  {messages.chat.finalCtaLabel}
                </a>
                <p className="text-center text-xs leading-6 text-slate-400">
                  {messages.chat.finalCtaNote}
                </p>
                <button
                  type="button"
                  onClick={restartFlow}
                  className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  {messages.chat.restart}
                </button>
              </div>
            ) : (
              <>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {step === "root"
                    ? messages.chat.primaryQuestion
                    : step === "unsure-1"
                      ? messages.chat.unsure.questionOne
                      : messages.chat.unsure.questionTwo}
                </p>
                <div className="grid gap-2">
                  {options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={option.action}
                      className="rounded-[1.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-4 py-3 text-left text-sm font-medium text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(247,178,103,0.3)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))]"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="group inline-flex items-center gap-3 rounded-full border border-[rgba(247,178,103,0.22)] bg-[linear-gradient(180deg,rgba(11,18,38,0.96),rgba(8,12,24,0.98))] px-4 py-3 text-white shadow-[0_16px_50px_rgba(2,6,23,0.45)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(247,178,103,0.34)]"
            aria-expanded={isOpen}
            aria-label={isOpen ? messages.chat.toggleClose : messages.chat.toggleOpen}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(247,178,103,0.14)] text-[var(--color-accent)] transition group-hover:bg-[rgba(247,178,103,0.18)]">
              {isOpen ? "−" : "✦"}
            </span>
            <span className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {messages.chat.subtitle}
              </span>
              <span className="block text-sm font-semibold leading-tight">
                {messages.chat.title}
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
