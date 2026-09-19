import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/common/SectionLabel';
import { ArrowRight } from 'lucide-react';
import { VerticalKeywords } from '@/components/common/VerticalKeywords';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

const galleryKeywords = ['CAKES', 'PEOPLE', 'PLACES', 'EMOTIONS', 'YOU'];

export const GalleryHeroSection: React.FC = () => {
  const scrollToGallery = () => {
    const el = document.getElementById('coverflow-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen bg-espresso text-cream pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex flex-col justify-between select-none">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-cocoa/50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Floral Cake Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionLabel eyebrow="THE GALLERY" dark />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-light leading-[0.95]"
            >
              A world of <br />
              <span className="italic font-normal text-rose">sweet stories.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-xs sm:text-sm text-sand/80 tracking-wider max-w-md leading-relaxed"
            >
              Every cake has a story — here are some of our favourite chapters.
            </motion.p>

            {/* Explore Link with Circular Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2"
            >
              <button
                onClick={scrollToGallery}
                className="inline-flex items-center gap-3 text-sand hover:text-cream transition-colors group uppercase font-sans text-xs tracking-widest font-medium"
              >
                <span>EXPLORE THE GALLERY</span>
                <span className="w-10 h-10 rounded-full border border-sand/40 bg-sand/10 backdrop-blur flex items-center justify-center group-hover:scale-110 group-hover:bg-bronze group-hover:border-bronze transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>

            {/* Floral Cake Preview Frame */}
            <div className="pt-6 w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-bronze/30 bg-cocoa hidden sm:block">
              <PlaceholderImage
                src="/images/hero/craft.jpg"
                alt="Floral poetry cake"
                filename="hero/craft.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Neha Arch Portrait + Script Tagline + Keywords */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-between space-y-8">
            
            {/* Script Tagline */}
            <div className="text-center lg:text-right">
              <span className="font-script text-3xl sm:text-4xl text-rose drop-shadow-md block">
                Art Bakes <br />
                Memories ♡
              </span>
            </div>

            <div className="flex items-center gap-6 w-full justify-center lg:justify-end">
              {/* Arch Neha Portrait */}
              <div className="w-64 sm:w-80 aspect-[3/4] rounded-arch overflow-hidden shadow-2xl border border-sand/40 bg-cocoa group relative">
                <PlaceholderImage
                  src="/images/about/neha-teddy.jpg"
                  alt="Neha Gupta with creation"
                  filename="about/neha-teddy.jpg"
                  archMask
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Keywords Stack */}
              <div className="hidden sm:block">
                <VerticalKeywords keywords={galleryKeywords} dark />
              </div>
            </div>

            {/* Quote Card */}
            <div className="text-center lg:text-right max-w-xs space-y-1">
              <p className="font-serif text-lg text-cream italic font-light">
                "Cakes are how I capture feelings in a sweeter form."
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
