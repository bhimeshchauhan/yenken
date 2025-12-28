'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import Container from '@/components/Container';

/* ----------------- layout shells ----------------- */

const PageSection = styled.section`
  background: #f3f4f6;
  padding: 3.5rem 0 4rem;
`;

const HeaderRow = styled.div`
  margin-bottom: 2.4rem;
`;

const Breadcrumb = styled.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-bottom: 0.4rem;

  span {
    color: #4b5563;
  }
`;

const PageTitle = styled.h1`
  font-size: 1.9rem;
  color: #0b3a6f;
`;

/* ----------------- services grid ----------------- */

const ServicesIntroRow = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 2.4rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    align-items: flex-end;
  }
`;

const IntroLeft = styled.div``;

const IntroEyebrow = styled.div`
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fb923c;
  margin-bottom: 0.35rem;
`;

const IntroTitle = styled.h2`
  font-size: 1.6rem;
  color: #0b3a6f;
  margin-bottom: 0.4rem;
`;

const IntroText = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
`;

const IntroRight = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

const ServicesGrid = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

/* arrow pill first so we can target it from ServiceCard hover */
const ServiceArrow = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-left: auto;
  border: 1px solid rgba(148, 163, 184, 0.9);
  color: #111827;
  background: rgba(249, 250, 251, 0.9);
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  padding: 1.2rem 1.3rem 1.15rem;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.04);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
    background: #facc15;
    border-color: #facc15;
  }

  &:hover ${ServiceArrow} {
    border-color: #f97316;
    background: #fef3c7;
    color: #b45309;
  }
`;

const ServiceName = styled.h3`
  font-size: 0.98rem;
  color: #0f172a;
  margin-bottom: 0.35rem;
`;

const ServiceText = styled.p`
  font-size: 0.84rem;
  color: #4b5563;
  margin-bottom: 1rem;
`;

/* ----------------- projects grid (simple) ----------------- */

const ProjectsSection = styled.section`
  margin-top: 3.6rem;
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 1.8rem;
`;

const ProjectsEyebrow = styled.div`
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #fb923c;
  margin-bottom: 0.25rem;
`;

const ProjectsTitle = styled.h3`
  font-size: 1.4rem;
  color: #0b3a6f;
  margin-bottom: 0.4rem;
`;

const ProjectsSubtitle = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  max-width: 34rem;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ProjectCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 16px 42px rgba(15, 23, 42, 0.05);
  overflow: hidden;
  font-size: 0.85rem;
  color: #4b5563;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
`;

const ProjectBody = styled.div`
  padding: 1rem 1.2rem 1.1rem;
`;

const ProjectTitle = styled.h4`
  font-size: 0.98rem;
  color: #111827;
  margin-bottom: 0.35rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  color: #9ca3af;
  margin-top: 0.6rem;
`;

const AllProjectsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 1.8rem auto 0;
  padding: 0.7rem 1.6rem;
  border-radius: 999px;
  border: 1px solid #111827;
  font-size: 0.86rem;
  color: #111827;
  max-width: 200px;
`;

/* ----------------- data ----------------- */

const services = [
  {
    title: 'Project & contract management',
    description:
      'Owner’s engineer or consultant role for expressways and corridor projects across EPC, HAM and PPP contracts.'
  },
  {
    title: 'Design review & quality assurance',
    description:
      'Independent checking of geometric design, pavements, structures and safety measures for highways and bridges.'
  },
  {
    title: 'Bid & transaction support',
    description:
      'Support for RFQ / RFP documents, bid evaluation and negotiations for large infrastructure concessions.'
  },
  {
    title: 'Program & policy advisory',
    description:
      'Assistance to state agencies and PWDs in updating manuals, procedures and systems for modern contract delivery.'
  },
  {
    title: 'Capacity building & training',
    description:
      'Workshops and mentoring for project directors, engineers and contract staff on good practice and funding rules.'
  },
  {
    title: 'Independent review & audits',
    description:
      'Third-party reviews of troubled projects, with clear recommendations on course corrections and claims.'
  }
];

const projects = [
  {
    title: 'Expressway program governance framework',
    image:
      'https://images.pexels.com/photos/7821673/pexels-photo-7821673.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'April 30, 2024',
    tag: 'Program advisory'
  },
  {
    title: 'Design review for multi-lane corridor upgrade',
    image:
      'https://images.pexels.com/photos/955390/pexels-photo-955390.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'March 12, 2024',
    tag: 'Design & QA'
  },
  {
    title: 'HAM expressway – claims & dispute strategy',
    image:
      'https://images.pexels.com/photos/3862384/pexels-photo-3862384.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'January 25, 2024',
    tag: 'Contracts'
  },
  {
    title: 'Institutional strengthening for state PWD',
    image:
      'https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg?auto=compress&cs=tinysrgb&w=1600',
    date: 'December 10, 2023',
    tag: 'Policy & capacity'
  }
];

/* ----------------- component ----------------- */

export default function ServicesContent(): JSX.Element {
  return (
    <PageSection>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* header */}
          <HeaderRow>
            <Breadcrumb>
              Home <span>/ Service</span>
            </Breadcrumb>
            <PageTitle>Service</PageTitle>
          </HeaderRow>

          {/* intro + services grid */}
          <ServicesIntroRow>
            <IntroLeft>
              <IntroEyebrow>Our services</IntroEyebrow>
              <IntroTitle>
                We provide focused support for complex highway and other
                programs.
              </IntroTitle>
              <IntroText>
                Services can be engaged individually or combined as a bespoke
                package – from pre-bid strategy through contract management and
                program governance.
              </IntroText>
            </IntroLeft>
            <IntroRight>
              Large expressway and corridor programs need clear roles, strong
              contracts and credible reporting. Yenken works alongside your team
              to keep those elements aligned so you can deliver with confidence.
            </IntroRight>
          </ServicesIntroRow>

          <ServicesGrid>
            {services.map((svc) => (
              <ServiceCard key={svc.title}>
                <ServiceName>{svc.title}</ServiceName>
                <ServiceText>{svc.description}</ServiceText>
                <ServiceArrow>↗</ServiceArrow>
              </ServiceCard>
            ))}
          </ServicesGrid>

          {/* projects / case studies */}
          <ProjectsSection>
            <ProjectsHeader>
              <ProjectsEyebrow>Project &amp; case studies</ProjectsEyebrow>
              <ProjectsTitle>Let&apos;s look at recent work.</ProjectsTitle>
              <ProjectsSubtitle>
                A sample of corridor, expressway and institutional assignments
                where Yenken has supported owners, concessionaires and lenders.
              </ProjectsSubtitle>
            </ProjectsHeader>

            <ProjectsGrid>
              {projects.map((p) => (
                <ProjectCard key={p.title}>
                  <ProjectImage src={p.image} alt={p.title} />
                  <ProjectBody>
                    <ProjectTitle>{p.title}</ProjectTitle>
                    <p>
                      Concise description of scope, role and outcomes can go
                      here for future case-study pages.
                    </p>
                    <ProjectMeta>
                      <span>{p.date}</span>
                      <span>{p.tag}</span>
                    </ProjectMeta>
                  </ProjectBody>
                </ProjectCard>
              ))}
            </ProjectsGrid>

            <AllProjectsButton href='/projects'>
              All recent projects ↗
            </AllProjectsButton>
          </ProjectsSection>
        </motion.div>
      </Container>
    </PageSection>
  );
}
