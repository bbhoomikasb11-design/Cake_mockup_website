import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';

export const CakePage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4 max-w-2xl">
        <SectionLabel number="03" eyebrow="OUR CAKES" />
        <h1 className="font-serif text-5xl md:text-7xl text-espresso font-light leading-tight">
          We turn feelings <br />
          <span className="italic font-normal">into cakes.</span>
        </h1>
        <p className="font-sans text-mocha text-base max-w-md pt-2">
          Custom cakes for every chapter of your story — birthdays, milestones, love, and everything in between.
        </p>
        <div className="pt-4">
          <Button isWhatsApp variant="filled-bronze" icon="arrow-right">
            Explore Cake Collection
          </Button>
        </div>
      </div>
    </div>
  );
};
