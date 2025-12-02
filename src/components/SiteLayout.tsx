'use client';

import React from 'react';
import styled from 'styled-components';

import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

const Main = styled.main`
  background: #f3f4f6; /* neutral base, sections override */
  min-height: 100vh;
`;

export default function SiteLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
