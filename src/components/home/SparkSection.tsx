import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Polaroid } from '@/components/common/Polaroid';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

export const SparkSection: React.FC = () => {
  return (
    <section id="chapter-01" className="relative bg-cream text-espresso py-24 lg:py-32 overflow-hidden border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dark Macro Flour Sifting Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-cocoa border border-bronze/20 group">
              <PlaceholderImage
                src="/images/about/spark.jpg"
                alt="Flour sifting over cake"
                filename="about/spark.jpg"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Dark overlay with vertical text */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/30 p-8 flex flex-col justify-between">
                <div className="flex items-center gap-3 text-cream/90 text-[10px] font-sans tracking-widest-custom uppercase">
                  <div className="w-[1px] h-12 bg-cream/40" />
                  <span className="[writing-mode:vertical-lr] tracking-widest uppercase">IT BEGINS WITH A DREAM</span>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-cream/40 backdrop-blur flex items-center justify-center text-cream">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text + Tilted Polaroid */}
          <div className="lg:col-span-6 space-y-8 relative">
            
            {/* Chapter Label */}
            <SectionLabel number="01" eyebrow="THE SPARK" />

            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light leading-[1.05]">
              A little girl <br />
              and a big dream.
            </h2>

            {/* Body */}
            <p className="font-sans text-mocha text-sm sm:text-base leading-relaxed max-w-md">
              It started with a curiosity, a microwave, and a passion for creating joy. What began as a 12-year-old's fascination with cakes, turned into a lifelong journey.
            </p>

            {/* Round Arrow Button to /about */}
            <div className="pt-2">
              <NavLink
                to="/about"
                className="w-12 h-12 rounded-full border border-mocha/40 text-mocha hover:bg-mocha hover:text-cream transition-all duration-300 flex items-center justify-center shadow-sm group"
                aria-label="Read Neha's story"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </NavLink>
            </div>

            {/* Tilted Polaroid Overlay (Positioned on bottom right) */}
            <div className="lg:absolute lg:-right-6 lg:-bottom-12 w-60 sm:w-64 pt-6 lg:pt-0 z-20">
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
