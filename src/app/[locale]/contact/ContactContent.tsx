'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Container from '@/components/Container';

import { EMAIL, PHONE_DISPLAY, WHATSAPP_LINK } from '@/lib/contactDetails';

const Section = styled.section`
  padding: 3rem 0 3.6rem;
  background: #f3f4f6;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const InfoCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  padding: 1.4rem 1.3rem;
  font-size: 0.9rem;
  color: #374151;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.04);

  h3 {
    margin: 0 0 0.3rem;
    font-size: 1rem;
    color: #111827;
  }

  span.label {
    display: block;
    font-size: 0.8rem;
    color: #9ca3af;
    margin-bottom: 0.4rem;
  }

  a {
    color: #0b3a6f;
  }
`;

const FormWrap = styled.div`
  margin-top: 2.4rem;
  background: #f5f5f4;
  border-radius: 22px;
  padding: 2rem 1.6rem;

  @media (min-width: 900px) {
    padding: 2.3rem 2.2rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
  color: #111827;
`;

const FormText = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 1.2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  max-width: 640px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    font-size: 0.85rem;
    color: #4b5563;
  }

  input,
  textarea {
    border-radius: 999px;
    border: 1px solid #d1d5db;
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
    outline: none;
    background: #ffffff;
  }

  textarea {
    border-radius: 18px;
    resize: vertical;
    min-height: 120px;
  }
`;

const FullWidthField = styled(Field)`
  grid-column: 1 / -1;
`;

const SubmitRow = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
`;

const Submit = styled.button`
  border: none;
  border-radius: 999px;
  padding: 0.8rem 1.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  background: #0b3a6f;
  color: #f9fafb;
  cursor: pointer;
`;

const SecondaryLink = styled.a`
  font-size: 0.9rem;
  color: #0b3a6f;
`;

const MapPlaceholder = styled.div`
  margin-top: 2.6rem;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  background: repeating-linear-gradient(
    135deg,
    #f3f4f6,
    #f3f4f6 10px,
    #e5e7eb 10px,
    #e5e7eb 20px
  );
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 0.9rem;
`;

export default function ContactContent(): JSX.Element {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <CardGrid>
            <InfoCard>
              <span className='label'>Visit</span>
              <h3>Office</h3>
              <p>Mumbai, India (available for meetings by appointment only).</p>
            </InfoCard>

            <InfoCard>
              <span className='label'>Call</span>
              <h3>Phone &amp; WhatsApp</h3>
              <p>
                Phone: <a href={`tel:${PHONE_DISPLAY}`}>{PHONE_DISPLAY}</a>
                <br />
                WhatsApp:{' '}
                <a href={WHATSAPP_LINK} target='_blank' rel='noreferrer'>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </InfoCard>

            <InfoCard>
              <span className='label'>Email</span>
              <h3>Project enquiries</h3>
              <p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <br />
                Please attach any TOR / project briefs if available.
              </p>
            </InfoCard>
          </CardGrid>

          <FormWrap>
            <FormTitle>Leave us a message</FormTitle>
            <FormText>
              Share a few details and we’ll respond with suggested next steps or
              a suitable time for a call.
            </FormText>

            <Form action={`mailto:${EMAIL}`} method='post' encType='text/plain'>
              <Field>
                <label htmlFor='name'>Name*</label>
                <input id='name' name='name' required />
              </Field>
              <Field>
                <label htmlFor='organisation'>Organisation</label>
                <input id='organisation' name='organisation' />
              </Field>
              <Field>
                <label htmlFor='email'>Email*</label>
                <input id='email' name='email' type='email' required />
              </Field>
              <Field>
                <label htmlFor='phone'>Phone / WhatsApp</label>
                <input id='phone' name='phone' />
              </Field>
              <FullWidthField>
                <label htmlFor='message'>Project / enquiry details*</label>
                <textarea id='message' name='message' required />
              </FullWidthField>
              <SubmitRow>
                <Submit type='submit'>Send message</Submit>
                <SecondaryLink
                  href={WHATSAPP_LINK}
                  target='_blank'
                  rel='noreferrer'
                >
                  Or chat on WhatsApp →
                </SecondaryLink>
              </SubmitRow>
            </Form>
          </FormWrap>

          <MapPlaceholder>
            Map / project location overview (embed from Google Maps or add a
            static image here).
          </MapPlaceholder>
        </motion.div>
      </Container>
    </Section>
  );
}
