import { useEffect, useState } from 'react';
import Logo from '../components/Logo.jsx';

const PRIVACY_EVENT = 'plainhive:open-privacy';

const CONTACT_DETAILS = [
  { label: 'Organization', value: 'PlainHive' },
  { label: 'Name', value: 'Andreas T. Bachmeier' },
  {
    label: 'Email',
    value: 'plainhive@gmail.com',
    href: 'mailto:plainhive@gmail.com'
  }
];

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleOpen = () => setActiveModal('privacy');
    window.addEventListener(PRIVACY_EVENT, handleOpen);
    return () => window.removeEventListener(PRIVACY_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (showPrivacy) {
      setShowContact(false);
      const { body } = document;
      const originalOverflow = body.style.overflow;
      body.style.overflow = 'hidden';
      return () => {
        body.style.overflow = originalOverflow;
      };
    }

    const { body } = document;
    const originalOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = originalOverflow;
    };
  }, [activeModal]);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="border-t border-ph-border/60 bg-black/30 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-sm text-ph-muted md:flex-row md:items-start md:justify-between md:px-8">
        <Logo />
        <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
          <nav className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
            <button
              type="button"
              onClick={() => setShowContact((prev) => !prev)}
              aria-expanded={showContact}
              aria-controls="footer-contact-details"
              className="bg-transparent text-ph-muted transition hover:text-white focus:outline-none"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="bg-transparent text-ph-muted transition hover:text-white focus:outline-none"
            >
              Privacy
            </button>
          </nav>
          {showContact && (
            <div
              id="footer-contact-details"
              className="w-full max-w-sm rounded-3xl border border-ph-border/80 bg-black/40 p-6 text-left text-sm text-ph-muted shadow-subtle"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-ph-muted/80">Direct contact</p>
              <dl className="mt-4 space-y-3">
                {CONTACT_DETAILS.map((detail) => (
                  <div key={detail.label} className="flex flex-col gap-1">
                    <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-ph-muted/70">{detail.label}</dt>
                    {detail.href ? (
                      <dd>
                        <a
                          href={detail.href}
                          className="text-base font-semibold text-white transition hover:text-ph-accent"
                        >
                          {detail.value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="text-base font-semibold text-white">{detail.value}</dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
          <button
            type="button"
            onClick={() => setShowPrivacy(true)}
            className="bg-transparent text-ph-muted transition hover:text-white focus:outline-none"
          >
            Privacy
          </button>
        </nav>
        <p className="text-xs text-ph-muted">© {new Date().getFullYear()} PlainHive. Built for trustworthy AI.</p>
      </div>
      {activeModal === 'privacy' && <PrivacyModal onClose={closeModal} />}
      {activeModal === 'contact' && <ContactModal onClose={closeModal} />}
    </footer>
  );
}

function PrivacyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-10">
      <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-ph-border/80 bg-ph-bg p-8 shadow-2xl">
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full border border-ph-border/60 bg-black/40 p-2 text-sm text-ph-muted transition hover:text-white"
          onClick={onClose}
          aria-label="Close privacy policy"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-white">Privacy Policy (EU, UK &amp; USA)</h2>
        <p className="mt-2 text-sm text-ph-muted">Last updated: 06/11/2025</p>
        <div className="mt-6 space-y-5 text-sm text-ph-muted">
          <p>
            <span className="block">Dear User,</span>
            This privacy policy explains how PlainHive handles your personal data in accordance with the EU General Data Protection Regulation (GDPR), the UK GDPR, and applicable U.S. laws including the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). For purposes of EU/UK data protection law, Dr. Andreas Bachmeier acts as the data controller of your personal information.
          </p>
          <section className="space-y-3">
            <h3 className="text-base font-semibold text-white">What Information We Collect</h3>
            <div>
              <p className="font-semibold text-white">Cookies</p>
              <p>
                We use cookies to enhance your experience and (where you consent) for analytics and marketing. For example, tools like Google Analytics help us understand how our website is used so we can improve it.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Email Addresses</p>
              <p>
                If you subscribe, we collect your email address to send you updates about PlainHive. We use it solely to provide relevant news and information.
              </p>
            </div>
          </section>
          <section className="space-y-3">
            <h3 className="text-base font-semibold text-white">How We Use Your Information</h3>
            <div>
              <p className="font-semibold text-white">Marketing</p>
              <p>
                Cookie data (where you consent) and your email address (where you subscribe) may be used to deliver updates and offers relevant to your interests.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Third-Party Processing</p>
              <p>
                We use trusted providers (e.g., Brevo) to store and process data strictly for the purposes described here. These providers adhere to GDPR and other applicable regulations. Examples of safeguards include:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>EU-based data centers with encrypted backups.</li>
                <li>ISO 27001:2013 information security certification (e.g., MFA, IP allow-listing).</li>
                <li>Compliance programs supporting GDPR, CASL, and CCPA/CPRA.</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal data and do not transfer it outside the EU/EEA/UK for the services listed above.
              </p>
            </div>
          </section>
          <section className="space-y-3">
            <h3 className="text-base font-semibold text-white">Legal Bases for Processing (EU/UK)</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Consent: for non-essential cookies/analytics and marketing emails.</li>
              <li>Legitimate Interests: to improve and secure our services and website, provided these interests are not overridden by your rights and freedoms.</li>
            </ul>
          </section>
          <section className="space-y-3">
            <h3 className="text-base font-semibold text-white">Data Retention</h3>
            <p>
              We retain personal data for 5 years, reviewing periodically to ensure the period remains necessary and proportionate.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="text-base font-semibold text-white">Consent and Cookie Handling</h3>
            <p>
              Non-essential cookies (e.g., Google Analytics) are not set unless you give explicit consent via our cookie banner. If you decline, they will not be used. Your decision is recorded by our cookie management tool and can be changed at any time.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="text-base font-semibold text-white">Your Rights</h3>
            <p>
              Depending on where you live, you may have the following rights:
            </p>
            <div>
              <p className="font-semibold text-white">EU/UK (GDPR/UK GDPR)</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Access, Rectification, Deletion: request a copy, correction, or deletion of your data.</li>
                <li>Portability: receive your data in a structured, commonly used, machine-readable format and transmit it to another controller.</li>
                <li>Object/Restrict: object to processing based on legitimate interests or withdraw consent for marketing at any time (e.g., unsubscribe).</li>
                <li>Complain: lodge a complaint with your local Supervisory Authority (e.g., the ICO in the UK or your EU authority).</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">California (CCPA/CPRA)</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Know/Access: request disclosure of the categories and specific pieces of personal information we collect.</li>
                <li>Delete: request deletion of personal data (subject to legal exceptions).</li>
                <li>Opt-Out of Sale/Sharing: we do not sell your personal data.</li>
                <li>Non-Discrimination: you will not be discriminated against for exercising your rights.</li>
              </ul>
            </div>
            <p>We aim to respond to requests within approximately 4 weeks.</p>
          </section>
          <section className="space-y-3">
            <h3 className="text-base font-semibold text-white">How to Contact Us</h3>
            <p>Questions or requests about this policy or your data?</p>
            <p>Email: plainhive@gmail.com</p>
            <p>
              Data Controller / Address:<br />
              Dr. Andreas Bachmeier<br />
              Finnländische Str. 7, 10439 Berlin, Germany
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function ContactModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-10">
      <div className="relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl border border-ph-border/80 bg-ph-bg p-8 shadow-2xl">
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full border border-ph-border/60 bg-black/40 p-2 text-sm text-ph-muted transition hover:text-white"
          onClick={onClose}
          aria-label="Close contact details"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-white">Contact PlainHive</h2>
        <p className="mt-2 text-sm text-ph-muted">Reach out directly and we’ll respond soon.</p>
        <dl className="mt-6 space-y-4 text-sm text-ph-muted">
          {CONTACT_DETAILS.map((detail) => (
            <div key={detail.label} className="flex flex-col gap-1">
              <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-ph-muted/70">{detail.label}</dt>
              {detail.href ? (
                <dd>
                  <a
                    href={detail.href}
                    className="text-base font-semibold text-white transition hover:text-ph-accent"
                  >
                    {detail.value}
                  </a>
                </dd>
              ) : (
                <dd className="text-base font-semibold text-white">{detail.value}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
