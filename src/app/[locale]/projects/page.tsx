import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import SiteLayout from '@/components/SiteLayout';

import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects – Selected Highway & Corridor Assignments',
  description:
    'View a selection of highway, expressway and infrastructure projects supported by Yenken Consulting.'
};

export default function ProjectsPage(): JSX.Element {
  return (
    <SiteLayout>
      <PageHeader
        title='Selected highway & corridor assignments.'
        subtitle='A sample of projects reflecting our experience across expressways, state highways, corridors and institutional advisory work.'
        currentLabel='Projects'
      />
      <ProjectsContent />
    </SiteLayout>
  );
}
