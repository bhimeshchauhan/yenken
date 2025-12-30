'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { PHONE_TEL } from '@/lib/contactDetails';

/* ---------------- styles ---------------- */

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

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
`;

const BrandText = styled.div`
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

const BrandLogoWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
`;

const NavLinks = styled.nav<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    right: 0;
    top: 3.3rem;
    flex-direction: column;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    padding: ${({ open }: { open: boolean }): string =>
      open ? '0.8rem 1.25rem 1.1rem' : '0'};
    display: ${({ open }: { open: boolean }): string =>
      open ? 'flex' : 'none'};
    align-items: flex-start;
  }
`;

const NavItem = styled(Link)<{ $active: boolean }>`
  font-size: 0.9rem;
  color: ${({ $active }): string => ($active ? '#0b3a6f' : '#111827')};
  font-weight: ${({ $active }): string => ($active ? '600' : '400')};
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: ${({ $active }): string => ($active ? '100%' : '0')};
    height: 2px;
    background: #0b3a6f;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CTAButton = styled.a`
  padding: 0.55rem 1.2rem;
  border-radius: 999px;
  background: #0b3a6f;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
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

/* ---------------- component ---------------- */

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const locale = pathname.split('/')[1] || 'en';
  const cleanPath = pathname.replace(/\/$/, '');

  const navLinks = [
    { href: `/${locale}`, label: 'Home' },
    { href: `/${locale}/about`, label: 'About' },
    { href: `/${locale}/services`, label: 'Services' },
    { href: `/${locale}/projects`, label: 'Projects' },
    { href: `/${locale}/contact`, label: 'Contact' },
    { href: `/${locale}/careers`, label: 'Careers' }
  ];

  const closeMenu = (): void => setOpen(false);

  return (
    <Header>
      <Inner>
        <Brand href={`/${locale}`}>
          <BrandLogoWrapper>
            <Image
              src='/images/logo.svg'
              alt='YICE logo'
              width={32}
              height={32}
            />
          </BrandLogoWrapper>
          <BrandText>
            Yenken International Consulting Enterprises (YICE)
            <span>Intl PE · Infrastructure &amp; Contracts</span>
          </BrandText>
        </Brand>

        <Burger onClick={(): void => setOpen((v: boolean) => !v)}>
          <span />
          <span />
          <span />
        </Burger>

        <NavLinks open={open}>
          {navLinks.map((l) => (
            <NavItem
              key={l.href}
              href={l.href}
              $active={
                l.href === `/${locale}`
                  ? cleanPath === `/${locale}`
                  : cleanPath === l.href || cleanPath.startsWith(`${l.href}/`)
              }
              onClick={closeMenu}
            >
              {l.label}
            </NavItem>
          ))}

          <CTAButton href={`tel:${PHONE_TEL}`} onClick={closeMenu}>
            Call Now
          </CTAButton>
        </NavLinks>
      </Inner>
    </Header>
  );
}
