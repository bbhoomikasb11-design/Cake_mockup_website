import React from 'react';
import { clientFavourites, CakeItem } from '@/content/cakes';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

interface ClientFavouritesProps {
  onSelectCake?: (cake: CakeItem) => void;
}

export const ClientFavouritesSection: React.FC<ClientFavouritesProps> = ({ onSelectCake }) => {
  return (
    <section className="py-24 bg-sand/20 text-espresso border-b border-sand/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="font-script text-3xl sm:text-4xl text-rose block transform -rotate-1">
            Client Favourites ♡
          </span>
          <p className="font-sans text-[11px] uppercase tracking-widest text-mocha font-semibold">
            MOST CHERISHED DESIGNS ACROSS BENGALURU
          </p>
        </div>

        {/* Circular Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {clientFavourites.map((cake) => (
            <div
              key={cake.id}
              onClick={() => onSelectCake?.(cake)}
              className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
            >
              {/* Circular Bobbing Image */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1 border-2 border-dashed border-bronze/40 group-hover:border-bronze group-hover:-translate-y-2 transition-all duration-300 shadow-md bg-cream">
                <div className="w-full h-full rounded-full overflow-hidden bg-sand/30">
                  <PlaceholderImage
                    src={cake.image}
                    alt={cake.title}
                    filename={cake.placeholderFilename}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title & Category */}
              <div className="space-y-0.5">
                <h4 className="font-serif text-lg text-espresso group-hover:text-bronze transition-colors font-medium">
                  {cake.title}
                </h4>
                <p className="font-sans text-[10px] uppercase tracking-widest text-mocha/60">
                  {cake.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
