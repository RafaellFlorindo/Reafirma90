import type { QuizAnswers } from "@/types/quiz";

export async function sendQuizWebhook(answers: QuizAnswers): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn(
      "NEXT_PUBLIC_WEBHOOK_URL não configurada. Pulando envio do webhook."
    );
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });
  } catch (error) {
    console.error("Falha ao enviar dados do quiz para o webhook:", error);
  }
}
