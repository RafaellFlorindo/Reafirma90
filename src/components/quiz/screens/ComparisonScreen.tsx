import ImagePlaceholder from "@/components/quiz/ImagePlaceholder";
import PrimaryButton from "@/components/quiz/PrimaryButton";
import { comparisonContent } from "@/lib/quizFlow";

type ComparisonScreenProps = {
  onNext: () => void;
};

export default function ComparisonScreen({ onNext }: ComparisonScreenProps) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 px-6 py-10 text-center">
      <h1 className="animate-quiz-fade font-display text-[1.75rem] font-semibold italic leading-[1.2] text-ink">
        {comparisonContent.title}
      </h1>
      <div className="animate-quiz-fade stagger-1 grid grid-cols-2 gap-3">
        <ImagePlaceholder label="antes" />
        <ImagePlaceholder label="depois" />
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
