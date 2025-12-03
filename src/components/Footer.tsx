'use client';

import styled from 'styled-components';

import { EMAIL, LINKEDIN, PHONE_DISPLAY, WEBSITE } from '@/lib/contactDetails';

import Container from './Container';

const Wrap = styled.footer`
  background: #0f172a;
  color: #9ca3af;
  padding: 1.8rem 0;
  margin-top: 0;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-size: 0.85rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;

  a {
    color: #e5e7eb;
  }
`;

export default function Footer(): JSX.Element {
  return (
    <Wrap>
      <Container>
        <Inner>
          <div>© {new Date().getFullYear()} Yenken Consulting</div>
          <Links>
            <span>📞 {PHONE_DISPLAY}</span>
            <a href={`mailto:${EMAIL}`}>✉️ Email</a>
            <a href={WEBSITE} target='_blank' rel='noreferrer'>
              🌐 Website
            </a>
            <a href={LINKEDIN} target='_blank' rel='noreferrer'>
              in LinkedIn
            </a>
          </Links>
        </Inner>
      </Container>
    </Wrap>
  );
}
