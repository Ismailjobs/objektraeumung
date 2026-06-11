import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  NAME_MIN,
  NAME_MAX,
  EMAIL_MAX,
  PHONE_MIN,
  PHONE_MAX,
  MESSAGE_MIN,
  MESSAGE_MAX,
  ADDRESS_MIN,
  ADDRESS_MAX,
  PLZ_ORT_MIN,
  PLZ_ORT_MAX,
  EMAIL_REGEX,
  PHONE_REGEX,
} from "@/lib/contact-validation";

const RECAPTCHA_V3_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_V3_SECRET_FALLBACK = "6LdwpNcsAAAAAJJnVfaY1p1xUAOQ3mqtllfijZlV";
const RECAPTCHA_V3_SECRET = (() => {
  const t = process.env.RECAPTCHA_V3_SECRET?.trim();
  return t && t.length > 0 ? t : RECAPTCHA_V3_SECRET_FALLBACK;
})();
const RECAPTCHA_V3_SECRET_SOURCE: "env" | "inline" = process.env.RECAPTCHA_V3_SECRET?.trim()
  ? "env"
  : "inline";
const RECAPTCHA_V3_MIN_SCORE = (() => {
  const n = Number.parseFloat(process.env.RECAPTCHA_V3_MIN_SCORE ?? "0.3");
  return Number.isFinite(n) && n >= 0 && n <= 1 ? n : 0.3;
})();
const RECAPTCHA_V3_ACTION = "contact";
const OFFICE_EMAIL = "office@objektraeumung.at";
const ADDITIONAL_FORM_EMAIL = "farukicten1@gmail.com";
const FROM = '"Objekträumung" <office@objektraeumung.at>';

function getCustomerEmailHtml(): string {
  const accent = "#c2410c";
  const text = "#374151";
  const muted = "#6b7280";
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vielen Dank für Ihre Anfrage</title>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f4f6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; background-color:#ffffff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); overflow: hidden;">
          <tr>
            <td style="background-color: ${accent}; padding: 24px 32px; text-align: center;">
              <span style="font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: 0.02em;">Objekträumung</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 32px 28px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: ${text};">
                Sehr geehrte Damen und Herren,
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: ${text};">
                vielen Dank für Ihre Anfrage und Ihr Vertrauen in unseren Räumungs- und Entrümpelungsservice.
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: ${text};">
                Wir haben Ihre Nachricht erhalten und werden diese schnellstmöglich bearbeiten.<br>
                In der Regel melden wir uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: ${text};">
                Bei dringenden Anliegen können Sie uns gerne telefonisch kontaktieren.
              </p>
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: ${text};">
                Mit freundlichen Grüßen<br>
                <strong style="color: ${accent};">Objekträumung</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 32px 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: ${muted}; text-align: center;">
                Räumung & Entrümpelung · Wien, Niederösterreich, Burgenland
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

type AdminEmailData = {
  vorname: string;
  nachname: string;
  address: string;
  plzOrt: string;
  email: string;
  phone: string;
  message: string;
  datumStr: string;
  officeEmail: string;
};

function getAdminEmailHtml(data: AdminEmailData): string {
  const gray = "#6b7280";
  const border = "#e5e7eb";
  const text = "#374151";
  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0; padding:24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: ${text}; background: #fafafa;">
  <div style="max-width: 520px; margin: 0 auto;">
    <p style="margin: 0 0 20px; font-size: 18px; font-weight: 600;">📩 NEUE KUNDENANFRAGE</p>
    <p style="margin: 0 0 16px; font-size: 13px; color: ${gray}; font-weight: 600;">👤 Kundendaten</p>
    <table role="presentation" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 4px 0; border-bottom: 1px solid ${border}; font-size: 14px;">Vorname</td><td style="padding: 4px 0 4px 12px; border-bottom: 1px solid ${border}; color: ${gray};">${escapeHtml(data.vorname)}</td></tr>
      <tr><td style="padding: 4px 0; border-bottom: 1px solid ${border}; font-size: 14px;">Nachname</td><td style="padding: 4px 0 4px 12px; border-bottom: 1px solid ${border}; color: ${gray};">${escapeHtml(data.nachname)}</td></tr>
      <tr><td style="padding: 4px 0; border-bottom: 1px solid ${border}; font-size: 14px;">Adresse</td><td style="padding: 4px 0 4px 12px; border-bottom: 1px solid ${border}; color: ${gray};">${escapeHtml(data.address)}</td></tr>
      <tr><td style="padding: 4px 0; font-size: 14px;">PLZ / Ort</td><td style="padding: 4px 0 4px 12px; color: ${gray};">${escapeHtml(data.plzOrt)}</td></tr>
    </table>
    <p style="margin: 0 0 16px; font-size: 13px; color: ${gray}; font-weight: 600;">📞 Kontakt</p>
    <table role="presentation" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 4px 0; border-bottom: 1px solid ${border}; font-size: 14px;">E-Mail</td><td style="padding: 4px 0 4px 12px; border-bottom: 1px solid ${border}; color: ${gray};">${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding: 4px 0; font-size: 14px;">Telefon</td><td style="padding: 4px 0 4px 12px; color: ${gray};">${escapeHtml(data.phone)}</td></tr>
    </table>
    <p style="margin: 0 0 16px; font-size: 13px; color: ${gray}; font-weight: 600;">💬 Nachricht</p>
    <div style="padding: 12px; background: #f3f4f6; border-radius: 8px; margin-bottom: 20px; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(data.message)}</div>
    <p style="margin: 0; font-size: 12px; color: ${gray}; border-top: 1px solid ${border}; padding-top: 12px;">Diese Anfrage wurde über dein Kontaktformular gesendet.<br>Datum: ${escapeHtml(data.datumStr)} · ${escapeHtml(data.officeEmail)}</p>
  </div>
</body>
</html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type RecaptchaV3VerifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

function createTransporter() {
  const user = process.env.BREVO_USER;
  const pass = process.env.BREVO_API_KEY;
  if (!user || !pass) throw new Error("BREVO_USER and BREVO_API_KEY must be set");
  return nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });
}

