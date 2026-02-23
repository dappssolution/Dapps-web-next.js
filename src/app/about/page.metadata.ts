import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: ' Trusted Software Development Company in Dubai, UAE | About Us',
  description: 'We are a trusted software development company in UAE offering web development, mobile app development, CRM, ERP solutions and digital marketing services',
  keywords: [
    'About Dapps Solutions',
    'AI',
    'team',
    'digital transformation',
    'web development',
    'apps',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.dappssolutions.com/about',
    title: 'About Us | Dapps Solutions',
    description: 'Learn about Dapps Solutions, our mission, team, and approach to AI-powered digital transformation and web/app development.',
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
    title: 'About Us | Dapps Solutions',
    description: 'Learn about Dapps Solutions, our mission, team, and approach to AI-powered digital transformation and web/app development.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.dappssolutions.com/about',
  },
};
