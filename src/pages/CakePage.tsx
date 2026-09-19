import React, { useState } from 'react';
import { CakeHeroSection } from '@/components/cake/CakeHeroSection';
import { CategoryRowSection } from '@/components/cake/CategoryRowSection';
import { FindYourKindSection } from '@/components/cake/FindYourKindSection';
import { CakeDetailDrawer } from '@/components/cake/CakeDetailDrawer';
import { BespokeByDesignSection } from '@/components/cake/BespokeByDesignSection';
import { ClientFavouritesSection } from '@/components/cake/ClientFavouritesSection';
import { GateauxMenuSection } from '@/components/cake/GateauxMenuSection';
import { EveryOccasionSection } from '@/components/cake/EveryOccasionSection';
import { CakeItem } from '@/content/cakes';

export const CakePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('birthday');
  const [selectedCake, setSelectedCake] = useState<CakeItem | null>(null);

  return (
    <div className="w-full overflow-hidden bg-cream text-espresso">
      {/* 1. HERO (dark) */}
      <CakeHeroSection />

      {/* 2. CATEGORY ROW */}
      <CategoryRowSection
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
      />

      {/* 3. FIND YOUR KIND OF CAKE */}
      <FindYourKindSection
        selectedCategory={selectedCategory}
        onSelectCake={(cake) => setSelectedCake(cake)}
      />

      {/* 4. BESPOKE BY DESIGN (4 Steps) */}
      <BespokeByDesignSection />

      {/* 5. CLIENT FAVOURITES (Circular row) */}
      <ClientFavouritesSection
        onSelectCake={(cake) => setSelectedCake(cake)}
      />

      {/* 6. THE GATEAUX MENU (Per-kg pricing & flavours) */}
      <GateauxMenuSection />

      {/* 7. SPECIAL OCCASIONS */}
      <EveryOccasionSection />

      {/* CAKE DETAIL DRAWER MODAL */}
      <CakeDetailDrawer
        cake={selectedCake}
        onClose={() => setSelectedCake(null)}
      />
    </div>
  );
};

export default CakePage;
