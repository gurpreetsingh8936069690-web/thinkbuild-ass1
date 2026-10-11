import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
          light 
            ? 'bg-white/10 text-brand-200 border border-white/20' 
            : 'bg-brand-50 text-brand-700 border border-brand-200/60'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-200' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
