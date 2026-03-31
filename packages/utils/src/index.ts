import { DEFAULT_LOCALE, type Locale } from "@uztour/config";
import type { LocalizedString } from "@uztour/types";

export function getLocalizedValue(
  value: LocalizedString,
  locale: Locale,
  fallback: Locale = DEFAULT_LOCALE,
): string {
  return value[locale] || value[fallback] || "";
}

export function formatMoney(
  amountMinor: number,
  currency: string,
  locale: string,
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amountMinor / 100);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
