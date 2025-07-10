'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HotelBrandSectionProps {
  onBack: () => void;
}

const teamMembers = [
  { 
    id: 'main', 
    label: 'TEAM OVERVIEW', 
    subtitle: '團隊概覽', 
    isMain: true 
  },
  { 
    id: 'hotel', 
    label: 'HOTEL BRAND', 
    subtitle: '飯店品牌', 
    name: 'Li Yong Construction Co., Ltd.', 
    chineseName: 'HOME & HOTEL 立詠建設',
    description: '台北美學園一立詠建設成立於2000年，旗下11個精品酒店、商住式公寓、日銷創到資產經理集團力，立詠其持精品定義工藝及細緻酒店美學。時光重點住宅開發，打造美系列酒店高檔，精緻私人訂製，立詠人心。',
    philosophy: '專注細節 成就完美 淬鍊優雅飯店學 形塑住居新美學'
  },
  { 
    id: 'architect', 
    label: 'ARCHITECT', 
    subtitle: '建築大師', 
    name: 'Wang Shansong Architects', 
    chineseName: '建築大師 萃創藝術萬所 主山頌建築師事務所 主山頌',
    description: '全神投注40年建築歲月，深劣斯心懷活的居家規劃，永遠源自於對生活本質的點點實踐。透過天然行香的環境部分，以簡美起居尺度，舒環生活動線，建構完美空間，敢就人生寫所。',
    philosophy: '經典美緻：安來德、崇校通員、仁豪學校'
  },
  { 
    id: 'interior', 
    label: 'INTERIOR DESIGNER', 
    subtitle: '公設名家', 
    name: 'LAB MODUS, founded in 2006 by Kevin Chang', 
    chineseName: '公設名家 執筆精品空間 元澤設計 張柏銓',
    description: '以人為本執筆設計主軸，深筑空間美學美感，結合實用機能視覺美學慣性，設定貼合真實生活的設計機感。利用精品商業層視視距合資成設，形塑現代完整家園之外，居宇追求永續發展。',
    philosophy: '經典美感：嘉邦天空間、雲井麻王、南洋百露'
  },
  { 
    id: 'landscape', 
    label: 'LANDSCAPE ARCHITECT', 
    subtitle: '景觀建築', 
    name: 'Tiaosheng Architecture Lin Huiming', 
    chineseName: '景觀建築 肢宇自然共嗎 苧敏建築 林慧銘',
    description: '景觀脈絡來承四季生態聯所，創景人居壞境與自然實物的溫度共境，移植度生命投見常綠甲群，打造恰近日當，上地鼓理的永續風景。透過環境設施豐富生活感覺，居予居者五感絕心的療癒能量。',
    philosophy: '經典美緻：動來環育、像答景雲、實際千里'
  },
  { 
    id: 'lighting', 
    label: 'LIGHTING DESIGN', 
    subtitle: '燈光設計', 
    name: 'J.Y. Lighting Design', 
    chineseName: '燈光巨擘 輝映名邸印象 袁宗南照明設計 袁宗南',
    description: '會籌輸設計世博岔業，為業界頂尖代表。設計專業深翳水憑功能、配久維護及美學法則，還以傳統中學計責，待隔目日星底清續，以傳習光影數融架伯佛，演繹建築話要和頌精拉，讓映光色如遇燈印象。',
    philosophy: '經典美緻：北京西堂道宮頭獻、教商畢式、美安準室'
  },
  { 
    id: 'construction', 
    label: 'ALLIANCE GROUP BUILD', 
    subtitle: '國際營造', 
    name: 'Alliance Group Build', 
    chineseName: '堅持品質、建立完美 安家，堅持給你一個安心的家',
    description: '成立於民國74年中華民道路安來國際管道股份有限公司 以堅持品質是最大經營理念，目前植在前銅系向時代住行工業即攜化學國家之傳統產業世要力來制新突破，予能成長、進步。',
    philosophy: '堅持品質、建立完美 安家，堅持給你一個安心的家'
  }
];

const interactiveButtons = [
  { memberId: 'hotel', position: { top: '25%', left: '15%' } },
  { memberId: 'architect', position: { top: '8%', left: '20%' } },
  { memberId: 'interior', position: { top: '15%', right: '15%' } },
  { memberId: 'landscape', position: { top: '35%', right: '20%' } },
  { memberId: 'lighting', position: { top: '40%', left: '30%' } },
  { memberId: 'construction', position: { top: '55%', right: '25%' } }
];

