import { Sliders, Headphones, Grid3x3, ShoppingCart, Monitor, Zap, PenTool, Camera, BarChart2, Users, Globe2 } from "lucide-react";
import { ServiceCard } from "@/components/services-innerpages/ServiceDetailMain";

export interface ServiceDetailContent {
  banner: {
    title: string;
    description: string;
    buttonText: string;
  };
  main: {
    header?: string;
    subheader?: string;
    services: ServiceCard[];
  };
  accordion: {
    title: string;
    verticals: { title: string; description: string }[];
  };
}

export const serviceDetails = {
  en: {
    web: {
      banner: {
        title: "Autonomous Web Systems & Agentic Architectures",
        description: "Deploy self-optimizing web ecosystems powered by real-time RAG integration, cognitive UI, and autonomous decision-making loops.",
        buttonText: "Launch AI Strategy",
      },
      main: {
        header: "Intelligent Web Engineering",
        subheader: "Autonomous solutions we deliver:",
        services: [
          { id: 1, icon: Sliders, title: "Cognitive Web Applications", description: "Deploying web apps that reason and learn from user behavior to automate complex business logic.", color: "from-violet-500 to-fuchsia-600" },
          { id: 2, icon: Headphones, title: "Hyper-Personalized Portals", description: "Dynamic interfaces that restructure in real-time based on predictive intent and behavioral modeling.", color: "from-violet-500 to-fuchsia-600" },
          { id: 3, icon: Grid3x3, title: "Enterprise AI Orchestration", description: "Scaling business operations through intelligent middleware and automated data-to-insight pipelines.", color: "from-violet-500 to-fuchsia-600" },
          { id: 4, icon: ShoppingCart, title: "Agentic SaaS Architectures", description: "Cloud platforms featuring built-in AI agents that execute end-to-end tasks rather than just providing tools.", color: "from-violet-500 to-fuchsia-600" },
          { id: 5, icon: ShoppingCart, title: "Predictive Commerce Engines", description: "E-commerce that anticipates demand and automates supply chain responses with generative assistants.", color: "from-violet-500 to-fuchsia-600" },
          { id: 6, icon: Monitor, title: "Strategic AI Transformation", description: "Modernizing legacy stacks with LLM-native architectures and automated performance-tuning loops.", color: "from-violet-500 to-fuchsia-600" },
        ],
      },
      accordion: {
        title: "Industry-Specific AI\nfor Diverse Verticals",
        verticals: [
          { title: "Precision Healthcare", description: "HIPAA-compliant AI interfaces for clinical decision support and autonomous patient triage." },
          { title: "Algorithmic Finance", description: "Real-time fraud orchestration and AI-managed compliance frameworks for global markets." },
          { title: "Generative Retail", description: "Virtual try-ons and generative product descriptions powered by real-time inventory data." },
          { title: "Adaptive Education", description: "LMM-powered learning environments that evolve based on student cognitive load and progress." },
          { title: "Smart Manufacturing", description: "AI-enhanced manufacturing web solutions with predictive maintenance and automated quality control." },
          { title: "Real Estate Tech", description: "Intelligent real estate web platforms with AI-powered property matching and automated valuation." },
        ],
      },
    },
    ai: {
      banner: {
        title: "Agentic Process Automation",
        description: "Orchestrate multi-agent workflows that think, act, and optimize your business operations autonomously.",
        buttonText: "Request Agentic Demo",
      },
      main: {
        header: "AI & Automation Hub",
        subheader: "Advanced solutions we deliver:",
        services: [
          { id: 1, icon: Zap, title: "Multi-Agent Workflows", description: "Specialized AI agents collaborating to solve end-to-end business processes without manual intervention.", color: "from-cyan-400 to-blue-600" },
          { id: 2, icon: Users, title: "Multimodal Voice & Chat", description: "Human-grade conversational agents capable of understanding context across text, voice, and vision.", color: "from-cyan-400 to-blue-600" },
          { id: 3, icon: BarChart2, title: "Cognitive Data Analytics", description: "Transforming raw Big Data into actionable strategy through autonomous pattern recognition.", color: "from-cyan-400 to-blue-600" },
          { id: 4, icon: Globe2, title: "RAG-Powered Knowledge", description: "Connecting private data to LLMs for instant, accurate, and secure organizational intelligence.", color: "from-cyan-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "AI Automation for Industries",
        verticals: [
          { title: "Retail", description: "AI-powered inventory, customer support, and personalized shopping experiences." },
          { title: "Healthcare", description: "AI for diagnostics, patient engagement, and workflow automation." },
          { title: "Finance", description: "Fraud detection, risk analysis, and customer service automation." },
          { title: "Manufacturing", description: "Predictive maintenance and process optimization with AI." },
        ],
      },
    },
    app: {
      banner: {
        title: "Agent-Driven Mobile Engineering",
        description: "Building intelligent mobile ecosystems with on-device AI, neural processing, and autonomous user flows.",
        buttonText: "Request AI App Demo",
      },
      main: {
        header: "Next-Gen App Development",
        subheader: "Intelligent solutions we deliver:",
        services: [
          { id: 1, icon: Sliders, title: "Cognitive iOS Apps", description: "Developing intelligent Apple ecosystem apps with CoreML and agentic automation features.", color: "from-emerald-400 to-teal-600" },
          { id: 2, icon: Sliders, title: "Neural Android Apps", description: "Building high-performance Android apps with AI-driven features and smart user experiences.", color: "from-emerald-400 to-teal-600" },
          { id: 3, icon: Sliders, title: "Cross-Platform AI", description: "Creating intelligent React Native and Flutter apps with integrated LLM capabilities.", color: "from-emerald-400 to-teal-600" },
          { id: 4, icon: Sliders, title: "Generative UI/UX", description: "Designing app interfaces with AI-powered personalization and automated user interactions.", color: "from-emerald-400 to-teal-600" },
        ],
      },
      accordion: {
        title: "AI App Development for Industries",
        verticals: [
          { title: "Healthcare", description: "AI-powered health apps with intelligent diagnostics and automated patient monitoring." },
          { title: "E-commerce", description: "Smart shopping apps with AI-driven recommendations and intelligent inventory management." },
          { title: "Education", description: "Intelligent learning apps with AI-powered personalized education and smart delivery." },
          { title: "Finance", description: "AI-enhanced financial apps with intelligent risk assessment and automated fraud detection." },
        ],
      },
    },
    branding: {
      banner: {
        title: "Strategic Brand Systems",
        description: "Constructing unique brand identities through algorithmic research and cognitive design systems.",
        buttonText: "Request Consult",
      },
      main: {
        header: "Branding Services",
        subheader: "What we offer:",
        services: [
          { id: 1, icon: PenTool, title: "Dynamic Logo Design", description: "Memorable, versatile logos built for the digital-first era.", color: "from-rose-400 to-pink-600" },
          { id: 2, icon: PenTool, title: "Systemic Brand Guidelines", description: "Comprehensive digital-ready brand books and scalable style guides.", color: "from-rose-400 to-pink-600" },
          { id: 3, icon: PenTool, title: "Visual Identity Systems", description: "Data-driven color, typography, and imagery systems for modern brands.", color: "from-rose-400 to-pink-600" },
          { id: 4, icon: PenTool, title: "Strategic Voice & Story", description: "Crafting your brand’s narrative architecture and cross-platform tone.", color: "from-rose-400 to-pink-600" },
        ],
      },
      accordion: {
        title: "Branding for Industries",
        verticals: [
          { title: "Startups", description: "Brand launches and go-to-market strategy." },
          { title: "Retail", description: "Brand refresh and packaging design." },
          { title: "Corporate", description: "Rebranding and internal brand culture." },
          { title: "Nonprofits", description: "Mission-driven branding and campaigns." },
        ],
      },
    },
    digital: {
      banner: {
        title: "Algorithmic Digital Marketing",
        description: "Scale your reach with AI-driven attribution, predictive modeling, and automated growth loops.",
        buttonText: "Request Strategy",
      },
      main: {
        header: "Performance Marketing",
        subheader: "Services we deliver:",
        services: [
          { id: 1, icon: BarChart2, title: "AI-Enhanced SEO/SEM", description: "Optimizing visibility through neural search analysis and automated bidding.", color: "from-amber-400 to-orange-600" },
          { id: 2, icon: BarChart2, title: "Social Orchestration", description: "Engaging audiences through automated content distribution and community analytics.", color: "from-amber-400 to-orange-600" },
          { id: 3, icon: BarChart2, title: "Generative Content", description: "Driving leads with high-velocity, AI-assisted content marketing pipelines.", color: "from-amber-400 to-orange-600" },
          { id: 4, icon: BarChart2, title: "Automated Lifecycle", description: "Nurturing leads via predictive email flows and hyper-targeted campaigns.", color: "from-amber-400 to-orange-600" },
        ],
      },
      accordion: {
        title: "Digital Marketing for Industries",
        verticals: [
          { title: "Ecommerce", description: "Performance marketing and conversion optimization." },
          { title: "Education", description: "Student recruitment and engagement campaigns." },
          { title: "Healthcare", description: "Patient acquisition and brand awareness." },
          { title: "Real Estate", description: "Lead generation and virtual tours." },
        ],
      },
    },
    video: {
      banner: {
        title: "Generative Content Lab",
        description: "Cinematic post-production enhanced by neural rendering and AI-assisted visual storytelling.",
        buttonText: "Request Demo",
      },
      main: {
        header: "Visual Content Engineering",
        subheader: "Services we deliver:",
        services: [
          { id: 1, icon: Camera, title: "Neural Video Editing", description: "AI-assisted object removal, scene expansion, and automated cinematic color grading.", color: "from-indigo-400 to-blue-600" },
          { id: 2, icon: Camera, title: "Generative Asset Labs", description: "Professional retouching and image creation using custom-trained diffusion models.", color: "from-indigo-400 to-blue-600" },
          { id: 3, icon: Camera, title: "Dynamic Motion Systems", description: "Data-driven animation and intelligent motion graphics for high-scale engagement.", color: "from-indigo-400 to-blue-600" },
          { id: 4, icon: Camera, title: "Social First-Gen", description: "Rapid AI-assisted content production optimized for trending algorithms.", color: "from-indigo-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "Visual Services for Industries",
        verticals: [
          { title: "Advertising", description: "Commercials and promotional video editing." },
          { title: "Events", description: "Event highlight reels and photo albums." },
          { title: "Education", description: "E-learning video and image content." },
          { title: "Corporate", description: "Brand videos and internal communications." },
        ],
      },
    },
  },
  ar: {
    web: {
      banner: {
        title: "أنظمة الويب المستقلة",
        description: "نشر بنيات ويب ذاتية التطور مدعومة بالذكاء الاصطناعي الوكيل وتكامل RAG الفوري وواجهات المستخدم المعرفية.",
        buttonText: "أطلق استراتيجية الذكاء الاصطناعي",
      },
      main: {
        header: "هندسة الويب الذكية",
        subheader: "حلول رقمية مستقلة:",
        services: [
          { id: 1, icon: Sliders, title: "تطبيقات الويب المعرفية", description: "تطبيقات ويب قادرة على التفكير والتعلم وأتمتة حلقات اتخاذ القرار المعقدة.", color: "from-violet-500 to-fuchsia-600" },
          { id: 2, icon: Headphones, title: "بوابات فائقة التخصيص", description: "واجهات ديناميكية تعيد هيكلة نفسها في الوقت الفعلي بناءً على نية المستخدم.", color: "from-violet-500 to-fuchsia-600" },
          { id: 3, icon: Grid3x3, title: "تنسيق الذكاء الاصطناعي للمؤسسات", description: "ربط أقسام العمل من خلال البرمجيات الوسيطة الذكية وتدفقات البيانات المؤتمتة.", color: "from-violet-500 to-fuchsia-600" },
          { id: 4, icon: ShoppingCart, title: "بنيات SaaS الوكيلية", description: "منصات SaaS تضم وكلاء ذكاء اصطناعي مدمجين ينفذون المهام نيابة عن المستخدمين.", color: "from-violet-500 to-fuchsia-600" },
          { id: 5, icon: ShoppingCart, title: "محركات التجارة التنبؤية", description: "تجارة إلكترونية تتوقع الطلب وتؤتمت استجابات سلسلة التوريد.", color: "from-violet-500 to-fuchsia-600" },
          { id: 6, icon: Monitor, title: "التحول الاستراتيجي للذكاء الاصطناعي", description: "تحديث الأنظمة القديمة باستخدام بنيات LLM-native وحلقات ضبط الأداء.", color: "from-violet-500 to-fuchsia-600" },
        ],
      },
      accordion: {
        title: "تطوير ويب بالذكاء الاصطناعي\nلمجالات متنوعة",
        verticals: [
          { title: "الرعاية الصحية", description: "منصات ويب رعاية صحية مدعومة بالذكاء الاصطناعي مع إدارة مرضى ذكية." },
          { title: "المالية", description: "تطبيقات ويب مالية ذكية مع تقييم مخاطر مدعوم بالذكاء الاصطناعي." },
          { title: "التجارة الإلكترونية", description: "منصات تجارة إلكترونية ذكية مع توصيات مدعومة بالذكاء الاصطناعي." },
          { title: "التعليم", description: "منصات ويب تعليمية ذكية مع تعلم شخصي مدعوم بالذكاء الاصطناعي." },
          { title: "التصنيع", description: "حلول ويب تصنيع محسّنة بالذكاء الاصطناعي مع صيانة تنبؤية." },
          { title: "العقارات", description: "منصات ويب عقارية ذكية مع مطابقة عقارات مدعومة بالذكاء الاصطناعي." },
        ],
      },
    },
    ai: {
      banner: {
        title: "أتمتة العمليات الوكيلية",
        description: "تنسيق سير عمل متعدد الوكلاء يفكر ويتصرف ويحسن عمليات عملك بشكل مستقل.",
        buttonText: "اطلب عرضاً للأنظمة الوكيلية",
      },
      main: {
        header: "مركز الذكاء الاصطناعي والأتمتة",
        subheader: "الحلول المتقدمة التي نقدمها:",
        services: [
          { id: 1, icon: Zap, title: "سير عمل متعدد الوكلاء", description: "وكلاء ذكاء اصطناعي متخصصون يتعاونون لحل العمليات دون تدخل يدوي.", color: "from-blue-400 to-blue-600" },
          { id: 2, icon: Users, title: "وكلاء محادثة متعددة الوسائط", description: "روبوتات ومساعدين صوتيين قادرين على فهم السياق عبر النص والصوت والرؤية.", color: "from-blue-400 to-blue-600" },
          { id: 3, icon: BarChart2, title: "تحليلات البيانات المعرفية", description: "تحويل البيانات الضخمة إلى استراتيجيات عبر التعرف المستقل على الأنماط.", color: "from-blue-400 to-blue-600" },
          { id: 4, icon: Globe2, title: "قواعد معرفة مدعومة بتقنية RAG", description: "ربط بياناتك الخاصة بنماذج LLM للحصول على ذكاء مؤسسي آمن.", color: "from-blue-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "أتمتة الذكاء الاصطناعي للصناعات",
        verticals: [
          { title: "التجزئة", description: "إدارة المخزون وتجارب تسوق مخصصة بالذكاء الاصطناعي." },
          { title: "الرعاية الصحية", description: "الذكاء الاصطناعي للتشخيص وأتمتة سير العمل الطبي." },
          { title: "المالية", description: "كشف الاحتيال، تحليل المخاطر، وأتمتة خدمة العملاء." },
          { title: "التصنيع", description: "الصيانة التنبؤية وتحسين العمليات باستخدام الذكاء الاصطناعي." },
        ],
      },
    },
    app: {
      banner: {
        title: "تطوير التطبيقات الوكيلية",
        description: "بناء تطبيقات جوال ذكية مع معالجة عصبية وتدفقات مستخدم مستقلة.",
        buttonText: "اطلب عرض تطبيق ذكي",
      },
      main: {
        header: "تطوير تطبيقات الجيل القادم",
        subheader: "الحلول الذكية التي نقدمها:",
        services: [
          { id: 1, icon: Sliders, title: "تطبيقات iOS المعرفية", description: "تطوير تطبيقات iOS ذكية مع قدرات التعلم الآلي والأتمتة الوكيلية.", color: "from-green-400 to-green-600" },
          { id: 2, icon: Sliders, title: "تطبيقات Android العصبية", description: "بناء تطبيقات Android ذكية مع ميزات مدعومة بالذكاء الاصطناعي.", color: "from-green-400 to-green-600" },
          { id: 3, icon: Sliders, title: "تطبيقات ذكية عابرة للمنصات", description: "إنشاء تطبيقات باستخدام React Native وFlutter مع تكامل LLM.", color: "from-green-400 to-green-600" },
          { id: 4, icon: Sliders, title: "تصميم واجهة المستخدم التوليدي", description: "تصميم واجهات تطبيقات مع تخصيص مدعوم بالذكاء الاصطناعي وتفاعلات ذكية.", color: "from-green-400 to-green-600" },
        ],
      },
      accordion: {
        title: "تطوير تطبيقات بالذكاء الاصطناعي للصناعات",
        verticals: [
          { title: "الرعاية الصحية", description: "تطبيقات صحية مدعومة بالذكاء الاصطناعي مع تشخيص ذكي." },
          { title: "التجارة الإلكترونية", description: "تطبيقات تسوق ذكية مع توصيات مدعومة بالذكاء الاصطناعي." },
          { title: "التعليم", description: "تطبيقات تعليم ذكية مع تعليم شخصي وتقييم مؤتمت." },
          { title: "المالية", description: "تطبيقات مالية مع تقييم مخاطر ذكي وكشف احتيال مؤتمت." },
        ],
      },
    },
    branding: {
      banner: {
        title: "أنظمة العلامات التجارية الاستراتيجية",
        description: "بناء هويات فريدة من خلال أبحاث خوارزمية وأنظمة تصميم معرفية.",
        buttonText: "اطلب استشارة",
      },
      main: {
        header: "خدمات العلامة التجارية",
        subheader: "ما نقدمه:",
        services: [
          { id: 1, icon: PenTool, title: "تصميم شعار ديناميكي", description: "شعارات مميزة مبنية للعصر الرقمي الحديث.", color: "from-pink-400 to-pink-600" },
          { id: 2, icon: PenTool, title: "أدلة العلامة النظامية", description: "كتب ودلائل شاملة جاهزة للنشر الرقمي السحابي.", color: "from-pink-400 to-pink-600" },
          { id: 3, icon: PenTool, title: "أنظمة الهوية البصرية", description: "أنظمة ألوان وطباعة مدفوعة بالبيانات للعلامات المعاصرة.", color: "from-pink-400 to-pink-600" },
          { id: 4, icon: PenTool, title: "القصة والصوت الاستراتيجي", description: "صياغة معمارية لقصة العلامة التجارية ونبرتها عبر المنصات.", color: "from-pink-400 to-pink-600" },
        ],
      },
      accordion: {
        title: "العلامة التجارية للصناعات",
        verticals: [
          { title: "الشركات الناشئة", description: "إطلاق العلامة التجارية واستراتيجية دخول السوق." },
          { title: "التجزئة", description: "تجديد العلامة التجارية وتصميم التغليف." },
          { title: "الشركات", description: "إعادة العلامة التجارية وثقافة العلامة التجارية الداخلية." },
          { title: "المنظمات غير الربحية", description: "العلامة التجارية الموجهة للرسالة والحملات." },
        ],
      },
    },
    digital: {
      banner: {
        title: "التسويق الرقمي الخوارزمي",
        description: "توسيع نطاق وصولك من خلال النمذجة التنبؤية وحلقات النمو المؤتمتة.",
        buttonText: "اطلب استشارة التسويق",
      },
      main: {
        header: "التسويق بالأداء",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: BarChart2, title: "SEO/SEM معزز ذكياً", description: "تحسين الظهور من خلال تحليل البحث العصبي والمزايدة المؤتمتة.", color: "from-yellow-400 to-yellow-600" },
          { id: 2, icon: BarChart2, title: "تنسيق التواصل الاجتماعي", description: "تفاعل الجمهور عبر توزيع المحتوى المؤتمت وتحليلات المجتمع.", color: "from-yellow-400 to-yellow-600" },
          { id: 3, icon: BarChart2, title: "تسويق المحتوى التوليدي", description: "جذب العملاء عبر خطوط إنتاج محتوى مدعومة بالذكاء الاصطناعي.", color: "from-yellow-400 to-yellow-600" },
          { id: 4, icon: BarChart2, title: "أتمتة دورة حياة العميل", description: "رعاية العملاء عبر تدفقات بريد إلكتروني تنبؤية وحملات مستهدفة.", color: "from-yellow-400 to-yellow-600" },
        ],
      },
      accordion: {
        title: "التسويق الرقمي للصناعات",
        verticals: [
          { title: "التجارة الإلكترونية", description: "التسويق بالأداء وتحسين التحويلات." },
          { title: "التعليم", description: "حملات جذب الطلاب والمشاركة." },
          { title: "الرعاية الصحية", description: "اكتساب المرضى وزيادة الوعي بالعلامة التجارية." },
          { title: "العقارات", description: "توليد العملاء المحتملين والجولات الافتراضية." },
        ],
      },
    },
    video: {
      banner: {
        title: "مختبر المحتوى التوليدي",
        description: "تحويل سرد القصص عبر الرنين العصبي وما بعد الإنتاج السينمائي المؤتمت.",
        buttonText: "اطلب عرضاً",
      },
      main: {
        header: "هندسة المحتوى البصري",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: Camera, title: "تحرير الفيديو العصبي", description: "إزالة العناصر وتوسيع المشاهد وتعديل الألوان السينمائي مؤتمتاً.", color: "from-indigo-400 to-indigo-600" },
          { id: 2, icon: Camera, title: "مختبرات الأصول التوليدية", description: "تحسين الصور وإنشاؤها باستخدام نماذج انتشار مدربة خصيصاً.", color: "from-indigo-400 to-indigo-600" },
          { id: 3, icon: Camera, title: "أنظمة الحركة الديناميكية", description: "رسوم متحركة مدفوعة بالبيانات لتفاعل عالي النطاق.", color: "from-indigo-400 to-indigo-600" },
          { id: 4, icon: Camera, title: "إنتاج محتوى اجتماعي سريع", description: "إنتاج محتوى سريع محسّن لخوارزميات التواصل الاجتماعي.", color: "from-indigo-400 to-indigo-600" },
        ],
      },
      accordion: {
        title: "التحرير للصناعات",
        verticals: [
          { title: "الإعلانات", description: "تحرير الإعلانات التجارية والفيديوهات الترويجية." },
          { title: "الفعاليات", description: "ملخصات الفعاليات وألبومات الصور." },
          { title: "التعليم", description: "محتوى فيديو وصور للتعليم الإلكتروني." },
          { title: "الشركات", description: "فيديوهات العلامة التجارية والاتصالات الداخلية." },
        ],
      },
    },
  },
};
