// 個人資料
export const profile = {
  name: 'Dr.Jimmy Lee',
  company: '參寶寧生物科技股份有限公司',
  companyDesc: '致力於環境改進，協助企業永續發展，創造0廢棄產品製程',
  email: 'jimmylee0719@gmail.com',
  avatar: '/profile.jpg', // 請將大頭照放在 public 資料夾
};

// 證照
export const certificates = [
  { icon: '📋', zh: 'HACCP-Basic', en: '' },
  { icon: '📋', zh: 'HACCP-Advanced', en: '' },
];

// 學經歷
export const experiences = [
  { icon: '💼', zh: '匯德生物科技 業務經理', en: 'Sales Manager, WELLHEAD BIOLOGICAL TECHNOLOGY CORP.' },
  { icon: '💼', zh: '參寶寧生物科技 業務經理', en: 'Sales Manager, SAPONIN BIOLOGICAL TECHNOLOGY CORP.' },
  { icon: '🎓', zh: '長庚大學 生物科技產業博士', en: 'PhD, CHANG GUNG University, Phd Program in Biotechnology Industrial' },
  { icon: '🎓', zh: '弘光科技大學 食品科技碩士', en: 'Master, HUNGKUANG University, Department of Food Science and Technology' },
  { icon: '🎓', zh: '開南大學 觀光與餐飲旅館學士', en: 'Bachelor, KAINAN University, Department of Tourism & Hospitality Management' },
];

// 作品集
export const portfolio = [
  {
    icon: '🧬',
    title_zh: '基因檢測平台',
    title_en: 'Genetic Testing Platform',
    image: '/portfolio1.jpg',
    link: '#',
  },
  {
    icon: '💡',
    title_zh: '智慧農業系統',
    title_en: 'Smart Agriculture System',
    image: '/portfolio2.jpg',
    link: '#',
  },
];

// 產品與服務
export const services = [
  { icon: '📊', zh: '#碳盤查報告', en: '#Carbon Inventory Report' },
  { icon: '📈', zh: '#TCFD/CDP 報告撰寫輔導', en: '#TCFD/CDP Report Writing Guidance' },
  { icon: '🎯', zh: '#SBTi 目標設定', en: '#SBTi Target Setting' },
  { icon: '👣', zh: '#產品碳足跡', en: '#Product Carbon Footprint' },
  { icon: '🧬', zh: '#生物科技產品代工', en: '#Biotech Product Manufacturing' },
];

// 社群連結
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/jimmylee719', icon: '💻' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jimmy-lee-a5b5a0315', icon: '👤' },
  // 可自行增加
]; 