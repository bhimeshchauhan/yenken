'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import Container from './Container';

const SliderWrap = styled.div`
  background: #0f172a;
  color: #e5e7eb;
  padding: 3rem 0 3.4rem;
`;

const Inner = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: 1.3fr 1fr;
    align-items: center;
  }
`;

const TextBlock = styled.div`
  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: #f9fafb;
  }

  p {
    font-size: 0.95rem;
    color: #cbd5f5;
  }
`;

const Bullet = styled.div`
  margin-top: 1.3rem;
  font-size: 0.9rem;
`;

const ImageFrame = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.6);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.7);
  height: 260px;

  @media (min-width: 900px) {
    height: 300px;
  }
`;

const SlideImage = styled(motion.img)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.85), transparent 55%);
`;

const SlideCaption = styled.div`
  position: absolute;
  left: 1.3rem;
  bottom: 1.2rem;
  right: 1.3rem;
  color: #f9fafb;
  font-size: 0.9rem;

  h3 {
    margin: 0 0 0.15rem;
    font-size: 1rem;
  }

  span {
    font-size: 0.78rem;
    opacity: 0.9;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 0.9rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: ${({ active }): string => (active ? '18px' : '8px')};
  height: 8px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: ${({ active }): string =>
    active ? '#fbbf24' : 'rgba(148,163,184,0.8)'};
  transition: all 150ms ease;
`;

type Slide = {
  name: string;
  location: string;
  imageUrl: string;
};

const slides: Slide[] = [
  {
    name: 'Nagpur–Mumbai Super Communication Expressway',
    location: 'Maharashtra, India',
    imageUrl:
      'https://images.unsplash.com/photo-1588731234159-9862851c5e1b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    name: 'Green National Highway Corridor',
    location: 'World Bank – India',
    imageUrl:
      'https://images.unsplash.com/photo-1671244034343-a6fba8c9b872?auto=format&fit=crop&w=1400&q=80'
  },
  {
    name: 'Cross-border Corridor & OSBP',
    location: 'Kenya–Ethiopia',
    imageUrl:
      'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1400&q=80'
  }
];

export default function ProjectSlider(): JSX.Element {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const current = slides[index];

  return (
    <SliderWrap>
      <Container>
        <Inner>
          <TextBlock>
            <h2>Delivering complex corridors with confidence.</h2>
            <p>
              From national expressways to cross-border corridors, Yenken
              Consulting has led and advised on programs funded by World Bank,
              ADB, AfDB and state agencies – with a focus on time, quality and
              safety.
            </p>

            <Bullet>
              • Expressways and greenfield corridors • Climate-resilient
              upgrades • One Stop Border Posts (OSBP) and logistics links
            </Bullet>
          </TextBlock>

          <div>
            <ImageFrame>
              <AnimatePresence mode='wait'>
                <SlideImage
                  key={current.imageUrl}
                  src={current.imageUrl}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7 }}
                />
              </AnimatePresence>
              <SlideOverlay />
              <SlideCaption>
                <h3>{current.name}</h3>
                <span>{current.location}</span>
              </SlideCaption>
            </ImageFrame>

            <Dots>
              {slides.map((s, i) => (
                <Dot
                  key={s.name}
                  active={i === index}
                  onClick={(): void => setIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                />
              ))}
            </Dots>
          </div>
        </Inner>
      </Container>
    </SliderWrap>
  );
}
