import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import SiteLayout from '@/components/SiteLayout';

import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact – YICE',
  description:
    'Contact YICE to discuss your highway, expressway or infrastructure program.'
};

export default function ContactPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHeader
        title='Let’s connect about your next project.'
        subtitle='Send a brief description of your highway or infrastructure assignment and we will arrange a call to discuss how we can support you.'
        currentLabel='Contact'
      />
      <ContactContent />
    </SiteLayout>
  );
}
