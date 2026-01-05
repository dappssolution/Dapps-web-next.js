/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Works() {
  const { t, language } = useLanguage();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);

  // Original Data
  const projects = useMemo(
    () => [
      {
        id: 1,
        type: "image",
        src: "/workslide-1.jpg",
        alt: "Business Person",
        title: { en: "Corporate Vision", ar: "رؤية الشركات" },
        category: { en: "Photography", ar: "تصارير" },
        number: "01",
      },
      {
        id: 2,
        type: "image",
        src: "/workslide-4.jpg",
        alt: "Brand Identity",
        title: { en: "Brand Identity Solutions", ar: "حلول هوية العلامة التجارية" },
        category: { en: "Brand Strategy", ar: "استراتيجية العلامة" },
        number: "02",
      },
      {
        id: 3,
        type: "image",
        src: "/workslide-5.jpg",
        alt: "App Development",
        title: { en: "End-to-End App Development", ar: "تطوير التطبيقات" },
        category: { en: "Development", ar: "تطوير" },
        number: "03",
      },
      {
        id: 4,
        type: "image",
        src: "/workslide-2.jpg",
        alt: "Strategy Meeting",
        title: { en: "Strategic Planning", ar: "التخطيط الاستراتيجي" },
        category: { en: "Consulting", ar: "استشارات" },
        number: "04",
      },
      {
        id: 5,
        type: "image",
        src: "/workslide-3.jpg",
        alt: "Tech Solution",
        title: { en: "Digital Innovation", ar: "الابتكار الرقمي" },
        category: { en: "Technology", ar: "تكنولوجيا" },
        number: "05",
      },
    ],
    []
  );

  // Desktop only: Duplicate data for infinite loop
  const desktopProjects = [...projects, ...projects];

  return (
    <section
      className="relative min-h-screen w-full bg-[#0a0a0a] py-16 lg:py-32 flex flex-col justify-center overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/work-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="container mx-auto z-10 h-full flex flex-col relative">
        {/* Header Section */}
        <div className="px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-[#5a189a] font-bold tracking-widest text-sm uppercase mb-2">
              {t("works.subtitle") || "PORTFOLIO"}
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t("works.title") || "Selected Works"}
            </h1>
          </div>

          <Link
            href="/works"
            className="hidden md:flex group items-center gap-3 text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>{t("clients.viewAll")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* =========================================
            MOBILE VIEW (Vertical Grid)
            Hidden on md/lg screens
           ========================================= */}
        <div className="md:hidden flex flex-col gap-6 px-6 pb-20">
          {projects.map((project) => (
            <ProjectCardMobile
              key={project.id}
              project={project}
              language={language}
            />
          ))}
          {/* Mobile View All Button */}
          <div className="mt-6">
            <Link
              href="/works"
              className="flex w-full justify-center items-center gap-2 text-white border border-white/20 rounded-full px-6 py-4 hover:bg-white hover:text-black transition-all"
            >
              <span>{t("clients.viewAll")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* =========================================
            DESKTOP VIEW (Horizontal Marquee)
            Hidden on mobile
           ========================================= */}
        <div
          className="hidden md:flex w-full relative py-10 lg:py-12"
          onMouseEnter={() => setIsHoveringContainer(true)}
          onMouseLeave={() => {
            setIsHoveringContainer(false);
            setActiveId(null);
          }}
        >
          {/* The scrolling track */}
          <div
            className={cn(
              "flex gap-6 h-[500px] lg:h-[600px] w-max animate-marquee pl-6",
              (isHoveringContainer || activeId !== null) && "paused"
            )}
          >
            {desktopProjects.map((project, index) => (
              <ProjectCardDesktop
                key={`${project.id}-desktop-${index}`}
                project={project}
                activeId={activeId}
                setActiveId={setActiveId}
                language={language}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Styles for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        [dir="rtl"] .animate-marquee {
          animation: marquee-rtl 40s linear infinite;
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}

// ==========================================
// COMPONENT: Mobile Card (Simplified Layout)
// ==========================================
const ProjectCardMobile = ({ project, language }: any) => {
  return (
    <div className="relative w-full aspect-[4/5] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <Image
        src={project.src}
        alt={project.alt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      {/* Dark Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <span className="font-mono text-xl text-white">{project.number}</span>
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <div>
          <p className="text-[#5a189a] text-xs font-bold tracking-wider uppercase mb-2">
            {project.category[language] || project.category.en}
          </p>
          <h3 className={cn("text-white text-3xl font-bold leading-tight", language === 'ar' && "font-arabic")}>
            {project.title[language] || project.title.en}
          </h3>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENT: Desktop Card (Interactive Motion)
// ==========================================
const ProjectCardDesktop = ({
  project,
  activeId,
  setActiveId,
  language,
}: any) => {
  const isActive = activeId === project.id;
  const isBlur = activeId !== null && !isActive;

  return (
    <motion.div
      layout
      onHoverStart={() => setActiveId(project.id)}
      onHoverEnd={() => setActiveId(null)}
      className={cn(
        "relative overflow-hidden rounded-2xl cursor-pointer border border-white/10 h-full",
        "bg-zinc-900/40 backdrop-blur-md"
      )}
      initial={false}
      animate={{
        width: isActive ? 600 : 280,
        opacity: isBlur ? 0.3 : 1, // Dim inactive cards
      }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
    >
      <Image
        src={project.src}
        alt={project.alt}
        fill
        className={cn(
          "object-cover transition-all duration-700 ease-out",
          isActive ? "scale-105 blur-0 grayscale-0" : "scale-100 blur-sm grayscale-[50%]"
        )}
      />

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-500",
          isActive ? "bg-black/30" : "bg-black/60"
        )}
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <span
            className={cn(
              "font-mono text-xl transition-colors duration-300",
              isActive ? "text-white" : "text-white/40"
            )}
          >
            {project.number}
          </span>

          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-md transition-all duration-300",
              isActive
                ? "bg-white text-black border-white rotate-45 scale-110"
                : "bg-transparent text-white/50 border-white/20"
            )}
          >
            <ArrowUpRight size={24} />
          </div>
        </div>

        {/* Center Vertical Text (When inactive) */}
        <AnimatePresence>
          {!isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="text-white/60 font-bold text-2xl tracking-[0.2em] uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                {project.category[language] || project.category.en}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Content (Active only) */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={false}
            animate={{
              y: isActive ? 0 : 100,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[#c084fc] text-sm font-bold tracking-widest mb-2 uppercase">
              {project.category[language] || project.category.en}
            </p>
            <h3 className={cn("text-white text-4xl font-bold leading-tight", language === 'ar' && "font-arabic")}>
              {project.title[language] || project.title.en}
            </h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};