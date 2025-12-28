import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import SiteLayout from '@/components/SiteLayout';

import BlogContent from './BlogContent';

export const dynamicParams = false;

export const metadata: Metadata = {
  title: 'News & Insights – Civil & Highway Engineering',
  description:
    'Articles and insights on highway engineering, contracts and infrastructure program delivery by Yenken.'
};

export default function BlogPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHeader
        title='News & insights on highway engineering.'
        subtitle='Short articles highlighting lessons from real projects and emerging trends in highway and corridor development.'
        currentLabel='News & Blog'
      />
      <BlogContent />
    </SiteLayout>
  );
}
