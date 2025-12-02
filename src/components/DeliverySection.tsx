'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Container from './Container';

const Shell = styled.section`
  background: #ffffff;
  padding: 3.4rem 0 3.8rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2.3rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    align-items: center;
  }
`;

const Text = styled(motion.div)`
  h2 {
    font-size: 1.5rem;
    color: #0b3a6f;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.95rem;
    color: #4b5563;
    margin-bottom: 0.8rem;
  }

  ul {
    margin: 0.7rem 0 0;
    padding-left: 1.1rem;
    font-size: 0.9rem;
    color: #374151;
  }

  li + li {
    margin-top: 0.25rem;
  }
`;

const VisualWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const CircleCard = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 20%,
    #22c55e 0,
    #0ea5e9 45%,
    #4f46e5 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.35);
  overflow: hidden;
`;

const InnerPanel = styled.div`
  width: 78%;
  height: 78%;
  border-radius: 24px;
  background: #0f172a;
  color: #e5e7eb;
  padding: 1.1rem 1rem;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 0.96rem;
    margin: 0 0 0.45rem;
    color: #f9fafb;
  }

  span.metric {
    font-size: 1.4rem;
    font-weight: 700;
    color: #22c55e;
  }

  small {
    font-size: 0.75rem;
    color: #9ca3af;
  }
`;

export default function DeliverySection(): JSX.Element {
  return (
    <Shell>
      <Container>
        <Grid>
          <Text
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2>Better delivery. Stronger risk control.</h2>
            <p>
              Large infrastructure programs fail when design, procurement and
              contracts are not aligned. We help you connect these dots so
              projects move without constant firefighting.
            </p>
            <ul>
              <li>Clarity on scope, responsibilities and payment triggers.</li>
              <li>Independent view on progress vs. contract obligations.</li>
              <li>Early warning on delays, variations and claims.</li>
              <li>Performance-driven dashboards for decision makers.</li>
            </ul>
          </Text>

          <VisualWrap
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <CircleCard>
              <InnerPanel>
                <div>
                  <h3>On-time delivery focus</h3>
                  <p style={{ margin: 0 }}>
                    Projects delivered ahead of schedule with bonus payments for
                    concessionaires and contractors under strong contract
                    management.
                  </p>
                </div>
                <div>
                  <span className='metric'>27%</span>
                  <small>
                    Average reduction in avoidable delay claims across recent
                    engagements.
                  </small>
                </div>
              </InnerPanel>
            </CircleCard>
          </VisualWrap>
        </Grid>
      </Container>
    </Shell>
  );
}
