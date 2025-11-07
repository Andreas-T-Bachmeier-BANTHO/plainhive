import Button from '../components/Button.jsx';
import { track } from '../lib/analytics.js';
import { assetUrl } from '../lib/assetUrl.js';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-24 h-72 w-72 rounded-full bg-ph-accent/10 blur-[160px]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-ph-accent-2/10 blur-[160px]" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 md:flex-row md:items-center md:gap-20 md:px-8">
        <div className="max-w-3xl md:w-7/12">
          <p className="text-sm uppercase tracking-[0.35em] text-ph-muted">Built for depth, not dazzle</p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            PlainHive — transparent, multi-agent AI that thinks with you
          </h1>
          <p className="mt-6 text-lg text-ph-muted md:text-xl">
            Most assistants answer fast. PlainHive answers <strong className="text-white">well</strong>—with visible reasoning,
            confidence, and sources. Steer the process as <strong className="text-white">Judge</strong>,{' '}
            <strong className="text-white">Collaborator</strong>, or <strong className="text-white">Prover</strong> and get outputs you can trust in
            high-stakes work.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              as="a"
              href="#contact"
              onClick={() => track('hero_contact_cta_click')}
              className="w-full sm:w-auto"
            >
              Contact us to learn more
            </Button>
            <Button
              variant="secondary"
              as="a"
              href="#how"
              onClick={() => track('see_how_click')}
              className="w-full sm:w-auto"
            >
              See how it works
            </Button>
          </div>
          <p className="mt-4 text-xs text-ph-muted">Ready for a conversation? Reach out when you’re exploring transparent AI workflows.</p>
        </div>
        <div className="relative md:w-5/12">
          <div className="relative overflow-hidden rounded-3xl border border-ph-border/80 bg-black/40 shadow-subtle">
            <img
              src={assetUrl('images/hero-mockup.svg')}
              alt="Mock interface of PlainHive showing agent timeline and explainability panel"
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            src={assetUrl('images/agent-timeline.svg')}
            alt="Agent timeline visualization"
            className="absolute -left-10 bottom-10 hidden w-40 rounded-2xl border border-ph-border/80 bg-ph-bg/80 p-3 shadow-lg md:block"
            loading="lazy"
            decoding="async"
          />
          <img
            src={assetUrl('images/explain-panel.svg')}
            alt="Explain panel showing reasoning transparency"
            className="absolute -right-10 -top-12 hidden w-44 rounded-2xl border border-ph-border/80 bg-ph-bg/80 p-3 shadow-lg md:block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
