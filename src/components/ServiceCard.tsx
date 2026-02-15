type Props = { icon: string; title: string; description: string };

export function ServiceCard({ icon, title, description }: Props) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-2xl" aria-hidden>
        {icon}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  );
}
