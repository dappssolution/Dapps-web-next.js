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
        title: "Custom Web Development Company in Dubai, UAE",
        description: "We design and develop scalable, AI-powered web applications that combine performance, automation, and modern user experience. From corporate websites to enterprise portals and SaaS platforms, our solutions are built for speed, security, and growth.",
        buttonText: "Talk to Us",
      },
      main: {
        header: "Custom Web Development in Dubai",
        subheader: "Smart, Scalable & Conversion-Driven Web Solutions",
        services: [
          { id: 1, icon: Sliders, title: "Custom Web Applications", description: "We design and develop secure, scalable web applications tailored to your business needs. From internal management systems to customer-facing platforms, our solutions are built for performance, usability, and long-term growth.", color: "from-violet-500 to-fuchsia-600" },
          { id: 2, icon: Headphones, title: "Dynamic & Personalized Web Portals", description: "Build interactive web portals for customers, employees, vendors, or partners. We create user-friendly dashboards with role-based access, real-time data visibility, and personalized user experiences.", color: "from-violet-500 to-fuchsia-600" },
          { id: 3, icon: Grid3x3, title: "Enterprise Web Solutions", description: "Develop enterprise-grade web systems integrated with CRM, ERP, payment gateways, and third-party APIs. Our solutions help businesses streamline operations and improve efficiency.", color: "from-violet-500 to-fuchsia-600" },
          { id: 4, icon: ShoppingCart, title: "SaaS Web Platform Development", description: "Launch cloud-based SaaS platforms with subscription models, admin dashboards, secure user authentication, and scalable infrastructure designed for high performance.", color: "from-violet-500 to-fuchsia-600" },
          { id: 5, icon: ShoppingCart, title: "E-Commerce Website Development", description: "Create high-converting e-commerce platforms with product management, secure payment integration, inventory tracking, and optimized checkout experiences.", color: "from-violet-500 to-fuchsia-600" },
          { id: 6, icon: Monitor, title: "Website Modernization & Performance Optimization", description: "Upgrade outdated websites with modern UI/UX, faster loading speeds, improved security, mobile responsiveness, and SEO-friendly architecture to meet current digital standards.", color: "from-violet-500 to-fuchsia-600" },
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
        title: "Enterprise AI Agents & Workflow Automation Solutions in UAE",
        description: "We design and deploy intelligent AI agents that think, act, and optimize business processes autonomously, helping companies in Dubai reduce costs, improve accuracy, and accelerate digital transformation.",
        buttonText: "Talk to Us",
      },
      main: {
        header: "AI & Business Automation Solutions We Deliver in Dubai & UAE",
        subheader: "",
        services: [
          { id: 1, icon: Zap, title: "Custom AI Software Development", description: "Build AI-powered custom software solutions tailored to your business needs, ensuring scalability, security, and seamless system integration.", color: "from-cyan-400 to-blue-600" },
          { id: 2, icon: Users, title: "Robotic Process Automation (RPA)", description: "Automate repetitive and rule-based tasks using intelligent bots that increase speed, reduce operational costs, and improve accuracy.", color: "from-cyan-400 to-blue-600" },
          { id: 3, icon: BarChart2, title: "Cloud-Based Automation Systems", description: "Deploy cloud-integrated automation platforms that enable real-time collaboration, data access, and business scalability.", color: "from-cyan-400 to-blue-600" },
          { id: 4, icon: Globe2, title: "AI-Powered CRM & Sales Automation", description: "Streamline lead management, customer tracking, and sales processes with smart CRM systems enhanced by AI-driven insights.", color: "from-cyan-400 to-blue-600" },
          { id: 5, icon: Zap, title: "Intelligent Document Processing", description: "Automate document handling, data extraction, invoice processing, and workflow approvals using AI-enabled automation tools.", color: "from-cyan-400 to-blue-600" },
          { id: 6, icon: Users, title: "Enterprise Workflow Optimization", description: "Design and implement automated workflows that connect departments, reduce delays, and enhance operational transparency.", color: "from-cyan-400 to-blue-600" },
          { id: 7, icon: BarChart2, title: "Predictive Analytics & Reporting", description: "Leverage AI-driven analytics dashboards to forecast trends, monitor KPIs, and support data-driven business decisions.", color: "from-cyan-400 to-blue-600" },
          { id: 8, icon: Globe2, title: "API Integration & System Automation", description: "Integrate third-party platforms, ERP systems, payment gateways, and internal tools for seamless automated operations.", color: "from-cyan-400 to-blue-600" },
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
        title: "AI-Powered Mobile App Development in Dubai",
        description: "Build advanced Apple ecosystem applications using Swift, CoreML, and on-device AI capabilities. We create high-performance iOS apps with intelligent automation, real-time processing, and seamless user experiences tailored for the UAE market.",
        buttonText: "Request AI App Demo",
      },
      main: {
        header: "App Development Solutions We Deliver in Dubai & UAE",
        subheader: "",
        services: [
          { id: 1, icon: Sliders, title: "AI-Powered iOS App Development in Dubai", description: "Build advanced Apple ecosystem applications using Swift, CoreML, and on-device AI capabilities. We create high-performance iOS apps with intelligent automation, real-time processing, and seamless user experiences tailored for the UAE market.", color: "from-emerald-400 to-teal-600" },
          { id: 2, icon: Sliders, title: "Advanced Android App Engineering", description: "Develop scalable Android applications powered by AI-driven features, neural processing, and optimized performance architecture. Our Android solutions focus on speed, security, and enterprise-grade reliability.", color: "from-emerald-400 to-teal-600" },
          { id: 3, icon: Sliders, title: "Cross-Platform App Development (Flutter & React Native)", description: "Launch powerful cross-platform mobile apps with unified codebases and integrated AI capabilities. We build scalable solutions that perform flawlessly across iOS and Android while reducing development time and cost.", color: "from-emerald-400 to-teal-600" },
          { id: 4, icon: Sliders, title: "Generative AI UI/UX Design", description: "Design intelligent, adaptive interfaces with AI-powered personalization, predictive interactions, and automated user journeys. We create user experiences that learn, evolve, and increase engagement.", color: "from-emerald-400 to-teal-600" },
          { id: 5, icon: Sliders, title: "AI Agents & Workflow Automation", description: "Integrate autonomous AI agents into mobile applications to automate support, booking systems, approvals, and operational workflows — improving efficiency and reducing manual effort.", color: "from-emerald-400 to-teal-600" },
          { id: 6, icon: Sliders, title: "Enterprise & SaaS Mobile Solutions", description: "Build secure enterprise mobility platforms, SaaS-based applications, CRM-integrated systems, and cloud-native mobile ecosystems designed for scalability and long-term growth.", color: "from-emerald-400 to-teal-600" },
          { id: 7, icon: Sliders, title: "Secure FinTech & Payment Integration", description: "Develop fintech-ready applications with payment gateway integration, biometric authentication, encryption protocols, and compliance-focused architecture.", color: "from-emerald-400 to-teal-600" },
          { id: 8, icon: Sliders, title: "App Modernization & Performance Optimization", description: "Upgrade legacy apps with AI enhancements, performance tuning, cloud migration, and next-gen architecture to improve speed, security, and scalability.", color: "from-emerald-400 to-teal-600" },
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
        title: "Brand Strategy & Identity Design in Dubai",
        description: "We craft distinctive brand identities through research-backed strategy, creative design systems, and market positioning frameworks. From startups to enterprise brands, we help businesses stand out with clarity and confidence.",
        buttonText: "Talk to Us",
      },
      main: {
        header: "Branding Services",
        subheader: "What We Offer",
        services: [
          { id: 1, icon: PenTool, title: "Logo Design & Brand Mark Creation", description: "We design unique, memorable logos that reflect your brand's personality and values. Every logo is crafted for versatility across digital, print, and social platforms.", color: "from-rose-400 to-pink-600" },
          { id: 2, icon: PenTool, title: "Brand Guidelines & Style Systems", description: "Develop comprehensive brand guidelines covering logo usage, color palettes, typography, imagery, and layout standards to ensure consistent brand communication.", color: "from-rose-400 to-pink-600" },
          { id: 3, icon: PenTool, title: "Visual Identity Design", description: "Create cohesive visual identity systems including business cards, letterheads, packaging, social media creatives, and marketing collateral that strengthen brand recognition.", color: "from-rose-400 to-pink-600" },
          { id: 4, icon: PenTool, title: "Brand Strategy & Positioning", description: "Define your brand mission, vision, target audience, and competitive positioning to create a strong foundation for long-term growth and market differentiation.", color: "from-rose-400 to-pink-600" },
          { id: 5, icon: PenTool, title: "Brand Voice & Messaging", description: "Craft clear brand messaging, tone of voice, and storytelling frameworks that connect emotionally with your audience across websites, social media, and marketing campaigns.", color: "from-rose-400 to-pink-600" },
          { id: 6, icon: PenTool, title: "Corporate & Rebranding Solutions", description: "Refresh or reposition existing brands with updated visual identities, messaging systems, and strategic alignment to meet evolving market demands.", color: "from-rose-400 to-pink-600" },
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
        title: "Best Digital Marketing Agency in Dubai",
        description: "Drive measurable growth with data-driven digital marketing strategies. At Dapps Solutions, we combine SEO, paid advertising, content marketing, and performance analytics to help businesses scale across the UAE.",
        buttonText: "Talk to Us",
      },
      main: {
        header: "Digital Marketing Services in Dubai",
        subheader: "Growth Solutions We Provide",
        services: [
          { id: 1, icon: BarChart2, title: "Search Engine Optimization (SEO)", description: "Improve your website's visibility on Google with keyword research, on-page optimization, technical SEO, and high-quality link building to drive organic traffic.", color: "from-amber-400 to-orange-600" },
          { id: 2, icon: BarChart2, title: "Search Engine Marketing (Google Ads)", description: "Generate instant leads with high-converting Google Ads campaigns, including search ads, display ads, shopping ads, and remarketing strategies.", color: "from-amber-400 to-orange-600" },
          { id: 3, icon: BarChart2, title: "Social Media Marketing", description: "Build brand awareness and engagement across Instagram, Facebook, LinkedIn, and TikTok through creative content, paid promotions, and community management.", color: "from-amber-400 to-orange-600" },
          { id: 4, icon: BarChart2, title: "Content Marketing", description: "Create SEO-optimized blogs, website content, ad creatives, and social media posts that attract, educate, and convert your target audience.", color: "from-amber-400 to-orange-600" },
          { id: 5, icon: BarChart2, title: "Email & Marketing Automation", description: "Nurture leads with automated email campaigns, customer journeys, remarketing funnels, and CRM-integrated marketing workflows.", color: "from-amber-400 to-orange-600" },
          { id: 6, icon: BarChart2, title: "Conversion Rate Optimization (CRO)", description: "Increase website conversions through landing page optimization, A/B testing, performance tracking, and data-driven improvements.", color: "from-amber-400 to-orange-600" },
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
        header: "Professional Video Production & Editing Services in Dubai",
        subheader: "",
        services: [
          { id: 1, icon: Camera, title: "Brand Video Production & Editing", description: "Create powerful brand stories with professional video editing, color grading, sound design, and cinematic storytelling tailored for corporate identity and marketing campaigns.", color: "from-indigo-400 to-blue-600" },
          { id: 2, icon: Camera, title: "Commercial & Advertising Video Production", description: "Develop high-converting commercial videos, digital ad creatives, and social media advertising content optimized for performance marketing platforms like Google, Meta, and YouTube.", color: "from-indigo-400 to-blue-600" },
          { id: 3, icon: Camera, title: "Motion Graphics & Animated Explainers", description: "Design engaging motion graphics, animated explainer videos, kinetic typography, and visual storytelling assets that simplify complex ideas and enhance brand communication.", color: "from-indigo-400 to-blue-600" },
          { id: 4, icon: Camera, title: "Corporate & Promotional Videos", description: "Produce corporate films, company profile videos, product showcases, and event coverage designed to build trust and strengthen brand presence.", color: "from-indigo-400 to-blue-600" },
          { id: 5, icon: Camera, title: "Social Media Video Content Creation", description: "Create short-form video content, reels, and platform-optimized edits for Instagram, LinkedIn, TikTok, and YouTube to increase engagement and brand visibility.", color: "from-indigo-400 to-blue-600" },
          { id: 6, icon: Camera, title: "Professional Post-Production Services", description: "End-to-end post-production workflows including video editing, audio enhancement, subtitle integration, multi-format exports, and content repurposing for multiple platforms.", color: "from-indigo-400 to-blue-600" },
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
    ecommerce: {
      banner: {
        title: "Custom E-commerce Website Development & Digital Marketing in UAE",
        description: "Dapps Solutions designs high-performance ecommerce stores integrated with SEO, paid advertising, automation, and conversion optimization strategies to help brands grow faster in Dubai and across the UAE.",
        buttonText: "Talk to Us",
      },
      main: {
        header: "Custom Ecommerce Development & Growth Solutions in Dubai & UAE",
        subheader: "",
        services: [
          { id: 1, icon: ShoppingCart, title: "Custom Ecommerce Platform Development", description: "We build fully custom-coded ecommerce platforms tailored to your business model, offering complete flexibility, scalability, and performance without platform limitations.", color: "from-amber-400 to-orange-600" },
          { id: 2, icon: Monitor, title: "Enterprise Ecommerce Architecture", description: "Design scalable backend systems, secure databases, and high-performance infrastructure to support large product catalogs and high traffic volumes.", color: "from-amber-400 to-orange-600" },
          { id: 3, icon: ShoppingCart, title: "Custom Checkout & Payment Integration", description: "Develop secure, optimized checkout systems with integrated payment gateways, multi-currency support, and fraud protection mechanisms.", color: "from-amber-400 to-orange-600" },
          { id: 4, icon: Globe2, title: "Ecommerce ERP & CRM Integration", description: "Connect your ecommerce platform with ERP, CRM, inventory management, and accounting systems for seamless operations and automation.", color: "from-amber-400 to-orange-600" },
          { id: 5, icon: BarChart2, title: "Advanced Conversion Optimization", description: "Implement custom UX strategies, optimized product pages, smart search systems, and data-driven funnels to increase sales and reduce cart abandonment.", color: "from-amber-400 to-orange-600" },
          { id: 6, icon: Users, title: "Ecommerce SEO & Performance Marketing", description: "Integrate advanced SEO, Google Ads, social commerce, and analytics platforms for automated and efficient ecommerce workflows.", color: "from-amber-400 to-orange-600" },
          { id: 7, icon: ShoppingCart, title: "Custom Marketplace & Multi-Vendor Development", description: "Build scalable multi-vendor ecommerce platforms with vendor dashboards, commission systems, and automated order management.", color: "from-amber-400 to-orange-600" },
          { id: 8, icon: Globe2, title: "API & Third-Party System Integration", description: "Integrate logistics providers, payment processors, shipping APIs, and external platforms for automated and efficient ecommerce workflows.", color: "from-amber-400 to-orange-600" },
        ],
      },
      accordion: {
        title: "Ecommerce for Industries",
        verticals: [
          { title: "Fashion & Beauty", description: "Variant-rich catalogs, influencer funnels, and retention automations." },
          { title: "Electronics", description: "Technical product journeys, warranty flows, and post-purchase support automation." },
          { title: "Food & Grocery", description: "Subscription models, delivery-slot logic, and repeat order optimization." },
          { title: "B2B Commerce", description: "Bulk pricing, RFQ workflows, and account-based purchasing portals." },
        ],
      },
    },
    uiux: {
      banner: {
        title: "UI/UX Design for Web & Software Applications in UAE",
        description: "Dapps Solutions creates modern, data-driven UI/UX design systems that enhance usability, improve engagement, and increase conversion rates for digital products and enterprise platforms.",
        buttonText: "Talk to Us",
      },
      main: {
        header: "UI/UX & Product Design Services in Dubai",
        subheader: "",
        services: [
          { id: 1, icon: PenTool, title: "UX Research & Product Strategy", description: "We conduct in-depth user research, competitor analysis, journey mapping, and behavioral insights to create data-driven product strategies for web and software applications across the UAE.", color: "from-rose-400 to-pink-600" },
          { id: 2, icon: Monitor, title: "Web & Application Interface Design", description: "Design modern, responsive, and conversion-focused interfaces for web applications, enterprise software, SaaS platforms, and ecommerce systems.", color: "from-rose-400 to-pink-600" },
          { id: 3, icon: Grid3x3, title: "Scalable Design Systems", description: "Build structured design systems, reusable UI components, and interaction standards that ensure product consistency and faster development cycles.", color: "from-rose-400 to-pink-600" },
          { id: 4, icon: Sliders, title: "Usability Testing & Optimization", description: "Improve product performance with usability testing, A/B testing, and continuous design refinements that reduce friction and increase engagement.", color: "from-rose-400 to-pink-600" },
          { id: 5, icon: PenTool, title: "SaaS Product UI Design", description: "Specialized UI/UX design for SaaS platforms with dashboard optimization, workflow clarity, and enterprise-level usability.", color: "from-rose-400 to-pink-600" },
          { id: 6, icon: Monitor, title: "Mobile App UX Design", description: "Create intuitive mobile app experiences optimized for performance, accessibility, and user retention.", color: "from-rose-400 to-pink-600" },
          { id: 7, icon: Grid3x3, title: "Conversion-Focused Landing Page Design", description: "Design high-converting landing pages optimized for SEO, paid campaigns, and lead generation.", color: "from-rose-400 to-pink-600" },
          { id: 8, icon: Sliders, title: "Accessibility & Performance Optimization", description: "Ensure your digital product meets accessibility standards and delivers fast, seamless user experiences.", color: "from-rose-400 to-pink-600" },
        ],
      },
      accordion: {
        title: "UI/UX for Industries",
        verticals: [
          { title: "SaaS Platforms", description: "Onboarding, dashboards, and workflows designed for retention and adoption." },
          { title: "Healthcare", description: "Clear patient and clinician experiences with accessible navigation patterns." },
          { title: "Fintech", description: "Trust-focused interfaces for transactions, insights, and secure account flows." },
          { title: "E-learning", description: "Learning experiences that improve engagement and completion rates." },
        ],
      },
    },
    erpCrm: {
      banner: {
        title: "Custom ERP & CRM Software Development Services in Dubai",
        description: "We design and develop scalable ERP systems and CRM software solutions that integrate finance, HR, inventory, sales, and customer management into one intelligent business platform.",
        buttonText: "Start Your ERP Project",
      },
      main: {
        header: "ERP & CRM Software Solutions",
        subheader: "",
        services: [
          { id: 1, icon: Sliders, title: "Custom ERP Software Development", description: "Tailor-made ERP systems designed to integrate finance, HR, inventory, procurement, and operations into one centralized business platform for improved efficiency and control.", color: "from-cyan-400 to-blue-600" },
          { id: 2, icon: Users, title: "CRM System Development", description: "Advanced CRM software solutions that streamline lead management, automate sales pipelines, improve customer communication, and boost retention.", color: "from-cyan-400 to-blue-600" },
          { id: 3, icon: Globe2, title: "ERP & CRM Integration Services", description: "Seamless integration of ERP and CRM systems with accounting software, payment gateways, inventory tools, and third-party APIs for unified operations.", color: "from-cyan-400 to-blue-600" },
          { id: 4, icon: Zap, title: "Business Process Automation", description: "Automate repetitive workflows, approvals, reporting, and operational tasks using intelligent automation within ERP & CRM environments.", color: "from-cyan-400 to-blue-600" },
          { id: 5, icon: Monitor, title: "Cloud-Based ERP & CRM Solutions", description: "Secure, scalable, and cloud-hosted ERP and CRM systems that enable real-time data access, remote management, and business scalability.", color: "from-cyan-400 to-blue-600" },
          { id: 6, icon: BarChart2, title: "ERP & CRM Analytics & Reporting", description: "Advanced dashboards and real-time reporting tools that provide actionable business insights for smarter decision-making.", color: "from-cyan-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "ERP & CRM Solutions\nfor Industries",
        verticals: [
          { title: "Real Estate & Property Management", description: "Custom ERP and CRM systems for real estate agencies, property developers, and brokers to manage leads, automate sales pipelines, track properties, and streamline financial reporting." },
          { title: "Healthcare & Clinics", description: "Secure ERP & CRM software for hospitals, clinics, and healthcare providers to manage patient records, appointments, billing, HR, and compliance efficiently." },
          { title: "Retail & Ecommerce", description: "Integrated ERP and CRM solutions for inventory management, order processing, customer tracking, sales automation, and performance analytics." },
          { title: "Manufacturing & Distribution", description: "Enterprise ERP systems designed for production planning, supply chain management, procurement, warehouse tracking, and operational automation." },
          { title: "Finance & Professional Services", description: "CRM and ERP solutions for accounting firms, consultants, and financial institutions to automate client management, invoicing, compliance, and reporting." },
          { title: "Education & Training Institutes", description: "Centralized ERP and CRM platforms for student management, admissions, fee tracking, staff coordination, and communication automation." },
          { title: "Logistics & Transportation", description: "Automated ERP systems for fleet management, shipment tracking, billing automation, and operational reporting." },
          { title: "Corporate Enterprises & SMEs", description: "Scalable ERP & CRM software tailored for growing businesses to centralize operations, improve team collaboration, and enhance customer management." },
        ],
      },
    },
    videoProduction: {
      banner: {
        title: "Video Production & Editing Services in Dubai, UAE",
        description: "Dapps Solutions creates high-quality corporate videos, promotional ads, social media content, and branded visuals that enhance marketing performance and strengthen brand identity.",
        buttonText: "Book Production Call",
      },
      main: {
        header: "Professional Video Production & Editing Services in Dubai",
        subheader: "",
        services: [
          { id: 1, icon: Camera, title: "Brand Video Production & Editing", description: "Create powerful brand stories with professional video editing, color grading, sound design, and cinematic storytelling tailored for corporate identity and marketing campaigns.", color: "from-indigo-400 to-blue-600" },
          { id: 2, icon: Camera, title: "Commercial & Advertising Video Production", description: "Develop high-converting commercial videos, digital ad creatives, and social media advertising content optimized for performance marketing platforms like Google, Meta, and YouTube.", color: "from-indigo-400 to-blue-600" },
          { id: 3, icon: Camera, title: "Motion Graphics & Animated Explainers", description: "Design engaging motion graphics, animated explainer videos, kinetic typography, and visual storytelling assets that simplify complex ideas and enhance brand communication.", color: "from-indigo-400 to-blue-600" },
          { id: 4, icon: Camera, title: "Corporate & Promotional Videos", description: "Produce corporate films, company profile videos, product showcases, and event coverage designed to build trust and strengthen brand presence.", color: "from-indigo-400 to-blue-600" },
          { id: 5, icon: Camera, title: "Social Media Video Content Creation", description: "Create short-form video content, reels, and platform-optimized edits for Instagram, LinkedIn, TikTok, and YouTube to increase engagement and brand visibility.", color: "from-indigo-400 to-blue-600" },
          { id: 6, icon: Camera, title: "Professional Post-Production Services", description: "End-to-end post-production workflows including video editing, audio enhancement, subtitle integration, multi-format exports, and content repurposing for multiple platforms.", color: "from-indigo-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "Video Services for Industries",
        verticals: [
          { title: "Real Estate", description: "Property showcases and promotional reels that accelerate inquiries." },
          { title: "Healthcare", description: "Educational and trust-building content for patients and providers." },
          { title: "Education", description: "Course content, launch trailers, and social-first explainers." },
          { title: "Retail & Ecommerce", description: "Product storytelling and UGC-style edits for conversion lift." },
        ],
      },
    },  },
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
        description: "وسّع حضورك الرقمي عبر نماذج تنبؤية وحملات نمو مؤتمتة مدعومة بالبيانات.",
        buttonText: "اطلب استشارة التسويق",
      },
      main: {
        header: "التسويق بالأداء",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: BarChart2, title: "SEO/SEM معزّز بالذكاء", description: "تحسين الظهور الرقمي عبر تحليل بحث ذكي وإدارة عروض الأسعار بشكل مؤتمت.", color: "from-yellow-400 to-yellow-600" },
          { id: 2, icon: BarChart2, title: "إدارة وسائل التواصل", description: "توسيع التفاعل عبر توزيع المحتوى وتحليل أداء الجمهور عبر المنصات.", color: "from-yellow-400 to-yellow-600" },
          { id: 3, icon: BarChart2, title: "تسويق المحتوى الذكي", description: "إنتاج محتوى موجّه لجذب العملاء المحتملين وتحسين جودة التحويل.", color: "from-yellow-400 to-yellow-600" },
          { id: 4, icon: BarChart2, title: "أتمتة دورة حياة العميل", description: "تنفيذ تدفقات تسويقية مخصصة عبر البريد والحملات الذكية لرفع الولاء والمبيعات.", color: "from-yellow-400 to-yellow-600" },
        ],
      },
      accordion: {
        title: "التسويق الرقمي حسب القطاع",
        verticals: [
          { title: "التجارة الإلكترونية", description: "استراتيجيات أداء وتهيئة التحويل لزيادة المبيعات." },
          { title: "التعليم", description: "حملات جذب طلاب وبناء حضور رقمي للمؤسسات التعليمية." },
          { title: "الرعاية الصحية", description: "زيادة اكتساب العملاء وتعزيز الثقة بالعلامة الصحية." },
          { title: "العقارات", description: "توليد العملاء المحتملين وحملات موجهة للمشاريع العقارية." },
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
    ecommerce: {
      banner: {
        title: "تطوير التجارة الإلكترونية وتسويق النمو",
        description: "نبني متاجر إلكترونية قابلة للتوسع مع منظومات تسويق ترفع الاكتساب ومعدلات التحويل وتزيد تكرار الشراء.",
        buttonText: "ابدأ مشروع متجرك",
      },
      main: {
        header: "منظومة نمو التجارة الإلكترونية",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: ShoppingCart, title: "تطوير واجهة المتجر", description: "تصميم وتطوير متاجر مخصصة سريعة الأداء مع بنية جاهزة لمحركات البحث وصفحات منتجات عالية التحويل.", color: "from-amber-400 to-orange-600" },
          { id: 2, icon: BarChart2, title: "تحسين معدل التحويل", description: "اختبارات وتحسينات مستمرة لصفحات الهبوط والدفع ومسارات إعادة الاستهداف بناءً على البيانات.", color: "from-amber-400 to-orange-600" },
          { id: 3, icon: Globe2, title: "التوسع في المنصات", description: "ربط متجرك بالأسواق الإلكترونية مع مزامنة المخزون والتسعير وعمليات الشحن والتنفيذ.", color: "from-amber-400 to-orange-600" },
          { id: 4, icon: Users, title: "تسويق الأداء", description: "إدارة حملات مدفوعة وعضوية تستهدف خفض تكلفة الاكتساب ورفع قيمة العميل على المدى الطويل.", color: "from-amber-400 to-orange-600" },
        ],
      },
      accordion: {
        title: "حلول التجارة الإلكترونية حسب القطاع",
        verticals: [
          { title: "الأزياء والجمال", description: "كتالوجات متعددة الخيارات ومسارات مؤثرين وحملات ولاء لزيادة إعادة الشراء." },
          { title: "الإلكترونيات", description: "تجارب شراء تقنية واضحة مع إدارة الضمان وخدمة ما بعد البيع." },
          { title: "الأغذية والبقالة", description: "نماذج اشتراك وخيارات توصيل ذكية وتحسين الطلبات المتكررة." },
          { title: "التجارة بين الشركات B2B", description: "تسعير كميات كبيرة وطلبات عروض أسعار وبوابات شراء للحسابات المؤسسية." },
        ],
      },
    },
    uiux: {
      banner: {
        title: "تصميم UI/UX وأنظمة الواجهات",
        description: "نصمم تجارب استخدام واضحة ومتسقة بصريًا لزيادة سهولة الاستخدام وتحقيق نتائج قابلة للقياس.",
        buttonText: "اطلب تدقيق UI/UX",
      },
      main: {
        header: "خدمات تصميم المنتجات الرقمية",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: PenTool, title: "بحث وتجربة المستخدم", description: "تحليل رحلة المستخدم والمنافسين وسلوك الجمهور لبناء قرارات تصميم دقيقة.", color: "from-rose-400 to-pink-600" },
          { id: 2, icon: Monitor, title: "تصميم واجهات الويب والتطبيقات", description: "واجهات دقيقة وسهلة الوصول توازن بين الجمال والوضوح ورفع معدل الإنجاز.", color: "from-rose-400 to-pink-600" },
          { id: 3, icon: Grid3x3, title: "أنظمة التصميم", description: "مكتبات مكونات وقواعد تفاعل موحدة تضمن الاتساق وقابلية التوسع.", color: "from-rose-400 to-pink-600" },
          { id: 4, icon: Sliders, title: "تحسين قابلية الاستخدام", description: "اختبارات دورية وتحسينات مستمرة لتقليل الاحتكاك ورفع رضا المستخدم.", color: "from-rose-400 to-pink-600" },
        ],
      },
      accordion: {
        title: "تصميم UI/UX حسب القطاع",
        verticals: [
          { title: "منصات SaaS", description: "تجارب تسجيل دخول ولوحات تحكم ومسارات استخدام تدعم التبنّي والاحتفاظ." },
          { title: "الرعاية الصحية", description: "واجهات واضحة للمرضى والكوادر الطبية مع تدفق معلومات منظم." },
          { title: "التقنية المالية", description: "تصميمات موثوقة لعمليات الدفع وإدارة الحسابات والبيانات الحساسة." },
          { title: "التعليم الإلكتروني", description: "تجارب تعلم تفاعلية ترفع معدل الإكمال وتزيد ارتباط المستخدم." },
        ],
      },
    },
    erpCrm: {
      banner: {
        title: "خدمات تطوير برمجيات ERP و CRM المخصصة في دبي",
        description: "نصمم ونطور أنظمة ERP وحلول CRM قابلة للتوسع تدمج المالية والموارد البشرية والمخزون والمبيعات وإدارة العملاء في منصة أعمال ذكية واحدة.",
        buttonText: "ابدأ مشروع ERP الخاص بك",
      },
      main: {
        header: "حلول برمجيات ERP و CRM",
        subheader: "",
        services: [
          { id: 1, icon: Sliders, title: "تطوير برمجيات ERP مخصصة", description: "أنظمة ERP مصممة خصيصًا لدمج المالية والموارد البشرية والمخزون والمشتريات والعمليات في منصة أعمال مركزية واحدة لتحسين الكفاءة والتحكم.", color: "from-cyan-400 to-blue-600" },
          { id: 2, icon: Users, title: "تطوير أنظمة CRM", description: "حلول برمجيات CRM متقدمة تبسط إدارة العملاء المحتملين وأتمتة مسارات المبيعات وتحسين التواصل مع العملاء وزيادة الاحتفاظ بهم.", color: "from-cyan-400 to-blue-600" },
          { id: 3, icon: Globe2, title: "خدمات تكامل ERP و CRM", description: "تكامل سلس لأنظمة ERP و CRM مع برامج المحاسبة وبوابات الدفع وأدوات المخزون وواجهات برمجة التطبيقات الخارجية لعمليات موحدة.", color: "from-cyan-400 to-blue-600" },
          { id: 4, icon: Zap, title: "أتمتة العمليات التجارية", description: "أتمتة سير العمل المتكرر والموافقات والتقارير والمهام التشغيلية باستخدام الأتمتة الذكية ضمن بيئات ERP و CRM.", color: "from-cyan-400 to-blue-600" },
          { id: 5, icon: Monitor, title: "حلول ERP و CRM السحابية", description: "أنظمة ERP و CRM آمنة وقابلة للتوسع ومستضافة سحابيًا تتيح الوصول للبيانات في الوقت الفعلي والإدارة عن بُعد وقابلية توسع الأعمال.", color: "from-cyan-400 to-blue-600" },
          { id: 6, icon: BarChart2, title: "تحليلات وتقارير ERP و CRM", description: "لوحات معلومات متقدمة وأدوات تقارير في الوقت الفعلي توفر رؤى أعمال قابلة للتنفيذ لاتخاذ قرارات أذكى.", color: "from-cyan-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "حلول ERP و CRM\nللصناعات",
        verticals: [
          { title: "العقارات وإدارة الممتلكات", description: "أنظمة ERP و CRM مخصصة للوكالات العقارية والمطورين والوسطاء لإدارة العملاء المحتملين وأتمتة مسارات المبيعات وتتبع العقارات وتبسيط التقارير المالية." },
          { title: "الرعاية الصحية والعيادات", description: "برمجيات ERP و CRM آمنة للمستشفيات والعيادات ومقدمي الرعاية الصحية لإدارة سجلات المرضى والمواعيد والفواتير والموارد البشرية والامتثال بكفاءة." },
          { title: "التجزئة والتجارة الإلكترونية", description: "حلول ERP و CRM متكاملة لإدارة المخزون ومعالجة الطلبات وتتبع العملاء وأتمتة المبيعات وتحليلات الأداء." },
          { title: "التصنيع والتوزيع", description: "أنظمة ERP مؤسسية مصممة لتخطيط الإنتاج وإدارة سلسلة التوريد والمشتريات وتتبع المستودعات وأتمتة العمليات." },
          { title: "المالية والخدمات المهنية", description: "حلول CRM و ERP لشركات المحاسبة والاستشاريين والمؤسسات المالية لأتمتة إدارة العملاء والفواتير والامتثال والتقارير." },
          { title: "مؤسسات التعليم والتدريب", description: "منصات ERP و CRM مركزية لإدارة الطلاب والقبول وتتبع الرسوم وتنسيق الموظفين وأتمتة التواصل." },
          { title: "الخدمات اللوجستية والنقل", description: "أنظمة ERP مؤتمتة لإدارة الأسطول وتتبع الشحنات وأتمتة الفواتير وإعداد التقارير التشغيلية." },
          { title: "المؤسسات والشركات الصغيرة والمتوسطة", description: "برمجيات ERP و CRM قابلة للتوسع مصممة للشركات النامية لمركزة العمليات وتحسين التعاون وتعزيز إدارة العملاء." },
        ],
      },
    },
    videoProduction: {
      banner: {
        title: "تحرير الفيديو والإنتاج",
        description: "نقدم دورة إنتاج كاملة من الفكرة إلى التسليم لمحتوى السوشيال والإعلانات والهوية البصرية.",
        buttonText: "احجز استشارة إنتاج",
      },
      main: {
        header: "خدمات الفيديو الإبداعية",
        subheader: "الخدمات التي نقدمها:",
        services: [
          { id: 1, icon: Camera, title: "تحرير فيديو العلامة التجارية", description: "مونتاج سردي احترافي مع تصحيح ألوان ومعالجة صوت متوافقين مع هوية علامتك.", color: "from-indigo-400 to-blue-600" },
          { id: 2, icon: Camera, title: "إعلانات وفيديوهات تجارية", description: "إنتاج فيديوهات موجهة للأداء بصيغ مخصصة لكل منصة وحوافز مشاهدة قوية.", color: "from-indigo-400 to-blue-600" },
          { id: 3, icon: Camera, title: "موشن جرافيك وعناوين", description: "تصميم موشن جرافيك وعناوين متحركة لشرح الرسائل بشكل أوضح وأكثر تأثيرًا.", color: "from-indigo-400 to-blue-600" },
          { id: 4, icon: Camera, title: "مسار ما بعد الإنتاج", description: "تسليم منظم بإصدارات متعددة وترجمة وملفات نهائية محسّنة لكل قناة نشر.", color: "from-indigo-400 to-blue-600" },
        ],
      },
      accordion: {
        title: "خدمات الفيديو حسب القطاع",
        verticals: [
          { title: "العقارات", description: "جولات عقارية وفيديوهات ترويجية تزيد الاستفسارات وجودة العملاء المحتملين." },
          { title: "الرعاية الصحية", description: "محتوى توعوي وبصري يعزز الثقة بين المريض ومقدم الخدمة." },
          { title: "التعليم", description: "فيديوهات دورات وإطلاقات تعليمية وشرح مبسط مخصص للمنصات الاجتماعية." },
          { title: "التجزئة والتجارة الإلكترونية", description: "سرد بصري للمنتجات ومحتوى UGC يرفع التفاعل والتحويل." },
        ],
      },
    },  },
};


