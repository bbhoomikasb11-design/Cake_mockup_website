import React from 'react';
import { cakeCategories } from '@/content/cakes';
import { Sparkles, Heart, Crown, Gift, Smile, Feather, Cake, Building } from 'lucide-react';

interface CategoryRowProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'flower':
      return <Sparkles className="w-5 h-5" />;
    case 'ribbon':
      return <Gift className="w-5 h-5" />;
    case 'heart':
      return <Heart className="w-5 h-5" />;
    case 'macaron':
      return <Crown className="w-5 h-5" />;
    case 'teddy':
      return <Smile className="w-5 h-5" />;
    case 'feather':
      return <Feather className="w-5 h-5" />;
    case 'butterfly':
      return <Cake className="w-5 h-5" />;
    default:
      return <Building className="w-5 h-5" />;
  }
};

export const CategoryRowSection: React.FC<CategoryRowProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="bg-sand/30 border-b border-sand/60 py-8 overflow-x-auto scrollbar-none select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between min-w-max space-x-6 md:space-x-8">
          
          {cakeCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center space-y-2 group transition-all duration-300 focus:outline-none ${
                  isSelected ? 'text-bronze scale-105' : 'text-mocha/70 hover:text-espresso'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm ${
                    isSelected
                      ? 'bg-bronze text-cream border-bronze shadow-glow-bronze'
                      : 'bg-cream border-sand/80 group-hover:border-bronze group-hover:bg-sand/20'
                  }`}
                >
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-[10px] font-sans tracking-widest uppercase font-semibold text-center max-w-[100px] leading-tight">
                  {cat.name}
                </span>
                {isSelected && (
                  <div className="w-1.5 h-1.5 rounded-full bg-bronze animate-ping" />
                )}
              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
};
