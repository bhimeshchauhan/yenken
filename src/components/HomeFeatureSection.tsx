'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Container from './Container';
import InteractiveCard from './InteractiveCard';
import ServiceCard from './ServiceCard';

const SectionShell = styled.section`
  background: #f9fafb;
  padding: 3.2rem 0 3.6rem;
`;

const HeadingBlock = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.6rem;
    color: #0b3a6f;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.95rem;
    color: #6b7280;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const services = [
  {
    title: 'Pre-bid & project strategy',
    description:
      'Quick assessments of scope, risks and timelines to shape winning proposals and realistic delivery plans.'
  },
  {
    title: 'Execution & contract control',
    description:
      'Independent oversight to keep design, quality and progress aligned with EPC / HAM / PPP obligations.'
  },
  {
    title: 'Program & policy advisory',
    description:
      'Guidance on manuals, systems and reforms for PWD and transport agencies handling large programs.'
  }
];

export default function HomeFeatureSection(): JSX.Element {
  return (
    <SectionShell>
      <Container>
        <HeadingBlock>
          <h2>How we help your projects succeed</h2>
          <p>
            From early strategy to commissioning, we support project owners and
            contractors to reduce risk and keep complex infrastructure moving.
          </p>
        </HeadingBlock>

        <Grid
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {services.map((s) => (
            <InteractiveCard key={s.title}>
              <ServiceCard title={s.title} description={s.description} />
            </InteractiveCard>
          ))}
        </Grid>
      </Container>
    </SectionShell>
  );
}
