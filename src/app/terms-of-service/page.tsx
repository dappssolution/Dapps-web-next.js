"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

export default function TermsOfService() {
  const { language } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    }
  }, [language]);

  return (
    <div
      ref={contentRef}
      className={`w-full min-h-screen px-4 md:px-6 lg:px-8 pt-24 pb-8 md:pt-28 md:pb-10 flex flex-col items-center justify-start bg-white faq-montserrat ${language === "ar" ? "text-right" : ""}`}
    >
      

      {/* Glassmorphism Terms Content */}
      <section className="w-full max-w-4xl mx-auto rounded-3xl px-4 md:px-6 lg:px-8 py-6 bg-white font-sans">
        {language === "ar" ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-black faq-montserrat-bold">شروط الخدمة – حلول دابس</h2>
            <p className="mb-4 text-base font-semibold text-black faq-montserrat">آخر تحديث: مارس 2026</p>
            <p className="mb-6 text-base text-black faq-montserrat">
              مرحبًا بك في حلول دابس. من خلال الوصول واستخدام موقعنا www.dappssolutions.com، فإنك توافق على الالتزام بشروط الخدمة التالية. تحكم هذه الشروط استخدامك لموقعنا والخدمات المقدمة من حلول دابس. إذا لم توافق على أي جزء من هذه الشروط، ننصحك بعدم استخدام الموقع أو الخدمات.
            </p>
            <p className="mb-6 text-base text-black faq-montserrat">
              حلول دابس هي شركة تكنولوجيا وحلول رقمية تقدم خدمات تشمل تطوير المواقع، تطوير تطبيقات الجوال، حلول برمجيات ERP وCRM، تصميم واجهات المستخدم وتجربة المستخدم، التسويق الرقمي، خدمات تحسين محركات البحث، وتطوير البرمجيات المعتمدة على الذكاء الاصطناعي. المعلومات المتاحة على هذا الموقع تهدف إلى تقديم نظرة عامة على خدماتنا وقدراتنا. أي مشروع أو تعاون يتم مع حلول دابس سيخضع لاتفاقية مشروع منفصلة أو عرض يحدد نطاق العمل، الجداول الزمنية، التسليمات، وشروط الدفع.
            </p>
            <p className="mb-6 text-base text-black faq-montserrat">
              باستخدام هذا الموقع، توافق على استخدامه فقط لأغراض مشروعة وبطريقة لا تنتهك أي قوانين أو لوائح سارية. يجب ألا تحاول تعطيل وظائف الموقع، أو تحميل برامج ضارة، أو محاولة الوصول غير المصرح به، أو إساءة استخدام أي محتوى متاح على الموقع. قد تؤدي مثل هذه الأنشطة إلى تقييد أو إنهاء الوصول إلى الموقع.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Terms of Service – Dapps Solutions</h2>
            <p className="mb-4 text-base font-semibold text-black">Last Updated: March 2026</p>
            <p className="mb-6 text-base text-black faq-montserrat">
              Welcome to Dapps Solutions. By accessing and using our website www.dappssolutions.com, you agree to comply with and be bound by the following Terms of Service. These terms govern your use of our website and the services provided by Dapps Solutions. If you do not agree with any part of these terms, we advise you not to use our website or services.
            </p>
            <p className="mb-6 text-base text-black">
              Dapps Solutions is a technology and digital solutions company that provides services including website development, mobile application development, ERP and CRM software solutions, UI/UX design, digital marketing, SEO services, and AI-based software development. The information available on this website is intended to provide an overview of our services and capabilities. Any engagement or project initiated with Dapps Solutions will be governed by a separate project agreement or proposal that outlines the scope of work, timelines, deliverables, and payment terms.
            </p>
            <p className="mb-6 text-base text-black">
              By using this website, you agree to use it only for lawful purposes and in a manner that does not violate any applicable laws or regulations. You must not attempt to disrupt the functionality of the website, upload harmful software, attempt unauthorized access, or misuse any content available on the website. Any such activities may result in restriction or termination of access to the website.
            </p>
          </>
        )}
      </section>
    </div>
  );
}


