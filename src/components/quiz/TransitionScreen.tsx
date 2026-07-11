import type { ReactNode } from "react";
import PrimaryButton from "@/components/quiz/PrimaryButton";

type TransitionScreenProps = {
  title: string;
  body: string;
  ctaLabel: string;
  onNext: () => void;
  children?: ReactNode;
};

export default function TransitionScreen({
  title,
  body,
  ctaLabel,
  onNext,
  children,
}: TransitionScreenProps) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-7 px-6 py-10 text-center">
      <h1 className="animate-quiz-fade font-display text-[1.75rem] font-semibold italic leading-[1.2] text-ink">
        {title}
      </h1>
      <p className="animate-quiz-fade stagger-1 text-base leading-relaxed text-ink-soft">
        {body}
      </p>
      {children}
      <PrimaryButton onClick={onNext} className="animate-quiz-fade stagger-2 mt-2">
        {ctaLabel}
      </PrimaryButton>
    </div>
  );
}
