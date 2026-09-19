import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4 max-w-2xl">
        <SectionLabel number="04" eyebrow="THE GALLERY" />
        <h1 className="font-serif text-5xl md:text-7xl text-espresso font-light leading-tight">
          A world of <br />
          <span className="italic font-normal">sweet stories.</span>
        </h1>
        <p className="font-sans text-mocha text-base max-w-md pt-2">
          Every cake has a story — here are some of our favourite chapters.
        </p>
        <div className="pt-4">
          <Button isWhatsApp variant="filled-bronze" icon="arrow-right">
            View All Creations
          </Button>
        </div>
      </div>
    </div>
  );
};
