import ImagePlaceholder from "@/components/quiz/ImagePlaceholder";
import PrimaryButton from "@/components/quiz/PrimaryButton";
import { consequenceContent } from "@/lib/quizFlow";

type ConsequenceScreenProps = {
  onNext: () => void;
};

export default function ConsequenceScreen({ onNext }: ConsequenceScreenProps) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 px-6 py-10 text-center">
      <h1 className="animate-quiz-fade font-display text-[1.75rem] font-semibold italic leading-[1.2] text-ink">
        {consequenceContent.title}
      </h1>
      <div className="animate-quiz-fade stagger-1">
        <ImagePlaceholder label="imagem emocional aqui" />
      </div>
      <p className="animate-quiz-fade stagger-2 text-base leading-relaxed text-ink-soft">
        {consequenceContent.body}
      </p>
      <PrimaryButton onClick={onNext} className="animate-quiz-fade stagger-3 mt-2">
        {consequenceContent.ctaLabel}
      </PrimaryButton>
    </div>
  );
}
