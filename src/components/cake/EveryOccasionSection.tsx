import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { occasionsList } from '@/content/cakes';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { Sparkles } from 'lucide-react';

export const EveryOccasionSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-cream text-espresso border-b border-sand/40 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heart-shaped Rosette Cake Image */}
          <div className="lg:col-span-4">
            <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-sand bg-cocoa group">
              <PlaceholderImage
                src="/images/cakes/heart-cake.jpg"
                alt="Heart shaped pink rosette cake"
                filename="cakes/heart-cake.jpg"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Center Column: Occasions List */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel eyebrow="SPECIAL OCCASIONS" />

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-light leading-tight">
              Because Every Occasion <br />
              Deserves a <span className="italic font-normal text-rose">Masterpiece.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {occasionsList.map((occ) => (
                <div key={occ} className="flex items-center gap-2 text-xs font-sans text-mocha">
                  <Sparkles className="w-3.5 h-3.5 text-bronze flex-shrink-0" />
                  <span>{occ}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: CTA Card */}
          <div className="lg:col-span-3">
            <div className="bg-sand/30 p-8 rounded-3xl border border-sand shadow-sm space-y-6 text-center">
              <p className="font-serif text-2xl text-espresso italic font-light leading-snug">
                "Let's make something sweet together."
              </p>
              
              <div className="w-8 h-[1px] bg-bronze mx-auto" />

              <Button isWhatsApp variant="filled-bronze" icon="arrow-right" className="w-full text-center py-3 text-xs">
                Order Your Cake
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
