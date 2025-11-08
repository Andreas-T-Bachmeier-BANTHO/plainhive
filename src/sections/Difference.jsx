import Section from '../components/Section.jsx';

const ROWS = [
  {
    label: 'Transparency',
    plainHive: 'Shows reasoning steps, citations, and confidence badges.',
    others: 'Opaque outputs with hidden prompts and processes.'
  },
  {
    label: 'Control',
    plainHive: 'User roles make you part of the system, not an afterthought.',
    others: 'Prompt and hope. Limited oversight and governance.'
  },
  {
    label: 'Depth',
    plainHive: 'Multi-agent debate and verification generate structured, reusable outputs.',
    others: 'Single-pass answers that miss nuance and misstate facts.'
  }
];

export default function Difference() {
  return (
    <Section id="why" eyebrow="Different by design" title="What makes PlainHive different?">
      <div className="overflow-hidden rounded-3xl border border-ph-border/80 bg-black/30">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm md:text-base">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-ph-muted">
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-ph-muted md:px-8">Capability</th>
                <th className="px-6 py-4 text-sm font-medium text-white md:px-8">PlainHive</th>
                <th className="px-6 py-4 text-sm font-medium text-ph-muted md:px-8">Typical assistant</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, index) => (
                <tr key={row.label} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                  <td className="px-6 py-5 font-semibold text-white md:px-8">{row.label}</td>
                  <td className="px-6 py-5 text-ph-muted md:px-8">
                    {row.plainHive}
                  </td>
                  <td className="px-6 py-5 text-ph-muted md:px-8">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
