"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { TextField, TextareaField } from "@/components/ui/form-field";
import { EASE_OUT } from "@/lib/motion";

type FormState = {
  azienda: string;
  referente: string;
  email: string;
  telefono: string;
  partecipanti: string;
  note: string;
};

const initialState: FormState = {
  azienda: "",
  referente: "",
  email: "",
  telefono: "",
  partecipanti: "",
  note: "",
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

export function Registration() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(current: FormState): Errors {
    const next: Errors = {};
    if (!current.azienda.trim()) next.azienda = "Inserisci il nome dell'azienda.";
    if (!current.referente.trim()) next.referente = "Inserisci il nome del referente.";
    if (!current.email.trim()) {
      next.email = "Inserisci un indirizzo email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) {
      next.email = "L'indirizzo email non sembra valido.";
    }
    if (!current.telefono.trim()) next.telefono = "Inserisci un numero di telefono.";
    if (!current.partecipanti.trim()) next.partecipanti = "Indica il numero di partecipanti.";
    return next;
  }

  function handleBlur(field: keyof FormState) {
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = validate(form);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      setStatus("error");
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/iscrizioni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("request_failed");
      setStatus("success");
      setForm(initialState);
      setErrors({});
    } catch {
      setStatus("error");
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
    }
  }

  const hasValidationErrors = status === "error" && Object.keys(errors).length > 0;

  return (
    <section id="iscrizione" className="section-y bg-neutral-100">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Iscrizione"
            title="Porta la tua azienda in campo."
            description="Compila il form: ti ricontatteremo per confermare i dettagli e completare l'iscrizione della tua azienda."
          />
          <Reveal delay={0.1} className="hidden lg:block">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/azione-corsa-mcdonalds.jpg"
                alt="Giocatore in corsa durante una partita di Aziende in Campo"
                fill
                sizes="35vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="flex flex-col items-start gap-4 rounded-3xl border border-neutral-200 bg-white p-10"
              role="status"
            >
              <CheckCircle2 className="h-10 w-10 text-green" aria-hidden="true" />
              <h3 className="font-display text-2xl font-semibold uppercase text-ink">Richiesta inviata</h3>
              <p className="text-neutral-600">
                Grazie! Abbiamo ricevuto la tua richiesta di iscrizione: il nostro team ti ricontatterà
                a breve via email per i prossimi passi.
              </p>
              <Button variant="secondary" onClick={() => setStatus("idle")}>
                Invia un&rsquo;altra iscrizione
              </Button>
            </motion.div>
          ) : (
            <form
              noValidate
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              {hasValidationErrors ? (
                <div
                  ref={errorSummaryRef}
                  tabIndex={-1}
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-green/30 bg-green/5 p-4 text-sm text-green"
                >
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Controlla i campi evidenziati qui sotto prima di inviare il form.</span>
                </div>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  label="Nome azienda"
                  required
                  autoComplete="organization"
                  value={form.azienda}
                  onChange={(e) => update("azienda", e.target.value)}
                  onBlur={() => handleBlur("azienda")}
                  error={errors.azienda}
                />
                <TextField
                  label="Referente"
                  required
                  autoComplete="name"
                  value={form.referente}
                  onChange={(e) => update("referente", e.target.value)}
                  onBlur={() => handleBlur("referente")}
                  error={errors.referente}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  error={errors.email}
                />
                <TextField
                  label="Telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.telefono}
                  onChange={(e) => update("telefono", e.target.value)}
                  onBlur={() => handleBlur("telefono")}
                  error={errors.telefono}
                />
              </div>

              <TextField
                label="Numero partecipanti"
                type="number"
                min={1}
                required
                inputMode="numeric"
                helperText="Quante persone comporranno la tua squadra di calcio a 5."
                value={form.partecipanti}
                onChange={(e) => update("partecipanti", e.target.value)}
                onBlur={() => handleBlur("partecipanti")}
                error={errors.partecipanti}
              />

              <TextareaField
                label="Note"
                placeholder="Richieste particolari, numero di squadre, disponibilità..."
                value={form.note}
                onChange={(e) => update("note", e.target.value)}
                rows={4}
              />

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="mt-2 w-full sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Invio in corso
                  </>
                ) : (
                  "Iscrivi la tua azienda"
                )}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
