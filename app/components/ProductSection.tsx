'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductSectionProps {
  onBack: () => void;
}

const floorPlans = [
  { id: 'r1f', name: 'R1F' },
  { id: '13f', name: '9–13F' },
  { id: '12f', name: '5–8F' },
  { id: '3-4f', name: '3–4F' },
  { id: '2f', name: '2F' },
  { id: '1f', name: '1F' },
  { id: 'b1f', name: 'B1F' },
  { id: 'b2f', name: 'B2F' },
  { id: 'b3f', name: 'B3F' },
];

export default function ProductSection({ onBack }: ProductSectionProps) {
  const [currentView, setCurrentView] = useState<'main' | 'architecture' | 'floorplan' | 'map'>('main');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedFloor, setSelectedFloor] = useState<string>('1f');
  const [currentMapImage, setCurrentMapImage] = useState<string>('map1.png');

  const handleArchitectureClick = () => {
    setCurrentView('architecture');
    setCurrentSection(0); // Start with first section
  };

  const handleFloorPlanClick = () => {
    setCurrentView('floorplan');
    setSelectedFloor('1f'); // Ensure it starts with 1F
  };

  const handleLightShow = () => {
    // This will be implemented later when you provide details
    console.log('Light show clicked');
  };

  const handleMapClick = (imageName: string) => {
    setCurrentMapImage(imageName);
    setCurrentView('map');
  };

  if (currentView === 'main') {
    return (
      <div 
        className="min-h-screen relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FFB5B5 0%, #FFB8B8 10%, #FFC0C0 20%, #FFCAC0 40%, #FFD1C1 60%, #FFE0D6 80%, #FFF0E8 100%)'
        }}
      >
        {/* Left Sidebar */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
          aria-label="Go back to main menu"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <div 
              className="text-xl font-black mb-2"
                  style={{
                background: 'linear-gradient(135deg, #00CFFF, #FF3366)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              ART
                </div>
            <div className="text-gray-800 text-xs font-medium text-center">
              藏美寓
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="transform -rotate-90 whitespace-nowrap">
              <span className="text-gray-700 text-sm font-bold tracking-widest uppercase">
                ← BACK MENU
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <span className="text-white font-bold text-lg">←</span>
          </motion.div>
        </motion.button>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onBack}
          className="absolute top-6 right-6 z-50 flex flex-col items-center"
        >
          <span className="text-white text-2xl font-light">×</span>
          <span className="text-white text-xs uppercase tracking-wide">CLOSE</span>
        </motion.button>

        {/* Floating Flower Petals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Floating petals */}
          <motion.div
            className="absolute text-white text-6xl opacity-30"
            style={{ left: '15%', top: '15%' }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🌸
          </motion.div>
          <motion.div
            className="absolute text-white text-4xl opacity-25"
            style={{ left: '25%', top: '25%' }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -3, 0],
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            🌺
          </motion.div>
          <motion.div
            className="absolute text-white text-5xl opacity-20"
            style={{ left: '35%', top: '35%' }}
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 8, 0],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            🌸
          </motion.div>
          <motion.div
            className="absolute text-white text-3xl opacity-30"
            style={{ left: '75%', top: '20%' }}
            animate={{ 
              y: [0, -18, 0],
              rotate: [0, -5, 0],
              opacity: [0.3, 0.45, 0.3]
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            🌹
          </motion.div>
          <motion.div
            className="absolute text-white text-4xl opacity-25"
            style={{ left: '85%', top: '40%' }}
            animate={{ 
              y: [0, -22, 0],
              rotate: [0, 7, 0],
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            🌺
          </motion.div>
        </motion.div>

        {/* Architectural Line Drawing - Right Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 2 }}
          className="absolute right-0 top-0 w-1/3 h-full pointer-events-none"
        >
          <svg
            viewBox="0 0 400 600"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
          >
            <g stroke="white" strokeWidth="1" fill="none" opacity="0.6">
              {/* Building outline */}
              <rect x="50" y="50" width="300" height="500" />
              <rect x="70" y="70" width="260" height="460" />
              
              {/* Floor lines */}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={i} x1="70" y1={70 + i * 38} x2="330" y2={70 + i * 38} />
              ))}
              
              {/* Vertical lines */}
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={i} x1={70 + i * 52} y1="70" x2={70 + i * 52} y2="530" />
              ))}
              
              {/* Windows */}
              {Array.from({ length: 60 }).map((_, i) => (
                <rect 
                  key={i} 
                  x={80 + (i % 5) * 52} 
                  y={80 + Math.floor(i / 5) * 38} 
                  width="40" 
                  height="25" 
                />
              ))}
            </g>
          </svg>
        </motion.div>

        {/* Background ART text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-16"
        >
          <div className="relative">
            <img 
              src="/art.png" 
              alt="ART" 
              className="object-contain"
              style={{
                height: '60vh',
                width: '49.5vw',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          </div>
        </motion.div>

        {/* Main Menu - Positioned relative to ART */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 flex items-center justify-center min-h-screen"
        >
          <div className="w-full relative flex justify-center items-center">
            {/* Architecture Button - Left Side, above ART center */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              onMouseEnter={() => setHoveredButton('architecture')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={handleArchitectureClick}
              className="absolute -left-80 -top-16 text-left hover:bg-white/20 rounded-lg p-6 group relative overflow-hidden"
              style={{
                transform: hoveredButton === 'architecture' ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.8s ease'
              }}
            >
              <div className="flex items-center space-x-6 relative z-10">
                <span className="text-white/70 text-2xl font-mono">01</span>
                <div>
                  <h2 className="text-4xl font-black font-sans tracking-wide text-white">
                    ARCHITECTURE
                  </h2>
                  <p className="text-lg font-serif mt-1 text-white/80">
                    建築外觀
                  </p>
                </div>
                      </div>
                    </motion.button>

            {/* Floor Plan Button - Right Side, above ART center */}
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              onMouseEnter={() => setHoveredButton('floorplan')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={handleFloorPlanClick}
              className="absolute -right-80 -top-16 text-left hover:bg-white/20 rounded-lg p-6 group relative overflow-hidden"
              style={{
                transform: hoveredButton === 'floorplan' ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.8s ease'
              }}
            >
              <div className="flex items-center space-x-6 relative z-10">
                <span className="text-white/70 text-2xl font-mono">02</span>
                <div>
                  <h2 className="text-4xl font-black font-sans tracking-wide text-white">
                    FLOOR PLAN
                  </h2>
                  <p className="text-lg font-serif mt-1 text-white/80">
                    平面規劃
                  </p>
                </div>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Logo - Positioned much higher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20"
        >
          <img 
            src="/logo.png" 
            alt="HOME & HOTEL 立詠建設" 
            className="h-32 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>

        {/* Blue Navigation Button - Bottom Right */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="absolute bottom-6 right-6 z-40"
        >
          <div className="bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all duration-300 shadow-lg">
            <span className="text-sm">了解更多</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </motion.button>
      </div>
    );
  }

  // Architecture view placeholder
  if (currentView === 'architecture') {
    const sections = [
      {
        id: 'day',
        background: 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #E0F6FF 100%)',
        textColor: 'text-white',
        textPosition: 'right'
      },
      {
        id: 'split', 
        background: 'linear-gradient(90deg, #D4A574 0%, #E8C5A0 50%, #87CEEB 50%, #B0E0E6 100%)',
        textColor: 'text-white',
        textPosition: 'left'
      },
      {
        id: 'night',
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
        textColor: 'text-white',
        textPosition: 'center'
      }
    ];

    return (
      <div 
        className="min-h-screen relative overflow-hidden"
        style={{ background: sections[currentSection].background }}
      >
        {/* Left Sidebar */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
          aria-label="Go back to main menu"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center relative z-[9999]"
          >
            <img 
              src="/tab.png" 
              alt="TAB" 
              className="h-56 w-auto object-contain mb-2 relative z-[9999]"
            />
            <div className="text-gray-800 text-xs font-medium text-center">
              藏美寓
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="transform -rotate-90 whitespace-nowrap">
              <span className="text-black text-sm font-bold tracking-widest uppercase">
                ← BACK MENU
              </span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <span className="text-white font-bold text-lg">←</span>
          </motion.div>
        </motion.button>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onBack}
          className="absolute top-6 right-6 z-50 flex flex-col items-center"
        >
          <span className="text-white text-2xl font-light">×</span>
          <span className="text-white text-xs uppercase tracking-wide">CLOSE</span>
        </motion.button>

        {/* Navigation Dots */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="ml-16 flex h-screen">
          {/* Section 1: Full Background Image with Text Overlay */}
          {currentSection === 0 && (
            <>
              {/* Wrapper with relative positioning */}
              <div className="relative w-full h-full">
                {/* Full background image */}
                <img
                  src="/060.png"
                  alt="Architecture Day View"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Right - Text Overlay */}
                <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center p-8">
                  <motion.div
                    key={currentSection}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`${sections[currentSection].textColor} max-w-lg`}
                  >
                    <motion.h1
                      className="text-5xl font-black mb-4"
                      style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                    >
                      Timeless ART
                    </motion.h1>
                    <motion.h2
                      className="text-4xl font-light mb-6"
                      style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                    >
                      Boutique Architecture
                    </motion.h2>
                    
                    <motion.h3
                      className="text-2xl font-medium mb-8"
                      style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                    >
                      當代建築經典 輕奢精品寓所
                    </motion.h3>

                    <motion.p
                      className="text-lg leading-relaxed"
                      style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
                    >
                      師法精品美學語彙，浪花白花崗岩定調優雅風範，
                      石材巧妙分割締造勻稱比例，
                      混合木紋鋁格柵，形塑立面豐富表情，簡約洗練，能為歲月久看。
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </>
          )}

          {/* Section 2: Text on Left, Image on Right */}
          {currentSection === 1 && (
            <>
              {/* Left - Text */}
              <div className="w-2/5 flex items-center justify-center pl-8 pr-2 ml-4">
                <motion.div
                  key={currentSection}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`${sections[currentSection].textColor} max-w-lg translate-x-4`}
                >
                  <motion.h1
                    className="text-5xl font-black mb-4"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    Timeless ART
                  </motion.h1>
                  <motion.h2
                    className="text-4xl font-light mb-6"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                  >
                    Boutique Architecture
                  </motion.h2>
                  
                  <motion.h3
                    className="text-2xl font-medium mb-8"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
                  >
                    當代建築經典 輕奢精品寓所
                  </motion.h3>

                  <motion.p
                    className="text-lg leading-relaxed"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
                  >
                    師法精品美學語彙，浪花白花崗岩定調優雅風範，
                    石材巧妙分割締造勻稱比例，
                    混合木紋鋁格柵，形塑立面豐富表情，簡約洗練，能為歲月久看。
                  </motion.p>
                </motion.div>
              </div>
              
              {/* Right - Image (full height) */}
              <div className="w-3/5 relative h-full overflow-hidden">
                <motion.img
                  key={currentSection}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  src="/061.png"
                  alt="Split View Architecture"
                  className="absolute inset-0 w-full h-full object-cover translate-x-16"
                />
              </div>
            </>
          )}

          {/* Section 3: Text Centered with Background Image */}
          {currentSection === 2 && (
            <div className="w-full h-full relative">
              {/* Background Image */}
              <motion.div
                key={currentSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("/062.png")',
                  backgroundColor: '#1a237e'
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
              </motion.div>

              {/* Right Half Text Overlay */}
              <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center p-8 z-10">
                <motion.div
                  key={currentSection}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`${sections[currentSection].textColor} max-w-lg text-left px-8`}
                >
                  <motion.h1
                    className="text-5xl font-black mb-4"
                    style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}
                  >
                    Timeless ART
                  </motion.h1>
                  <motion.h2
                    className="text-4xl font-light mb-6"
                    style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}
                  >
                    Boutique Architecture
                  </motion.h2>
                  
                  <motion.h3
                    className="text-2xl font-medium mb-8"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
                  >
                    當代建築經典 輕奢精品寓所
                  </motion.h3>

                  <motion.p
                    className="text-lg leading-relaxed mb-8"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
                  >
                    師法精品美學語彙，浪花白花崗岩定調優雅風範，
                    石材巧妙分割締造勻稱比例，
                    混合木紋鋁格柵，形塑立面豐富表情，簡約洗練，能為歲月久看。
                  </motion.p>

                  {/* Pink Button for Third Section */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={handleLightShow}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg text-lg"
                  >
                    燈光展演
                  </motion.button>
          </motion.div>
              </div>
            </div>
          )}
        </div>

        {/* Blue Navigation Button - Bottom Right */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 right-6 z-40"
        >
          <div className="bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 flex items-center space-x-2 text-white transition-all duration-300 shadow-lg">
            <span className="text-sm">了解更多</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </motion.button>
      </div>
    );
  }

  // Full screen map view
  if (currentView === 'map') {
    // Car image page
    if (currentMapImage === 'car.png') {
      return (
        <div 
          className="min-h-screen relative overflow-hidden bg-black cursor-pointer flex items-start justify-center pt-20"
          onClick={() => setCurrentView('floorplan')}
        >
          <motion.img
            src="/car.png"
            alt="Car Image"
            className="max-w-4xl max-h-[80vh] object-contain"
            initial={{ opacity: 0, scale: 1.9 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      );
    }

    // Lamp image page
    if (currentMapImage === 'lamp.png') {
      return (
        <div 
          className="min-h-screen relative overflow-hidden bg-black cursor-pointer flex items-center justify-center pt-20"
          onClick={() => setCurrentView('floorplan')}
        >
          <motion.img
            src="/lamp.png"
            alt="Lamp Image"
            className="max-w-4xl max-h-[80vh] object-contain"
            initial={{ opacity: 0, scale: 1.9 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      );
    }

    // Sak1 image page
    if (currentMapImage === 'sak1.png') {
      return (
        <div 
          className="min-h-screen relative overflow-hidden bg-black cursor-pointer flex items-center justify-center pt-8"
          onClick={() => setCurrentView('floorplan')}
        >
          <motion.img
            src="/sak1.png"
            alt="Sak1 Image"
            className="max-w-4xl max-h-[85vh] object-contain"
            initial={{ opacity: 0, scale: 1.9 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      );
    }

    // Last image page
    if (currentMapImage === 'last.png') {
      return (
        <div 
          className="min-h-screen relative overflow-hidden bg-black cursor-pointer flex items-center justify-center pt-40"
          onClick={() => setCurrentView('floorplan')}
        >
          <motion.img
            src="/last.png"
            alt="Last Image"
            className="max-w-4xl max-h-[70vh] object-contain"
            initial={{ opacity: 0, scale: 1.9 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      );
    }

    // Default centered layout for all other images
    return (
      <div 
        className="min-h-screen relative overflow-hidden bg-black cursor-pointer flex items-center justify-center"
        onClick={() => setCurrentView('floorplan')}
      >
        <motion.img
          src={`/${currentMapImage}`}
          alt="Full Screen Map"
          className="max-w-full max-h-full object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    );
  }

  // Floor plan view layout
  const floorScale = ['3-4f','2f'].includes(selectedFloor) ? 1.15 : 1;
  const objectClass = ['3-4f','2f'].includes(selectedFloor) ? 'object-contain' : 'object-cover';
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Left Sidebar */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
        aria-label="Go back to main menu"
      >
        {/* TAB Logo Section at Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <img src="/tab.png" alt="TAB" className="h-56 w-auto object-contain mb-2" />
          <div className="text-gray-800 text-xs font-medium text-center">藏美寓</div>
        </motion.div>

        {/* Vertical Back Menu Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="transform -rotate-90 whitespace-nowrap">
            <span className="text-black text-sm font-bold tracking-widest uppercase">← BACK MENU</span>
          </div>
        </motion.div>

        {/* Back Button at Bottom */}
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.8)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        >
          <span className="text-white font-bold text-lg">←</span>
        </motion.div>
      </motion.button>

      {/* Content */}
      <div className="ml-16 flex h-screen">
        {/* Floor list column */}
        <div className="w-1/4 flex flex-col items-center justify-center space-y-6">
          {floorPlans.map(plan => (
            <button
              key={plan.id}
              onClick={() => setSelectedFloor(plan.id)}
              className={`text-lg font-medium tracking-widest border-b pb-1 w-24 text-center transition-colors ${selectedFloor===plan.id? 'border-[rgba(250,165,164,255)]':'text-gray-700 border-gray-400'}`}
              style={{
                color: selectedFloor === plan.id ? 'rgba(250,165,164,255)' : undefined
              }}
              onMouseEnter={(e) => {
                if (selectedFloor !== plan.id) {
                  e.currentTarget.style.color = 'rgba(250,165,164,255)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedFloor !== plan.id) {
                  e.currentTarget.style.color = '';
                }
              }}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Image column */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedFloor}
              src={
                (selectedFloor === 'r1f' && '/r1f.png') ||
                (selectedFloor === '13f' && '/13f.png') ||
                (selectedFloor === '12f' && '/8f.png') ||
                (selectedFloor === '3-4f' && '/4f.png') ||
                (selectedFloor === '2f' && '/2f.png') ||
                (selectedFloor === 'b1f' && '/b1f.png') ||
                (selectedFloor === 'b2f' && '/b2f.png') ||
                (selectedFloor === 'b3f' && '/b3f.png') ||
                '/mainf.png'
              }
              alt="Floor Plan"
              className={`absolute inset-0 w-full h-full ${objectClass}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: floorScale }}
              exit={{ opacity: 0, scale: floorScale*1.05 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          
          {/* Pink dot for R1F floor plan */}
          {selectedFloor === 'r1f' && (
            <motion.button
              onClick={() => handleMapClick('map1.png')}
              className="absolute rounded-full hover:scale-125 transition-all duration-200 shadow-lg z-10"
              style={{
                top: '60%',
                left: '22%',
                transform: 'translate(-50%, -50%)',
                width: 'max(6px, min(0.8vw, 12px))',
                height: 'max(6px, min(0.8vw, 12px))',
                backgroundColor: 'rgba(250,165,164,255)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
            />
          )}
          
          {/* A1-A5 unit buttons and small dot for apartment floors */}
          <AnimatePresence>
            {(['13f', '12f', '3-4f', '2f'].includes(selectedFloor)) && (
              <motion.div
                key={selectedFloor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => handleMapClick('floor2.png')}
                  className="absolute rounded-full hover:scale-125 transition-all duration-200 shadow-lg z-10"
                  style={{
                    top: '50%',
                    left: '72%',
                    transform: 'translate(-50%, -50%)',
                    width: 'max(6px, min(0.8vw, 12px))',
                    height: 'max(6px, min(0.8vw, 12px))',
                    backgroundColor: 'rgba(250,165,164,255)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                />
                
                {/* Big circles for A1-A5 units */}
                {[
                  { id: 'A1', top: '60%', left: '61%', image: 'a1.png' },
                  { id: 'A2', top: '60%', left: '42%', image: 'a2.png' },
                  { id: 'A3', top: '60%', left: '27%', image: 'a3.png' },
                  { id: 'A4', top: '40%', left: '17%', image: 'a4.png' },
                  { id: 'A5', top: '36%', left: '42%', image: 'a5.png' }
                ].map((unit, index) => (
                  <motion.div
                    key={unit.id}
                    onClick={() => handleMapClick(unit.image)}
                    className="absolute rounded-full border-2 border-white hover:scale-110 transition-all duration-200 shadow-lg z-10 flex items-center justify-center cursor-pointer"
                    style={{
                      top: unit.top,
                      left: unit.left,
                      transform: 'translate(-50%, -50%)',
                      width: 'max(30px, min(3vw, 50px))',
                      height: 'max(30px, min(3vw, 50px))',
                      backgroundColor: 'rgba(250,165,164,255)'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span 
                      className="text-white font-bold text-xs"
                      style={{ fontSize: 'max(8px, min(1vw, 14px))' }}
                    >
                      {unit.id}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Three small dots for 1F floor plan */}
          {selectedFloor === '1f' && (
            <>
              {[
                { id: '1', top: 'calc(45% - 25px)', left: '37%', image: 'car.png' },
                { id: '2', top: '59%', left: '64%', image: 'lamp.png' },
                { id: '3', top: '73%', left: '67%', image: 'sak1.png' }
              ].map((dot, index) => (
                <motion.button
                  key={dot.id}
                  onClick={() => handleMapClick(dot.image)}
                  className="absolute rounded-full hover:scale-125 transition-all duration-200 shadow-lg z-10"
                  style={{
                    top: dot.top,
                    left: dot.left,
                    transform: 'translate(-50%, -50%)',
                    width: 'max(8px, min(1vw, 15px))',
                    height: 'max(8px, min(1vw, 15px))',
                    backgroundColor: 'rgba(250,165,164,255)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </>
          )}

          {/* Small pink dot for B1F floor plan */}
          {selectedFloor === 'b1f' && (
            <motion.button
              onClick={() => handleMapClick('last.png')}
              className="absolute rounded-full hover:scale-125 transition-all duration-200 shadow-lg z-10"
              style={{
                top: '77%',
                left: '61%',
                transform: 'translate(-50%, -50%)',
                width: 'max(6px, min(0.8vw, 12px))',
                height: 'max(6px, min(0.8vw, 12px))',
                backgroundColor: 'rgba(250,165,164,255)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
            />
          )}
        </div>
      </div>
    </div>
  );
} 