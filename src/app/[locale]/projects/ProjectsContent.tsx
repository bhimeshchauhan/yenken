'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Container from '@/components/Container';
import InteractiveCard from '@/components/InteractiveCard';
import ProjectCard from '@/components/ProjectCard';

const Section = styled.section`
  padding: 3rem 0 3.5rem;
  background: #f3f4f6;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #0b3a6f;
`;

const SectionText = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 1.6rem;
`;

const projects = [
  {
    name: 'Nagpur–Mumbai Super Communication Expressway (MSRDC)',
    location: 'Maharashtra, India',
    sector: 'Expressway',
    summary:
      'Project & contract management support to MSRDC PSO for multiple packages of the 701 km access-controlled expressway.' +
      'Handled design review of Intelligent Traffic Management System (ITMS), tolling system, CCTV surveillance etc.'
  },
  {
    name: 'Green National Highway Corridor Project',
    location: 'Multiple states, India – World Bank',
    sector: 'National Highway',
    summary:
      'Design review, construction supervision support and contract administration for climate-resilient highway corridors.'
  },
  {
    name: 'Rajasthan State Highway Investment Program',
    location: 'Rajasthan, India – ADB',
    sector: 'Highway',
    summary:
      'Support to PWD for project management, bid evaluation, and preparation of contract and quality assurance manuals.'
  },
  {
    name: 'International corridor & OSBP',
    location: 'East Africa – AfDB funded',
    sector: 'International Corridor',
    summary:
      'Advisory on cross-border corridor improvement, One Stop Border Posts (OSBPs) and logistics connectivity from Addis Ababa (Ethiopia) to Mombasa (Kenya) corridor.'
  }
];

export default function ProjectsContent(): JSX.Element {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle>Project highlights</SectionTitle>
          <SectionText>
            Detailed references are available on request, subject to client
            approval and confidentiality obligations.
          </SectionText>

          <Grid>
            {projects.map((p) => (
              <InteractiveCard key={p.name}>
                <ProjectCard {...p} />
              </InteractiveCard>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
