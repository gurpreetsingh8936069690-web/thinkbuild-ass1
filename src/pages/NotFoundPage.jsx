import React from 'react';
import { Home, BookOpen, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full space-y-6">
        <span className="text-6xl sm:text-7xl font-black text-brand-700 block">
          404
        </span>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for might have been moved, renamed, or is currently undergoing curriculum updates.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Back to Home
          </Button>
          <Button
            to="/courses"
            variant="outline"
            size="md"
            icon={BookOpen}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Browse Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
