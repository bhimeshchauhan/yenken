'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import Container from '@/components/Container';
import InteractiveCard from '@/components/InteractiveCard';
import ServiceCard from '@/components/ServiceCard';

const Section = styled.section`
  padding: 3rem 0 0;
  background: #f3f4f6;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
  color: #0b3a6f;
`;

const SectionText = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 1.6rem;
`;

const ReasonsWrap = styled.div`
  display: grid;
  gap: 2.4rem;
  margin-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    align-items: center;
  }
`;

const BulletList = styled.ul`
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  color: #374151;

  li + li {
    margin-top: 0.3rem;
  }
`;

const CTASection = styled.section`
  background: #020617;
  color: #e5e7eb;
  padding: 2.6rem 0 2.8rem;
`;

const CTAInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  @media (min-width: 860px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const CTATitle = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: #f9fafb;
`;

const CTAButton = styled(Link)`
  padding: 0.85rem 1.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  background: #fbbf24;
  color: #111827;
`;

const services = [
  {
    title: 'Project & contract management',
    description:
      'Owner’s engineer or consultant role for expressways and corridor projects across EPC, HAM and PPP contracts.'
  },
  {
    title: 'Design review & quality assurance',
    description:
      'Independent checking of geometric design, pavements, structures and safety measures for highways and bridges.'
  },
  {
    title: 'Bid & transaction support',
    description:
      'Assistance with RFQ / RFP documents, bid evaluation and negotiations for large infrastructure concessions.'
  },
  {
    title: 'Program & policy advisory',
    description:
      'Support for state agencies and PWDs in updating manuals, procedures and systems for modern contract delivery.'
  },
  {
    title: 'Capacity building & training',
    description:
      'Workshops and mentoring for project directors, engineers and contract staff on good practice and funding rules.'
  },
  {
    title: 'Independent review & audits',
    description:
      'Third-party reviews of troubled projects, with clear recommendations on course corrections and claims.'
  }
];

export default function ServicesContent(): JSX.Element {
  return (
    <>
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SectionTitle>Core service lines</SectionTitle>
            <SectionText>
              Services can be engaged individually or combined as a bespoke
              support package for your corridor, expressway or urban
              infrastructure program.
            </SectionText>

            <Grid>
              {services.map((svc) => (
                <InteractiveCard key={svc.title}>
                  <ServiceCard
                    title={svc.title}
                    description={svc.description}
                  />
                </InteractiveCard>
              ))}
            </Grid>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <ReasonsWrap>
              <div>
                <SectionTitle>Reasons clients rely on us</SectionTitle>
                <SectionText>
                  Our approach combines hands-on project experience with a clear
                  understanding of contract structures and funding agency
                  requirements.
                </SectionText>
                <BulletList>
                  <li>Balanced, contractually sound recommendations.</li>
                  <li>
                    Ability to translate technical issues for decision makers.
                  </li>
                  <li>
                    Practical guidance that works within institutional
                    realities.
                  </li>
                  <li>
                    Strong coordination across designers, contractors and
                    supervision teams.
                  </li>
                </BulletList>
              </div>
              <div>
                <SectionTitle>Typical engagements</SectionTitle>
                <BulletList>
                  <li>
                    Independent advisor for an expressway or corridor package.
                  </li>
                  <li>
                    Technical support cell for a program management unit (PMU).
                  </li>
                  <li>
                    Design review and QA for a funding agency–supported project.
                  </li>
                  <li>
                    Short diagnostic of troubled contracts with turnaround plan.
                  </li>
                </BulletList>
              </div>
            </ReasonsWrap>
          </motion.div>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTAInner>
            <div>
              <CTATitle>Need an independent view on your project?</CTATitle>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5f5' }}>
                Share your plans or project documents for a concise one-time
                review – highlighting key risks and opportunities to improve
                outcomes.
              </p>
            </div>
            <CTAButton href='/contact'>Request a consultation</CTAButton>
          </CTAInner>
        </Container>
      </CTASection>
    </>
  );
}
