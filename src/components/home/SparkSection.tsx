import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Polaroid } from '@/components/common/Polaroid';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

export const SparkSection: React.FC = () => {
  return (
    <section id="chapter-01" className="relative bg-cream text-espresso py-24 lg:py-32 overflow-hidden border-b border-sand/40 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Dark Macro Flour Sifting Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-cocoa border border-bronze/20 group">
              <PlaceholderImage
                src="/images/about/spark.jpg"
                alt="Flour sifting over cake"
                filename="about/spark.jpg"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Dark overlay with vertical text */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/30 p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3 text-cream/90 text-[10px] font-sans tracking-widest-custom uppercase">
                  <div className="w-[1px] h-10 bg-cream/40" />
                  <span className="[writing-mode:vertical-lr] tracking-widest uppercase font-semibold">IT BEGINS WITH A DREAM</span>
                </div>
                
                <div className="w-9 h-9 rounded-full border border-cream/40 backdrop-blur flex items-center justify-center text-cream">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Story Text */}
          <div className="lg:col-span-4 space-y-6">
            <SectionLabel number="01" eyebrow="THE SPARK" />

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-light leading-[1.08]">
              A little girl <br />
              and a big dream.
            </h2>

            <p className="font-sans text-mocha text-xs sm:text-sm leading-relaxed">
              It started with a curiosity, a microwave, and a passion for creating joy. What began as a 12-year-old's fascination with cakes, turned into a lifelong journey.
            </p>

            <div className="pt-2">
              <NavLink
                to="/about"
                className="w-11 h-11 rounded-full border border-mocha/40 text-mocha hover:bg-mocha hover:text-cream transition-all duration-300 flex items-center justify-center shadow-sm group"
                aria-label="Read Neha's story"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </NavLink>
            </div>
          </div>

          {/* Right Column: Tilted Polaroid (Positioned in its own dedicated column - NO OVERLAP) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="w-64 sm:w-72 transform hover:rotate-0 transition-transform duration-300">
              <Polaroid
                src="/images/about/timeline-1.jpg"
                alt="Same girl bigger dreams"
                filename="about/timeline-1.jpg"
                handwrittenCaption="Same girl, Bigger dreams ♡"
                tilt="rotate-3"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
