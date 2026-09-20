"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectField, TextField, TextareaField } from "@/components/ui/form-field";

type FormState = {
  nome: string;
  email: string;
  tipo: "generico" | "partnership";
  messaggio: string;
};

const initialState: FormState = { nome: "", email: "", tipo: "generico", messaggio: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-3xl border border-neutral-200 bg-white p-8" role="status">
        <CheckCircle2 className="h-8 w-8 text-red" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold uppercase text-ink">Messaggio inviato</h3>
        <p className="text-sm text-neutral-600">Ti risponderemo il prima possibile.</p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Invia un altro messaggio
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Nome"
          required
          autoComplete="name"
          value={form.nome}
          onChange={(e) => update("nome", e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </div>
      <SelectField
        label="Tipo di richiesta"
        value={form.tipo}
        onChange={(e) => update("tipo", e.target.value as FormState["tipo"])}
      >
        <option value="generico">Informazioni generali</option>
        <option value="partnership">Diventare partner / sponsor</option>
      </SelectField>
      <TextareaField
        label="Messaggio"
        required
        rows={5}
        value={form.messaggio}
        onChange={(e) => update("messaggio", e.target.value)}
      />
      {status === "error" ? (
        <p role="alert" className="text-sm font-medium text-red">
          Non siamo riusciti a inviare il messaggio. Riprova o scrivici direttamente via email.
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Invio in corso
          </>
        ) : (
          "Invia messaggio"
        )}
      </Button>
    </form>
  );
}
