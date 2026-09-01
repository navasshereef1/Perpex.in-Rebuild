"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-navy-900 outline-none transition-colors duration-300 placeholder:text-navy-500 focus:border-navy-900";

type Service = { slug: string; title: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ConsultationForm({ services }: { services: Service[] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Please tell us your name.";
    if (!email) errors.email = "Email is required.";
    else if (!emailPattern.test(email)) errors.email = "That does not look like a valid email.";

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
      formEl.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-10 ring-1 ring-navy-900/[0.06]">
        <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">
          Thank you. We will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white p-8 ring-1 ring-navy-900/[0.06] md:p-10"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Full name" name="name" required error={fieldErrors.name} />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required error={fieldErrors.email} />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="serviceInterest" className="text-[15px] text-navy-600">
          Which service interests you?
        </label>
        <select id="serviceInterest" name="serviceInterest" className={inputClass}>
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-[15px] text-navy-600">
          Tell us about your business
        </label>
        <textarea id="message" name="message" rows={4} className={`${inputClass} resize-none`} />
      </div>

      {status === "error" && <p className="mt-4 text-[15px] text-red-700">{errorMessage}</p>}

      <div className="mt-8">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending" : "Book a discovery call"}
        </Button>
      </div>
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
      <label htmlFor={name} className="text-[15px] text-navy-600">
        {label}
        {required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${inputClass} ${error ? "border-red-600" : ""}`}
      />
      {error && (
        <p id={`${name}-error`} className="text-[13px] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
