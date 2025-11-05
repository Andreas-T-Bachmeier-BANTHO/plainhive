import { useEffect, useRef, useState } from 'react';
import { useState } from 'react';
import Logo from '../components/Logo.jsx';

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const contactRef = useRef(null);
  const privacyCloseRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (contactOpen && contactRef.current && !contactRef.current.contains(event.target)) {
        setContactOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        if (privacyOpen) {
          setPrivacyOpen(false);
          return;
        }

        if (contactOpen) {
          setContactOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [contactOpen, privacyOpen]);

  useEffect(() => {
    if (privacyOpen && privacyCloseRef.current) {
      privacyCloseRef.current.focus();
    }
  }, [privacyOpen]);


import Logo from '../components/Logo.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-ph-border/60 bg-black/30 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-sm text-ph-muted md:flex-row md:items-center md:justify-between md:px-8">
        <Logo />
        <nav className="flex flex-wrap items-center gap-6" aria-label="Footer">
          <div ref={contactRef} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={contactOpen}
              onClick={() => setContactOpen((prev) => !prev)}
        <nav className="flex flex-wrap items-center gap-6">
          <div
            className="relative"
            onMouseLeave={() => setContactOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setContactOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setContactOpen(false);
              }
            }}
            tabIndex={-1}
          >
            <button
              type="button"
              onClick={() => setContactOpen((prev) => !prev)}
              aria-expanded={contactOpen}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setContactOpen(false);
                }
              }}
              className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ph-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ph-bg"
            >
              Contact
            </button>
            {contactOpen ? (
              <div
                role="menu"
                aria-label="PlainHive contact"
                className="absolute left-0 mt-2 w-64 rounded-xl border border-ph-border/80 bg-ph-bg/95 p-4 text-sm text-white shadow-xl"
              >
                <p className="font-medium text-ph-muted">Reach out</p>
                <a
                  href="mailto:andreas.bachmeier@cdi.eu"
                  className="mt-2 block break-words text-base text-white transition hover:text-ph-accent"
            {contactOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-xl border border-ph-border/80 bg-ph-bg/95 p-4 text-sm text-white shadow-xl">
                <p className="font-medium text-ph-muted">Reach out</p>
                <a
                  href="mailto:andreas.bachmeier@cdi.eu"
                  className="mt-2 block break-words text-base text-white hover:text-ph-accent"
                >
                  andreas.bachmeier@cdi.eu
                </a>
              </div>
            ) : null}
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              setContactOpen(false);
              setPrivacyOpen(true);
            }}
            className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ph-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ph-bg"
          >
            Privacy
          </button>
        </nav>
        <p className="text-xs text-ph-muted">© {new Date().getFullYear()} PlainHive. Built for trustworthy AI.</p>
      </div>

      {privacyOpen ? (
      {privacyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
        >
          <div className="max-w-lg rounded-3xl border border-ph-border/80 bg-ph-bg/95 p-8 shadow-2xl">
            <h2 id="privacy-title" className="text-xl font-semibold text-white">
              Privacy notice
            </h2>
            <p className="mt-4 text-sm text-ph-muted">
              This landing page does not use cookies, analytics pixels, or tracking of any kind. It exists purely to share information about PlainHive.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                ref={privacyCloseRef}
          tabIndex={-1}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setPrivacyOpen(false);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setPrivacyOpen(false);
            }
          }}
        >
          <div className="max-w-lg rounded-3xl border border-ph-border/80 bg-ph-bg/95 p-8 shadow-2xl">
            <h2 id="privacy-title" className="text-xl font-semibold text-white">Privacy notice</h2>
            <p className="mt-4 text-sm text-ph-muted">
              This landing page does not use cookies, analytics pixels, or any tracking technology. It exists purely to share information about PlainHive.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="rounded-xl border border-ph-border/80 px-4 py-2 text-sm text-ph-muted transition hover:bg-ph-surface/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ph-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ph-bg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
      )}
          <a href="mailto:hello@plainhive.ai" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </nav>
        <p className="text-xs text-ph-muted">© {new Date().getFullYear()} PlainHive. Built for trustworthy AI.</p>
      </div>
    </footer>
  );
}
