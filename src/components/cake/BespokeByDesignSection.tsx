import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { processSteps } from '@/content/cakes';
import { FlourDustCanvas } from '@/components/motion/FlourDustCanvas';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

export const BespokeByDesignSection: React.FC = () => {
  return (
    <section className="relative bg-espresso text-cream py-28 lg:py-36 overflow-hidden select-none border-b border-bronze/20">
      <FlourDustCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading + Subtitle + CTA */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel eyebrow="BESPOKE BY DESIGN" dark />

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-light leading-tight">
              Your Story, <br />
              <span className="italic font-normal text-rose">Our Creation.</span>
            </h2>

            <p className="font-sans text-sand/80 text-sm sm:text-base leading-relaxed max-w-md">
              Every cake is handcrafted, customised and thoughtfully designed to reflect you — your people, your moments, your magic.
            </p>

            <div className="pt-4">
              <Button isWhatsApp variant="outline-pill" className="border-sand/40 text-cream hover:bg-cream hover:text-espresso" icon="arrow-right">
                Start a Custom Order
              </Button>
            </div>
          </div>

          {/* Center Column: Floral Petals Macro Image */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-bronze/30 shadow-2xl bg-cocoa">
              <PlaceholderImage
                src="/images/details/florals.jpg"
                alt="Floral sugar sculpture detail"
                filename="details/florals.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: 4 Numbered Steps */}
          <div className="lg:col-span-4 space-y-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-4 rounded-2xl bg-cocoa/50 border border-sand/15 hover:border-bronze transition-colors duration-300 group"
              >
                <span className="font-mono text-xl text-bronze font-light block">
                  {step.number}
                </span>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl text-cream font-medium group-hover:text-rose transition-colors">
                    {step.title}
                  </h4>
                  <p className="font-sans text-xs text-sand/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
