// 個人資料
export const profile = {
  name: 'Jimmy Lee',
  company: '參寶寧生物科技股份有限公司',
  email: 'jimmylee0719@gmail.com',
  avatar: '/profile.jpg', // 請將大頭照放在 public 資料夾
};

// 證照
export const certificates = [
  { icon: '🎓', zh: '生物技術師證照', en: 'Biotech License' },
  { icon: '🧪', zh: '化學分析師證照', en: 'Chemical Analyst License' },
];

// 學經歷
export const experiences = [
  { icon: '🏫', zh: '國立台灣大學生物產業機電工程學系', en: 'NTU, Bio-Industrial Mechatronics Engineering' },
  { icon: '💼', zh: '參寶寧生物科技股份有限公司 研發工程師', en: 'R&D Engineer, Championing Biotech Co., Ltd.' },
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

// 社群連結
export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/jimmylee719', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jimmy-lee-a5b5a0315', icon: '🔗' },
  // 可自行增加
]; 