export type Language = 'en' | 'zh';

export interface ContentData {
  nav: {
    services: string;
    exclusive: string;
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
    visaTitle: string;
    visaDesc: string;
    visaList: string[];
    studyTitle: string;
    studyDesc: string;
    studyList: string[];
  };
  exclusive: {
    tag: string;
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    note: string;
  };
  footer: {
    rights: string;
  };
}