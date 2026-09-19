import React from 'react';
import { AboutHeroSection } from '@/components/about/AboutHeroSection';
import { MeetNehaSection } from '@/components/about/MeetNehaSection';
import { MyJourneySection } from '@/components/about/MyJourneySection';
import { BeyondCakesSection } from '@/components/about/BeyondCakesSection';
import { RecognitionsSection } from '@/components/about/RecognitionsSection';
import { AboutCTASection } from '@/components/about/AboutCTASection';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-cream text-espresso">
      {/* 1. HERO (light cream) */}
      <AboutHeroSection />

      {/* 2. MEET NEHA GUPTA */}
      <MeetNehaSection />

      {/* 3. MY JOURNEY */}
      <MyJourneySection />

      {/* 4. BEYOND CAKES */}
      <BeyondCakesSection />

      {/* 5. RECOGNITIONS */}
      <RecognitionsSection />

      {/* 6. CLOSING CTA */}
      <AboutCTASection />
    </div>
  );
};

export default AboutPage;
