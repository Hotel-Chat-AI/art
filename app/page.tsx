'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedIntro from './components/AnimatedIntro';
import MainMenu from './components/MainMenu';
import AndouTadaoSection from './components/AndouTadaoSection';
import LandmarkSection from './components/LandmarkSection';
import TrafficSection from './components/TrafficSection';
import FunctionSection from './components/FunctionSection';
import HotelBrandSection from './components/HotelBrandSection';
import ProductSection from './components/ProductSection';
import ArtBeautySection from './components/ArtBeautySection';

type Section = 'animated-intro' | 'menu' | 'andou' | 'landmark' | 'traffic' | 'function' | 'hotel' | 'product' | 'art';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('animated-intro');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnimatedIntroComplete = () => {
    setIsTransitioning(true);
    // Delay the section change to allow for smooth transition
    setTimeout(() => {
      setCurrentSection('menu');
      setIsTransitioning(false);
    }, 800);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'animated-intro':
        return <AnimatedIntro onComplete={handleAnimatedIntroComplete} isTransitioning={isTransitioning} />;
      case 'menu':
        return <MainMenu onNavigate={setCurrentSection} />;
      case 'andou':
        return <AndouTadaoSection onBack={() => setCurrentSection('menu')} />;
      case 'landmark':
        return <LandmarkSection onBack={() => setCurrentSection('menu')} />;
      case 'traffic':
        return <TrafficSection onBack={() => setCurrentSection('menu')} />;
      case 'function':
        return <FunctionSection onBack={() => setCurrentSection('menu')} />;
      case 'hotel':
        return <HotelBrandSection onBack={() => setCurrentSection('menu')} />;
      case 'product':
        return <ProductSection onBack={() => setCurrentSection('menu')} />;
      case 'art':
        return <ArtBeautySection onBack={() => setCurrentSection('menu')} />;
      default:
        return <AnimatedIntro onComplete={handleAnimatedIntroComplete} isTransitioning={isTransitioning} />;
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {currentSection === 'animated-intro' || isTransitioning ? (
        <>
          <AnimatedIntro onComplete={handleAnimatedIntroComplete} isTransitioning={isTransitioning} />
          {isTransitioning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 z-10"
            >
              <MainMenu onNavigate={setCurrentSection} />
            </motion.div>
          )}
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
}
