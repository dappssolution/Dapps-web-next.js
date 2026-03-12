"use client"

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const content =
    language === "ar"
      ? {
          title: "عملاؤنا",
          description:
            "نتعاون مع شركات مبتكرة عبر قطاعات متعددة لصناعة أثر مستدام ودفع النمو عبر حلول استراتيجية.",
        }
      : {
          title: "Our Clients",
          description:
            "We partner with innovative companies across various industries to create lasting impact and drive growth through strategic solutions.",
        };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-black mb-6">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {content.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
} 
