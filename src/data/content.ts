export type Locale = "en" | "ar";

export const content = {
  en: {
    nav: ["Home", "About", "Work", "Contact"],
    hero: {
      eyebrow: "HR STRATEGIST · DATA ANALYST · BUILDER", name: ["Mohamed", "Fadel"], mantra: "Discipline. Growth. Impact.",
      ghost: "MEANING", building: "BUILDING", systems: "SYSTEMS OF IMPACT", established: "EST. 2021",
      disciplines: "STRATEGY × PEOPLE × DATA", summary: "Digital products, people systems, and executive-ready intelligence built for clarity, scale, and trust.",
      promptA: "HOLD THE LINE", promptB: "MAKE WORK MEASURABLE", location: "TRIPOLI, LIBYA", scroll: "SCROLL TO EXPLORE",
    },
    about: {
      label: "ABOUT / POINT OF VIEW", lead: "I build systems where people, data, and ambition move as one.",
      body: "A Libyan strategist working across HR transformation, workforce intelligence, AI recruitment, and project delivery. I turn complexity into structures that people can trust—and results leaders can measure.",
      resolve: "Resilience is not holding on forever. Sometimes, it is having the courage to start over—properly.",
      principles: [
        ["01", "Clarity before scale", "Turn messy operations into legible systems people can actually use."],
        ["02", "Data with a pulse", "Make dashboards feel like decision instruments, not storage rooms."],
        ["03", "Adoption is design", "Build the workflow, the story, and the behavior change together."],
      ],
      signal: "MF SIGNAL", signalText: "People × Systems × Intelligence", live: "LIVE",
      capabilities: ["HR TRANSFORMATION", "WORKFORCE INTELLIGENCE", "AI RECRUITMENT", "PROJECT DELIVERY"],
      manifesto: ["RELENTLESS", "BY DESIGN"],
    },
    photo: ["THE HUMAN BEHIND THE SYSTEMS", "DISCIPLINE IS A DAILY DECISION."],
    work: {
      label: "SELECTED WORK / 2021—NOW", title: "Selected systems of impact",
      intro: "Selected initiatives translated into sharper workflows, clearer decision-making, and systems people can trust under pressure.", caseLabel: "CASE",
    },
    contact: {
      label: "CONTACT / BEGIN", ghost: "BEGIN", title: "Let’s build something disciplined, useful, and impossible to ignore.",
      body: "For collaborations, systems work, dashboards, HR transformation, or intelligent product ideas that need a sharper operating shape.",
      action: "START A CONVERSATION", openTo: "OPEN TO", availability: "Selective collaborations", location: "Tripoli · Remote · Global",
      copyright: "© 2026 MOHAMED FADEL", socials: ["LINKEDIN", "INSTAGRAM", "X / TWITTER"], top: "BACK TO TOP",
    },
  },
  ar: {
    nav: ["الرئيسية", "نبذة عني", "الأعمال", "تواصل"],
    hero: {
      eyebrow: "استراتيجي موارد بشرية · محلل بيانات · صانع", name: ["محمد", "فضل"], mantra: "انضباط. نمو. أثر.",
      ghost: "المعنى", building: "أبني", systems: "أنظمة تصنع الأثر", established: "منذ 2021",
      disciplines: "الاستراتيجية × الإنسان × البيانات", summary: "منتجات رقمية، وأنظمة بشرية، وذكاء تنفيذي صُممت للوضوح والتوسع والثقة.",
      promptA: "تمسّك بالهدف", promptB: "اجعل العمل قابلاً للقياس", location: "طرابلس، ليبيا", scroll: "مرّر للاستكشاف",
    },
    about: {
      label: "نبذة / وجهة نظر", lead: "أبني أنظمة يتحرك فيها الإنسان والبيانات والطموح كقوة واحدة.",
      body: "استراتيجي ليبي أعمل في تحول الموارد البشرية، وذكاء القوى العاملة، والتوظيف بالذكاء الاصطناعي، وإدارة المشاريع. أحوّل التعقيد إلى هياكل يثق بها الناس ونتائج يستطيع القادة قياسها.",
      resolve: "المرونة ليست التمسك إلى الأبد. أحياناً تكون شجاعة البدء من جديد—بالطريقة الصحيحة.",
      principles: [
        ["01", "الوضوح قبل التوسع", "تحويل العمليات المعقدة إلى أنظمة واضحة يستطيع الناس استخدامها فعلاً."],
        ["02", "بيانات تنبض بالحياة", "تحويل لوحات المعلومات إلى أدوات قرار، لا إلى مخازن للبيانات."],
        ["03", "التبنّي جزء من التصميم", "بناء سير العمل، والقصة، وتغيير السلوك معاً."],
      ],
      signal: "إشارة MF", signalText: "الإنسان × الأنظمة × الذكاء", live: "مباشر",
      capabilities: ["تحول الموارد البشرية", "ذكاء القوى العاملة", "التوظيف بالذكاء الاصطناعي", "إدارة المشاريع"],
      manifesto: ["لا أتوقف", "عن التطور"],
    },
    photo: ["الإنسان خلف الأنظمة", "الانضباط قرار يومي."],
    work: {
      label: "أعمال مختارة / 2021—الآن", title: "أنظمة مختارة لصناعة الأثر",
      intro: "مبادرات مختارة تحولت إلى مسارات عمل أوضح، وقرارات أذكى، وأنظمة يمكن الوثوق بها تحت الضغط.", caseLabel: "مشروع",
    },
    contact: {
      label: "تواصل / لنبدأ", ghost: "لنبدأ", title: "لنبنِ شيئاً منضبطاً، مفيداً، ويستحيل تجاهله.",
      body: "للتعاون في بناء الأنظمة، ولوحات المعلومات، وتحول الموارد البشرية، أو المنتجات الذكية التي تحتاج إلى شكل تشغيلي أكثر وضوحاً.",
      action: "ابدأ محادثة", openTo: "متاح لـ", availability: "تعاونات مختارة", location: "طرابلس · عن بُعد · عالمياً",
      copyright: "© 2026 محمد فضل", socials: ["لينكدإن", "إنستغرام", "إكس / تويتر"], top: "العودة إلى الأعلى",
    },
  },
} as const;
