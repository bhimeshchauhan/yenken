'use client';

import styled from 'styled-components';

import { WHATSAPP_LINK } from '@/lib/contactDetails';

const Fab = styled.a`
  position: fixed;
  right: 1.2rem;
  bottom: 1.2rem;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.5rem;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  z-index: 60;
`;

export default function FloatingWhatsApp(): JSX.Element {
  return (
    <Fab
      href={WHATSAPP_LINK}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat on WhatsApp'
    >
      💬
    </Fab>
  );
}
