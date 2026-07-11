import type { QuizAnswers } from "@/types/quiz";
import {
  bloqueioEmocionalQuestion,
  dorPrincipalQuestion,
  getOptionLabel,
  tempoDisponivelQuestion,
} from "@/lib/quizFlow";

export const PRODUCT_NAME = "Reafirma 90";
export const PRODUCT_PRICE = "R$ 47";

const bloqueioMessages: Record<string, string> = {
  "evitar-espelho":
    "sabemos que evitar o espelho dói. A ideia aqui não é cobrança, é te ajudar a se olhar de novo com mais leveza.",
  "evitar-fotos":
    "fugir de fotos e vídeos é mais comum do que parece. A proposta é te ajudar a se sentir bem o suficiente pra topar aquele registro de novo.",
  comparacao:
    "comparar sua fase com a de outras mães só aumenta o peso. Cada corpo tem seu próprio tempo, inclusive o seu.",
  "perdi-quem-eu-era":
    "essa sensação de ter perdido quem você era é mais comum do que parece, e também é possível reencontrar pedaços de você nesse processo.",
};

export function getBloqueioMessage(bloqueioEmocional: string): string {
  return (
    bloqueioMessages[bloqueioEmocional] ??
    "cada mulher carrega esse momento à sua maneira, e todas elas merecem uma rotina que caiba na vida real."
  );
}

export function buildDiagnosis(answers: QuizAnswers): string {
  const dorLabel = getOptionLabel(dorPrincipalQuestion.options, answers.dorPrincipal);
  const tempoLabel = getOptionLabel(
    tempoDisponivelQuestion.options,
    answers.tempoDisponivel
  );
  const bloqueioLabel = getOptionLabel(
    bloqueioEmocionalQuestion.options,
    answers.bloqueioEmocional
  );

  return `Pele: ${dorLabel} · Tempo disponível: ${tempoLabel} · Foco emocional: ${bloqueioLabel}`;
}

export function buildOfferBullets(answers: QuizAnswers): string[] {
  const bullets: string[] = [];

  switch (answers.dorPrincipal) {
    case "pele-flacida":
      bullets.push("Rotina com foco em estimular a elasticidade da pele");
      break;
    case "gordura-localizada":
      bullets.push("Movimentos pensados pra tonificar a região abdominal");
      break;
    case "as-duas-coisas":
      bullets.push("Abordagem que trabalha pele e músculo ao mesmo tempo");
      break;
    default:
      bullets.push("Rotina completa, sem você precisar diagnosticar sozinha");
  }

  switch (answers.tempoDisponivel) {
    case "menos-10-min":
      bullets.push("Sessões pensadas pra caber em menos de 10 minutos");
      break;
    case "10-a-20-min":
      bullets.push("Sessões de 10 a 20 minutos, no seu ritmo");
      break;
    case "mais-20-min":
      bullets.push("Progressão que aproveita bem o tempo que você já tem");
      break;
    default:
      bullets.push("Rotina flexível pra encaixar nos intervalos mais corridos");
  }

  if (answers.amamentando === "sim") {
    bullets.push("Movimentos seguros pra quem está amamentando");
  }

  if (answers.tipoParto === "cesarea") {
    bullets.push("Progressão que respeita a recuperação da cesárea");
  } else if (answers.tipoParto === "normal") {
    bullets.push("Progressão adaptada à recuperação do parto normal");
  }

  return bullets;
}

export const faqItems: { question: string; answer: string }[] = [
  {
    question: "Funciona pro meu caso (cesárea ou normal)?",
    answer:
      "Sim. A rotina se adapta ao tipo de parto e à fase de recuperação de cada mulher. Os movimentos respeitam o momento do seu corpo, seja ele parto normal ou cesárea.",
  },
  {
    question: "E se eu estiver amamentando?",
    answer:
      "Pode seguir tranquila. A rotina não interfere na amamentação. Se você tiver alguma condição específica, vale conversar com seu médico antes de começar, como em qualquer atividade nova.",
  },
  {
    question: "Quanto tempo até ver diferença?",
    answer:
      "Sendo honestas: cada corpo responde no seu tempo, e não existe prazo garantido. O que o Reafirma 90 oferece é uma rotina guiada e constante, o caminho certo pra apoiar sua recuperação, sem promessas de resultado igual pra todo mundo.",
  },
  {
    question: "É seguro no pós-parto?",
    answer:
      "A rotina foi pensada para o pós-parto, com movimentos de baixo impacto. Ainda assim, recomendamos ter a liberação do seu médico antes de iniciar qualquer atividade física.",
  },
];
