import Section from '../components/Section.jsx';

const IMAGES = [
  {
    src: '/images/agent-timeline.svg',
    alt: 'Agent timeline with cross-checks',
    caption: 'Agent timeline with cross-checks'
  },
  {
    src: '/images/explain-panel.svg',
    alt: 'Explain view with sources and confidence',
    caption: 'Explain view: sources, reasoning steps, confidence'
  },
  {
    src: '/images/role-selector.svg',
    alt: 'Role selector for Judge, Collaborator, Prover, Consumer',
    caption: 'Role selector: Judge · Collaborator · Prover · Consumer'
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
