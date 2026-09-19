import React from 'react';
import { NavLink } from 'react-router-dom';
import { WaxSeal } from '@/components/common/WaxSeal';
import { Button } from '@/components/common/Button';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-cream text-espresso flex flex-col items-center justify-center text-center px-6 py-32 space-y-8 select-none">
      <WaxSeal size="lg" />

      <div className="space-y-3 max-w-lg">
        <span className="font-mono text-xs text-bronze tracking-widest-custom uppercase font-semibold">
          404 • CHAPTER NOT FOUND
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl text-espresso font-light">
          A Lost <span className="italic font-normal text-rose">Recipe.</span>
        </h1>
        <p className="font-sans text-xs sm:text-sm text-mocha/80 leading-relaxed pt-2">
          The page you are looking for has been whisked away or does not exist. Let's guide you back to our sweet creations.
        </p>
      </div>

      <div className="pt-4 flex items-center gap-4">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-bronze text-cream hover:bg-mocha transition-all duration-300 font-sans text-xs uppercase tracking-wider font-semibold shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </NavLink>

        <Button href="/cake" variant="outline-pill" icon="arrow-right">
          Explore Cakes
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
