import React from 'react';
import { Button } from '@/components/common/Button';
import { SectionLabel } from '@/components/common/SectionLabel';
import { ArchImage } from '@/components/common/ArchImage';
import { Polaroid } from '@/components/common/Polaroid';
import { VerticalKeywords } from '@/components/common/VerticalKeywords';
import { RotatingBadge } from '@/components/common/RotatingBadge';
import { WaxSeal } from '@/components/common/WaxSeal';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { FlourDustCanvas } from '@/components/motion/FlourDustCanvas';
import { achievementsList, featuredAward } from '@/content/achievements';
import { siteConfig } from '@/content/site';

export const StyleguidePage: React.FC = () => {
  const colorSwatches = [
    { name: 'espresso', hex: '#1B0F0B', bg: 'bg-espresso', text: 'text-cream' },
    { name: 'cocoa', hex: '#2B1710', bg: 'bg-cocoa', text: 'text-cream' },
    { name: 'mocha', hex: '#4A2C22', bg: 'bg-mocha', text: 'text-cream' },
    { name: 'cream', hex: '#F6ECE2', bg: 'bg-cream', text: 'text-espresso' },
    { name: 'sand', hex: '#E9D8C8', bg: 'bg-sand', text: 'text-espresso' },
    { name: 'blush', hex: '#E7B9AC', bg: 'bg-blush', text: 'text-espresso' },
    { name: 'rose', hex: '#D69A8C', bg: 'bg-rose', text: 'text-espresso' },
    { name: 'bronze', hex: '#B98A5B', bg: 'bg-bronze', text: 'text-cream' },
    { name: 'burgundy', hex: '#5A1A22', bg: 'bg-burgundy', text: 'text-cream' },
  ];

  return (
    <div className="min-h-screen bg-cream text-espresso py-28 px-6 md:px-16 space-y-20 max-w-7xl mx-auto">
      {/* Header */}
      <header className="border-b border-sand pb-8 space-y-3">
        <div className="flex items-center gap-3">
          <WaxSeal size="sm" />
          <div>
            <h1 className="font-serif text-4xl text-espresso font-medium">Design System & Styleguide</h1>
            <p className="font-sans text-xs tracking-widest text-mocha uppercase">Cream On Top by Neha Gupta</p>
          </div>
        </div>
        <p className="font-script text-2xl text-bronze pt-2">Bespoke Brand Tokens, Global Components & Motion System</p>
      </header>

      {/* 1. COLOR PALETTE */}
      <section className="space-y-6">
        <SectionLabel number="01" eyebrow="BRAND PALETTE TOKENS" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {colorSwatches.map((color) => (
            <div
              key={color.name}
              className={`${color.bg} ${color.text} p-4 rounded-xl shadow-sm border border-sand/40 flex flex-col justify-between h-28`}
            >
              <span className="font-serif capitalize text-lg font-medium">{color.name}</span>
              <span className="font-mono text-[11px] uppercase opacity-90">{color.hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. TYPOGRAPHY */}
      <section className="space-y-6 border-t border-sand/60 pt-12">
        <SectionLabel number="02" eyebrow="TYPOGRAPHY SPECIFICATIONS" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-sand/20 p-8 rounded-2xl border border-sand/50">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-mocha/70">Heading Serif (Cormorant Garamond 300-400)</span>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">
              More than a cake, <span className="italic font-light">it's a feeling.</span>
            </h2>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-mocha/70">Script Accent (Pinyon Script)</span>
            <p className="font-script text-4xl text-bronze leading-snug">
              Good Cakes Happier People ♡
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-mocha/70">Body & Eyebrows (Jost Sans / Wide Tracking)</span>
            <p className="text-xs font-sans tracking-widest uppercase text-mocha font-semibold">
              BANGALORE'S BESPOKE CAKE STUDIO
            </p>
            <p className="text-sm font-sans text-mocha leading-relaxed pt-1">
              Thoughtfully crafted. Deeply personal. Always unforgettable custom cakes in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BUTTON VARIANTS */}
      <section className="space-y-6 border-t border-sand/60 pt-12">
        <SectionLabel number="03" eyebrow="BUTTON & INTERACTION PRIMITIVES" />
        <div className="flex flex-wrap items-center gap-6 bg-sand/20 p-8 rounded-2xl border border-sand/50">
          <Button variant="outline-pill" icon="arrow-right">
            Explore Our World
          </Button>
          <Button variant="filled-bronze" icon="arrow-right">
            Order Your Custom Cake
          </Button>
          <Button variant="dark-pill" icon="arrow-up-right">
            Watch Our Story
          </Button>
          <Button variant="text-link" icon="none">
            Know My Story →
          </Button>
        </div>
      </section>

      {/* 4. VISUAL MOTIFS & COMPONENTS */}
      <section className="space-y-8 border-t border-sand/60 pt-12">
        <SectionLabel number="04" eyebrow="BESPOKE VISUAL MOTIFS" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          
          {/* Arch Image Motif */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-mocha/70 block">Arch Image Mask (999px top)</span>
            <ArchImage
              src="/images/hero/hero-cake.jpg"
              alt="Arch Cake Demo"
              filename="hero/hero-cake.jpg"
              overlayText="Custom Cakes"
              overlaySubtext="FOR SPECIAL MOMENTS"
              aspectRatio="3/4"
            />
          </div>

          {/* Polaroid Motif */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-mocha/70 block">Polaroid with Tape & Script</span>
            <Polaroid
              src="/images/about/neha-baking.jpg"
              alt="Neha Baking"
              filename="about/neha-baking.jpg"
              handwrittenCaption="The first bake (around 12)"
              tilt="-rotate-2"
            />
          </div>

          {/* Badges & Stamps */}
          <div className="space-y-6 flex flex-col items-center justify-center">
            <div>
              <span className="text-[10px] font-mono uppercase text-mocha/70 block text-center mb-2">Wax Seal Stamp</span>
              <WaxSeal size="lg" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-mocha/70 block text-center mb-2">Rotating Text Badge</span>
              <RotatingBadge size={100} />
            </div>
          </div>

          {/* Vertical Keywords */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-mocha/70 block">Vertical Keyword Stack</span>
            <div className="bg-cream p-6 rounded-xl border border-sand shadow-inner flex items-center justify-center">
              <VerticalKeywords />
            </div>
          </div>

        </div>
      </section>

      {/* 5. PLACEHOLDER GENERATOR DEMO */}
      <section className="space-y-6 border-t border-sand/60 pt-12">
        <SectionLabel number="05" eyebrow="SMART PLACEHOLDER GENERATOR COMPONENT" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-sand/20 p-8 rounded-2xl border border-sand/50">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-mocha/70 block">Missing Image Fallback (filename badge + soft gradient)</span>
            <PlaceholderImage
              src="/images/cakes/non-existent.jpg"
              alt="Custom Floral Tier"
              filename="cakes/non-existent.jpg"
              aspectRatio="4/3"
              archMask
            />
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase text-mocha/70 block">Image Skeleton Loading State</span>
            <PlaceholderImage
              src=""
              alt="Statement Chocolate Cake"
              filename="cakes/statement-chocolate.jpg"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* 6. CANVAS PARTICLES & DARK SECTION DEMO */}
      <section className="space-y-6 border-t border-sand/60 pt-12">
        <SectionLabel number="06" eyebrow="CANVAS PARTICLES & DARK CINEMATIC SECTION" dark />
        <div className="relative bg-cocoa text-cream p-12 rounded-3xl overflow-hidden min-h-[240px] flex items-center justify-center shadow-2xl">
          <FlourDustCanvas />
          <div className="relative z-10 text-center space-y-3 max-w-xl">
            <h3 className="font-serif text-3xl md:text-4xl text-cream font-light">
              Where imagination takes shape.
            </h3>
            <p className="font-script text-rose text-2xl">
              "A cake is not just dessert, it's a memory in the making."
            </p>
            <p className="font-sans text-xs text-sand/70 tracking-widest uppercase">
              — NEHA GUPTA
            </p>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS DATA & UNVERIFIED ACHIEVEMENTS DATA */}
      <section className="space-y-6 border-t border-sand/60 pt-12">
        <SectionLabel number="07" eyebrow="EDITABLE ACHIEVEMENTS CONTENT (VERIFIED: FALSE)" />
        <div className="bg-sand/30 p-8 rounded-2xl border border-sand space-y-4">
          <div className="flex items-center justify-between border-b border-sand pb-3">
            <span className="font-mono text-xs text-mocha">Item / Recognition</span>
            <span className="font-mono text-xs text-mocha">Verification Status</span>
          </div>
          {achievementsList.map((item) => (
            <div key={item.id} className="flex items-center justify-between text-xs font-sans text-espresso py-1">
              <div>
                <span className="font-medium">{item.title}</span>
                <span className="text-mocha/60 block text-[11px]">{item.subtitle}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-burgundy/10 text-burgundy font-mono text-[10px]">
                verified: {String(item.verified)} (dates omitted)
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between text-xs font-sans text-espresso pt-2 border-t border-sand/60">
            <span className="font-medium">Featured Award: {featuredAward.title} ({featuredAward.organization})</span>
            <span className="px-2.5 py-0.5 rounded-full bg-burgundy/10 text-burgundy font-mono text-[10px]">
              verified: {String(featuredAward.verified)}
            </span>
          </div>
        </div>
      </section>

      {/* Contact Rules check */}
      <footer className="pt-8 border-t border-sand text-xs font-sans text-mocha flex justify-between items-center">
        <span>WhatsApp: {siteConfig.whatsappNumber}</span>
        <span>Email: {siteConfig.email}</span>
      </footer>
    </div>
  );
};
