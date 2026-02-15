type Props = { quote: string; name: string; area: string };

export function TestimonialCard({ quote, name, area }: Props) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-700">“{quote}”</p>
      <p className="mt-4 text-sm font-semibold text-slate-900">{name}</p>
      <p className="text-xs text-slate-500">{area}</p>
    </article>
  );
}
