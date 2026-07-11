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
