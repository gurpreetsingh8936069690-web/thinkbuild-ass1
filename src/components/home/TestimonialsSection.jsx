import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Globe } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import SectionHeading from '../common/SectionHeading';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Student Outcomes"
          title="Stories of Success & Global Achievements"
          subtitle="Real testimonials from candidates who achieved their required IELTS band scores and unlocked higher studies and careers across Canada, Germany, Australia, and the UK."
        />

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80 relative overflow-hidden">
          <div className="absolute top-6 right-6 text-brand-100 pointer-events-none">
            <Quote className="w-20 h-20 rotate-12" />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Stars & Band Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-800 border border-brand-200">
                  {activeTestimonial.band}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  {activeTestimonial.destination}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl text-slate-700 italic leading-relaxed font-normal">
              "{activeTestimonial.text}"
            </p>

            {/* Author Profile */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-slate-900 text-lg">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {activeTestimonial.role} • {activeTestimonial.course}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-brand-700 transition-colors shadow-2xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-brand-700 transition-colors shadow-2xs"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Dots & Quick Selector */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                currentIndex === idx
                  ? 'bg-brand-700 text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
