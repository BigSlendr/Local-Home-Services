type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-2xl text-center" : "mb-8 max-w-2xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-amber-600">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-slate-600">{description}</p> : null}
    </div>
  );
}
