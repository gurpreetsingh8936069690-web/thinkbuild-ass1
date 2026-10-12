import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, Sparkles, BookOpen, HelpCircle } from 'lucide-react';
import { adultCourses, kidsCourses } from '../data/coursesData';
import CourseCard from '../components/courses/CourseCard';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export default function CoursesPage() {
  const [adultCategory, setAdultCategory] = useState('All');

  const filteredAdultCourses = adultCourses.filter((course) => {
    if (adultCategory === 'All') return true;
    if (adultCategory === 'Exam Prep') return course.id === 'ielts-toefl-pte-celpip';
    if (adultCategory === 'Corporate') return ['corporate-survival', 'crack-your-interview', 'dining-social-etiquette', 'advanced-english-leadership'].includes(course.id);
    if (adultCategory === 'Fluency & Personality') return ['communication-skill-training', 'personality-development'].includes(course.id);
    if (adultCategory === 'Educators') return course.id === 'eelta-training';
    return true;
  });

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-800 inline-block">
          Academic Curriculum
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Programs for Every Goal & Milestone
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Carefully structured courses led by British Council Certified Master Trainer Vidya Wankhade, designed to build permanent communicative confidence.
        </p>
      </section>

      {/* Adult & Professional Programs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800 inline-block mb-2">
              Adults & Professionals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Professional Courses & Exam Preparation
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'All', label: 'All (8)' },
              { id: 'Exam Prep', label: 'IELTS / TOEFL / PTE' },
              { id: 'Corporate', label: 'Corporate & Interview' },
              { id: 'Fluency & Personality', label: 'Fluency & Soft Skills' },
              { id: 'Educators', label: 'Teacher Training' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setAdultCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  adultCategory === tab.id
                    ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Adult Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAdultCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Academic Director & Founder Mentorship Callout */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-purple-50/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800 border border-brand-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-lg transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-4 ring-brand-500/20 dark:ring-brand-500/30 shadow-xl bg-white dark:bg-slate-800">
                <img
                  src="/assets/academy/gallery_vidya.png"
                  alt="Vidya Wankhade - Founder of The Consistent Academy"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/academy/logo2.png';
                  }}
                />
              </div>
            </div>

            <div className="md:col-span-9 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span>Mentorship & Academic Leadership</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Curriculum Designed & Guided by <span className="text-gradient">Vidya Wankhade</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Author, IELTS full course & Interview Coach, and Founder of The Consistent Academy. Over 19 years of teaching excellence, British Council Certified IELTS Master Trainer, UGC NET qualified, and certified in TOEFL, PET, and TESOL/TEFL. Author of three published works including <em>“Cakewalk IELTS”</em>, <em>“Reading Detective”</em>, and <em>“101 Management Books You'll Never Read But Should”</em>.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Button
                  to="/#founder"
                  variant="primary"
                  size="sm"
                  icon={ArrowRight}
                >
                  Meet Founder, Journey & Books
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="sm"
                >
                  Book 1-on-1 Guidance
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids & Young Learners Section */}
      <section className="bg-slate-100/70 dark:bg-slate-900/40 py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Young Learners (Ages 5 – 17)"
            title="Courses for Kids: Expressive, Confident Minds"
            subtitle="Fun, interactive, and structured foundation courses designed specially to help young learners speak with clarity, read with joy, and eliminate stage fear early."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kidsCourses.map((kid) => (
              <div
                key={kid.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <img
                      src={kid.image}
                      alt={kid.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/academy/courses_img8.png';
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                        {kid.duration}
                      </span>
                      <span className="text-sm font-extrabold text-brand-700 dark:text-brand-400">
                        {kid.price}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {kid.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                      {kid.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                        Key Learning Takeaways:
                      </p>
                      {kid.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    to={`/contact?course=${encodeURIComponent(kid.title)}`}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                    icon={ArrowRight}
                  >
                    Enroll in {kid.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Consultation Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-50 dark:bg-slate-900 border border-brand-200/90 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4 transition-colors">
          <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Not Sure Which Course to Choose?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Book a complimentary 15-minute consultation with our academic advisors. We will assess your target timeline, university requirements, or fluency objectives and prescribe the ideal learning plan.
          </p>
          <div className="pt-2">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
