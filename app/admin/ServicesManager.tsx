"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  slug: string;
  stage: string | null;
  title: string;
  tagline: string | null;
  description: string;
  deliverables: string[] | null;
  displayOrder: number | null;
  isActive: boolean;
};

const emptyForm = { slug: "", stage: "", title: "", tagline: "", description: "" };

export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<number | "new" | null>(null);
  const [form, setForm] = useState(emptyForm);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/services");
    const data = await res.json();
    if (data.success) {
      setServices(data.data);
      setError("");
    } else {
      setError(data.error ?? "Failed to load services.");
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  function startEdit(service: Service) {
    setEditingId(service.id);
    setForm({
      slug: service.slug,
      stage: service.stage ?? "",
      title: service.title,
      tagline: service.tagline ?? "",
      description: service.description,
    });
  }

  function startNew() {
    setEditingId("new");
    setForm(emptyForm);
  }

  async function save() {
    const isNew = editingId === "new";
    const url = isNew ? "/api/admin/services" : `/api/admin/services/${editingId}`;
    const res = await fetch(url, {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!data.success) {
      setError(data.error ?? "Save failed.");
      return;
    }
    setEditingId(null);
    load();
  }

  async function remove(id: number) {
    if (!confirm("Delete this service?")) return;
    const res = await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (!data.success) {
      setError(data.error ?? "Delete failed.");
      return;
    }
    load();
  }

  return (
    <div className="rounded-[28px] border border-navy-900/[0.06] bg-white p-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-navy-900">Services</h2>
        <button
          onClick={startNew}
          className="rounded-full bg-navy-900 px-5 py-2.5 text-[13px] text-cream-50 hover:bg-navy-800"
        >
          + Add Service
        </button>
      </div>

      {error && <p className="mt-4 text-[14px] text-red-600">{error}</p>}

      {editingId !== null && (
        <div className="mt-6 rounded-2xl bg-cream-50 p-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <input
              placeholder="Slug"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className="rounded-xl border border-navy-900/10 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-navy-900/40"
            />
            <input
              placeholder="Stage (Diagnose/Design/Enable/Control)"
              value={form.stage}
              onChange={(e) => setForm({ ...form, stage: e.target.value })}
              className="rounded-xl border border-navy-900/10 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-navy-900/40"
            />
            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="rounded-xl border border-navy-900/10 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-navy-900/40 md:col-span-2"
            />
            <input
              placeholder="Tagline"
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              className="rounded-xl border border-navy-900/10 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-navy-900/40 md:col-span-2"
            />
            <textarea
              placeholder="Description"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="resize-none rounded-xl border border-navy-900/10 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-navy-900/40 md:col-span-2"
            />
          </div>
          <div className="mt-4 flex gap-3">
            <button onClick={save} className="rounded-full bg-navy-900 px-5 py-2.5 text-[13px] text-cream-50">
              Save
            </button>
            <button
              onClick={() => setEditingId(null)}
              className="rounded-full border border-navy-900/15 px-5 py-2.5 text-[13px] text-navy-900/70"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mt-6">
        {loading ? (
          <p className="text-[14px] text-navy-900/40">Loading…</p>
        ) : services.length === 0 ? (
          <p className="text-[14px] text-navy-900/40">No services yet.</p>
        ) : (
          <div className="divide-y divide-navy-900/[0.06]">
            {services.map((s) => (
              <div key={s.id} className="flex items-center justify-between py-4">
                <div>
                  <span className="text-[13px] text-navy-900/40">{s.stage}</span>
                  <div className="font-display text-lg text-navy-900">{s.title}</div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => startEdit(s)} className="text-[13px] text-navy-900/60 hover:text-navy-900">
                    Edit
                  </button>
                  <button onClick={() => remove(s.id)} className="text-[13px] text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
