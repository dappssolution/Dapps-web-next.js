"use client";
import ServiceDetailAccordion from "@/components/services-innerpages/ServiceDetailAccordian";
import ServiceDetailBanner from "@/components/services-innerpages/ServiceDetailBanner";
import ServiceDetailMain from "@/components/services-innerpages/ServiceDetailMain";
import { serviceDetails } from "../service-detail-contents";
import { useLanguage } from "@/contexts/LanguageContext";
import FaqAccordion from "@/components/faqAccordion";
import { aiAgentsAutomationFaq } from "@/components/aiAgentsAutomationFaqData";

export default function AiAgentsAutomationClient() {
  const { language } = useLanguage();
  const content = serviceDetails[language].ai;
  return (
    <>
      <ServiceDetailBanner {...content.banner} />
      <ServiceDetailMain {...content.main} />
      <ServiceDetailAccordion {...content.accordion} />
      <FaqAccordion faqItems={aiAgentsAutomationFaq} />
    </>
  );
}
