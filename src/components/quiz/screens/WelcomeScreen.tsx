import Kicker from "@/components/quiz/Kicker";
import PrimaryButton from "@/components/quiz/PrimaryButton";

type WelcomeScreenProps = {
  onStart: () => void;
};

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-7 px-6 py-10 text-center">
      <div className="animate-quiz-fade mx-auto">
        <svg
          width="72"
          height="56"
          viewBox="0 0 72 56"
          fill="none"
          className="text-rose"
        >
          <path
            d="M36 50C20 44 6 32 6 18 6 9 13 3 21 3c6 0 11 3.5 15 9 4-5.5 9-9 15-9 8 0 15 6 15 15 0 14-14 26-30 32Z"
            fill="currentColor"
            opacity="0.35"
          />
          <path
            d="M36 50C20 44 6 32 6 18 6 9 13 3 21 3c6 0 11 3.5 15 9 4-5.5 9-9 15-9 8 0 15 6 15 15 0 14-14 26-30 32Z"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-terracotta"
          />
        </svg>
      </div>

      <Kicker className="animate-quiz-fade stagger-1 mx-auto">
        Reafirma 90
      </Kicker>

      <h1 className="animate-quiz-fade stagger-2 font-display text-[2.1rem] font-semibold leading-[1.15] text-ink">
        Isso não é falta de esforço.{" "}
        <span className="italic text-terracotta-dark">É biologia</span> e o
        método errado.
      </h1>

      <p className="animate-quiz-fade stagger-3 text-base leading-relaxed text-ink-soft">
        Em 2 minutos, você descobre uma rotina pensada para o seu momento
        pós-parto.
      </p>

      <PrimaryButton onClick={onStart} className="animate-quiz-fade stagger-4 mt-2">
        Começar
      </PrimaryButton>
    </div>
  );
}
