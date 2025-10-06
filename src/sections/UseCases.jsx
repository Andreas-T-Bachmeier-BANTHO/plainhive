import Section from '../components/Section.jsx';

const USE_CASES = [
  {
    title: 'Consulting & Strategy',
    description: 'Faster, well-sourced briefs and recommendations; export as memo or deck outline.'
  },
  {
    title: 'Legal & Policy',
    description: 'Traceable reasoning with citations, precedent mapping, and uncertainty flags.'
  },
  {
    title: 'Research & Analysis',
    description: 'Multi-source synthesis with verifiable claims and structured outputs ready for reuse.'
  }
];

export default function UseCases() {
  return (
    <Section eyebrow="Built for expert work" title="Where PlainHive shines">
      <div className="grid gap-6 lg:grid-cols-3">
        {USE_CASES.map((useCase) => (
          <article
            key={useCase.title}
            className="rounded-2xl border border-ph-border/80 bg-ph-surface/70 p-6 shadow-subtle transition hover:-translate-y-1 hover:border-ph-accent/60"
          >
            <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
            <p className="mt-3 text-sm text-ph-muted">{useCase.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
