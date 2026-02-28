"use client"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  
  variable: '--font-poppins',  
})


export default function RelatedWorks() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Sample data for the related works grid - using website development projects
  const relatedWorks = [
    {
      id: 1,
      titleKey: 'work.projects.manever.title',
      descriptionKey: 'work.projects.manever.description',
      image: "/manaver/one.png",
      route: "/works/manever",
    },
    {
      id: 2,
      titleKey: 'work.projects.biriyani.title',
      descriptionKey: 'work.projects.biriyani.description',
      image: "/images/Branding/bandb.png",
      route: "/works/biriyani-and-beyond",
    },
    {
      id: 3,
      titleKey: 'work.projects.silhouettes.title',
      descriptionKey: 'work.projects.silhouettes.description',
      image: "/images/Branding/sihouettes.png",
      route: "/works/silhouettes-by-saleena",
    },
    
  ]

  // Auto-scroll logic
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 220, behavior: "smooth" });
        // If at end, scroll back to start
        if (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >= sliderRef.current.scrollWidth) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`container mx-auto px-2 sm:px-5 md:px-10 py-8 md:py-16 ${poppins.className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium mb-2">Related Works</h2>
        <Link href="/works" className="text-blue-500 hover:underline text-xs sm:text-sm md:text-base">
          View All
        </Link>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-3 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {relatedWorks.map((work) => (
          <Link key={work.id} href={work.route} className="block snap-start min-w-[220px] sm:min-w-[260px] md:min-w-[320px]">
            <div className="project-card border border-gray-200 cursor-pointer rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300" style={{ minWidth: "200px", maxWidth: "320px" }}>
              <div
                className="mb-2 md:mb-3 overflow-hidden relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredProjectId(work.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={t(work.titleKey)}
                  width={220}
                  height={140}
                  className="w-full h-[120px] sm:h-[160px] md:h-[200px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
                {hoveredProjectId === work.id && (
                  <div
                    className="absolute pointer-events-none transition-transform duration-100 ease-out"
                    style={{
                      left: mousePosition.x,
                      top: mousePosition.y,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="flex items-center justify-center w-[40px] md:w-[50px] h-[40px] md:h-[50px] gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md bg-white/20">
                      <span className={`text-white text-xs md:text-sm font-light ${poppins.className}`}>View</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="px-2 md:px-3 pb-3 md:pb-4">
                <h3 className={`text-sm md:text-base lg:text-lg font-medium ${poppins.className}`}>{t(work.titleKey)}</h3>
                <p className={`text-xs md:text-sm text-gray-600 ${poppins.className}`}>{t(work.descriptionKey)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}