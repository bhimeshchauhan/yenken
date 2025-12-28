'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import Container from '@/components/Container';

/**
 * Slider data – tweak copy as you like.
 */
const services = [
  {
    id: 'prebid',
    label: 'Pre-bid & project strategy',
    short: 'Support from bid opportunity review to contract negotiations.',
    description:
      'Pre-bid advisory covering planning, tendering and contract award for highway and other infrastructure projects.',
    contractorBullets: [
      'Bid opportunity & risk review.',
      'Site appraisal.',
      'Review on project cost & risk.',
      'Assistance in bid quote & submission.',
      'Contract negotiations.'
    ],
    governmentBullets: [
      'Planning and project preparation.',
      'Tendering assistance.',
      'Bids management.',
      'Award of contract.',
      'Contract signing.'
    ],
    accent: '#1d4ed8',
    accentSoft: '#dbeafe',
    icon: '📐'
  },
  {
    id: 'execution',
    label: 'Execution & contract control',
    short:
      'Independent support during construction and contract administration.',
    description:
      'Support during execution to monitor progress, manage risks and avoid disputes.',
    contractorBullets: [
      'Management of project progress.',
      'Preparations of claims and variations.',
      'Mitigation of delays and risks.',
      'Support in EOT approval.',
      'Assistance in dispute settlement.'
    ],
    governmentBullets: [
      "Review of contractor's progress & advising suitable remedies.",
      'Verification of claims and variations.',
      'Contract management support.',
      'Track quality, cost and time.',
      'Other support for decision making.'
    ],
    accent: '#16a34a',
    accentSoft: '#dcfce7',
    icon: '🛣️'
  },
  {
    id: 'program',
    label: 'Program & implementation advisory',
    short: 'Advisory support for large highway and infrastructure programs.',
    description: '',
    contractorBullets: [
      'Input to workflow and material-flow management.',
      'Standard reporting and compliance.',
      'Support to project teams in site management issues.',
      'Coordination with authorities for getting payments, EOT approvals, variation approvals & other assistance.'
    ],
    governmentBullets: [
      'Management of concerns of stakeholders and concessionaires.',
      'Review of work program, proposals for EOT, Variation; & claims.',
      'Tracking of documents submission and manuals.',
      'Work program monitoring and advising pathways to encounter challenges.',
      'Management of alerts for the project management and advising issuance of the letters to be issued to the contractors or the concessioners.'
    ],
    accent: '#f97316',
    accentSoft: '#ffedd5',
    icon: '🏗️'
  }
];

const Section = styled.section`
  background: #f3f4f6;
  padding: 3.1rem 0 3.6rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.4rem;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #0b3a6f;
  margin-bottom: 0.4rem;
`;

const Subtitle = styled.p`
  font-size: 0.93rem;
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.8rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    align-items: stretch;
  }
`;

/* LEFT: vertical tabs */

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StepButton = styled.button<{ $active: boolean }>`
  border: none;
  text-align: left;
  cursor: pointer;
  background: ${({ $active }): string => ($active ? '#ffffff' : 'transparent')};
  border-radius: 18px;
  padding: 0.85rem 1.1rem;
  box-shadow: ${({ $active }): string =>
    $active ? '0 16px 40px rgba(15,23,42,0.08)' : 'none'};
  border: 1px solid
    ${({ $active }): string => ($active ? '#e5e7eb' : 'transparent')};
  transition:
    background 0.18s ease,
    box-shadow 0.18s ease,
    transform 0.18s ease;
  transform: ${({ $active }): string =>
    $active ? 'translateY(-2px)' : 'none'};

  &:hover {
    background: ${({ $active }): string => ($active ? '#ffffff' : '#e5e7eb33')};
  }
`;

const StepLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #0b3a6f;
  margin-bottom: 0.2rem;
`;

const StepShort = styled.div`
  font-size: 0.82rem;
  color: #6b7280;
