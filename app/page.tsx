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

  const handleAnimatedIntroComplete = () => {
    setCurrentSection('menu');
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'animated-intro':
        return <AnimatedIntro onComplete={handleAnimatedIntroComplete} />;
      case 'menu':
        return <MainMenu onNavigate={handleNavigate} />;
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
        return <AnimatedIntro onComplete={handleAnimatedIntroComplete} />;
    }
  };

  return (
    <main 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFB7C5 0%, #FFC0CB 25%, #FFCCCB 50%, #FFE4E1 75%, #FFF8F8 100%)'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
