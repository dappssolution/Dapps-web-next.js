"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const row1Logos = [
  { src: "/images/client-who-trust-us/Atom.png", alt: "Atom" },
  { src: "/images/client-who-trust-us/codeverse.PNG", alt: "Codeverse" },
  { src: "/images/client-who-trust-us/SN Institute of Technology.png", alt: "SN Institute" },
  { src: "/images/client-who-trust-us/Empower.png", alt: "Empower" },
  { src: "/images/client-who-trust-us/zendo.png", alt: "Zendo" },
  { src: "/images/client-who-trust-us/zendo-arabic-black-logo.png", alt: "Zendo Arabic" },
  { src: "/images/client-who-trust-us/zain logo2.png", alt: "Zain" },
  { src: "/images/client-who-trust-us/IMG_6265.PNG", alt: "Client Logo" },
  { src: "/images/client-who-trust-us/IMG_6266-removebg-preview.png", alt: "Client Logo" },
  { src: "/images/client-who-trust-us/IMG_6264.PNG", alt: "Client Logo" },
  { src: "/images/client-who-trust-us/IMG_6262.PNG", alt: "Client Logo" },
  { src: "/images/client-who-trust-us/IMG_6257.PNG", alt: "Client Logo" },
  { src: "/images/client-who-trust-us/IMG_6255.PNG", alt: "Client Logo" },
];

const row2Logos = [
  { src: "/images/client-who-trust-us/Tokyo__2-removebg-preview.PNG", alt: "Tokyo" },
  { src: "/images/client-who-trust-us/Shawarma_Fusion_logo_design__1__2-removebg-preview.png", alt: "Shawarma Fusion" },
  { src: "/images/client-who-trust-us/delmon_logo_bg-removebg-preview.png", alt: "Delmon" },
  { src: "/images/client-who-trust-us/noor.png", alt: "Noor" },
  { src: "/images/client-who-trust-us/friends logo (1) 2.png", alt: "Friends" },
  { src: "/images/client-who-trust-us/City-removebg-preview.png", alt: "City" },
  { src: "/images/client-who-trust-us/cars.PNG", alt: "Cars" },
  { src: "/images/client-who-trust-us/Myoutlet logo-01.png", alt: "MyOutlet" },
  { src: "/images/client-who-trust-us/Sales.png", alt: "Sales" },
  { src: "/images/client-who-trust-us/JV_gold_2-removebg-preview (2).png", alt: "JV Gold" },
  { src: "/images/client-who-trust-us/Gc 2.png", alt: "GC" },
  { src: "/images/client-who-trust-us/jpc.png", alt: "JPC" },
  { src: "/images/client-who-trust-us/black-logo.png", alt: "Client Logo" },
];

const LogoItem = ({ logo }: { logo: { src: string; alt: string } }) => (
  <div className="flex-shrink-0 inline-flex items-center mx-3 md:mx-5">
    <div className="bg-gray-50 border border-gray-200 shadow-sm rounded-2xl px-5 py-3 md:px-7 md:py-4 flex items-center justify-center" style={{ width: 150, height: 70 }}>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={120}
        height={60}
        style={{ height: 40, width: "auto", maxWidth: 120 }}
        className="object-contain"
        loading="lazy"
      />
    </div>
  </div>
);

const ClientsSection = () => {
  const { language } = useLanguage();
  return (
    <section className="md:py-12 py-6 w-full bg-white overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 tracking-tight text-gray-900">
        {language === "ar" ? "بفخر نتعاون مع" : "Proudly Associated with"}
      </h2>

      {/* Row 1 — scrolls left */}
      <div className="relative w-full overflow-hidden mb-5 md:mb-7">
        <div className="animate-marquee-left flex whitespace-nowrap">
          {row1Logos.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
          {/* Duplicate for seamless loop */}
          {row1Logos.map((logo, i) => (
            <LogoItem key={`dup-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-right flex whitespace-nowrap">
          {row2Logos.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
          {/* Duplicate for seamless loop */}
          {row2Logos.map((logo, i) => (
            <LogoItem key={`dup-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
