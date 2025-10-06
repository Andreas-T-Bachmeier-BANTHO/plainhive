import Section from '../components/Section.jsx';

const ROLES = [
  {
    name: 'Judge',
    description: 'Review alternatives, pick the winner, and approve the final answer.'
  },
  {
    name: 'Collaborator',
    description: 'Nudge the plan, inject domain hints, and shape the outline before agents execute.'
  },
  {
    name: 'Prover',
    description: 'Demand citations, consistency, and validation before sign-off.'
  },
  {
    name: 'Consumer',
    description: 'Receive refined answers when oversight isn’t needed, still backed by evidence.'
  }
];

export default function Roles() {
  return (
    <Section
      eyebrow="User-in-the-loop"
      title="Pick your role per task"
      className="pt-0"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ROLES.map((role) => (
          <article
            key={role.name}
            className="rounded-2xl border border-ph-border/70 bg-black/30 p-6 shadow-subtle transition hover:border-ph-accent/70"
          >
            <h3 className="text-xl font-semibold text-white">{role.name}</h3>
            <p className="mt-3 text-sm text-ph-muted">{role.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
