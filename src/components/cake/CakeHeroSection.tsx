import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

export const CakeHeroSection: React.FC = () => {
  const scrollToCollection = () => {
    const section = document.getElementById('find-your-cake');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-espresso text-cream pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col justify-between select-none">
      
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-cocoa/40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel eyebrow="OUR CAKES" dark />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-light leading-[0.95]"
            >
              We turn <br />
              feelings into <br />
              <span className="italic font-normal text-rose">cakes.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-xs sm:text-sm text-sand/80 tracking-wider max-w-md leading-relaxed"
            >
              Custom cakes for every chapter of your story — birthdays, milestones, love, chaos, and everything in between.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-6"
            >
              <Button
                onClick={scrollToCollection}
                variant="outline-pill"
                className="border-sand/40 text-cream hover:bg-cream hover:text-espresso"
                icon="arrow-right"
              >
                Explore Cakes
              </Button>
            </motion.div>

            {/* Side keywords line */}
            <div className="pt-6 text-[10px] font-sans tracking-widest-custom uppercase text-sand/60 flex items-center gap-3">
              <span>CAKES</span>
              <span>•</span>
              <span>PEOPLE</span>
              <span>•</span>
              <span>HAPPIER STORIES</span>
              <span className="w-8 h-[1px] bg-sand/30" />
            </div>
          </div>

          {/* Right Column: Hero Cake Photo & Script Accents */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-between space-y-8">
            
            {/* Script Tagline */}
            <div className="text-center lg:text-right">
              <span className="font-script text-3xl sm:text-4xl text-rose drop-shadow-md block">
                Edible Art for <br />
                Real Emotions ♡
              </span>
            </div>

            {/* Featured Princess Cake Arch */}
            <div className="w-full max-w-md aspect-[4/5] rounded-arch overflow-hidden shadow-2xl border border-bronze/30 bg-cocoa group relative">
              <PlaceholderImage
                src="/images/cakes/princess-doll.jpg"
                alt="Princess doll bespoke tier cake"
                filename="cakes/princess-doll.jpg"
                archMask
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Quote Card */}
            <div className="text-center lg:text-right max-w-xs space-y-1">
              <p className="font-serif text-lg text-cream italic font-light">
                "A cake is a memory in the making."
              </p>
              <p className="text-[10px] font-sans tracking-widest uppercase text-sand/60">
                — NEHA GUPTA
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
