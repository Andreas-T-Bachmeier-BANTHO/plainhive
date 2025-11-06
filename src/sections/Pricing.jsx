import Section from '../components/Section.jsx';

const TIERS = [
  {
    name: 'Research preview',
    price: 'Free download',
    description: 'Dive into the PlainHive report and get notified when private betas expand.',
    features: [
      'PlainHive report access',
      'Transparency playbook updates',
      'Invite-only product briefings',
    ],
  },
  {
    name: 'Pro',
    price: 'Coming soon',
    description: 'Solo practitioners who need explainable depth without managing infrastructure.',
    features: [
      'Unlimited projects',
      'Explain + confidence dashboard',
      'Domain agent marketplace',
    ],
  },
  {
    name: 'Team',
    price: 'Coming soon',
    description: 'Firms and teams needing governance, auditing, and collaborative workspaces.',
    features: [
      'Role-based governance',
      'Shared knowledge base',
      'Custom domain agents',
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" eyebrow="Flexible roadmap" title="Pricing that scales with oversight">
      <div className="grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier) => (
          <article key={tier.name} className="rounded-3xl border border-ph-border/80 bg-ph-surface/70 p-8 shadow-subtle">
            <div className="text-sm uppercase tracking-[0.25em] text-ph-muted">{tier.name}</div>
            <p className="mt-4 text-3xl font-semibold text-white">{tier.price}</p>
            <p className="mt-4 text-sm text-ph-muted">{tier.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-ph-muted">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ph-accent" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
