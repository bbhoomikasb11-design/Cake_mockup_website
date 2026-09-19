import React from 'react';
import { galleryCategories } from '@/content/gallery';
import { Sparkles, Gift, Heart, Crown, Smile, Feather, Briefcase, Gem } from 'lucide-react';

interface GalleryFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'flower':
      return <Sparkles className="w-4 h-4" />;
    case 'ribbon':
      return <Gift className="w-4 h-4" />;
    case 'sparkles':
      return <Sparkles className="w-4 h-4" />;
    case 'leaf':
      return <Feather className="w-4 h-4" />;
    case 'teddy':
      return <Smile className="w-4 h-4" />;
    case 'heart':
      return <Heart className="w-4 h-4" />;
    case 'feather':
      return <Crown className="w-4 h-4" />;
    case 'briefcase':
      return <Briefcase className="w-4 h-4" />;
    default:
      return <Gem className="w-4 h-4" />;
  }
};

export const GalleryFilterBar: React.FC<GalleryFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="bg-espresso border-b border-sand/15 py-6 overflow-x-auto scrollbar-none select-none sticky top-16 z-30 backdrop-blur-md bg-espresso/90">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between min-w-max space-x-6 md:space-x-8">
          
          {galleryCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center space-y-2 group transition-all duration-300 focus:outline-none ${
                  isSelected ? 'text-rose scale-105' : 'text-sand/60 hover:text-cream'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isSelected
                      ? 'bg-rose text-espresso border-rose shadow-md'
                      : 'bg-cocoa/50 border-sand/20 group-hover:border-bronze group-hover:bg-cocoa'
                  }`}
                >
                  {getCategoryIcon(cat.iconName)}
                </div>
                <span className="text-[9px] font-sans tracking-widest-custom uppercase font-semibold text-center">
                  {cat.name}
                </span>
                {isSelected && (
                  <div className="w-1.5 h-1.5 rounded-full bg-rose" />
                )}
              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
};
