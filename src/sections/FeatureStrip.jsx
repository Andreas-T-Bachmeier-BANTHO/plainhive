const FEATURES = [
  'Confidence indicators',
  'Explain button',
  'Citations',
  'Domain Agents',
  'Export to PDF/Markdown/JSON'
];

export default function FeatureStrip() {
  return (
    <section className="border-y border-ph-border/60 bg-black/30 py-12">

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-4 md:max-w-md">
          {FEATURES.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-ph-border/80 bg-ph-surface/60 px-5 py-2 text-xs uppercase tracking-[0.25em] text-ph-muted md:text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
        <figure className="w-full max-w-md overflow-hidden rounded-3xl border border-ph-border/80 bg-black/40 shadow-subtle">
          <img
            src="/images/confidence-dials.svg"
            alt="Confidence, coverage, and risk dials from PlainHive"
            className="w-full"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="px-5 pb-5 text-xs text-ph-muted md:text-sm">
            Transparency-first indicators let you inspect confidence, evidence coverage, and residual risk at a glance.
          </figcaption>
        </figure>

      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-6">
        {FEATURES.map((feature) => (
          <span
            key={feature}
            className="rounded-full border border-ph-border/80 bg-ph-surface/60 px-5 py-2 text-xs uppercase tracking-[0.25em] text-ph-muted md:text-sm"
          >
            {feature}
          </span>
        ))}

      </div>
    </section>
  );
}
