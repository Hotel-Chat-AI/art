'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AndouTadaoSectionProps {
  onBack: () => void;
}

type SlideIndex = 0 | 1 | 2;

const mapLocations = [
  { id: 1, name: '東聽千里', price: '100.66', size: '15', x: 39, y: 24 },
  { id: 2, name: '匯萃酒', price: '125', size: '250', x: 39, y: 36 },
  { id: 3, name: '長虹帝譽', price: '130', size: '350-410', x: 39, y: 40 },
  { id: 4, name: '首泰成人之美', price: '120', size: '280-300', x: 41, y: 43 },
  { id: 5, name: '華國策馨', price: '87.96', size: '4', x: 43.5, y: 52 },
  { id: 6, name: '忠泰玉光', price: '107.68', size: '1', x: 46, y: 56 },
  { id: 7, name: '宏普頤和', price: '105', size: '330-450', x: 42, y: 56 },
  { id: 8, name: '華威八方', price: '79.97', size: '8', x: 38, y: 59 },
  { id: 9, name: '明日博', price: '124.66', size: '4', x: 42, y: 60 },
  { id: 10, name: '宏盛帝譽', price: '284.6', size: '15', x: 40, y: 70},
  { id: 11, name: '宏普PARK', price: '135.05', size: '2', x: 40, y: 75},
  { id: 12, name: 'ONE PARK TAIPEI 北棟', price: '245.8', size: '2', x: 45, y: 85 },
  { id: 13, name: 'ONE PARK TAIPEI 南棟', price: '254.52', size: '2', x: 45, y: 91 },
  { id: 14, name: '大安元首', price: '162.74', size: '9', x: 45, y: 98 },
];

// Reorganize for column-first numbering (7 in left column, 7 in right column)
const getColumnOrderedLocations = () => {
  const reordered = [];
  // Left column: indices 0-6 get ids 1-7
  for (let i = 0; i < 7; i++) {
    reordered.push({ ...mapLocations[i], displayId: i + 1 });
  }
  // Right column: indices 7-13 get ids 8-14
  for (let i = 7; i < 14; i++) {
    reordered.push({ ...mapLocations[i], displayId: i + 1 });
  }
  return reordered;
};

