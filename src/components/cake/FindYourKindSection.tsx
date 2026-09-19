import React, { useRef } from 'react';
import { featuredCakes, CakeItem } from '@/content/cakes';
import { SectionLabel } from '@/components/common/SectionLabel';
import { ArchImage } from '@/components/common/ArchImage';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface FindYourKindProps {
  selectedCategory: string;
  onSelectCake: (cake: CakeItem) => void;
}

export const FindYourKindSection: React.FC<FindYourKindProps> = ({
  selectedCategory,
  onSelectCake,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Filter cakes if a category is selected (other than all/default)
  const filteredCakes = selectedCategory && selectedCategory !== 'all'
    ? featuredCakes.filter((c) => c.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory === 'all')
    : featuredCakes;

  const displayCakes = filteredCakes.length > 0 ? filteredCakes : featuredCakes;

  return (
    <section id="find-your-cake" className="py-24 bg-cream text-espresso border-b border-sand/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <SectionLabel number="01" eyebrow="FIND YOUR KIND OF CAKE" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-light">
              "Different stories. <span className="italic font-normal text-bronze">Same sweetness."</span>
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-mocha/30 text-mocha hover:bg-bronze hover:text-cream hover:border-bronze transition-all flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-mocha/30 text-mocha hover:bg-bronze hover:text-cream hover:border-bronze transition-all flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel of Arch-Top Cards */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
        >
          {displayCakes.map((cake) => (
            <div
              key={cake.id}
              onClick={() => onSelectCake(cake)}
              className="flex-none w-72 sm:w-80 snap-start bg-sand/20 p-5 rounded-3xl border border-sand/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer"
            >
              <ArchImage
                src={cake.image}
                alt={cake.title}
                filename={cake.placeholderFilename}
                aspectRatio="3/4"
              />

              <div className="flex items-center justify-between pt-2">
                <div>
                  <h3 className="font-serif text-2xl text-espresso group-hover:text-bronze transition-colors">
                    {cake.title}
                  </h3>
                  <p className="font-script text-mocha text-lg">{cake.subtitle}</p>
                </div>

                <div className="w-10 h-10 rounded-full border border-mocha/30 text-mocha group-hover:bg-bronze group-hover:text-cream group-hover:border-bronze transition-all flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
