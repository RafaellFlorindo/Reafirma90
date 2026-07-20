export {};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const isDev = process.env.NODE_ENV !== "production";

function callFbq(...args: unknown[]) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq(...args);
}

export function trackPageView() {
  callFbq("track", "PageView");

  if (isDev) {
    console.log("[MetaPixel] track PageView");
  }
}

export function trackQuizCompleted() {
  const eventId = crypto.randomUUID();

  callFbq(
    "trackCustom",
    "QuizCompleted",
    { content_name: "Quiz Reafirma 90" },
    { eventID: eventId }
  );

  if (isDev) {
    console.log("[MetaPixel] trackCustom QuizCompleted", { eventId });
  }
}
