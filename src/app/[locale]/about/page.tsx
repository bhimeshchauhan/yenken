import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import SiteLayout from '@/components/SiteLayout';

import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About – YICE | Civil & Highway Engineering',
  description:
    'Learn about Intl PE Narendra Kumar Nawin and his 35+ years of experience delivering highway and infrastructure projects across India and abroad.'
};

export default function AboutPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHeader
        title='Independent civil engineering consultancy.'
        subtitle='YICE provides specialist advice on highways, expressways and other infrastructure programs for governments, developers, funding agencies and private agencies.'
        currentLabel='About'
      />
      <AboutContent />
    </SiteLayout>
  );
}
