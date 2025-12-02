'use client';

import styled from 'styled-components';

import Container from './Container';

const Strip = styled.section`
  background: #0ea5e9;
  color: #ecfeff;
  padding: 0.9rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  font-size: 0.85rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.15rem 0.7rem;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.2);
  }
`;

export default function HighlightStrip(): JSX.Element {
  return (
    <Strip>
      <Container>
        <Row>
          <span>✅ World Bank / ADB experience</span>
          <span>✅ EPC, PPP &amp; HAM contract expertise</span>
          <span>✅ Advisory for PWD &amp; state agencies</span>
          <span>✅ Focus on time, quality &amp; safety</span>
        </Row>
      </Container>
    </Strip>
  );
}
