import AboutBoxes from "@/components/aboutBoxes";
import ApproachSection from "@/components/approachSection";
import ClientReviews from "@/components/clientReview";
import TeamDescription from "@/components/teamDescription";
import AboutBanner from "@/components/aboutBanner";
import FaqAccordion from "@/components/faqAccordion";

export default function About() {
    return (
        
                <div>
                        <AboutBanner/>
                        <TeamDescription/>
                        <AboutBoxes/> 
                        <ApproachSection/>         
                        <ClientReviews/>
                        {/* FAQ Section for About page - custom data */}
                        <section className="max-w-5xl mx-auto my-16 px-4">
                                <FaqAccordion faqItems={[
                                    {
                                        question: "Who is Dapps Solutions?",
                                        answer: "Dapps Solutions is a global digital transformation company that delivers AI-powered innovation and intelligent solutions to businesses worldwide, with a presence in India, the UAE (Dubai), and Qatar.",
                                    },
                                    {
                                        question: "What does Dapps Solutions do?",
                                        answer: "Dapps Solutions helps brands grow with cutting-edge AI-powered websites and apps, intelligent automation, custom software, ERP & CRM systems, digital marketing, and branding solutions designed for measurable business impact.",
                                    },
                                    {
                                        question: "Where does Dapps Solutions operate?",
                                        answer: "We have physical locations in:\n● Dubai, United Arab Emirates\n● Calicut (Kerala), India\n● Doha, Qatar",
                                    },
                                    {
                                        question: "What industries does Dapps Solutions serve?",
                                        answer: "Dapps Solutions works with startups to enterprises across sectors such as technology, e-commerce, healthcare, education, real estate, corporate services, and more — helping each business improve efficiency and revenue.",
                                    },
                                    {
                                        question: "How does Dapps Solutions help businesses grow?",
                                        answer: "We help businesses grow through:\n● AI-driven digital transformation strategies\n● Search engine optimized (SEO & programmatic SEO) content\n● Advanced automation for workflow and processes\n● Performance marketing and branding\n● Result-oriented software and application development. These services are designed to improve visibility, traffic, and conversions.",
                                    },
                                    {
                                        question: "What makes Dapps Solutions different from a traditional agency?",
                                        answer: "Unlike conventional agencies, Dapps Solutions integrates AI automation, SEO programmatic strategies, data-driven systems, and full-stack digital services — ensuring scalable growth, improved ROI, and future-ready digital assets.",
                                    },
                                ]} />
                        </section>
                </div>
    )
}
