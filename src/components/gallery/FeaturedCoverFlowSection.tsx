import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { featuredCoverFlowItems, GalleryItem } from '@/content/gallery';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

interface CoverFlowProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const FeaturedCoverFlowSection: React.FC<CoverFlowProps> = ({ onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(2); // default center card (A Princess in Bloom)

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? featuredCoverFlowItems.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === featuredCoverFlowItems.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section id="coverflow-section" className="py-24 lg:py-36 bg-espresso text-cream overflow-hidden border-b border-sand/15 relative select-none">
      
      {/* Script Header Accents */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between pb-12 gap-4">
        <div>
          <span className="font-script text-3xl sm:text-4xl text-blush block">
            Featured Creations
          </span>
          <span className="text-[10px] font-sans tracking-widest-custom uppercase text-sand/60 font-semibold">
            SIGNATURE BESPOKE GALLERY
          </span>
        </div>

        <div className="text-center md:text-right">
          <span className="font-script text-2xl sm:text-3xl text-sand/80 block">
            Different Cakes, Different Stories ♡
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Vertical Index List (01 to 05) */}
          <div className="lg:col-span-1 hidden lg:flex flex-col space-y-6">
            {featuredCoverFlowItems.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`text-left font-mono text-xs transition-all duration-300 flex items-center gap-2 ${
                    isActive ? 'text-cream font-bold scale-110' : 'text-sand/40 hover:text-sand'
                  }`}
                >
                  {isActive && <span className="w-3 h-[1px] bg-bronze" />}
                  <span>{item.chapterNumber}</span>
                </button>
              );
            })}
          </div>

          {/* Center: 3D Coverflow Visual Stage */}
          <div className="lg:col-span-10 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] [perspective:1200px]">
            <div className="relative w-full max-w-4xl h-[460px] sm:h-[540px] flex items-center justify-center">
              
              {featuredCoverFlowItems.map((item, idx) => {
                const offset = idx - currentIndex;
                const isCenter = offset === 0;
                
                // Calculate 3D transforms based on relative offset
                let xTranslate = offset * 240;
                let zTranslate = -Math.abs(offset) * 160;
                let rotateY = -offset * 25;
                let scale = 1 - Math.abs(offset) * 0.15;
                let opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3;
                let zIndex = 20 - Math.abs(offset);

                if (typeof window !== 'undefined' && window.innerWidth < 640) {
                  xTranslate = offset * 140;
                  rotateY = -offset * 15;
                  scale = 1 - Math.abs(offset) * 0.2;
                }

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => {
                      if (isCenter) {
                        onOpenLightbox(item);
                      } else {
                        setCurrentIndex(idx);
                      }
                    }}
                    animate={{
                      x: xTranslate,
                      z: zTranslate,
                      rotateY: rotateY,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    style={{ zIndex }}
                    className={`absolute cursor-pointer rounded-arch overflow-hidden transition-shadow duration-500 ${
                      isCenter
                        ? 'w-72 sm:w-80 h-[420px] sm:h-[500px] border-2 border-bronze/70 shadow-2xl bg-cocoa'
                        : 'w-60 sm:w-68 h-[360px] sm:h-[440px] border border-sand/20 shadow-lg bg-cocoa/80 brightness-75'
                    }`}
                  >
                    <PlaceholderImage
                      src={item.image}
                      alt={item.title}
                      filename={item.placeholderFilename}
                      archMask
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Details on Center Card */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-transparent flex flex-col justify-between p-6">
                        {/* Slide Counter on Top */}
                        <div className="text-center">
                          <span className="font-mono text-xs text-sand/80 tracking-widest bg-espresso/60 px-3 py-1 rounded-full border border-sand/30">
                            0{currentIndex + 1} / 0{featuredCoverFlowItems.length}
                          </span>
                        </div>

                        {/* Title & Circular Arrow Trigger */}
                        <div className="flex items-end justify-between">
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-blush">
                              {item.subtitle || item.category}
                            </span>
                            <h3 className="font-serif text-2xl text-cream font-medium">
                              {item.title}
                            </h3>
                          </div>

                          <div className="w-10 h-10 rounded-full border border-cream/40 bg-sand/10 backdrop-blur flex items-center justify-center text-cream hover:bg-bronze hover:border-bronze transition-colors flex-shrink-0">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* Right: Prev/Next Controls */}
          <div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-sand/30 text-cream hover:bg-bronze hover:border-bronze transition-all flex items-center justify-center shadow-lg"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-sand/30 text-cream hover:bg-bronze hover:border-bronze transition-all flex items-center justify-center shadow-lg"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
