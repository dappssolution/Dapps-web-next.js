"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/images/client-who-trust-us/BMR restaurant 2.png",
    alt: "BMR Restaurant",
  },
  {
    src: "/images/client-who-trust-us/delmon logo 2.png",
    alt: "Delmon",
  },
  {
    src: "/images/client-who-trust-us/e1af5dcb-c368-412c-b345-fc79bf071be6.png",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/eiLTL4S67771 (1).png",
    alt: "Client Logo",
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
    src: "/images/client-who-trust-us/logo-2 2.png",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/PhotoshopExtension_Image (3) 2.png",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/Shawarma Fusion logo design (1) 2.png",
    alt: "Shawarma Fusion",
  },
  {
    src: "/images/client-who-trust-us/Tokyo  2.png",
    alt: "Tokyo",
  },
  {
    src: "/images/client-who-trust-us/WhatsApp Image 2026-03-02 at 12.31.35 PM (1).jpeg",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/WhatsApp Image 2026-03-02 at 12.31.35 PM.jpeg",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/WhatsApp Image 2026-03-02 at 12.31.46 PM (1).jpeg",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/WhatsApp Image 2026-03-02 at 12.31.46 PM.jpeg",
    alt: "Client Logo",
  },
];

export default function ClientTrustLogos() {
  return (
    <section className="relative w-full py-20 md:py-28 px-4 bg-gradient-to-b from-black via-[#0a0015] to-black overflow-hidden">
      {/* Decorative gradient backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#5A189A]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#040150]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5A189A]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Clients Who Trust Us
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-light">
            Trusted by leading brands to deliver innovative digital solutions
          </p>
        </motion.div>

        {/* Logos Grid - 7 columns, responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4 lg:gap-5 max-w-6xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative h-12 sm:h-14 md:h-14 lg:h-16 flex items-center justify-center rounded-lg border border-white/10 p-2 bg-white/5"
            >
              {/* Logo Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
