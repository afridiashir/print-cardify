export const GA_MEASUREMENT_ID = "G-47YJ874ZL2";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function pageview(url: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

export function event({ action, category, label, value, ...rest }: GTagEvent) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  });
}
