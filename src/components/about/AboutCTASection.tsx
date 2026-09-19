import React from 'react';
import { Button } from '@/components/common/Button';
import { SectionLabel } from '@/components/common/SectionLabel';
import { VerticalKeywords } from '@/components/common/VerticalKeywords';
import { FlourDustCanvas } from '@/components/motion/FlourDustCanvas';

const aboutCtaKeywords = [
  'CELEBRATIONS',
  'PEOPLE',
  'MEMORIES',
  'FLAVOURS',
  'ALL IN ONE CAKE',
];

export const AboutCTASection: React.FC = () => {
  return (
    <section className="relative bg-cocoa text-cream py-28 lg:py-36 overflow-hidden border-t border-bronze/30 select-none">
      <FlourDustCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <SectionLabel eyebrow="GET IN TOUCH" dark />

            <h2 className="font-serif text-4xl sm:text-6xl text-cream font-light leading-tight">
              Let's create <br />
              something <span className="italic font-normal text-rose">beautiful together.</span>
            </h2>

            <p className="font-sans text-sand/80 text-xs sm:text-sm tracking-widest uppercase font-medium">
              CUSTOM CAKES FOR YOUR MOST SPECIAL MOMENTS
            </p>

            <div className="pt-4">
              <Button isWhatsApp variant="filled-bronze" icon="arrow-right">
                Order Your Custom Cake
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <VerticalKeywords keywords={aboutCtaKeywords} dark />
          </div>

        </div>
      </div>
    </section>
  );
};
