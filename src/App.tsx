import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Providers
import { OrderProvider } from '@/context/OrderContext';

// Layout
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingCTA } from '@/components/common/FloatingCTA';
import { OrderDrawer } from '@/components/order/OrderDrawer';

// Motion
import { Preloader } from '@/components/motion/Preloader';
import { CustomCursor } from '@/components/motion/CustomCursor';
import { ScrollProgressLine } from '@/components/motion/ScrollProgressLine';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { PageTransition } from '@/components/motion/PageTransition';

// Lazy Loaded Routes for optimal performance & Lighthouse 85+
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const CakePage = lazy(() => import('@/pages/CakePage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const StyleguidePage = lazy(() => import('@/pages/StyleguidePage').then(m => ({ default: m.StyleguidePage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Route Title Updater
const RouteTitleHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = "Cream On Top | Bespoke Cake Studio by Neha Gupta, Bengaluru";
        break;
      case '/about':
        document.title = "About Neha Gupta | The Story Behind Cream On Top, Bengaluru";
        break;
      case '/cake':
        document.title = "Custom Cakes & Gateaux Menu | Cream On Top Bengaluru";
        break;
      case '/gallery':
        document.title = "Cake Gallery & Real Stories | Cream On Top Bengaluru";
        break;
      case '/styleguide':
        document.title = "Design System & Styleguide | Cream On Top";
        break;
      default:
        document.title = "Page Not Found | Cream On Top";
        break;
    }
  }, [location.pathname]);

  return null;
};

const PageLoader: React.FC = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-bronze border-t-transparent animate-spin" />
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
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
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <BrowserRouter>
      <RouteTitleHandler />
      <OrderProvider>
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
              <OrderDrawer />
            </div>
          </SmoothScroll>
        )}
      </OrderProvider>
    </BrowserRouter>
  );
};

export default App;
