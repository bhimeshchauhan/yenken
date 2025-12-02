'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import { PHONE_TEL, WHATSAPP_LINK } from '@/lib/contactDetails';

import Container from './Container';

const HeroShell = styled.section`
  position: relative;
  overflow: hidden;
  background: #020617;
  padding: 4.5rem 0 4rem;

  @media (min-width: 900px) {
    padding: 5rem 0 4.8rem;
  }

  &::before {
    /* coloured blob like the ref */
    content: '';
    position: absolute;
    width: 420px;
    height: 320px;
    background: radial-gradient(
      circle at 30% 30%,
      #fb7185 0,
      #f97316 40%,
      #22c55e 95%
    );
    border-radius: 999px;
    top: -80px;
    left: -120px;
    filter: blur(6px);
    opacity: 0.9;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.4rem;
  align-items: center;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  }
`;

const Left = styled(motion.div)`
  max-width: 34rem;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.26em;
  font-size: 0.68rem;
  color: #a5b4fc;
  margin-bottom: 0.7rem;
`;

const Heading = styled.h1`
  font-size: 2.4rem;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #f9fafb;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  span.accent {
    color: #f97316;
  }
`;

const Subheading = styled.p`
  margin-top: 1.1rem;
  font-size: 0.98rem;
  color: #e5e7eb;
  max-width: 32rem;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
`;

const PrimaryLinkButton = styled(Link)`
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  background: #22c55e;
  color: #022c22;
  box-shadow: 0 14px 35px rgba(22, 163, 74, 0.6);
`;

const GhostButton = styled.a`
  padding: 0.85rem 1.7rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: transparent;
  color: #e5e7eb;
`;

const StatsRow = styled.div`
  margin-top: 2.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

const Stat = styled.div`
  min-width: 120px;

  small {
    display: block;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #9ca3af;
  }

  strong {
    display: block;
    font-size: 1.1rem;
    margin-top: 0.25rem;
    color: #f9fafb;
  }
`;

const Right = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const RightCard = styled(motion.div)`
  width: 320px;
  max-width: 100%;
  border-radius: 24px;
  background: radial-gradient(circle at top, #1f2937 0, #020617 60%);
  border: 1px solid rgba(148, 163, 184, 0.7);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.9);
  padding: 1.6rem 1.5rem;
  color: #e5e7eb;
  font-size: 0.9rem;

  h3 {
    margin: 0 0 0.7rem;
    font-size: 1rem;
    color: #f9fafb;
  }

  ul {
    margin: 0.2rem 0 0;
    padding-left: 1.1rem;
  }

  li + li {
    margin-top: 0.3rem;
  }

  footer {
    margin-top: 1.1rem;
    font-size: 0.78rem;
    color: #9ca3af;
  }
`;

export default function Hero(): JSX.Element {
  return (
    <HeroShell>
      <Container>
        <Inner>
          <Left
            initial={{ opacity: 0, x: -26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Eyebrow>Civil engineering consultancy</Eyebrow>
            <Heading>
              Smart <span className='accent'>thinking</span> for complex
              highways &amp; infrastructure.
            </Heading>
            <Subheading>
              Intl PE – Narendra Kumar Nawin helps governments, developers and
              multilateral agencies deliver expressways and corridor programs
              with robust contracts, quality designs and on-time completion.
            </Subheading>

            <ButtonRow>
              <PrimaryLinkButton href='/contact'>
                Get a project review
              </PrimaryLinkButton>
              <GhostButton
                href={WHATSAPP_LINK}
                target='_blank'
                rel='noreferrer'
              >
                Chat on WhatsApp
              </GhostButton>
              <GhostButton href={`tel:${PHONE_TEL}`}>Call now</GhostButton>
            </ButtonRow>

            <StatsRow>
              <Stat>
                <small>Experience</small>
                <strong>35+ years</strong>
              </Stat>
              <Stat>
                <small>Highways &amp; expressways</small>
                <strong>7,000+ km</strong>
              </Stat>
              <Stat>
                <small>Programs managed</small>
                <strong>USD 6bn+</strong>
              </Stat>
            </StatsRow>
          </Left>

          <Right
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <RightCard
              initial={{ y: 0 }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <h3>Trusted for complex, multi-stakeholder projects</h3>
              <ul>
                <li>Expressways, national corridors &amp; state highways.</li>
                <li>PPP, EPC, HAM &amp; design-build contracts.</li>
                <li>
                  World Bank, ADB, AfDB and other multilateral-funded programs.
                </li>
                <li>Strong contract, claims and time-control strategies.</li>
              </ul>
              <footer>Independent advice. Execution-focused delivery.</footer>
            </RightCard>
          </Right>
        </Inner>
      </Container>
    </HeroShell>
  );
}
