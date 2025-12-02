'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import Container from './Container';

const Wrap = styled.section`
  background: #f5f5f4;
  padding: 2.8rem 0 2.4rem;

  @media (min-width: 768px) {
    padding: 3.4rem 0 2.8rem;
  }

  border-bottom: 1px solid #e5e7eb;
`;

const CrumbRow = styled.div`
  font-size: 0.8rem;
  color: #6b7280;
  margin-bottom: 0.8rem;

  a {
    color: #6b7280;
  }
`;

const Title = styled.h1`
  font-size: 1.7rem;
  margin: 0 0 0.3rem;
  color: #111827;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #4b5563;
  max-width: 40rem;
`;

type Props = {
  title: string;
  subtitle: string;
  currentLabel: string;
};

export default function PageHeader({
  title,
  subtitle,
  currentLabel
}: Props): JSX.Element {
  return (
    <Wrap>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <CrumbRow>
            <Link href='/'>Home</Link> / <span>{currentLabel}</span>
          </CrumbRow>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </motion.div>
      </Container>
    </Wrap>
  );
}
