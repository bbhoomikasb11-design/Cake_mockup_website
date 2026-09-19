import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { VerticalKeywords } from '@/components/common/VerticalKeywords';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

const womanKeywords = ['CAKES', 'PEOPLE', 'STORIES', 'HAPPINESS', 'YOU'];

export const WomanBehindItSection: React.FC = () => {
  return (
    <section className="relative bg-cream text-espresso py-28 lg:py-36 overflow-hidden border-b border-sand/50">
      
      {/* Giant Faded Serif 'N' Background Monogram */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[320px] md:text-[500px] font-serif text-sand/40 select-none pointer-events-none leading-none z-0">
        N
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel number="03" eyebrow="THE WOMAN BEHIND IT" />

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light leading-tight">
              Hi, I'm Neha.
            </h2>

            <p className="font-sans text-xs tracking-widest uppercase text-mocha font-semibold">
              A BAKER. AN ENTREPRENEUR. A STORYTELLER.
            </p>

            <p className="font-sans text-mocha text-sm sm:text-base leading-relaxed max-w-md">
              From home baking to building Cream On Top, from custom cakes to social initiatives — this journey has always been about creating joy, spreading kindness, and believing in bigger dreams.
            </p>

            <div className="pt-2">
              <Button href="/about" variant="outline-pill" icon="arrow-right">
                Know My Story
              </Button>
            </div>
          </div>

          {/* Center Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-arch overflow-hidden shadow-2xl border border-sand bg-cocoa group">
              <PlaceholderImage
                src="/images/about/neha-teddy.jpg"
                alt="Neha Gupta founder"
                filename="about/neha-teddy.jpg"
                archMask
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Keywords */}
          <div className="lg:col-span-2 hidden lg:flex justify-end">
            <VerticalKeywords keywords={womanKeywords} />
          </div>

        </div>
      </div>
    </section>
  );
};
