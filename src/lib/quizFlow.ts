import type { FlowStep, QuestionConfig, QuizOption } from "@/types/quiz";

export function getOptionLabel(options: QuizOption[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? "";
}

export const tipoPartoQuestion: QuestionConfig = {
  field: "tipoParto",
  eyebrow: "Sobre o seu parto",
  title: "Como foi o seu parto?",
  options: [
    { value: "normal", label: "Normal" },
    { value: "cesarea", label: "Cesárea" },
  ],
};

export const tempoPosPartoQuestion: QuestionConfig = {
  field: "tempoPosParto",
  eyebrow: "Sua fase atual",
  title: "Há quanto tempo você teve seu bebê?",
  options: [
    { value: "menos-3-meses", label: "Menos de 3 meses" },
    { value: "3-a-6-meses", label: "3 a 6 meses" },
    { value: "6-meses-a-1-ano", label: "6 meses a 1 ano" },
    { value: "mais-1-ano", label: "Mais de 1 ano" },
  ],
};

export const amamentandoQuestion: QuestionConfig = {
  field: "amamentando",
  eyebrow: "Amamentação",
  title: "Você está amamentando atualmente?",
  options: [
    { value: "sim", label: "Sim" },
    { value: "nao", label: "Não" },
  ],
};

export const dorPrincipalQuestion: QuestionConfig = {
  field: "dorPrincipal",
  eyebrow: "Sua barriga hoje",
  title: "O que mais te incomoda hoje na sua barriga?",
  options: [
    { value: "pele-flacida", label: "Pele solta / flácida" },
    { value: "gordura-localizada", label: "Gordura localizada" },
    { value: "as-duas-coisas", label: "As duas coisas" },
    { value: "nao-sei", label: "Não sei identificar direito" },
  ],
  microExplanation: {
    triggerValue: "nao-sei",
    title: "Sem problema, isso é bem comum",
    body: "Pele solta é a flacidez que sobra depois que a barriga esticou na gravidez. Gordura localizada é o acúmulo de gordura na região. E, às vezes, também existe um afastamento natural dos músculos da barriga, a chamada diástase, que nada mais é do que uma parte do corpo se reorganizando depois da gestação.",
  },
};

export const jaTentouQuestion: QuestionConfig = {
  field: "jaTentou",
  eyebrow: "Suas tentativas até aqui",
  title: "O que você já tentou pra resolver isso?",
  options: [
    { value: "dieta", label: "Dieta" },
    { value: "treinar-sozinha", label: "Voltar a treinar sozinha" },
    { value: "app-generico", label: "Aplicativo genérico de treino" },
    { value: "nada-ainda", label: "Nada ainda" },
  ],
};

export const tempoDisponivelQuestion: QuestionConfig = {
  field: "tempoDisponivel",
  eyebrow: "Sua rotina",
  title: "Quantos minutos livres você consegue ter no seu dia hoje?",
  options: [
    { value: "menos-10-min", label: "Menos de 10 min" },
    { value: "10-a-20-min", label: "10 a 20 min" },
    { value: "mais-20-min", label: "Mais de 20 min" },
    { value: "muito-corrido", label: "Não sei, é tudo muito corrido" },
  ],
};

export const bloqueioEmocionalQuestion: QuestionConfig = {
  field: "bloqueioEmocional",
  eyebrow: "Do fundo do coração",
  title: "O que mais pesa pra você hoje?",
  options: [
    { value: "evitar-espelho", label: "Evitar o espelho" },
    { value: "evitar-fotos", label: "Evitar fotos e vídeos" },
    { value: "comparacao", label: "Comparação com outras mães" },
    { value: "perdi-quem-eu-era", label: "Sensação de ter perdido quem eu era" },
  ],
};

export const TRANSITION_TENTATIVAS = "tentativas";
export const TRANSITION_TEMPO = "tempo";

export const transitionContent: Record<
  string,
  { title: string; body: string; ctaLabel: string }
> = {
  [TRANSITION_TENTATIVAS]: {
    title: "Faz sentido não ter funcionado ainda",
    body: "Tentativas soltas, como só dieta, só treino ou um aplicativo genérico, costumam atacar apenas um lado do problema. O corpo no pós-parto pede um olhar mais completo: pele, músculo e a fase certa da sua recuperação, tudo junto. O resultado não veio antes por causa disso, não por falta de esforço seu.",
    ctaLabel: "Continuar",
  },
  [TRANSITION_TEMPO]: {
    title: "Você não precisa de academia, precisa de um método que caiba na sua rotina",
    body: "A rotina do Reafirma 90 foi pensada para caber em janelas curtas: a soneca do bebê, a hora do banho, alguns minutos entre uma tarefa e outra. Nada de treino longo ou equipamento. O que importa é a constância possível pra sua fase, não um tempo que você não tem.",
    ctaLabel: "Continuar",
  },
};

export const consequenceContent = {
  title: "Um ponto importante, com carinho",
  body: "Quanto mais tempo passa sem uma rotina pensada pra essa fase, mais a pele e os músculos se acostumam ao novo formato, e fica mais difícil estimular a elasticidade que ainda existe. Não existe um prazo exato nem uma regra igual pra todo mundo. Mas existe uma verdade simples: começar agora, com constância, tende a ser sempre mais fácil do que começar depois.",
  ctaLabel: "Entendi, continuar",
};

export const comparisonContent = {
  title: "Como pode ser, com consistência",
  body: "Cada corpo responde no seu tempo. Não existe promessa de um resultado igual pra todo mundo. O que muda de verdade é ter uma rotina possível de seguir, semana após semana, até virar hábito.",
  ctaLabel: "Continuar",
};

export const analyzingMicrotexts = [
  "Calculando seu perfil...",
  "Cruzando suas respostas com o método...",
  "Montando sua rotina personalizada...",
  "Quase lá...",
];

export const quizFlow: FlowStep[] = [
  { type: "welcome" },
  { type: "question", question: tipoPartoQuestion },
  { type: "question", question: tempoPosPartoQuestion },
  { type: "question", question: amamentandoQuestion },
  { type: "question", question: dorPrincipalQuestion },
  { type: "question", question: jaTentouQuestion },
  { type: "transition", key: TRANSITION_TENTATIVAS },
  { type: "question", question: tempoDisponivelQuestion },
  { type: "transition", key: TRANSITION_TEMPO },
  { type: "question", question: bloqueioEmocionalQuestion },
  { type: "consequence" },
  { type: "comparison" },
  { type: "analyzing" },
  { type: "result" },
];
