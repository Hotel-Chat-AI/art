'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArtBeautySectionProps {
  onBack: () => void;
}

interface EngineeringNavItem {
  id: string;
  text: string;
  chinese?: string;
  isTitle?: boolean;
  isHighlighted?: boolean;
}

const categories = [
  {
    id: 'engineering',
    name: 'ENGINEERING',
    chinese: '極致工程',
    position: { left: '20%', top: '25%' },
    items: [
      { name: 'Structural Frame', description: '3D reinforced concrete modeling', brand: 'Advanced Engineering' },
      { name: 'Window Construction', description: 'Double-glazed thermal efficiency', brand: 'Premium Windows' },
      { name: 'Foundation System', description: 'Deep pile foundation structure', brand: 'Structural Excellence' }
    ]
  },
  {
    id: 'insulation',
    name: 'INSULATION WORKS',
    chinese: '靜音工程',
    position: { left: '40%', top: '15%' },
    items: [
      { name: 'YKK AP Windows', description: 'Japanese soundproof technology', brand: 'YKK AP' },
      { name: 'KRONOTEX Flooring', description: 'German laminate flooring system', brand: 'KRONOTEX' },
      { name: 'Thermal Insulation', description: 'Advanced building envelope', brand: 'Premium Insulation' }
    ]
  },
  {
    id: 'health',
    name: 'HEALTH PREVENTION',
    chinese: '健康防疫',
    position: { left: '70%', top: '20%' },
    items: [
      { name: 'Ventilation System', description: 'Advanced air circulation technology', brand: 'Fresh Air Systems' },
      { name: 'Dulux Anti-Formaldehyde', description: 'Eco-friendly paint technology', brand: 'Dulux' },
      { name: 'BWT Water Filtration', description: 'German water purification system', brand: 'BWT Germany' }
    ]
  },
  {
    id: 'materials',
    name: 'BUILDING MATERIALS',
    chinese: '精品建材',
    position: { left: '55%', top: '40%' },
    items: [
      { name: 'KINGART Security Doors', description: 'Premium security entrance systems', brand: 'KINGART' },
      { name: 'Yale Smart Locks', description: 'Digital access control technology', brand: 'Yale' },
      { name: 'Panasonic Appliances', description: 'Integrated bathroom solutions', brand: 'Panasonic' },
      { name: 'Automated Parking', description: 'Smart parking management system', brand: 'ParkTech' }
    ]
  }
];

// Engineering section navigation and content
const engineeringNav1: EngineeringNavItem[] = [
  { id: 'title', text: '結構工學', isTitle: true },
  { id: 'structure', text: '傳世結構', chinese: '耐震建築基盤 安全結構堡壘' },
  { id: 'rebar', text: '堅實鋼筋', chinese: '鋼筋綁紮工法 專注營造細節' },
  { id: 'connection', text: '頂級續接', chinese: '國際最高認證 SA級鋼筋續接器' },
  { id: 'reinforcement', text: '強固窗框', chinese: '強固窗框角隅 雙層鋼筋補強' },
  { id: 'waterproof', text: '防水保固', chinese: '外牆層間防水5年保固' }
];

const engineeringNav2: EngineeringNavItem[] = [
  { id: 'back-to-main', text: '結構工學' },
  { id: 'waterproof-guarantee', text: '防水保固', chinese: '外牆防水 / 窗框防水 / 浴室防水 / 屋頂防水', isHighlighted: true },
  { id: 'exterior-waterproof', text: '外牆防水' },
  { id: 'window-waterproof', text: '窗框防水' },
  { id: 'bathroom-waterproof', text: '浴室防水' },
  { id: 'roof-waterproof', text: '屋頂防水' }
];

