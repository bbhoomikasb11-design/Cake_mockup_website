import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/common/FloatingCTA';

// Motion
import { Preloader } from '@/components/motion/Preloader';
import { CustomCursor } from '@/components/motion/CustomCursor';
import { ScrollProgressLine } from '@/components/motion/ScrollProgressLine';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { PageTransition } from '@/components/motion/PageTransition';

// Pages
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { CakePage } from '@/pages/CakePage';
import { GalleryPage } from '@/pages/GalleryPage';
import { StyleguidePage } from '@/pages/StyleguidePage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/cake"
          element={
            <PageTransition>
              <CakePage />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <GalleryPage />
            </PageTransition>
          }
        />
        <Route
          path="/styleguide"
          element={
            <PageTransition>
              <StyleguidePage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <BrowserRouter>
      <Preloader onComplete={() => setIsPreloaderDone(true)} />
      
      {isPreloaderDone && (
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgressLine />
          
          <div className="min-h-screen flex flex-col justify-between bg-cream text-espresso relative">
            <Navbar />
            
            <main className="flex-1">
              <AnimatedRoutes />
            </main>
            
            <Footer />
            <FloatingCTA />
          </div>
        </SmoothScroll>
      )}
    </BrowserRouter>
  );
};

export default App;
