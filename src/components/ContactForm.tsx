"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/cn";

const initialData = { name: "", phone: "", email: "", zip: "", service: "", message: "" };

type FormData = typeof initialData;

export function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) nextErrors.name = "Name is required.";
    if (!data.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!data.zip.trim()) nextErrors.zip = "ZIP code is required.";
    if (!data.service) nextErrors.service = "Please select a service.";
    return nextErrors;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setData(initialData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { name: "name", label: "Name*", type: "text" },
          { name: "phone", label: "Phone*", type: "tel" },
          { name: "email", label: "Email", type: "email" },
          { name: "zip", label: "ZIP*", type: "text" },
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1 block text-sm font-medium text-slate-700">{field.label}</label>
            <input
              id={field.name}
              type={field.type}
              value={data[field.name as keyof FormData]}
              onChange={(e) => setData((prev) => ({ ...prev, [field.name]: e.target.value }))}
              className={cn("w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus-ring", errors[field.name as keyof FormData] && "border-red-500")}
              aria-invalid={Boolean(errors[field.name as keyof FormData])}
              aria-describedby={errors[field.name as keyof FormData] ? `${field.name}-error` : undefined}
            />
            {errors[field.name as keyof FormData] ? <p id={`${field.name}-error`} className="mt-1 text-xs text-red-600">{errors[field.name as keyof FormData]}</p> : null}
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-slate-700">Service Needed*</label>
        <select
          id="service"
          value={data.service}
          onChange={(e) => setData((prev) => ({ ...prev, service: e.target.value }))}
          className={cn("w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus-ring", errors.service && "border-red-500")}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="">Select one</option>
          <option>Handyman</option>
          <option>Painting</option>
          <option>Drywall</option>
          <option>Flooring</option>
          <option>Mounting</option>
          <option>Minor Remodel</option>
          <option>Light Plumbing</option>
          <option>Light Electrical</option>
        </select>
        {errors.service ? <p id="service-error" className="mt-1 text-xs text-red-600">{errors.service}</p> : null}
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Project Details</label>
        <textarea
          id="message"
          value={data.message}
          onChange={(e) => setData((prev) => ({ ...prev, message: e.target.value }))}
          rows={5}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus-ring"
        />
      </div>

      <button type="submit" disabled={status === "loading"} className="mt-5 w-full rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-70">
        {status === "loading" ? "Sending..." : "Request My Quote"}
      </button>
      {status === "success" ? <p className="mt-3 text-sm text-emerald-700">Thanks! We got your request and will contact you shortly.</p> : null}
      {status === "error" ? <p className="mt-3 text-sm text-red-600">Something went wrong. Please call us directly at (718) 555-0199.</p> : null}
    </form>
  );
}
