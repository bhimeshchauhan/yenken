import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Yenken International Consulting Enterprises (YICE)',
  description:
    'YICE is an independent civil engineering consultancy led by Intl PE Narendra Kumar Nawin, specialising in highways, expressways and infrastructure programs across India and abroad.',

  metadataBase: new URL('https://yenkenonline.com'),

  openGraph: {
    title: 'Yenken International Consulting Enterprises (YICE)',
    description:
      'Independent civil engineering consultancy specialising in highways, expressways and infrastructure program delivery.',
    url: 'https://yenkenonline.com',
    siteName: 'Yenken (YICE)',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Yenken International Consulting Enterprises'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Yenken International Consulting Enterprises (YICE)',
    description:
      'Civil, highway & infrastructure consultancy led by Intl PE Narendra Kumar Nawin.',
    images: ['/images/og-cover.jpg']
  }
};

export default function RootPage(): never {
  redirect('/en');
}
