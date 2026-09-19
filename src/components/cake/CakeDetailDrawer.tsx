import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Sparkles } from 'lucide-react';
import { CakeItem } from '@/content/cakes';
import { Button } from '@/components/common/Button';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';

interface CakeDetailDrawerProps {
  cake: CakeItem | null;
  onClose: () => void;
}

export const CakeDetailDrawer: React.FC<CakeDetailDrawerProps> = ({ cake, onClose }) => {
  if (!cake) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-espresso/80 backdrop-blur-md"
        />

        {/* Drawer Container (Right side on desktop, bottom sheet on mobile) */}
        <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-screen max-w-md bg-cream text-espresso shadow-2xl overflow-y-auto flex flex-col justify-between p-8 border-l border-sand"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-sand pb-4">
              <div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-bronze font-semibold">
                  {cake.category}
                </span>
                <h3 className="font-serif text-3xl text-espresso font-medium">{cake.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-sand bg-sand/30 flex items-center justify-center text-espresso hover:bg-bronze hover:text-cream transition-colors"
                aria-label="Close detail view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cake Image Arch */}
            <div className="py-6">
              <div className="w-full aspect-[4/5] rounded-arch overflow-hidden shadow-xl border border-sand bg-cocoa">
                <PlaceholderImage
                  src={cake.image}
                  alt={cake.title}
                  filename={cake.placeholderFilename}
                  archMask
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description & Occasions */}
            <div className="space-y-6">
              <p className="font-script text-rose text-2xl">{cake.subtitle}</p>

              <p className="font-sans text-xs text-mocha leading-relaxed">
                Handcrafted with premium ingredients, bespoke design elements, and custom color palettes to match your celebration perfectly.
              </p>

              <div className="space-y-2 bg-sand/30 p-4 rounded-xl border border-sand/60">
                <div className="flex items-center gap-2 text-xs font-sans text-espresso font-semibold">
                  <Sparkles className="w-4 h-4 text-bronze" />
                  <span>Suited for:</span>
                </div>
                <p className="text-[11px] font-sans text-mocha">
                  Birthdays, Anniversaries, Special Milestones, and Celebrations.
                </p>
              </div>

              {/* Lead time notice */}
              <div className="flex items-center gap-3 text-mocha text-xs font-sans bg-blush/20 p-3.5 rounded-xl border border-rose/30">
                <Clock className="w-4 h-4 text-bronze flex-shrink-0" />
                <p className="text-[11px]">
                  <strong>Order Notice:</strong> Please order at least a week ahead for custom tier designs.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-8 border-t border-sand">
              <Button
                isWhatsApp
                cakeName={cake.title}
                onClick={onClose}
                variant="filled-bronze"
                className="w-full text-center py-3 text-xs"
                icon="arrow-right"
              >
                Order this cake on WhatsApp
              </Button>
            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
