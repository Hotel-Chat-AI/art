'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrafficSectionProps {
  onBack: () => void;
}

const transportationOptions = [
  {
    id: 'metro',
    name: '雙捷金軸',
    description: 'Songjiang Nanjing MRT Station',
    image: 'MRT station signage and platforms',
    position: { x: 45, y: 35 }
  },
  {
    id: 'jianguo',
    name: '建國大道',
    description: 'Jianguo Expressway',
    image: 'Nighttime light trails from traffic',
    position: { x: 65, y: 50 }
  },
  {
    id: 'civic',
    name: '市民大道',
    description: 'Civic Boulevard',
    image: 'Taipei cityscape with Taipei 101',
    position: { x: 55, y: 45 }
  },
  {
    id: 'xinsheng',
    name: '新生大道',
    description: 'Xinsheng Elevated Road',
    image: 'Aerial view of elevated highway',
    position: { x: 40, y: 60 }
  },
  {
    id: 'airport',
    name: '松山國門',
    description: 'Songshan Airport',
    image: 'China Airlines aircraft with Taipei 101',
    position: { x: 70, y: 30 }
  }
];

export default function TrafficSection({ onBack }: TrafficSectionProps) {
  const [selectedTransport, setSelectedTransport] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isHoveringFirst, setIsHoveringFirst] = useState(false);
  const [isHoveringSecond, setIsHoveringSecond] = useState(false);
  const [isHoveringThird, setIsHoveringThird] = useState(false);
  const [isHoveringFourth, setIsHoveringFourth] = useState(false);
  const [isHoveringFifth, setIsHoveringFifth] = useState(false);
  const [showMetroPage, setShowMetroPage] = useState(false);
  const [showJianguoPage, setShowJianguoPage] = useState(false);
  const [showCivicPage, setShowCivicPage] = useState(false);
  const [showXinshengPage, setShowXinshengPage] = useState(false);
  const [showAirportPage, setShowAirportPage] = useState(false);

  const handleTransportClick = (transportId: string) => {
    setSelectedTransport(transportId);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setTimeout(() => setSelectedTransport(null), 300);
  };

  const selectedOption = transportationOptions.find(opt => opt.id === selectedTransport);

  // Civic Boulevard Detail Page
  if (showCivicPage) {
    return (
      <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(177,221,255,1)' }}>
        {/* Left Sidebar */}
        <motion.button
          onClick={() => setShowCivicPage(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
          aria-label="Go back to traffic page"
        >
          {/* TAB Logo Section at Top */}
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

        <div className="ml-16 h-screen relative cursor-pointer" onClick={() => setShowCivicPage(false)}>
          {/* Background Image */}
          <img
            src="/032.png"
            alt="Civic Boulevard Night Scene"
            className="w-full h-full object-cover"
          />
          
          {/* Text Overlay in Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-24 text-gray-100"
          >
            <h1 className="text-3xl font-bold mb-2">市民大道 成功指標</h1>
            <p className="text-lg leading-relaxed max-w-md">
              橫跨北市中山、中正、大安、信義等7個行政區，指標豪金商圈一脈直達。
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Xinsheng Avenue Detail Page
  if (showXinshengPage) {
    return (
      <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(177,221,255,1)' }}>
        {/* Left Sidebar */}
        <motion.button
          onClick={() => setShowXinshengPage(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
          aria-label="Go back to traffic page"
        >
          {/* TAB Logo Section at Top */}
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

        <div className="ml-16 h-screen relative cursor-pointer" onClick={() => setShowXinshengPage(false)}>
          {/* Background Image */}
          <img
            src="/033.png"
            alt="Xinsheng Elevated Road"
            className="w-full h-full object-cover"
          />
          
          {/* Text Overlay in Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-24 text-gray-100"
          >
            <h1 className="text-3xl font-bold mb-2">新生大道 南北動脈</h1>
            <p className="text-lg leading-relaxed max-w-md">
              貫穿北市中山區重要幹道，連通八德路、南京東路、民生東路、大直北安路。
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Airport Detail Page
  if (showAirportPage) {
    return (
      <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(177,221,255,1)' }}>
        {/* Left Sidebar */}
        <motion.button
          onClick={() => setShowAirportPage(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
          aria-label="Go back to traffic page"
        >
          {/* TAB Logo Section at Top */}
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

        <div className="ml-16 h-screen relative cursor-pointer" onClick={() => setShowAirportPage(false)}>
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Airport Scene"
            className="w-full h-full object-cover"
          />
          
          {/* Text Overlay in Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-24 text-gray-100"
          >
            <h1 className="text-3xl font-bold mb-2">松山國門 運籌全球</h1>
            <p className="text-lg leading-relaxed max-w-md">
              沿著敦北林蔭大道前行，僅15分鐘即達松山機場，轉瞬往返中、日、韓。
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Jianguo Avenue Detail Page
  if (showJianguoPage) {
    return (
      <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(177,221,255,1)' }}>
        {/* Left Sidebar */}
        <motion.button
          onClick={() => setShowJianguoPage(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
          aria-label="Go back to traffic page"
        >
          {/* TAB Logo Section at Top */}
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

        <div className="ml-16 h-screen relative cursor-pointer" onClick={() => setShowJianguoPage(false)}>
          {/* Background Image */}
          <img
            src="/031.png"
            alt="Jianguo Avenue Night Scene"
            className="w-full h-full object-cover"
          />
          
          {/* Text Overlay in Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-24 text-gray-100"
          >
            <h1 className="text-3xl font-bold mb-2">建國大道 舉目豪宅</h1>
            <p className="text-lg leading-relaxed max-w-md">
              沿線串聯北市中心、大安區豪宅聚落，放眼明日博、華固樂章、忠孝玉光。
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Metro Station Detail Page
  if (showMetroPage) {
    return (
      <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(177,221,255,1)' }}>
        {/* Left Sidebar */}
        <motion.button
          onClick={() => setShowMetroPage(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
          aria-label="Go back to traffic page"
        >
          {/* TAB Logo Section at Top */}
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

        <div className="ml-16 h-screen relative cursor-pointer" onClick={() => setShowMetroPage(false)}>
          {/* Background Image */}
          <img
            src="/030.png"
            alt="Metro Station"
            className="w-full h-full object-cover"
          />
          
          {/* Text Overlay in Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-24 text-gray-100"
          >
            <h1 className="text-3xl font-bold mb-2">松江南京 雙捷金軸</h1>
            <p className="text-lg leading-relaxed max-w-md">
              近取松江南京站為集結松山新店、新蘆中和線雙捷站點，南京復興站，暢遊文湖金軸。
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: 'rgba(177,221,255,1)' }}>
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

      <div className="ml-16 flex h-screen">
        {/* Main Layout Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <img
            src="/layout.png"
            alt="Traffic Layout Map"
            className="w-full h-full object-cover"
          />
          
          {/* Hover Lines for First Item */}
          {isHoveringFirst && (
            <>
              {/* Vertical Brown Pulsing Line */}
              <motion.div
                animate={{ 
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: .7, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 bottom-0"
                style={{ left: '76.25%', width: '6px', backgroundColor: 'rgba(128,81,41,1)' }}
              />
              
              {/* Horizontal Green Pulsing Line */}
              <motion.div
                animate={{ 
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 0.7, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-0 right-0 bg-green-500"
                style={{ top: '23.4%', height: '6px', backgroundColor: 'rgba(7,137,73,255)' }}
              />
              
              {/* Horizontal Blue Pulsing Line */}
              <motion.div
                animate={{ 
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 0.7, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-0 right-0 bg-blue-500"
                style={{ top: '88.5%', height: '6px', backgroundColor: 'rgba(7,155,204,255)' }}
              />
            </>
          )}

          {/* Hover Lines for Second Item */}
          {isHoveringSecond && (
            <>
              {/* Thick Vertical Pulsing Line from Blue to White */}
              <motion.div
                animate={{ 
                  backgroundColor: ['rgba(153,202,234,255)', 'rgba(255,255,255,1)',  'rgba(153,202,234,255)']
                }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 bottom-0"
                style={{ left: '52%', width: '12px' }}
              />
            </>
          )}

          {/* Hover Lines for Third Item */}
          {isHoveringThird && (
            <>
              {/* Thick Horizontal Pulsing Line from Blue to White */}
              <motion.div
                animate={{ 
                  backgroundColor: ['rgba(153,202,234,255)', 'rgba(255,255,255,1)',  'rgba(153,202,234,255)']
                }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-0 right-0"
                style={{ top: '70.5%', height: '12px' }}
              />
            </>
          )}

          {/* Hover Lines for Fourth Item - Curved/Squiggly Line */}
          {isHoveringFourth && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none"
              >
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 100 100" 
                  className="absolute inset-0"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M16,2 C16,10 16,20 16,32 C16,40 17,45 18,50 C19,53 20,55 21,57 C22,59 22,61 23,63 C23,65 23,67 23,70 C23,75 23,78 23,82"
                    fill="none"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    animate={{
                      stroke: ['rgba(153,202,234,255)', 'rgba(255,255,255,1)', 'rgba(153,202,234,255)']
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </motion.div>
            </>
          )}

          {/* Hover Effect for Fifth Item - Gray Rectangle */}
          {isHoveringFifth && (
            <>
              <motion.div
                animate={{ 
                  backgroundColor: ['rgba(233,220,175,1)', 'rgba(233,220,175,0)', 'rgba(233,220,175,1)']
                }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute"
                style={{ 
                  left: '86.7%', 
                  top: '3%', 
                  width: '132px', 
                  height: '40px'
                }}
              />
            </>
          )}
        </motion.div>

        {/* Right Text Panel */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-96 flex flex-col items-center justify-center text-center p-8"
          style={{ backgroundColor: 'rgba(177,221,255,1)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* TRAFFIC header */}
            <div className="text-gray-600 text-sm font-medium tracking-widest mb-4">
              TRAFFIC
            </div>
            
            {/* Large TRAFFIC title */}
            <h1 className="text-4xl font-bold text-gray-800 tracking-widest mb-6">
              TRAFFIC
            </h1>
            
            {/* Vertical line */}
            <div className="w-px h-16 bg-gray-400 mb-6"></div>
            
            {/* Chinese titles */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              建國南京十字商道
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-700 mb-12">
              雙捷雙軸富裕樞紐組
            </h3>

            {/* Transportation list */}
            <div className="text-blue-500">
              <div 
                className="text-lg font-medium mb-12 cursor-pointer hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsHoveringFirst(true)}
                onMouseLeave={() => setIsHoveringFirst(false)}
                onClick={() => setShowMetroPage(true)}
              >
                雙捷金軸
              </div>
              
              <div 
                className="text-lg font-medium mb-12 cursor-pointer hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsHoveringSecond(true)}
                onMouseLeave={() => setIsHoveringSecond(false)}
                onClick={() => setShowJianguoPage(true)}
              >
                建國大道
              </div>
              
              <div 
                className="text-lg font-medium mb-12 cursor-pointer hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsHoveringThird(true)}
                onMouseLeave={() => setIsHoveringThird(false)}
                onClick={() => setShowCivicPage(true)}
              >
                市民大道
              </div>
              
              <div 
                className="text-lg font-medium mb-12 cursor-pointer hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsHoveringFourth(true)}
                onMouseLeave={() => setIsHoveringFourth(false)}
                onClick={() => setShowXinshengPage(true)}
              >
                新生大道
              </div>
              
              <div 
                className="text-lg font-medium cursor-pointer hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsHoveringFifth(true)}
                onMouseLeave={() => setIsHoveringFifth(false)}
                onClick={() => setShowAirportPage(true)}
              >
                松山國門
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Photo Overlay */}
      <AnimatePresence>
        {showOverlay && selectedOption && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 flex items-center justify-center z-40"
            onClick={closeOverlay}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sample photo content */}
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-teal-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-4">{selectedOption.name}</h3>
                    <p className="text-xl opacity-90">{selectedOption.description}</p>
                    <p className="text-lg opacity-75 mt-2">{selectedOption.image}</p>
                  </div>
                </div>
                
                {/* Close button */}
                <button
                  onClick={closeOverlay}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{selectedOption.description}</h4>
                <p className="text-gray-600">
                  Click anywhere to close this view and explore more transportation options.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 