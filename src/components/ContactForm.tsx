"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  zip: string;
  service: string;
  message: string;
};

const initialState: FormState = { name: "", phone: "", email: "", zip: "", service: "Handyman", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!form.zip.trim()) nextErrors.zip = "ZIP code is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="text-lg font-semibold text-emerald-900">Thanks! We got your request.</h3>
        <p className="mt-2 text-sm text-emerald-800">Next step: we’ll call you within one business day to confirm details and schedule your estimate.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm" noValidate>
      {[
        { key: "name", label: "Name", type: "text", required: true },
        { key: "phone", label: "Phone", type: "tel", required: true },
        { key: "email", label: "Email", type: "email", required: false },
        { key: "zip", label: "ZIP code", type: "text", required: true },
      ].map((field) => {
        const key = field.key as keyof FormState;
        return (
          <div key={field.key}>
            <label htmlFor={field.key} className="mb-1 block text-sm font-medium text-slate-700">
              {field.label} {field.required ? "*" : ""}
            </label>
            <input
              id={field.key}
              type={field.type}
              value={form[key]}
              onChange={(event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))}
              aria-invalid={Boolean(errors[key])}
              aria-describedby={errors[key] ? `${field.key}-error` : undefined}
              className="focus-ring w-full rounded-lg border border-slate-300 px-3 py-2"
            />
            {errors[key] && (
              <p id={`${field.key}-error`} className="mt-1 text-xs text-rose-600">
                {errors[key]}
              </p>
            )}
          </div>
        );
      })}

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">
          Service needed
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(event) => setForm((prev) => ({ ...prev, service: event.target.value }))}
          className="focus-ring w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          {[
            "Handyman",
            "Drywall",
            "Painting",
            "Flooring",
            "Minor Remodel",
            "Mounting/TV Install",
            "Light Plumbing",
            "Light Electrical",
          ].map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="focus-ring w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>

      <p className="text-xs text-slate-500">Trust signal: Licensed & insured • Local references available • No-obligation estimates.</p>

      <button type="submit" disabled={loading} className="focus-ring w-full rounded-lg bg-brand-500 px-4 py-3 font-semibold text-white hover:bg-brand-700 disabled:opacity-70">
        {loading ? "Sending..." : "Request a Quote"}
      </button>
    </form>
  );
}
