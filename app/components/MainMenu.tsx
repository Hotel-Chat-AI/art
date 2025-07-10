'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MainMenuProps {
  onNavigate: (section: string) => void;
}

const menuItems = [
  { id: 'andou', number: '01', title: 'ANDOU TADAO', subtitle: '藏富恆美' },
  { id: 'landmark', number: '02', title: 'LANDMARK', subtitle: '矚目版圖' },
  { id: 'traffic', number: '03', title: 'TRAFFIC', subtitle: '黃金樞紐' },
  { id: 'function', number: '04', title: 'FUNCTION', subtitle: '繽紛富饒' },
  { id: 'hotel', number: '05', title: 'HOTEL BRAND', subtitle: '飯店品牌' },
  { id: 'product', number: '06', title: 'PRODUCT', subtitle: '雋永擘劃' },
  { id: 'art', number: '07', title: 'ART BEAUTY', subtitle: '藝術美寓' },
];

export default function MainMenu({ onNavigate }: MainMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [animationStage, setAnimationStage] = useState<string | null>(null);

  useEffect(() => {
    if (hoveredItem) {
      // First stage: gray
      setAnimationStage('stage1');
      
      // Second stage: black, after 700ms (3 times shorter)
      const timer = setTimeout(() => {
        setAnimationStage('stage2');
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setAnimationStage(null);
    }
  }, [hoveredItem]);

  const getTextStyle = (itemId: string) => {
    if (hoveredItem !== itemId) {
      return {
        color: '#ffffff',
        textShadow: 'none',
        transition: 'all 1.0s ease'
      };
    }

    if (animationStage === 'stage1') {
      return {
        color: '#a0a0a0',
        textShadow: '0 2px 6px rgba(0,0,0,0.2)',
        transition: 'all 2.0s ease'
      };
    }

    if (animationStage === 'stage2') {
      return {
        color: '#000000',
        textShadow: '0 6px 20px rgba(0,0,0,0.8)',
        transition: 'all 2.5s ease'
      };
    }

    return {
      color: '#ffffff',
      textShadow: 'none',
      transition: 'all 1.0s ease'
    };
  };

  const getSubtitleStyle = (itemId: string) => {
    if (hoveredItem !== itemId) {
      return {
        color: 'rgba(255, 255, 255, 0.8)',
        transition: 'all 1.0s ease'
      };
    }

    if (animationStage === 'stage1') {
      return {
        color: '#909090',
        transition: 'all 2.0s ease'
      };
    }

    if (animationStage === 'stage2') {
      return {
        color: '#1a1a1a',
        transition: 'all 2.5s ease'
      };
    }

    return {
      color: 'rgba(255, 255, 255, 0.8)',
      transition: 'all 1.0s ease'
    };
  };

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #FFB7C5 0%, #FFC0CB 25%, #FFCCCB 50%, #FFE4E1 75%, #FFF8F8 100%)'
      }}
    >
      {/* PNG Image Decorations scattered around borders and middle areas */}
      <>
        {/* Top Border */}
        <motion.div
          className="absolute top-6 left-8 w-16 h-16"
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img src="/1.png" alt="" className="w-full h-full object-contain opacity-80" />
        </motion.div>
        <motion.div
          className="absolute top-4 left-32 w-12 h-12"
          initial={{ opacity: 0, scale: 0, rotate: 15 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 5 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <img src="/2.png" alt="" className="w-full h-full object-contain opacity-70" />
        </motion.div>
        <motion.div
          className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10"
          initial={{ opacity: 0, scale: 0, rotate: 10 }}
          animate={{ opacity: 0.5, scale: 1, rotate: -5 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <img src="/3.png" alt="" className="w-full h-full object-contain opacity-60" />
        </motion.div>
        <motion.div
          className="absolute top-8 right-12 w-14 h-14"
          initial={{ opacity: 0, scale: 0, rotate: 25 }}
          animate={{ opacity: 0.8, scale: 1, rotate: 10 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <img src="/4.png" alt="" className="w-full h-full object-contain opacity-75" />
        </motion.div>
        <motion.div
          className="absolute top-6 right-32 w-10 h-10"
          initial={{ opacity: 0, scale: 0, rotate: -15 }}
          animate={{ opacity: 0.5, scale: 1, rotate: -5 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          <img src="/5.png" alt="" className="w-full h-full object-contain opacity-60" />
        </motion.div>

        {/* Bottom Border */}
        <motion.div
          className="absolute bottom-8 left-6 w-15 h-15"
          initial={{ opacity: 0, scale: 0, rotate: 30 }}
          animate={{ opacity: 0.7, scale: 1, rotate: 15 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          <img src="/6.png" alt="" className="w-full h-full object-contain opacity-70" />
        </motion.div>
        <motion.div
          className="absolute bottom-4 left-28 w-12 h-12"
          initial={{ opacity: 0, scale: 0, rotate: -25 }}
          animate={{ opacity: 0.6, scale: 1, rotate: -10 }}
          transition={{ duration: 1, delay: 2.0 }}
        >
          <img src="/7.png" alt="" className="w-full h-full object-contain opacity-65" />
        </motion.div>
        <motion.div
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-11 h-11"
          initial={{ opacity: 0, scale: 0, rotate: 15 }}
          animate={{ opacity: 0.5, scale: 1, rotate: 8 }}
          transition={{ duration: 1, delay: 2.3 }}
        >
          <img src="/8.png" alt="" className="w-full h-full object-contain opacity-60" />
        </motion.div>
        <motion.div
          className="absolute bottom-6 right-8 w-16 h-16"
          initial={{ opacity: 0, scale: 0, rotate: 20 }}
          animate={{ opacity: 0.8, scale: 1, rotate: 5 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <img src="/1.png" alt="" className="w-full h-full object-contain opacity-80" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-28 w-11 h-11"
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 0.5, scale: 1, rotate: -15 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <img src="/2.png" alt="" className="w-full h-full object-contain opacity-60" />
        </motion.div>

        {/* Left Side Decorations */}
        <motion.div
          className="absolute top-1/4 left-4 w-10 h-10"
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          animate={{ opacity: 0.4, scale: 1, rotate: 20 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <img src="/3.png" alt="" className="w-full h-full object-contain opacity-50" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-2 w-8 h-8"
          initial={{ opacity: 0, scale: 0, rotate: -40 }}
          animate={{ opacity: 0.35, scale: 1, rotate: -18 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <img src="/4.png" alt="" className="w-full h-full object-contain opacity-45" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-3 w-8 h-8"
          initial={{ opacity: 0, scale: 0, rotate: 60 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 30 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <img src="/5.png" alt="" className="w-full h-full object-contain opacity-40" />
        </motion.div>
        <motion.div
          className="absolute top-2/3 left-4 w-9 h-9"
          initial={{ opacity: 0, scale: 0, rotate: -35 }}
          animate={{ opacity: 0.4, scale: 1, rotate: -16 }}
          transition={{ duration: 1, delay: 2.7 }}
        >
          <img src="/6.png" alt="" className="w-full h-full object-contain opacity-50" />
        </motion.div>
        <motion.div
          className="absolute top-3/4 left-2 w-7 h-7"
          initial={{ opacity: 0, scale: 0, rotate: 50 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 25 }}
          transition={{ duration: 1, delay: 3.0 }}
        >
          <img src="/7.png" alt="" className="w-full h-full object-contain opacity-40" />
        </motion.div>

        {/* Right Side Decorations */}
        <motion.div
          className="absolute top-1/4 right-4 w-9 h-9"
          initial={{ opacity: 0, scale: 0, rotate: -60 }}
          animate={{ opacity: 0.35, scale: 1, rotate: -30 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <img src="/8.png" alt="" className="w-full h-full object-contain opacity-45" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-2 w-8 h-8"
          initial={{ opacity: 0, scale: 0, rotate: 40 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 18 }}
          transition={{ duration: 1, delay: 2.6 }}
        >
          <img src="/1.png" alt="" className="w-full h-full object-contain opacity-40" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-3 w-10 h-10"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 0.4, scale: 1, rotate: -20 }}
          transition={{ duration: 1, delay: 2.3 }}
        >
          <img src="/2.png" alt="" className="w-full h-full object-contain opacity-50" />
        </motion.div>
        <motion.div
          className="absolute top-2/3 right-3 w-10 h-10"
          initial={{ opacity: 0, scale: 0, rotate: -50 }}
          animate={{ opacity: 0.4, scale: 1, rotate: -25 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <img src="/3.png" alt="" className="w-full h-full object-contain opacity-50" />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-2 w-7 h-7"
          initial={{ opacity: 0, scale: 0, rotate: 35 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 15 }}
          transition={{ duration: 1, delay: 3.1 }}
        >
          <img src="/4.png" alt="" className="w-full h-full object-contain opacity-40" />
        </motion.div>

        {/* Middle Area Small Decorations */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-6 h-6"
          initial={{ opacity: 0, scale: 0, rotate: 25 }}
          animate={{ opacity: 0.25, scale: 1, rotate: 10 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          <img src="/5.png" alt="" className="w-full h-full object-contain opacity-30" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6"
          initial={{ opacity: 0, scale: 0, rotate: -25 }}
          animate={{ opacity: 0.25, scale: 1, rotate: -10 }}
          transition={{ duration: 1, delay: 3.3 }}
        >
          <img src="/6.png" alt="" className="w-full h-full object-contain opacity-30" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-6 h-6"
          initial={{ opacity: 0, scale: 0, rotate: 30 }}
          animate={{ opacity: 0.25, scale: 1, rotate: 15 }}
          transition={{ duration: 1, delay: 3.4 }}
        >
          <img src="/7.png" alt="" className="w-full h-full object-contain opacity-30" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6"
          initial={{ opacity: 0, scale: 0, rotate: -35 }}
          animate={{ opacity: 0.25, scale: 1, rotate: -18 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <img src="/8.png" alt="" className="w-full h-full object-contain opacity-30" />
        </motion.div>

        {/* Additional scattered decorations */}
        <motion.div
          className="absolute top-20 left-1/3 w-5 h-5"
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 20 }}
          transition={{ duration: 1, delay: 3.6 }}
        >
          <img src="/1.png" alt="" className="w-full h-full object-contain opacity-25" />
        </motion.div>
        <motion.div
          className="absolute top-20 right-1/3 w-5 h-5"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 0.2, scale: 1, rotate: -20 }}
          transition={{ duration: 1, delay: 3.7 }}
        >
          <img src="/2.png" alt="" className="w-full h-full object-contain opacity-25" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/3 w-5 h-5"
          initial={{ opacity: 0, scale: 0, rotate: 50 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 25 }}
          transition={{ duration: 1, delay: 3.8 }}
        >
          <img src="/3.png" alt="" className="w-full h-full object-contain opacity-25" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/3 w-5 h-5"
          initial={{ opacity: 0, scale: 0, rotate: -50 }}
          animate={{ opacity: 0.2, scale: 1, rotate: -25 }}
          transition={{ duration: 1, delay: 3.9 }}
        >
          <img src="/4.png" alt="" className="w-full h-full object-contain opacity-25" />
        </motion.div>
      </>

      {/* Background ART text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative">
          <img 
            src="/art.png" 
            alt="ART" 
            className="h-[20rem] w-auto object-contain opacity-80"
            style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
            }}
          />
        </div>
        
        {/* Gradient overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </motion.div>

      {/* Chinese Title above buttons - positioned relative to main container */}
      <motion.h1
        className="text-white text-5xl font-light tracking-[0.4em] whitespace-nowrap absolute top-16 left-1/2 transform -translate-x-1/2 z-20"
        style={{ 
          fontFamily: 'serif',
          textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        藏美寓
      </motion.h1>

      {/* Main Menu */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-center pt-32"
      >

        <div className="space-y-8 mt-4">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => onNavigate(item.id)}
              className="block text-left hover:bg-white/20 rounded-lg p-6 group relative overflow-hidden"
              style={{
                transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.8s ease'
              }}
            >
              <div className="flex items-center space-x-6 relative z-10">
                <span className="text-white/70 text-2xl font-mono">
                  {item.number}
                </span>
                <div>
                  <h2 
                    className="text-4xl font-black font-sans tracking-wide relative"
                    style={getTextStyle(item.id)}
                  >
                    {item.title}
                  </h2>
                  <p 
                    className="text-lg font-serif mt-1"
                    style={getSubtitleStyle(item.id)}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Logo - made smaller */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <img 
            src="/logo.png" 
            alt="HOME & HOTEL 立詠建設" 
            className="h-24 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
} 