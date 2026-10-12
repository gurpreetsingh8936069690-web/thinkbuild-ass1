import React, { useState, useEffect, useRef } from 'react';
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight, Play, Pause, Grid, Film, Sparkles } from 'lucide-react';
import { galleryData } from '../../data/galleryData';

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('reel'); // 'reel' | 'grid'
  const [isPaused, setIsPaused] = useState(false);
  const reelRef = useRef(null);

  const categories = ['All', 'Classroom', 'Speaking', 'Workshops', 'Events', 'Milestones'];

  const filteredImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  // Scroll controls for panoramic reel
  const scrollReel = (direction) => {
    if (reelRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      reelRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching original website */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200/80 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Authentic Academy Moments</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learning in{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6C63FF, #38B2AC)' }}
            >
              Action
            </span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Real classroom moments, interactive speech debates, diagnostic feedback, and student milestone celebrations at The Consistent Academy.
          </p>
        </div>

        {/* Interactive Controls & View Toggle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-700 dark:bg-brand-600 text-white shadow-sm ring-2 ring-brand-700/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Reel / Grid Switch & Navigation */}
          <div className="flex items-center gap-2">
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center border border-slate-200/80 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setViewMode('reel')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'reel'
                    ? 'bg-white dark:bg-slate-700 text-brand-700 dark:text-brand-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Panoramic Stream View"
              >
                <Film className="w-3.5 h-3.5" />
                <span>Reel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-700 text-brand-700 dark:text-brand-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Photo Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            {viewMode === 'reel' && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollReel('left')}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollReel('right')}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* View Mode 1: Panoramic Infinite Reel */}
        {viewMode === 'reel' ? (
          <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-4 sm:p-6 shadow-2xl border border-slate-800">
            {/* Ambient Purple Background Glow */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div 
              ref={reelRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {filteredImages.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className="group relative flex-shrink-0 w-72 sm:w-80 md:w-96 h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 cursor-pointer border border-slate-800/80 shadow-lg hover:shadow-2xl hover:border-brand-500/60 transition-all duration-300"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <img
                    src={item.src}
                    alt={item.title || "The Consistent Academy classroom photo"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/academy/gallery_v1.png';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity p-5 flex flex-col justify-end text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-teal-300 backdrop-blur-sm uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-slate-300 font-mono">
                        #{idx + 1}
                      </span>
                    </div>
                    
                    <h4 className="text-sm sm:text-base font-bold text-white line-clamp-1 group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 hidden sm:block">
                      {item.caption}
                    </p>

                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-teal-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to enlarge photo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reel Status & Hint */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                <span>Showing {filteredImages.length} authentic classroom photographs</span>
              </span>
              <span className="hidden sm:inline-block">
                Drag or scroll horizontally to explore • Click any image to expand
              </span>
            </div>
          </div>
        ) : (
          /* View Mode 2: Full Responsive Photo Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 cursor-pointer border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-brand-500/50 transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/academy/gallery_v1.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider mb-0.5">
                    {item.category}
                  </span>
                  <p className="text-xs sm:text-sm font-bold line-clamp-1">
                    {item.title}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1 text-[11px] text-slate-200">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal with Full-Screen Navigation */}
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedImageIndex(null)}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[92vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-3 sm:p-5 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header Bar */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-800 text-white">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold uppercase tracking-wider">
                    {filteredImages[selectedImageIndex].category}
                  </span>
                  <span className="text-xs text-slate-400">
                    Photo {selectedImageIndex + 1} of {filteredImages.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedImageIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1))}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImageIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1))}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImageIndex(null)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-900/60 text-white transition-colors ml-2"
                    aria-label="Close image preview"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Expanded Image */}
              <div className="flex-1 min-h-[50vh] max-h-[70vh] flex items-center justify-center overflow-hidden my-3 rounded-2xl bg-black">
                <img
                  src={filteredImages[selectedImageIndex].src}
                  alt={filteredImages[selectedImageIndex].title}
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </div>

              {/* Caption Footer */}
              <div className="pt-2 px-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-white">
                <div>
                  <h5 className="font-bold text-sm sm:text-base text-white">
                    {filteredImages[selectedImageIndex].title}
                  </h5>
                  <p className="text-xs text-slate-400">
                    {filteredImages[selectedImageIndex].caption}
                  </p>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  The Consistent Academy • Authentic Media
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
