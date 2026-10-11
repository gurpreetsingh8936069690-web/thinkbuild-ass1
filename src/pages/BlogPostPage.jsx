import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { blogsData } from '../data/blogsData';
import Button from '../components/common/Button';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogsData.find((b) => b.slug === id || b.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="py-10 sm:py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link & Category */}
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-800 border border-brand-200">
            {post.category}
          </span>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover border border-slate-200"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/academy/logo2.png';
                }}
              />
              <div>
                <span className="font-bold text-slate-900 block leading-tight">
                  {post.author}
                </span>
                <span className="text-xs text-slate-400">
                  {post.authorRole}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Lead Excerpt Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-100 border-l-4 border-brand-600 text-slate-700 italic text-base sm:text-lg leading-relaxed">
          "{post.excerpt}"
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          {post.content.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-brand-50/60 border border-brand-200/90 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-brand-300 shadow-sm flex-shrink-0"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/academy/logo2.png';
            }}
          />
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider block">
              About the Author
            </span>
            <h4 className="text-lg font-bold text-slate-900">
              {post.author}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              British Council Certified IELTS Master Trainer with over 19 years of teaching experience. Author of <em>'Cakewalk IELTS'</em> and founder of The Consistent Academy in Pune, Maharashtra.
            </p>
          </div>
        </div>

        {/* Related Course Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block mb-1">
              Put Theory Into Practice
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Enroll in Personalized Coaching
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              Experience one-on-one speaking mock tests, rubric writing corrections, and consistent deliberate practice with Vidya Wankhade.
            </p>
          </div>

          <Button
            to="/courses"
            variant="secondary"
            size="md"
            icon={ArrowRight}
            className="flex-shrink-0"
          >
            Explore Courses
          </Button>
        </div>
      </article>
    </div>
  );
}
