import dynamic from 'next/dynamic';
export { metadata } from './page.metadata';

const HeroSection = dynamic(() => import("@/components/heroSection"));
const AboutSection = dynamic(() => import("@/components/aboutSection"));
const ClientTrustLogos = dynamic(() => import("@/components/clientTrustLogos"));
const ServicesSection = dynamic(() => import("@/components/services"));
const Works = dynamic(() => import("@/components/worksSection"));
const AboutBoxes = dynamic(() => import("@/components/aboutBoxes"));
const ClientReviews = dynamic(() => import("@/components/clientReview"));
import FaqAccordion from "@/components/faqAccordion";
import { homeFaqData } from "@/components/homeFaqData";

function Home() {
  return (
    <main role="main" aria-label="Homepage main content">
      {/* Hero section: ensure alt text and ARIA landmarks in HeroSection */}
      <HeroSection />
      {/* About section: ensure carousel images have alt text and loading="lazy" */}
      <AboutSection />
      {/* Client Trust Logos: 14 logos in 2 lines, responsive layout */}
      <ClientTrustLogos />
      {/* AboutBoxes: ensure interactive elements have aria-labels */} 
      <AboutBoxes />
      {/* Services section: ensure icons and cards have aria-labels */}
      <ServicesSection />
      {/* Works: ensure images have width/height and loading="lazy" */}
      <Works />
      {/* ClientReviews: ensure carousel images have alt text and loading="lazy" */}
      <ClientReviews />
      {/* FAQ Section for Home - now below AI-driven business section and above footer */}
      <section className="max-w-5xl mx-auto my-16 px-4">
        <FaqAccordion faqItems={homeFaqData} />
      </section>
    </main>
  );
}

export default Home;
