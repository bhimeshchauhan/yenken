'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import ClientTrustSection from '@/components/ClientTrustSection';
import Container from '@/components/Container';
import ServicesShowcase from '@/components/ServiceShowcase';

import { WHATSAPP_LINK } from '@/lib/contactDetails';

/**
 * Sections:
 * 1. Dark hero (headline + CTAs + visual + project thumbnails)
 * 2. Program / expertise strip (teal band)
 * 3. How we help (3 cards)
 * 4. Independent oversight (text + image)
 * 5. Program performance band (dark)
 * 6. Why clients work with us (3 cards)
 * 7. What clients say (testimonials)
 */

/* --- HERO --- */

const HeroSection = styled.section`
  background: radial-gradient(
    circle at 10% 0%,
    #4f46e5 0,
    #020617 45%,
    #020617 100%
  );
  color: #e5e7eb;
  padding: 4rem 0 3.8rem;

  @media (min-width: 960px) {
    padding: 4.8rem 0 4.2rem;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  gap: 2.6rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
    align-items: center;
  }
`;

const HeroKicker = styled.div`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #9ca3af;
  margin-bottom: 0.6rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.3rem;
  line-height: 1.1;
  color: #f9fafb;
  margin-bottom: 0.8rem;

  @media (min-width: 960px) {
    font-size: 2.8rem;
  }

  span.accent {
    color: #fb923c;
  }
`;

const HeroText = styled.p`
  font-size: 0.96rem;
  color: #d1d5db;
  max-width: 40rem;
  margin-bottom: 1.5rem;
`;

const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-bottom: 1.6rem;
`;

const PrimaryCTA = styled(Link)`
  padding: 0.9rem 1.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  background: #22c55e;
  color: #022c22;
  box-shadow: 0 18px 40px rgba(34, 197, 94, 0.35);
`;

const SecondaryCTA = styled(Link)`
  padding: 0.88rem 1.8rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(148, 163, 184, 0.7);
  color: #e5e7eb;
  background: rgba(15, 23, 42, 0.7);
`;

const TertiaryCTA = styled.a`
  padding: 0.86rem 1.6rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 500;
  border: 1px dashed #22c55e;
  color: #bbf7d0;
  background: rgba(15, 23, 42, 0.7);
`;

const HeroStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.7rem;
  font-size: 0.82rem;
  color: #9ca3af;
`;

const Stat = styled.div`
  min-width: 150px;

  small {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.74rem;
  }

  strong {
    display: block;
    font-size: 1.08rem;
    color: #f9fafb;
    margin-top: 0.18rem;
  }
`;

const HeroVisualCard = styled(motion.div)`
  border-radius: 26px;
  background: linear-gradient(135deg, #020617, #0f172a);
  padding: 1.5rem 1.5rem 1.3rem;
  box-shadow: 0 22px 52px rgba(15, 23, 42, 0.85);
`;

const HeroVisualFrame = styled.div`
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #e0f2fe, #fef9c3);
  padding: 1.1rem 1rem 0.4rem;
`;

const HeroVisualImage = styled.img`
  display: block;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
`;

const HeroVisualCaption = styled.div`
  padding-top: 0.7rem;
  font-size: 0.78rem;
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  color: #e5e7eb;

  span.label {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.7rem;
    color: #93c5fd;
    margin-bottom: 0.1rem;
  }
`;

const ProjectThumbRow = styled.div`
  margin-top: 2.1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
`;

const ProjectThumb = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(51, 65, 85, 0.9);
  display: flex;
  flex-direction: column;
  font-size: 0.78rem;

  img {
    width: 100%;
    height: 78px;
    object-fit: cover;
  }

  div.info {
    padding: 0.5rem 0.6rem 0.55rem;
  }

  span.label {
    display: block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #9ca3af;
  }

  span.name {
    display: block;
    color: #e5e7eb;
    margin-top: 0.18rem;
  }
`;

/* --- STRIP --- */

const Strip = styled.section`
  background: #0ea5e9;
  padding: 0.6rem 0;
`;

const StripRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
`;

const StripBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: #e0f2fe;
  background: rgba(15, 23, 42, 0.16);
  border-radius: 999px;
  padding: 0.35rem 0.95rem;
`;

/* --- INDEPENDENT OVERSIGHT SECTION --- */

const OversightSection = styled.section`
  padding: 3rem 0 3.4rem;
  background: #ffffff;
