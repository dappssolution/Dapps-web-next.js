
"use client"
import React from "react";
import Link from "next/link"
import Image from "next/image"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext"

// Phone numbers data
const phoneNumbers = [
  { number: "+974 7747 3725", label: "Qatar", whatsapp: "+97477473725" },
  { number: "+971 54 254 5909", label: "Dubai", whatsapp: "+971542545909" },
  { number: "+971 54 487 8929", label: "Dubai", whatsapp: "+971544878929" },
  { number: "+91 99474 00278", label: "India", whatsapp: "+919947400278" },
];

// Locations data
const locations = {
  en: [
    { city: "Dubai", country: "United Arab Emirates" },
    { city: "Calicut", country: "India" },
    { city: "Doha", country: "Qatar" },
  ],
  ar: [
    { city: "دبي", country: "الإمارات العربية المتحدة" },
    { city: "كاليكوت", country: "الهند" },
    { city: "الدوحة", country: "قطر" },
  ],
};

function SocialLinks({ className = "" }: { className?: string }) {
  const iconBase = "text-white w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5";
  const linkBase =
    "group inline-flex items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/20 px-3 py-2";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link href="https://www.instagram.com/dapps_solutions" aria-label="Instagram" className={linkBase}>
        <FaInstagram className={iconBase} />
      </Link>
      <Link href="https://wa.me/919947400278" aria-label="WhatsApp" className={linkBase}>
        <FaWhatsapp className={iconBase} />
      </Link>
      <Link href="https://www.linkedin.com/company/dapps-solution/" aria-label="LinkedIn" className={linkBase}>
        <FaLinkedin className={iconBase} />
      </Link>
      <Link href="https://twitter.com/dapps_solutions" aria-label="Twitter" className={linkBase}>
        <FaXTwitter className={iconBase} />
      </Link>
      <Link href="https://www.facebook.com/dapps_solutions" aria-label="Facebook" className={linkBase}>
        <FaFacebook className={iconBase} />
      </Link>
    </div>
  );
}

function PhoneItem({ number, label, whatsapp }: { number: string; label: string; whatsapp: string }) {
  return (
    <div className="flex items-center gap-2 group">
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-400/50 transition-all duration-300"
        title={`WhatsApp ${label}`}
      >
        <FaWhatsapp className="w-4 h-4 text-green-400 flex-shrink-0" />
        <span className="text-white/80 text-sm whitespace-nowrap">{number}</span>
        <span className="text-white/50 text-xs hidden sm:inline">({label})</span>
      </a>
    </div>
  );
}

function LocationItem({ city, country }: { city: string; country: string }) {
  return (
    <div className="flex items-center gap-2">
      <FiMapPin className="w-4 h-4 text-blue-300 flex-shrink-0" />
      <span className="text-white/80 text-sm">
        {city}, <span className="text-white/60">{country}</span>
      </span>
    </div>
  );
}

export default function Footer() {
  const { t, language } = useLanguage();
  const [year, setYear] = React.useState<string>("");
  React.useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const currentLocations = language === 'ar' ? locations.ar : locations.en;

  return (
    <footer
      className="w-full px-4 py-10 md:py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url('/work-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}

      dir="ltr"
    >
      <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl bg-white/10 border border-white/20 backdrop-blur-lg p-6 md:p-10 flex flex-col items-center gap-8">
        {/* Logo & Social Icons Centered */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="relative h-14 w-32 md:h-16 md:w-40">
            <Image
              src="/white-logo.png"
              alt="Dapps Solutions Logo"
              fill
              sizes="(max-width: 600px) 100vw, 40vw"
              priority
              className="object-contain drop-shadow-xl"
            />
          </div>
          <div className="mt-2">
            <SocialLinks className="gap-4 md:gap-5 justify-center" />
          </div>
        </div>

        {/* Tagline Centered */}
        <div className="text-base text-white/90 max-w-xl font-light text-center px-2">
          {t('footer.tagline')}
        </div>

        {/* Navigation Links Responsive */}
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-white/80 text-sm md:text-base font-medium w-full border-t border-white/20 pt-6">
          <Link href="/" className="hover:text-white transition-colors duration-200">{t('footer.home')}</Link>
          <Link href="/about" className="hover:text-white transition-colors duration-200">{t('footer.aboutUs')}</Link>
          <Link href="/service" className="hover:text-white transition-colors duration-200">{t('footer.services')}</Link>
          <Link href="/works" className="hover:text-white transition-colors duration-200">{t('footer.works')}</Link>
          <Link href="/careers" className="hover:text-white transition-colors duration-200">{t('footer.career')}</Link>
          <Link href="/solutions" className="hover:text-white transition-colors duration-200">{t('footer.solutions')}</Link>
          <Link href="/service/web-development" className="hover:text-white transition-colors duration-200">{t('footer.webDevelopment')}</Link>
          <Link href="/service/app-development" className="hover:text-white transition-colors duration-200">{t('footer.appDevelopment')}</Link>
          <Link href="/service/branding" className="hover:text-white transition-colors duration-200">{t('footer.branding')}</Link>
          <Link href="/service/digital-marketing" className="hover:text-white transition-colors duration-200">{t('footer.digitalMarketing')}</Link>
          <Link href="/service/video-photo-editing" className="hover:text-white transition-colors duration-200">{t('footer.videoPhotoEditing')}</Link>
          <Link href="/service/ai-agents-automation" className="hover:text-white transition-colors duration-200">{t('footer.aiAgentsAutomation')}</Link>
        </nav>

        {/* Contact & Locations Section - Redesigned */}
        <div className="w-full border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Phone Numbers Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <FiPhone className="w-5 h-5 text-blue-300" />
                <h3 className="text-white font-semibold text-lg">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phoneNumbers.map((phone, index) => (
                  <PhoneItem key={index} {...phone} />
                ))}
              </div>
              {/* Email */}
              <div className="pt-2">
                <a
                  href="mailto:info@dappssolutions.com"
                  className="text-white/80 hover:text-white text-sm underline-offset-2 hover:underline transition-colors duration-200"
                >
                  {t('footer.email')}
                </a>
              </div>
            </div>

            {/* Locations Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <FiMapPin className="w-5 h-5 text-blue-300" />
                <h3 className="text-white font-semibold text-lg">
                  {language === 'ar' ? 'مواقعنا' : 'Our Locations'}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                {currentLocations.map((location, index) => (
                  <LocationItem key={index} {...location} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-white/80 shadow-lg">
        <div className="w-full md:w-auto text-center md:text-left">
          {year && t('footer.copyright').replace('{year}', year)}
        </div>
        <div className="flex gap-3 md:gap-6 w-full md:w-auto justify-center md:justify-end">
          <Link href="/privacy-policy" className="hover:underline hover:text-white transition-colors duration-200">{t('footer.privacyPolicy')}</Link>
          <Link href="/terms-of-service" className="hover:underline hover:text-white transition-colors duration-200">{t('footer.termsOfService')}</Link>
        </div>
      </div>
    </footer>
  );
}
