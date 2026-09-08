import { ContentData, Language } from "./types";
export const CONTENT: Record<Language, ContentData> = {
  zh: {
    nav: {
      services: "服务领域",
      approach: "合作方式",
      contact: "开启咨询",
      skip: "跳转到主要内容",
      language: "Switch to English",
    },
    hero: {
      eyebrow: "HEYO WORLD · 海柚",
      title: ["走向世界，", "从适合你的", "下一步开始。"],
      subtitle:
        "专注英国升学、学术辅导与留学准备。海柚以你的兴趣与目标为起点，让每一步选择更有方向。",
      cta: "开启咨询",
      caption: "以求知之心，探索更广阔的世界。",
      footnote: "以你的目标与当前阶段为起点",
    },
    services: {
      label: "01 / 服务领域",
      title: "让每一份潜力，\n有清晰的发展方向。",
      intro: "围绕升学目标、学术成长与海外学习准备，提供契合不同阶段的规划与支持。",
      items: [
        {
          title: "英国升学规划",
          en: "UNIVERSITY APPLICATIONS",
          description:
            "综合学术背景、个人兴趣与发展目标，明确院校及专业选择，有序推进申请准备。",
          list: [
            "院校与专业选择",
            "申请时间线与材料梳理",
            "个人陈述反馈与面试练习",
          ],
        },
        {
          title: "学科与学术辅导",
          en: "ACADEMIC SUPPORT",
          description:
            "立足课程要求与个人学习特点，通过针对性的辅导与练习，深化理解，完善学习方法。",
          list: [
            "GCSE / A-Level / IB 课程辅导",
            "学术英语与写作练习",
            "复习计划与入学考试准备",
          ],
        },
        {
          title: "留学与行前准备",
          en: "STUDY ABROAD PREPARATION",
          description:
            "衔接申请与入学，梳理行前材料与关键事项，为适应海外学习与生活做好准备。",
          list: [
            "签证申请流程与材料信息整理",
            "行前事项与到校准备",
            "按需协助对接相关专业支持",
          ],
        },
      ],
    },
    approach: {
      label: "02 / 合作方式",
      title: "理解你的起点，\n规划适合的路径。",
      description:
        "以充分沟通建立理解，以明确计划推进合作。让每一阶段的支持，都回应你的实际需求。",
      steps: [
        {
          title: "了解背景与目标",
          description:
            "从学习经历、个人兴趣与未来期待出发，识别当前需求，明确值得深入探索的方向。",
        },
        {
          title: "明确方案与安排",
          description:
            "围绕目标商定服务范围、时间节点与费用安排，在充分了解后作出合作决定。",
        },
        {
          title: "持续跟进与调整",
          description: "将规划落实为阶段任务，结合学习进展与沟通反馈，适时调整后续安排。",
        },
      ],
    },
    contact: {
      label: "03 / LET’S TALK",
      title: "开启咨询",
      subtitle:
        "欢迎分享你的学习背景与咨询需求。留下联系方式，我们将通过邮件与你进一步沟通。",
      name: "你的姓名",
      email: "电子邮箱",
      service: "想了解的方向",
      choose: "请选择（可选）",
      message: "咨询内容",
      placeholder:
        "例如：目前的学习阶段、感兴趣的专业、计划入学时间，或正在遇到的问题。",
      submit: "提交咨询",
      submitting: "正在提交…",
      note: "请勿提交护照、证件号码或其他敏感材料。",
      privacy:
        "提交即表示你同意我们通过邮件回复本次咨询。表单由 FormSubmit 转发至 hello@heyoworld.com。",
      success: "咨询已提交",
      successNote: "转发服务已接受你的咨询。后续回复将发送至你填写的邮箱。",
      error:
        "暂时无法确认提交，请稍后重试，或直接发邮件给我们。你填写的内容已保留。",
      again: "再写一条",
      direct: "也可以直接发邮件",
      required: "必填",
    },
    footer: {
      description: "英国升学 · 学术辅导 · 留学准备",
      rights: "保留所有权利",
      top: "回到顶部",
    },
  },
  en: {
    nav: {
      services: "What we do",
      approach: "Our approach",
      contact: "Start a conversation",
      skip: "Skip to main content",
      language: "切换到中文",
    },
    hero: {
      eyebrow: "HEYO WORLD · 海柚",
      title: ["A wider world.", "A next step", "that fits you."],
      subtitle:
        "UK university applications, academic support and study abroad preparation. We help you make sense of your options and build a practical plan.",
      cta: "Start a conversation",
      caption: "Stay curious. Move thoughtfully.",
      footnote: "Starting with your goals and where you are now",
    },
    services: {
      label: "01 / WHAT WE DO",
      title: "Individual potential.\nA considered direction.",
      intro:
        "From preparing an application to working through a difficult subject, find support for the stage you are at.",
      items: [
        {
          title: "University applications",
          en: "FIND YOUR DIRECTION",
          description:
            "Explore UK courses and universities with your interests, grades and timeline in mind.",
          list: [
            "University and course selection",
            "Application timelines and materials",
            "Personal statement feedback and interview practice",
          ],
        },
        {
          title: "Academic support",
          en: "BUILD YOUR UNDERSTANDING",
          description:
            "Focused tuition and practice shaped around your current curriculum and the topics you find challenging.",
          list: [
            "GCSE, A-Level and IB tuition",
            "Academic English and writing practice",
            "Revision plans and admissions test preparation",
          ],
        },
        {
          title: "Study abroad preparation",
          en: "GET READY FOR WHAT’S NEXT",
          description:
            "Bring the information, documents and practical tasks for studying abroad into a manageable plan.",
          list: [
            "Visa process and document information",
            "Pre-departure and arrival preparation",
            "Help finding relevant professional support when needed",
          ],
        },
      ],
    },
    approach: {
      label: "02 / OUR APPROACH",
      title: "Understand the individual.\nShape the path ahead.",
      description:
        "A thoughtful approach begins with understanding. Clear plans and ongoing dialogue keep our support aligned with your needs.",
      steps: [
        {
          title: "Understand your background",
          description:
            "Share your current studies, goals and questions. You do not need to have everything figured out.",
        },
        {
          title: "Define the plan together",
          description:
            "We discuss the scope, timing and fees together before you decide whether to begin.",
        },
        {
          title: "Review and refine",
          description:
            "Break the work into clear tasks and adjust the plan as you progress and give feedback.",
        },
      ],
    },
    contact: {
      label: "03 / LET’S TALK",
      title: "Start a conversation",
      subtitle:
        "One question is enough to begin. Share a little about your situation and we will get in touch by email.",
      name: "Your name",
      email: "Email address",
      service: "Area of interest",
      choose: "Select an area (optional)",
      message: "What would you like to discuss?",
      placeholder:
        "Your current studies, a course you are considering, your intended start date, or a question on your mind.",
      submit: "Send inquiry",
      submitting: "Sending…",
      note: "Please do not include passports, ID numbers or other sensitive documents.",
      privacy:
        "By submitting, you agree that we may email you about this inquiry. FormSubmit forwards this form to hello@heyoworld.com.",
      success: "Inquiry submitted",
      successNote:
        "The forwarding service has accepted your inquiry. We will reply to the email address you provided.",
      error:
        "We could not confirm submission. Please try again later or email us directly. Your entries have been kept.",
      again: "Write another inquiry",
      direct: "Prefer email?",
      required: "Required",
    },
    footer: {
      description: "UK applications · Academic support · Study abroad",
      rights: "All rights reserved",
      top: "Back to top",
    },
  },
};
