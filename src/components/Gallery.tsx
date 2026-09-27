'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn, MapPin } from 'lucide-react';
import { galleryImages, galleryCategories } from '@/data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#faf8f5] relative border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Real Seva Photography
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3 mb-2">
            Hamari Seva Gallery
          </h2>
          <p className="text-sm text-stone-600 font-sans">
            Vedic aur dharmik sevaon ki authentic jhalakiyan.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 justify-start lg:justify-center scrollbar-none">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200/60 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric / Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-200/80 soft-shadow-hover relative flex flex-col justify-between ${
                idx % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-stone-900 text-[10px] font-bold px-3 py-1 rounded-full border border-stone-200">
                  {image.category}
                </div>
              </div>

              <div className="p-4 bg-white">
                <h3 className="font-serif text-sm font-bold text-stone-900 truncate">
                  {image.caption}
                </h3>
                {image.location && (
                  <p className="text-stone-500 text-xs flex items-center gap-1 mt-1 font-sans">
                    <MapPin className="w-3 h-3 text-[#c2410c]" />
                    <span>{image.location}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-stone-500 font-sans">
            No photos found in "{activeCategory}" category.
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxIndex !== null && currentImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-black/50">
                <div>
                  <span className="text-[#c2410c] text-xs font-bold uppercase tracking-widest block">
                    {currentImage.category}
                  </span>
                  <h3 className="text-white font-serif text-base sm:text-lg font-bold">
                    {currentImage.caption}
                  </h3>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black max-h-[70vh] flex items-center justify-center">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-[#c2410c] transition-colors border border-stone-700"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-[#c2410c] transition-colors border border-stone-700"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 bg-black/50 flex items-center justify-between text-xs text-stone-400 font-sans">
                <span>{currentImage.alt}</span>
                <span>
                  {lightboxIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
