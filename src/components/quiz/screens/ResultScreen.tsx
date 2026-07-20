"use client";

import { useEffect, useRef } from "react";
import FAQAccordion from "@/components/quiz/FAQAccordion";
import Kicker from "@/components/quiz/Kicker";
import PrimaryButton from "@/components/quiz/PrimaryButton";
import {
  PRODUCT_NAME,
  PRODUCT_PRICE,
  buildDiagnosis,
  buildOfferBullets,
  faqItems,
  getBloqueioMessage,
} from "@/lib/offer";
import { trackQuizCompleted } from "@/lib/metaPixel";
import type { QuizAnswers } from "@/types/quiz";

type ResultScreenProps = {
  answers: QuizAnswers;
};

export default function ResultScreen({ answers }: ResultScreenProps) {
  const hasTrackedCompletion = useRef(false);

  useEffect(() => {
    if (hasTrackedCompletion.current) return;
    hasTrackedCompletion.current = true;
    trackQuizCompleted();
  }, []);

  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";
  const diagnosis = buildDiagnosis(answers);
  const bullets = buildOfferBullets(answers);
  const bloqueioMessage = getBloqueioMessage(answers.bloqueioEmocional);
  const firstName = answers.nome.trim().split(" ")[0] || "";

  return (
    <div className="flex flex-1 flex-col gap-10 px-6 py-10">
      <div className="flex flex-col items-center gap-3 text-center">
        <Kicker className="animate-quiz-fade">Seu diagnóstico</Kicker>
        <h1 className="animate-quiz-fade stagger-1 font-display text-[1.85rem] font-semibold leading-[1.2] text-ink">
          {firstName
            ? `${firstName}, aqui está o seu retrato de hoje`
            : "Aqui está o seu retrato de hoje"}
        </h1>
        <p className="animate-quiz-fade stagger-2 w-full rounded-2xl border border-rose-light bg-white/70 p-4 text-sm font-semibold leading-relaxed text-ink-soft">
          {diagnosis}
        </p>
        <p className="animate-quiz-fade stagger-3 text-sm leading-relaxed text-ink-soft">
          E além do corpo, {bloqueioMessage}
        </p>
      </div>

      <div className="animate-quiz-fade stagger-3 relative overflow-hidden rounded-[2rem] border border-rose-light/70 bg-white/80 p-7 shadow-[0_24px_50px_-24px_rgba(148,71,42,0.35)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-rose-light to-blush opacity-60 blur-2xl"
        />
        <div className="relative flex flex-col gap-1 text-center">
          <h2 className="font-display text-2xl font-semibold text-ink">
            {PRODUCT_NAME}
          </h2>
          <p className="text-sm text-ink-soft">
            Uma rotina pensada para apoiar a sua recuperação pós-parto, no seu
            ritmo.
          </p>
          <p className="mt-2 font-display text-4xl font-semibold text-terracotta-dark">
            {PRODUCT_PRICE}
          </p>
        </div>

        <ul className="relative mt-6 flex flex-col gap-3">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-ink">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-light text-terracotta-dark">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="relative mt-6">
          <PrimaryButton href={checkoutUrl} className="text-[0.95rem]">
            Quero minha rotina agora
          </PrimaryButton>
        </div>
      </div>

      <div className="animate-quiz-fade stagger-4 flex flex-col gap-4">
        <h2 className="font-display text-xl font-semibold text-ink">
          Perguntas frequentes
        </h2>
        <FAQAccordion items={faqItems} />
      </div>
    </div>
  );
}
