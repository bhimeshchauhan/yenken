'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';

import ClientTrustSection from '@/components/ClientTrustSection';
import Container from '@/components/Container';
import ServicesShowcase from '@/components/ServiceShowcase';

import { WHATSAPP_LINK } from '@/lib/contactDetails';

/* ---------------- HERO ---------------- */

const HeroSection = styled.section`
  position: relative;
  padding: 5.2rem 0 4.8rem;
  color: #f9fafb;
  overflow: hidden;
  background: #020617;
`;

// Background image + gradient overlay
const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(15, 23, 42, 0.96) 0%,
    rgba(15, 23, 42, 0.9) 45%,
    rgba(15, 23, 42, 0.55) 70%,
    rgba(15, 23, 42, 0.9) 100%
  );
`;

const HeroInner = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  @media (min-width: 1024px) {
    padding-top: 0.6rem;
  }
`;

const HeroKicker = styled.div`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #cbd5f5;
`;

const HeroTitle = styled.h1`
  font-size: 2.45rem;
  line-height: 1.08;
  color: #f9fafb;
  margin-top: 0.6rem;

  @media (min-width: 768px) {
    font-size: 2.9rem;
  }

  span.accent {
    color: #fb923c;
  }
`;

const HeroText = styled.p`
  font-size: 0.98rem;
  color: #e5e7eb;
  max-width: 32rem;
  margin-top: 0.4rem;
`;

const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.4rem;
`;

const PrimaryCTA = styled(Link)`
  padding: 0.95rem 2.1rem;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 600;
  background: #22c55e;
  color: #022c22;
  box-shadow: 0 18px 40px rgba(34, 197, 94, 0.35);
`;

const WhatsAppCTA = styled.a`
  padding: 0.95rem 1.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(148, 163, 184, 0.7);
  color: #f9fafb;
  background: rgba(15, 23, 42, 0.6);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

/* --------------- STRIP --------------- */

const Strip = styled.section`
  background: #020617;
  padding: 0.8rem 0;
  border-top: 1px solid #0b1120;
  border-bottom: 1px solid #0b1120;
`;

const MarqueeSpacer = styled.span`
  display: inline-block;
  width: 0.8rem;
`;

const StripRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  white-space: nowrap;
`;

const StripBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.8rem;
  color: #e5f0ff;
  background: rgba(15, 23, 42, 0.9);
  border-radius: 999px;
  padding: 0.45rem 1.15rem;
  border: 1px solid rgba(148, 163, 184, 0.7);
  white-space: nowrap;
`;

const StripIcon = styled.img`
  width: 18px;
  height: 18px;
  display: block;
  filter: brightness(1.8); /* makes icons brighter but still stylish */
`;

/* ------------- OVERSIGHT ------------- */
/* (dark section with “accordion list” + image/stat card) */

const OversightSection = styled.section`
  padding: 3.6rem 0 3.9rem;
  background: #020617;
  color: #e5e7eb;
`;

const OversightGrid = styled.div`
  display: grid;
  gap: 2.6rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    align-items: center;
  }
`;

const OversightKicker = styled.div`
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #93c5fd;
  margin-bottom: 0.55rem;
`;

const OversightTitle = styled.h2`
  font-size: 1rem;
  line-height: 1.2;
  color: #f9fafb;
  margin-bottom: 0.7rem;
`;

const OversightLead = styled.p`
  font-size: 0.95rem;
  color: #cbd5f5;
  max-width: 32rem;
`;

const OversightList = styled.ul`
  margin-top: 1.9rem;
  border-top: 1px solid rgba(148, 163, 184, 0.35);
`;

const OversightItem = styled.li<{ $active: boolean }>`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(148, 163, 184, 0.28);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  cursor: pointer;

  &:hover {
    background: radial-gradient(
      circle at 0 0,
      rgba(56, 189, 248, 0.14),
      transparent 55%
    );
  }

  h3 {
    font-size: 0.98rem;
    font-weight: 500;
    color: #f9fafb;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.86rem;
    color: #9ca3af;
    max-width: 28rem;
    display: ${({ $active }): string => ($active ? 'block' : 'none')};
  }
`;

const OversightToggle = styled.span<{ $active: boolean }>`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ $active }): string => ($active ? '#22c55e' : '#9ca3af')};
  flex-shrink: 0;
`;

const OversightMedia = styled.div`
  position: relative;
  max-width: 420px;
  margin: 0 auto;
`;

const OversightImage = styled.img`
  width: 100%;
  border-radius: 28px;
  object-fit: cover;
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.85);
`;

const OversightStatCard = styled.div`
  position: absolute;
  left: 8%;
  bottom: 10%;
  transform: translateY(12px);
  padding: 0.95rem 1rem;
  border-radius: 18px;
  background: #f9fafb;
  color: #020617;
  max-width: 220px;
  font-size: 0.82rem;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.45);

  span.label {
    display: inline-block;
    padding: 0.08rem 0.55rem;
    border-radius: 999px;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    background: #e0f2fe;
    color: #1d4ed8;
    margin-bottom: 0.35rem;
  }

  strong {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
`;