`;

/* RIGHT: animated detail card */

const DetailCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: 1.6rem 1.5rem 1.5rem;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  border: 1px solid #e5e7eb;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailTop = styled.div<{ $accent: string; $accentSoft: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.1rem;

  .text-block {
    max-width: 70%;
  }

  .label {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #6b7280;
    margin-bottom: 0.28rem;
  }

  h3 {
    font-size: 1.05rem;
    color: #111827;
  }

  .icon-bubble {
    width: 70px;
    height: 70px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background: radial-gradient(
      circle at 20% 0%,
      ${({ $accent }): string => $accent} 0,
      ${({ $accentSoft }): string => $accentSoft} 55%,
      #ffffff 100%
    );
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.18);
  }

  @media (max-width: 959px) {
    .text-block {
      max-width: 100%;
    }
  }
`;

const DetailDescription = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 0.8rem;
`;

const SplitContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.2rem;
  margin-top: 0.6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VerticalDivider = styled.div`
  width: 1px;
  background: linear-gradient(to bottom, transparent, #e5e7eb, transparent);

  @media (max-width: 768px) {
    display: none;
  }
`;

const SideBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideTitle = styled.div`
  font-size: 0.82rem;
  font-weight: 600;
  color: #0b3a6f;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 0.4rem;
`;

const SideBullets = styled.ul`
  padding-left: 1.1rem;
  font-size: 0.85rem;
  color: #374151;

  li + li {
    margin-top: 0.28rem;
  }
`;

const ProgressDots = styled.div`
  margin-top: 1.1rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }): string => ($active ? '16px' : '8px')};
  height: 8px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${({ $active }): string => ($active ? '#0f766e' : '#cbd5f5')};
  transition:
    width 0.18s ease,
    background 0.18s ease;
`;

/* --- Component --- */

const slideVariants = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 }
};

const AUTO_ADVANCE_MS = 700000;

export default function ServicesShowcase(): JSX.Element {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const active = services[index];

  return (
    <Section>
      <Container>
        <Header>
          <Title>How we help your projects succeed</Title>
          <Subtitle>
            From pre-bid strategy to commissioning, we support owners and
            concessionaires to reduce risk, strengthen contracts and keep
            complex infrastructure moving.
          </Subtitle>
        </Header>

        <Grid>
          {/* LEFT: steps */}
          <StepsList>
            {services.map((svc, i) => (
              <StepButton
                key={svc.id}
                type='button'
                $active={i === index}
                onClick={(): void => setIndex(i)}
              >
                <StepLabel>{svc.label}</StepLabel>
                <StepShort>{svc.short}</StepShort>
              </StepButton>
            ))}
          </StepsList>

          {/* RIGHT: animated detail */}
          <AnimatePresence mode='wait'>
            <DetailCard
              key={active.id}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <DetailTop
                $accent={active.accent}
                $accentSoft={active.accentSoft}
              >
                <div className='text-block'>
                  <div className='label'>Service focus</div>
                  <h3>{active.label}</h3>
                </div>
                <div className='icon-bubble'>{active.icon}</div>
              </DetailTop>

              <DetailDescription>{active.description}</DetailDescription>

              <SplitContent>
                {/* Contractor side */}
                <SideBlock>
                  <SideTitle>For Contractors / Concessionaires</SideTitle>
                  <SideBullets>
                    {active.contractorBullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </SideBullets>
                </SideBlock>

                <VerticalDivider />

                {/* Government side */}
                <SideBlock>
                  <SideTitle>For Government / Authorities</SideTitle>
                  <SideBullets>
                    {active.governmentBullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </SideBullets>
                </SideBlock>
              </SplitContent>

              <ProgressDots>
                {services.map((svc, i) => (
                  <Dot
                    key={svc.id}
                    type='button'
                    $active={i === index}
                    onClick={(): void => setIndex(i)}
                  />
                ))}
              </ProgressDots>
            </DetailCard>
          </AnimatePresence>
        </Grid>
      </Container>
    </Section>
  );
}
