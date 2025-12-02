'use client';

import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PHONE_TEL } from '@/lib/contactDetails';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.9rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Styled Next <Link> for brand
const Brand = styled(Link)`
  display: block;
  font-weight: 700;
  font-size: 1.05rem;
  color: #0b3a6f;
  line-height: 1.2;

  span {
    display: block;
    font-size: 0.75rem;
    color: #6b7280;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

// Styled Next <Link> for nav items
const NavItem = styled(Link)`
  font-size: 0.9rem;
  color: #111827;
`;

const NavLinks = styled.nav<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    right: 0;
    top: 3.3rem;
    flex-direction: column;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    padding: ${({ open }): string => (open ? '0.8rem 1.25rem 1.1rem' : '0')};
    display: ${({ open }): string => (open ? 'flex' : 'none')};
    align-items: flex-start;
  }
`;

// Plain <a> for external/tel CTA
const CTAButton = styled.a`
  padding: 0.55rem 1.2rem;
  border-radius: 999px;
  background: #0b3a6f;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
`;

const Burger = styled.button`
  display: none;
  border: none;
  background: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-flex;
    flex-direction: column;
    gap: 3px;
  }

  span {
    width: 20px;
    height: 2px;
    background: #111827;
  }
`;

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const closeMenu = (): void => setOpen(false);

  return (
    <Header>
      <Inner>
        <Brand href='/'>
          Yenken Consulting
          <span>Intl PE · Infrastructure & Contracts</span>
        </Brand>

        <Burger
          onClick={(): void => setOpen((v) => !v)}
          aria-label='Toggle navigation menu'
        >
          <span />
          <span />
          <span />
        </Burger>

        <NavLinks open={open}>
          {links.map((l) => (
            <NavItem key={l.href} href={l.href} onClick={closeMenu}>
              {l.label}
            </NavItem>
          ))}

          {/* Tel link is external → normal <a>, not Next <Link> */}
          <CTAButton href={`tel:${PHONE_TEL}`} onClick={closeMenu}>
            Call Now
          </CTAButton>
        </NavLinks>
      </Inner>
    </Header>
  );
}