`;

const OversightGrid = styled.div`
  display: grid;
  gap: 2.3rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    align-items: center;
  }
`;

const OversightTitle = styled.h2`
  font-size: 1.35rem;
  color: #0b3a6f;
  margin-bottom: 0.6rem;
`;

const OversightText = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 0.9rem;
`;

const OversightBullets = styled.ul`
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  color: #374151;

  li + li {
    margin-top: 0.35rem;
  }
`;

const OversightImageCard = styled.div`
  border-radius: 24px;
  overflow: hidden;
  background: #0f172a;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.35);
`;

const OversightImage = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;

  @media (min-width: 980px) {
    height: 260px;
  }
`;

const OversightCaption = styled.div`
  padding: 0.9rem 1rem 1rem;
  font-size: 0.8rem;
  color: #d1d5db;

  span.label {
    display: block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #93c5fd;
    margin-bottom: 0.18rem;
  }
`;

/* --- PROGRAM PERFORMANCE BAND --- */

const PerformanceSection = styled.section`
  background: #020617;
  color: #e5e7eb;
  padding: 3.1rem 0 3.6rem;
`;

const PerformanceGrid = styled.div`
  display: grid;
  gap: 2.3rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    align-items: center;
  }
`;

const PerformanceTitle = styled.h2`
  font-size: 1.35rem;
  color: #e5e7eb;
  margin-bottom: 0.5rem;
`;

const PerformanceText = styled.p`
  font-size: 0.95rem;
  color: #cbd5f5;
  margin-bottom: 0.9rem;
`;

const PerformanceBullets = styled.ul`
  margin: 0.6rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  color: #d1d5db;

  li + li {
    margin-top: 0.35rem;
  }
`;

const CircleMetric = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  margin: 0 auto;
  border-radius: 999px;
  background: radial-gradient(
    circle at 30% 0%,
    #22c55e 0,
    #0ea5e9 40%,
    #020617 85%
  );
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 1.2rem;
`;

const CircleText = styled.div`
  font-size: 0.8rem;

  h3 {
    font-size: 0.95rem;
    margin-bottom: 0.35rem;
  }

  span.label {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.7rem;
    color: #bfdbfe;
    margin-bottom: 0.18rem;
  }

  strong {
    color: #bbf7d0;
  }
`;