async function verifyRecaptchaV3(token: string): Promise<{
  ok: boolean;
  details?: RecaptchaV3VerifyResponse;
}> {
  if (!RECAPTCHA_V3_SECRET) return { ok: true };
  try {
    const body = new URLSearchParams({
      secret: RECAPTCHA_V3_SECRET,
      response: token,
    });
    const res = await fetch(RECAPTCHA_V3_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = (await res.json()) as RecaptchaV3VerifyResponse;
    if (!data.success) {
      console.warn(
        "[reCAPTCHA v3] verify failed (Next)",
        JSON.stringify({
          "error-codes": data?.["error-codes"],
          responseTokenLength: token.length,
          secretSource: RECAPTCHA_V3_SECRET_SOURCE,
        })
      );
      return { ok: false, details: data };
    }
    if (typeof data.score === "number" && data.score < RECAPTCHA_V3_MIN_SCORE) {
      return { ok: false, details: data };
    }
    if (data.action && data.action !== RECAPTCHA_V3_ACTION) {
      return { ok: false, details: data };
    }
    return { ok: true, details: data };
  } catch {
    return { ok: false };
  }
}

function validateBody(
  body: unknown
): { data: { name: string; email: string; phone: string; address: string; plzOrt: string; message: string; token: string }; error?: string } | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  const name = (typeof b.name === "string" ? b.name.trim() : "").slice(0, NAME_MAX);
  const email = (typeof b.email === "string" ? b.email.trim() : "").slice(0, EMAIL_MAX);
  const phoneRaw = typeof b.phone === "string" ? b.phone.trim() : "";
  const phone = phoneRaw.replace(/\s+/g, " ").slice(0, PHONE_MAX);
  const addressRaw = (typeof b.address === "string" ? b.address.trim() : "").slice(0, ADDRESS_MAX);
  const address = addressRaw;
  const plzOrtRaw = (typeof b.plzOrt === "string" ? b.plzOrt.trim() : "").slice(0, PLZ_ORT_MAX);
  const plzOrt = plzOrtRaw;
  const message = (typeof b.message === "string" ? b.message.trim() : "").slice(0, MESSAGE_MAX);
  const token = (typeof b.recaptchaToken === "string" ? b.recaptchaToken : typeof b.token === "string" ? b.token : "").trim();

  if (name.length < NAME_MIN) return null;
  if (!email || email.length > EMAIL_MAX || !EMAIL_REGEX.test(email)) return null;
  if (phone.length < PHONE_MIN || phone.length > PHONE_MAX || !PHONE_REGEX.test(phone)) return null;
  if (address.length > 0 && (address.length < ADDRESS_MIN || address.length > ADDRESS_MAX)) return null;
  if (plzOrt.length > 0 && (plzOrt.length < PLZ_ORT_MIN || plzOrt.length > PLZ_ORT_MAX)) return null;
  if (message.length < MESSAGE_MIN || message.length > MESSAGE_MAX) return null;
  if (RECAPTCHA_V3_SECRET && !token) return null;
  return { data: { name, email, phone, address, plzOrt, message, token }, error: undefined };
}

