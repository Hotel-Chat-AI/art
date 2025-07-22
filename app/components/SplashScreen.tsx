'use client';

import { motion } from 'framer-motion';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #F8BBD9 0%, #E8A5C4 50%, #D8A3C2 100%)'
      }}
      onClick={onEnter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Chinese title */}
      <motion.div
        className="absolute top-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-6xl font-light text-white/90 tracking-widest" style={{ fontFamily: 'serif' }}>
          藏美寓
        </h1>
      </motion.div>

      {/* Main ART container */}
      <motion.div 
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* ART letters with same styling as MainMenu */}
        <div className="relative">
          <h1 className="text-[24rem] font-black art-gradient" style={{ 
            fontFamily: 'Arial Black, sans-serif', 
            fontWeight: 900,
            letterSpacing: '0.1em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>ART</h1>
        </div>
        
        {/* Gradient overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </motion.div>

      {/* Bottom branding */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <img 
          src="/logo.png" 
          alt="HOME & HOTEL 立詠建設" 
          className="h-56 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300 mx-auto"
        />
      </motion.div>

      {/* Click to continue hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
      >
        <p className="text-white/60 text-sm tracking-wider">
          點擊進入 / Click to Enter
        </p>
      </motion.div>

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-8 left-8 w-24 h-24 border border-white/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-20 h-20 border border-white/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
} 
