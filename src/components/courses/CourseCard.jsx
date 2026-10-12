import React, { useState } from 'react';
import { Clock, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import CourseModal from './CourseModal';

export default function CourseCard({ course }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group hover:border-brand-300 dark:hover:border-brand-500">
        {/* Course Thumbnail Image */}
        <div className="relative h-44 sm:h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/academy/courses_img1.png';
            }}
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-sm">
              {course.hours}
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-700 dark:bg-brand-600 text-white shadow">
              {course.price}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            {course.subtitle && (
              <span className="text-xs font-bold text-teal-700 dark:text-teal-400 tracking-wider uppercase block mb-1">
                {course.subtitle}
              </span>
            )}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">
              {course.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Highlights preview */}
          {course.highlights && (
            <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              {course.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-brand-500 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-300 bg-slate-50/50 dark:bg-slate-800/80 transition-colors flex items-center justify-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Syllabus</span>
            </button>
            <Button
              to={`/contact?course=${encodeURIComponent(course.title)}`}
              variant="primary"
              size="sm"
              className="w-full justify-center"
              icon={ArrowRight}
            >
              Enroll
            </Button>
          </div>
        </div>
      </div>

      {/* Syllabus Modal */}
      <CourseModal
        course={course}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
