import Image from "next/image";
import PrimaryButton from "@/components/quiz/PrimaryButton";
import { comparisonContent } from "@/lib/quizFlow";

type ComparisonScreenProps = {
  onNext: () => void;
};

function ComparisonPhoto({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-[320/566] w-full overflow-hidden rounded-3xl border border-rose-light/70">
        <Image
          src={src}
          alt={label}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <span className="text-center text-xs font-bold uppercase tracking-[0.08em] text-rose-dark">
        {label}
      </span>
    </div>
  );
}

export default function ComparisonScreen({ onNext }: ComparisonScreenProps) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 px-6 py-10 text-center">
      <h1 className="animate-quiz-fade font-display text-[1.75rem] font-semibold italic leading-[1.2] text-ink">
        {comparisonContent.title}
      </h1>
      <div className="animate-quiz-fade stagger-1 grid grid-cols-2 gap-3">
        <ComparisonPhoto src="/antes.png" label="Antes" />
        <ComparisonPhoto src="/depois.png" label="Depois" />
      </div>
      <p className="animate-quiz-fade stagger-2 text-base leading-relaxed text-ink-soft">
        {comparisonContent.body}
      </p>
      <PrimaryButton onClick={onNext} className="animate-quiz-fade stagger-3 mt-2">
        {comparisonContent.ctaLabel}
      </PrimaryButton>
    </div>
  );
}
