import { useEffect, useMemo, useState } from 'react';

const COOKIE_NAME = 'cookieaccepted';
const PRIVACY_EVENT = 'plainhive:open-privacy';
const GA_TRACKING_ID = 'G-KYK8CCBZ29';

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

function getCookie(name) {
  if (typeof document === 'undefined') return null;
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

function loadGoogleAnalytics() {
  if (typeof window === 'undefined') return;
  if (window.__phGaLoaded) return;
  window.__phGaLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, { anonymize_ip: true });
}

export default function CookieBanner() {
  const [choice, setChoice] = useState(() => getCookie(COOKIE_NAME));

  useEffect(() => {
    if (choice === 'accepted') {
      loadGoogleAnalytics();
    }
  }, [choice]);

  const handleChoice = useMemo(
    () => ({
      accept: () => {
        setCookie(COOKIE_NAME, 'accepted', 365);
        setChoice('accepted');
      },
      decline: () => {
        setCookie(COOKIE_NAME, 'declined', 365);
        setChoice('declined');
      },
      openPolicy: (event) => {
        event.preventDefault();
        window.dispatchEvent(new Event(PRIVACY_EVENT));
      }
    }),
    []
  );

  if (choice) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-[998] w-[min(90%,42rem)] -translate-x-1/2 rounded-3xl border border-ph-border/80 bg-white/95 p-6 text-black shadow-2xl">
      <p className="text-sm leading-relaxed">
        This website uses cookies to ensure you get the best experience.{' '}
        <a
          href="#privacy"
          onClick={handleChoice.openPolicy}
          className="font-semibold text-ph-accent underline decoration-from-font decoration-2 underline-offset-4"
        >
          Review Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleChoice.accept}
          className="flex-1 rounded-full bg-ph-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-ph-accent/80"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={handleChoice.decline}
          className="flex-1 rounded-full border border-ph-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-black/10"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
