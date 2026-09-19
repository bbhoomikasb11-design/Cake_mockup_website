import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem, fullGalleryItems } from '@/content/gallery';
import { Button } from '@/components/common/Button';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<LightboxProps> = ({
  item,
  onClose,
  onNavigate,
}) => {
  const currentIndex = item
    ? fullGalleryItems.findIndex((g) => g.id === item.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(fullGalleryItems[currentIndex - 1]);
    } else {
      onNavigate(fullGalleryItems[fullGalleryItems.length - 1]);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < fullGalleryItems.length - 1) {
      onNavigate(fullGalleryItems[currentIndex + 1]);
    } else {
      onNavigate(fullGalleryItems[0]);
    }
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 sm:p-8 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-espresso/95 backdrop-blur-xl"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full border border-sand/30 bg-espresso/60 text-cream flex items-center justify-center hover:bg-bronze hover:border-bronze transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev / Next Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full border border-sand/30 bg-espresso/60 text-cream flex items-center justify-center hover:bg-bronze hover:border-bronze transition-colors hidden sm:flex"
          aria-label="Previous creation"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full border border-sand/30 bg-espresso/60 text-cream flex items-center justify-center hover:bg-bronze hover:border-bronze transition-colors hidden sm:flex"
          aria-label="Next creation"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Card Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="relative z-40 max-w-4xl w-full max-h-[90vh] bg-cocoa rounded-3xl overflow-hidden shadow-2xl border border-bronze/40 flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Lightbox Image Stage */}
          <div className="md:w-3/5 aspect-[4/5] md:aspect-auto max-h-[55vh] md:max-h-[85vh] bg-espresso relative overflow-hidden flex items-center justify-center">
            <PlaceholderImage
              src={item.image}
              alt={item.title}
              filename={item.placeholderFilename}
              className="w-full h-full object-contain md:object-cover"
            />
          </div>

          {/* Lightbox Meta Details */}
          <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-sand/20 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blush font-semibold">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-sand/50">
                  0{currentIndex + 1} / 0{fullGalleryItems.length}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-cream font-light">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="font-script text-rose text-2xl">
                  {item.subtitle}
                </p>
              )}

              <p className="font-sans text-xs sm:text-sm text-sand/80 leading-relaxed">
                {item.description || "Handcrafted with bespoke sugar art, premium Belgian chocolate, and meticulous attention to celebration themes."}
              </p>

              <div className="bg-espresso/50 p-4 rounded-xl border border-sand/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans text-sand font-semibold">
                  <Sparkles className="w-4 h-4 text-bronze" />
                  <span>Bespoke Features:</span>
                </div>
                <p className="text-[11px] font-sans text-sand/70">
                  Custom flavor pairing, color harmonization, and personalized cake topper integration.
                </p>
              </div>
            </div>

            {/* Order CTA */}
            <div className="pt-4 border-t border-sand/20">
              <Button
                isWhatsApp
                cakeName={item.title}
                onClick={onClose}
                variant="filled-bronze"
                className="w-full text-center py-3 text-xs"
                icon="arrow-right"
              >
                Order a cake like this
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
