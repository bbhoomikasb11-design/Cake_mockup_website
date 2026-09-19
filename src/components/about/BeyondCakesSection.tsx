import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

export const BeyondCakesSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-cream text-espresso border-b border-sand/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <SectionLabel eyebrow="BEYOND CAKES" />

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light leading-tight">
              A sweeter world <br />
              <span className="italic font-normal text-rose">together.</span>
            </h2>

            <p className="font-sans text-mocha text-sm sm:text-base leading-relaxed">
              For the 5th anniversary of Cream On Top, we started <strong>Expedition Annapurna</strong> — donating a meal for every order, and supporting ashrams and NGOs across Bangalore. Because to me, sweetness is meant to be shared.
            </p>

            <div className="pt-2">
              <Button isWhatsApp variant="outline-pill" icon="arrow-right">
                Our Social Initiatives
              </Button>
            </div>
          </div>

          {/* Right Image + Quote Card */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* Image */}
            <div className="sm:col-span-8">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-sand bg-cocoa group">
                <PlaceholderImage
                  src="/images/about/social-initiative.jpg"
                  alt="Expedition Annapurna initiative"
                  filename="about/social-initiative.jpg"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Quote Box */}
            <div className="sm:col-span-4 bg-sand/30 p-6 rounded-2xl border border-sand space-y-4 text-left">
              <p className="font-serif text-lg text-espresso italic leading-relaxed">
                "A cake can bring joy to one day, but kindness can change many."
              </p>
              <div className="w-8 h-[1px] bg-bronze" />
              <span className="text-[9px] font-sans tracking-widest-custom uppercase text-mocha font-semibold block">
                CREATING A SWEETER TOMORROW
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
