import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { achievementsList, featuredAward } from '@/content/achievements';
import { Mic, Video, Star, Briefcase, MoreHorizontal } from 'lucide-react';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

// Map icon names from achievements content
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'mic':
      return <Mic className="w-5 h-5 text-bronze" />;
    case 'video':
      return <Video className="w-5 h-5 text-bronze" />;
    case 'star':
      return <Star className="w-5 h-5 text-bronze" />;
    case 'briefcase':
      return <Briefcase className="w-5 h-5 text-bronze" />;
    default:
      return <MoreHorizontal className="w-5 h-5 text-bronze" />;
  }
};

export const RecognitionsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-sand/20 text-espresso border-b border-sand/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Header */}
          <div className="lg:col-span-4 space-y-6">
            <SectionLabel eyebrow="RECOGNITIONS" />

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light leading-tight">
              Grateful <br />
              for the <span className="italic font-normal text-bronze">love.</span>
            </h2>

            <p className="font-sans text-mocha text-sm sm:text-base leading-relaxed">
              Honoured to be recognised for doing what I love, and for inspiring so many along the way.
            </p>

            <div className="pt-2">
              <Button isWhatsApp variant="outline-pill" icon="arrow-right">
                See More
              </Button>
            </div>
          </div>

          {/* Center Trophy Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs bg-cream p-8 rounded-3xl border border-sand shadow-lg text-center space-y-4 flex flex-col items-center justify-between">
              <div className="w-24 h-28 mx-auto relative flex items-center justify-center">
                <PlaceholderImage
                  src={featuredAward.image}
                  alt={featuredAward.title}
                  filename={featuredAward.placeholderFilename}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1">
                {/* TODO: Confirm award details & verification once client confirms */}
                <h3 className="font-serif text-xl text-espresso font-medium">
                  {featuredAward.title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-widest text-mocha font-semibold">
                  {featuredAward.organization}
                </p>
              </div>
            </div>
          </div>

          {/* Right Icon List */}
          <div className="lg:col-span-4 space-y-6">
            {achievementsList.map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-2 rounded-xl hover:bg-cream/60 transition-colors">
                <div className="p-2.5 rounded-full bg-cream border border-sand shadow-sm flex-shrink-0">
                  {getIcon(item.iconName)}
                </div>
                <div className="space-y-0.5 pt-1">
                  {/* TODO: Confirm exact milestone details (verified: false) */}
                  <h4 className="font-serif text-lg text-espresso leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-mocha/70">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
