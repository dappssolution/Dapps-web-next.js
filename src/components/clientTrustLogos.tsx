"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    src: "/images/client-who-trust-us/zain logo2.png",
    alt: "Zain",
  },
  {
    src: "/images/client-who-trust-us/IMG_6265.PNG",
    alt: "Client Logo",
  },
  {
    src: "/images/client-who-trust-us/IMG_6266-removebg-preview.png",
    alt: "Client Logo",
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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Split logos into rows of 3 for the mobile slider
  const rows: typeof logos[] = [];
  for (let i = 0; i < logos.length; i += 3) {
    rows.push(logos.slice(i, i + 3));
  }
  // Pad last row to 3 if needed
  if (rows.length > 0 && rows[rows.length - 1].length < 3) {
    const lastRow = rows[rows.length - 1];
    while (lastRow.length < 3) {
      lastRow.push(logos[lastRow.length % logos.length]);
    }
  }

  const autoScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el || isPaused) return;
    // Each "page" is the full container width
    const pageWidth = el.offsetWidth;
    const maxScroll = el.scrollWidth - pageWidth;
    if (el.scrollLeft >= maxScroll - 2) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollTo({ left: el.scrollLeft + pageWidth, behavior: "smooth" });
    }
  }, [isPaused]);

  useEffect(() => {
    const interval = setInterval(autoScroll, 2500);
    return () => clearInterval(interval);
  }, [autoScroll]);

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

        {/* Mobile Auto-Scrolling Slider (3 logos per row) — visible only on small screens */}
        <div
          className="md:hidden overflow-hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {rows.map((row, pageIdx) => (
              <div
                key={pageIdx}
                className="snap-start shrink-0 w-full grid grid-cols-3 gap-x-4 gap-y-4 px-2 py-2"
              >
                {row.map((logo, logoIdx) => (
                  <div
                    key={`${pageIdx}-${logoIdx}`}
                    className="h-20 flex items-center justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={100}
                      className="w-auto h-auto max-w-full max-h-12 object-contain"
                      sizes="30vw"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Dots indicator */}
          <div className="flex justify-center gap-1.5 mt-3">
            {rows.map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Grid — hidden on small screens, 13 per row = 2 equal rows */}
        <div className="hidden md:grid md:grid-cols-13 gap-x-4 gap-y-4 max-w-6xl mx-auto place-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-16 w-full p-1 flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="w-auto h-auto max-w-full max-h-9 object-contain"
                  sizes="(max-width: 1024px) 10vw, 7vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
