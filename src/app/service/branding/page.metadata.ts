import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Branding Agency in Dubai | Creative Branding Agency",
  description:
    "Leading branding agency in Dubai offering logo design, brand identity, corporate branding and creative design services to build a powerful brand presence.",
  keywords: [
    "Branding Agency Dubai",
    "Logo Design UAE",
    "Corporate Branding",
    "Brand Identity Design",
    "Creative Agency Dubai"
  ],
  openGraph: {
    type: "website",
    url: "https://www.dappssolutions.com/service/branding",
    title: "Top Branding Agency in Dubai",
    description:
      "Creative branding services in Dubai including logo design, brand identity and corporate branding solutions.",
    siteName: "Dapps Solutions",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Branding Agency Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dappssolutions",
    title: "Top Branding Agency in Dubai",
    description:
      "Build a powerful brand identity with our expert branding services in UAE.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.dappssolutions.com/service/branding",
  },
};