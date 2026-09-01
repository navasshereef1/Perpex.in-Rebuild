"use client";

import { useState } from "react";
import Magnetic from "@/components/ui/Magnetic";

const inputClass =
  "rounded-2xl border border-navy-900/10 bg-cream-50 px-5 py-3.5 text-[15px] text-navy-900 outline-none transition-colors focus:border-navy-900/40";

type Service = { slug: string; title: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ConsultationForm({ services }: { services: Service[] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Please tell us your name.";
    if (!email) errors.email = "Email is required.";
    else if (!emailPattern.test(email)) errors.email = "That doesn't look like a valid email.";

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    const payload = {
      name,
      company: form.get("company"),
      email,
      phone: form.get("phone"),
      serviceInterest: form.get("serviceInterest"),
      message: form.get("message"),
      source: "consultation-page",
    };

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[28px] bg-cream-100 p-10">
        <p className="font-display text-2xl text-navy-900">
          Thank you. We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[28px] bg-cream-100 p-8 md:p-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Full name" name="name" required error={fieldErrors.name} />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required error={fieldErrors.email} />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-[13px] text-navy-900/45">Which service interests you?</label>
        <select name="serviceInterest" className={inputClass}>
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-[13px] text-navy-900/45">Tell us about your business</label>
        <textarea name="message" rows={4} className={`${inputClass} resize-none`} />
      </div>

      {status === "error" && <p className="mt-4 text-[14px] text-red-600">{errorMessage}</p>}

      <Magnetic className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-[14px] text-cream-50 transition-colors hover:bg-navy-800 disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Start the Conversation"}
          <span aria-hidden>→</span>
        </button>
      </Magnetic>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[13px] text-navy-900/45">
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${inputClass} ${error ? "border-red-400/60" : ""}`}
      />
      {error && (
        <p id={`${name}-error`} className="text-[12px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
