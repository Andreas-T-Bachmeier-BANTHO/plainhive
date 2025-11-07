import { useState } from 'react';

const FEATURES = [
  'Confidence indicators',
  'Explain button',
  'Citations',
  'Domain Agents',
  'Export to PDF/Markdown/JSON'
];

export default function FeatureStrip() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const { PLAINHIVE_REPORT_BASE64 } = await import('../data/plainhiveReportBase64.js');
      const link = document.createElement('a');
      link.href = `data:application/pdf;base64,${PLAINHIVE_REPORT_BASE64.trim()}`;
      link.download = 'PlainHive report why_AI_assistants_must_change.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Report download failed', error);
      window.alert('Sorry, the report could not be downloaded. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="border-y border-ph-border/60 bg-black/30 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex w-full max-w-xl flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            {FEATURES.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-ph-border/80 bg-ph-surface/60 px-5 py-2 text-xs uppercase tracking-[0.25em] text-ph-muted md:text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="rounded-3xl border border-ph-border/80 bg-black/40 p-6 text-sm text-ph-muted shadow-subtle">
            <p className="text-base font-semibold text-white">
              Download the PlainHive Report
            </p>
            <p className="mt-3 leading-relaxed">
              AI assistants are everywhere—ChatGPT hit 100M users in two months—but reliability lags. They hallucinate, hide their reasoning, and leave professionals without control, fueling a trust gap among developers and leaders. This report calls for a reset: from black-box chatbots to transparent, multi-agent assistants that verify facts, cite sources, show confidence—and truly collaborate.
            </p>
            <button
              type="button"
              onClick={handleDownload}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-ph-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-ph-accent/80 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isDownloading}
            >
              {isDownloading ? 'Preparing download…' : 'Download now for free'}
            </button>
          </div>
        </div>
        <figure className="w-full max-w-md overflow-hidden rounded-3xl border border-ph-border/80 bg-black/40 shadow-subtle">
          <img
            src="/images/graphics/CoverReport.png"
            alt="PlainHive concept cover showing layered intelligence report"
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="px-5 pb-5 text-xs text-ph-muted md:text-sm">
            Layered briefings blend qualitative insights and quantitative checks, ready to share with stakeholders.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
