import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Are classes conducted offline in Pune or online?",
      answer: "We offer both! In-person classroom batches are conducted in Pune, Maharashtra, featuring interactive group discussions, podium speeches, and live workshops. We also deliver highly engaging, live interactive online cohorts for outstation students and working professionals, complete with 1-on-1 speaking evaluations over video."
    },
    {
      question: "Can I enroll for a single skill module (e.g. only Writing or only Speaking)?",
      answer: "Yes, absolutely! While our full 4-skill preparation program is ₹12,000 (20 hours), candidates targeting a specific sectional boost can enroll in an individual module (Speaking, Writing, or Reading) for ₹4,000 (7 intensive hours of dedicated coaching and assessment)."
    },
    {
      question: "How long does it typically take to achieve an IELTS Band 7.5+?",
      answer: "Most students achieve their target score within 4 to 8 weeks of consistent practice. Upon enrollment, Vidya Wankhade conducts a comprehensive diagnostic assessment to benchmark your starting band and builds a customized preparation schedule tailored to your exam date."
    },
    {
      question: "What is the difference between Academic and General Training IELTS?",
      answer: "Academic IELTS is designed for students applying for undergraduate or postgraduate university admissions abroad. General Training IELTS is required for migration, Express Entry / PR (such as Canada PR or Australia skilled migration), and work permits. Our curriculum trains you specifically for your required exam format."
    },
    {
      question: "Are mock tests and study materials included in the course fees?",
      answer: "Yes, 100%. All study materials, authentic practice tests, official listening audios, personalized writing rubric feedback, and one-on-one simulated speaking interviews are fully covered in the course fees with zero hidden charges."
    },
    {
      question: "What age groups are covered under the Kids & Young Learner programs?",
      answer: "Our kids programs cater to young learners aged 5 to 17 years. Programs include Elocution, TedX/Toastmaster Stage Training, Grammar Foundations, Creative Writing, and the popular monthly Reading Club."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about course structures, offline vs. online batches in Pune, fee schedules, and IELTS preparation with Vidya Wankhade."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-300 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 border-brand-200 dark:border-brand-800' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800 pt-4 bg-white dark:bg-slate-900/90 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-brand-50 dark:bg-slate-900 border border-brand-200/80 dark:border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Have a specific question about your target university or migration timeline?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Speak directly with Vidya Wankhade and our counseling team in Pune.
            </p>
          </div>
          <Button to="/contact" variant="primary" size="md" className="flex-shrink-0">
            Ask Our Mentor
          </Button>
        </div>
      </div>
    </section>
  );
}
