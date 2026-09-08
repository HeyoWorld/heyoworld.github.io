export type Language = "zh" | "en";
export interface ContentData {
  nav: {
    services: string;
    approach: string;
    contact: string;
    skip: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    title: string[];
    subtitle: string;
    cta: string;
    caption: string;
    footnote: string;
  };
  services: {
    label: string;
    title: string;
    intro: string;
    items: { title: string; en: string; description: string; list: string[] }[];
  };
  approach: {
    label: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    service: string;
    choose: string;
    message: string;
    placeholder: string;
    submit: string;
    submitting: string;
    note: string;
    privacy: string;
    success: string;
    successNote: string;
    error: string;
    again: string;
    direct: string;
    required: string;
  };
  footer: { description: string; rights: string; top: string };
}
