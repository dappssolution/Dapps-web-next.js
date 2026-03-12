import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.news9live.com' },
      { protocol: 'https', hostname: 'wallpapercave.com' },
      { protocol: 'https', hostname: 'm.economictimes.com' },
      { protocol: 'https', hostname: 'clipart-library.com' },
      { protocol: 'https', hostname: 'static.vecteezy.com' },
      { protocol: 'https', hostname: 'wallup.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.tastingtable.com' },
      { protocol: 'https', hostname: 'd2rdhxfof4qmbb.cloudfront.net' },
      { protocol: 'https', hostname: 'seoimgak.mmtcdn.com' },
      { protocol: 'https', hostname: 'img.veenaworld.com' },
      { protocol: 'https', hostname: 'indiafacts.org' },
      { protocol: 'https', hostname: 'www.clearias.com' },
      { protocol: 'https', hostname: 'assets.traveltriangle.com' },
      { protocol: 'https', hostname: 'i.assetzen.net' },
      { protocol: 'https', hostname: 'www.lordsayurveda.com' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'wallpaperaccess.com' },
      { protocol: 'https', hostname: 'www.globalbusinessculture.com' },
      { protocol: 'https', hostname: 'www.softlabsgroup.com' },
      { protocol: 'https', hostname: 'img.resized.co' },
      { protocol: 'https', hostname: 'c.stocksy.com' },
      { protocol: 'https', hostname: 'image.freepik.com' },
      { protocol: 'https', hostname: 'tse1.mm.bing.net' },
    ],
  },
};

export default nextConfig;
