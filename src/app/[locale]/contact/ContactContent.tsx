/* eslint-disable @typescript-eslint/explicit-function-return-type */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Geography as RSMGeography } from 'react-simple-maps';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import styled from 'styled-components';

import Container from '@/components/Container';

import { EMAIL, PHONE_DISPLAY, WHATSAPP_LINK } from '@/lib/contactDetails';

/* ================= CONFIG ================= */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqeklolw';
const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

/* ================= STYLES ================= */

const Section = styled.section`
  padding: 3rem 0 3.6rem;
  background: #f3f4f6;
`;

const CardGrid = styled.div`
  display: grid;
  gap: 1.4rem;

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

const OfficeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const OfficeItem = styled.div`
  padding-top: 0.6rem;
  border-top: 1px solid #e5e7eb;

  &:first-child {
    padding-top: 0;
    border-top: none;
  }
`;

const OfficeCity = styled.div`
  font-weight: 600;
  color: #111827;
`;

const OfficeAddress = styled.p`
  margin: 0.15rem 0 0;
`;

const OfficeNote = styled.span`
  font-size: 0.78rem;
  color: #6b7280;
`;

/* ---------- Form ---------- */

const FormWrap = styled.div`
  margin-top: 2.4rem;
  background: #f5f5f4;
  border-radius: 22px;
  padding: 2rem 1.6rem;
`;

const FormTitle = styled.h2`
  font-size: 1.4rem;
  color: #0b3a6f;
`;

const FormText = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 1.2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 640px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.85rem;
    color: #4b5563;
  }

  input,
  textarea {
    border-radius: 999px;
    border: 1px solid #d1d5db;
    padding: 0.7rem 0.9rem;
    background: #ffffff;
    color: #111827;
  }

  textarea {
    border-radius: 18px;
    min-height: 120px;
  }
`;

const FullWidthField = styled(Field)`
  grid-column: 1 / -1;
`;

const Submit = styled.button`
  border-radius: 999px;
  padding: 0.8rem 1.8rem;
  background: #0b3a6f;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

const Success = styled.p`
  margin-top: 1rem;
  padding: 0.9rem 1.1rem;
  border-radius: 12px;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  color: #065f46;
