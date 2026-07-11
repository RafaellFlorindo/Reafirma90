export type QuizAnswers = {
  tipoParto: string;
  tempoPosParto: string;
  amamentando: string;
  dorPrincipal: string;
  jaTentou: string;
  tempoDisponivel: string;
  bloqueioEmocional: string;
  nome: string;
  email: string;
  whatsapp: string;
};

export const initialQuizAnswers: QuizAnswers = {
  tipoParto: "",
  tempoPosParto: "",
  amamentando: "",
  dorPrincipal: "",
  jaTentou: "",
  tempoDisponivel: "",
  bloqueioEmocional: "",
  nome: "",
  email: "",
  whatsapp: "",
};

export type QuizOption = {
  value: string;
  label: string;
};

export type MicroExplanation = {
  triggerValue: string;
  title: string;
  body: string;
};

export type QuestionConfig = {
  field: keyof QuizAnswers;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  options: QuizOption[];
  microExplanation?: MicroExplanation;
};

export type FlowStep =
  | { type: "welcome" }
  | { type: "question"; question: QuestionConfig }
  | { type: "transition"; key: string }
  | { type: "consequence" }
  | { type: "comparison" }
  | { type: "analyzing" }
  | { type: "leadCapture" }
  | { type: "result" };
