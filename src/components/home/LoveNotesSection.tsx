import React, { useState } from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { WaxSeal } from '@/components/common/WaxSeal';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Neha didn't just make a birthday cake; she turned our daughter's fairytale vision into a breathtaking sugar masterpiece. The guests couldn't stop taking pictures and raving about the flavour!",
    name: "Ananya Sharma",
    occasion: "1st Birthday Celebration, Indiranagar",
    rating: 5,
  },
  {
    id: 2,
    quote: "Cream On Top is our go-to for every milestone. The attention to detail, the delicate handmade sugar flowers, and the rich chocolate ganache are unmatched in Bangalore.",
    name: "Rohan & Priyal",
    occasion: "5th Wedding Anniversary, Koramangala",
    rating: 5,
  },
  {
    id: 3,
    quote: "Ordering via WhatsApp was effortless. Neha captured our corporate brand aesthetic perfectly for our launch gala. Truly edible art!",
    name: "Meera Reddy",
    occasion: "Brand Launch Gala, UB City",
    rating: 5,
  },
];

export const LoveNotesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 bg-sand/20 text-espresso overflow-hidden border-b border-sand/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        
        <div className="text-center space-y-4">
          <SectionLabel number="06" eyebrow="KIND WORDS" className="justify-center" />
          <h2 className="font-serif text-4xl sm:text-5xl text-espresso font-light">
            Love <span className="italic font-normal text-bronze">Notes.</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-cream p-8 md:p-14 rounded-3xl border border-sand shadow-lg text-center space-y-6">
          
          <div className="absolute top-6 right-6">
            <WaxSeal size="sm" />
          </div>

          <div className="flex justify-center space-x-1 text-bronze">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <p className="font-serif text-xl sm:text-2xl text-espresso italic font-light leading-relaxed max-w-2xl mx-auto">
            "{current.quote}"
          </p>

          <div className="space-y-1 pt-2">
            <h4 className="font-serif text-lg text-espresso font-medium">{current.name}</h4>
            <p className="font-sans text-[11px] uppercase tracking-widest text-mocha/70 font-semibold">
              {current.occasion}
            </p>
          </div>

          {/* Slider controls */}
          <div className="pt-4 flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-mocha/30 text-mocha hover:bg-bronze hover:text-cream hover:border-bronze transition-all flex items-center justify-center"
              aria-label="Previous note"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-mocha/60">
              0{activeIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-mocha/30 text-mocha hover:bg-bronze hover:text-cream hover:border-bronze transition-all flex items-center justify-center"
              aria-label="Next note"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
