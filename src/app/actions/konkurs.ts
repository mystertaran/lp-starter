"use server";

import { Resend } from "resend";
import { z } from "zod";

const konkursSchema = z.object({
  answer: z.enum(["NAOKU", "NAOKO STUDIO", "NOOKO"], {
    message: "Wybierz odpowiedź z listy.",
  }),
  name: z.string().trim().min(2, "Podaj imię.").max(120),
  email: z.string().trim().toLowerCase().email("Nieprawidłowy adres email."),
});

export type KonkursState =
  | { status: "idle" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> }
  | { status: "success" };

export async function submitKonkurs(
  _prev: KonkursState,
  formData: FormData
): Promise<KonkursState> {
  const raw = {
    answer: formData.get("answer"),
    name: formData.get("name"),
    email: formData.get("email"),
  };

  const parsed = konkursSchema.safeParse(raw);
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
      message: "Uzupełnij pola poprawnie.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[konkurs] RESEND_API_KEY is not configured.");
    return {
      status: "error",
      message: "Formularz jest tymczasowo niedostępny. Spróbuj ponownie za chwilę.",
    };
  }

  const data = parsed.data;
  const resend = new Resend(apiKey);

  const from = process.env.CONTACT_FROM_EMAIL ?? "The Fabos LP <onboarding@resend.dev>";
  const to = process.env.KONKURS_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? "info@thefabos.pl";

  const lines = [
    "Nowe zgłoszenie konkursowe z /konkurs.",
    "",
    `Imię:       ${data.name}`,
    `Email:      ${data.email}`,
    `Odpowiedź:  ${data.answer}`,
  ];

  try {
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Konkurs NAOKO: ${data.answer} — ${data.name}`,
      text: lines.join("\n"),
    });

    if (result.error) {
      console.error("[konkurs] Resend error:", result.error);
      return {
        status: "error",
        message: "Nie udało się wysłać. Spróbuj ponownie za chwilę.",
      };
    }
  } catch (err) {
    console.error("[konkurs] unexpected error:", err);
    return {
      status: "error",
      message: "Nie udało się wysłać. Spróbuj ponownie za chwilę.",
    };
  }

  return { status: "success" };
}
