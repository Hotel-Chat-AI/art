'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FunctionSectionProps {
  onBack: () => void;
}

export default function FunctionSection({ onBack }: FunctionSectionProps) {
  const [currentMap, setCurrentMap] = useState('map2.png');
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [cameraDetailPage, setCameraDetailPage] = useState<string | null>(null);

  const handleButtonClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
    setCameraDetailPage(null); // Reset camera detail when switching maps
    switch(buttonNumber) {
      case 1:
        setCurrentMap('map3.png');
        break;
      case 2:
        setCurrentMap('map4.png');
        break;
      case 3:
        setCurrentMap('map5.png');
        break;
      case 4:
        setCurrentMap('map6.png');
        break;
      default:
        setCurrentMap('map2.png');
    }
  };

  const handleCameraClick = (cameraId: string) => {
    setCameraDetailPage(cameraId);
  };

  const handleBackFromCamera = () => {
    setCameraDetailPage(null);
  };

    // Camera Detail Page View - Full screen with text overlay
  if (cameraDetailPage) {
    const getCameraContent = (cameraId: string) => {
      if (cameraId.includes('富錦商圈')) {
        return {
          title: '松江南京金融重鎮 權掌商業命脈',
          description: '南京東路二段、三段為北市指標商辦聚落，舉目皆是企業總部、頂級商辦、飯店百貨，僅僅2公里吸引了超過20家金融機構進駐。',
          image: `/art/${((cameraId.charCodeAt(cameraId.length - 1) || 0) % 8) + 1}.png`
        };
      } else if (cameraId.includes('榆星散策')) {
        return {
          title: '梁記雞肉飯 飄香40年 綜藝天后激推',
          description: '梁記雞肉飯標榜道地嘉義味，綜藝天后徐熙娣小S更曾在康熙來了激推，其手撕雞肉飯加半熟荷包蛋為最愛便當之一，價格平實卻有不凡滋味。',
          image: `/art/${((cameraId.charCodeAt(cameraId.length - 1) || 0) % 8) + 1}.png`
        };
      } else if (cameraId.includes('藝文綠金')) {
        return {
          title: '微風廣場堆疊精品 輝映時尚剪影',
          description: '微風廣場佔立時尚圈口浪尖20年，為台北指標精品商圈，微風名媛領銜時代連立國際品味，獨家代理多間潮流精品，微風之夜更是台灣時尚盛會。',
          image: `/art/${((cameraId.charCodeAt(cameraId.length - 1) || 0) % 8) + 1}.png`
        };
      } else {
        return {
          title: '書香校園環境 學術文化薰陶',
          description: '周邊匯聚多所知名學府，從國小到大學完整教育體系，濃厚學術氛圍與文化底蘊，為下一代提供優質成長環境。',
          image: `/art/${((cameraId.charCodeAt(cameraId.length - 1) || 0) % 8) + 1}.png`
        };
      }
    };

    const content = getCameraContent(cameraDetailPage);

    return (
      <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(233,188,187,255)' }}>
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
            className="flex flex-col items-center relative z-[9999]"
          >
            <img 
              src="/art/tab.png"
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

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-16 min-h-screen relative cursor-pointer"
          onClick={handleBackFromCamera}
          style={{
            backgroundImage: `url('${content.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Text Content in Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute bottom-8 left-20 text-white z-10 max-w-2xl"
          >
            <h1 className="text-4xl font-bold mb-4 tracking-wide shadow-text">
              {content.title}
            </h1>
            <p className="text-lg leading-relaxed shadow-text">
              {content.description}
            </p>
          </motion.div>

          {/* Back indicator in top right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 right-8 text-white text-sm font-medium tracking-widest z-10"
          >
            點擊任意處返回地圖
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(233,188,187,255)' }}>
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
          className="flex flex-col items-center relative z-[9999]"
        >
          <img 
            src="/art/tab.png" 
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

      <div className="ml-16 flex h-screen">
        {/* Main Layout Image */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentMap}
              src={`/art/${currentMap}`}
              alt="Function Layout Map"
              className="w-full h-full object-cover"
              style={{ transform: 'translateX(50px)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          
          {/* Camera Buttons */}
          {/* No camera buttons on initial page (map2.png) */}
          
          {/* First blue button (富錦商圈) - 3 camera buttons */}
          {currentMap === 'map3.png' && (
            <>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '11.5%', left: '17%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('富錦商圈-1')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '15%', left: '38.67%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('富錦商圈-2')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
                      <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '86%', left: '93.5%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('富錦商圈-3')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
            </>
          )}
          
                    {/* Second blue button (榆星散策) - 1 camera button */}
          {currentMap === 'map4.png' && (
            <>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '31%', left: '12.67%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('榆星散策-1')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
            </>
          )}
          
          {/* Third blue button (藝文綠金) - 5 camera buttons */}
          {currentMap === 'map5.png' && (
            <>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '20%', left: '25%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('藝文綠金-1')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '35%', left: '55%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('藝文綠金-2')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '60%', left: '30%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('藝文綠金-3')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
                <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '45%', left: '75%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('藝文綠金-4')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
                </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '80%', left: '50%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('藝文綠金-5')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
        </motion.div>
            </>
          )}
          
          {/* Fourth blue button (書香校園) - 6 camera buttons */}
          {currentMap === 'map6.png' && (
            <>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '25%', left: '35%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('書香校園-1')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '40%', left: '65%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('書香校園-2')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '55%', left: '25%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('書香校園-3')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '70%', left: '55%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('書香校園-4')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '35%', left: '80%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('書香校園-5')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: '85%', left: '40%' }}
                whileHover={{ scale: 1.3, backgroundColor: 'rgba(104,201,243,255)' }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCameraClick('書香校園-6')}
              >
                <img src="/art/cam.png" alt="Camera" className="w-6 h-6 object-contain" />
              </motion.div>
            </>
          )}
        </div>

        {/* Right Text Panel */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-96 flex flex-col items-center justify-center text-center p-8"
          style={{ backgroundColor: 'rgba(233,188,187,255)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* LIFE FUNCTION header */}
            <div className="text-gray-600 text-sm font-medium tracking-widest mb-4">
              LIFE FUNCTION
            </div>
            
            {/* Large LIFE FUNCTION title */}
            <h1 className="text-4xl font-bold text-gray-800 tracking-widest mb-6">
              LIFE<br />FUNCTION
            </h1>
            
            {/* Vertical line */}
            <div className="w-px h-16 bg-gray-400 mb-6"></div>
            
            {/* Chinese titles */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              建國南京 雙捷樞紐
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-700 mb-12">
              四季居遊
            </h3>

                         {/* Function list */}
             <div className="text-blue-500">
               <motion.div 
                 className={`text-lg font-medium mb-12 cursor-pointer hover:text-blue-600 transition-all duration-300 relative ${
                   activeButton === 1 ? 'text-blue-700 font-bold' : ''
                 }`}
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.2 }}
                 onClick={() => handleButtonClick(1)}
               >
                 富錦商圈
               </motion.div>
               
               <motion.div 
                 className={`text-lg font-medium mb-12 cursor-pointer hover:text-blue-600 transition-all duration-300 relative ${
                   activeButton === 2 ? 'text-blue-700 font-bold' : ''
                 }`}
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.2 }}
                 onClick={() => handleButtonClick(2)}
               >
                 榆星散策
               </motion.div>
               
               <motion.div 
                 className={`text-lg font-medium mb-12 cursor-pointer hover:text-blue-600 transition-all duration-300 relative ${
                   activeButton === 3 ? 'text-blue-700 font-bold' : ''
                 }`}
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.2 }}
                 onClick={() => handleButtonClick(3)}
               >
                 藝文綠金
               </motion.div>
               
            <motion.div
                 className={`text-lg font-medium cursor-pointer hover:text-blue-600 transition-all duration-300 relative ${
                   activeButton === 4 ? 'text-blue-700 font-bold' : ''
                 }`}
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.2 }}
                 onClick={() => handleButtonClick(4)}
               >
                 書香校園
               </motion.div>
             </div>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 