/* -------- PROGRAM PERFORMANCE -------- */
/* (light section like “Better security / credit cards”) */

const PerformanceSection = styled.section`
  background: #f9fafb;
  color: #020617;
  padding: 3.6rem 0 4.1rem;
`;

const PerformanceGrid = styled.div`
  display: grid;
  gap: 2.6rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
    align-items: center;
  }
`;

const PerformanceTitle = styled.h2`
  font-size: 1.8rem;
  line-height: 1.2;
  color: #0f172a;
  margin-bottom: 0.75rem;
`;

const PerformanceLead = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  max-width: 34rem;
  margin-bottom: 1.4rem;
`;

const PerformanceRule = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 0 0 1.4rem;
  max-width: 320px;
`;

const PerformancePoint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.9rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PerformancePill = styled.span<{ $tone: 'green' | 'red' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  padding: 0.5rem 1.5rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #0f172a;
  background: ${({ $tone }): string =>
    $tone === 'green' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.18)'};
`;

const PerformancePointText = styled.div`
  font-size: 0.9rem;
  color: #111827;

  p {
    margin-top: 0.18rem;
    font-size: 0.86rem;
    color: #6b7280;
  }
`;

const PerformanceVisual = styled.div`
  position: relative;
  max-width: 440px;
  margin: 0 auto;
`;

const PerformanceCircle = styled.div`
  position: absolute;
  inset: 12% 8% auto auto;
  border-radius: 999px;
  background: #dbeafe;
  opacity: 0.7;
  filter: blur(2px);
`;

const PerformanceImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);
`;

/* --------------- DATA ---------------- */

const oversightItems = [
  {
    title: 'Custom oversight for complex highway programs',
    body: 'From greenfield expressways to busy urban flyovers, we keep contracts, design and site realities aligned so work keeps moving.'
  },
  {
    title: 'Clear roles across owners, contractors & lenders',
    body: 'We help each party understand its obligations and decision points, reducing friction and avoiding surprise escalations.'
  },
  {
    title: 'Early warning before issues turn into disputes',
    body: 'Structured site reviews and reporting highlight delays, variations and risks in time for corrective action.'
  },
  {
    title: 'Support through claims, negotiations & close-out',
    body: 'When disputes cannot be avoided, we support you with robust documentation and negotiation strategy.'
  }
];

const performancePoints = [
  {
    tone: 'green' as const,
    label: 'Well organised',
    title: 'Well-organised program view',
    body: 'Dashboards and reporting that tie together physical progress, payments and risk so you see the true picture.'
  },
  {
    tone: 'red' as const,
    label: 'Fewer disputes',
    title: 'Fewer surprises & disputes',
    body: 'Clear triggers for escalation and structured follow-up help avoid costly delays and arbitration.'
  }
];

/* --------------- PAGE ---------------- */

const StripItems = (): JSX.Element => (
  <StripRow>
    <StripBadge>
      <StripIcon src='/images/wb.png' alt='World Bank' loading='lazy' />
      World Bank
    </StripBadge>

    <StripBadge>
      <StripIcon
        src='https://upload.wikimedia.org/wikipedia/commons/4/43/Asian_Development_Bank_logo.svg'
        alt='Asian Development Bank'
        loading='lazy'
      />
      ADB experience
    </StripBadge>

    <StripBadge>
      <StripIcon
        src='https://upload.wikimedia.org/wikipedia/commons/4/43/Asian_Development_Bank_logo.svg'
        alt='African Development Bank'
        loading='lazy'
      />
      AfDB experience
    </StripBadge>

    <StripBadge>
      <StripIcon
        src='https://cdn.jsdelivr.net/npm/heroicons@2.1.5/24/solid/document-text.svg'
        alt='Contract expertise'
        loading='lazy'
        style={{ filter: 'invert(1) brightness(2)' }}
      />
      Contract expertise – All settings
    </StripBadge>

    <StripBadge>
      <StripIcon
        src='https://cdn.jsdelivr.net/npm/heroicons@2.1.5/24/solid/document-text.svg'
        alt='Institutional Development'
        loading='lazy'
        style={{ filter: 'invert(1) brightness(2)' }}
      />
      Institutional Development
    </StripBadge>

    <StripBadge>
      <StripIcon
        src='https://unpkg.com/lucide-static@latest/icons/landmark.svg'
        alt='PWD & state agencies'
        loading='lazy'
        style={{ filter: 'invert(1) brightness(2)' }}
      />
      Skill development trainings & Certifications
    </StripBadge>

    <StripBadge>
      <StripIcon
        src='https://unpkg.com/lucide-static@latest/icons/hard-hat.svg'
        alt='Safety & quality'
        loading='lazy'
        style={{ filter: 'invert(1) brightness(2)' }}
      />
      Focus on cost, time, quality &amp; safety
    </StripBadge>

    <StripBadge>
      <StripIcon
        src='https://unpkg.com/lucide-static@latest/icons/hard-hat.svg'
        alt='Safety & quality'
        loading='lazy'
        style={{ filter: 'invert(1) brightness(2)' }}
      />
      Ethics &amp; Sustainability
    </StripBadge>
  </StripRow>
);

export default function HomeContent(): JSX.Element {
  const [activeOversight, setActiveOversight] = useState(0);

  return (
    <>
      {/* HERO */}
      <HeroSection>
        <HeroBackground>
          <HeroVideo autoPlay muted loop playsInline preload='metadata'>
            <source src='/videos/hero.mp4' type='video/mp4' />
          </HeroVideo>

          <HeroOverlay />
        </HeroBackground>

        <Container>
          <HeroInner
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <HeroKicker>
              Civil engineering consultancy · Highways & Other Infrastructure
            </HeroKicker>
            <HeroTitle>
              Smart &{' '}
              <span className='accent'>
                Sustainable Development Intl. Partner{' '}
              </span>{' '}
              delivering Quality Consultancy Services for all needs of Private
              and Government clients.
            </HeroTitle>
            <HeroText>
              Helping owners and agencies deliver safer, faster and better-
              governed highway & other infra projects.
            </HeroText>

            <CTAGroup>
              <PrimaryCTA href='/contact'>
                Request a project advisory / proposal
              </PrimaryCTA>
              <WhatsAppCTA
                href={WHATSAPP_LINK}
                target='_blank'
                rel='noreferrer'
              >
                Chat on WhatsApp
              </WhatsAppCTA>
            </CTAGroup>
          </HeroInner>
        </Container>
      </HeroSection>

      {/* Strip (with real logos) */}
      <Strip>
        <Container>
          <Marquee speed={40} gradient={false} pauseOnHover autoFill>
            <StripItems />
            <MarqueeSpacer />
          </Marquee>
        </Container>
      </Strip>

      {/* HOW WE HELP */}
      <ServicesShowcase />
      {/* PROGRAM PERFORMANCE (light “security/cards” style) */}
      <PerformanceSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <PerformanceGrid>
              <div>
                <PerformanceTitle>
                  Better program control. Stronger stakeholder confidence.
                </PerformanceTitle>
                <PerformanceLead>
                  Expressway and corridor programs involve many packages,
                  contracts and agencies. We help you design a control framework
                  that everyone can trust.
                </PerformanceLead>

                <PerformanceRule />

                {performancePoints.map((p) => (
                  <PerformancePoint key={p.title}>
                    <PerformancePill $tone={p.tone}>{p.label}</PerformancePill>
                    <PerformancePointText>
                      <strong>{p.title}</strong>
                      <p>{p.body}</p>
                    </PerformancePointText>
                  </PerformancePoint>
                ))}
              </div>

              <PerformanceVisual>
                <PerformanceCircle />
                {/* Temporary visual - replace with your program dashboard / cards illustration */}
                <PerformanceImage
                  src='https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt='Dashboard and reports illustrating highway program performance'
                />
              </PerformanceVisual>
            </PerformanceGrid>
          </motion.div>
        </Container>
      </PerformanceSection>
      {/* OVERSIGHT (accordion style) */}
      <OversightSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <OversightGrid>
              <div>
                <OversightKicker>Independent oversight</OversightKicker>
                <OversightTitle>
                  Oversight that keeps contracts, design and site realities
                  aligned.
                </OversightTitle>
                <OversightLead>
                  Large highway programs fail when obligations drift and nobody
                  has the full picture. We act as an independent voice to keep
                  quality, progress and risk under control.
                </OversightLead>

                <OversightList>
                  {oversightItems.map((item, index) => {
                    const active = index === activeOversight;
                    return (
                      <OversightItem
                        key={item.title}
                        $active={active}
                        onClick={(): void => setActiveOversight(index)}
                      >
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.body}</p>
                        </div>
                        <OversightToggle $active={active}>
                          {active ? '−' : '+'}
                        </OversightToggle>
                      </OversightItem>
                    );
                  })}
                </OversightList>
              </div>

              <OversightMedia>
                {/* You can replace this image with your own site-meeting photo */}
                <OversightImage
                  src='https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt='Project team reviewing highway program performance in a meeting room'
                />
                <OversightStatCard>
                  <span className='label'>Program oversight</span>
                  <strong>27% fewer delays</strong>
                  <span>
                    Typical reduction in avoidable delay claims when structured
                    oversight is in place.
                  </span>
                </OversightStatCard>
              </OversightMedia>
            </OversightGrid>
          </motion.div>
        </Container>
      </OversightSection>
      {/* WHY + TESTIMONIALS */}
      <ClientTrustSection />
    </>
  );
}
