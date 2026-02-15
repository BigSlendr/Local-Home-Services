import type { Service } from "@/lib/data";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
      <div className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-700">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.description}</p>
    </article>
  );
}
