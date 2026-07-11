"use client";

import { useState, type FormEvent } from "react";
import Kicker from "@/components/quiz/Kicker";
import PrimaryButton from "@/components/quiz/PrimaryButton";

type LeadCaptureScreenProps = {
  initialValues: { nome: string; email: string; whatsapp: string };
  onSubmit: (values: { nome: string; email: string; whatsapp: string }) => void;
};

export default function LeadCaptureScreen({
  initialValues,
  onSubmit,
}: LeadCaptureScreenProps) {
  const [nome, setNome] = useState(initialValues.nome);
  const [email, setEmail] = useState(initialValues.email);
  const [whatsapp, setWhatsapp] = useState(initialValues.whatsapp);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !whatsapp.trim()) {
      setError("Preencha todos os campos pra gente liberar seu resultado.");
      return;
    }

    setError(null);
    onSubmit({ nome: nome.trim(), email: email.trim(), whatsapp: whatsapp.trim() });
  }

  const inputClasses =
    "w-full rounded-2xl border-2 border-sand/80 bg-white/80 px-4 py-3.5 text-base text-ink outline-none transition-colors placeholder:text-ink-soft/50 focus:border-terracotta";

  return (
    <div className="flex flex-1 flex-col justify-center gap-7 px-6 py-10">
      <div className="flex flex-col items-center gap-3 text-center">
        <Kicker className="animate-quiz-fade">Quase lá</Kicker>
        <h1 className="animate-quiz-fade stagger-1 font-display text-[1.75rem] font-semibold leading-[1.2] text-ink">
          Sua rotina personalizada está pronta
        </h1>
        <p className="animate-quiz-fade stagger-1 text-sm text-ink-soft">
          Informe seus dados pra gente te mostrar o resultado.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="animate-quiz-fade stagger-2 flex flex-col gap-1.5">
          <label htmlFor="nome" className="text-sm font-bold text-ink">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Seu nome"
            autoComplete="name"
            className={inputClasses}
          />
        </div>

        <div className="animate-quiz-fade stagger-3 flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-bold text-ink">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seu@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div className="animate-quiz-fade stagger-4 flex flex-col gap-1.5">
          <label htmlFor="whatsapp" className="text-sm font-bold text-ink">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            type="tel"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            placeholder="(00) 00000-0000"
            autoComplete="tel"
            className={inputClasses}
          />
        </div>

        {error && (
          <p className="animate-quiz-fade text-sm font-semibold text-terracotta-dark">
            {error}
          </p>
        )}

        <PrimaryButton type="submit" className="animate-quiz-fade stagger-5 mt-2">
          Ver meu resultado
        </PrimaryButton>
      </form>
    </div>
  );
}
