import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Polaroid } from '@/components/common/Polaroid';
import { timelinePolaroids } from '@/content/story';

const timelineStages = [
  'CURIOSITY',
  'LEARNING',
  'CREATING',
  'GROWING',
  'GIVING BACK',
];

export const MyJourneySection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(2); // default CREATING

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('my-journey-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollRatio = (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
      const clamped = Math.max(0, Math.min(1, scrollRatio));
      const stageIdx = Math.min(timelineStages.length - 1, Math.floor(clamped * timelineStages.length));
      setActiveStageIndex(stageIdx);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="my-journey-section" className="py-24 lg:py-36 bg-sand/20 text-espresso border-b border-sand/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6 space-y-4">
            <SectionLabel eyebrow="MY JOURNEY" />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light leading-tight">
              From <span className="italic font-normal text-bronze">home bakes</span> <br />
              to a bigger <span className="italic font-normal text-bronze">purpose.</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-mocha text-sm sm:text-base leading-relaxed">
              At 16, I started baking professionally. By 18, I built my own client base. Today, Cream On Top is more than a brand — it's a community built on creativity, kindness and the belief that every celebration deserves to be unforgettable.
            </p>
          </div>
        </div>

        {/* Polaroids & Vertical Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          
          {/* 4 Sequential Dropping Polaroids */}
          <div className="lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelinePolaroids.map((pol, idx) => (
              <motion.div
                key={pol.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Polaroid
                  src={pol.image}
                  alt={pol.caption}
                  filename={pol.placeholderFilename}
                  handwrittenCaption={pol.handwrittenCaption}
                  tilt={pol.tilt}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive Vertical Timeline */}
          <div className="lg:col-span-2 hidden lg:flex flex-col space-y-6 pl-4 border-l border-bronze/30">
            {timelineStages.map((stage, i) => {
              const isActive = i === activeStageIndex;
              return (
                <div key={stage} className="flex items-center gap-3 text-[10px] font-sans tracking-widest uppercase transition-all duration-300">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? 'bg-bronze scale-125' : 'bg-sand/60 border border-mocha/30'
                    }`}
                  />
                  <span className={isActive ? 'text-espresso font-bold tracking-widest-custom' : 'text-mocha/50'}>
                    {stage}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
