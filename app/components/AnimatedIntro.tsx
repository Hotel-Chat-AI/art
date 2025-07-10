'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedIntroProps {
  onComplete: () => void;
  isTransitioning?: boolean;
}

export default function AnimatedIntro({ onComplete, isTransitioning = false }: AnimatedIntroProps) {
  const [phase, setPhase] = useState<'black' | 'reveal' | 'complete'>('black');

  useEffect(() => {
    const timers = [
      // More gradual transition to pink and reveal
      setTimeout(() => setPhase('reveal'), 1200),
      // Show complete state but don't auto-advance
      setTimeout(() => {
        setPhase('complete');
      }, 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const handleClick = () => {
    if (phase === 'complete') {
      onComplete();
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden cursor-pointer"
      style={{
        background: phase === 'black' 
          ? '#000000'
          : 'linear-gradient(135deg, #FFB7C5 0%, #FFC0CB 25%, #FFCCCB 50%, #FFE4E1 75%, #FFF8F8 100%)',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background transition overlay for smoother gradual effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FFB7C5 0%, #FFC0CB 25%, #FFCCCB 50%, #FFE4E1 75%, #FFF8F8 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: phase === 'reveal' || phase === 'complete' ? 1 : 0 
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* PNG Flower Decorations - Exact same layout as MainMenu */}
      <AnimatePresence>
        {(phase === 'reveal' || phase === 'complete') && (
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
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {(phase === 'reveal' || phase === 'complete') && (
          <motion.div
            className="text-center relative z-10"
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isTransitioning ? 0 : 1, 
              scale: isTransitioning ? 0.5 : 1,
              y: isTransitioning ? -50 : 0
            }}
            transition={{ duration: isTransitioning ? 0.8 : 1.5, ease: "easeOut" }}
          >
            {/* Chinese Title - Non-selectable */}
            <motion.h1
              className="text-white text-5xl font-light tracking-[0.4em] mb-16"
              style={{ 
                fontFamily: 'serif',
                textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ 
                opacity: isTransitioning ? 0 : 1, 
                y: isTransitioning ? -80 : 0,
                scale: isTransitioning ? 0.3 : 1
              }}
              transition={{ duration: isTransitioning ? 0.8 : 1, delay: isTransitioning ? 0 : 0.5 }}
            >
              藏美寓
            </motion.h1>

            {/* ART Text - Non-selectable */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ 
                opacity: isTransitioning ? 0.15 : 1, 
                scale: isTransitioning ? 0.9 : 1
              }}
              transition={{ duration: isTransitioning ? 0.8 : 1.5, delay: isTransitioning ? 0 : 0.8 }}
            >
              <img 
                src="/art.png" 
                alt="ART" 
                className="h-[18rem] w-auto object-contain"
                style={{ 
                  filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.2))',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none'
                }}
              />
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isTransitioning ? 0 : 1, 
                y: isTransitioning ? 50 : 0
              }}
              transition={{ duration: isTransitioning ? 0.8 : 1.5, delay: isTransitioning ? 0 : 1.2 }}
              className="mt-16 flex justify-center"
            >
              <img 
                src="/logo.png" 
                alt="HOME & HOTEL 立詠建設" 
                className="h-32 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 