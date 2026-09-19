import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/common/SectionLabel';
import { VerticalKeywords } from '@/components/common/VerticalKeywords';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative bg-cream text-espresso pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-sand/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel eyebrow="ABOUT" />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-espresso font-light leading-[0.95]"
            >
              More than <br />
              just <span className="italic font-normal text-bronze">a cake.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-xs sm:text-sm text-mocha/80 tracking-wider max-w-md leading-relaxed"
            >
              A story of passion, people and sweeter tomorrows.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-script text-3xl md:text-4xl text-rose pt-2"
            >
              Bangalore's Homegrown Baker ♡
            </motion.p>
          </div>

          {/* Right Hero Portrait + Keywords Stack */}
          <div className="lg:col-span-6 flex items-center justify-between gap-6">
            
            {/* Parallax Hero Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-sand bg-cocoa group relative"
            >
              <PlaceholderImage
                src="/images/about/neha-teddy.jpg"
                alt="Neha Gupta with custom tier cake"
                filename="about/neha-teddy.jpg"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Vertical Keywords */}
            <div className="hidden sm:block">
              <VerticalKeywords />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
