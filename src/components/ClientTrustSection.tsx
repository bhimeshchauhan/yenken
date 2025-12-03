'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import styled from 'styled-components';

import Container from '@/components/Container';

/* ---------- helpers ---------- */

function useCountUp(
  target: number,
  shouldStart: boolean,
  duration = 1.5
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setValue(0);
      return;
    }

    let frameId: number;
    const start = performance.now();

    const tick = (now: number): void => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [target, shouldStart, duration]);

  return value;
}

/* ---------- styled ---------- */

const Section = styled.section`
  background: linear-gradient(180deg, #f9fafb 0%, #eff4ff 100%);
  padding: 3.8rem 0 3.9rem;
`;

const TopGrid = styled.div`
  display: grid;
  gap: 2.8rem;
  align-items: center;
  margin-bottom: 2.8rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
  }
`;

/* left side */

const LeftBlock = styled.div``;

const Title = styled.h2`
  font-size: 2rem;
  line-height: 1.15;
  color: #0f172a;
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  max-width: 32rem;
`;

const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1.8rem;
`;

const AvatarStack = styled.div`
  display: flex;
  align-items: center;

  span {
    width: 38px;
    height: 38px;
    border-radius: 999px;
    border: 2px solid #f9fafb;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: #111827;
    background: linear-gradient(135deg, #1d4ed8, #22c55e);
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.2);
  }

  span + span {
    margin-left: -10px;
    background: linear-gradient(135deg, #f97316, #facc15);
  }

  span:nth-child(3) {
    background: linear-gradient(135deg, #6366f1, #ec4899);
  }
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;

  span.value {
    font-size: 1.3rem;
    font-weight: 700;
    color: #111827;
    line-height: 1.1;
  }

  span.label {
    font-size: 0.84rem;
    color: #6b7280;
    margin-top: 0.15rem;
  }
`;

/* right side feature cards */

const FeaturesGrid = styled.div`
  display: grid;
  gap: 1.1rem;
  grid-template-columns: 1fr;
  max-width: 480px;
  margin: 0 auto;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FeatureCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 20px;
  padding: 1.3rem 1.4rem 1.2rem;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
  border: 1px solid #e5e7eb;
  position: relative;
  overflow: hidden;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  /* equal height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  /* underline on hover – full width bottom */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: #fb7185;
    transform: scaleX(0);
    transform-origin: left;
    opacity: 0;
    transition:
      transform 0.22s ease-out,
      opacity 0.22s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    opacity: 1;
  }

  /* subtle glow on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.06),
      rgba(16, 185, 129, 0.04),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.18s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    box-shadow: 0 24px 50px rgba(15, 23, 42, 0.1);
    border-color: #d1d5db;
  }

  @media (min-width: 960px) {
    /* stagger: right column slightly lower */
    &:nth-child(2n) {
      margin-top: 1.4rem;
    }
  }
`;

const FeatureIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  color: #1d4ed8;
`;

const FeatureTitle = styled.div`
  font-size: 0.98rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.25rem;
`;

const FeatureText = styled.p`
  font-size: 0.86rem;
  color: #4b5563;
`;

/* ---------- testimonials ---------- */

const TestimonialsBlock = styled.div`
  margin-top: 3rem;
  padding-top: 2.2rem;
  border-top: 1px solid #e5e7eb;
`;

const TestimonialsHeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-bottom: 2.1rem;
  text-align: center;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    text-align: left;
  }
`;

const TestimonialsHeaderText = styled.div``;

const TestimonialsTitle = styled.h3`
  font-size: 1.4rem;
  color: #0f172a;
  margin-bottom: 0.35rem;
`;

const TestimonialsSubtitle = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  max-width: 38rem;
  margin: 0 auto;

  @media (min-width: 900px) {
    margin: 0;
  }
`;

const TestimonialsNav = styled.div`
  display: inline-flex;
  gap: 0.6rem;
  justify-content: center;
`;

const NavButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #0f172a;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
  cursor: pointer;
  transition:
    background 0.18s ease,
    transform 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    background: #0f172a;
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.12);
  }
`;

const TestimonialsRow = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;
  align-items: stretch;

  @media (min-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const TestimonialCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 22px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);
  padding: 1.6rem 1.5rem 1.45rem;
  font-size: 0.9rem;
  color: #374151;
  transition:
    box-shadow 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease;

  &:hover {
    box-shadow: 0 22px 60px rgba(15, 23, 42, 0.12);
    border-color: #d1d5db;
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.75rem;
`;

