import React from 'react';
import { RotatingBadge } from '@/components/common/RotatingBadge';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

export const ArtMeetsFlavourBand: React.FC = () => {
  return (
    <section className="relative bg-espresso text-cream py-16 overflow-hidden border-t border-b border-bronze/20 select-none">
      
      {/* Horizontally scrolling marquee typography */}
      <div className="w-full overflow-hidden whitespace-nowrap opacity-25 py-4">
        <div className="inline-flex space-x-12 animate-[spin_40s_linear_infinite] [animation-direction:reverse]">
          <span className="font-serif text-6xl md:text-8xl tracking-widest text-transparent [webkit-text-stroke:1px_#F6ECE2]">
            ART MEETS FLAVOUR
          </span>
          <span className="font-script text-6xl md:text-8xl text-bronze">★</span>
          <span className="font-serif text-6xl md:text-8xl tracking-widest text-cream">
            BESPOKE SUGAR ART
          </span>
          <span className="font-script text-6xl md:text-8xl text-rose">★</span>
          <span className="font-serif text-6xl md:text-8xl tracking-widest text-transparent [webkit-text-stroke:1px_#F6ECE2]">
            ART MEETS FLAVOUR
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Chocolate macro image 1 */}
          <div className="md:col-span-3">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-bronze/30 shadow-lg bg-cocoa">
              <PlaceholderImage
                src="/images/details/textures.jpg"
                alt="Chocolate texture"
                filename="details/textures.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Quote Card */}
          <div className="md:col-span-6 text-center space-y-3 px-4">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-cream font-light italic leading-relaxed">
              "A cake is not just dessert, it's a memory in the making."
            </p>
            <p className="text-[10px] font-sans tracking-widest-custom uppercase text-sand/70 font-semibold">
              — NEHA GUPTA
            </p>
          </div>

          {/* Right: Chocolate macro 2 + Rotating Badge */}
          <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-6">
            <div className="w-32 aspect-square rounded-2xl overflow-hidden border border-bronze/30 shadow-lg bg-cocoa hidden sm:block">
              <PlaceholderImage
                src="/images/details/finishes.jpg"
                alt="Chocolate pour finish"
                filename="details/finishes.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            
            <RotatingBadge text="BANGALORE · CUSTOM CAKES · BENGALURU · " size={100} />
          </div>

        </div>
      </div>
    </section>
  );
};
