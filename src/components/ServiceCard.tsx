'use client';

import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 1.7rem 1.6rem;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.03);
  transition:
    transform 150ms ease,
    box-shadow 150ms ease,
    border-color 150ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 35px rgba(15, 23, 42, 0.08);
    border-color: #cbd5f5;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
  color: #0b3a6f;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.92rem;
  color: #374151;
`;

const List = styled.ul`
  margin-top: 0.9rem;
  padding-left: 1.1rem;
  font-size: 0.86rem;
  color: #4b5563;

  li + li {
    margin-top: 0.3rem;
  }
`;

export type ServiceCardProps = {
  title: string;
  description: string;
  points?: string[];
};

export default function ServiceCard({
  title,
  description,
  points
}: ServiceCardProps): JSX.Element {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {points && points.length > 0 && (
        <List>
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </List>
      )}
    </Card>
  );
}
