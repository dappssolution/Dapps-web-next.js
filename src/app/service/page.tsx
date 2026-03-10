"use client";
import ClientsSection from "@/components/clientsSection";
import ServiceContent from "@/components/serviceContent";
import ServiceMain from "@/components/serviceMain";
import ServicesSection from "@/components/services";
import FaqAccordion from "@/components/faqAccordion";
// Removed unused 'useLanguage' import
 
 


function ServicePage() {
  // Removed unused 'language' variable to fix ESLint error
  const faqData = {
    en: [
      {
        question: "What services does Dapps Solutions offer in Dubai, UAE, Qatar, and India?",
        answer: "Dapps Solutions provides AI-powered website development, custom software solutions, mobile app development, AI agents & automation, ERP & CRM systems, digital marketing, branding, and SEO services in Dubai (UAE), Doha (Qatar), and Calicut, Kerala (India).",
      },
      {
        question: "Do you offer smart automation services in Dubai and Qatar?",
        answer: "Yes. We offer AI agents and business automation services in Dubai (UAE), Doha (Qatar), and India. Our solutions streamline customer support, lead management, CRM workflow, internal operations, and marketing processes to reduce manual work and increase efficiency.",
      },
      {
        question: "Are you a digital marketing agency in Dubai?",
        answer: "Yes. Dapps Solutions operates as a digital marketing agency in Dubai, UAE, offering:\n● SEO\n● Programmatic SEO\n● Google & Meta Ads\n● Social Media Marketing\n● Branding & Performance Marketing",
      },
      {
        question: "Do you develop websites and mobile apps in UAE and India?",
        answer: "Yes. We build SEO-optimized websites and AI-powered mobile apps for businesses in:\n● Dubai & Abu Dhabi, UAE\n● Doha, Qatar\n● Calicut & Kerala, India\nOur development approach focuses on speed, performance, security, and search visibility.",
      },
      {
        question: "What industries do you serve in UAE, Qatar, and India?",
        answer: "We serve industries such as:\n● Real Estate\n● Healthcare\n● E-commerce\n● Education\n● Large Enterprises\n● Tech Startups\nOur solutions are tailored to local market requirements in Dubai, Doha, and Kerala.",
      },
      {
        question: "Why choose Dapps Solutions in Dubai or Qatar?",
        answer: "Clients choose Dapps Solutions because we combine:\n● AI-powered digital transformation\n● Automation-driven development\n● SEO + AEO + GEO strategies\n● Performance-focused marketing\n● Scalable enterprise solutions\nWe build future-ready digital ecosystems designed for traditional search engines and smart search platforms.",
      },
    ],
    ar: [
      {
        question: "ما هي الخدمات التي تقدمها حلول دابس في دبي والإمارات وقطر والهند؟",
        answer: "توفر حلول دابس تطوير مواقع مدعومة بالذكاء الاصطناعي، حلول برمجية مخصصة، تطوير تطبيقات الجوال، وكلاء الذكاء الاصطناعي والأتمتة، أنظمة ERP وCRM، التسويق الرقمي، العلامة التجارية، وخدمات تحسين محركات البحث في دبي (الإمارات)، الدوحة (قطر)، وكاليكوت، كيرالا (الهند).",
      },
      {
        question: "هل تقدمون خدمات الأتمتة الذكية في دبي وقطر؟",
        answer: "نعم. نقدم خدمات وكلاء الذكاء الاصطناعي والأتمتة للأعمال في دبي (الإمارات)، الدوحة (قطر)، والهند. تساعد حلولنا في تبسيط دعم العملاء، إدارة العملاء المحتملين، سير العمل في CRM، العمليات الداخلية، وعمليات التسويق لتقليل العمل اليدوي وزيادة الكفاءة.",
      },
      {
        question: "هل أنتم وكالة تسويق رقمي في دبي؟",
        answer: "نعم. تعمل حلول دابس كوكالة تسويق رقمي في دبي، الإمارات، وتقدم:\n● تحسين محركات البحث (SEO)\n● SEO برمجي\n● إعلانات Google وMeta\n● التسويق عبر وسائل التواصل الاجتماعي\n● العلامة التجارية والتسويق بالأداء",
      },
      {
        question: "هل تطورون مواقع وتطبيقات جوال في الإمارات والهند؟",
        answer: "نعم. نقوم بتطوير مواقع محسّنة لمحركات البحث وتطبيقات جوال مدعومة بالذكاء الاصطناعي للأعمال في:\n● دبي وأبوظبي، الإمارات\n● الدوحة، قطر\n● كاليكوت وكيرالا، الهند\nنهجنا في التطوير يركز على السرعة والأداء والأمان وظهور البحث.",
      },
      {
        question: "ما هي القطاعات التي تخدمونها في الإمارات وقطر والهند؟",
        answer: "نخدم قطاعات مثل:\n● العقارات\n● الرعاية الصحية\n● التجارة الإلكترونية\n● التعليم\n● الشركات الكبرى\n● الشركات التقنية الناشئة\nحلولنا مخصصة حسب متطلبات السوق المحلي في دبي والدوحة وكيرالا.",
      },
      {
        question: "لماذا تختار حلول دابس في دبي أو قطر؟",
        answer: "يختار العملاء حلول دابس لأننا نجمع بين:\n● التحول الرقمي المدعوم بالذكاء الاصطناعي\n● تطوير قائم على الأتمتة\n● استراتيجيات SEO + AEO + GEO\n● التسويق المرتكز على الأداء\n● حلول مؤسسية قابلة للتوسع\nنبني منظومات رقمية جاهزة للمستقبل مصممة لمحركات البحث التقليدية ومنصات البحث الذكية.",
      },
    ],
  };
  return (
    <div>
       <ServiceMain/>
       <ServicesSection/>
       <ServiceContent/>
       <ClientsSection/>
       {/* FAQ Section for Service page */}
       <section className="max-w-5xl mx-auto my-16 px-4">
         <FaqAccordion faqItems={faqData} />
       </section>
    </div>
  );
}

export default ServicePage;