export default function AndouTadaoSection({ onBack }: AndouTadaoSectionProps) {
  const [currentSlide, setCurrentSlide] = useState<SlideIndex>(0);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  // Timer for alternating images every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      id: 'financial',
      title: 'FINANCIAL CENTRE',
      subtitle: 'Financial District, Nanjing East Road, Wall Street, Taipei',
      description: '台北車南街 南京東路金融特區\n券商銀行匯聚 政商菁英 股市金童冠蓋雲集',
      content: '以車站大三角中心，貫穿其中的南京東路第二、三段，為台北市指標商業大廈，匯聚2公里吸引了超過20家金融機構進駐，更是元大、日盛證券等發資地，40家無數企業總部、國際商場、娛樂百貨佇立，實聚數千政商菁英。\n構連台北車南街情奇威名。',
      footer: 'SEATED IN THE FIRST ROW JIANGUO AVENUE',
      navLabel: '藏富恆美'
    },
    {
      id: 'mansion',
      title: 'MANSION AVENUE',
      subtitle: 'Side by side the mansion, settled in the first row of Jianguo Avenue',
      description: '並肩豪宅入房建國大道第一排\n元利·宏盛·忠泰·長虹·宏普·東聽帝街\n豪奢建商型景增峰街廊',
      content: '元利、宏盛、忠泰、長虹、宏普、東聽帝街等，豪奢建商匯聚景增峰街廊，充斥當地市中，一長上位十六大豪宅樓盤匯聚，結前高檔動盪發勞基地，購屋增數民間、代理、全民、大戶機發動代表區成街廊建成場，建制場所，賞賞台三、寧靜主義、明日體陽。成青星三一真的響主業績',
      footer: 'NAI STREET & NANJING EAST ROAD',
      navLabel: '豪宅大道'
    },
    {
      id: 'map',
      title: 'MANSION AVENUE',
      subtitle: 'Property Investment & Location Details',
      description: '頂級物業投資地段分析',
      content: '精選14個黃金地段，提供完整投資分析',
      footer: 'PREMIUM INVESTMENT LOCATIONS',
      navLabel: '黃金行情',
      isMap: true
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Left Sidebar - LandmarkSection Design - Fully Clickable */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-0 top-0 bottom-0 w-16 bg-white hover:bg-gray-100 flex flex-col items-center justify-between py-8 z-50 transition-all duration-300 cursor-pointer"
        aria-label="Go back to main menu"
        style={{ zIndex: 100 }}
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
            {currentSlide === 2 ? (
              // Map Layout for Third Section
              <div className="flex w-full h-full">
                {/* Left Map Panel */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 relative bg-gray-100"
                >
                  <div className="absolute inset-0">
                    <img
                      src="/map.png"
                      alt="Location Map"
                      className="w-full h-full object-cover"
                    />
                    {/* Location dots overlay */}
                    <div className="absolute inset-0">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                      >
                        {/* Location dots */}
                        {getColumnOrderedLocations().map((location) => (
                          <g key={location.id}>
                            {/* Glow effect */}
                            <circle
                              cx={location.x}
                              cy={location.y}
                              r="2"
                              fill={hoveredLocation === location.id ? 'rgba(239, 68, 68, 0.3)' : 'rgba(34, 197, 94, 0.3)'}
                              className="transition-all duration-300"
                            />
                            {/* Main dot */}
                            <circle
                              cx={location.x}
                              cy={location.y}
                              r="1.5"
                              fill={hoveredLocation === location.id ? '#ef4444' : '#22c55e'}
                              className="transition-all duration-200 cursor-pointer"
                              onMouseEnter={() => setHoveredLocation(location.id)}
                              onMouseLeave={() => setHoveredLocation(null)}
                            />
                            {/* Number label */}
                            <text
                              x={location.x}
                              y={location.y + 0.6}
                              fontSize="2"
                              fill="white"
                              textAnchor="middle"
                              className="pointer-events-none font-bold"
                            >
                              {location.displayId}
                            </text>
                          </g>
                        ))}
                      </svg>
                    </div>
                  </div>
                </motion.div>

                                 {/* Right Sakura Panel with Property Listings */}
                 <motion.div
                   initial={{ x: 100, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="w-1/2 h-full flex flex-col"
                   style={{ backgroundColor: 'rgba(251,184,170,255)' }}
                 >
                   {/* Header - Fixed at top */}
                   <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="text-center py-12 px-8"
                   >
                     <h1 className="text-5xl font-bold text-white uppercase tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                       MANSION AVENUE
                     </h1>
                   </motion.div>

                   {/* Property Grid - Centered in middle */}
                   <div className="flex-1 flex items-center justify-center px-8 py-8">
                     <div className="grid grid-cols-2 gap-x-4 max-w-5xl ml-auto mr-6">
                       {/* Left Column */}
                       <div className="space-y-8">
                         {getColumnOrderedLocations().slice(0, 7).map((location, index) => (
                         <motion.div
                           key={location.id}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.5 + index * 0.05 }}
                           onMouseEnter={() => setHoveredLocation(location.id)}
                           onMouseLeave={() => setHoveredLocation(null)}
                           className="cursor-pointer transition-all duration-200 group"
                         >
                             {/* Separator line above (except first item) */}
                             {index > 0 && (
                               <div className="border-b border-white/20 mb-6"></div>
                             )}
                             <div className="flex items-start space-x-4">
                             {/* Green Circle with Number */}
                             <motion.div
                               whileHover={{ scale: 1.1, backgroundColor: '#22c55e' }}
                                 className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-200 flex-shrink-0 ${
                                 hoveredLocation === location.id ? 'bg-green-400' : 'bg-green-500'
                               }`}
                             >
                                 {location.displayId}
                             </motion.div>
                             
                             {/* Property Details */}
                             <div className="flex-1 min-w-0">
                               {/* Property Name - Green */}
                                 <h3 className="font-bold text-lg" style={{ color: 'rgba(0,170,131,255)' }}>
                                 {location.name}
                               </h3>
                                 
                                 {/* Price Information */}
                                 <div className="text-white text-sm leading-tight">
                                   {location.size === '250' || location.size === '350-410' || location.size === '280-300' || location.size === '330-450' ? (
                                     <>
                                       <span className="opacity-80">房屋間數：</span>
                                       <span className="font-bold" style={{ color: '#059669' }}>
                                         {location.price}
                                       </span>
                                       <span className="opacity-80"> 坪</span>
                                       <br />
                                       <span className="opacity-80">單位開價：</span>
                                       <span className="opacity-80">{location.size} 萬</span>
                                     </>
                                   ) : (
                                     <>
                                       <span className="opacity-80">成交價：</span>
                                       <span className="font-bold" style={{ color: '#059669' }}>
                                         {location.price} 萬
                                       </span>
                                       <span className="opacity-80"> / 屋齡：</span>
                                       <span className="opacity-80">{location.size} 年</span>
                                     </>
                                   )}
                                 </div>
                               </div>
                             </div>
                           </motion.div>
                         ))}
                       </div>

                       {/* Right Column */}
                       <div className="space-y-8">
                         {getColumnOrderedLocations().slice(7, 14).map((location, index) => (
                           <motion.div
                             key={location.id}
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.5 + (index + 7) * 0.05 }}
                             onMouseEnter={() => setHoveredLocation(location.id)}
                             onMouseLeave={() => setHoveredLocation(null)}
                             className="cursor-pointer transition-all duration-200 group"
                           >
                             {/* Separator line above (except first item) */}
                             {index > 0 && (
                               <div className="border-b border-white/20 mb-6"></div>
                             )}
                             <div className="flex items-start space-x-4">
                               {/* Green Circle with Number */}
                               <motion.div
                                 whileHover={{ scale: 1.1, backgroundColor: '#22c55e' }}
                                 className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-200 flex-shrink-0 ${
                                   hoveredLocation === location.id ? 'bg-green-400' : 'bg-green-500'
                                 }`}
                               >
                                 {location.displayId}
                               </motion.div>
                               
                               {/* Property Details */}
                               <div className="flex-1 min-w-0">
                                 {/* Property Name - Green */}
                                 <h3 className="font-bold text-lg" style={{ color: 'rgba(0,170,131,255)' }}>
                                   {location.name}
                                 </h3>
                                 
                                 {/* Price Information */}
                                 <div className="text-white text-sm leading-tight">
                                 <span className="opacity-80">成交價：</span>
                                 <span className="font-bold" style={{ color: '#059669' }}>
                                   {location.price} 萬
                                 </span>
                                 <span className="opacity-80"> / 屋齡：</span>
                                 <span className="opacity-80">{location.size} 年</span>
                               </div>
                             </div>
                           </div>
                         </motion.div>
                       ))}
                       </div>
                     </div>
                   </div>

                   {/* Footer - Fixed at bottom */}
                   <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1.2 }}
                     className="text-center space-y-3 py-4 px-8"
                   >
                     {/* Location Descriptor */}
                     <div className="text-white text-xs uppercase tracking-widest opacity-70">
                       WALL STREET & NANJING EAST ROAD
                     </div>
                     
                     {/* Clickable Navigation Text - Updated styling to match HotelBrandSection */}
                     <div className="flex justify-center gap-6 mt-6">
                       <motion.button
                         onClick={() => setCurrentSlide(0 as SlideIndex)}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                           currentSlide === (0 as SlideIndex)
                             ? 'text-white bg-white/20 rounded-full border border-white/30'
                             : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                         }`}
                       >
                         藏富恆美
                       </motion.button>
                       <motion.button
                         onClick={() => setCurrentSlide(1 as SlideIndex)}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                           currentSlide === (1 as SlideIndex)
                             ? 'text-white bg-white/20 rounded-full border border-white/30'
                             : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                         }`}
                       >
                         豪宅大道
                       </motion.button>
                       <motion.button
                         onClick={() => setCurrentSlide(2 as SlideIndex)}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                           currentSlide === (2 as SlideIndex)
                             ? 'text-white bg-white/20 rounded-full border border-white/30'
                             : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                         }`}
                       >
                         黃金行情
                       </motion.button>
                     </div>
                   </motion.div>

                   {/* Close Button */}
                   <motion.button
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 1.5 }}
                     onClick={onBack}
                     className="absolute top-6 right-6 text-white hover:text-gray-200 transition-colors duration-300"
                   >
                     <div className="text-center">
                       <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                       <div className="text-xs mt-1 uppercase tracking-wide">CLOSE</div>
                     </div>
                   </motion.button>


                 </motion.div>
              </div>
            ) : (
              // Side-by-Side Layout for First Two Slides
              <div className="flex w-full h-full">
                {/* Left Coral Panel */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-1/2 text-white flex flex-col justify-center items-center p-16 relative"
                  style={{ backgroundColor: '#F4AFA0' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center max-w-lg space-y-8"
                  >
                    {/* Top Small Label */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm uppercase tracking-widest opacity-90 font-light"
                    >
                      {currentSlide === 0 ? 'FINANCIAL CENTRE' : 'FINANCIAL CENTRE'}
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-6xl font-bold leading-tight"
                    >
                      {slides[currentSlide].title === 'FINANCIAL CENTRE' ? (
                        <>FINANCIAL<br />CENTRE</>
                      ) : (
                        <>MANSION<br />AVENUE</>
                      )}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg opacity-90 font-light leading-relaxed"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>

                    {/* Divider Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="h-px bg-white opacity-60 mx-auto"
                    ></motion.div>

                    {/* Chinese Description - Larger text, more spaced */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="text-2xl leading-relaxed font-medium space-y-4"
                    >
                      {slides[currentSlide].description.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                    </motion.div>

                    {/* Content Text - Smaller, well spaced */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="text-base leading-loose opacity-90 px-4 space-y-4"
                    >
                      {slides[currentSlide].content.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="text-sm uppercase tracking-wider opacity-90 space-y-8"
                    >
                      <div>{slides[currentSlide].footer}</div>
                      {/* Navigation buttons with modern styling - positioned lower */}
                      <div className="flex justify-center gap-6 mt-12">
                        <motion.button
                        onClick={() => setCurrentSlide(0 as SlideIndex)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                            currentSlide === 0
                              ? 'text-white bg-white/20 rounded-full border border-white/30'
                              : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                          }`}
                        >
                          藏富恆美
                        </motion.button>
                        <motion.button
                        onClick={() => setCurrentSlide(1 as SlideIndex)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                            currentSlide === 1
                              ? 'text-white bg-white/20 rounded-full border border-white/30'
                              : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                          }`}
                        >
                          豪宅大道
                        </motion.button>
                        <motion.button
                        onClick={() => setCurrentSlide(2 as SlideIndex)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                          (currentSlide as SlideIndex) === 2
                              ? 'text-white bg-white/20 rounded-full border border-white/30'
                              : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                          }`}
                        >
                          黃金行情
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Right Image Panel */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-gray-200"
                  >
                    {currentSlide === 0 ? (
                      // First slide - Alternating background images
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={imageIndex}
                          src={imageIndex === 0 ? '/01.png' : '/010.png'}
                          alt={imageIndex === 0 ? 'Financial Centre View 1' : 'Financial Centre View 2'}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{
                            transform: imageIndex === 0 ? 'scale(1)' : 'scale(1)',
                            transformOrigin: 'center calc(50% - 20px)'
                          }}
                        />
                      </AnimatePresence>
                    ) : (
                      // Second slide - Static 011.png at 150% size
                      <motion.img
                        src="/011.png"
                        alt="Mansion Avenue View"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          transform: 'scale(1)',
                          transformOrigin: 'center calc(50% - 20px)'
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={onBack}
                    className="absolute top-6 right-6 text-white bg-black bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 rounded-full p-2 z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>


      </div>
    </div>
  );
} 