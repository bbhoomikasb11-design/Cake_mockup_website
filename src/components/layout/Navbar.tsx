import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/content/menu';
import { Button } from '@/components/common/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Determine if current hero section is dark (Home, Cake, Gallery are dark heroes)
  const isDarkHeroPage = location.pathname === '/' || location.pathname === '/cake' || location.pathname === '/gallery';
  const isLightMode = isScrolled || (location.pathname === '/about' && !isScrolled);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md py-3 shadow-md border-b border-sand/40'
            : isDarkHeroPage
            ? 'bg-gradient-to-b from-espresso/80 via-espresso/30 to-transparent py-6'
            : 'bg-cream/60 backdrop-blur-sm py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo wordmark */}
          <NavLink to="/" className="flex flex-col group text-left">
            <span
              className={`font-serif text-xl md:text-2xl tracking-wide font-medium transition-colors ${
                isLightMode ? 'text-espresso group-hover:text-bronze' : 'text-cream group-hover:text-blush'
              }`}
            >
              Cream On Top
            </span>
            <span
              className={`text-[9px] font-sans tracking-widest-custom uppercase font-semibold -mt-1 ${
                isLightMode ? 'text-mocha/80' : 'text-sand/80'
              }`}
            >
              BY NEHA GUPTA
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`relative text-xs uppercase font-sans tracking-widest font-semibold py-1 flex flex-col items-center transition-colors ${
                    isLightMode
                      ? isActive ? 'text-bronze' : 'text-espresso hover:text-bronze'
                      : isActive ? 'text-rose' : 'text-cream hover:text-rose'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className={`w-1.5 h-1.5 rounded-full absolute -bottom-1 ${
                        isLightMode ? 'bg-bronze' : 'bg-rose'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Order Now + Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button
                isWhatsApp
                variant="outline-pill"
                icon="arrow-right"
                className={
                  isLightMode
                    ? 'border-mocha/40 text-espresso hover:bg-espresso hover:text-cream'
                    : 'border-sand/50 text-cream bg-espresso/30 backdrop-blur hover:bg-cream hover:text-espresso hover:border-cream shadow-md'
                }
              >
                Order Now
              </Button>
            </div>

            {/* Circular Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-10 h-10 rounded-full border flex flex-col items-center justify-center space-y-1 transition-all duration-300 z-50 focus:outline-none shadow-sm ${
                isLightMode
                  ? 'border-mocha/30 bg-cream/80 text-espresso hover:border-bronze hover:bg-cream'
                  : 'border-sand/40 bg-espresso/50 backdrop-blur text-cream hover:border-bronze hover:bg-bronze'
              }`}
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className={`w-4 h-[1.5px] block transition-transform ${
                  isLightMode || isMenuOpen ? 'bg-mocha' : 'bg-cream'
                }`}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-4 h-[1.5px] block transition-opacity ${
                  isLightMode ? 'bg-mocha' : 'bg-cream'
                }`}
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className={`w-4 h-[1.5px] block transition-transform ${
                  isLightMode || isMenuOpen ? 'bg-mocha' : 'bg-cream'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Cocoa Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-cocoa text-cream flex flex-col justify-between px-8 py-20 md:px-20 md:py-24 overflow-y-auto"
          >
            {/* Background subtle noise pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#B98A5B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
              <span className="text-[10px] font-sans tracking-widest-custom text-sand/60 uppercase mb-8 block font-semibold">
                NAVIGATION
              </span>
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                  >
                    <NavLink
                      to={item.path}
                      className="group flex items-baseline justify-between py-2 border-b border-sand/15 font-serif text-4xl md:text-6xl text-cream hover:text-rose transition-colors"
                    >
                      <span className="group-hover:translate-x-3 transition-transform duration-300">
                        {item.label}
                      </span>
                      <span className="text-xs font-mono text-sand/50 tracking-widest">
                        0{index + 1}
                      </span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="max-w-4xl mx-auto w-full pt-12 border-t border-sand/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-script text-rose text-2xl">Good Cakes Happier People ♡</p>
                <p className="font-sans text-xs text-sand/70 tracking-wider mt-1">
                  Bespoke Cake Studio • Bengaluru
                </p>
              </div>
              <Button isWhatsApp variant="filled-bronze" icon="arrow-right">
                Order Your Custom Cake
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
