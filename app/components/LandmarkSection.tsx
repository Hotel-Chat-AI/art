'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LandmarkSectionProps {
  onBack: () => void;
}

export default function LandmarkSection({ onBack }: LandmarkSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'future-vision-1',
      title: 'FUTURE VISION',
      subtitle: 'South Side of Zhongshan Girls\' Middle School Urban Renewal',
      description: '北市指標公辦都更 中山女中南側地區\n半畝20億開發利益 高密度國府精神',
      content: '全案樓地板12,700坪，前臨全台醫日式高龍，北市府中山女中、東緯住宅化小學區。\n結合20億打造全產品化，成為台北市頂級住宅，未來主力為頂級出租住宅地標，\n交通便捷十三號線捷運民生馬偕醫站，助力促進都更的整體觀。',
      footer: 'FUTURE VISION FOR URBAN RENEWAL',
      navLabel: '中山女中',
      backgroundImage: '/frames/future-vision-1.jpg'
    },
    {
      id: 'future-vision-2', 
      title: 'FUTURE VISION',
      subtitle: 'Taiwan Beer Bar Urban Renewal',
      description: '下一個南山人松菸 台灣首座啤酒文化園區\n首年文資服景 連通啤酒成政達 露信上台千年',
      content: '總眾南山人松菸成功後視覺，佔地達四大觀光大樓成為主任豐富深度樂\n首景，每件景觀陳設文化園區，突破國首上千5萬人次觀光人潮，國際內外日\n不空空成區環境，目前由花劇重選在觀光政，第一期6公頃都更進年到成主，\n經營、商業、可塑拓應十前榮榮。',
      footer: 'FUTURE VISION FOR URBAN RENEWAL',
      navLabel: '啤酒文化園區',
      backgroundImage: '/frames/future-vision-2.jpg'
    },
    {
      id: 'landmark-map',
      title: '',
      subtitle: '',
      description: '',
      content: '',
      footer: '',
      navLabel: '區域地圖',
      isFullPageImage: true,
      backgroundImage: '/frames/landmark-map.jpg'
    },
    {
      id: 'future-vision-3',
      title: 'FUTURE VISION',
      subtitle: 'Premium Development Location',
      description: '城市核心區域 頂級住宅地標\n建國南京交匯點 市心黃金地段',
      content: '位於台北市精華地段，建國南京十字軸線交匯處，周邊商業機能完善，\n交通網絡四通八達，鄰近捷運站點，生活機能便利性極佳。\n結合現代建築美學與都市更新理念，打造台北市新興住宅標竿。',
      footer: 'FUTURE VISION FOR URBAN RENEWAL',
      navLabel: '開發詳情',
      backgroundImage: '/025.png'
    }
  ];

  const landmarkAreas = [
    { name: '臺北車子重\n兩區新門市\n客車聯手全市投資', color: '#DAA520' },
    { name: '臺北車站六福皇宮\n站前特區國門過道', color: '#9370DB' },
    { name: '台灣文創聖地\n景山文創園區', color: '#20B2AA' },
    { name: '三創生活園區\n光華商場\n國際數位聚落', color: '#FF69B4' },
    { name: '文湖線金台子億\n建國高架文化園區\n下一個松菸', color: '#32CD32' },
    { name: '藏美寓', color: '#DDA0DD' },
    { name: '北市府掌嘗\n中山女中南間都更\n660億動能啟動', color: '#FFD700' }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Left Sidebar - Same as AndouTadaoSection */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
        aria-label="Go back to main menu"
      >
        {/* ART Logo Section at Top */}
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

        {/* Vertical Back Menu Text */}
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

      {/* Main Content */}
      <div className="ml-16 h-screen relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slides[currentSlide].isFullPageImage ? (
              // Third slide - Full page image with animations
              <motion.div
                className="w-full h-full relative"
                style={{
                  backgroundColor: '#F4A4A4' // Solid coral/pink color background
                }}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                {/* Animated title overlay */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center"
                >
                  <h1 className="text-white text-4xl font-bold tracking-wide">
                    建國南京十字樞紐 市心軸線繁華之首
                  </h1>
                </motion.div>

                {/* Animated landmark circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-6xl px-8">
                    <div className="flex justify-between items-center">
                      {landmarkAreas.map((area, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1 + index * 0.2,
                            type: "spring",
                            bounce: 0.3
                          }}
                          whileHover={{ scale: 1.1 }}
                          className="relative"
                        >
                          <div
                            className="w-32 h-32 rounded-full flex items-center justify-center text-white text-base font-bold text-center p-3 cursor-pointer shadow-lg"
                            style={{ backgroundColor: area.color }}
                          >
                            <span className="leading-tight">{area.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom image */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.3 }}
                  className="absolute bottom-0 left-0 w-full overflow-hidden"
                  style={{ height: '30vh' }}
                >
                  <img 
                    src="/022.png" 
                    alt="Landmark map"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-110 h-full w-auto object-contain min-w-full ml-[20px]"
                  />
                </motion.div>

                {/* Right side dot navigation - only for map slide */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50"
                >
                  {/* Current slide dot (slide 2) */}
                  <motion.button
                    onClick={() => setCurrentSlide(2)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-4 h-4 rounded-full bg-white border-2 border-white shadow-lg transition-all duration-200"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, type: "spring", bounce: 0.4 }}
                  />
                  
                  {/* Next slide dot (slide 3) */}
                  <motion.button
                    onClick={() => setCurrentSlide(3)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-4 h-4 rounded-full bg-white/40 border-2 border-white hover:bg-white/60 shadow-lg transition-all duration-200"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.6, type: "spring", bounce: 0.4 }}
                  />
                </motion.div>

                {/* Bottom navigation buttons */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute bottom-64 left-1/2 transform -translate-x-1/2 flex gap-6"
                >
                  <motion.button
                    onClick={() => setCurrentSlide(0)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                      currentSlide === 0
                        ? 'text-white bg-white/20 rounded-full border border-white/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                    }`}
                  >
                    中山女中
                  </motion.button>
                  <motion.button
                    onClick={() => setCurrentSlide(1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                      currentSlide === 1
                        ? 'text-white bg-white/20 rounded-full border border-white/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                    }`}
                  >
                    啤酒文化園區
                  </motion.button>
                  <motion.button
                    onClick={() => setCurrentSlide(2)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                      currentSlide === 2
                        ? 'text-white bg-white/20 rounded-full border border-white/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                    }`}
                  >
                    區域地圖
                  </motion.button>
                </motion.div>
              </motion.div>
            ) : (
              // First two slides - Text content with background
              <div className="flex w-full h-full">
                {/* Left content panel */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-1/2 p-12 flex flex-col justify-center relative text-center"
                  style={{ backgroundColor: '#F4A4A4' }} // Coral background
                >
                  {/* Content */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                  >
                    <motion.h3
                      className="text-white text-sm font-bold tracking-widest mb-4 uppercase"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slides[currentSlide].title}
                    </motion.h3>

                    <motion.h1
                      className="text-white text-5xl font-black leading-tight mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      FUTURE<br />VISION
                    </motion.h1>

                    <motion.p
                      className="text-white text-lg mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>

                    <motion.div
                      className="border-l-4 border-white pl-6 mb-8 text-left inline-block"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <h2 className="text-white text-2xl font-bold mb-4 leading-relaxed">
                        {slides[currentSlide].description.split('\n').map((line, index) => (
                          <div key={index}>{line}</div>
                        ))}
                      </h2>
                    </motion.div>

                    <motion.p
                      className="text-white text-base leading-relaxed mb-8 opacity-90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      transition={{ delay: 0.8 }}
                    >
                      {slides[currentSlide].content.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < slides[currentSlide].content.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </motion.p>

                    <motion.div
                      className="border-t border-white/30 pt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <p className="text-white text-sm tracking-wider">
                        {slides[currentSlide].footer}
                      </p>
                      
                      {/* Navigation buttons with modern styling */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex justify-center gap-6 mt-6"
                      >
                        <motion.button
                          onClick={() => setCurrentSlide(0)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                            currentSlide === 0
                              ? 'text-white bg-white/20 rounded-full border border-white/30'
                              : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                          }`}
                        >
                          中山女中
                        </motion.button>
                        <motion.button
                          onClick={() => setCurrentSlide(1)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                            currentSlide === 1
                              ? 'text-white bg-white/20 rounded-full border border-white/30'
                              : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                          }`}
                        >
                          啤酒文化園區
                        </motion.button>
                        <motion.button
                          onClick={() => setCurrentSlide(2)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                            currentSlide === 2
                              ? 'text-white bg-white/20 rounded-full border border-white/30'
                              : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                          }`}
                        >
                          區域地圖
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Right image panel */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-1/2 relative bg-cover bg-center"
                  style={{
                    backgroundColor: '#E0E0E0' // Fallback for now, will be replaced with actual images
                  }}
                >
                  {/* Slide images */}
                  <div className="absolute inset-0">
                    <img 
                      src={
                        currentSlide === 0 ? '/020.png' :
                        currentSlide === 1 ? '/021.png' :
                        '/025.png'
                      }
                      alt={
                        currentSlide === 0 ? 'Future Vision Image 1' :
                        currentSlide === 1 ? 'Future Vision Image 2' :
                        'Development Details Image'
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 