import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import { track } from '../lib/analytics.js';
import { downloadReport } from '../lib/downloadReport.js';

const REPORT_FILENAME = 'PlainHive_Report_Why_AI_Assistants_Must_Change_0825_v2.pdf';

export default function Report() {
  const handleDownload = () => {
    track('report_download', { placement: 'report_section' });
    downloadReport(REPORT_FILENAME);
  };

  return (
    <Section
      id="report"
      eyebrow="Free research report"
      title="Why AI assistants must change"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        <div className="order-2 space-y-6 text-lg text-ph-muted lg:order-1">
          <p>
            AI assistants exploded into the mainstream—ChatGPT hit 100M users in just two months—but popularity has outpaced reliability.
            Too often they hallucinate with confidence, hide their reasoning, and leave professionals without control.
          </p>
          <p>
            The trust gap is real: 46% of developers don’t trust AI output, 91% of leaders feel unprepared to deploy it responsibly,
            and over 40% cite poor explainability as a blocker.
          </p>
          <p>
            This report makes the case for a reset: moving from black-box chatbots to transparent, multi-agent assistants that verify facts,
            expose sources and confidence, and collaborate with the user. If AI is to earn a seat at the professional table, it must show its work—and invite us into it.
          </p>
          <Button
            onClick={handleDownload}
            className="w-full sm:w-auto"
          >
            Download now for free
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl border border-ph-border/80 bg-black/40 shadow-subtle">
            <img
              src="/images/graphics/CoverReport.png"
              alt="PlainHive report cover"
              className="w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
