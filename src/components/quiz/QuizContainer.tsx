"use client";

import { useReducer } from "react";
import QuizProgressBar from "@/components/quiz/QuizProgressBar";
import ScreenTransition from "@/components/quiz/ScreenTransition";
import TransitionScreen from "@/components/quiz/TransitionScreen";
import WelcomeScreen from "@/components/quiz/screens/WelcomeScreen";
import QuestionScreen from "@/components/quiz/screens/QuestionScreen";
import ConsequenceScreen from "@/components/quiz/screens/ConsequenceScreen";
import ComparisonScreen from "@/components/quiz/screens/ComparisonScreen";
import AnalyzingScreen from "@/components/quiz/screens/AnalyzingScreen";
import ResultScreen from "@/components/quiz/screens/ResultScreen";
import { quizFlow, transitionContent } from "@/lib/quizFlow";
import { sendQuizWebhook } from "@/lib/sendQuizWebhook";
import { initialQuizAnswers, type QuizAnswers } from "@/types/quiz";

type QuizState = QuizAnswers & { step: number };

type Action =
  | { type: "SET_ANSWER"; field: keyof QuizAnswers; value: string }
  | { type: "NEXT" }
  | { type: "BACK" };

const TOTAL_STEPS = quizFlow.length;

const initialState: QuizState = { ...initialQuizAnswers, step: 0 };

function quizReducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case "SET_ANSWER":
      return { ...state, [action.field]: action.value };
    case "NEXT":
      return { ...state, step: Math.min(state.step + 1, TOTAL_STEPS - 1) };
    case "BACK":
      return { ...state, step: Math.max(state.step - 1, 0) };
    default:
      return state;
  }
}

function toAnswers(state: QuizState): QuizAnswers {
  return {
    tipoParto: state.tipoParto,
    tempoPosParto: state.tempoPosParto,
    amamentando: state.amamentando,
    dorPrincipal: state.dorPrincipal,
    jaTentou: state.jaTentou,
    tempoDisponivel: state.tempoDisponivel,
    bloqueioEmocional: state.bloqueioEmocional,
    nome: state.nome,
    email: state.email,
    whatsapp: state.whatsapp,
  };
}

export default function QuizContainer() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const currentStep = quizFlow[state.step];

  const progress = (state.step / (TOTAL_STEPS - 1)) * 100;
  const showProgressBar = currentStep.type !== "result";
  const showBackButton =
    state.step > 0 &&
    currentStep.type !== "analyzing" &&
    currentStep.type !== "result";

  function handleAnswer(field: keyof QuizAnswers, value: string) {
    dispatch({ type: "SET_ANSWER", field, value });
  }

  function handleNext() {
    dispatch({ type: "NEXT" });
  }

  function handleBack() {
    dispatch({ type: "BACK" });
  }

  function handleAnalyzingComplete() {
    void sendQuizWebhook(toAnswers(state));
    dispatch({ type: "NEXT" });
  }

  function renderScreen() {
    switch (currentStep.type) {
      case "welcome":
        return <WelcomeScreen onStart={handleNext} />;
      case "question":
        return (
          <QuestionScreen
            question={currentStep.question}
            value={state[currentStep.question.field]}
            onAnswer={handleAnswer}
            onAdvance={handleNext}
          />
        );
      case "transition": {
        const content = transitionContent[currentStep.key];
        return (
          <TransitionScreen
            title={content.title}
            body={content.body}
            ctaLabel={content.ctaLabel}
            onNext={handleNext}
          />
        );
      }
      case "consequence":
        return <ConsequenceScreen onNext={handleNext} />;
      case "comparison":
        return <ComparisonScreen onNext={handleNext} />;
      case "analyzing":
        return <AnalyzingScreen onComplete={handleAnalyzingComplete} />;
      case "result":
        return <ResultScreen answers={toAnswers(state)} />;
      default:
        return null;
    }
  }

  return (
    <div className="relative flex min-h-dvh flex-col bg-cream">
      <div aria-hidden className="quiz-atmosphere" />
      <div aria-hidden className="quiz-grain" />
      {showProgressBar && (
        <QuizProgressBar
          progress={progress}
          onBack={showBackButton ? handleBack : undefined}
        />
      )}
      <main
        className={`relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col ${
          showProgressBar ? "pt-16" : ""
        }`}
      >
        <ScreenTransition screenKey={state.step}>
          {renderScreen()}
        </ScreenTransition>
      </main>
    </div>
  );
}