export async function POST(request: Request) {
  const internalUrl = process.env.INTERNAL_API_URL;
  if (process.env.USE_BACKEND_PROXY === "true" && internalUrl) {
    try {
      const body = await request.json().catch(() => null);
      const proxyHeaders: Record<string, string> = { "Content-Type": "application/json" };
      const xff = request.headers.get("x-forwarded-for");
      if (xff) proxyHeaders["x-forwarded-for"] = xff;
      const xri = request.headers.get("x-real-ip");
      if (xri) proxyHeaders["x-real-ip"] = xri;

      const res = await fetch(`${internalUrl.replace(/\/$/, "")}/api/contact`, {
        method: "POST",
        headers: proxyHeaders,
        body: body ? JSON.stringify(body) : "{}",
      });
      const data = await res.json().catch(() => ({}));
      return NextResponse.json(data, { status: res.status });
    } catch (err) {
      console.error("Contact proxy error:", err);
      return NextResponse.json(
        { error: "Backend unreachable. Please try again later." },
        { status: 502 }
      );
    }
  }

  try {
    const body = await request.json().catch(() => null);
    const result = validateBody(body);
    if (!result) {
      return NextResponse.json(
        { error: "Ungültige oder fehlende Angaben. Bitte Name, E-Mail, Telefon und Nachricht prüfen (E-Mail-Format, Telefon 8–25 Zeichen, Nachricht 10–5000 Zeichen)." },
        { status: 400 }
      );
    }
    const data = result.data;

    if (RECAPTCHA_V3_SECRET) {
      const rec = await verifyRecaptchaV3(data.token);
      if (!rec.ok) {
        return NextResponse.json(
          { error: "reCAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    const transporter = createTransporter();

    const nameParts = data.name.trim().split(/\s+/);
    const vorname = nameParts[0] ?? "";
    const nachname = nameParts.slice(1).join(" ") || "–";
    const now = new Date();
    const datumStr = now.toLocaleString("de-AT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const adminSubject = "📩 NEUE KUNDENANFRAGE";
    const adminText = [
      "📩 NEUE KUNDENANFRAGE",
      "",
      "👤 Kundendaten",
      "-------------------------------",
      `Vorname:   ${vorname}`,
      `Nachname:  ${nachname}`,
      `Adresse:   ${data.address || "–"}`,
      `PLZ / Ort: ${data.plzOrt || "–"}`,
      "",
      "📞 Kontakt",
      "-------------------------------",
      `E-Mail:    ${data.email}`,
      `Telefon:   ${data.phone}`,
      "",
      "💬 Nachricht",
      "-------------------------------",
      data.message,
      "",
      "Diese Anfrage wurde über dein Kontaktformular gesendet.",
      `Datum: ${datumStr} ${OFFICE_EMAIL}`,
    ].join("\n");

    const adminHtml = getAdminEmailHtml({
      vorname,
      nachname,
      address: data.address || "–",
      plzOrt: data.plzOrt || "–",
      email: data.email,
      phone: data.phone,
      message: data.message,
      datumStr,
      officeEmail: OFFICE_EMAIL,
    });

    const adminResult = await transporter.sendMail({
      from: FROM,
      to: [OFFICE_EMAIL, ADDITIONAL_FORM_EMAIL],
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
    });
    console.log(
      "[Contact] Admin mail sent:",
      adminResult.messageId,
      "→",
      OFFICE_EMAIL,
      "+",
      ADDITIONAL_FORM_EMAIL
    );

    const customerSubject = "Vielen Dank für Ihre Anfrage";
    const customerText = [
      "Sehr geehrte Damen und Herren,",
      "",
      "vielen Dank für Ihre Anfrage und Ihr Vertrauen in unseren Räumungs- und Entrümpelungsservice.",
      "",
      "Wir haben Ihre Nachricht erhalten und werden diese schnellstmöglich bearbeiten.",
      "In der Regel melden wir uns innerhalb von 24 Stunden bei Ihnen.",
      "",
      "Bei dringenden Anliegen können Sie uns gerne telefonisch kontaktieren.",
      "",
      "Mit freundlichen Grüßen",
      "Objekträumung",
    ].join("\n");

    const customerHtml = getCustomerEmailHtml();
    const customerTo = data.email;
    const customerResult = await transporter.sendMail({
      from: FROM,
      to: customerTo,
      replyTo: OFFICE_EMAIL,
      subject: customerSubject,
      text: customerText,
      html: customerHtml,
    });
    console.log("[Contact] Auto-Reply sent:", customerResult.messageId, "→", customerTo);

    return NextResponse.json({ success: true, message: "Message sent successfully." }, { status: 201 });
  } catch (err) {
    console.error("Contact API error:", err);
    const message =
      err && typeof err === "object" && "code" in err && (err as { code: string }).code === "EAUTH"
        ? "E-Mail-Versand fehlgeschlagen: Anmeldung bei Brevo SMTP fehlgeschlagen. Bitte BREVO_USER und BREVO_API_KEY in client/.env.local prüfen (SMTP-Login + API-Key von Brevo)."
        : err instanceof Error
          ? err.message
          : "Server error. Please try again later.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
