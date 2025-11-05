import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { track } from '../lib/analytics.js';

const NAV_ITEMS = [
  { label: 'Product', href: '#product', event: 'nav_product' },
  { label: 'How it works', href: '#how', event: 'nav_how' },
  { label: 'Why PlainHive?', href: '#why', event: 'nav_why' },
  { label: 'Pricing', href: '#pricing', event: 'nav_pricing' },
  { label: 'FAQ', href: '#faq', event: 'nav_faq' }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  const handleNavClick = (eventName) => {
    track('nav_click', { target: eventName });
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ph-border/60 backdrop-blur-sm transition-colors ${
        isScrolled ? 'bg-ph-bg/80' : 'bg-ph-bg/30'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="flex items-center gap-3" onClick={() => handleNavClick('home')}>
          <Logo />
        </a>
        <div className="hidden items-center gap-8 text-sm text-ph-muted md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.event)}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a
            href="#report"
            onClick={() => track('nav_click', { target: 'nav_report' })}
            className="inline-flex items-center rounded-xl border border-ph-border/80 bg-ph-surface/70 px-4 py-2 text-sm font-medium text-ph-muted transition hover:bg-ph-surface hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ph-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ph-bg"
          >
            Download report
          </a>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ph-border text-ph-muted transition hover:text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-ph-border bg-ph-bg/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-ph-muted">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.event)}
                className="py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#report"
              onClick={() => handleNavClick('nav_report')}
              className="inline-flex items-center justify-center rounded-xl border border-ph-border/80 bg-ph-surface/70 px-4 py-2 text-sm font-medium text-ph-muted transition hover:bg-ph-surface hover:text-white"
            >
              Download report
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
