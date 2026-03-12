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
                        {/* FAQ Section for About page - bilingual */}
                        <section className="max-w-5xl mx-auto my-16 px-4">
                                <FaqAccordion faqItems={{
                                    en: [
                                        {
                                            question: "Who is Dapps Solutions?",
                                            answer: "Dapps Solutions is a global digital transformation company that delivers AI-powered innovation and intelligent solutions to businesses worldwide, with a presence in India, the UAE (Dubai), and Qatar."
                                        },
                                        {
                                            question: "What does Dapps Solutions do?",
                                            answer: "Dapps Solutions helps brands grow with cutting-edge AI-powered websites and apps, intelligent automation, custom software, ERP & CRM systems, digital marketing, and branding solutions designed for measurable business impact."
                                        },
                                        {
                                            question: "Where does Dapps Solutions operate?",
                                            answer: "We have physical locations in:\n● Dubai, United Arab Emirates\n● Calicut (Kerala), India\n● Doha, Qatar"
                                        },
                                        {
                                            question: "What industries does Dapps Solutions serve?",
                                            answer: "Dapps Solutions works with startups to enterprises across sectors such as technology, e-commerce, healthcare, education, real estate, corporate services, and more — helping each business improve efficiency and revenue."
                                        },
                                        {
                                            question: "How does Dapps Solutions help businesses grow?",
                                            answer: "We help businesses grow through:\n● AI-driven digital transformation strategies\n● Search engine optimized (SEO & programmatic SEO) content\n● Advanced automation for workflow and processes\n● Performance marketing and branding\n● Result-oriented software and application development. These services are designed to improve visibility, traffic, and conversions."
                                        },
                                        {
                                            question: "What makes Dapps Solutions different from a traditional agency?",
                                            answer: "Unlike conventional agencies, Dapps Solutions integrates AI automation, SEO programmatic strategies, data-driven systems, and full-stack digital services — ensuring scalable growth, improved ROI, and future-ready digital assets."
                                        }
                                    ],
                                    ar: [
                                        {
                                            question: "من هي دابس سولوشنز؟",
                                            answer: "شركة دابس سولوشنز هي شركة عالمية للتحول الرقمي تقدم حلولاً ذكية مدعومة بالذكاء الاصطناعي للشركات حول العالم، ولها حضور في الهند، الإمارات (دبي)، وقطر."
                                        },
                                        {
                                            question: "ماذا تقدم دابس سولوشنز؟",
                                            answer: "تساعد شركة دابس سولوشنز العلامات التجارية على النمو من خلال مواقع وتطبيقات مدعومة بالذكاء الاصطناعي، أتمتة ذكية، برمجيات مخصصة، أنظمة تخطيط موارد المؤسسة (ERP) وإدارة علاقات العملاء (CRM)، التسويق الرقمي، وحلول العلامة التجارية المصممة لتحقيق نتائج ملموسة للأعمال."
                                        },
                                        {
                                            question: "أين تعمل دابس سولوشنز؟",
                                            answer: "لدينا مواقع فعلية في:\n● دبي، الإمارات العربية المتحدة\n● كاليكوت (كيرالا)، الهند\n● الدوحة، قطر"
                                        },
                                        {
                                            question: "ما هي القطاعات التي تخدمها دابس سولوشنز؟",
                                            answer: "تعمل شركة دابس سولوشنز مع الشركات الناشئة والمؤسسات في قطاعات مثل التكنولوجيا، التجارة الإلكترونية، الرعاية الصحية، التعليم، العقارات، الخدمات المؤسسية، وغيرها — لمساعدة كل شركة على تحسين الكفاءة وزيادة الإيرادات."
                                        },
                                        {
                                            question: "كيف تساعد دابس سولوشنز الشركات على النمو؟",
                                            answer: "نساعد الشركات على النمو من خلال:\n● استراتيجيات التحول الرقمي المدعومة بالذكاء الاصطناعي\n● محتوى محسّن لمحركات البحث (تحسين محركات البحث وبرمجي)\n● أتمتة متقدمة لسير العمل والعمليات\n● التسويق بالأداء والعلامة التجارية\n● تطوير برمجيات وتطبيقات موجهة للنتائج. هذه الخدمات مصممة لتحسين الظهور، الزيارات، والتحويلات."
                                        },
                                        {
                                            question: "ما الذي يجعل دابس سولوشنز مختلفة عن الوكالات التقليدية؟",
                                            answer: "على عكس الوكالات التقليدية، تدمج شركة دابس سولوشنز الأتمتة الذكية، استراتيجيات تحسين محركات البحث البرمجية، الأنظمة المعتمدة على البيانات، وخدمات رقمية متكاملة — لضمان نمو قابل للتوسع، تحسين العائد على الاستثمار، وأصول رقمية جاهزة للمستقبل."
                                        }
                                    ]
                                }} />
                        </section>
                </div>
        )
}
