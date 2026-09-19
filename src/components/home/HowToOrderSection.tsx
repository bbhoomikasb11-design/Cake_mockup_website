import React from 'react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/common/Button';
import { Clock } from 'lucide-react';

const orderSteps = [
  {
    number: '01',
    title: 'Say hi on WhatsApp',
    description: 'Reach out directly to Neha with your initial event date and dream cake ideas.',
  },
  {
    number: '02',
    title: 'Share your vision',
    description: 'Provide your preferred date, guest count, weight, flavour preference, and reference photos.',
  },
  {
    number: '03',
    title: 'Receive your pricing',
    description: 'Neha will design a custom concept and share a transparent price quote tailored to your cake.',
  },
  {
    number: '04',
    title: 'Confirm & celebrate',
    description: 'Confirm your order with payment to lock in your date on our baking calendar.',
  },
];

export const HowToOrderSection: React.FC = () => {
  return (
    <section className="py-24 bg-cream text-espresso border-b border-sand/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <SectionLabel number="05" eyebrow="SIMPLE & DIRECT PROCESS" className="justify-center" />
          <h2 className="font-serif text-4xl sm:text-5xl text-espresso font-light">
            How to <span className="italic font-normal text-bronze">Order.</span>
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-mocha font-semibold">
            Bespoke Ordering Directly via WhatsApp
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {orderSteps.map((step) => (
            <div
              key={step.number}
              className="bg-sand/30 p-8 rounded-3xl border border-sand/60 space-y-4 flex flex-col justify-between hover:border-bronze transition-colors duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <span className="font-mono text-3xl text-bronze font-light block border-b border-sand/60 pb-3">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl text-espresso font-medium">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-mocha leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note & CTA */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-sand/40 p-6 sm:p-8 rounded-2xl border border-sand">
          <div className="flex items-center gap-3 text-mocha text-xs font-sans">
            <Clock className="w-5 h-5 text-bronze flex-shrink-0" />
            <p className="tracking-wider">
              <strong className="text-espresso">Notice:</strong> Please order at least a week in advance to ensure slot availability.
            </p>
          </div>

          <Button isWhatsApp variant="filled-bronze" icon="arrow-right">
            Start Order on WhatsApp
          </Button>
        </div>

      </div>
    </section>
  );
};
