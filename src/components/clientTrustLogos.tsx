"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const logos = [
  // --- Row 1: Tech & Digital ---
  {
    src: "/images/client-who-trust-us/Atom.png",
    alt: "Atom",
  },
  {
    src: "/images/client-who-trust-us/codeverse.PNG",
    alt: "Codeverse",
  },
  {
    src: "/images/client-who-trust-us/SN Institute of Technology.png",
    alt: "SN Institute of Technology",
  },
  {
    src: "/images/client-who-trust-us/Empower.png",
    alt: "Empower",
  },
  {
    src: "/images/client-who-trust-us/zendo.png",
    alt: "Zendo",
  },
  {
    src: "/images/client-who-trust-us/zendo-arabic-black-logo.png",
    alt: "Zendo Arabic",
  },
  {
    src: "/images/client-who-trust-us/IMG_6265.PNG",
    alt: "Scrap to Cash",
  },
  {
    src: "/images/client-who-trust-us/zain logo2.png",
    alt: "Zain",
  },
  {
    src: "/images/client-who-trust-us/IMG_6264.PNG",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/IMG_6262.PNG",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/IMG_6257.PNG",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/IMG_6255.PNG",
    alt: "Client Logo",
  },
  // --- Row 2: Food, Hospitality & Commerce ---
  {
    src: "/images/client-who-trust-us/Tokyo__2-removebg-preview.PNG",
    alt: "Tokyo",
  },
  {
    src: "/images/client-who-trust-us/Shawarma_Fusion_logo_design__1__2-removebg-preview.png",
    alt: "Shawarma Fusion",
  },
  {
    src: "/images/client-who-trust-us/delmon_logo_bg-removebg-preview.png",
    alt: "Delmon",
  },
  {
    src: "/images/client-who-trust-us/noor.png",
    alt: "Noor",
  },
  {
    src: "/images/client-who-trust-us/friends logo (1) 2.png",
    alt: "Friends",
  },
  {
    src: "/images/client-who-trust-us/City-removebg-preview.png",
    alt: "City",
  },
  {
    src: "/images/client-who-trust-us/cars.PNG",
    alt: "Cars",
  },
  {
    src: "/images/client-who-trust-us/Myoutlet logo-01.png",
    alt: "MyOutlet",
  },
  {
    src: "/images/client-who-trust-us/Sales.png",
    alt: "Sales",
  },
  {
    src: "/images/client-who-trust-us/JV_gold_2-removebg-preview (2).png",
    alt: "JV Gold",
  },
  {
    src: "/images/client-who-trust-us/Gc 2.png",
    alt: "GC",
  },
  {
    src: "/images/client-who-trust-us/jpc.png",
    alt: "JPC",
  },
  {
    src: "/images/client-who-trust-us/black-logo.png",
    alt: "Client Logo",
  },
];

export default function ClientTrustLogos() {
  const { t, language } = useLanguage();

  return (
    <section className="relative w-full py-2 md:py-4 px-4 bg-white overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Decorative gradient backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#5A189A]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5A189A]/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('clientsTrust.title')}
          </h2>
          <p className={`text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-light ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('clientsTrust.subtitle')}
          </p>
        </motion.div>

        {/* Responsive Logo Grid: 4 per row (phone), 5 per row (tablet), 6 per row (laptop+) */}
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-6 max-w-6xl mx-auto place-items-center px-2">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-28 sm:h-32 md:h-36 w-full p-1 md:p-2 flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={200}
                  className="w-auto h-auto max-w-full max-h-20 sm:max-h-24 md:max-h-28 object-contain"
                  sizes="(max-width: 640px) 22vw, (max-width: 1024px) 18vw, 14vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
