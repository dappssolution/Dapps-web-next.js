"use client";
import ServiceDetailAccordion from "@/components/services-innerpages/ServiceDetailAccordian";
import ServiceDetailBanner from "@/components/services-innerpages/ServiceDetailBanner";
import ServiceDetailMain from "@/components/services-innerpages/ServiceDetailMain";
import { serviceDetails } from "../service-detail-contents";
import { useLanguage } from "@/contexts/LanguageContext";
import FaqAccordion from "@/components/faqAccordion";
import { ecommerceFaq } from "@/components/ecommerceFaqData";

export default function EcommerceDevelopmentMarketingClient() {
  const { language } = useLanguage();
  const content = serviceDetails[language].ecommerce;
  return (
    <>
      <ServiceDetailBanner {...content.banner} />
      <ServiceDetailMain {...content.main} />
      <ServiceDetailAccordion {...content.accordion} />
      <FaqAccordion faqItems={ecommerceFaq} />
    </>
  );
}
