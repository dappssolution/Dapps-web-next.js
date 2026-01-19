"use client";

import { MdMail, MdWork, MdHelpOutline } from "react-icons/md";
import { FiPhone, FiMessageCircle } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

// Phone numbers data
const phoneNumbers = [
  { number: "+974 7747 3725", label: "Qatar", labelAr: "قطر", whatsapp: "+97477473725" },
  { number: "+971 54 254 5909", label: "Dubai", labelAr: "دبي", whatsapp: "+971542545909" },
  { number: "+971 54 487 8929", label: "Dubai", labelAr: "دبي", whatsapp: "+971544878929" },
  { number: "+91 99474 00278", label: "India", labelAr: "الهند", whatsapp: "+919947400278" },
];

export default function ContactInfo() {
  const { language } = useLanguage();
  const contacts = [
    {
      icon: MdWork,
      email: "hr@dappssolutions.in",
      title: language === "ar" ? "الموارد البشرية والوظائف" : "HR & Careers",
      description:
        language === "ar"
          ? "اكتشف فرص العمل في Dapps Solutions"
          : "Explore career opportunities at Dapps Solutions",
    },
    {
      icon: MdMail,
      email: "sales@dappssolutions.in",
      title: language === "ar" ? "المبيعات" : "Sales",
      description:
        language === "ar"
          ? "تواصل مع Dapps Solutions للاستفسارات التجارية"
          : "Reach out to Dapps Solutions for business inquiries",
    },
    {
      icon: MdHelpOutline,
      email: "info@dappssolutions.in",
      title: language === "ar" ? "الاستفسارات العامة" : "General Inquiries",
      description:
        language === "ar"
          ? "تواصل مع Dapps Solutions لأي معلومات إضافية"
          : "Contact Dapps Solutions for any additional information",
    },
  ];

  return (
    <div className={`bg-gradient-to-b from-slate-50 to-white px-4 py-12 md:py-16${language === "ar" ? " rtl" : ""}`}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <p className="text-base md:text-lg text-gray-600 mb-2">
            {language === "ar"
              ? "هل لديك سؤال أو ملاحظة أو ترغب فقط في التواصل؟"
              : "Have a question, feedback, or just want to say"}
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#000539" }}
          >
            {language === "ar"
              ? "مرحباً! تواصل معنا عبر البريد التالي:"
              : "hello? Reach out to us at:"}
          </h1>
        </div>

        {/* Phone Numbers Section - Updated with project theme */}
        <div className="mb-12 md:mb-16">
          <div
            className="rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, rgb(4, 1, 80) 0%, rgb(90, 24, 154) 50%, rgb(0, 0, 0) 100%)',
            }}
          >
            {/* Glass overlay effect */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <FiPhone size={24} className="text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {language === "ar" ? "تواصل معنا الآن" : "Connect With Us Now"}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {phoneNumbers.map((phone, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                  >
                    <p className="text-purple-200 text-xs font-medium mb-1 uppercase tracking-wide">
                      {language === "ar" ? phone.labelAr : phone.label}
                    </p>
                    <a
                      href={`tel:${phone.number.replace(/\s/g, "")}`}
                      className="text-white font-semibold text-lg mb-3 block hover:text-purple-200 transition-colors"
                    >
                      {phone.number}
                    </a>
                    <a
                      href={`https://wa.me/${phone.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 shadow-lg border border-white/30 hover:border-white/60"
                      style={{
                        background: 'linear-gradient(135deg, rgba(90, 24, 154, 0.8) 0%, rgba(4, 1, 80, 0.9) 100%)',
                      }}
                    >
                      <FiMessageCircle className="w-4 h-4" />
                      <span>{language === "ar" ? "تواصل معنا" : "Connect Us"}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:border-purple-200 hover:-translate-y-1"
                onClick={() => window.location.href = `mailto:${contact.email}`}
              >
                {/* Icon */}
                <div
                  className="mb-5 inline-flex p-4 rounded-xl group-hover:scale-105 transition-transform shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(4, 1, 80, 0.1) 0%, rgba(90, 24, 154, 0.15) 100%)',
                  }}
                >
                  <Icon size={28} style={{ color: "#5a189a" }} />
                </div>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="block mb-3 text-lg md:text-xl font-semibold hover:underline transition-all"
                  style={{ color: "#040150" }}
                >
                  {contact.email}
                </a>

                {/* Title */}
                <h3 className="text-sm font-medium mb-2 text-purple-600/80 uppercase tracking-wide">
                  {contact.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {contact.description}
                </p>

                {/* Hover Effect Line */}
                <div
                  className="absolute bottom-0 left-0 h-1 rounded-full w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgb(4, 1, 80) 0%, rgb(90, 24, 154) 50%, rgb(0, 0, 0) 100%)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
