import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { VideoModal } from '@/components/common/VideoModal';

export const MeetNehaSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-24 lg:py-36 bg-cream text-espresso border-b border-sand/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Arch Portrait with Script Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] rounded-arch overflow-hidden shadow-2xl border border-sand bg-cocoa group">
              <PlaceholderImage
                src="/images/about/neha-decorating-swan.jpg"
                alt="Neha decorating swan tier cake"
                filename="about/neha-decorating-swan.jpg"
                archMask
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Script Overlay: "Still grateful ♡" */}
              <div className="absolute bottom-8 left-8 z-10">
                <span className="font-script text-3xl md:text-4xl text-cream drop-shadow-md">
                  Still grateful ♡
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div className="lg:col-span-6 space-y-8">
            <SectionLabel eyebrow="MEET NEHA GUPTA" />

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light leading-[1.05]">
              A little girl <br />
              with a big dream.
            </h2>

            <p className="font-sans text-mocha text-sm sm:text-base leading-relaxed max-w-lg">
              It started with a <strong>curiosity</strong>, a microwave, and a lot of imagination. What began as a 12-year-old's fascination with cakes, turned into a lifelong journey of creating joy — one cake at a time.
            </p>

            {/* Handwritten Signature */}
            <div className="pt-2 border-b border-sand/50 pb-4">
              <span className="font-script text-4xl text-bronze block">
                Neha Gupta
              </span>
            </div>

            {/* Roles Label & Watch Story Trigger */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <p className="text-[10px] font-sans tracking-widest-custom uppercase text-mocha font-semibold max-w-xs leading-relaxed">
                BAKER. ENTREPRENEUR. SPEAKER. SOCIAL VISIONARY.
              </p>

              {/* Circular Watch Story Button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-3 text-[10px] font-sans tracking-widest uppercase text-mocha hover:text-bronze transition-colors flex-shrink-0"
              >
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-bronze p-0.5">
                  <PlaceholderImage
                    src="/images/about/neha-teddy.jpg"
                    alt="Neha thumbnail"
                    filename="about/neha-teddy.jpg"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <div className="absolute inset-0 bg-espresso/40 flex items-center justify-center text-cream group-hover:bg-bronze/80 transition-colors">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="font-semibold tracking-widest">WATCH MY STORY</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
};
