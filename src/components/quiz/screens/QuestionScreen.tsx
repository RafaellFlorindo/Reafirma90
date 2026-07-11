"use client";

import { useEffect, useRef, useState } from "react";
import Kicker from "@/components/quiz/Kicker";
import PrimaryButton from "@/components/quiz/PrimaryButton";
import QuizOptionButton from "@/components/quiz/QuizOptionButton";
import type { QuestionConfig, QuizAnswers } from "@/types/quiz";

type QuestionScreenProps = {
  question: QuestionConfig;
  value: string;
  onAnswer: (field: keyof QuizAnswers, value: string) => void;
  onAdvance: () => void;
};

const AUTO_ADVANCE_DELAY_MS = 350;

export default function QuestionScreen({
  question,
  value,
  onAnswer,
  onAdvance,
}: QuestionScreenProps) {
  const [showExplanation, setShowExplanation] = useState(
    Boolean(
      question.microExplanation && value === question.microExplanation.triggerValue
    )
  );
  const advanceTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimeoutRef.current !== null) {
        window.clearTimeout(advanceTimeoutRef.current);
      }
    };
  }, []);

  function handleSelect(optionValue: string) {
    onAnswer(question.field, optionValue);

    if (advanceTimeoutRef.current !== null) {
      window.clearTimeout(advanceTimeoutRef.current);
      advanceTimeoutRef.current = null;
    }

    const isExplanationTrigger =
      question.microExplanation?.triggerValue === optionValue;

    setShowExplanation(isExplanationTrigger ?? false);

    if (!isExplanationTrigger) {
      advanceTimeoutRef.current = window.setTimeout(
        onAdvance,
        AUTO_ADVANCE_DELAY_MS
      );
    }
  }

  return (
    <div className="flex flex-1 flex-col justify-center gap-7 px-6 py-10">
      <div className="flex flex-col items-center gap-3 text-center">
        {question.eyebrow && (
          <Kicker className="animate-quiz-fade">{question.eyebrow}</Kicker>
        )}
        <h1 className="animate-quiz-fade stagger-1 font-display text-[1.65rem] font-semibold leading-[1.2] text-ink">
          {question.title}
        </h1>
        {question.subtitle && (
          <p className="animate-quiz-fade stagger-1 text-sm text-ink-soft">
            {question.subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <div
            key={option.value}
            className="animate-quiz-fade"
            style={{ animationDelay: `${0.1 + index * 0.06}s` }}
          >
            <QuizOptionButton
              label={option.label}
              selected={value === option.value}
              onClick={() => handleSelect(option.value)}
            />
          </div>
        ))}
      </div>

      {showExplanation && question.microExplanation && (
        <div className="flex flex-col gap-4 rounded-2xl border border-rose-light bg-gradient-to-br from-rose-light/50 to-blush/40 p-5 animate-quiz-fade">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-lg font-semibold text-terracotta-dark">
              {question.microExplanation.title}
            </h2>
            <p className="text-sm leading-relaxed text-ink-soft">
              {question.microExplanation.body}
            </p>
          </div>
          <PrimaryButton onClick={onAdvance}>Entendi, continuar</PrimaryButton>
        </div>
      )}
    </div>
  );
}
