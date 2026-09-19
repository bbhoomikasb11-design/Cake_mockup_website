import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { Polaroid } from '@/components/common/Polaroid';
import { celebrationPolaroids } from '@/content/gallery';
import { WaxSeal } from '@/components/common/WaxSeal';

export const RealCelebrationsSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-cream text-espresso border-b border-sand/50 overflow-hidden relative select-none">
      
      {/* Background Arch Curves */}
      <div className="absolute inset-0 bg-[radial-gradient(#B98A5B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Top Header & Quote Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <SectionLabel eyebrow="MOMENTS CAPTURED" />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light leading-tight">
              Real <span className="italic font-normal text-rose">Celebrations.</span>
            </h2>
            <p className="font-sans text-mocha text-sm sm:text-base leading-relaxed max-w-md">
              From intimate moments to grand milestones — our cakes have been a part of so many beautiful celebrations.
            </p>
            <div className="pt-2">
              <Button isWhatsApp variant="outline-pill" icon="arrow-right">
                See More Moments
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start lg:items-end justify-between space-y-6">
            <span className="font-script text-3xl sm:text-4xl text-rose">
              Sweet People, <br />
              Real Stories ♡
            </span>

            <div className="bg-sand/30 p-6 rounded-2xl border border-sand/70 max-w-sm text-left space-y-2">
              <p className="font-serif text-lg text-espresso italic">
                "Thank you for making our moments even more special."
              </p>
              <div className="w-6 h-[1px] bg-bronze" />
              <p className="text-[10px] font-sans tracking-widest uppercase text-mocha/70">
                CLIENT LOVE NOTE
              </p>
            </div>
          </div>
        </div>

        {/* Scattered Tilted Polaroids Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-4 items-center">
          {celebrationPolaroids.map((item) => (
            <div key={item.id} className="hover:scale-105 transition-transform duration-300">
              <Polaroid
                src={item.image}
                alt={item.caption}
                filename={item.placeholderFilename}
                caption={item.caption}
                tilt={item.tilt}
              />
            </div>
          ))}
        </div>

        {/* Wax Seal Branding Footer Stamp */}
        <div className="pt-8 border-t border-sand flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <WaxSeal size="md" />
            <div>
              <p className="font-mono text-xs text-mocha font-semibold tracking-wider">
                CAKES THAT STAY IN HEARTS FOREVER.
              </p>
              <p className="text-[10px] font-sans tracking-widest-custom uppercase text-mocha/60">
                CREAM ON TOP BY NEHA GUPTA
              </p>
            </div>
          </div>

          <p className="font-script text-2xl text-bronze">
            Good Cakes Happier People ♡
          </p>
        </div>

      </div>
    </section>
  );
};
