"use client"

 
import { Poppins } from "next/font/google"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export default function WorkBanner() {
  const { t, language } = useLanguage();

  return (
    <section
      className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-32 pt-24 sm:pt-20">
        {/* Left Content */}
        <motion.div
          className={`w-full flex flex-col items-center md:items-start py-10 md:py-20 ${language === "ar" ? "text-right" : "text-center"}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading and subtitle removed as requested */}
        </motion.div>
      </div>
    </section>
  );
}
