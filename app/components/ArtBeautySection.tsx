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
  const [insulationImageButton, setInsulationImageButton] = useState(1);
  const [insulationSecondPageButton, setInsulationSecondPageButton] = useState(1);
  const [healthSlide, setHealthSlide] = useState(0);
  const [materialsSlide, setMaterialsSlide] = useState(0);
  // Add new state for third page buttons
  const [insulationThirdPageButton, setInsulationThirdPageButton] = useState(1);

  // Add new states for materials page buttons
  const [materialsFirstPageButton, setMaterialsFirstPageButton] = useState(1);
  const [materialsThirdPageButton, setMaterialsThirdPageButton] = useState(1);
  const [materialsFourthPageButton, setMaterialsFourthPageButton] = useState(1);
  const [materialsFifthPageButton, setMaterialsFifthPageButton] = useState(1);
  const [materialsSixthPageButton, setMaterialsSixthPageButton] = useState(1);

  // Add video view state
  const [showVideo, setShowVideo] = useState(false);

  // Add new state for health second slide buttons
  const [healthSecondSlideButton, setHealthSecondSlideButton] = useState(1);

  // Add new states for health third and fourth slide buttons
  const [healthThirdSlideButton, setHealthThirdSlideButton] = useState(1);
  const [healthFourthSlideButton, setHealthFourthSlideButton] = useState(1);

  // Helper function to check if current slide uses video/50-50 layout
  const isVideoSlide = (slide: string) => {
    return ['rebar', 'waterproof-guarantee', 'exterior-waterproof', 'window-waterproof', 'bathroom-waterproof', 'roof-waterproof'].includes(slide);
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
          src="/art/tab.png" 
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
              <img src="/art/1.png" alt="" className="w-full h-full object-contain opacity-80" />
            </motion.div>
            <motion.div
              className="absolute top-8 left-40 w-10 h-10"
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 5 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              <img src="/art/2.png" alt="" className="w-full h-full object-contain opacity-70" />
            </motion.div>
            <motion.div
              className="absolute top-6 left-56 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: -25 }}
              animate={{ opacity: 0.5, scale: 1, rotate: -10 }}
              transition={{ duration: 1, delay: 2.6 }}
            >
              <img src="/art/3.png" alt="" className="w-full h-full object-contain opacity-60" />
            </motion.div>

            <motion.div
              className="absolute top-8 right-8 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 25 }}
              animate={{ opacity: 0.8, scale: 1, rotate: 10 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              <img src="/art/4.png" alt="" className="w-full h-full object-contain opacity-75" />
            </motion.div>
            <motion.div
              className="absolute top-4 right-24 w-10 h-10"
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 0.5, scale: 1, rotate: -5 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              <img src="/art/5.png" alt="" className="w-full h-full object-contain opacity-60" />
            </motion.div>
            <motion.div
              className="absolute top-12 right-40 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 30 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 15 }}
              transition={{ duration: 1, delay: 2.7 }}
            >
              <img src="/art/6.png" alt="" className="w-full h-full object-contain opacity-70" />
            </motion.div>

            {/* Bottom Row */}
            <motion.div
              className="absolute bottom-8 left-26 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 30 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 15 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <img src="/art/7.png" alt="" className="w-full h-full object-contain opacity-65" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-44 w-10 h-10"
              initial={{ opacity: 0, scale: 0, rotate: -25 }}
              animate={{ opacity: 0.7, scale: 1, rotate: -10 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <img src="/art/1.png" alt="" className="w-full h-full object-contain opacity-80" />
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-60 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 20 }}
              animate={{ opacity: 0.5, scale: 1, rotate: 8 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <img src="/art/2.png" alt="" className="w-full h-full object-contain opacity-60" />
            </motion.div>

            <motion.div
              className="absolute bottom-6 right-8 w-16 h-16"
              initial={{ opacity: 0, scale: 0, rotate: 20 }}
              animate={{ opacity: 0.8, scale: 1, rotate: 5 }}
              transition={{ duration: 1, delay: 2.1 }}
            >
              <img src="/art/3.png" alt="" className="w-full h-full object-contain opacity-80" />
            </motion.div>
            <motion.div
              className="absolute bottom-12 right-24 w-10 h-10"
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={{ opacity: 0.5, scale: 1, rotate: -15 }}
              transition={{ duration: 1, delay: 2.6 }}
            >
              <img src="/art/4.png" alt="" className="w-full h-full object-contain opacity-60" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-40 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: 35 }}
              animate={{ opacity: 0.6, scale: 1, rotate: 18 }}
              transition={{ duration: 1, delay: 2.9 }}
            >
              <img src="/art/5.png" alt="" className="w-full h-full object-contain opacity-70" />
            </motion.div>

            {/* Side decorations */}
            <motion.div
              className="absolute top-1/4 left-20 w-8 h-8"
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={{ opacity: 0.4, scale: 1, rotate: 20 }}
              transition={{ duration: 1, delay: 2.7 }}
            >
              <img src="/art/6.png" alt="" className="w-full h-full object-contain opacity-50" />
            </motion.div>
            <motion.div
              className="absolute top-1/3 left-24 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: -40 }}
              animate={{ opacity: 0.5, scale: 1, rotate: -18 }}
              transition={{ duration: 1, delay: 3.0 }}
            >
              <img src="/art/7.png" alt="" className="w-full h-full object-contain opacity-65" />
            </motion.div>
            <motion.div
              className="absolute top-2/3 right-20 w-8 h-8"
              initial={{ opacity: 0, scale: 0, rotate: 50 }}
              animate={{ opacity: 0.4, scale: 1, rotate: 25 }}
              transition={{ duration: 1, delay: 3.2 }}
            >
              <img src="/art/1.png" alt="" className="w-full h-full object-contain opacity-40" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-16 w-12 h-12"
              initial={{ opacity: 0, scale: 0, rotate: -35 }}
              animate={{ opacity: 0.6, scale: 1, rotate: -16 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <img src="/art/2.png" alt="" className="w-full h-full object-contain opacity-70" />
            </motion.div>

            {/* Add cat.png near bottom right, next to logo */}
            <motion.div
              className="absolute bottom-16 right-12 w-160 h-160"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <img src="/art/cat.png" alt="" className="w-full h-full object-contain opacity-85" />
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
              src="/art/art.png" 
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
              whileHover={{ scale: 1.15, transition: { duration: 0.1 } }}
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
          background: engineeringSlide === 'connection' 
            ? '#ffffff' 
            : 'linear-gradient(135deg, #FFB7C5 0%, #FFC0CB 25%, #FFCCCB 50%, #FFE4E1 75%, #FFF8F8 100%)'
        }}
      >
        {renderSidebar()}

        {/* Animated Cherry Blossom Petals - Hidden on connection page */}
        {engineeringSlide !== 'connection' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
                className="absolute"
              style={{
                fontSize: `${Math.random() * 20 + 15}px`,
                left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  color: '#9CA3AF'
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
        )}

                {/* Main Content */}
        <div className="ml-16 h-screen relative" style={{ 
          backgroundColor: engineeringSlide === 'connection' ? '#ffffff' : 'rgba(243,243,243,255)' 
        }}>
          {/* Left Side - Image or Video at actual dimensions */}
          <motion.div 
            className={`absolute left-0 ${isFiftyFiftyLayout(engineeringSlide) ? 'top-0 bottom-4 w-1/2' : 'top-0 bottom-0'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {isVideoSlide(engineeringSlide) ? (
              <video
                src={
                  engineeringSlide === 'rebar' ? '/art/hi3.mp4' :
                  engineeringSlide === 'exterior-waterproof' ? '/art/hi3.mp4' :
                  engineeringSlide === 'window-waterproof' ? '/art/hi4.mp4' :
                  engineeringSlide === 'bathroom-waterproof' ? '/art/hi5.mp4' :
                  engineeringSlide === 'roof-waterproof' ? '/art/hi6.mp4' :
                  '/art/hi.mp4'
                }
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
                style={{ transform: 'translateY(-15px) translateX(50px) scale(0.85)' }}
              />
            ) : (engineeringSlide === 'connection') ? (
              <img
                src="/art/hi2.gif"
                alt="Connection Process"
                className="w-full h-full object-contain"
                style={{ transform: 'translateY(-15px) translateX(50px) scale(1)' }}
              />
            ) : (engineeringSlide === 'reinforcement') ? (
              <img 
                src="/art/win.png"
                alt="Window Reinforcement"
                className="h-full w-auto object-contain"
              />
            ) : (
              <img 
                src="/art/07.png"
                alt="Engineering"
                className="h-full w-auto object-contain"
              />
            )}
          </motion.div>

          {/* Top Right Navigation - Breadcrumb Style */}
          <div className="absolute top-4 right-12 z-10">
            <div className="flex items-center space-x-4 text-sm">
              {currentNav.map((item, index) => (
                <div key={item.id} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-3 text-lg" style={{ color: '#9CA3AF' }}>{'/'}</span>
                  )}
                  {item.id === 'waterproof-guarantee' ? (
                    <div
                      className="font-bold px-3 py-2 rounded-lg border-2"
                      style={{
                        color: '#ffffff',
                        backgroundColor: 'rgba(251,184,170,255)',
                        borderColor: 'rgba(251,184,170,255)'
                      }}
                    >
                      {item.text}
                    </div>
                  ) : (
                  <motion.button
                    onClick={() => {
                      if (item.id === 'title') return;
                      if (item.id === 'back-to-main') {
                        setEngineeringSection('main');
                        setEngineeringSlide('structure');
                      } else if (item.id === 'waterproof' && engineeringSection === 'main') {
                        setEngineeringSection('waterproof');
                        setEngineeringSlide('waterproof-guarantee');
                      } else if (engineeringSection === 'main') {
                        setEngineeringSlide(item.id);
                      } else {
                        setEngineeringSlide(item.id);
                      }
                    }}
                      className={`transition-all duration-300 hover:underline ${
                      (('isTitle' in item && item.isTitle) || item.id === 'title')
                          ? 'font-bold cursor-default'
                          : (item.id === 'waterproof')
                            ? 'font-bold px-3 py-2 rounded-lg border-2'
                          : (item.id === 'back-to-main')
                            ? 'font-bold px-3 py-2 rounded-lg border-2'
                        : (('isHighlighted' in item && item.isHighlighted) || 
                           (engineeringSection === 'main' && engineeringSlide === item.id) || 
                           (engineeringSection === 'waterproof' && engineeringSlide === item.id))
                            ? 'font-bold bg-gray-200/50 px-2 py-1 rounded-full'
                            : 'font-medium'
                      }`}
                      style={{
                        color: (('isTitle' in item && item.isTitle) || item.id === 'title')
                          ? 'rgba(251,184,170,255)'
                          : (item.id === 'waterproof')
                            ? '#ffffff'
                          : (item.id === 'back-to-main')
                            ? 'rgba(251,184,170,255)'
                          : (('isHighlighted' in item && item.isHighlighted) || 
                             (engineeringSection === 'main' && engineeringSlide === item.id) || 
                             (engineeringSection === 'waterproof' && engineeringSlide === item.id))
                            ? 'rgba(251,184,170,255)'
                            : '#9CA3AF',
                        backgroundColor: (item.id === 'waterproof')
                          ? 'rgba(251,184,170,255)'
                          : 'transparent',
                        borderColor: (item.id === 'waterproof' || item.id === 'back-to-main')
                          ? 'rgba(251,184,170,255)'
                          : 'transparent'
                      }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.text}
                  </motion.button>
                  )}
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
                style={{ color: 'rgba(251,184,170,255)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {content.title}
              </motion.h1>
              
              {content.subtitle && (
                <motion.h2 
                className="text-xl mb-8 font-medium"
                style={{ color: '#000000' }}
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
                    className="leading-relaxed"
                    style={{ color: '#000000' }}
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

              {/* Image space for rebar and connection slides */}
              {engineeringSlide === 'rebar' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="w-full h-48 flex items-center justify-center mt-8"
                >
                  <img 
                    src="/art/mech1.png"
                    alt="Rebar Engineering Detail"
                    className="h-full w-auto object-contain"
                    style={{ transform: 'scale(1.2) translateY(20px)' }}
                  />
                </motion.div>
              )}
              {engineeringSlide === 'connection' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="w-full h-48 flex items-center justify-center mt-8"
                >
                  <img 
                    src="/art/mech2.png"
                    alt="Connection Engineering Detail"
                    className="h-full w-auto object-contain"
                    style={{ transform: 'scale(1.2) translateY(20px)' }}
                  />
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
      { id: 0, label: '頂級門窗', title: '頂級門窗', image: '/art/window.png', desc: 'LOW-E玻璃 / 精工地板 / 日本製門' },
      { id: 1, label: 'LOW-E玻璃', title: 'LOW-E玻璃', image: '/art/ins2.png', desc: '高效隔音系統' },
      { id: 2, label: '精工地板', title: '精工地板', image: '/art/079.png', desc: '振動吸收結構' },
      { id: 3, label: '日本製門', title: '日本製門', image: '/art/080.png', desc: '節能建築外殼' }
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
                    src="/art/tai.mp4"
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
                    <motion.img
                      src="/art/taiwan.png"
                      alt="Taiwan"
                      className="w-full h-auto object-contain"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </div>
              </>
            ) : (
              /* Other slides - Full image */
              <div className="w-full h-full relative overflow-hidden ml-36">
                <motion.img 
                  key={insulationSlide === 0 ? insulationImageButton : insulationSlide === 2 ? insulationSecondPageButton : currentSlide.image}
                  src={insulationSlide === 0 ? (
                    insulationImageButton === 1 ? '/art/window.png' :
                    insulationImageButton === 2 ? '/art/tran1.png' :
                    insulationImageButton === 3 ? '/art/tran2.png' :
                    insulationImageButton === 4 ? '/art/tran3.png' :
                    '/art/window.png'
                  ) : insulationSlide === 2 ? (
                    insulationSecondPageButton === 1 ? '/art/ger1.png' :
                    insulationSecondPageButton === 2 ? '/art/ger2.png' :
                    insulationSecondPageButton === 3 ? '/art/ger3.png' :
                    insulationSecondPageButton === 4 ? '/art/ger4.png' :
                    insulationSecondPageButton === 5 ? '/art/ger5.png' :
                    insulationSecondPageButton === 6 ? '/art/ger6.png' :
                    '/art/ger1.png'
                  ) : insulationSlide === 3 ? (
                    insulationThirdPageButton === 1 ? '/art/080.png' :
                    insulationThirdPageButton === 2 ? '/art/buckle.png' :
                    insulationThirdPageButton === 3 ? '/art/buckle2.png' :
                    '/art/080.png'
                  ) : currentSlide.image} 
                  alt={currentSlide.title} 
                  className={`absolute inset-0 w-full h-full object-cover transform ${
                    insulationSlide === 2 || insulationSlide === 3 
                      ? 'scale-90 translate-x-12 translate-y-5' 
                      : 'scale-95'
                  }`} 
                  style={{
                    transform: insulationSlide === 0 ? (
                      insulationImageButton === 2 ? 'scale(0.95) translateX(72px) translateY(16px)' :
                      insulationImageButton === 3 ? 'scale(0.95) translateX(58px) translateY(8px)' :
                      insulationImageButton === 4 ? 'scale(0.95) translateX(60px) translateY(12px)' :
                      'scale(0.95)'
                    ) : insulationSlide === 2 ? (
                      insulationSecondPageButton === 1 ? 'scale(1.05) translateX(13px) translateY(-30px)' :
                      insulationSecondPageButton === 2 ? 'scale(1.05) translateX(28px) translateY(-8px)' :
                      insulationSecondPageButton === 3 ? 'scale(1.05) translateX(23px) translateY(-18px)' :
                      insulationSecondPageButton === 4 ? 'scale(1.05) translateX(23px) translateY(-13px)' :
                      insulationSecondPageButton === 5 ? 'scale(1.05) translateX(23px) translateY(-13px)' :
                      insulationSecondPageButton === 6 ? 'scale(1.05) translateX(20px) translateY(-6px)' :
                      'scale(1.05) translateX(28px) translateY(-8px)'
                    ) : insulationSlide === 3 ? (
                      'scale(0.95) translateX(-50px) translateY(-20px)'
                    ) : (
                      'scale(0.95)'
                    )
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Numbered buttons for first slide only */}
                {insulationSlide === 0 && (
                  <>
                    <motion.button
                      onClick={() => setInsulationImageButton(1)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationImageButton === 1 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 152px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      1
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setInsulationImageButton(2)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationImageButton === 2 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 114px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      2
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setInsulationImageButton(3)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationImageButton === 3 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 76px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      3
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setInsulationImageButton(4)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationImageButton === 4 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 38px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      4
                    </motion.button>
                  </>
                )}
                
                {/* Numbered buttons for second slide (6 buttons) */}
                {insulationSlide === 2 && (
                  <>
                    <motion.button
                      onClick={() => setInsulationSecondPageButton(1)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationSecondPageButton === 1 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 77px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      1
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setInsulationSecondPageButton(2)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationSecondPageButton === 2 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 39px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      2
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setInsulationSecondPageButton(3)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationSecondPageButton === 3 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 1px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      3
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setInsulationSecondPageButton(4)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationSecondPageButton === 4 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% + 37px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      4
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setInsulationSecondPageButton(5)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationSecondPageButton === 5 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% + 75px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      5
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setInsulationSecondPageButton(6)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationSecondPageButton === 6 
                          ? 'bg-gray-600 text-white border-gray-600' 
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% + 113px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      6
                    </motion.button>
                  </>
                )}

                {/* Add buttons for third slide (fourth page) */}
                {insulationSlide === 3 && (
                  <>
                    <motion.button
                      onClick={() => setInsulationThirdPageButton(1)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationThirdPageButton === 1
                          ? 'bg-gray-600 text-white border-gray-600'
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 77px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      1
                    </motion.button>

                    <motion.button
                      onClick={() => setInsulationThirdPageButton(2)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationThirdPageButton === 2
                          ? 'bg-gray-600 text-white border-gray-600'
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 39px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      2
                    </motion.button>

                    <motion.button
                      onClick={() => setInsulationThirdPageButton(3)}
                      className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                        insulationThirdPageButton === 3
                          ? 'bg-gray-600 text-white border-gray-600'
                          : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                      }`}
                      style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 1px)', borderRadius: '1px', width: '28px', height: '28px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      3
                    </motion.button>
                  </>
                )}
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
      { id: 0, label: '當層排氣', title: '當層排氣', image: '/art/health1.png', desc: '獨立淨化抗疫 當層排氣系統' },
      { id: 1, label: '獨立氣閥', title: '獨立氣閥', image: '/art/plan.png', desc: '專業氣閥控制系統' },
      { id: 2, label: '天然塗漆', title: '天然塗漆', image: '/art/full.jpg', desc: '環保無毒塗料工程' },
      { id: 3, label: '淨水系統', title: '淨水系統', image: '/art/water.jpg', desc: '高效水質淨化設備' }
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
            {/* First slide with video and image layout */}
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
                    src="/art/cab.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                    style={{ transform: 'translateY(-15px) translateX(50px) scale(0.85)' }}
                  />
                </motion.div>

                {/* Right - Image */}
                <div className="w-1/2 h-full flex items-center justify-center p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl w-full"
                  >
                    <img
                      src="/art/cab.png"
                      alt="Cab Information"
                      className="w-full h-auto object-contain"
                      style={{ transform: 'translateY(-15px) translateX(50px) scale(0.85)' }}
                    />
                  </motion.div>
                </div>
              </>
            ) : healthSlide === 1 ? (
              /* Second slide - Full image with buttons */
              <div className="w-full h-full relative overflow-hidden ml-36">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={healthSecondSlideButton}
                    src={healthSecondSlideButton === 1 ? '/art/ss.png' : '/art/ss1.png'}
                    alt="Health Information"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                
                {/* Add buttons for health second slide */}
                <motion.button
                  onClick={() => setHealthSecondSlideButton(1)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    healthSecondSlideButton === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 76px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>

                <motion.button
                  onClick={() => setHealthSecondSlideButton(2)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    healthSecondSlideButton === 2
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 38px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>
              </div>
            ) : healthSlide === 2 ? (
              /* Third slide - Full image with 3 buttons */
              <div className="w-full h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={healthThirdSlideButton}
                    src={healthThirdSlideButton === 1 ? currentSlide.image : 
                         healthThirdSlideButton === 2 ? currentSlide.image : 
                         currentSlide.image}
                    alt="Health Information"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                
                {/* Add 3 buttons for health third slide */}
                <motion.button
                  onClick={() => setHealthThirdSlideButton(1)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    healthThirdSlideButton === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 114px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>

                <motion.button
                  onClick={() => setHealthThirdSlideButton(2)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    healthThirdSlideButton === 2
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 76px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>

                <motion.button
                  onClick={() => setHealthThirdSlideButton(3)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    healthThirdSlideButton === 3
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 38px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  3
                </motion.button>
              </div>
            ) : healthSlide === 3 ? (
              /* Fourth slide - Full image with 2 buttons */
              <div className="w-full h-full relative overflow-hidden ml-36">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={healthFourthSlideButton}
                    src={healthFourthSlideButton === 1 ? currentSlide.image : currentSlide.image}
                    alt="Health Information"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                
                {/* Add 2 buttons for health fourth slide */}
                <motion.button
                  onClick={() => setHealthFourthSlideButton(1)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    healthFourthSlideButton === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 76px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>

                <motion.button
                  onClick={() => setHealthFourthSlideButton(2)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    healthFourthSlideButton === 2
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 38px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>
              </div>
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
      { id: 0, label: '防火鋼門', title: '防火鋼門', image: '/art/101.jpg', desc: '高級防火安全門系統' },
      { id: 1, label: '智室門鎖', title: '智室門鎖', image: '/art/102.jpg', desc: '智能門鎖控制系統' },
      { id: 2, label: '感溫廚具', title: '感溫廚具', image: '/art/103.jpg', desc: '智能感溫廚房設備' },
      { id: 3, label: '理想衛浴', title: '理想衛浴', image: '/art/104.jpg', desc: '高端衛浴設備系統' },
      { id: 4, label: '換氣吸風機', title: '換氣吸風機', image: '/art/105.jpg', desc: '高效通風換氣系統' },
      { id: 5, label: '德國鋼板琺瑯浴缸', title: '德國鋼板琺瑯浴缸', image: '/art/106.jpg', desc: '德國進口高級浴缸' },
      { id: 6, label: '空調首選', title: '空調首選', image: '/art/107.jpg', desc: '頂級空調設備系統' },
      { id: 7, label: '汽車停車位', title: '汽車停車位', image: '/art/108.jpg', desc: '智能停車管理系統' }
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
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={materialsSlide === 0 ? materialsFirstPageButton : 
                         materialsSlide === 2 ? materialsThirdPageButton :
                         materialsSlide === 3 ? materialsFourthPageButton :
                         materialsSlide === 4 ? materialsFifthPageButton :
                         materialsSlide === 5 ? materialsSixthPageButton : 
                         'default'}
                    src={materialsSlide === 0 ? (
                      materialsFirstPageButton === 1 ? '/art/a01.png' :
                      materialsFirstPageButton === 2 ? '/art/a02.png' :
                      '/art/a01.png'
                    ) : materialsSlide === 2 ? (
                      materialsThirdPageButton === 1 ? '/art/b1.png' :
                      materialsThirdPageButton === 2 ? '/art/b2.png' :
                      materialsThirdPageButton === 3 ? '/art/b3.png' :
                      materialsThirdPageButton === 4 ? '/art/b4.png' :
                      '/art/b1.png'
                    ) : materialsSlide === 3 ? (
                      materialsFourthPageButton === 1 ? '/art/c1.png' :
                      materialsFourthPageButton === 2 ? '/art/c2.png' :
                      materialsFourthPageButton === 3 ? '/art/c3.png' :
                      materialsFourthPageButton === 4 ? '/art/c4.png' :
                      materialsFourthPageButton === 5 ? '/art/c5.png' :
                      materialsFourthPageButton === 6 ? '/art/c6.png' :
                      '/art/c1.png'
                    ) : materialsSlide === 4 ? (
                      materialsFifthPageButton === 1 ? '/art/d1.png' :
                      materialsFifthPageButton === 2 ? '/art/d2.png' :
                      materialsFifthPageButton === 3 ? '/art/d3.png' :
                      materialsFifthPageButton === 4 ? '/art/d4.png' :
                      '/art/d1.png'
                    ) : materialsSlide === 5 ? (
                      materialsSixthPageButton === 1 ? '/art/e1.png' :
                      materialsSixthPageButton === 2 ? '/art/e2.png' :
                      materialsSixthPageButton === 3 ? '/art/e3.png' :
                      '/art/e1.png'
                    ) : currentSlide.image} 
                    alt={currentSlide.title} 
                    className={`absolute inset-0 w-full h-full object-cover ${
                      materialsSlide === 0 || materialsSlide === 2 
                        ? 'transform translate-x-[30px]' 
                        : materialsSlide === 6
                          ? 'transform translate-x-[-10px] translate-y-[-10px]'
                          : ''
                    }`}
                    style={{
                      transform: (materialsSlide === 2 && (materialsThirdPageButton === 1 || materialsThirdPageButton === 4))
                        ? 'scale(0.9) translateY(-20px) translateX(30px)'
                        : (materialsSlide === 3 && [2,3,4,5,6].includes(materialsFourthPageButton))
                          ? 'scale(0.9) translateY(-15px)'
                        : (materialsSlide === 4 && materialsFifthPageButton === 3)
                          ? 'translateX(50px)'
                        : (materialsSlide === 5)
                          ? 'translateX(30px)'
                        : materialsSlide === 0 || materialsSlide === 2 
                          ? 'translateX(30px)' 
                          : materialsSlide === 6
                            ? 'translateX(-10px) translateY(-10px)'
                            : ''
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
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
            
            {/* Add buttons for materials slides */}
            {materialsSlide === 0 && (
              <>
                <motion.button
                  onClick={() => setMaterialsFirstPageButton(1)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFirstPageButton === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 76px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFirstPageButton(2)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFirstPageButton === 2
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% + 5px)', left: 'calc(50% - 38px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>
              </>
            )}

            {materialsSlide === 2 && (
              <>
                <motion.button
                  onClick={() => setMaterialsThirdPageButton(1)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsThirdPageButton === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 116px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsThirdPageButton(2)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsThirdPageButton === 2
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 78px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsThirdPageButton(3)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsThirdPageButton === 3
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 40px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  3
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsThirdPageButton(4)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsThirdPageButton === 4
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 2px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  4
                </motion.button>
              </>
            )}

            {materialsSlide === 3 && (
              <>
                <motion.button
                  onClick={() => setMaterialsFourthPageButton(1)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFourthPageButton === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 154px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFourthPageButton(2)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFourthPageButton === 2
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 116px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFourthPageButton(3)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFourthPageButton === 3
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 78px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  3
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFourthPageButton(4)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFourthPageButton === 4
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 40px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  4
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFourthPageButton(5)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFourthPageButton === 5
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 2px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  5
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFourthPageButton(6)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFourthPageButton === 6
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% + 36px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  6
                </motion.button>
              </>
            )}

            {materialsSlide === 4 && (
              <>
                <motion.button
                  onClick={() => setMaterialsFifthPageButton(1)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFifthPageButton === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 116px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFifthPageButton(2)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFifthPageButton === 2
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 78px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFifthPageButton(3)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFifthPageButton === 3
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 40px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  3
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsFifthPageButton(4)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsFifthPageButton === 4
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 2px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  4
                </motion.button>
              </>
            )}

            {materialsSlide === 5 && (
              <>
                <motion.button
                  onClick={() => setMaterialsSixthPageButton(1)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsSixthPageButton === 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 78px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  1
                </motion.button>

                <motion.button
                  onClick={() => setMaterialsSixthPageButton(2)}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsSixthPageButton === 2
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 40px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2
                </motion.button>

                <motion.button
                  onClick={() => {
                    if (materialsSixthPageButton === 3) {
                      // If e3 is already selected, show video immediately
                      setShowVideo(true);
                    } else {
                      // If e3 is not selected, select it first
                      setMaterialsSixthPageButton(3);
                    }
                  }}
                  className={`absolute text-xs font-bold border transition-all duration-300 z-10 transform -translate-x-1/2 -translate-y-1/2 ${
                    materialsSixthPageButton === 3
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-blue-600 border-blue-400 hover:bg-blue-100'
                  }`}
                  style={{ top: 'calc(15% - 15px)', left: 'calc(50% - 2px)', borderRadius: '1px', width: '28px', height: '28px' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  3
                </motion.button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Add video view component */}
        {showVideo && (
          <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
            {/* Back button */}
            <motion.button
              onClick={() => setShowVideo(false)}
              className="absolute top-8 left-8 z-[10000] bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Video player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl w-full px-8 z-[10000]"
            >
              <video
                controls
                autoPlay
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{ maxHeight: '88vh', transform: 'scale(1.1)' }}
              >
                <source src="/art/food.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mt-6"
              >
                <h2 className="text-2xl font-bold text-white mb-2">建材展示</h2>
                <p className="text-white/70">建築材料展示影片</p>
              </motion.div>
            </motion.div>
          </div>
        )}
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