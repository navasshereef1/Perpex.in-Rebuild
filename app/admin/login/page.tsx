"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    const data = await res.json();

    if (!res.ok || !data.success) {
      setError(data.error ?? "Login failed.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream-50 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-[28px] border border-navy-900/[0.06] bg-white p-10"
      >
        <span className="font-display text-2xl text-navy-900">PerpeX Admin</span>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[13px] text-navy-900/65">Email</label>
            <input
              name="email"
              type="email"
              required
              className="rounded-2xl border border-navy-900/10 bg-cream-50 px-4 py-3 text-[15px] text-navy-900 outline-none focus:border-navy-900/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] text-navy-900/65">Password</label>
            <input
              name="password"
              type="password"
              required
              className="rounded-2xl border border-navy-900/10 bg-cream-50 px-4 py-3 text-[15px] text-navy-900 outline-none focus:border-navy-900/40"
            />
          </div>
        </div>

        {error && <p className="mt-4 text-[14px] text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-navy-900 px-6 py-3 text-[14px] text-cream-50 transition-colors hover:bg-navy-800 disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
