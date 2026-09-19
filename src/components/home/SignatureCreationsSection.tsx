import React from 'react';
import { featuredCakes } from '@/content/cakes';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { ArchImage } from '@/components/common/ArchImage';

export const SignatureCreationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-sand/20 text-espresso overflow-hidden border-b border-sand/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <SectionLabel number="04" eyebrow="BESPOKE CATALOGUE" />
            <h2 className="font-serif text-4xl sm:text-5xl text-espresso font-light">
              Signature <span className="italic font-normal text-bronze">Creations.</span>
            </h2>
          </div>
          <p className="font-sans text-xs uppercase tracking-widest text-mocha/70 font-semibold max-w-xs">
            Swipe to explore our most loved bespoke designs
          </p>
        </div>

        {/* Horizontal Drag Carousel */}
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          {featuredCakes.map((cake) => (
            <div
              key={cake.id}
              className="flex-none w-72 sm:w-80 snap-start bg-cream p-5 rounded-3xl border border-sand shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <ArchImage
                src={cake.image}
                alt={cake.title}
                filename={cake.placeholderFilename}
                aspectRatio="3/4"
              />
              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest uppercase text-bronze font-semibold">
                  {cake.category}
                </span>
                <h3 className="font-serif text-2xl text-espresso group-hover:text-bronze transition-colors">
                  {cake.title}
                </h3>
                <p className="font-script text-mocha text-lg">{cake.subtitle}</p>
              </div>
              <Button
                isWhatsApp
                cakeName={cake.title}
                variant="outline-pill"
                className="w-full text-center py-2 text-[11px]"
                icon="arrow-right"
              >
                Order this cake
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
