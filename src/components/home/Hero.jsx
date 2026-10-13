import React from 'react';
import { ArrowRight, CheckCircle, Award, Star, Compass, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  const stats = [
    { value: '19+', label: 'Years of Mentorship Excellence' },
    { value: '7.5+', label: 'Top Band Score Achievements' },
    { value: '13', label: 'Specialized Courses (Adults & Kids)' },
    { value: '100%', label: 'Practical & Personalized Focus' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-brand-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/80 pt-8 sm:pt-14 pb-16 lg:pb-24 border-b border-slate-100 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 border border-brand-200/80 dark:border-brand-800 shadow-xs">
              <Award className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>British Council Certified Master Trainer Mentorship</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Master English with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-teal-600 dark:from-brand-400 dark:via-teal-300 dark:to-teal-400">
                Clarity & Confidence
              </span>
            </h1>

            {/* Factual Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized IELTS, TOEFL, PTE, spoken English, corporate etiquette, and interview training in Pune, Maharashtra. Built on over 19 years of proven pedagogical methodology by founder <span className="font-semibold text-slate-800 dark:text-slate-200">Vidya Wankhade</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                to="/courses"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-sm"
              >
                Explore Courses
              </Button>
              <Button
                to="/tests"
                variant="secondary"
                size="lg"
                icon={Compass}
                className="w-full sm:w-auto"
              >
                Free Practice Test
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-slate-300 dark:border-slate-500 text-slate-800 dark:text-white bg-white/80 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/90 hover:border-brand-500 dark:hover:border-teal-400 shadow-sm transition-all"
              >
                Book Consultation
              </Button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Zero Rote Learning</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>One-on-One Speaking Mock Rounds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Structured Writing Assessments</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Academy Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xl border border-slate-200/80 dark:border-slate-800 transition-colors">
                <div className="flex items-center gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <img
                    src="/assets/academy/gallery_vidya.png"
                    alt="Vidya Wankhade - Founder of The Consistent Academy"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-brand-200 dark:border-brand-800 shadow-sm"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/academy/logo2.png';
                    }}
                  />
                  <div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 uppercase mb-1">
                      <Star className="w-3 h-3 fill-brand-600 text-brand-600 dark:fill-brand-400 dark:text-brand-400" />
                      Lead Mentor
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      Vidya Wankhade
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Author & Master IELTS Coach
                    </p>
                    <p className="text-xs text-brand-700 dark:text-brand-400 font-semibold mt-0.5">
                      19+ Years Teaching Experience
                    </p>
                  </div>
                </div>

                <div className="py-5 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0" />
                    <span>British Council Certified IELTS Master Trainer & UGC NET Qualified</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0" />
                    <span>Author of 3 Books: 'Cakewalk IELTS', 'The Reading Detective', and '101 Management Books'</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 flex-shrink-0" />
                    <span>B.Sc, B.Ed, MPM, TOEFL Trainer, PET Trainer & TESOL/TEFL Certified</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href="#founder"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('founder');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-brand-700 dark:text-brand-400 hover:text-brand-900 dark:hover:text-brand-300 underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>Meet Founder & Books</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Button
                    to="/contact"
                    variant="accent"
                    size="sm"
                    className="font-bold"
                  >
                    Contact Academy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <div className="text-2xl sm:text-4xl font-extrabold text-brand-800 dark:text-brand-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
