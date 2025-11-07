import { useState } from 'react';
import Section from '../components/Section.jsx';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Let’s collaborate"
      title="Contact PlainHive"
      className="relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-20 top-16 hidden h-64 w-64 overflow-hidden rounded-full border border-ph-border/40 bg-black/40 shadow-subtle lg:block">
          <img
            src="/images/graphics/philip-oroni-bCkrMt4ETLo-unsplash.jpg"
            alt="Ambient neon lights representing modern technology"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="absolute -right-10 bottom-0 hidden h-40 w-40 overflow-hidden rounded-3xl border border-ph-border/40 bg-black/40 shadow-subtle md:block">
          <img
            src="/images/graphics/igor-omilaev-IsYT5rUuVcs-unsplash.jpg"
            alt="Abstract colorful light streaks"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="mx-auto max-w-3xl text-lg text-ph-muted">
        We partner with teams who need transparent, multi-agent intelligence. Reach out directly and we’ll schedule time to explore your goals.
      </div>
      <div className="relative mt-10 max-w-xl">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-3xl border border-ph-border/80 bg-black/40 px-6 py-5 text-left text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-ph-accent/60 hover:text-ph-accent"
          aria-expanded={isOpen}
        >
          Contact details
          <span className="text-lg" aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>
        {isOpen && (
          <div className="mt-4 space-y-1 rounded-3xl border border-ph-border/60 bg-black/60 p-6 text-sm text-ph-muted shadow-subtle">
            <p className="text-white">PlainHive</p>
            <p className="text-white/80">Andreas T. Bachmeier</p>
            <a
              href="mailto:plainhive@gmail.com"
              className="font-medium text-ph-accent transition hover:text-white"
            >
              plainhive@gmail.com
            </a>
          </div>
        )}
      </div>
    </Section>
  );
}