export default function ArtBeautySection({ onBack }: ArtBeautySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [engineeringSlide, setEngineeringSlide] = useState<string>('structure');
  const [engineeringSection, setEngineeringSection] = useState<'main' | 'waterproof'>('main');
  const [insulationSlide, setInsulationSlide] = useState(0);
  const [healthSlide, setHealthSlide] = useState(0);
  const [materialsSlide, setMaterialsSlide] = useState(0);

  // Helper function to check if current slide uses video/50-50 layout
  const isVideoSlide = (slide: string) => {
    return ['rebar', 'waterproof-guarantee', 'exterior-waterproof', 'window-waterproof', 'bathroom-waterproof', 'roof-waterproof'].includes(slide);
  };

  const isPlaceholderSlide = (slide: string) => {
    return ['rebar', 'connection', 'reinforcement'].includes(slide);
  };

  const isFiftyFiftyLayout = (slide: string) => {
    return ['rebar', 'connection', 'reinforcement', 'waterproof-guarantee', 'exterior-waterproof', 'window-waterproof', 'bathroom-waterproof', 'roof-waterproof'].includes(slide);
  };

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  // Engineering content for each slide
  const getEngineeringContent = (slideId: string) => {
    const contents = {
      structure: {
        title: '傳世結構',
        subtitle: '耐震建築基盤 安全結構堡壘',
        points: [
          '1. 本案依現行規範之設計地盤加速度0.4Sps=0.24G，提高1成作為設計依據。',
          '2. B3-B1層5000psi混凝土，1-4層6000psi混凝土，5-9層5000psi混凝土，10-PRF層4000psi混凝土，提供堅固、抗裂、抗壓強度。',
          '3. 連續壁深入地下34米，厚度達90cm，避免結構體沉陷，並且於管式基礎底部增設十字型隔牆與連續壁結合，形成一座20m×20m的大基座。',
          '4. 地下室開挖深度17.9米，設置筏式基礎地盤深度320cm，基礎底板厚度達70cm，平衡單位承重，提供更安全的穩定基礎。',
          '5. 柱位均位於連續壁、扶壁及核心牆上。'
        ]
      },
      rebar: {
        title: '堅實鋼筋',
        subtitle: '鋼筋綁紮工法 專注營造細節',
        points: [
          '嚴格重驗鋼筋綁紮繫線固定之緊密度，逐層查驗鋼筋支數、號數及間距搭接長度與倍數、穿線位置檢討及補強筋、窗框及樓板角隅45度補強筋、開口預留筋、保護層預留、水電配管重量限制等，提升精工營造品質。'
        ]
      },
      connection: {
        title: '頂級續接',
        subtitle: '國際最高認證 SA級鋼筋續接器',
        points: [
          '柱主筋續接一律採用國際最高認證SA級鋼筋續接器，取代傳統搭接工法，耐震能力強更保障安全。柱主筋跳脫傳統續接方式，續接器錯位60cm以上避免接於同一斷面，且其續接位置在應力最小之中央區，柱子上下端以螺筋錯位綁紮，可防止地震所產生之側向張力，破壞單一結構面。'
        ]
      },
      reinforcement: {
        title: '強固窗框',
        subtitle: '強固窗框角隅 雙層鋼筋補強',
        points: [
          '針對門窗所形成之角隅開口，使用鋼筋做垂直及水平雙向雙層補強，並嚴格要求補強鋼筋之定位綁紮，使其充分發揮補強圍束效果，整體之窗框角隅補強嚴謹確實，確保不會裂不滲漏，保障房屋使用耐久性。'
        ]
      },
      waterproof: {
        title: '外牆層間防水5年保固',
        subtitle: '',
        points: [
          '● 將外牆RC結構表層凸出物、灰塵及雜質清除乾淨。',
          '● 將樓層接縫處的浮漿、樓板層、鐵絲等清除後，於接縫處施以防水砂漿密實補強。',
          '● 堅持直接施作於結構(不易吸水，增加耐用度及防水性)直接於接縫處上下各10cm，先施以第一道防水樹脂砂漿。',
          '● 再於接縫上下各10cm塗佈第二道彈性複合防水材，屏除任何接縫滲水的可能性。',
          '● 以水泥砂漿做作打底，於表面貼外牆磚。'
        ]
      },
      'waterproof-guarantee': {
        title: '外牆層間防水5年保固',
        subtitle: '',
        points: [
          '● 將外牆RC結構表層凸出物、灰塵及雜質清除乾淨。',
          '● 將樓層接縫處的浮漿、樓板層、鐵絲等清除後，於接縫處施以防水砂漿密實補強。',
          '● 堅持直接施作於結構(不易吸水，增加耐用度及防水性)直接於接縫處上下各10cm，先施以第一道防水樹脂砂漿。',
          '● 再於接縫上下各10cm塗佈第二道彈性複合防水材，屏除任何接縫滲水的可能性。',
          '● 以水泥砂漿做作打底，於表面貼外牆磚。'
        ]
      },
      'exterior-waterproof': {
        title: '外牆層間防水5年保固',
        subtitle: '',
        points: [
          '● 將外牆RC結構表層凸出物、灰塵及雜質清除乾淨。',
          '● 將樓層接縫處的浮漿、樓板層、鐵絲等清除後，於接縫處施以防水砂漿密實補強。',
          '● 堅持直接施作於結構(不易吸水，增加耐用度及防水性)直接於接縫處上下各10cm，先施以第一道防水樹脂砂漿。',
          '● 再於接縫上下各10cm塗佈第二道彈性複合防水材，屏除任何接縫滲水的可能性。',
          '● 以水泥砂漿做作打底，於表面貼外牆磚。'
        ]
      },
      'window-waterproof': {
        title: '窗框防水5年防水保固',
        subtitle: '',
        points: [
          '窗台結構體施作微淺水坡度方式處理，並在窗框完成後做第一道防水，再第二道防水層，粉刷打底層後貼外牆磁磚向外斜面，與窗框之間填矽利康，即形成三道防水層，可有效防止雨水滲漏問題，達到最佳防水效果。'
        ]
      },
      'bathroom-waterproof': {
        title: '浴室防水5年保固',
        subtitle: '',
        points: [
          '對浴室淋浴間加強防水施工至樑底(版)下，其餘全面防水至100cm，防水層則試水試驗72小時，防滲水能力極度出色。'
        ]
      },
      'roof-waterproof': {
        title: '屋頂防水5年保固',
        subtitle: '',
        points: [
          '屋頂經多層防水處理，避免滲漏發生，結構體即施作淺水坡度更耐用，防水材填角及防水層施作完成後，必須全面存水15cm進行長達72小時試水試驗。',
          '通過試水檢測後，全面鋪設3cmPS隔熱板，再澆置5cm混凝土襯層來保護防水層，最後表面貼設裝修面材，歷經4道手續，只為得到最佳品質。'
        ]
      }
    };
    
    return contents[slideId as keyof typeof contents] || contents.structure;
  };

  // Render sidebar
  const renderSidebar = () => (
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
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
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

  if (!selectedCategory) {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'rgba(251,184,170,255)' }}>
        {renderSidebar()}

        {/* Main Content */}
        <div className="ml-16 h-screen relative">
          {/* Floral Decorations */}
          <>
            {/* Top Row */}
            <motion.div
              className="absolute top-4 left-24 w-16 h-16"
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <img src="/1.png" alt="" className="w-full h-full object-contain opacity-80" />
            </motion.div>
            <motion.div
              className="absolute top-8 left-40 w-10 h-10"
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 5 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              <img src="/2.png" alt="" className="w-full h-full object-contain opacity-70" />
            </motion.div>
            <motion.div
              className="absolute top-6 left-56 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: -25 }}
              animate={{ opacity: 0.5, scale: 1, rotate: -10 }}
              transition={{ duration: 1, delay: 2.6 }}
            >
              <img src="/3.png" alt="" className="w-full h-full object-contain opacity-60" />
            </motion.div>

            <motion.div
              className="absolute top-8 right-8 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 25 }}
              animate={{ opacity: 0.8, scale: 1, rotate: 10 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              <img src="/4.png" alt="" className="w-full h-full object-contain opacity-75" />
            </motion.div>
            <motion.div
              className="absolute top-4 right-24 w-10 h-10"
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 0.5, scale: 1, rotate: -5 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              <img src="/5.png" alt="" className="w-full h-full object-contain opacity-60" />
            </motion.div>
            <motion.div
              className="absolute top-12 right-40 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 30 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 15 }}
              transition={{ duration: 1, delay: 2.7 }}
            >
              <img src="/6.png" alt="" className="w-full h-full object-contain opacity-70" />
            </motion.div>

            {/* Bottom Row */}
            <motion.div
              className="absolute bottom-8 left-26 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 30 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 15 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <img src="/7.png" alt="" className="w-full h-full object-contain opacity-65" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-44 w-10 h-10"
              initial={{ opacity: 0, scale: 0, rotate: -25 }}
              animate={{ opacity: 0.7, scale: 1, rotate: -10 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <img src="/1.png" alt="" className="w-full h-full object-contain opacity-80" />
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-60 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 20 }}
              animate={{ opacity: 0.5, scale: 1, rotate: 8 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <img src="/2.png" alt="" className="w-full h-full object-contain opacity-60" />
            </motion.div>

            <motion.div
              className="absolute bottom-6 right-8 w-16 h-16"
              initial={{ opacity: 0, scale: 0, rotate: 20 }}
              animate={{ opacity: 0.8, scale: 1, rotate: 5 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              <img src="/3.png" alt="" className="w-full h-full object-contain opacity-80" />
            </motion.div>
            <motion.div
              className="absolute bottom-12 right-24 w-10 h-10"
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={{ opacity: 0.5, scale: 1, rotate: -15 }}
              transition={{ duration: 1, delay: 2.6 }}
            >
              <img src="/4.png" alt="" className="w-full h-full object-contain opacity-60" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-40 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 35 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 18 }}
              transition={{ duration: 1, delay: 2.9 }}
            >
              <img src="/5.png" alt="" className="w-full h-full object-contain opacity-70" />
            </motion.div>

            {/* Side decorations */}
            <motion.div
              className="absolute top-1/4 left-20 w-8 h-8"
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={{ opacity: 0.4, scale: 1, rotate: 20 }}
              transition={{ duration: 1, delay: 2.7 }}
            >
              <img src="/6.png" alt="" className="w-full h-full object-contain opacity-50" />
            </motion.div>
            <motion.div
              className="absolute top-1/3 left-24 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: -40 }}
              animate={{ opacity: 0.5, scale: 1, rotate: -18 }}
              transition={{ duration: 1, delay: 3.0 }}
            >
              <img src="/7.png" alt="" className="w-full h-full object-contain opacity-65" />
            </motion.div>
            <motion.div
              className="absolute top-2/3 right-20 w-8 h-8"
              initial={{ opacity: 0, scale: 0, rotate: 50 }}
              animate={{ opacity: 0.4, scale: 1, rotate: 25 }}
              transition={{ duration: 1, delay: 3.2 }}
            >
              <img src="/1.png" alt="" className="w-full h-full object-contain opacity-40" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-16 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: -35 }}
              animate={{ opacity: 0.6, scale: 1, rotate: -16 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <img src="/2.png" alt="" className="w-full h-full object-contain opacity-70" />
            </motion.div>
          </>

          {/* Large ART text in center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 left-16 pointer-events-none"
          >
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
          </motion.div>

          {/* Floating category buttons */}
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
              whileHover={{ scale: 1.3, rotateY: 10, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className="absolute p-6 transition-all duration-100 hover:drop-shadow-2xl rounded-xl backdrop-blur-sm"
              style={{
                left: category.position.left,
                top: category.position.top,
                zIndex: 20,
                backgroundColor: 'transparent',
                border: 'none'
              }}
            >
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-2 tracking-wide uppercase drop-shadow-md">
                  {category.name}
                </h3>
                <p className="text-white text-sm drop-shadow-md">
                  {category.chinese}
                </p>
              </div>
            </motion.button>
          ))}

          {/* Section subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <p className="text-white text-lg font-light">
              Technical Excellence Meets Luxury Living
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Engineering Section with complex navigation
  if (selectedCategory === 'engineering') {
    const currentNav = engineeringSection === 'main' ? engineeringNav1 : engineeringNav2;
    const content = getEngineeringContent(engineeringSlide);

    return (
      <div 
        className="min-h-screen relative"
        style={{
          background: 'linear-gradient(135deg, #FFB7C5 0%, #FFC0CB 25%, #FFCCCB 50%, #FFE4E1 75%, #FFF8F8 100%)'
        }}
      >
        {renderSidebar()}

        {/* Animated Cherry Blossom Petals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300"
              style={{
                fontSize: `${Math.random() * 20 + 15}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`
              }}
              animate={{
                y: ['-10vh', '110vh'],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              🌸
            </motion.div>
          ))}
        </div>

                {/* Main Content */}
        <div className="ml-16 h-screen relative" style={{ backgroundColor: 'rgba(243,243,243,255)' }}>
          {/* Left Side - Image or Video at actual dimensions */}
          <motion.div 
            className={`absolute left-0 ${isFiftyFiftyLayout(engineeringSlide) ? 'top-0 bottom-4 w-1/2' : 'top-0 bottom-0'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {isVideoSlide(engineeringSlide) ? (
              <video
                src="/hi.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
                style={{ transform: 'translateY(-15px) translateX(50px) scale(0.85)' }}
              />
            ) : (engineeringSlide === 'connection' || engineeringSlide === 'reinforcement') ? (
              <div className="w-full h-full flex items-center justify-center" style={{ transform: 'translateY(-15px) translateX(50px)' }}>
                <div className="w-4/5 h-4/5 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-4">🖼️</div>
                    <div className="text-lg">Image Placeholder</div>
                  </div>
                </div>
              </div>
            ) : (
              <img 
                src="/07.png"
                alt="Engineering"
                className="h-full w-auto object-contain"
              />
            )}
          </motion.div>

          {/* Top Right Navigation - Breadcrumb Style */}
          <div className="absolute top-4 right-12 z-10">
            <div className="flex items-center space-x-2 text-sm">
              {currentNav.map((item, index) => (
                <div key={item.id} className="flex items-center">
                  {index > 0 && (
                    <span className="text-pink-300 mx-2 text-lg">{'/'}</span>
                  )}
                  <motion.button
                    onClick={() => {
                      if (item.id === 'title') return;
                      if (item.id === 'back-to-main') {
                        setEngineeringSection('main');
                        setEngineeringSlide('structure');
                      } else if (item.id === 'waterproof' && engineeringSection === 'main') {
                        setEngineeringSection('waterproof');
                        setEngineeringSlide('waterproof-guarantee');
                      } else if (item.id === 'waterproof-guarantee' && engineeringSection === 'waterproof') {
                        setEngineeringSlide('waterproof-guarantee');
                      } else if (engineeringSection === 'main') {
                        setEngineeringSlide(item.id);
                      } else {
                        setEngineeringSlide(item.id);
                      }
                    }}
                    className={`transition-all duration-300 hover:scale-110 ${
                      (('isTitle' in item && item.isTitle) || item.id === 'title')
                        ? 'text-pink-400 font-bold cursor-default'
                        : (('isHighlighted' in item && item.isHighlighted) || 
                           (engineeringSection === 'main' && engineeringSlide === item.id) || 
                           (engineeringSection === 'waterproof' && engineeringSlide === item.id))
                          ? 'text-pink-500 font-bold bg-pink-100/50 px-2 py-1 rounded-full'
                          : 'text-pink-300 hover:text-pink-500 font-medium'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.text}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content directly on background */}
          <div className={`absolute right-0 top-0 ${isFiftyFiftyLayout(engineeringSlide) ? 'w-1/2' : 'w-3/5'} h-full flex items-center justify-center p-12 ${isFiftyFiftyLayout(engineeringSlide) ? 'pt-8' : 'pt-0'}`}>
            <motion.div
              key={engineeringSlide}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl w-full"
            >
              <motion.h1 
                className="text-4xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #F8BBD9, #F4A6CD, #FFB7C5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {content.title}
              </motion.h1>
              
              {content.subtitle && (
                <motion.h2 
                  className="text-xl text-pink-400 mb-8 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {content.subtitle}
                </motion.h2>
              )}
              
              <div className="space-y-6 mb-8">
                {content.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-pink-300 leading-relaxed"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      {point}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Placeholder space for image - on video and placeholder slides */}
              {isPlaceholderSlide(engineeringSlide) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="w-full h-48 bg-pink-50 border-2 border-dashed border-pink-200 rounded-lg flex items-center justify-center"
                >
                  <div className="text-center text-pink-300">
                    <div className="text-2xl mb-2">🖼️</div>
                    <div className="text-sm">Image Placeholder</div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Insulation Works custom 4-slide view
  if (selectedCategory === 'insulation') {
    const insulationSlides = [
      { id: 0, label: '頂級門窗', title: '頂級門窗', image: '/window.png', desc: 'LOW-E玻璃 / 精工地板 / 日本製門' },
      { id: 1, label: 'LOW-E玻璃', title: 'LOW-E玻璃', image: '/ins2.png', desc: '高效隔音系統' },
      { id: 2, label: '精工地板', title: '精工地板', image: '/079.png', desc: '振動吸收結構' },
      { id: 3, label: '日本製門', title: '日本製門', image: '/080.png', desc: '節能建築外殼' }
    ];

    const currentSlide = insulationSlides[insulationSlide];

    // LOW-E glass content from the image
    const lowEContent = {
      title: '台灣領導品牌',
      subtitle: '6+6mm LOW-E玻璃',
      description: '養生豪宅新指標 隔熱節能 冬暖夏涼',
      intro: '玻璃界精品LOW-E玻璃，又稱低輻射鍍膜玻璃，具高可見光透過率，可有效阻隔太陽紅外線熱能、降低紫外線進入室內，賦予建築冬暖夏涼的機能。',
      features: [
        { title: '高熱阻絕鍍層', desc: '鍍銀層對紅外線具高反射性，可有效阻隔熱輻射、熱對流及熱傳導' },
        { title: '環保節能減費', desc: '冬季可減少室內熱量擴散，夏季可阻絕外在熱能，節省空調費用約34%' },
        { title: '安全防盜防爆', desc: '不易遭衝擊力貫穿，玻璃不易飛散，安全高耐震，防盜、防爆、防彈' },
        { title: '隔音性能優異', desc: '具約40dB隔音效果，可有效降低室外噪音，安享寧靜生活' },
        { title: '高阻絕紫外線', desc: '可防止太陽光紫外線曝曬，避免室內傢俱、傢飾提早老化、受損' },
        { title: '高透視度視野', desc: '可見光穿透率內保有高可見光透過率，可保持室內自然採光良好' }
      ]
    };

    return (
      <div className="min-h-screen relative" style={{backgroundColor:'rgba(244,243,243,255)'}}>
        {renderSidebar()}

        {/* Navigation text buttons top-right */}
        <div className="absolute top-8 right-12 z-40 flex items-center text-sm space-x-1">
          {insulationSlides.map((s,index)=>(
            <div key={s.id} className="flex items-center">
              {index>0 && <span className="mx-1 text-gray-400">/</span>}
              <motion.button
                onClick={()=>setInsulationSlide(index)}
                className={`transition-colors duration-300 hover:text-blue-600 ${insulationSlide===index?'text-blue-700 font-bold':'text-gray-600'}`}
                whileHover={{ y:-2 }}
                whileTap={{ scale:0.95 }}
              >
                {s.label}
              </motion.button>
            </div>
          ))}
        </div>

        {/* Slide content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={insulationSlide}
            initial={{ opacity:0, x:100 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x:-100 }}
            transition={{ duration:0.6, ease:'easeInOut' }}
            className="ml-16 flex h-screen"
          >
            {/* LOW-E slide with video and text layout */}
            {insulationSlide === 1 ? (
              <>
                {/* Left - Video */}
                <motion.div 
                  className="w-1/2 h-full relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <video
                    src="/hi.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                    style={{ transform: 'translateY(-15px) translateX(50px) scale(0.85)' }}
                  />
                </motion.div>

                {/* Right - Text Content */}
                <div className="w-1/2 h-full flex items-center justify-center p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl w-full"
                  >
                    {/* Title with Taiwan flag */}
                    <div className="flex items-center mb-4">
                      <motion.h1 
                        className="text-3xl font-bold text-pink-400 mr-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {lowEContent.title}
                      </motion.h1>
                      <div className="text-2xl">🇹🇼</div>
                    </div>

                    <motion.h2 
                      className="text-2xl font-bold text-pink-400 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {lowEContent.subtitle}
                    </motion.h2>

                    <motion.h3 
                      className="text-lg font-medium text-gray-700 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {lowEContent.description}
                    </motion.h3>

                    <motion.p 
                      className="text-sm text-gray-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {lowEContent.intro}
                    </motion.p>

                    {/* Features list */}
                    <div className="space-y-3">
                      {lowEContent.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="text-pink-400 font-medium text-sm mb-1">{feature.title}</div>
                            <div className="text-gray-700 text-sm leading-relaxed">{feature.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </>
            ) : (
              /* Other slides - Full image */
              <div className="w-full h-full relative overflow-hidden ml-36">
                <img 
                  src={currentSlide.image} 
                  alt={currentSlide.title} 
                  className={`absolute inset-0 w-full h-full object-cover transform ${
                    insulationSlide === 2 || insulationSlide === 3 
                      ? 'scale-90 translate-x-12 translate-y-5' 
                      : 'scale-95'
                  }`} 
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Health Prevention custom 4-slide view
  if (selectedCategory === 'health') {
    const healthSlides = [
      { id: 0, label: '當層排氣', title: '當層排氣', image: '/health1.png', desc: '獨立淨化抗疫 當層排氣系統' },
      { id: 1, label: '獨立氣閥', title: '獨立氣閥', image: '/fly.png', desc: '專業氣閥控制系統' },
      { id: 2, label: '天然塗漆', title: '天然塗漆', image: '/full.jpg', desc: '環保無毒塗料工程' },
      { id: 3, label: '淨水系統', title: '淨水系統', image: '/water.jpg', desc: '高效水質淨化設備' }
    ];

    const currentSlide = healthSlides[healthSlide];

    // First slide content from the image
    const ventilationContent = {
      title: '當層排氣',
      subtitle: '獨立淨化抗疫 當層排氣系統',
      description: '每戶獨立設置，私戶管道當層遮斷設計，單向排氣只出不進，避免水氣煙霧流竄其他樓層或戶別，將浴室濕氣以最短時間直接排出室外，藉敞不互相干擾，空氣循環更潔淨，更有效阻隔噪音、氣流傳導。'
    };

    return (
      <div className="min-h-screen relative" style={{backgroundColor:'rgba(244,243,243,255)'}}>
        {renderSidebar()}

        {/* Navigation text buttons top-right */}
        <div className="absolute top-8 right-12 z-40 flex items-center text-sm space-x-1">
          {healthSlides.map((s,index)=>(
            <div key={s.id} className="flex items-center">
              {index>0 && <span className="mx-1 text-gray-400">/</span>}
              <motion.button
                onClick={()=>setHealthSlide(index)}
                className={`transition-colors duration-300 hover:text-blue-600 ${healthSlide===index?'text-blue-700 font-bold':'text-gray-600'}`}
                whileHover={{ y:-2 }}
                whileTap={{ scale:0.95 }}
              >
                {s.label}
              </motion.button>
            </div>
          ))}
        </div>

        {/* Slide content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={healthSlide}
            initial={{ opacity:0, x:100 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x:-100 }}
            transition={{ duration:0.6, ease:'easeInOut' }}
            className="ml-16 flex h-screen"
          >
            {/* First slide with video and text layout */}
            {healthSlide === 0 ? (
              <>
                {/* Left - Video */}
                <motion.div 
                  className="w-1/2 h-full relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <video
                    src="/hi.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                    style={{ transform: 'translateY(-15px) translateX(50px) scale(0.85)' }}
                  />
                </motion.div>

                {/* Right - Text Content */}
                <div className="w-1/2 h-full flex items-center justify-center p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl w-full"
                  >
                    {/* Title with pink bar */}
                    <div className="flex items-center mb-6">
                      <div className="w-1 h-12 bg-pink-400 mr-4"></div>
                      <motion.h1 
                        className="text-4xl font-bold text-gray-800"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {ventilationContent.title}
                      </motion.h1>
                    </div>

                    <motion.h2 
                      className="text-2xl font-bold text-gray-700 mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {ventilationContent.subtitle}
                    </motion.h2>

                    <motion.p 
                      className="text-lg text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {ventilationContent.description}
                    </motion.p>
                  </motion.div>
                </div>
              </>
            ) : (
              /* Other slides - Full image */
              <div className={`w-full h-full relative overflow-hidden ${healthSlide === 2 ? '' : 'ml-36'}`}>
                <img 
                  src={currentSlide.image} 
                  alt={currentSlide.title} 
                  className={`absolute inset-0 w-full h-full object-cover ${
                    healthSlide === 2 
                      ? '' 
                      : healthSlide === 1
                        ? 'transform scale-90 translate-x-[15px] translate-y-[15px]'
                        : healthSlide === 3
                          ? 'transform scale-95 translate-x-[15px] translate-y-[15px]'
                          : 'transform scale-95'
                  }`}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Building Materials custom 7-slide view
  if (selectedCategory === 'materials') {
    const materialsSlides = [
      { id: 0, label: '防火鋼門', title: '防火鋼門', image: '/101.jpg', desc: '高級防火安全門系統' },
      { id: 1, label: '智室門鎖', title: '智室門鎖', image: '/102.jpg', desc: '智能門鎖控制系統' },
      { id: 2, label: '感溫廚具', title: '感溫廚具', image: '/103.jpg', desc: '智能感溫廚房設備' },
      { id: 3, label: '理想衛浴', title: '理想衛浴', image: '/104.jpg', desc: '高端衛浴設備系統' },
      { id: 4, label: '換氣吸風機', title: '換氣吸風機', image: '/105.jpg', desc: '高效通風換氣系統' },
      { id: 5, label: '德國鋼板琺瑯浴缸', title: '德國鋼板琺瑯浴缸', image: '/106.jpg', desc: '德國進口高級浴缸' },
      { id: 6, label: '空調首選', title: '空調首選', image: '/107.jpg', desc: '頂級空調設備系統' },
      { id: 7, label: '汽車停車位', title: '汽車停車位', image: '/108.jpg', desc: '智能停車管理系統' }
    ];

    const currentSlide = materialsSlides[materialsSlide];

    return (
      <div className="min-h-screen relative" style={{backgroundColor:'rgba(244,243,243,255)'}}>
        {renderSidebar()}

        {/* Navigation text buttons top-right */}
        <div className="absolute top-8 right-12 z-40 flex items-center text-sm space-x-1">
          {materialsSlides.map((s,index)=>(
            <div key={s.id} className="flex items-center">
              {index>0 && <span className="mx-1 text-gray-400">/</span>}
              <motion.button
                onClick={()=>setMaterialsSlide(index)}
                className={`transition-colors duration-300 hover:text-blue-600 ${materialsSlide===index?'text-blue-700 font-bold':'text-gray-600'}`}
                whileHover={{ y:-2 }}
                whileTap={{ scale:0.95 }}
              >
                {s.label}
              </motion.button>
            </div>
          ))}
        </div>

        {/* Slide content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={materialsSlide}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.6, ease:'easeInOut' }}
            className="ml-16 flex h-screen"
          >
                         {/* Full screen image for all slides */}
             <div className="w-full h-full relative overflow-hidden">
               {currentSlide.image ? (
                 <img 
                   src={currentSlide.image} 
                   alt={currentSlide.title} 
                   className={`absolute inset-0 w-full h-full object-cover ${
                     materialsSlide === 0 || materialsSlide === 2 
                       ? 'transform translate-x-[30px]' 
                       : materialsSlide === 6
                         ? 'transform translate-x-[-10px] translate-y-[-10px]'
                         : ''
                   }`}
                 />
               ) : (
                 <div className="absolute inset-0 w-full h-full bg-gray-100 flex items-center justify-center">
                   <div className="text-center text-gray-400">
                     <div className="text-6xl mb-4">🖼️</div>
                     <div className="text-2xl font-medium">{currentSlide.title}</div>
                     <div className="text-lg mt-2">Image Coming Soon</div>
                   </div>
                 </div>
               )}
             </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Other categories (existing implementation)
  return (
    <div className="min-h-screen bg-white relative">
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-8 left-8 z-20 bg-black/10 hover:bg-black/20 rounded-full p-3 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <div className="flex h-screen">
        {/* Items list */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 border-r border-gray-200"
        >
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl">{currentCategory?.name}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{currentCategory?.name}</h2>
                <p className="text-gray-600">{currentCategory?.chinese}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {currentCategory?.items.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedItem(index)}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  selectedItem === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-xs text-blue-600 font-medium">{item.brand}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Detail view */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 bg-white p-12 flex items-center justify-center"
        >
          <div className="text-center max-w-2xl">
            <motion.div
              key={selectedItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-8xl mb-8">{currentCategory?.name}</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {currentCategory?.items[selectedItem].name}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {currentCategory?.items[selectedItem].description}
              </p>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full inline-block font-bold text-lg">
                {currentCategory?.items[selectedItem].brand}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 