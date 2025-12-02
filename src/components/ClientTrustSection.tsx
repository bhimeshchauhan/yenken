'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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
  background: radial-gradient(
    circle at 0% 0%,
    #dbeafe 0,
    #f9fafb 40%,
    #eff6ff 100%
  );
  padding: 3.4rem 0 3.6rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.2rem;
`;

const Title = styled.h2`
  font-size: 1.35rem;
  color: #0b3a6f;
  margin-bottom: 0.4rem;
`;

const Subtitle = styled.p`
  font-size: 0.93rem;
  color: #4b5563;
  max-width: 42rem;
  margin: 0 auto;
`;

/* stats row */

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2.6rem;

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const StatCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 20px;
  padding: 1.1rem 1.2rem;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

const StatBadge = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background: radial-gradient(
    circle at 25% 0%,
    #22c55e 0,
    #0ea5e9 50%,
    #eff6ff 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #f9fafb;
`;

const StatText = styled.div`
  h3 {
    font-size: 1rem;
    color: #0b3a6f;
    margin: 0 0 0.1rem;
  }

  span.value {
    display: block;
    font-size: 1.3rem;
    font-weight: 700;
    color: #111827;
  }

  p {
    font-size: 0.8rem;
    color: #6b7280;
    margin-top: 0.2rem;
  }
`;

/* why cards */

const WhyHeader = styled.div`
  text-align: center;
  margin-bottom: 1.6rem;
`;

const WhyTitle = styled.h3`
  font-size: 1.1rem;
  color: #0b3a6f;
  margin-bottom: 0.3rem;
`;

const WhySubtitle = styled.p`
  font-size: 0.86rem;
  color: #4b5563;
  max-width: 32rem;
  margin: 0 auto;
`;

const WhyGrid = styled.div`
  display: grid;
  gap: 1.1rem;
  grid-template-columns: 1fr;

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const WhyCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 18px;
  padding: 1.15rem 1.15rem 1.05rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.08),
      rgba(16, 185, 129, 0.05),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.18s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const WhyIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-bottom: 0.55rem;
  color: #1d4ed8;
`;

const WhyHeading = styled.div`
  font-size: 0.96rem;
  font-weight: 600;
  color: #0b3a6f;
  margin-bottom: 0.3rem;
`;

const WhyBody = styled.p`
  font-size: 0.86rem;
  color: #4b5563;
`;

/* testimonials */

const TestimonialsBlock = styled.div`
  margin-top: 2.6rem;
  padding-top: 1.9rem;
  border-top: 1px solid #e5e7eb;
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 1.7rem;
`;

const TestimonialsTitle = styled.h3`
  font-size: 1.1rem;
  color: #0b3a6f;
  margin-bottom: 0.3rem;
`;

const TestimonialsSubtitle = styled.p`
  font-size: 0.86rem;
  color: #4b5563;
  max-width: 40rem;
  margin: 0 auto;
`;

const TestimonialsRow = styled.div`
  display: grid;
  gap: 1.1rem;
  grid-template-columns: 1fr;

  @media (min-width: 980px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const TestimonialCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  padding: 1.3rem 1.2rem 1.25rem;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
  font-size: 0.88rem;
  color: #374151;

  p.quote {
    margin-bottom: 0.9rem;
  }

  div.meta {
    font-size: 0.8rem;
    color: #6b7280;
  }

  span.name {
    display: block;
    font-weight: 600;
    color: #111827;
  }
`;

/* ---------- data ---------- */

const stats = [
  {
    icon: '🛣️',
    label: 'Corridor & highway experience',
    value: 35,
    suffix: '+ years',
    description: 'On large highway, expressway and corridor assignments.'
  },
  {
    icon: '📊',
    label: 'Program value advised',
    value: 6,
    suffix: 'bn+ USD',
    description: 'Across government and multilateral-funded programs.'
  },
  {
    icon: '🌍',
    label: 'Countries & states',
    value: 5,
    suffix: '+',
    description: 'Assignments across India and select international projects.'
  }
];

const whyItems = [
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

export default function ClientTrustSection(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const years = useCountUp(35, isInView);
  const value = useCountUp(6, isInView);
  const countries = useCountUp(5, isInView);

  const statValues = [years, value, countries];

  return (
    <Section ref={ref}>
      <Container>
        <Header>
          <Title>Why clients work with N. K. Nawin</Title>
          <Subtitle>
            A blend of on-site experience, contract knowledge and multilateral
            exposure that helps your highway and corridor programs move with
            clarity and confidence.
          </Subtitle>
        </Header>

        {/* stats */}
        <StatsRow>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <StatBadge>{stat.icon}</StatBadge>
              <StatText>
                <h3>{stat.label}</h3>
                <span className='value'>
                  {statValues[index]}
                  {stat.suffix ? ` ${stat.suffix}` : ''}
                </span>
                <p>{stat.description}</p>
              </StatText>
            </StatCard>
          ))}
        </StatsRow>

        {/* why cards */}
        <WhyHeader>
          <WhyTitle>What you can expect when we work together</WhyTitle>
          <WhySubtitle>
            Clear roles, stronger contracts and a steady hand on complex
            infrastructure delivery.
          </WhySubtitle>
        </WhyHeader>

        <WhyGrid>
          {whyItems.map((item) => (
            <WhyCard
              key={item.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <WhyIcon>{item.icon}</WhyIcon>
              <WhyHeading>{item.title}</WhyHeading>
              <WhyBody>{item.text}</WhyBody>
            </WhyCard>
          ))}
        </WhyGrid>

        {/* testimonials */}
        <TestimonialsBlock>
          <TestimonialsHeader>
            <TestimonialsTitle>What clients say</TestimonialsTitle>
            <TestimonialsSubtitle>
              Feedback from leaders who have trusted N. K. Nawin on complex
              highway and corridor assignments.
            </TestimonialsSubtitle>
          </TestimonialsHeader>

          <TestimonialsRow>
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 250, damping: 19 }}
              >
                <p className='quote'>“{t.quote}”</p>
                <div className='meta'>
                  <span className='name'>{t.name}</span>
                  <span>{t.role}</span>
                </div>
              </TestimonialCard>
            ))}
          </TestimonialsRow>
        </TestimonialsBlock>
      </Container>
    </Section>
  );
}
