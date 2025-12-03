'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Container from './Container';

const Shell = styled.section`
  background: #ffffff;
  padding: 3.4rem 0 3.6rem;
`;

const HeadingBlock = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    color: #0b3a6f;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.93rem;
    color: #6b7280;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  gap: 1.4rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.div`
  background: #f9fafb;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  padding: 1.4rem 1.3rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.03);
  font-size: 0.9rem;
  color: #374151;

  footer {
    margin-top: 0.8rem;
    font-size: 0.82rem;
    color: #6b7280;
  }

  strong {
    display: block;
    color: #0b3a6f;
  }
`;

export default function TestimonialsSection(): JSX.Element {
  return (
    <Shell>
      <Container>
        <HeadingBlock>
          <h2>What clients say</h2>
          <p>
            Feedback from leaders who have trusted Yenken on complex highway and
            corridor assignments.
          </p>
        </HeadingBlock>

        <Grid
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Card>
            “Brought structure and clarity to a multi-package expressway
            project. His guidance on contracts and claims helped us avoid long
            disputes.”
            <footer>
              <strong>Chief Engineer</strong>
              State highway authority, India
            </footer>
          </Card>

          <Card>
            “His understanding of funding agency procedures and government
            systems made the project smoother for all stakeholders.”
            <footer>
              <strong>Task Team Lead</strong>
              Multilateral development bank
            </footer>
          </Card>

          <Card>
            “Provided practical, site-oriented advice that improved quality and
            kept progress aligned with our obligations.”
            <footer>
              <strong>Project Director</strong>
              Highway concessionaire
            </footer>
          </Card>
        </Grid>
      </Container>
    </Shell>
  );
}
