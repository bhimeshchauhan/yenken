'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Container from '@/components/Container';

const Section = styled.section`
  padding: 3rem 0 3.5rem;
  background: #f3f4f6;
`;

const Split = styled.div`
  display: grid;
  gap: 2.4rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    align-items: start;
  }
`;

const PillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.9rem;

  li {
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    padding: 1rem 1.1rem;
    font-size: 0.9rem;
    color: #374151;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.03);
  }

  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #0b3a6f;
  }
`;

const StatRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  margin-top: 2.1rem;
`;

const Stat = styled.div`
  min-width: 120px;

  small {
    display: block;
    font-size: 0.78rem;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  strong {
    display: block;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    color: #111827;
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
`;

const TeamCard = styled.div`
  margin-top: 2.4rem;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  padding: 1.5rem 1.4rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
  font-size: 0.9rem;
  color: #374151;

  h3 {
    margin: 0 0 0.3rem;
    font-size: 1.05rem;
    color: #0b3a6f;
  }

  span.role {
    font-size: 0.8rem;
    color: #6b7280;
  }
`;

export default function AboutContent(): JSX.Element {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Split>
            <div>
              <SectionTitle>About the consultant</SectionTitle>
              <SectionText>
                Intl PE – Narendra Kumar Nawin is a civil engineer and project
                manager with over 35 years of experience across India, Oman,
                Ethiopia, Tanzania and Nepal. He has led and advised on
                large-scale highway projects funded by national governments and
                multilateral development banks.
              </SectionText>
              <SectionText>
                His core expertise spans project &amp; contract management, bid
                advisory, design review, quality assurance, and institutional
                strengthening for public works and transport departments.
              </SectionText>

              <StatRow>
                <Stat>
                  <small>Experience</small>
                  <strong>35+ years</strong>
                </Stat>
                <Stat>
                  <small>Highways &amp; corridors</small>
                  <strong>7,000+ km</strong>
                </Stat>
                <Stat>
                  <small>Program value</small>
                  <strong>USD 6bn+</strong>
                </Stat>
              </StatRow>
            </div>

            <div>
              <SectionTitle>Why project owners choose us</SectionTitle>
              <PillList>
                <li>
                  <strong>Deep domain knowledge</strong>
                  Highways, expressways, OSBPs and corridor programs with a
                  strong understanding of on-ground constraints.
                </li>
                <li>
                  <strong>Contract &amp; claims expertise</strong>
                  Experience across EPC, HAM, PPP and design-build models with a
                  focus on balanced risk allocation.
                </li>
                <li>
                  <strong>Multilateral familiarity</strong>
                  Hands-on work with World Bank, ADB, AfDB and other funding
                  agencies – documentation, safeguards and procedures.
                </li>
                <li>
                  <strong>Independent &amp; practical advice</strong>
                  Recommendations grounded in constructability, safety and long
                  term asset performance.
                </li>
              </PillList>

              <TeamCard>
                <h3>Narendra Kumar Nawin</h3>
                <span className='role'>
                  Intl PE – Highway &amp; Infrastructure Consultant
                </span>
                <p>
                  Registered professional engineer with extensive international
                  assignments on expressways, state highways and institutional
                  advisory projects.
                </p>
              </TeamCard>
            </div>
          </Split>
        </motion.div>
      </Container>
    </Section>
  );
}
