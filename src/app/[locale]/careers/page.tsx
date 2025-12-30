import type { Metadata } from 'next';

import SiteLayout from '@/components/SiteLayout';

import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: 'Careers – YICE | Work on Highway & Infrastructure Projects',
  description:
    'Explore career opportunities at YICE. Join a consultancy delivering highways, expressways, and infrastructure programs across India and internationally.'
};

export default function CareersPage(): JSX.Element {
  return (
    <SiteLayout>
      <CareersContent />
    </SiteLayout>
  );
}
