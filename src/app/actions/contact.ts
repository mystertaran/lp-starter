"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Podaj imię i nazwisko.").max(120),
  company: z.string().trim().min(2, "Podaj firmę lub domenę sklepu.").max(200),
  email: z.string().trim().toLowerCase().email("Nieprawidłowy adres email."),
  phone: z.string().trim().max(40).optional(),
  volume: z.enum(["<100", "100-1000", "1000-10000", "10000+"]),
  channels: z.array(z.string()).max(10),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal("on", { message: "Zaznacz zgodę na przetwarzanie danych." }),
});

export type ContactState =
  | { status: "idle" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> }
  | { status: "success" };

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    volume: formData.get("volume"),
    channels: formData.getAll("channels") as string[],
    message: formData.get("message") || undefined,
    consent: formData.get("consent"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Uzupełnij wymagane pola poprawnie.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured.");
    return {
      status: "error",
      message: "Formularz jest tymczasowo niedostępny. Napisz bezpośrednio na info@thefabos.pl.",
    };
  }

  const data = parsed.data;
  const resend = new Resend(apiKey);

  const from = process.env.CONTACT_FROM_EMAIL ?? "The Fabos LP <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL ?? "info@thefabos.pl";

  const lines = [
    "Nowe zapytanie z The Fabos landing page.",
    "",
    `Imię i nazwisko: ${data.name}`,
    `Firma / sklep:   ${data.company}`,
    `Email:           ${data.email}`,
    data.phone ? `Telefon:         ${data.phone}` : null,
    `Wolumen m-c:     ${data.volume}`,
    `Kanały:          ${data.channels.length > 0 ? data.channels.join(", ") : "—"}`,
    "",
    "Wiadomość:",
    data.message ? data.message : "(brak)",
  ].filter((x) => x !== null) as string[];

  try {
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Zapytanie z LP: ${data.company}`,
      text: lines.join("\n"),
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return {
        status: "error",
        message: "Nie udało się wysłać. Spróbuj ponownie za chwilę.",
      };
    }
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return {
      status: "error",
      message: "Nie udało się wysłać. Spróbuj ponownie za chwilę.",
    };
  }

  return { status: "success" };
}
