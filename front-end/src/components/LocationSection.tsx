"use client"


import type React from "react"
import { FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { useLanguage } from "../contexts/LanguageContext";

export default function LocationsSection() {
  const { language } = useLanguage();
  const locations = [
    {
      id: 1,
      name: language === "ar" ? "دبي، الإمارات العربية المتحدة" : "Dubai, United Arab Emirates",
      address:
        language === "ar"
          ? "دبي، الإمارات العربية المتحدة"
          : "Dubai, United Arab Emirates",
      phones: [
        { number: "+971 54 254 5909", whatsapp: "+971542545909" },
        { number: "+971 54 487 8929", whatsapp: "+971544878929" },
      ],
      coordinates: { lat: 25.2048, lng: 55.2708 },
    },
    {
      id: 2,
      name: language === "ar" ? "كاليكوت، الهند" : "Calicut, India",
      address:
        language === "ar"
          ? "كيه بي إم أركيد، طريق كاليكوت، فالانشيري، كيرالا، الهند"
          : "KPM Arcade, Calicut Road, Valanchery, Kerala, India",
      phones: [
        { number: "+91 99474 00278", whatsapp: "+919947400278" },
      ],
      coordinates: { lat: 11.2588, lng: 75.7804 },
    },
    {
      id: 3,
      name: language === "ar" ? "الدوحة، قطر" : "Doha, Qatar",
      address:
        language === "ar"
          ? "الدوحة، قطر"
          : "Doha, Qatar",
      phones: [
        { number: "+974 7747 3725", whatsapp: "+97477473725" },
      ],
      coordinates: { lat: 25.2854, lng: 51.5310 },
    },
  ];


  const handleLocationClick = (coordinates: { lat: number; lng: number }) => {
    const mapsUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`
    window.open(mapsUrl, "_blank")
  }

  return (
    <section className={`w-full bg-gradient-to-b from-slate-50 to-white py-12 md:py-16 lg:py-20${language === "ar" ? " rtl" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <p className="text-sm md:text-base text-blue-600 font-semibold mb-3 uppercase tracking-wide">
            {language === "ar" ? "مواقعنا العالمية" : "Our Global Presence"}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{ color: "#000539" }}
          >
            {language === "ar"
              ? "لاستكشاف فرص عمل أو أعمال أخرى، تواصل معنا"
              : "To explore other business opportunities or career options, reach out to us"}
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ direction: "ltr" }}>
          {locations.map((location) => (
            <div
              key={location.id}
              className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Location Name with Icon */}
                <div className="mb-5 flex items-start gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl shadow-md flex-shrink-0"
                    style={{ backgroundColor: "#000539", color: "white" }}
                  >
                    <FiMapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold" style={{ color: "#000539" }}>
                      {location.name}
                    </h3>
                  </div>
                </div>

                {/* Address */}
                <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-600">{location.address}</p>

                {/* Phone Numbers with WhatsApp */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  {location.phones.map((phone, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex items-center gap-2 flex-1">
                        <FiPhone size={16} style={{ color: "#000539" }} className="flex-shrink-0" />
                        <a
                          href={`tel:${phone.number.replace(/\s/g, "")}`}
                          className="text-sm md:text-base font-medium transition-colors duration-200 hover:text-blue-600"
                          style={{ color: "#000539" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {phone.number}
                        </a>
                      </div>
                      <a
                        href={`https://wa.me/${phone.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-300 transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                        title="Chat on WhatsApp"
                      >
                        <FaWhatsapp className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-medium text-green-700 hidden sm:inline">
                          {language === "ar" ? "محادثة" : "Chat"}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>

                {/* View on Map Button */}
                <button
                  onClick={() => handleLocationClick(location.coordinates)}
                  className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#000539] to-[#1a1f6b] text-white font-medium text-sm hover:from-[#1a1f6b] hover:to-[#2a2f8b] transition-all duration-300 group/btn"
                >
                  <FiMapPin size={16} />
                  <span>{language === "ar" ? "عرض على الخريطة" : "View on Map"}</span>
                  <FiArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
