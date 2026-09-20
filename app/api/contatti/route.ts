import { NextResponse } from "next/server";

export type ContattoPayload = {
  nome: string;
  email: string;
  messaggio: string;
  tipo: "generico" | "partnership";
};

/**
 * Generic + partnership contact intake. Same pattern as /api/iscrizioni:
 * validates and acknowledges, but does not persist anywhere yet.
 */
export async function POST(request: Request) {
  let payload: Partial<ContattoPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!payload.nome?.trim() || !payload.email?.trim() || !payload.messaggio?.trim()) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(String(payload.email))) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
  }

  // TODO: forward to the organizer's inbox / CRM once available.
  console.log("[contatti] nuovo messaggio", payload);

  return NextResponse.json({ ok: true });
}
