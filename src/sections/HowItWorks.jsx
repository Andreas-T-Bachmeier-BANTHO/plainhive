import Section from '../components/Section.jsx';

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
      <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
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
          <div className="relative overflow-hidden rounded-3xl border border-ph-border/80 bg-gradient-to-br from-black via-ph-surface to-black p-8 shadow-subtle">
            <div className="text-sm uppercase tracking-[0.35em] text-ph-muted">Blackboard orchestration</div>
            <div className="mt-6 grid gap-4 text-sm">
              <div className="rounded-2xl border border-ph-border/80 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ph-muted">Agent debate</p>
                <p className="mt-2 text-ph-muted">
                  Retrieval ⇢ Reasoning ⇢ Verification ⇢ Summaries
                </p>
              </div>
              <div className="rounded-2xl border border-ph-border/80 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ph-muted">Explain &amp; Confidence</p>
                <p className="mt-2 text-ph-muted">
                  Every claim carries evidence, commentary, and a confidence badge—ready for auditors.
                </p>
              </div>
              <div className="rounded-2xl border border-ph-border/80 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ph-muted">User oversight</p>
                <p className="mt-2 text-ph-muted">
                  Swap roles instantly to become the Judge, Collaborator, Prover, or Consumer.
                </p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-8 -left-6 h-32 w-32 rounded-full border border-ph-accent/20" />
        </div>
      </div>
    </Section>
  );
}
