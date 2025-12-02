import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import SiteLayout from '@/components/SiteLayout';

import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About – N. K. Nawin Consulting | Civil & Highway Engineering',
  description:
    'Learn about Intl PE Narendra Kumar Nawin and his 35+ years of experience delivering highway and infrastructure projects across India and abroad.'
};

export default function AboutPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHeader
        title='Independent civil engineering consultancy.'
        subtitle='N. K. Nawin Consulting provides specialist advice on highways, expressways and infrastructure programs for governments, developers and funding agencies.'
        currentLabel='About'
      />
      <AboutContent />
    </SiteLayout>
  );
}
