"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/images/client-who-trust-us/Atom.png",
    alt: "Atom",
  },
  {
    src: "/images/client-who-trust-us/delmon_logo_bg-removebg-preview.png",
    alt: "Delmon",
  },
  {
    src: "/images/client-who-trust-us/Empower.png",
    alt: "Empower",
  },
  {
    src: "/images/client-who-trust-us/friends logo (1) 2.png",
    alt: "Friends",
  },
  {
    src: "/images/client-who-trust-us/Gc 2.png",
    alt: "GC",
  },
  {
    src: "/images/client-who-trust-us/IMG_6252.PNG",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/IMG_6255.PNG",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/IMG_6257.PNG",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/JV_gold_2-removebg-preview (2).png",
    alt: "JV Gold",
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
    src: "/images/client-who-trust-us/Shawarma_Fusion_logo_design__1__2-removebg-preview.png",
    alt: "Shawarma Fusion",
  },
  {
    src: "/images/client-who-trust-us/Tokyo__2-removebg-preview.png",
    alt: "Tokyo",
  },
  {
    src: "/images/client-who-trust-us/WhatsApp Image 2026-03-02 at 12.31.46 PM (1).jpeg",
    alt: "Client Logo",
  },
];

export default function ClientTrustLogos() {
  return (
    <section className="relative w-full py-2 md:py-4 px-4 bg-white overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
            Clients Who Trust Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-light">
            Trusted by leading brands to deliver innovative digital solutions
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10 max-w-6xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-24 py-2 flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={320}
                  height={160}
                  className={`w-auto h-auto max-w-full max-h-16 object-contain ${index === 12 ? 'scale-110' : ''}`}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 14vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
