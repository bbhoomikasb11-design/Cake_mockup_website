import React, { useState } from 'react';
import { GalleryHeroSection } from '@/components/gallery/GalleryHeroSection';
import { GalleryFilterBar } from '@/components/gallery/GalleryFilterBar';
import { FeaturedCoverFlowSection } from '@/components/gallery/FeaturedCoverFlowSection';
import { DetailsThatMatterSection } from '@/components/gallery/DetailsThatMatterSection';
import { RealCelebrationsSection } from '@/components/gallery/RealCelebrationsSection';
import { FullGalleryGridSection } from '@/components/gallery/FullGalleryGridSection';
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox';
import { GalleryItem } from '@/content/gallery';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <div className="w-full overflow-hidden bg-espresso text-cream">
      {/* 1. HERO (Dark & Cinematic) */}
      <GalleryHeroSection />

      {/* 2. FILTER BAR */}
      <GalleryFilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
      />

      {/* 3. FEATURED CREATIONS (3D Coverflow Carousel) */}
      <FeaturedCoverFlowSection
        onOpenLightbox={(item) => setActiveLightboxItem(item)}
      />

      {/* 4. DETAILS THAT MATTER (5 Macro Tiles) */}
      <DetailsThatMatterSection />

      {/* 5. REAL CELEBRATIONS (Cream Section with Polaroids) */}
      <RealCelebrationsSection />

      {/* 6. FULL GALLERY GRID (Responsive Masonry) */}
      <FullGalleryGridSection
        selectedCategory={selectedCategory}
        onOpenLightbox={(item) => setActiveLightboxItem(item)}
      />

      {/* 7. FULLSCREEN LIGHTBOX */}
      <GalleryLightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newItem) => setActiveLightboxItem(newItem)}
      />
    </div>
  );
};

export default GalleryPage;
