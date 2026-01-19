
export type Language = 'en' | 'zh';

export interface ContentData {
  nav: {
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    
    studyTitle: string;
    studyDesc: string;
    studyList: string[];
    
    tutoringTitle: string;
    tutoringDesc: string;
    tutoringList: string[];
    
    visaTitle: string;
    visaDesc: string;
    visaList: string[];
  };
  // Add exclusive section to match component requirements
  exclusive: {
    tag: string;
    title: string;
    description: string;
    cta: string;
    features: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    socialTitle: string;
    note: string;
  };
  footer: {
    rights: string;
    chineseName: string;
  };
}