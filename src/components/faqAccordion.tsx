"use client"

import { useState } from "react"
// ...existing code...
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext";

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqItems: { [key: string]: FaqItem[] } | FaqItem[];
}

export default function FaqAccordion({ faqItems }: FaqAccordionProps) {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  // Support both language-keyed and flat array
  const items = Array.isArray(faqItems)
    ? faqItems
    : faqItems[language] || faqItems['en'];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className={`min-h-[80vh] bg-[#f8f8fa] flex items-center justify-center py-16 px-0 font-sans ${language === 'ar' ? 'text-right' : 'text-left'}`}
      style={{
        direction: language === 'ar' ? 'rtl' : 'ltr',
      }}
    >
      <div className={`w-full max-w-5xl mx-auto flex flex-col justify-center p-8 md:p-16 bg-white rounded-2xl shadow-xl font-sans text-[#222] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-[#222] text-center font-sans ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        </h2>
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border-b last:border-b-0 transition-all duration-300 ${openIndex === index ? 'bg-gray-100' : 'bg-transparent'} px-2 py-2 rounded-lg leading-snug font-sans ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none font-sans text-[#222] ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-normal text-xl md:text-2xl font-sans text-[#222] transition-colors tracking-tight leading-snug ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {item.question}
                </span>
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#222" />
                    <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`overflow-hidden pb-4 pl-2 pr-2 font-sans text-[#222] ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                  >
                    <div className={`text-[#444] leading-loose text-base md:text-lg mt-2 font-sans ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}