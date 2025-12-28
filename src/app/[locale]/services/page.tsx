import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import SiteLayout from '@/components/SiteLayout';

import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Services – Highway & Infrastructure Consultancy',
  description:
    'Explore the civil engineering consultancy services offered by YICE – from project management to advisory and institutional support.'
};

export default function ServicesPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHeader
        title='Services for highways, expressways & infrastructure programs.'
        subtitle='We provide focused support across the full lifecycle – from early concept and bidding through execution, commissioning and post-completion reviews.'
        currentLabel='Services'
      />
      <ServicesContent />
    </SiteLayout>
  );
}
