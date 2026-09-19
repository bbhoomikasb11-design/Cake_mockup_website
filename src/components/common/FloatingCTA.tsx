import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useOrder } from '@/context/OrderContext';

export const FloatingCTA: React.FC = () => {
  const { openOrder } = useOrder();

  return (
    <>
      {/* Floating WhatsApp button - Bottom Right */}
      <button
        onClick={() => openOrder()}
        aria-label="Order on WhatsApp"
        className="fixed bottom-20 sm:bottom-8 right-6 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-16 bg-espresso text-cream text-[11px] font-sans px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md pointer-events-none hidden md:block">
          Order on WhatsApp
        </span>
      </button>

      {/* Sticky Bottom Order Bar on Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-t border-sand/60 px-4 py-3 shadow-lg flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif text-sm text-espresso font-medium">Cream On Top</span>
          <span className="text-[9px] font-sans tracking-wider text-mocha uppercase">Bespoke Cakes</span>
        </div>
        <button
          onClick={() => openOrder()}
          className="px-5 py-2 rounded-full bg-bronze text-cream font-sans text-xs uppercase tracking-wider font-medium flex items-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <span>Order Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
};
