import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if preloader has already been seen in this session
    const hasSeen = sessionStorage.getItem('cot_has_seen_preloader');
    if (hasSeen === 'true') {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Animate progress bar from 0 to 100 over 1.4s
    const startTime = Date.now();
    const duration = 1400;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem('cot_has_seen_preloader', 'true');
          onComplete?.();
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 bg-cream flex flex-col items-center justify-center p-8 select-none"
        >
          <div className="flex flex-col items-center max-w-sm w-full text-center space-y-6">
            {/* Logo animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-1"
            >
              <h1 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide">
                Cream On Top
              </h1>
              <p className="text-[10px] font-sans tracking-widest-custom uppercase text-mocha/70 font-semibold">
                BY NEHA GUPTA
              </p>
            </motion.div>

            {/* Script tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-script text-mocha text-2xl"
            >
              Good Cakes Happier People ♡
            </motion.p>

            {/* Progress line */}
            <div className="w-48 h-[2px] bg-sand/60 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-bronze transition-all duration-75 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
