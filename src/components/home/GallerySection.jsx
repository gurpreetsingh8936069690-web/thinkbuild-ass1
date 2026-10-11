import React, { useState } from 'react';
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../../data/galleryData';
import SectionHeading from '../common/SectionHeading';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Classroom', 'Speaking', 'Workshops', 'Events', 'Milestones'];

  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter || (filter === 'Classroom' && (img.category === 'Classroom' || img.category === 'IELTS')));

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Life at the Academy"
          title="Learning in Action: Authentic Moments"
          subtitle="Genuine classroom practice, student speech rounds, stage presentations, and milestone celebrations at The Consistent Academy in Pune."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-brand-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.slice(0, 12).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/academy/gallery_v1.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-semibold line-clamp-1">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-200">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] max-w-full object-contain"
                />
              </div>

              <div className="pt-3 px-2 flex items-center justify-between text-xs sm:text-sm text-slate-700">
                <span className="font-bold text-slate-900">{selectedImage.title}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 font-semibold text-xs">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