`;

/* ---------- Map ---------- */

const MapSection = styled.div`
  margin-top: 2.6rem;
  border-radius: 24px;
  padding: 1.6rem;
  overflow: hidden;
  background: radial-gradient(1200px 500px at 20% -10%, #1e3a8a, #0b1f3a 60%);
`;

const MapTitle = styled.h3`
  color: #f8fafc;
`;

const MapSub = styled.p`
  color: #c7d2fe;
  margin-bottom: 1.2rem;
`;

const MapWrap = styled.div`
  width: 100%;
  height: 360px;
`;

const Legend = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #e5e7eb;

  strong {
    color: #93c5fd;
  }
`;

/* ---------- Pin ---------- */

const Pin = ({ color }: { color: string }): JSX.Element => (
  <g transform='translate(-8,-24)'>
    <path
      d='M8 0C3.6 0 0 3.6 0 8c0 6 8 16 8 16s8-10 8-16c0-4.4-3.6-8-8-8z'
      fill={color}
    />
    <circle cx='8' cy='8' r='3' fill='#ffffff' />
  </g>
);

/* ================= COMPONENT ================= */

type ProjectMarker = {
  id: string;
  label: string;
  country: string;
  type: 'office' | 'project';
  coordinates: [number, number]; // [lng, lat]
};

export const PROJECT_MARKERS: ProjectMarker[] = [
  /* ================= INDIA ================= */

  {
    id: 'new-delhi',
    label: 'New Delhi',
    country: 'India',
    type: 'office',
    coordinates: [77.209, 28.6139]
  },
  {
    id: 'agra',
    label: 'Agra',
    country: 'India',
    type: 'office',
    coordinates: [78.0081, 27.1767]
  },
  {
    id: 'jaipur',
    label: 'Jaipur',
    country: 'India',
    type: 'project',
    coordinates: [75.7873, 26.9124]
  },
  {
    id: 'kanpur',
    label: 'Kanpur',
    country: 'India',
    type: 'project',
    coordinates: [80.3319, 26.4499]
  },
  {
    id: 'varanasi',
    label: 'Varanasi',
    country: 'India',
    type: 'project',
    coordinates: [82.9739, 25.3176]
  },
  {
    id: 'etawah',
    label: 'Etawah',
    country: 'India',
    type: 'project',
    coordinates: [79.0218, 26.7848]
  },
  {
    id: 'thrissur',
    label: 'Thrissur',
    country: 'India',
    type: 'project',
    coordinates: [76.2144, 10.5276]
  },
  {
    id: 'mumbai',
    label: 'Mumbai',
    country: 'India',
    type: 'project',
    coordinates: [72.8777, 19.076]
  },

  /* ================= ETHIOPIA ================= */

  {
    id: 'addis-ababa',
    label: 'Addis Ababa',
    country: 'Ethiopia',
    type: 'project',
    coordinates: [38.7578, 8.9806]
  },
  {
    id: 'adama',
    label: 'Adama (Nazret)',
    country: 'Ethiopia',
    type: 'project',
    coordinates: [39.27, 8.54]
  },
  {
    id: 'dire-dawa',
    label: 'Dire Dawa',
    country: 'Ethiopia',
    type: 'project',
    coordinates: [41.8501, 9.5892]
  },

  /* ================= TANZANIA ================= */

  {
    id: 'dar-es-salaam',
    label: 'Dar es Salaam',
    country: 'Tanzania',
    type: 'project',
    coordinates: [39.2083, -6.7924]
  },
  {
    id: 'dodoma',
    label: 'Dodoma',
    country: 'Tanzania',
    type: 'project',
    coordinates: [35.746, -6.163]
  },
  {
    id: 'arusha',
    label: 'Arusha',
    country: 'Tanzania',
    type: 'project',
    coordinates: [36.6829, -3.3869]
  }
];

const ContactContent = (): JSX.Element => {
  const [submitted, setSubmitted] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <Section>
      <Container>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          {/* INFO CARDS */}
          <CardGrid>
            <InfoCard>
              <span className='label'>Visit</span>
              <h3>Offices</h3>
              <OfficeList>
                <OfficeItem>
                  <OfficeCity>Ghaziabad (NCR)</OfficeCity>
                  <OfficeAddress>Indirapuram</OfficeAddress>
                  <OfficeNote>Appointment only</OfficeNote>
                </OfficeItem>
                <OfficeItem>
                  <OfficeCity>Agra</OfficeCity>
                  <OfficeAddress>Bhawna Estate – 282007</OfficeAddress>
                  <OfficeNote>Appointment only</OfficeNote>
                </OfficeItem>
                <OfficeItem>
                  <OfficeCity>Bilaspur</OfficeCity>
                  <OfficeAddress>Nehru Nagar – 495001</OfficeAddress>
                  <OfficeNote>Appointment only</OfficeNote>
                </OfficeItem>
              </OfficeList>
            </InfoCard>

            <InfoCard>
              <span className='label'>Call</span>
              <h3>Phone & WhatsApp</h3>
              <a href={`tel:${PHONE_DISPLAY}`}>{PHONE_DISPLAY}</a>
              <br />
              <a href={WHATSAPP_LINK}>WhatsApp chat</a>
            </InfoCard>

            <InfoCard>
              <span className='label'>Email</span>
              <h3>Project enquiries</h3>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </InfoCard>
          </CardGrid>

          {/* FORM */}
          <FormWrap>
            <FormTitle>Leave us a message</FormTitle>
            <FormText>We’ll respond with next steps.</FormText>
            <FormText>
              All fields marked * are required. We typically respond within 1
              business day.
            </FormText>

            <Form onSubmit={handleSubmit} noValidate>
              {/* Honeypot for bots */}
              <input type='text' name='_gotcha' style={{ display: 'none' }} />

              <Field>
                <label htmlFor='name'>Name*</label>
                <input
                  id='name'
                  name='name'
                  required
                  minLength={2}
                  placeholder='Your full name'
                />
              </Field>

              <Field>
                <label htmlFor='organisation'>Organisation*</label>
                <input
                  id='organisation'
                  name='organisation'
                  required
                  minLength={2}
                  placeholder='Company / Department'
                />
              </Field>

              <Field>
                <label htmlFor='email'>Email*</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='name@company.com'
                  pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                  title='Please enter a valid email address'
                />
              </Field>

              <Field>
                <label htmlFor='phone'>Phone / WhatsApp*</label>
                <input
                  id='phone'
                  name='phone'
                  required
                  placeholder='+91 9XXXXXXXXX'
                  pattern='^[0-9+\s()-]{7,20}$'
                  title='Please enter a valid phone number'
                />
              </Field>

              <FullWidthField>
                <label htmlFor='message'>Message*</label>
                <textarea
                  id='message'
                  name='message'
                  required
                  minLength={10}
                  placeholder='Briefly describe your project or enquiry'
                />
              </FullWidthField>

              <Submit type='submit' disabled={submitted}>
                {submitted ? 'Sent ✓' : 'Send message'}
              </Submit>

              {submitted && (
                <Success>
                  Thank you — your message has been sent. We’ll be in touch
                  shortly.
                </Success>
              )}
            </Form>
          </FormWrap>

          {/* MAP */}
          <MapSection>
            <MapTitle>Global project footprint</MapTitle>
            <MapSub>Offices (blue) and project locations (orange)</MapSub>

            <MapWrap>
              <ComposableMap
                projection='geoMercator'
                projectionConfig={{ scale: 750, center: [60, 10] }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }: { geographies: RSMGeography[] }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill='none'
                        stroke='rgba(199,210,254,0.35)'
                        strokeDasharray='1,3'
                      />
                    ))
                  }
                </Geographies>

                {PROJECT_MARKERS.map((marker) => (
                  <Marker key={marker.id} coordinates={marker.coordinates}>
                    <Pin
                      color={marker.type === 'office' ? '#60a5fa' : '#fb923c'}
                    />
                  </Marker>
                ))}
              </ComposableMap>
            </MapWrap>

            <Legend>
              <strong>India</strong> – Highways & corridors
              <br />
              <strong>Ethiopia</strong> – Urban transport
              <br />
              <strong>Kenya & Tanzania</strong> – Infrastructure advisory
            </Legend>
          </MapSection>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContactContent;
