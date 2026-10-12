import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Globe, Sparkles } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Auto-slide every 5000ms matching original website Z4e component
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-20 sm:py-28 bg-gradient-to-b from-brand-50/30 via-purple-50/20 to-brand-50/30 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Z4e */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-600 dark:text-brand-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Stories of <span className="text-gradient">Success</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Real outcomes from students and working professionals who achieved their target band scores and unlocked higher education and permanent residency abroad.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="rounded-3xl bg-gradient-to-br from-brand-50/90 via-white to-purple-50/60 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-800 p-8 sm:p-12 shadow-neu border border-brand-200/80 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden transition-all duration-300">
            
            {/* Top Row: Quote Icon & Badges */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <Quote className="w-12 h-12 sm:w-14 sm:h-14 text-brand-600/30 dark:text-brand-400/30 flex-shrink-0" />
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-100 dark:bg-brand-950/80 text-brand-900 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                  {activeTestimonial.band}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>{activeTestimonial.destination}</span>
                </span>
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <div className="space-y-4 my-4">
              <p className="text-lg sm:text-2xl text-slate-800 dark:text-slate-100 italic leading-relaxed font-normal">
                "{activeTestimonial.text}"
              </p>

              {/* 5 Rating Stars */}
              <div className="flex gap-1 pt-2">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Bottom Row: Student Profile & Slide Controls */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                  {activeTestimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {activeTestimonial.role}
                </p>
                <p className="text-xs sm:text-sm text-brand-600 dark:text-brand-400 font-semibold">
                  {activeTestimonial.course}
                </p>
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-brand-700 dark:hover:text-brand-300 transition-colors shadow-2xs hover:shadow-md"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-brand-700 dark:hover:text-brand-300 transition-colors shadow-2xs hover:shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Pagination Indicators & Student Selector Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {testimonialsData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentIndex === idx
                    ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-sm ring-2 ring-brand-700/20 font-bold'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Quick Auto-play Hint */}
          <p className="text-center text-[11px] text-slate-400 mt-3 font-medium">
            Auto-advancing every 5 seconds • Hover to pause
          </p>
        </div>

      </div>
    </section>
  );
}
