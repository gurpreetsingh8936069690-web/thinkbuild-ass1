import React, { useState } from 'react';
import { Quote, ExternalLink, Sparkles, CheckCircle, Award } from 'lucide-react';
import { founderData } from '../../data/founderData';

// Interactive 3D Flip Card for Published Books (Matches Y4e component)
function BookCard({ book, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[520px] perspective-1000 group select-none"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className="relative w-full h-full preserve-3d transition-transform duration-700 ease-out"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Face: Book Cover */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-brand-50/30 p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex-1 flex items-center justify-center p-2">
            <div className="relative w-full max-w-[260px] aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-slate-200 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 bg-white">
              <img
                src={book.imagePath}
                alt={book.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/academy/courses_img1.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </div>
          </div>

          <div className="text-center pt-4">
            <h3 className="text-xl font-bold text-slate-900 leading-tight mb-1">
              {book.title}
            </h3>
            <p className="text-xs text-brand-600 font-semibold tracking-wide">
              Hover to explore details & buy
            </p>
          </div>
        </div>

        {/* Back Face: Description & Verified Store Links */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl border border-brand-200 bg-gradient-to-br from-brand-50/90 via-white to-purple-50/50 p-6 flex flex-col justify-between"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Corner Decorative Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-500/40 rounded-tl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-500/40 rounded-br-2xl pointer-events-none" />

          <div>
            <h3 className="text-2xl font-bold text-gradient mb-3 leading-tight">
              {book.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {book.description}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-brand-100">
            <p className="text-xs uppercase tracking-wider text-brand-700 font-bold mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Available on:
            </p>
            <div className="space-y-2.5">
              {book.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 px-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-brand-500 hover:shadow-md hover:bg-brand-50/40 transition-all group/link"
                >
                  <span className="text-xs font-semibold text-slate-800 group-hover/link:text-brand-700 transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-500 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Touch Screen Toggle Button */}
      <div className="md:hidden mt-3 text-center">
        <button
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
          className="text-xs font-bold text-brand-600 hover:text-brand-700 underline underline-offset-2 py-1 px-3 bg-brand-50 rounded-full"
        >
          {isFlipped ? "← Show book cover" : "View description & buy links →"}
        </button>
      </div>
    </div>
  );
}

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-gradient-to-b from-white via-purple-50/20 to-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Meet the Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200/80 text-brand-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-brand-600" />
              <span>Meet the Founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Vidya <span className="text-gradient">Wankhade</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Author, IELTS full course(speaking+reading+writing) & Interview Coach, and Founder of <strong className="text-slate-900 font-bold">The Consistent Academy</strong>. With over <strong className="text-slate-900 font-bold">19 years of experience</strong>, Vidya has helped students, professionals, and aspiring leaders communicate with clarity, confidence, and impact.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A <strong className="text-slate-900 font-bold">British Council Certified IELTS Master Trainer</strong>, <strong className="text-slate-900 font-bold">Certified Soft Skills & Corporate Trainer</strong>, and <strong className="text-slate-900 font-bold">Train-the-Trainer professional</strong>, she blends language mastery with real-world communication strategies — helping learners stand out, not just speak up.
            </p>

            {/* Paragraph 3 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Vidya Wankhade holds <strong className="text-slate-900 font-bold">B.Sc, B.Ed, and MPM</strong> qualifications and is <strong className="text-slate-900 font-bold">UGC NET qualified</strong>. She is also certified as a <strong className="text-slate-900 font-bold">TOEFL Trainer, PET Trainer</strong>, and is <strong className="text-slate-900 font-bold">TESOL/TEFL certified</strong>, bringing global standards into every classroom she leads.
            </p>

            {/* Paragraph 4 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              She is the author of <strong className="text-slate-900 font-bold">three books</strong>, including the widely appreciated <em className="text-slate-900 font-medium">“Cakewalk IELTS”</em>, <em className="text-slate-900 font-medium">“Reading Detective – Solving Comprehension Mysteries for Kids”</em>, and <em className="text-slate-900 font-medium">“101 Management Books You’ll Never Read But Should”</em>.
            </p>

            {/* Verified Certifications Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              {founderData.certifications.slice(0, 5).map((cert, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>{cert}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Founder Photo & Quote Card Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Circular Founder Portrait */}
              <div className="w-full aspect-square rounded-full shadow-2xl bg-gradient-to-br from-brand-100 via-white to-purple-100 p-2 sm:p-3 ring-8 ring-brand-500/10 overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src={founderData.image}
                    alt="Vidya Wankhade - Founder of The Consistent Academy"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/academy/logo2.png';
                    }}
                  />
                </div>
              </div>

              {/* Quote Card */}
              <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-brand-50 via-white to-purple-50/60 border border-brand-200/80 shadow-lg relative">
                <div className="flex gap-4 items-start">
                  <Quote className="w-8 h-8 text-brand-600 flex-shrink-0 mt-0.5 opacity-90" />
                  <div className="space-y-2">
                    <p className="text-slate-800 text-sm sm:text-base italic leading-relaxed font-medium">
                      “{founderData.quote}”
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-brand-800">
                      — {founderData.quoteAuthor}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 2. Journey of Excellence Section (X4e) */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-brand-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              Milestones & Achievements
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Journey of Excellence
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Nearly two decades of pedagogical leadership, international certifications, and institutional growth.
            </p>
          </div>

          {/* Timeline Track & Cards */}
          <div className="relative px-2 sm:px-4">
            
            {/* Connecting Track Line for Desktop & Tablet */}
            <div className="hidden md:block absolute top-7 left-8 right-8 h-1 bg-gradient-to-r from-brand-200 via-brand-500 to-brand-300 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-3 lg:gap-4 relative z-10">
              {founderData.timeline.map((item, idx) => (
                <div 
                  key={item.year}
                  className="flex flex-col items-center group"
                >
                  {/* Year Circle Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 rounded-full bg-white shadow-md border-2 border-brand-500/80 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-brand-600 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-brand-700 font-extrabold text-xs sm:text-sm">
                      {item.year}
                    </span>
                  </div>

                  {/* Achievement Card */}
                  <div className="w-full p-3 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs group-hover:shadow-md group-hover:border-brand-400 group-hover:-translate-y-1 transition-all duration-300 text-center min-h-[110px] flex flex-col justify-center">
                    <div className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <p 
                          key={aIdx} 
                          className="text-xs sm:text-xs font-bold text-slate-800 leading-snug group-hover:text-brand-700 transition-colors"
                        >
                          {ach}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Published Works / Books by Vidya Wankhade Section (Q4e & Y4e) */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              Published Works
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Books by <span className="text-gradient">Vidya Wankhade</span>
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Comprehensive reference guides simplifying language acquisition, test strategy, and leadership insight.
            </p>
          </div>

          {/* 3D Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {founderData.books.map((book, idx) => (
              <BookCard key={idx} book={book} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
