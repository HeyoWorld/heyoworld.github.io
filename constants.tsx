
import { ContentData } from './types';
import { Anchor, BookOpen, Shield, Globe2, Waves, Compass } from 'lucide-react';
import React from 'react';

export const CONTENT: Record<string, ContentData> = {
  en: {
    nav: { services: "Our Practice", contact: "Connect" },
    hero: {
      title: "Deep Roots, Global Reach.",
      subtitle: "Bespoke educational stewardship for UK admissions, academic mastery, and strategic global mobility. Navigating your future with precision.",
      cta: "Schedule Consultation",
    },
    services: {
      title: "", // Removed bridge title
      subtitle: "", // Removed bridge subtitle
      studyTitle: "Elite Academic Strategy",
      studyDesc: "Guiding students through the intricate pathways of Oxbridge and G5 admissions with strategic positioning and deep intellectual enrichment.",
      studyList: ["Oxbridge Strategic Roadmaps", "Contextual Personal Branding", "Competitive Academic Audits", "Interview Reasoning Mastery"],
      
      tutoringTitle: "UK Curriculum Stewardship",
      tutoringDesc: "Tailored 1:1 mentorship for GCSE, A-Level, and IB. We bridge the gap between global ambition and British academic excellence.",
      tutoringList: ["Elite Subject Mentoring", "Oxbridge Admissions Tests (MAT/PAT)", "Critical Humanities English", "Standardized Test Performance"],
      
      visaTitle: "Mobility & Legal Strategy",
      visaDesc: "Expert navigation of UK and global immigration frameworks. Secure, efficient, and forward-looking solutions for families and talent.",
      visaList: ["Student & Graduate Routes", "Innovation & Talent Visas", "Family Settlement Support", "Post-Arrival Concierge"],
    },
    exclusive: {
      tag: "Maritime Wisdom",
      title: "The Whale's Deep Perspective",
      description: "Like the steady migration of the whale, we provide consistent, long-term support for your educational journey, ensuring stability in a changing global landscape.",
      cta: "Explore Partnership",
      features: ["Exclusive UK School Network", "Direct Mentor Access", "Lifetime Portfolio Support"],
    },
    contact: {
      title: "Connect with Our Stewards",
      subtitle: "Let us help you navigate the complex waters of global education and relocation.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Email Address",
      messagePlaceholder: "How can we assist your journey?",
      sendButton: "Begin Conversation",
      socialTitle: "Social Community",
      note: "Your inquiry is handled with the utmost confidentiality.",
    },
    footer: { rights: "All rights reserved.", chineseName: "海优国际 HeyoWorld" },
  },
  zh: {
    nav: { services: "专业领域", contact: "建立联系" },
    hero: {
      title: "深耕学术，通达全球",
      subtitle: "海优国际：为高净值家庭提供牛剑升学策略、英系精英辅导及一站式全球签证解决方案。如海之深，助您行稳致远。",
      cta: "预约顾问咨询",
    },
    services: {
      title: "",
      subtitle: "",
      studyTitle: "菁英升学战略规划",
      studyDesc: "深挖学生潜能，制定长达3-5年的牛剑及G5升学路径。我们不仅关注录取结果，更关注学术人格的深度构建。",
      studyList: ["牛剑/G5 长期战略规划", "核心竞争力背景深度打磨", "学术潜力评估与科研引导", "名校面试思维逻辑重塑"],
      
      tutoringTitle: "英国本土学制深耕",
      tutoringDesc: "汇聚英伦顶级导师资源，针对GCSE及A-Level核心学科进行启发式授课，确保学生在英国本土评价体系中脱颖而出。",
      tutoringList: ["GCSE / A-Level 考纲同步", "牛剑入学考试专项突破", "学术英语与人文素养提升", "全科目考前压力管理"],
      
      visaTitle: "全球身份与法律咨询",
      visaDesc: "由资深法律背景团队主理，专注解决赴英及全球范围内的签证难点与身份规划，为您的海外资产与定居保驾护航。",
      visaList: ["学生及HPI人才签证全案", "创新/技术移民深度规划", "家属陪读与长期居留支持", "海外安家与后续法律合规"],
    },
    exclusive: {
      tag: "深海智慧",
      title: "稳如鲸跃，睿见未来",
      description: "海优国际如深海巨鲸，拥有广阔的全球视野与深厚的行业积淀。我们拒绝浮躁，致力于为您提供最稳健、最长效的升学与发展建议。",
      cta: "了解专属计划",
      features: ["顶级私校招生官内部测评", "学术能力终身成长档案", "英美顶尖资源独家对接"],
    },
    contact: {
      title: "开启咨询",
      subtitle: "欢迎填写表单，海优资深专家将在12小时内为您提供针对性建议。",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的电子邮箱",
      messagePlaceholder: "请简述您的学术背景及核心咨询诉求...",
      sendButton: "提交咨询申请",
      socialTitle: "关注动态",
      note: "您的所有信息将受到严格的法律保护。",
    },
    footer: { rights: "版权所有", chineseName: "海优国际 HeyoWorld" },
  },
};

export const ICONS = {
    study: <Anchor className="w-6 h-6" />,
    tutoring: <Compass className="w-6 h-6" />,
    visa: <Shield className="w-6 h-6" />,
    global: <Globe2 className="w-6 h-6" />,
    waves: <Waves className="w-6 h-6" />,
}