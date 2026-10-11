import React, { useEffect } from 'react';
import { X, Clock, CheckCircle2, BookOpen, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function CourseModal({ course, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-900 to-brand-700 text-white p-6 sm:p-8 flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-brand-100">
              {course.subtitle || "Master Program"}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-brand-200">
              <Clock className="w-3.5 h-3.5" />
              {course.hours}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
            {course.title}
          </h3>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-teal-300">
              {course.price}
            </span>
            <span className="text-xs text-brand-200">
              Comprehensive Course Fee
            </span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
          {/* Target Audience & Promise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.targetAudience && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-brand-800 tracking-wider mb-1.5">
                  <Users className="w-4 h-4 text-brand-600" />
                  Target Audience
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.targetAudience}
                </p>
              </div>
            )}
            {course.promise && (
              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/70">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-teal-800 tracking-wider mb-1.5">
                  <Target className="w-4 h-4 text-teal-600" />
                  Our Learning Promise
                </div>
                <p className="text-sm text-teal-900 leading-relaxed font-medium">
                  {course.promise}
                </p>
              </div>
            )}
          </div>

          {/* Highlights */}
          {course.highlights && course.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Course Highlights & Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {course.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Module Syllabus */}
          {course.moduleDetails && course.moduleDetails.length > 0 && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-600" />
                Detailed Curriculum & Topics
              </h4>
              <div className="space-y-3">
                {course.moduleDetails.map((module, mIdx) => (
                  <div key={mIdx} className="border border-slate-200 rounded-xl p-4 bg-white hover:border-brand-200 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-bold text-slate-900 text-sm">
                        {module.title}
                      </span>
                      {module.duration && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                          {module.duration}
                        </span>
                      )}
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                      {module.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="text-brand-500 font-bold">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Need customized batch timing? Talk to our mentors directly.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Close
            </button>
            <Button
              to={`/contact?course=${encodeURIComponent(course.title)}`}
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              icon={ArrowRight}
              onClick={onClose}
            >
              Enquire For This Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
