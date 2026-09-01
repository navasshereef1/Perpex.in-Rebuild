"use client";

import { useEffect, useState } from "react";
import ImageUploadField from "./ImageUploadField";

export type FieldConfig = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "checkbox" | "image";
  span?: 1 | 2;
};

type Row = Record<string, any>;

export default function EntityManager({
  title,
  endpoint,
  fields,
  titleField,
  subtitleField,
}: {
  title: string;
  endpoint: string;
  fields: FieldConfig[];
  titleField: string;
  subtitleField?: string;
}) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<number | "new" | null>(null);
  const [form, setForm] = useState<Row>({});

  function emptyForm(): Row {
    const f: Row = {};
    for (const field of fields) f[field.key] = field.type === "checkbox" ? true : "";
    return f;
  }

  async function load() {
    setLoading(true);
    const res = await fetch(endpoint);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startEdit(row: Row) {
    setEditingId(row.id);
    const f: Row = {};
    for (const field of fields) f[field.key] = row[field.key] ?? (field.type === "checkbox" ? true : "");
    setForm(f);
  }

  function startNew() {
    setEditingId("new");
    setForm(emptyForm());
  }

  async function save() {
    const isNew = editingId === "new";
    const url = isNew ? endpoint : `${endpoint}/${editingId}`;
    const payload: Row = {};
    for (const field of fields) {
      let value = form[field.key];
      if (field.type === "number" && value !== "") value = Number(value);
      payload[field.key] = value;
    }
    const res = await fetch(url, {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
    if (!confirm("Delete this item?")) return;
    const res = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
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
        <h2 className="font-display text-2xl text-navy-900">{title}</h2>
        <button
          onClick={startNew}
          className="rounded-full bg-navy-900 px-5 py-2.5 text-[13px] text-cream-50 hover:bg-navy-800"
        >
          + Add
        </button>
      </div>

      {error && <p className="mt-4 text-[14px] text-red-600">{error}</p>}

      {editingId !== null && (
        <div className="mt-6 rounded-2xl bg-cream-50 p-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {fields.map((field) => {
              const spanClass = field.span === 2 ? "md:col-span-2" : "";
              if (field.type === "checkbox") {
                return (
                  <label key={field.key} className={`flex items-center gap-2 text-[14px] text-navy-900/70 ${spanClass}`}>
                    <input
                      type="checkbox"
                      checked={!!form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.checked })}
                    />
                    {field.label}
                  </label>
                );
              }
              if (field.type === "image") {
                return (
                  <div key={field.key} className={spanClass}>
                    <ImageUploadField
                      label={field.label}
                      value={form[field.key] ?? ""}
                      onChange={(url) => setForm({ ...form, [field.key]: url })}
                    />
                  </div>
                );
              }
              if (field.type === "textarea") {
                return (
                  <textarea
                    key={field.key}
                    placeholder={field.label}
                    rows={3}
                    value={form[field.key] ?? ""}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className={`resize-none rounded-xl border border-navy-900/10 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-navy-900/40 ${spanClass}`}
                  />
                );
              }
              return (
                <input
                  key={field.key}
                  type={field.type === "number" ? "number" : "text"}
                  placeholder={field.label}
                  value={form[field.key] ?? ""}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className={`rounded-xl border border-navy-900/10 bg-white px-4 py-2.5 text-[14px] outline-none focus:border-navy-900/40 ${spanClass}`}
                />
              );
            })}
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
        ) : rows.length === 0 ? (
          <p className="text-[14px] text-navy-900/40">Nothing here yet.</p>
        ) : (
          <div className="divide-y divide-navy-900/[0.06]">
            {rows.map((row) => (
              <div key={row.id} className="flex items-center justify-between py-4">
                <div>
                  {subtitleField && (
                    <span className="text-[13px] text-navy-900/40">{row[subtitleField]}</span>
                  )}
                  <div className="font-display text-lg text-navy-900">{row[titleField]}</div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => startEdit(row)} className="text-[13px] text-navy-900/60 hover:text-navy-900">
                    Edit
                  </button>
                  <button onClick={() => remove(row.id)} className="text-[13px] text-red-500 hover:text-red-700">
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
