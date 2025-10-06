import { ShieldCheck, Users, Layers, FileSearch } from 'lucide-react';
import Section from '../components/Section.jsx';

const PROPS = [
  {
    title: 'Trust, on purpose',
    description:
      'Cross-checking agents reduce hallucinations and surface citations and confidence so you can act with clarity.',
    icon: ShieldCheck
  },
  {
    title: "You’re in the loop",
    description:
      'Choose your role—Judge, Collaborator, Prover, or Consumer—and steer reasoning when it matters.',
    icon: Users
  },
  {
    title: 'Depth over noise',
    description: 'Structured, context-rich answers instead of bloated features or shallow chat.',
    icon: Layers
  },
  {
    title: 'Domain-ready',
    description:
      'Add Domain Agents for legal, consulting, policy and more—bringing the right language, formats, and workflows.',
    icon: FileSearch
  }
];

export default function ValueProps() {
  return (
    <Section id="product" eyebrow="Why teams pick PlainHive" title="Value without the guesswork">
      <div className="grid gap-6 md:grid-cols-2">
        {PROPS.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-2xl border border-ph-border/80 bg-ph-surface/70 p-8 shadow-subtle transition hover:-translate-y-1 hover:border-ph-accent/60 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ph-border/80 bg-black/40 text-ph-accent">
              <Icon size={24} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-base text-ph-muted">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
