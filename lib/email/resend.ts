import "server-only";

import { Resend } from "resend";
import { getEmailConfig } from "@/lib/email/config";

let resend: Resend | null = null;

export function getResendClient() {
  const result = getEmailConfig();

  if (!result.ok) {
    return result;
  }

  resend ??= new Resend(result.config.resendApiKey);

  return {
    ok: true as const,
    config: result.config,
    resend,
  };
}
