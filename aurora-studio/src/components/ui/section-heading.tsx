type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300">{description}</p>
    </div>
  );
}
