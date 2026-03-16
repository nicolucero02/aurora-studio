export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
