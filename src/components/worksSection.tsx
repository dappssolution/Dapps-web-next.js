/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function Works() {
  const { t, language } = useLanguage();
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const mobileViewportRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pausedUntilRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);
  const singleSetWidthRef = useRef<number>(0);
  const pointerDragRef = useRef({ isDragging: false, pointerId: -1, x: 0 });
  const desktopDragRef = useRef({ isDragging: false, startX: 0, startScrollLeft: 0 });

  // Original Data
  const projects = useMemo(
    () => [
      {
        id: 1,
        type: "image",
        src: "/images/works/corporate-vision.jpeg",
        alt: "Corporate Vision",
        title: { en: "Corporate Vision", ar: "رؤية الشركات" },
        category: { en: "Photography", ar: "تصارير" },
        number: "01",
      },
      {
        id: 2,
        type: "image",
        src: "/images/works/brand-identity.jpeg",
        alt: "Brand Identity Solutions",
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
        src: "/images/works/statergic-planing.jpeg",
        alt: "Strategic Planning",
        title: { en: "Strategic Planning", ar: "التخطيط الاستراتيجي" },
        category: { en: "Consulting", ar: "استشارات" },
        number: "04",
      },
      {
        id: 5,
        type: "image",
        src: "/images/works/digital-innovotion.jpeg",
        alt: "Tech Solution",
        title: { en: "Digital Innovation", ar: "الابتكار الرقمي" },
        category: { en: "Technology", ar: "تكنولوجيا" },
        number: "05",
      },
      {
        id: 6,
        type: "image",
        src: "/images/works/ai-agent.jpg",
        alt: "AI Agents",
        title: { en: "AI Agents Integration", ar: "دمج وكلاء الذكاء الاصطناعي" },
        category: { en: "Artificial Intelligence", ar: "ذكاء اصطناعي" },
        number: "06",
      },
      {
        id: 7,
        type: "image",
        src: "/images/works/web-development.jpeg",
        alt: "Web Development",
        title: { en: "Web Development Excellence", ar: "تطوير الويب المتميز" },
        category: { en: "Web Development", ar: "تطوير الويب" },
        number: "07",
      },
      {
        id: 8,
        type: "image",
         src: "/images/works/digital-marketing (1).jpg",
        alt: "Digital Marketing",
        title: { en: "Digital Marketing Campaigns", ar: "حملات التسويق الرقمي" },
        category: { en: "Marketing", ar: "تسويق" },
        number: "08",
      },
      {
        id: 9,
        type: "image",
        src: "/images/works/erp and crm.jpg",
        alt: "ERP & CRM Software",
        title: { en: "ERP & CRM Solutions", ar: "حلول ERP و CRM" },
        category: { en: "Software", ar: "برمجيات" },
        number: "09",
      },
      {
        id: 10,
        type: "image",
        src: "/images/works/Business_Card_Mockup_3.jpg.jpeg",
        alt: "Business Card Mockup",
        title: { en: "Business Card Design", ar: "تصميم بطاقة العمل" },
        category: { en: "Branding", ar: "العلامة التجارية" },
        number: "10",
      },
      {
        id: 11,
        type: "image",
        src: "/images/works/Citylight_Mockup_2.jpg.jpeg",
        alt: "Citylight Mockup",
        title: { en: "Outdoor Advertising", ar: "إعلانات خارجية" },
        category: { en: "Advertising", ar: "إعلانات" },
        number: "11",
      },
      {
        id: 12,
        type: "image",
        src: "/images/works/elegence mockup new.jpg.jpeg",
        alt: "Elegance Mockup",
        title: { en: "Elegant Branding", ar: "العلامة التجارية الأنيقة" },
        category: { en: "Branding", ar: "العلامة التجارية" },
        number: "12",
      },
      {
        id: 13,
        type: "image",
        src: "/images/works/my outlet app post 1.jpg.jpeg",
        alt: "My Outlet App",
        title: { en: "My Outlet App Launch", ar: "إطلاق تطبيق ماي أوتليت" },
        category: { en: "App Development", ar: "تطوير التطبيقات" },
        number: "13",
      },
      {
        id: 14,
        type: "image",
        src: "/images/works/bahcar.jpg.jpeg",
        alt: "Car Website Development",
        title: { en: "Car Website Development Specialization", ar: "تخصص تطوير مواقع السيارات" },
        category: { en: "Web Development", ar: "تطوير الويب" },
        number: "14",
      },
    ],
    []
  );

  const onDesktopPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = desktopScrollRef.current;
    if (!el) return;
    desktopDragRef.current.isDragging = true;
    desktopDragRef.current.startX = e.clientX;
    desktopDragRef.current.startScrollLeft = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  };

  const onDesktopPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = desktopScrollRef.current;
    if (!el || !desktopDragRef.current.isDragging) return;
    e.preventDefault();
    const delta = e.clientX - desktopDragRef.current.startX;
    const direction = language === 'ar' ? 1 : -1;
    el.scrollLeft = desktopDragRef.current.startScrollLeft + direction * delta;
  };

  const onDesktopPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = desktopScrollRef.current;
    if (!el) return;
    desktopDragRef.current.isDragging = false;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      // no-op
    }
    el.style.cursor = "grab";
  };

  const syncMobileTrack = () => {
    const track = mobileTrackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const pauseMobileAutoScroll = () => {
    pausedUntilRef.current = Date.now() + 2000;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      pausedUntilRef.current = 0;
    }, 2000);
  };

  useEffect(() => {
    const viewport = mobileViewportRef.current;
    const firstSet = firstSetRef.current;
    if (!viewport || !firstSet) return;

    const measure = () => {
      singleSetWidthRef.current = firstSet.getBoundingClientRect().width;
      if (singleSetWidthRef.current <= 0) return;
      while (offsetRef.current <= -singleSetWidthRef.current) offsetRef.current += singleSetWidthRef.current;
      while (offsetRef.current > 0) offsetRef.current -= singleSetWidthRef.current;
      syncMobileTrack();
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(firstSet);
    resizeObserver.observe(viewport);

    let last = performance.now();
    const speedPxPerSec = 40;

    const animate = (now: number) => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const shouldPause = Date.now() < pausedUntilRef.current;
      if (isMobile && !shouldPause && singleSetWidthRef.current > 0 && !pointerDragRef.current.isDragging) {
        const dt = (now - last) / 1000;
        offsetRef.current -= speedPxPerSec * dt;
        if (offsetRef.current <= -singleSetWidthRef.current) {
          offsetRef.current += singleSetWidthRef.current;
        }
        syncMobileTrack();
      }
      last = now;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  const onMobilePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const viewport = mobileViewportRef.current;
    if (!viewport) return;
    pointerDragRef.current.isDragging = true;
    pointerDragRef.current.pointerId = e.pointerId;
    pointerDragRef.current.x = e.clientX;
    pauseMobileAutoScroll();
    viewport.setPointerCapture(e.pointerId);
  };

  const onMobilePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDragRef.current.isDragging) return;
    const deltaX = e.clientX - pointerDragRef.current.x;
    pointerDragRef.current.x = e.clientX;
    offsetRef.current += deltaX;
    const loopWidth = singleSetWidthRef.current;
    if (loopWidth > 0) {
      while (offsetRef.current <= -loopWidth) offsetRef.current += loopWidth;
      while (offsetRef.current > 0) offsetRef.current -= loopWidth;
    }
    syncMobileTrack();
  };

  const onMobilePointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const viewport = mobileViewportRef.current;
    if (!viewport) return;
    pointerDragRef.current.isDragging = false;
    pauseMobileAutoScroll();
    try {
      viewport.releasePointerCapture(e.pointerId);
    } catch {
      // no-op
    }
  };

  return (
    <section
      className="relative min-h-screen w-full bg-[#0a0a0a] py-6 lg:py-10 flex flex-col justify-center overflow-hidden"
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
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
          <div className="text-left w-full md:w-auto">
            <h2 className="text-white font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-left max-w-4xl">
              Our Work
            </h2>
            <p className="mt-3 text-[#cfcfd4] text-base sm:text-lg md:text-xl font-medium leading-relaxed text-left max-w-2xl">
              Crafting digital experiences that help brands grow and stand out.
            </p>
          </div>

          <Link
            href="/works"
            className="hidden md:flex group items-center gap-3 text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>{t("clients.viewAll")}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="md:hidden w-full pb-12">
          <div
            ref={mobileViewportRef}
            onPointerDown={onMobilePointerDown}
            onPointerMove={onMobilePointerMove}
            onPointerUp={onMobilePointerEnd}
            onPointerCancel={onMobilePointerEnd}
            onTouchStart={pauseMobileAutoScroll}
            onTouchEnd={pauseMobileAutoScroll}
            className="overflow-hidden px-4 sm:px-6 touch-pan-y select-none"
          >
            <div ref={mobileTrackRef} className="flex w-max gap-4 will-change-transform">
              <div ref={firstSetRef} className="flex gap-4">
                {projects.map((project) => (
                  <div key={`mobile-a-${project.id}`} className="w-[82vw] max-w-[300px] shrink-0">
                    <ProjectCardMobile project={project} language={language} />
                  </div>
                ))}
              </div>
              <div className="flex gap-4" aria-hidden="true">
                {projects.map((project) => (
                  <div key={`mobile-b-${project.id}`} className="w-[82vw] max-w-[300px] shrink-0">
                    <ProjectCardMobile project={project} language={language} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-6 mt-6">
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
            DESKTOP VIEW (Simple Drag Slider)
            Hidden on mobile
           ========================================= */}
        <div className="hidden md:block w-full relative py-10 lg:py-12">
          {/* Manual Scroll Buttons */}
          <button
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-[#222] text-white rounded-full p-2 shadow-lg hover:bg-[#5a189a] transition"
            style={{outline: 'none'}}
            onClick={() => desktopScrollRef.current?.scrollBy({ left: -340, behavior: "smooth" })}
            aria-label="Scroll Left"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-[#222] text-white rounded-full p-2 shadow-lg hover:bg-[#5a189a] transition"
            style={{outline: 'none'}}
            onClick={() => desktopScrollRef.current?.scrollBy({ left: 340, behavior: "smooth" })}
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <div
            ref={desktopScrollRef}
            onPointerDown={onDesktopPointerDown}
            onPointerMove={onDesktopPointerMove}
            onPointerUp={onDesktopPointerEnd}
            onPointerCancel={onDesktopPointerEnd}
            className="flex gap-4 h-[320px] md:h-[370px] lg:h-[420px] overflow-x-auto overflow-y-hidden px-2 cursor-grab select-none snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ touchAction: "pan-y" }}
          >
            {[...projects, ...projects].map((project, idx) => (
                  <div className="shrink-0 w-[230px] md:w-[280px] lg:w-[340px]" key={`desktop-${project.id}-${idx}`}>
                    <ProjectCardDesktop
                      project={project}
                      language={language}
                    />
                  </div>
            ))}
          </div>
        </div>
      </div>
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
  language,
}: any) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl cursor-pointer border border-white/10 h-full snap-start shrink-0 w-[230px] lg:w-[340px]",
        "bg-zinc-900/40 backdrop-blur-md"
      )}
    >
      <Image
        src={project.src}
        alt={project.alt}
        width={920}
        height={1200}
        className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.02]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <span
            className="font-mono text-xl text-white"
          >
            {project.number}
          </span>

          <div
            className="w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-md transition-all duration-300 bg-white text-black border-white"
          >
            <ArrowUpRight size={24} />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="relative overflow-hidden">
          <div>
            <p className="text-[#c084fc] text-sm font-bold tracking-widest mb-2 uppercase">
              {project.category[language] || project.category.en}
            </p>
            <h3 className={cn("text-white text-2xl lg:text-3xl font-bold leading-tight", language === 'ar' && "font-arabic")}>
              {project.title[language] || project.title.en}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
