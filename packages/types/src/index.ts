import type { Locale } from "@uztour/config";

export type LocalizedString = Record<Locale, string>;

export type PublishState = "draft" | "published" | "archived";

export type AvailabilityStatus =
  | "available"
  | "limited"
  | "on_request"
  | "sold_out";

export type ProviderKey =
  | "onramper"
  | "guardarian"
  | "alchemypay"
  | "wert"
  | "paybis"
  | "itez"
  | "manual_sandbox";

export type RoleKey =
  | "super_admin"
  | "content_manager"
  | "legal_compliance_admin"
  | "payment_finance_admin"
  | "support_readonly";
