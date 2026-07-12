export type LegalSiteConfig = {
  brandName: string;
  legalOperatorName?: string;
  supportEmail?: string;
  privacyEmail?: string;
  businessCountry?: string;
  effectiveDate?: string;
  governingLawLabel?: string;
};

export const legalSiteConfig: LegalSiteConfig = {
  brandName: "MaorTrades",
  legalOperatorName: optional("LEGAL_OPERATOR_NAME"),
  supportEmail: optional("PURCHASE_SUPPORT_EMAIL"),
  privacyEmail: optional("PRIVACY_CONTACT_EMAIL") ?? optional("PURCHASE_SUPPORT_EMAIL"),
  businessCountry: optional("BUSINESS_COUNTRY"),
  effectiveDate: optional("LEGAL_EFFECTIVE_DATE"),
  governingLawLabel: optional("GOVERNING_LAW_LABEL"),
};

function optional(key: string) {
  return process.env[key]?.trim() || undefined;
}
