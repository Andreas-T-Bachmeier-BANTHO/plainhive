import { useState } from 'react';
import Section from '../components/Section.jsx';
import { track } from '../lib/analytics.js';

const QUESTIONS = [
  {
    question: 'Is PlainHive another chatbot?',
    answer:
      'No. It’s a multi-agent, transparency-first assistant that shows its work and lets you steer via roles. You see the plan, the debate, and the evidence before you sign off.'
  },
  {
    question: 'How does it reduce hallucinations?',
    answer:
      'Separate agents cross-verify claims and flag uncertainty. Every answer carries citations, commentary, and a confidence badge so you know where facts came from.'
  },
  {
    question: 'Do I need to be technical?',
    answer:
      'Not at all. Start in Consumer mode for quick answers and switch to Collaborator or Judge when you want oversight.'
  },
  {
    question: 'Will there be domain-specific versions?',
    answer:
      'Yes. Domain Agents for legal, consulting, and policy work are part of the roadmap and available to early partners.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" eyebrow="Answers" title="FAQ">
      <div className="mx-auto max-w-3xl divide-y divide-ph-border/60 rounded-3xl border border-ph-border/60 bg-black/30">
        {QUESTIONS.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <button
              key={item.question}
              className="w-full text-left"
              onClick={() => {
                setOpenIndex(isOpen ? -1 : index);
                track('faq_toggle', { question: item.question, open: !isOpen });
              }}
            >
              <div className="px-6 py-5">
                <div className="flex items-center justify-between gap-6">
                  <p className="text-base font-medium text-white md:text-lg">{item.question}</p>
                  <span className="text-ph-muted">{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && <p className="mt-3 text-sm text-ph-muted md:text-base">{item.answer}</p>}
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
