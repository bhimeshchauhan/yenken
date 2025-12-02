import type { Metadata } from 'next';

import SiteLayout from '@/components/SiteLayout';

import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'N. K. Nawin Consulting – Civil, Highway & Infrastructure Consultancy',
  description:
    'Independent civil engineering consultancy led by Intl PE Narendra Kumar Nawin, specialising in highways, expressways and infrastructure program delivery across India and abroad.'
};

export default function HomePage(): JSX.Element {
  return (
    <SiteLayout>
      <HomeContent />
    </SiteLayout>
  );
}
