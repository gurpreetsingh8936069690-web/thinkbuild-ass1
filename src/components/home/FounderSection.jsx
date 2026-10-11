import React from 'react';
import { Award, BookOpen, ExternalLink, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { founderData } from '../../data/founderData';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function FounderSection() {
  return (
    <section id="founder" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Leadership & Expertise"
          title="Meet the Founder: Vidya Wankhade"
          subtitle="British Council Certified Master Trainer, Author, and Academic Director with over 19 years of dedicated pedagogical leadership."
        />

        {/* Founder Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Founder Photo & Quick Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-lg border-4 border-white ring-1 ring-slate-200">
              <img
                src={founderData.image}
                alt="Vidya Wankhade - Founder of The Consistent Academy"
                className="w-full h-auto object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/academy/logo2.png';
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6 text-white">
                <p className="font-extrabold text-xl">{founderData.name}</p>
                <p className="text-xs text-brand-300 font-medium">{founderData.headline}</p>
              </div>
            </div>

            {/* Certifications List */}
            <div className="mt-6 w-full max-w-sm bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-600" />
                Verified Credentials
              </h4>
              {founderData.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio Text & Academic Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              {founderData.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Milestones Timeline */}
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-6 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-600" />
                Pedagogical Journey (2007 – 2025)
              </h4>

              <div className="space-y-4">
                {founderData.timeline.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="px-2.5 py-1 rounded-lg bg-brand-100 text-brand-900 font-extrabold text-xs tracking-wider flex-shrink-0 mt-0.5">
                      {item.year}
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Published Works Section */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60 inline-block mb-3">
              Published Literature
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Books Authored by Vidya Wankhade
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Simplifying complex grammar rules and test strategies into accessible, student-friendly reading material.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founderData.books.map((book, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="h-64 bg-slate-200 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="max-h-full max-w-full object-contain rounded-md shadow-md transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/academy/courses_img1.png';
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider block mb-1">
                      {book.subtitle}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 leading-snug">
                      {book.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-200/60 flex flex-wrap gap-2">
                  {book.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:border-brand-500 hover:text-brand-700 transition-colors shadow-2xs"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