const Avatar = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 999px;
  background: linear-gradient(135deg, #1d4ed8, #22c55e);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
`;

const PersonMeta = styled.div`
  span.name {
    display: block;
    font-weight: 600;
    color: #111827;
    font-size: 0.95rem;
  }

  span.role {
    display: block;
    font-size: 0.8rem;
    color: #6b7280;
    margin-top: 0.12rem;
  }
`;

const TestimonialQuote = styled.p`
  line-height: 1.5;
`;

/* ---------- data ---------- */

const features = [
  {
    icon: '🤝',
    title: 'Multi-stakeholder experience',
    text: 'Comfortable working with PWDs, concessionaires, lenders and multilaterals to keep everyone aligned.'
  },
  {
    icon: '⚖️',
    title: 'Contract & claims strength',
    text: 'Deep understanding of EPC, HAM and PPP contracts to prevent disputes and protect your position.'
  },
  {
    icon: '🚧',
    title: 'Execution-focused advice',
    text: 'Practical, site-oriented recommendations that your teams can actually use on live projects.'
  },
  {
    icon: '🌍',
    title: 'Multilateral & funding know-how',
    text: 'Experience with World Bank, ADB and other lenders so your programs meet their expectations.'
  }
];

const testimonials = [
  {
    quote:
      'Brought structure and clarity to a multi-package expressway project. His guidance on contracts and claims helped us avoid long disputes.',
    name: 'Chief Engineer',
    role: 'State highway authority, India'
  },
  {
    quote:
      'His understanding of funding agency procedures and government systems made the project smoother for all stakeholders.',
    name: 'Task Team Lead',
    role: 'Multilateral development bank'
  },
  {
    quote:
      'Provided practical, site-oriented advice that improved quality and kept progress aligned with our obligations.',
    name: 'Project Director',
    role: 'Highway concessionaire'
  }
];

/* ---------- component ---------- */

const ITEMS_PER_PAGE = 3;

export default function ClientTrustSection(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const years = useCountUp(35, isInView);

  // testimonial slider state
  const [page, setPage] = useState(0);
  const totalPages = Math.max(
    1,
    Math.ceil(testimonials.length / ITEMS_PER_PAGE)
  );

  const handlePrev = (): void => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = (): void => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const start = page * ITEMS_PER_PAGE;
  const visibleTestimonials = testimonials.slice(start, start + ITEMS_PER_PAGE);

  return (
    <Section ref={ref}>
      <Container>
        {/* top two-column area */}
        <TopGrid>
          <LeftBlock>
            <Title>Why clients work with Yenken</Title>
            <Subtitle>
              A blend of on-site experience, contract knowledge and multilateral
              exposure that helps your highway and corridor programs move with
              clarity and confidence.
            </Subtitle>

            <AvatarRow>
              <AvatarStack>
                <span>NK</span>
                <span>CL</span>
                <span>PM</span>
              </AvatarStack>

              <StatText>
                <span className='value'>{years}+ years</span>
                <span className='label'>
                  delivering highways, expressways & corridor programs
                </span>
              </StatText>
            </AvatarRow>
          </LeftBlock>

          <FeaturesGrid>
            {features.map((item) => (
              <FeatureCard
                key={item.title}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                <FeatureIcon>{item.icon}</FeatureIcon>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureText>{item.text}</FeatureText>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </TopGrid>

        {/* testimonials */}
        <TestimonialsBlock>
          <TestimonialsHeaderRow>
            <TestimonialsHeaderText>
              <TestimonialsTitle>What clients say</TestimonialsTitle>
              <TestimonialsSubtitle>
                Feedback from leaders who have trusted Yenken on complex highway
                and corridor assignments.
              </TestimonialsSubtitle>
            </TestimonialsHeaderText>

            <TestimonialsNav>
              <NavButton
                type='button'
                aria-label='Previous testimonial'
                onClick={handlePrev}
              >
                ←
              </NavButton>
              <NavButton
                type='button'
                aria-label='Next testimonial'
                onClick={handleNext}
              >
                →
              </NavButton>
            </TestimonialsNav>
          </TestimonialsHeaderRow>

          <AnimatePresence mode='wait'>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <TestimonialsRow>
                {visibleTestimonials.map((t) => {
                  const initials = t.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('');

                  return (
                    <TestimonialCard
                      key={t.name}
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                      }}
                    >
                      <TestimonialHeader>
                        <Avatar>{initials}</Avatar>
                        <PersonMeta>
                          <span className='name'>{t.name}</span>
                          <span className='role'>{t.role}</span>
                        </PersonMeta>
                      </TestimonialHeader>
                      <TestimonialQuote>“{t.quote}”</TestimonialQuote>
                    </TestimonialCard>
                  );
                })}
              </TestimonialsRow>
            </motion.div>
          </AnimatePresence>
        </TestimonialsBlock>
      </Container>
    </Section>
  );
}
