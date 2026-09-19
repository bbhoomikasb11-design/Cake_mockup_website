import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { SparkSection } from '@/components/home/SparkSection';
import { CraftSection } from '@/components/home/CraftSection';
import { ArtMeetsFlavourBand } from '@/components/home/ArtMeetsFlavourBand';
import { WomanBehindItSection } from '@/components/home/WomanBehindItSection';
import { SignatureCreationsSection } from '@/components/home/SignatureCreationsSection';
import { HowToOrderSection } from '@/components/home/HowToOrderSection';
import { LoveNotesSection } from '@/components/home/LoveNotesSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-cream text-espresso">
      {/* 1. HERO (100vh, cinematic) */}
      <HeroSection />

      {/* 2. CHAPTER 01: THE SPARK */}
      <SparkSection />

      {/* 3. CHAPTER 02: THE CRAFT */}
      <CraftSection />

      {/* 4. ART MEETS FLAVOUR BAND */}
      <ArtMeetsFlavourBand />

      {/* 5. CHAPTER 03: THE WOMAN BEHIND IT */}
      <WomanBehindItSection />

      {/* EXTENDED SECTIONS */}
      {/* 6. SIGNATURE CREATIONS CAROUSEL */}
      <SignatureCreationsSection />

      {/* 7. HOW TO ORDER (4 STEPS) */}
      <HowToOrderSection />

      {/* 8. LOVE NOTES (TESTIMONIALS) */}
      <LoveNotesSection />

      {/* 9. FINAL CTA */}
      <FinalCTASection />
    </div>
  );
};

export default HomePage;
