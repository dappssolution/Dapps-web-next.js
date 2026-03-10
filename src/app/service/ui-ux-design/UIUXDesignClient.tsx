"use client";
import ServiceDetailAccordion from "@/components/services-innerpages/ServiceDetailAccordian";
import ServiceDetailBanner from "@/components/services-innerpages/ServiceDetailBanner";
import ServiceDetailMain from "@/components/services-innerpages/ServiceDetailMain";
import { serviceDetails } from "../service-detail-contents";
import { useLanguage } from "@/contexts/LanguageContext";
import FaqAccordion from "@/components/faqAccordion";
import { uiuxFaqData } from "@/components/uiuxFaqData";

export default function UIUXDesignClient() {
  const { language } = useLanguage();
  const content = serviceDetails[language].uiux;
  return (
    <>
      <ServiceDetailBanner {...content.banner} />
      <ServiceDetailMain {...content.main} />
      <ServiceDetailAccordion {...content.accordion} />
      {/* FAQ Section for UI/UX Design */}
      <section className="max-w-5xl mx-auto my-16 px-4">
        <FaqAccordion faqItems={uiuxFaqData} />
      </section>
    </>
  );
}