export default function HotelBrandSection({ onBack }: HotelBrandSectionProps) {
  const [currentPage, setCurrentPage] = useState('main');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const currentMember = teamMembers.find(member => member.id === currentPage);

  // Render sidebar component
  const renderSidebar = () => (
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
  );

  // Render floating petals
  const renderFloatingPetals = () => (
    <>
      {/* Floating translucent white petal-like shapes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            scale: 0,
            rotate: 0,
            opacity: 0
          }}
          animate={{ 
            scale: [0, 1, 0.8, 1],
            rotate: [0, 180, 360],
            opacity: [0, 0.4, 0.2, 0.3],
            y: [-20, 20, -10, 15],
            x: [-10, 15, -5, 10]
          }}
          transition={{ 
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-6 h-10 bg-white/50 rounded-full"
            style={{
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        </motion.div>
      ))}

      {/* Additional larger white petal shapes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ 
            scale: [0.5, 1.3, 0.9, 1.1],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.1, 0.25, 0.15, 0.2]
          }}
          transition={{ 
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-12 h-18 bg-white/40"
            style={{
              borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        </motion.div>
      ))}
    </>
  );

  // Render main overview page
  const renderMainPage = () => (
    <div className="ml-16 h-screen relative">
      {/* Interactive Text Buttons scattered organically - more spread out */}
      {interactiveButtons.map((button, index) => {
        const member = teamMembers.find(m => m.id === button.memberId);
        if (!member) return null;
        
        return (
          <motion.button
            key={member.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8 + index * 0.2,
              type: "spring",
              bounce: 0.4
            }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
              transition: { duration: 0.1 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(member.id)}
            onMouseEnter={() => setHoveredButton(member.id)}
            onMouseLeave={() => setHoveredButton(null)}
            className="absolute text-center cursor-pointer z-50"
            style={{
              ...button.position,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="text-white">
              <div className="text-xl font-bold tracking-wide mb-2">
                {member.label}
              </div>
              <div className="text-base opacity-90 font-medium">
                {member.subtitle}
              </div>
            </div>
          </motion.button>
        );
      })}

      {/* Main ART Title - positioned more to the left and bigger */}
              <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-0 left-32 text-left"
        >
        <div className="relative">
          <motion.img
            src="/art.png"
            alt="ART"
            className="object-contain"
            style={{
              height: '60vh',
              width: '49.5vw',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          />
        </div>
      </motion.div>
    </div>
  );

  // Render individual team member page
  const renderMemberPage = () => {
    if (!currentMember || currentMember.isMain) return null;

    return (
      <div className="ml-16 h-screen relative flex">
        {/* Left content panel - Text side */}
        <div className="w-2/5 h-full flex items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-80 left-24 text-white max-w-lg"
          >
            {/* Category Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg font-bold tracking-widest mb-4 uppercase"
            >
              {currentMember.label}
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold mb-3"
            >
              {currentMember.chineseName}
            </motion.h1>

            {/* English Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-medium mb-6 text-white/90"
            >
              {currentMember.name}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg leading-relaxed mb-6 text-white/80"
            >
              {currentMember.description}
            </motion.p>

            {/* Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="border-l-4 border-white/50 pl-5"
            >
              <p className="text-base italic leading-relaxed text-white/70">
                "{currentMember.philosophy}"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right image panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-3/5 h-full relative bg-cover bg-center"
        >
          {/* Member image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={`/${(() => {
                const imageMap: { [key: string]: string } = {
                  'hotel': '50.png',
                  'architect': '051.png', 
                  'interior': '052.png',
                  'landscape': '053.png',
                  'lighting': '054.png',
                  'construction': '055.png'
                };
                return imageMap[currentMember.id] || '50.png';
              })()}`}
              alt={currentMember.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>

        {/* Floating Navigation Buttons - Higher on page */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-32 left-24 right-8"
        >
          <div className="flex items-center justify-start py-3 gap-3">
            {teamMembers.filter(member => !member.isMain).map((member, index) => (
              <motion.button
                key={member.id}
                onClick={() => setCurrentPage(member.id)}
                className={`px-5 py-3 text-base font-medium transition-all duration-200 backdrop-blur-sm ${
                  currentPage === member.id
                    ? 'text-white bg-white/20 rounded-full border border-white/30'
                    : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {member.subtitle}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };

     // Render bottom navigation - removed from main page
   const renderBottomNavigation = () => {
     return null;
   };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background with specified color */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(249,153,145,255)' }}></div>
      
      {/* Floating petals */}
      {renderFloatingPetals()}

      {/* Sidebar */}
      {renderSidebar()}

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {currentPage === 'main' ? renderMainPage() : renderMemberPage()}
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      {renderBottomNavigation()}
    </div>
  );
} 