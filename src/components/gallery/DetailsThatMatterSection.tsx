import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { detailCloseUps } from '@/content/gallery';
import { VerticalKeywords } from '@/components/common/VerticalKeywords';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { ArrowRight } from 'lucide-react';

const detailKeywords = [
  'TEXTURES',
  'FLORALS',
  'FIGURINES',
  'FINISHES',
  'DETAILS',
  'LOVE',
];

export const DetailsThatMatterSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-cocoa text-cream overflow-hidden border-b border-sand/15 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <SectionLabel eyebrow="FINE CRAFTSMANSHIP" dark />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light leading-tight">
              Details That <br />
              <span className="italic font-normal text-rose">Matter.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-sand/80 tracking-wider max-w-md">
              A closer look at the little things that make each cake special.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex items-center gap-3 text-sand/80 text-[10px] font-sans tracking-widest-custom uppercase">
              <span>THE ART IS IN THE DETAILS</span>
              <div className="w-10 h-10 rounded-full border border-sand/30 flex items-center justify-center text-cream">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* 5 Tall Macro Tiles + Keywords Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
          
          {/* 5 Macro Tiles */}
          <div className="lg:col-span-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {detailCloseUps.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[3/5] rounded-2xl overflow-hidden border border-sand/20 bg-espresso shadow-lg cursor-pointer"
              >
                <PlaceholderImage
                  src={item.image}
                  alt={item.title}
                  filename={item.placeholderFilename}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-blush">
                    {item.title}
                  </span>
                  <p className="font-serif text-sm text-cream leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Keywords List */}
          <div className="lg:col-span-2 hidden lg:flex justify-end">
            <VerticalKeywords keywords={detailKeywords} dark />
          </div>

        </div>

      </div>
    </section>
  );
};
