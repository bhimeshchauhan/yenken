'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ tiltX: number; tiltY: number }>`
  perspective: 800px;
  cursor: pointer;

  > div {
    transform: ${({ tiltX, tiltY }): string =>
      `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`};
    transform-style: preserve-3d;
    transition: transform 120ms ease-out;
  }
`;

type InteractiveCardProps = {
  children: React.ReactNode;
  maxTilt?: number;
};

export default function InteractiveCard({
  children,
  maxTilt = 6
}: InteractiveCardProps): JSX.Element {
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (0.5 - y) * maxTilt * 2; // invert so up/down feels natural
    const tiltY = (x - 0.5) * maxTilt * 2;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleLeave = (): void => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Wrapper
      tiltX={tilt.x}
      tiltY={tilt.y}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div>{children}</div>
    </Wrapper>
  );
}
