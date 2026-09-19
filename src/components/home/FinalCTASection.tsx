import React from 'react';
import { Button } from '@/components/common/Button';
import { SectionLabel } from '@/components/common/SectionLabel';
import { VerticalKeywords } from '@/components/common/VerticalKeywords';
import { FlourDustCanvas } from '@/components/motion/FlourDustCanvas';
import { WaxSeal } from '@/components/common/WaxSeal';

const ctaKeywords = [
  'CELEBRATIONS',
  'PEOPLE',
  'MEMORIES',
  'FLAVOURS',
  'ALL IN ONE CAKE',
];

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative bg-cocoa text-cream py-32 lg:py-44 overflow-hidden border-t border-bronze/30 select-none">
      <FlourDustCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            <SectionLabel number="07" eyebrow="LET'S BEGIN" dark />

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-cream font-light leading-tight">
              Let's create something <br />
              <span className="italic font-normal text-rose">beautiful together.</span>
            </h2>

            <p className="font-sans text-sand/80 text-xs sm:text-sm tracking-widest uppercase font-medium">
              CUSTOM CAKES FOR YOUR MOST SPECIAL MOMENTS
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Button isWhatsApp variant="filled-bronze" icon="arrow-right" className="px-8 py-4 text-xs">
                Order Your Custom Cake
              </Button>
              
              <WaxSeal size="md" />
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <VerticalKeywords keywords={ctaKeywords} dark />
          </div>

        </div>
      </div>
    </section>
  );
};
