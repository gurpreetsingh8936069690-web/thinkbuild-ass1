import React from 'react';
import { ArrowRight, BookOpen, Compass, Award } from 'lucide-react';
import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FounderSection from '../components/home/FounderSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import CourseCard from '../components/courses/CourseCard';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import FAQSection from '../components/home/FAQSection';
import { adultCourses } from '../data/coursesData';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Pedagogical Methodology & Trust */}
      <WhyChooseUs />

      {/* 3. Featured Courses Preview */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flagship Programs"
            title="Learn with Clarity & Confidence"
            subtitle="Explore our comprehensive curriculum designed to build practical communication fluency, examination mastery, and corporate success."
            subtitleClassName="text-teal-700 dark:text-teal-300 font-medium"
          />

          {/* First 4 professional courses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adultCourses.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-teal-700 dark:text-teal-300 font-semibold text-sm mb-4">
              Explore 8 specialized adult modules and 5 dedicated young-learner programs.
            </p>
            <Button
              to="/courses"
              variant="outline"
              size="lg"
              icon={ArrowRight}
            >
              View Full Course Catalogue
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Founder Profile, Timeline & Authored Books */}
      <FounderSection />

      {/* 5. Authentic Classroom Gallery */}
      <GallerySection />

      {/* 6. Authentic Student Testimonials */}
      <TestimonialsSection />

      {/* 7. Frequently Asked Questions */}
      <FAQSection />

      {/* 8. Final Action Callout Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-teal-300 border border-white/20 inline-block">
            Start Your Transformation
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Achieve Your Target Band Score & Unlock Global Opportunities?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a personal consultation with Vidya Wankhade and the academic advisory team at The Consistent Academy.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto font-bold shadow-md"
            >
              Book Free Consultation
            </Button>
            <Button
              to="/tests"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Take Free Practice Test
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
