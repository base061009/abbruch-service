"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setState("error");
        setError(json.error ?? "Senden fehlgeschlagen. Bitte erneut versuchen.");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setError("Netzwerkfehler. Bitte später erneut versuchen.");
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-xl border border-[#f2aa4c]/30 bg-[#f2aa4c]/5 p-6 text-center"
        role="status"
      >
        <p className="text-lg font-bold text-white">Nachricht gesendet</p>
        <p className="mt-2 text-sm text-white/60">
          Vielen Dank – wir melden uns so schnell wie möglich.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-4 border-white/25 bg-transparent text-white hover:bg-white/10"
          onClick={() => setState("idle")}
        >
          Weitere Nachricht
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name" className="font-semibold text-white">
          Name *
        </Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Vor- und Nachname"
          className="h-11 border-white/15 bg-white/5 text-white placeholder:text-white/35"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="font-semibold text-white">
          E-Mail *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="max@beispiel.at"
          className="h-11 border-white/15 bg-white/5 text-white placeholder:text-white/35"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="font-semibold text-white">
          Telefon
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+43 ..."
          className="h-11 border-white/15 bg-white/5 text-white placeholder:text-white/35"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-semibold text-white">
          Nachricht *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Kurz beschreiben, worum es geht…"
          className="border-white/15 bg-white/5 text-white placeholder:text-white/35"
        />
      </div>

      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="h-11 rounded-lg px-8 font-semibold"
        disabled={state === "loading"}
      >
        {state === "loading" ? "Wird gesendet…" : "Nachricht senden"}
      </Button>
    </form>
  );
}
