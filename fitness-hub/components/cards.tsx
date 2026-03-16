type CardProps = {
  title: string;
  description: string;
  badge?: string;
  meta?: string;
};

export function InfoCard({ title, description, badge, meta }: CardProps) {
  return (
    <article className="panel h-full p-6 transition hover:-translate-y-1 hover:border-strong hover:bg-panel-strong">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-text-strong">{title}</h3>
        {badge ? (
          <span className="rounded-full border border-border bg-surface-subtle px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-text-strong">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-text-soft">{description}</p>
      {meta ? <p className="mt-6 text-sm font-semibold text-brand">{meta}</p> : null}
    </article>
  );
}

export function MetricCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="panel p-6">
      <p className="text-sm uppercase tracking-[0.24em] text-text-muted">{label}</p>
      <p className={`mt-3 text-4xl font-semibold text-text-strong ${accent}`}>{value}</p>
    </div>
  );
}
