"use client"

import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { language } = useLanguage();
  const content =
    language === "ar"
      ? {
          title: "جاهز للانضمام إلى شبكة عملائنا؟",
          description:
            "لنصنع شيئًا استثنائيًا معًا. شاركنا لنطوّر أعمالك ونحقق نتائج ملموسة.",
          cta: "تواصل معنا",
        }
      : {
          title: "Ready to Join Our Client Family?",
          description:
            "Let's create something extraordinary together. Partner with us to transform your business and achieve remarkable results.",
          cta: "Get in Touch",
        };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-medium text-black mb-6">
          {content.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {content.description}
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full text-base font-medium text-white bg-black hover:bg-gray-800 transition-all duration-300"
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
} 
