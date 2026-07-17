import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Bitte Name, E-Mail und Nachricht ausfüllen." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse angeben." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      {
        error:
          "E-Mail-Versand ist noch nicht konfiguriert. Bitte RESEND_API_KEY setzen.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Kontaktanfrage von ${name} – ${siteConfig.name}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        "",
        "Nachricht:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Senden fehlgeschlagen. Bitte später erneut versuchen." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Unerwarteter Fehler beim Senden." },
      { status: 500 },
    );
  }
}
