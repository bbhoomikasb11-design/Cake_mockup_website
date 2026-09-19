import React from 'react';
import { fullGalleryItems, GalleryItem } from '@/content/gallery';
import { SectionLabel } from '@/components/common/SectionLabel';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { Eye } from 'lucide-react';

interface FullGalleryGridProps {
  selectedCategory: string;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const FullGalleryGridSection: React.FC<FullGalleryGridProps> = ({
  selectedCategory,
  onOpenLightbox,
}) => {
  const filteredItems = selectedCategory && selectedCategory !== 'all'
    ? fullGalleryItems.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : fullGalleryItems;

  const displayItems = filteredItems.length > 0 ? filteredItems : fullGalleryItems;

  return (
    <section className="py-24 bg-espresso text-cream border-b border-sand/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <SectionLabel eyebrow="THE COMPLETE ARCHIVE" dark className="justify-center" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-light">
            Every Cake, A <span className="italic font-normal text-rose">Masterpiece.</span>
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-sand/60">
            CLICK ANY CREATION TO VIEW IN FULLSCREEN DETAIL
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative bg-cocoa rounded-3xl overflow-hidden border border-sand/20 shadow-md hover:shadow-2xl hover:border-bronze/60 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image with zoom effect */}
              <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
                <PlaceholderImage
                  src={item.image}
                  alt={item.title}
                  filename={item.placeholderFilename}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Floating View Badge on Hover */}
                <div className="absolute inset-0 bg-espresso/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-bronze/90 text-cream backdrop-blur border border-cream/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6 bg-cocoa/90 border-t border-sand/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-blush">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-sand/40">
                    {item.chapterNumber}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-cream group-hover:text-rose transition-colors">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="font-sans text-xs text-sand/70">{item.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