export default function HomeContent(): JSX.Element {
  return (
    <>
      {/* 1. HERO */}
      <HeroSection>
        <Container>
          <HeroGrid>
            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <HeroKicker>
                Civil engineering consultancy · Highways & infrastructure
              </HeroKicker>
              <HeroTitle>
                Smart <span className='accent'>thinking</span> for complex
                highways & corridor programs.
              </HeroTitle>
              <HeroText>
                Intl PE – Narendra Kumar Nawin helps governments, developers and
                multilateral agencies deliver expressways and corridor programs
                with robust contracts, quality designs and on-time completion.
              </HeroText>

              <CTAGroup>
                <PrimaryCTA href='/contact'>
                  Request a project review
                </PrimaryCTA>
                <SecondaryCTA href='/services'>
                  View consultancy services
                </SecondaryCTA>
                <TertiaryCTA
                  href={WHATSAPP_LINK}
                  target='_blank'
                  rel='noreferrer'
                >
                  Chat on WhatsApp
                </TertiaryCTA>
              </CTAGroup>

              <HeroStats>
                <Stat>
                  <small>Experience</small>
                  <strong>35+ years</strong>
                  Across highways, expressways & corridor programs.
                </Stat>
                <Stat>
                  <small>Highways & expressways</small>
                  <strong>7,000+ km</strong>
                  Delivered or advised across India and abroad.
                </Stat>
                <Stat>
                  <small>Program value</small>
                  <strong>USD 6bn+</strong>
                  Multilateral and government-funded projects.
                </Stat>
              </HeroStats>

              {/* Project thumbnails row */}
              <ProjectThumbRow>
                <ProjectThumb>
                  <img
                    src='/images/project-expressway-1.jpg'
                    alt='Expressway project'
                  />
                  <div className='info'>
                    <span className='label'>Expressway</span>
                    <span className='name'>
                      Access-controlled greenfield corridor
                    </span>
                  </div>
                </ProjectThumb>
                <ProjectThumb>
                  <img src='/images/project-flyover.jpg' alt='Urban flyover' />
                  <div className='info'>
                    <span className='label'>Urban flyover</span>
                    <span className='name'>
                      Multi-level interchange upgrades
                    </span>
                  </div>
                </ProjectThumb>
                <ProjectThumb>
                  <img src='/images/project-bridge.jpg' alt='River bridge' />
                  <div className='info'>
                    <span className='label'>Major bridge</span>
                    <span className='name'>
                      River crossing on national highway
                    </span>
                  </div>
                </ProjectThumb>
              </ProjectThumbRow>
            </motion.div>

            {/* RIGHT COLUMN: VISUAL */}
            <HeroVisualCard
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              <HeroVisualFrame>
                {/* Replace with your final hero illustration */}
                <HeroVisualImage
                  src='/images/hero-highway-placeholder.svg'
                  alt='Urban skyline with elevated metro, flyover and engineers on site'
                />
              </HeroVisualFrame>
              <HeroVisualCaption>
                <div>
                  <span className='label'>Program focus</span>
                  <div>Expressways · State highways · Corridor upgrades</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className='label'>Typical role</span>
                  <div>Independent advisor / Owner’s engineer</div>
                </div>
              </HeroVisualCaption>
            </HeroVisualCard>
          </HeroGrid>
        </Container>
      </HeroSection>

      {/* 2. PROGRAM / EXPERTISE STRIP */}
      <Strip>
        <Container>
          <StripRow>
            <StripBadge>✅ World Bank / ADB experience</StripBadge>
            <StripBadge>✅ EPC, PPP & HAM contract expertise</StripBadge>
            <StripBadge>✅ Advisory for PWD & state agencies</StripBadge>
            <StripBadge>✅ Focus on time, quality & safety</StripBadge>
          </StripRow>
        </Container>
      </Strip>

      {/* 3. HOW WE HELP */}
      <ServicesShowcase />

      {/* 4. INDEPENDENT OVERSIGHT */}
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
                <OversightTitle>
                  Independent oversight that protects your investment.
                </OversightTitle>
                <OversightText>
                  Large highway programs fail when contracts, design and site
                  realities drift apart. We act as an independent voice to keep
                  obligations, quality and progress aligned.
                </OversightText>

                <OversightBullets>
                  <li>
                    Review of EPC / HAM / PPP contracts and risk allocation.
                  </li>
                  <li>
                    Structured site reviews and progress reporting for decision
                    makers.
                  </li>
                  <li>
                    Early warning on delays, variations and potential disputes.
                  </li>
                  <li>
                    Support on claims, negotiations and contract close-out.
                  </li>
                </OversightBullets>
              </div>

              <OversightImageCard>
                {/* Replace with a real photo of site inspection / meeting */}
                <OversightImage
                  src='/images/oversight-site-review.jpg'
                  alt='Engineers reviewing drawings on a highway construction site'
                />
                <OversightCaption>
                  <span className='label'>On-site focus</span>
                  Indepth reviews with concessionaires, contractors and PWD
                  teams to keep projects moving without surprises.
                </OversightCaption>
              </OversightImageCard>
            </OversightGrid>
          </motion.div>
        </Container>
      </OversightSection>

      {/* 5. PROGRAM PERFORMANCE BAND */}
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
                  Program performance that stakeholders can trust.
                </PerformanceTitle>
                <PerformanceText>
                  Expressway and corridor programs involve many contracts,
                  packages and agencies. We help you see the full picture so you
                  can act before issues turn into claims.
                </PerformanceText>

                <PerformanceBullets>
                  <li>
                    Portfolio-level view across packages, contracts and
                    milestones.
                  </li>
                  <li>
                    Dashboards that link physical progress, payments and risk.
                  </li>
                  <li>Clear triggers for escalation and corrective action.</li>
                  <li>
                    Lessons learned to improve the next program you deliver.
                  </li>
                </PerformanceBullets>
              </div>

              <CircleMetric>
                {/* Placeholder metric – feel free to change wording / numbers */}
                <CircleText>
                  <span className='label'>Measured impact</span>
                  <h3>Fewer disputes. Stronger outcomes.</h3>
                  <p>
                    Clients report <strong>25–30% reduction</strong> in
                    avoidable delay claims and smoother lender interactions when
                    structured oversight is in place.
                  </p>
                </CircleText>
              </CircleMetric>
            </PerformanceGrid>
          </motion.div>
        </Container>
      </PerformanceSection>

      {/* TRUST + WHY + TESTIMONIALS */}
      <ClientTrustSection />
    </>
  );
}
