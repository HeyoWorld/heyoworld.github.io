import { ContentData, Language } from "./types";
export const CONTENT: Record<Language, ContentData> = {
  zh: {
    nav: {
      services: "我们能做什么",
      approach: "如何合作",
      contact: "开启咨询",
      skip: "跳转到主要内容",
      language: "Switch to English",
    },
    hero: {
      eyebrow: "HEYO WORLD · 和曜",
      title: ["走向世界，", "从适合你的", "下一步开始。"],
      subtitle:
        "英国升学、学科辅导与留学准备。和曜与你一起梳理选择，把想法变成具体、可执行的计划。",
      cta: "开启咨询",
      caption: "保持好奇，也走得踏实。",
      footnote: "以你的目标与当前阶段为起点",
    },
    services: {
      label: "01 / 我们能做什么",
      title: "把复杂的选择，\n一件件理清楚。",
      intro: "从申请前的准备，到学习中的具体问题，找到你现在需要的支持。",
      items: [
        {
          title: "英国升学规划",
          en: "UNIVERSITY APPLICATIONS",
          description:
            "结合兴趣、成绩和时间安排，讨论适合的院校与专业，逐步推进申请准备。",
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
            "围绕正在学习的课程和遇到的难点，安排有针对性的辅导与练习。",
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
            "整理留学所需的信息、材料和待办事项，让行前准备更有条理。",
          list: [
            "签证申请流程与材料信息整理",
            "行前事项与到校准备",
            "需要时协助寻找合适的专业支持",
          ],
        },
      ],
    },
    approach: {
      label: "02 / 如何合作",
      title: "先听你的想法，\n再讨论怎么走。",
      description:
        "我们重视清楚的沟通、实际的安排，以及每个阶段你真正需要的帮助。",
      steps: [
        {
          title: "聊聊当前情况",
          description:
            "告诉我们你的学习阶段、目标和正在纠结的问题。暂时没有完整计划也没关系。",
        },
        {
          title: "明确支持范围",
          description:
            "一起讨论可以提供的帮助、时间安排和费用，再决定是否开始。",
        },
        {
          title: "按计划往前走",
          description: "把准备工作拆成具体步骤，结合进展和反馈及时调整。",
        },
      ],
    },
    contact: {
      label: "03 / LET’S TALK",
      title: "开启咨询",
      subtitle:
        "从一个问题开始就好。留下你的情况与联系方式，我们会通过邮件与你联系。",
      name: "怎么称呼你",
      email: "电子邮箱",
      service: "想了解的方向",
      choose: "请选择（可选）",
      message: "你想聊些什么",
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
      eyebrow: "HEYO WORLD · 和曜",
      title: ["A wider world.", "A next step", "that fits you."],
      subtitle:
        "UK university applications, academic support and study abroad preparation. We help you make sense of your options and build a practical plan.",
      cta: "Start a conversation",
      caption: "Stay curious. Move thoughtfully.",
      footnote: "Starting with your goals and where you are now",
    },
    services: {
      label: "01 / WHAT WE DO",
      title: "Make room\nfor a clearer plan.",
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
      title: "Your story first.\nThe next steps, together.",
      description:
        "Clear conversations, practical arrangements and support that reflects what you need at each stage.",
      steps: [
        {
          title: "Tell us where you are",
          description:
            "Share your current studies, goals and questions. You do not need to have everything figured out.",
        },
        {
          title: "Agree on the support",
          description:
            "We discuss the scope, timing and fees together before you decide whether to begin.",
        },
        {
          title: "Take it step by step",
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
