// src/app/page.metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Leading Software & Digital Marketing Company in Dubai, UAE",
  description:
    "Leading software and digital marketing company in UAE offering web development, mobile apps, CRM, ERP solutions, and performance marketing services.",
  keywords: [
    "Dapps Solutions",
    "Software Company Dubai",
    "Web Development Dubai",
    "Mobile App Development UAE",
    "AI Automation Services",
    "Digital Marketing Agency Dubai",
    "Branding Agency Dubai",
    "IT Company UAE"
  ],
  openGraph: {
    type: "website",
    url: "https://www.dappssolutions.com/",
    title: "Dapps Solutions | AI-Powered Digital Transformation Company",
    description:
      "Transform your business with AI automation, web development, mobile apps, branding and digital marketing services in Dubai, UAE.",
    siteName: "Dapps Solutions",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Dapps Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dappssolutions",
    title: "Dapps Solutions | Web, App & AI Services in Dubai",
    description:
      "Leading AI-powered software company in Dubai offering web, app, branding and marketing solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.dappssolutions.com/",
  },
};