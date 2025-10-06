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
