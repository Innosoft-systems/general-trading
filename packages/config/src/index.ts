export const SUPPORTED_LOCALES = ["uz", "ru", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ru";

export const LEGAL_ROUTE_KEYS = [
  "terms",
  "privacy",
  "payment-refund-policy",
  "payment-compliance",
  "supported-countries",
] as const;

export const PROVIDER_KEYS = [
  "onramper",
  "guardarian",
  "alchemypay",
  "wert",
  "paybis",
  "itez",
  "manual_sandbox",
] as const;
