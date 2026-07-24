/** Minimum ms between form render and submit (bots submit instantly). */
export const CONTACT_MIN_FILL_MS = (() => {
  const n = Number.parseInt(process.env.CONTACT_MIN_FILL_MS ?? "3000", 10);
  return Number.isFinite(n) && n >= 0 ? n : 3000;
})();

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "tempmail.com",
  "throwaway.email",
  "yopmail.com",
  "10minutemail.com",
]);

const SPAM_KEYWORDS =
  /\b(viagra|cialis|casino|crypto\s*airdrop|forex\s*signal|seo\s*services?|backlinks?|web\s*traffic)\b/i;

const URL_PATTERN = /https?:\/\/|www\.\S+/gi;

export type ContactSpamInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string;
  formLoadedAt?: number;
};

export function isHoneypotTripped(honeypot: string | undefined): boolean {
  return Boolean(honeypot && honeypot.trim().length > 0);
}

export function isFormSubmittedTooFast(formLoadedAt: number | undefined): boolean {
  if (CONTACT_MIN_FILL_MS <= 0) return false;
  if (typeof formLoadedAt !== "number" || !Number.isFinite(formLoadedAt)) return true;
  return Date.now() - formLoadedAt < CONTACT_MIN_FILL_MS;
}

export function isLikelySpamContent(input: ContactSpamInput): boolean {
  const { name, email, message } = input;
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  if (domain && DISPOSABLE_EMAIL_DOMAINS.has(domain)) return true;

  const urls = message.match(URL_PATTERN);
  if (urls && urls.length >= 3) return true;
  if (SPAM_KEYWORDS.test(message) || SPAM_KEYWORDS.test(name)) return true;

  const trimmedName = name.trim();
  if (/^\d+$/.test(trimmedName)) return true;
  if (trimmedName.length >= 4 && /^(.)\1+$/i.test(trimmedName.replace(/\s/g, ""))) return true;

  return false;
}
