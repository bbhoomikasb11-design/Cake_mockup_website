import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { VerticalKeywords } from '@/components/common/VerticalKeywords';
import { FlourDustCanvas } from '@/components/motion/FlourDustCanvas';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

const craftKeywords = [
  'FLAVOURS',
  'DESIGNS',
  'EMOTIONS',
  'MEMORIES',
  'ALL IN ONE CAKE',
];

export const CraftSection: React.FC = () => {
  return (
    <section className="relative bg-espresso text-cream py-28 lg:py-36 overflow-hidden select-none">
      {/* Background Dust Canvas */}
      <FlourDustCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-8">
            <SectionLabel number="02" eyebrow="THE CRAFT" dark />

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light leading-[1.05]">
              Where <br />
              imagination <br />
              takes shape.
            </h2>

            <p className="font-sans text-sand/80 text-sm sm:text-base leading-relaxed max-w-md">
              From delicate details to gravity-defying designs, every cake is crafted with precision, creativity and a whole lot of love.
            </p>

            <div className="pt-2">
              <NavLink
                to="/cake"
                className="w-12 h-12 rounded-full border border-sand/30 text-cream hover:bg-bronze hover:border-bronze transition-all duration-300 flex items-center justify-center shadow-lg group"
                aria-label="Explore cake designs"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </NavLink>
            </div>
          </div>

          {/* Center Column: Dramatic Floral Cake Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-arch-sm overflow-hidden shadow-2xl border border-bronze/30 bg-cocoa group">
              <PlaceholderImage
                src="/images/hero/craft.jpg"
                alt="Floral craft cake"
                filename="hero/craft.jpg"
                archMask
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Right Column: Vertical Keywords */}
          <div className="lg:col-span-2 hidden lg:flex justify-end">
            <VerticalKeywords keywords={craftKeywords} dark />
          </div>

        </div>
      </div>
    </section>
  );
};
