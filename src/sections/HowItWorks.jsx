import Section from '../components/Section.jsx';
import { assetUrl } from '../lib/assetUrl.js';

const STEPS = [
  {
    title: 'Retrieval agents pull trusted context',
    description: 'Search across curated sources, proprietary knowledge, and structured data to ground every run.'
  },
  {
    title: 'Reasoning agents propose structured answers',
    description: 'Specialists plan, debate, and iterate inside the blackboard until a direction is clear.'
  },
  {
    title: 'Verification agents cross-check claims',
    description: 'Independent reviewers test assumptions, compare sources, and flag uncertainty before delivery.'
  },
  {
    title: 'You guide the loop',
    description: 'Inspect citations, adjust roles, or let PlainHive run autonomously—then approve with confidence.'
  }
];

export default function HowItWorks() {
  return (
    <Section id="how" eyebrow="Inside the hive" title="How PlainHive works">
      <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="space-y-6 text-lg text-ph-muted">
          <p>
            A shared <span className="text-white">blackboard</span> coordinates specialist agents—Retrieval, Reasoning, Verification, and
            Summarization. Agents collaborate, challenge, and refine until the output meets your bar. You can inspect sources,
            see confidence badges, and press <span className="text-white">Explain</span> to trace the path.
          </p>
          <ul className="space-y-4 text-base">
            {STEPS.map((step) => (
              <li key={step.title} className="rounded-2xl border border-ph-border/80 bg-black/30 p-5">
                <p className="font-medium text-white">{step.title}</p>
                <p className="mt-2 text-ph-muted">{step.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <figure className="overflow-hidden rounded-3xl border border-ph-border/80 bg-black/40 shadow-subtle">
            <img
              src={assetUrl('images/agent-network.svg')}
              alt="Visualization of PlainHive agents connected through the blackboard network"
              className="w-full"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="px-6 pb-6 text-sm text-ph-muted">
              Blackboard network showing Retrieval, Reasoning, Verification, and oversight roles exchanging context.
            </figcaption>
          </figure>
          <img
            src={assetUrl('images/role-selector.svg')}
            alt="Role selector for Judge, Collaborator, Prover, Consumer"
            className="absolute -right-8 -bottom-10 hidden w-44 rounded-2xl border border-ph-border/80 bg-ph-bg/80 p-3 shadow-lg lg:block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Section>
  );
}
