'use client';

import styled from 'styled-components';

const Card = styled.article`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 1.6rem 1.5rem;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.03);
  transition:
    transform 150ms ease,
    box-shadow 150ms ease,
    border-color 150ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 35px rgba(15, 23, 42, 0.08);
    border-color: #bfdbfe;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.6rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #0b3a6f;
`;

const Tag = styled.span`
  font-size: 0.72rem;
  background: #eff6ff;
  color: #1d4ed8;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
`;

const Location = styled.p`
  margin: 0.45rem 0;
  font-size: 0.86rem;
  color: #6b7280;
`;

const Summary = styled.p`
  margin: 0;
  font-size: 0.92rem;
  color: #374151;
`;

export type ProjectCardProps = {
  name: string;
  location: string;
  sector: string;
  summary: string;
};

export default function ProjectCard({
  name,
  location,
  sector,
  summary
}: ProjectCardProps): JSX.Element {
  return (
    <Card>
      <Header>
        <Title>{name}</Title>
        <Tag>{sector}</Tag>
      </Header>
      <Location>{location}</Location>
      <Summary>{summary}</Summary>
    </Card>
  );
}
