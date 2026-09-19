import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { VideoModal } from '@/components/common/VideoModal';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

const heroSlides = [
  {
    id: 1,
    image: "/images/hero/neha-decorating-swan.jpg",
    placeholderFilename: "hero/neha-decorating-swan.jpg",
    alt: "Neha decorating bespoke cake",
  },
  {
    id: 2,
    image: "/images/about/neha-teddy.jpg",
    placeholderFilename: "about/neha-teddy.jpg",
    alt: "Neha with pink teddy bear cake",
  },
  {
    id: 3,
    image: "/images/hero/craft.jpg",
    placeholderFilename: "hero/craft.jpg",
    alt: "Handcrafted sugar flowers detail",
  },
  {
    id: 4,
    image: "/images/hero/hero-cake.jpg",
    placeholderFilename: "hero/hero-cake.jpg",
    alt: "Bespoke tier cake creation",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('chapter-01');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-espresso text-cream flex flex-col justify-between select-none">
      {/* Background Image Slideshow with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <PlaceholderImage
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              filename={heroSlides[currentSlide].placeholderFilename}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark warm gradient overlays matching mockup */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/40 z-10" />
      </div>

      {/* Main Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto w-full h-full px-6 md:px-12 flex items-center pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 text-sand/80 text-[11px] font-sans tracking-widest-custom uppercase font-semibold"
            >
              <span className="w-8 h-[1px] bg-sand/40" />
              <span>BANGALORE'S BESPOKE CAKE STUDIO</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-light leading-[0.95] tracking-tight"
            >
              More than <br />
              a cake, <br />
              <span className="italic font-normal text-blush">it's a feeling.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-sans text-xs md:text-sm text-sand/80 tracking-wider max-w-sm leading-relaxed"
            >
              Thoughtfully crafted. <br />
              Deeply personal. <br />
              Always unforgettable.
            </motion.p>

            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-2"
            >
              <Button
                onClick={scrollToContent}
                variant="outline-pill"
                className="border-sand/40 text-cream hover:bg-cream hover:text-espresso hover:border-cream"
                icon="arrow-right"
              >
                Explore Our World
              </Button>
            </motion.div>
          </div>

          {/* Right Column Motifs (Matching Mockup Exactly) */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-between space-y-12">
            
            {/* Arch image preview + vertical label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="text-right space-y-1 pt-4 max-w-[120px]">
                <p className="text-[9px] font-sans tracking-widest-custom text-sand/80 uppercase leading-relaxed font-medium">
                  CUSTOM CAKES FOR YOUR MOST SPECIAL MOMENTS
                </p>
                <div className="w-[1px] h-8 bg-sand/30 ml-auto mt-2" />
              </div>

              <div className="w-28 h-40 rounded-arch overflow-hidden border border-sand/30 shadow-2xl bg-cocoa">
                <PlaceholderImage
                  src="/images/hero/arch-preview.jpg"
                  alt="Special moments cake"
                  filename="hero/arch-preview.jpg"
                  archMask
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Script tagline + Watch Story Play Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col items-end space-y-6"
            >
              <p className="font-script text-3xl md:text-4xl text-blush text-right drop-shadow-md">
                Good Cakes <br />
                Happier People ♡
              </p>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-3 text-[10px] font-sans tracking-widest uppercase text-sand hover:text-cream transition-colors"
                aria-label="Watch Our Story"
              >
                <span className="w-10 h-10 rounded-full border border-sand/40 bg-espresso/40 backdrop-blur flex items-center justify-center group-hover:scale-110 group-hover:border-bronze group-hover:bg-bronze transition-all duration-300">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                <span className="font-medium">WATCH OUR STORY</span>
              </button>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Hero Bottom Bar: Slide Counter + Scroll Cue */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 pb-8 flex items-center justify-between text-[11px] font-sans tracking-widest text-sand/70">
        
        {/* Slide Counter (01 / 04) */}
        <div className="flex items-center gap-3">
          <span className="font-mono font-medium text-cream">0{currentSlide + 1}</span>
          <div className="w-12 h-[2px] bg-sand/30 rounded-full overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 6, ease: 'linear' }}
              className="h-full bg-bronze"
            />
          </div>
          <span className="font-mono text-sand/50">04</span>
        </div>

        {/* Scroll Cue */}
        <button
          onClick={scrollToContent}
          className="flex items-center gap-2 hover:text-cream transition-colors animate-bounce"
        >
          <span className="uppercase text-[9px] tracking-widest font-mono">SCROLL TO DISCOVER</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>

      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
};
