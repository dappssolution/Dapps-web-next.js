import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import LayoutShell from "@/components/LayoutShell";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FontProvider from "@/components/FontProvider";

export const metadata: Metadata = {
  title: "Dapps Solutions | AI-Powered Web & Apps",
  description:
    "Dapps Solutions - Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services for growth and efficiency.",
  keywords: [
    "Dapps Solutions",
    "AI",
    "automation",
    "digital transformation",
    "web development",
    "apps",
    "CRM",
    "ERP",
    "marketing",
  ],
  metadataBase: new URL("https://www.dappssolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dapps Solutions | AI-Powered Web & Apps",
    description:
      "AI-powered websites, apps, automation and digital transformation services.",
    url: "https://www.dappssolutions.com",
    siteName: "Dapps Solutions",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dapps Solutions | AI-Powered Web & Apps",
    description:
      "Transforming Businesses with AI-powered websites, apps and automation.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dapps Solutions",
              "url": "https://www.dappssolutions.com/",
              "logo": "https://www.dappssolutions.com/images/logo.png",
              "description": "Dapps Solutions is a leading Software Development and Digital Marketing Company in Dubai, UAE, offering Web Development, App Development, AI Automation, Branding, and SEO services.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "4879"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Ahmed R." },
                  "datePublished": "2025-01-12",
                  "reviewBody": "Dapps Solutions delivered our website on time with excellent design and performance. Their SEO strategy significantly improved our Google rankings in Dubai, UAE.",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Sara K." },
                  "datePublished": "2025-02-05",
                  "reviewBody": "Professional team with strong technical knowledge in AI automation and digital marketing. Highly recommended for businesses in the Dubai, UAE.",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                }
              ],
              "sameAs": [
                "https://linkedin.com/company/dapps-solution",
                "https://www.instagram.com/dapps_solutions/",
                "https://www.facebook.com/people/Dapps-Solutions/61582658906975/"
              ]
            })
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-NVL7HVHT'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NVL7HVHT');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D8KB1VRVML"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D8KB1VRVML');
          `}
        </Script>

        <LanguageProvider>
          <FontProvider
            poppinsClass={montserrat.className}
            ibmPlexSansArabicClass={ibmPlexSansArabic.className}
          >
            <LayoutShell>{children}</LayoutShell>
          </FontProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}