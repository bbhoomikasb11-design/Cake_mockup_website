import React, { useState } from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { Sparkles, Info, Check } from 'lucide-react';
import { WaxSeal } from '@/components/common/WaxSeal';

interface GateauxTier {
  pricePerKg: number;
  flavours: string[];
  description: string;
}

const gateauxMenuData: GateauxTier[] = [
  {
    pricePerKg: 1200,
    flavours: ['Pineapple Gateaux', 'Blackforest Gateaux'],
    description: 'Classic fruit & chocolate sponge favourites layered with light cream.',
  },
  {
    pricePerKg: 1300,
    flavours: ['Butterscotch Gateaux', 'Lychee Gateaux', 'Vanilla Gateaux', 'Strawberry Gateaux'],
    description: 'Delicate floral and fruity sponge layers with refreshing compotes.',
  },
  {
    pricePerKg: 1500,
    flavours: ['Chocolate Truffle Gateaux'],
    description: 'Decadent Belgian dark chocolate ganache with silky velvet finish.',
  },
  {
    pricePerKg: 1600,
    flavours: ['Whiteforest Gateaux', 'German Chocolate Gateaux'],
    description: 'Artisanal cherry-studded sponge and roasted nut chocolate indulgence.',
  },
  {
    pricePerKg: 2000,
    flavours: ['Red Velvet Gateaux', 'Chocolate Oreo Gateaux'],
    description: 'Signature rich cocoa sponges with luxurious cream layering and cookie crunch.',
  },
];

export const GateauxMenuSection: React.FC = () => {
  const [selectedFlavour, setSelectedFlavour] = useState<string>('Pineapple Gateaux');

  return (
    <section className="py-24 bg-cream text-espresso border-b border-sand/50 overflow-hidden relative">
      {/* Background Watermark */}
      <div className="absolute left-8 top-12 opacity-5 pointer-events-none font-serif text-[140px] leading-none select-none">
        MENU
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionLabel eyebrow="FLAVOUR DIRECTORY" className="justify-center" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light">
            The Gateaux <span className="italic font-normal text-bronze">Menu.</span>
          </h2>
          
          <div className="bg-sand/30 p-6 rounded-2xl border border-sand/70 max-w-2xl mx-auto mt-4">
            <p className="font-sans text-xs sm:text-sm text-mocha leading-relaxed italic">
              "Our gateaux are butter-based sponges soaked in simple syrup and layered with whip top (non-dairy cream)."
            </p>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gateauxMenuData.map((tier) => (
            <div
              key={tier.pricePerKg}
              className="bg-sand/20 rounded-3xl p-8 border border-sand/60 shadow-sm hover:shadow-xl hover:border-bronze/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Price Header */}
                <div className="flex items-baseline justify-between border-b border-sand/60 pb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-light text-espresso group-hover:text-bronze transition-colors">
                      ₹{tier.pricePerKg}
                    </span>
                    <span className="font-mono text-xs text-mocha/70">/ Kg</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-bronze opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="font-sans text-[11px] text-mocha/80 leading-relaxed">
                  {tier.description}
                </p>

                {/* Flavour Chips */}
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-sans tracking-widest-custom uppercase text-mocha font-semibold block">
                    AVAILABLE FLAVOURS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {tier.flavours.map((flavour) => {
                      const isSelected = selectedFlavour === flavour;
                      return (
                        <button
                          key={flavour}
                          onClick={() => setSelectedFlavour(flavour)}
                          className={`px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-bronze text-cream shadow-sm font-medium'
                              : 'bg-cream text-mocha border border-sand/80 hover:border-bronze'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                          <span>{flavour}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Order with Flavour Trigger */}
              <div className="pt-4 border-t border-sand/60">
                <Button
                  isWhatsApp
                  cakeName={selectedFlavour}
                  variant="outline-pill"
                  className="w-full text-center py-2 text-[11px]"
                  icon="arrow-right"
                >
                  Order with this flavour
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote & Pricing Disclaimers */}
        <div className="bg-sand/30 p-6 sm:p-8 rounded-2xl border border-sand/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-espresso text-xs font-sans font-semibold">
              <Info className="w-4 h-4 text-bronze flex-shrink-0" />
              <span>Important Pricing & Design Notes:</span>
            </div>
            <p className="text-xs font-sans text-mocha leading-relaxed">
              * <strong>Additional designing and packing charges apply according to your choice of design.</strong>
            </p>
            <p className="text-[11px] font-sans text-mocha/70">
              Prices listed above are indicative starting rates for base gateaux sponges and do not include custom sugar sculptures, acrylic toppers, floral arrangements, or multi-tier structural framing.
            </p>
          </div>

          <WaxSeal size="md" className="flex-shrink-0" />
        </div>

      </div>
    </section>
  );
};
