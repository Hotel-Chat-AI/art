'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FrameAnimationProps {
  onComplete: () => void;
}

export default function FrameAnimation({ onComplete }: FrameAnimationProps) {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showClickHint, setShowClickHint] = useState(false);

  const totalFrames = 57;
  const frameDelay = 35; // Reduced from 60ms to 35ms for faster, smoother playback (~28 fps)

  useEffect(() => {
    if (currentFrame < totalFrames && !isAnimationComplete) {
      const timer = setTimeout(() => {
        setCurrentFrame(prev => prev + 1);
      }, frameDelay);

      return () => clearTimeout(timer);
    } else if (currentFrame >= totalFrames && !isAnimationComplete) {
      setIsAnimationComplete(true);
      // Show click hint after a brief delay
      setTimeout(() => setShowClickHint(true), 500);
    }
  }, [currentFrame, isAnimationComplete, totalFrames, frameDelay]);

  const handleClick = () => {
    if (isAnimationComplete) {
      onComplete();
    }
  };

  const frameNumber = String(currentFrame).padStart(3, '0');

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Frame Animation */}
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.img
          key={currentFrame}
          src={`/frames/ezgif-frame-${frameNumber}.jpg`}
          alt={`Frame ${currentFrame}`}
          className="max-w-full max-h-full object-contain"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.02 }}
        />
      </div>

      {/* Click hint - only show when animation is complete */}
      <AnimatePresence>
        {showClickHint && isAnimationComplete && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-white/80 text-lg tracking-wider font-light"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              點擊繼續 / Click to Continue
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white/60 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentFrame / totalFrames) * 100}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>

      {/* Frame counter (optional - can be removed if not desired) */}
      <div className="absolute top-4 right-4 text-white/60 text-sm font-mono">
        {currentFrame} / {totalFrames}
      </div>
    </motion.div>
  );
} 