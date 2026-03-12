"use client"

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

export default function PrivacyPolicy() {
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
      

      {/* Glassmorphism Policy Content */}
      <section className="w-full max-w-4xl mx-auto rounded-3xl px-4 md:px-6 lg:px-8 py-6 bg-white font-sans">
        {language === "ar" ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-black faq-montserrat-bold">سياسة الخصوصية – حلول دابس</h2>
            <p className="mb-6 text-base text-black faq-montserrat">
              في حلول دابس، نحن ملتزمون بحماية واحترام خصوصية عملائنا وزوار الموقع والمستخدمين. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وتخزين وحماية معلوماتك الشخصية عند تفاعلك مع موقعنا وخدماتنا.
            </p>
            <p className="mb-6 text-base faq-montserrat">
              تهدف هذه السياسة إلى تقديم معلومات واضحة حول كيفية معالجة حلول دابس للبيانات الشخصية التي تقدمها لنا أثناء استخدامك لموقعنا أو التواصل مع فريقنا.
            </p>
            <p className="mb-6 text-base faq-montserrat">
              من خلال زيارة أو الوصول أو استخدام www.dappssolutions.com، فإنك توافق على الشروط والممارسات الموضحة في سياسة الخصوصية هذه.
            </p>
            <p className="mb-6 text-base faq-montserrat">
              توضح سياسة الخصوصية هذه أيضًا أنواع المعلومات الشخصية التي قد نجمعها منك عند تصفحك لموقعنا، أو تعبئة النماذج، أو التواصل معنا، أو استخدام خدماتنا مثل تطوير المواقع، حلول ERP وCRM، تطوير تطبيقات الجوال، التسويق الرقمي، وخدمات البرمجيات المعتمدة على الذكاء الاصطناعي.
            </p>
            <p className="mb-6 text-base faq-montserrat">
              يرجى ملاحظة أنه قد نقوم بتحديث أو تعديل سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في المتطلبات القانونية أو العمليات التجارية أو وظائف الموقع. نوصي بمراجعة هذه الصفحة بشكل دوري للبقاء على اطلاع حول كيفية حماية وإدارة معلوماتك.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-black faq-montserrat-bold">Privacy Policy – Dapps Solutions</h2>
            <p className="mb-6 text-base text-black faq-montserrat">
              At Dapps Solutions, we are committed to protecting and respecting the privacy of our clients, website visitors, and users. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website and services.
            </p>
            <p className="mb-6 text-base faq-montserrat">
              The purpose of this policy is to provide clear information about how Dapps Solutions processes the personal data that you provide to us while using our website or communicating with our team.
            </p>
            <p className="mb-6 text-base faq-montserrat">
              By visiting, accessing, or using www.dappssolutions.com, you agree to the terms, conditions, and practices described in this Privacy Policy.
            </p>
            <p className="mb-6 text-base faq-montserrat">
              This Privacy Policy also explains the types of personal information we may collect from you when you browse our website, fill out forms, contact us, or use our services such as website development, ERP & CRM solutions, mobile app development, digital marketing, and AI-based software services.
            </p>
            <p className="mb-6 text-base faq-montserrat">
              Please note that we may update or modify this Privacy Policy from time to time in order to reflect changes in legal requirements, business operations, or website functionality. We recommend that you review this page periodically to stay informed about how we protect and manage your information.
            </p>
          </>
        )}
      </section>
    </div>
  );
} 
