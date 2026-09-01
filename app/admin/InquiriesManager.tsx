"use client";

import { useEffect, useState } from "react";

type Inquiry = {
  id: number;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  serviceInterest: string | null;
  message: string | null;
  status: string;
  createdAt: string;
};

const statuses = ["new", "contacted", "converted", "closed"];

export default function InquiriesManager() {
  const [rows, setRows] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/inquiries");
    const data = await res.json();
    if (data.success) {
      setRows(data.data);
      setError("");
    } else {
      setError(data.error ?? "Failed to load.");
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function updateStatus(id: number, status: string) {
    await fetch(`/api/admin/inquiries/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function remove(id: number) {
    if (!confirm("Delete this inquiry?")) return;
    await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
      <h2 className="font-display text-2xl text-navy-900">Inquiries</h2>
      {error && <p className="mt-4 text-[14px] text-red-600">{error}</p>}

      <div className="mt-6">
        {loading ? (
          <p className="text-[14px] text-navy-900/65">Loading…</p>
        ) : rows.length === 0 ? (
          <p className="text-[14px] text-navy-900/65">No inquiries yet.</p>
        ) : (
          <div className="divide-y divide-navy-900/[0.06]">
            {rows.map((r) => (
              <div key={r.id} className="py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-lg text-navy-900">
                      {r.name} {r.company && `— ${r.company}`}
                    </div>
                    <div className="text-[13px] text-navy-900/65">
                      {r.email} {r.phone && `· ${r.phone}`}
                    </div>
                    {r.serviceInterest && (
                      <div className="mt-1 text-[13px] text-navy-900/65">
                        Interested in: {r.serviceInterest}
                      </div>
                    )}
                    {r.message && (
                      <p className="mt-2 max-w-xl text-[14px] text-navy-900/65">{r.message}</p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <select
                      value={r.status}
                      onChange={(e) => updateStatus(r.id, e.target.value)}
                      className="rounded-full border border-navy-900/15 bg-base px-3 py-1.5 text-[13px] text-navy-900"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <button onClick={() => remove(r.id)} className="text-[13px] text-red-500 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
