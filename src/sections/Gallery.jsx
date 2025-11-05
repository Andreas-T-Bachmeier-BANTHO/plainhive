import Section from '../components/Section.jsx';

const IMAGES = [
  {
    src: '/images/graphics/hero-panel.svg',
    alt: 'Hero interface mockup with explainability callouts',
    caption: 'Hero workspace: reasoning threads, confidence overview, and agent debate'
  },
  {
    src: '/images/graphics/insight-dashboard.svg',
    alt: 'Dashboard mockup with insights and exports',
    caption: 'Insight dashboard: monitor explain usage, confidence trends, and share outputs'
  },
  {
    src: '/images/agent-network.svg',
    alt: 'Agent network diagram',
    caption: 'Blackboard network connecting retrieval, reasoning, verification, and user roles'
  },
  {
    src: '/images/explain-panel.svg',
    alt: 'Explainability cascade view',
    caption: 'Explain view: trace each decision, see citations, and export proof'
  },
  {
    src: '/images/role-selector.svg',
    alt: 'Role selector for Judge, Collaborator, Prover, Consumer',
    caption: 'Role selector: pick the oversight level for each task'
  }
];

export default function Gallery() {
  return (
    <Section eyebrow="Product preview" title="What you’ll see" className="pb-0">
      <div className="grid gap-6 lg:grid-cols-3">
        {IMAGES.map((image) => (
          <figure
            key={image.src}
            className="group overflow-hidden rounded-3xl border border-ph-border/80 bg-black/40 shadow-subtle transition hover:-translate-y-1 hover:border-ph-accent/60"
          >
            <img src={image.src} alt={image.alt} className="w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
            <figcaption className="px-6 py-4 text-sm text-ph-muted">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
