"use client";

import { useState } from "react";
import { services } from "@/lib/seedData";

export default function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      company: form.get("company"),
      email: form.get("email"),
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
      <div className="border-t border-navy-900/10 pt-10">
        <p className="font-display text-2xl text-navy-900">
          Thank you. We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-navy-900/10 pt-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <label className="text-[13px] text-navy-900/40">Which service interests you?</label>
        <select
          name="serviceInterest"
          className="border-b border-navy-900/20 bg-transparent py-3 text-[16px] text-navy-900 outline-none focus:border-navy-900"
        >
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <label className="text-[13px] text-navy-900/40">Tell us about your business</label>
        <textarea
          name="message"
          rows={4}
          className="resize-none border-b border-navy-900/20 bg-transparent py-3 text-[16px] text-navy-900 outline-none focus:border-navy-900"
        />
      </div>

      {status === "error" && (
        <p className="mt-6 text-[14px] text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-10 inline-flex items-center gap-3 text-lg text-navy-900 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Start the Conversation"}
        <span className="transition-transform group-hover:translate-x-1.5">→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] text-navy-900/40">
        {label}
        {required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="border-b border-navy-900/20 bg-transparent py-3 text-[16px] text-navy-900 outline-none focus:border-navy-900"
      />
    </div>
  );
}
