import { useState } from 'react';

import Section from '../components/Section.jsx';

const CONTACT_LINES = [
  { value: 'PlainHive' },
  { value: 'Andreas T. Bachmeier' },
  { value: 'plainhive@gmail.com', href: 'mailto:plainhive@gmail.com' }
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

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
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={toggleVisibility}
          aria-expanded={isVisible}
          aria-controls="contact-details"
          className="rounded-full border border-ph-border/80 bg-black/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-ph-accent hover:text-ph-accent"
        >
          Contact
        </button>
      </div>
      {isVisible && (
        <div id="contact-details" className="relative mt-10 flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-ph-border/80 bg-black/40 p-6 text-center text-sm text-ph-muted shadow-subtle">
            <p className="text-xs uppercase tracking-[0.2em] text-ph-muted/80">Direct contact</p>
            <div className="mt-4 space-y-3">
              {CONTACT_LINES.map((item) =>
                item.href ? (
                  <a
                    key={item.value}
                    href={item.href}
                    className="block text-lg font-semibold text-white transition hover:text-ph-accent"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p key={item.value} className="text-lg font-semibold text-white">
                    {item.value}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
