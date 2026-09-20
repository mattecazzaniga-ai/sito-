import { NextResponse } from "next/server";

export type IscrizionePayload = {
  azienda: string;
  referente: string;
  email: string;
  telefono: string;
  partecipanti: string;
  sport: string;
  note?: string;
};

/**
 * Registration intake endpoint.
 *
 * This currently only validates the payload and returns success — no
 * database or email integration yet. Wire it up to the future admin
 * dashboard (see /app/admin, "Iscrizioni") by persisting `payload` here
 * and optionally sending a confirmation email.
 */
export async function POST(request: Request) {
  let payload: Partial<IscrizionePayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const requiredFields: (keyof IscrizionePayload)[] = [
    "azienda",
    "referente",
    "email",
    "telefono",
    "partecipanti",
    "sport",
  ];

  const missing = requiredFields.filter((field) => !payload[field]?.toString().trim());
  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: "missing_fields", fields: missing }, { status: 422 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(String(payload.email))) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  // TODO: persist `payload` to the database and notify the organizer.
  console.log("[iscrizioni] nuova richiesta di iscrizione", payload);

  return NextResponse.json({ ok: true });
}
