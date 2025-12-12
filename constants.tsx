import { ContentData } from './types';
import { Plane, GraduationCap, Building2, Globe2, BookOpen, Stamp } from 'lucide-react';
import React from 'react';

export const CONTENT: Record<string, ContentData> = {
  en: {
    nav: {
      services: "Services",
      exclusive: "Exclusive",
      contact: "Contact",
    },
    hero: {
      title: "Unlock Your Global Potential",
      subtitle: "Your trusted partner for UK Student Visas, International Education, and Premier Overseas Investments.",
      cta: "Start Your Journey",
    },
    services: {
      title: "Our Core Services",
      subtitle: "Professional guidance for your international ambitions.",
      visaTitle: "Visa Services",
      visaDesc: "Specialized visa solutions primarily for international students in the UK.",
      visaList: ["UK Student & Graduate Visas", "USA & Canada Tourist/Study", "Australia & Japan Visas", "Schengen Visas"],
      studyTitle: "Study Abroad",
      studyDesc: "Comprehensive education consulting for global top-tier institutions.",
      studyList: ["University Application", "Personal Statement Guidance", "Course Selection Strategy", "Academic Tutoring (UK/US/Aus/ME)"],
    },
    exclusive: {
      tag: "Limited Opportunity",
      title: "Saudi Arabia Real Estate",
      description: "Discover high-yield investment opportunities in the rapidly growing Saudi market. An exclusive offering for forward-thinking investors.",
      features: ["High Return on Investment", "Emerging Market Growth", "Exclusive Portfolio Access"],
      cta: "Inquire About Investment",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to take the next step? Send us a message and we'll get back to you immediately.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "How can we help you?",
      sendButton: "Send Message",
      note: "This will open your default email client to send the message directly to us.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  zh: {
    nav: {
      services: "主营业务",
      exclusive: "独家项目",
      contact: "联系我们",
    },
    hero: {
      title: "开启您的全球机遇",
      subtitle: "您的留英签证专家，全球留学申请导师，以及海外资产配置顾问。",
      cta: "开启旅程",
    },
    services: {
      title: "核心服务",
      subtitle: "为您的国际化梦想提供专业护航",
      visaTitle: "全球签证服务",
      visaDesc: "专为在英留学生打造的一站式签证解决方案，高效、专业、省心。",
      visaList: ["英国学生/毕业生签证", "美加旅游及学习签证", "澳洲及日本签证", "欧洲申根签证"],
      studyTitle: "留学全案服务",
      studyDesc: "涵盖英美澳加及中东地区的顶尖院校申请与辅导。",
      studyList: ["名校留学申请", "文书润色与辅导", "择校与专业规划", "全科课程辅导"],
    },
    exclusive: {
      tag: "独家精选",
      title: "沙特阿拉伯置业投资",
      description: "抢占中东新兴市场红利，为您甄选高回报率的沙特房地产投资项目。",
      features: ["极具吸引力的投资回报", "国家级愿景红利", "独家稀缺房源"],
      cta: "咨询投资详情",
    },
    contact: {
      title: "联系我们",
      subtitle: "有任何疑问或需求？请给我们留言，我们将第一时间与您取得联系。",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的邮箱",
      messagePlaceholder: "请简述您的需求...",
      sendButton: "发送邮件",
      note: "点击发送将唤起您的邮件客户端直接投递邮件至我们的官方邮箱。",
    },
    footer: {
      rights: "版权所有",
    },
  },
};

export const ICONS = {
    visa: <Stamp className="w-6 h-6 text-brand-orange" />,
    study: <GraduationCap className="w-6 h-6 text-brand-blue" />,
    invest: <Building2 className="w-6 h-6 text-yellow-500" />,
    global: <Globe2 className="w-6 h-6" />,
    book: <BookOpen className="w-6 h-6" />,
    plane: <Plane className="w-6 h-6" />
}