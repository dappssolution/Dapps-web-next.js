import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leading Software & Digital Marketing Company in Dubai, UAE',
  description: ' Leading software and digital marketing company in UAE offering web development, mobile apps, CRM, ERP solutions, and performance marketing services.',
  keywords: [
    'Dapps Solutions',
    'AI',
    'automation',
    'digital transformation',
    'web development',
    'apps',
    'CRM',
    'ERP',
    'marketing',
  ],
  openGraph: {
    type: 'website', 
    url: 'https://www.dappssolutions.com/',
    title: 'Dapps Solutions | AI-Powered Web & Apps',
    description: 'Dapps Solutions - Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services for growth and efficiency.',
    siteName: 'Dapps Solutions',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Dapps Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dappssolutions',
    title: 'Dapps Solutions | AI-Powered Web & Apps',
    description: 'Dapps Solutions - Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services for growth and efficiency.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dappssolutions.com/',
  },
};
