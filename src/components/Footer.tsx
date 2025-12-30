'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { EMAIL, LINKEDIN, PHONE_DISPLAY, WEBSITE } from '@/lib/contactDetails';

import Container from './Container';

/* ---------- Styles ---------- */

const Wrap = styled.footer`
  background: #0f172a;
  color: #9ca3af;
  padding: 3rem 0 2rem;
  font-size: 0.85rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Brand = styled.div`
  font-size: 0.9rem;
  color: #e5e7eb;

  strong {
    display: block;
    font-size: 1rem;
    color: #ffffff;
  }

  span {
    font-size: 0.8rem;
    color: #9ca3af;
  }
`;

const Title = styled.div`
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.3rem;
`;

const FooterLink = styled(Link)`
  color: #9ca3af;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const ExternalLink = styled.a`
  color: #9ca3af;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #1f2937;
  margin: 2rem 0 1rem;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

/* ---------- Component ---------- */

export default function Footer(): JSX.Element {
  return (
    <Wrap>
      <Container>
        <Grid>
          {/* Brand / Mission */}
          <Column>
            <Brand>
              <strong>
                Yenken International Consulting Enterprises (YICE)
              </strong>
              <span>
                Independent civil & infrastructure consultancy supporting
                highway, expressway and corridor programs worldwide.
              </span>
            </Brand>
          </Column>

          {/* Navigation */}
          <Column>
            <Title>Company</Title>
            <FooterLink href='/en'>Home</FooterLink>
            <FooterLink href='/en/about'>About</FooterLink>
            <FooterLink href='/en/services'>Services</FooterLink>
            <FooterLink href='/en/projects'>Projects</FooterLink>
            <FooterLink href='/en/contact'>Contact</FooterLink>
            <FooterLink href='/en/careers'>Careers</FooterLink>
          </Column>

          {/* Legal */}
          <Column>
            <Title>Legal</Title>
            <FooterLink href='/en/privacy'>Privacy Policy</FooterLink>
            <FooterLink href='/en/terms'>Terms & Conditions</FooterLink>
          </Column>

          {/* Contact */}
          <Column>
            <Title>Contact</Title>
            <span>📞 {PHONE_DISPLAY}</span>
            <ExternalLink href={`mailto:${EMAIL}`}>✉️ {EMAIL}</ExternalLink>
            <ExternalLink href={WEBSITE} target='_blank' rel='noreferrer'>
              🌐 Website
            </ExternalLink>
            <ExternalLink href={LINKEDIN} target='_blank' rel='noreferrer'>
              🔗 LinkedIn
            </ExternalLink>
          </Column>
        </Grid>

        <Divider />

        <Bottom>
          <div>
            © {new Date().getFullYear()} Yenken International Consulting
            Enterprises. All rights reserved.
          </div>
          <div>
            Designed for clarity, trust & long-term infrastructure delivery.
          </div>
        </Bottom>
      </Container>
    </Wrap>
  );
}
