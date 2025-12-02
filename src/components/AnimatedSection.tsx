'use client';

import { motion } from 'framer-motion';

import Section from './Section';

const MotionSection = motion(Section);

type AnimatedSectionProps = {
  children: React.ReactNode;
};

export default function AnimatedSection({
  children
}: AnimatedSectionProps): JSX.Element {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </MotionSection>
  );
}
