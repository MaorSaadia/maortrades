import { getResourceBySlug } from "@/data/resources";
import { newsletterSources, type NewsletterSource } from "@/lib/email/types";

const maxEmailLength = 254;
const maxSlugLength = 96;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function normalizeEmail(input: unknown) {
  if (typeof input !== "string") {
    return null;
  }

  const trimmed = input.trim();

  if (
    trimmed.length === 0 ||
    trimmed.length > maxEmailLength ||
    /[\u0000-\u001f\u007f]/.test(trimmed) ||
    !emailPattern.test(trimmed)
  ) {
    return null;
  }

  const [localPart, domainPart] = trimmed.split("@");

  if (!localPart || !domainPart) {
    return null;
  }

  return `${localPart}@${domainPart.toLowerCase()}`;
}

export function parseNewsletterSource(input: unknown): NewsletterSource | null {
  if (typeof input !== "string") {
    return null;
  }

  return newsletterSources.includes(input as NewsletterSource)
    ? (input as NewsletterSource)
    : null;
}

export function parseResourceSlug(input: unknown) {
  if (input === undefined || input === null || input === "") {
    return undefined;
  }

  if (
    typeof input !== "string" ||
    input.length > maxSlugLength ||
    !slugPattern.test(input)
  ) {
    return null;
  }

  return input;
}

export function validateKnownResourceSlug(slug: string) {
  return Boolean(getResourceBySlug(slug));
}
