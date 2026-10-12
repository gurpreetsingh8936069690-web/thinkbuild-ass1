import React from 'react';
import { ShieldCheck, Brain, Target, MessageSquareText, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Master Trainer Mentorship",
      desc: "Learn directly under British Council Certified IELTS Master Trainer Vidya Wankhade with 19+ years of proven pedagogy."
    },
    {
      icon: Brain,
      title: "Real Cognitive Fluency",
      desc: "We discard rote memorization. We train you to think in English and speak spontaneously without mental translation lag."
    },
    {
      icon: Target,
      title: "Rigorous Writing Rubrics",
      desc: "Detailed band-by-band feedback on Task 1 and Task 2 essays, eliminating persistent grammatical and lexical bottlenecks."
    },
    {
      icon: MessageSquareText,
      title: "1-on-1 Speaking Simulations",
      desc: "Realistic examiner mock rounds, timing controls, and pronunciation drills to ensure you perform calmly under exam pressure."
    },
    {
      icon: Sparkles,
      title: "Lifelong Ecosystem",
      desc: "From the College Consistent Communicators Club to corporate dinner etiquette masterclasses and kids elocution programs."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Consistent Advantage"
          title="Why Aspiring Leaders Choose The Consistent Academy"
          subtitle="A structured, high-accountability learning ecosystem designed to turn English communication from a source of anxiety into your greatest competitive strength."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 flex items-center justify-center mb-5 border border-brand-100 dark:border-brand-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Pedagogical Standard</span>
                </div>
              </div>
            );
          })}

          {/* Consultation Highlight Card */}
          <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 dark:from-slate-900 dark:via-brand-950 dark:to-brand-900 rounded-2xl p-7 text-white shadow-md border border-transparent dark:border-brand-800/50 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-brand-100 inline-block mb-4">
                Personalized Assessment
              </span>
              <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
                Not sure where your current English level stands?
              </h3>
              <p className="text-xs sm:text-sm text-brand-100 leading-relaxed">
                Take our free 12-minute online grammar & diagnostic test or book an individual diagnostic session with our academic advisor.
              </p>
            </div>

            <div className="pt-6">
              <Button
                to="/tests"
                variant="white"
                size="md"
                className="w-full justify-center font-bold"
              >
                Take Diagnostic Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
