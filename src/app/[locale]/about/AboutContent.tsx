'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Container from '@/components/Container';

/* ----------------- layout shells ----------------- */

const PageSection = styled.section`
  background: #f3f4f6;
  padding: 3.5rem 0 4rem;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.05);
`;

/* ----------------- top header / breadcrumb ----------------- */

const HeaderRow = styled.div`
  margin-bottom: 2.4rem;
`;

const PageTitle = styled.h1`
  font-size: 1.9rem;
  color: #0b3a6f;
`;

/* ----------------- hero split ----------------- */

const AboutSplit = styled.div`
  display: grid;
  gap: 2.6rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
    align-items: center;
  }
`;

/* left image block */

const HeroImageCard = styled(Card)`
  overflow: hidden;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;

  @media (min-width: 980px) {
    height: 340px;
  }
`;

const FloatingNote = styled.div`
  position: absolute;
  left: 1.4rem;
  bottom: 1.4rem;
  max-width: 220px;
  background: #0b3a6f;
  color: #f9fafb;
  border-radius: 16px;
  padding: 0.75rem 0.9rem;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.4);
  font-size: 0.8rem;

  strong {
    display: block;
    margin-bottom: 0.1rem;
  }

  span.role {
    font-size: 0.72rem;
    opacity: 0.8;
  }
`;

/* right about text */

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #fb923c;
  margin-bottom: 0.4rem;
`;

const HeroHeading = styled.h2`
  font-size: 1.7rem;
  color: #0b3a6f;
  margin-bottom: 0.65rem;
`;

const HeroBody = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 0.7rem;
`;

const HeroBodySmall = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

const HeroButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

const PrimaryButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 0.75rem 1.6rem;
  font-size: 0.86rem;
  font-weight: 600;
  background: #0b3a6f;
  color: #ffffff;
  cursor: pointer;
`;

const GhostButton = styled.button`
  border-radius: 999px;
  padding: 0.75rem 1.6rem;
  font-size: 0.86rem;
  font-weight: 600;
  background: #ffffff;
  color: #0b3a6f;
  border: 1px solid #d1d5db;
  cursor: pointer;
`;

/* ----------------- “why choose us” block ----------------- */

const WhySection = styled.section`
  margin-top: 3.3rem;
`;

const WhySplit = styled.div`
  display: grid;
  gap: 2.4rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    align-items: center;
  }
`;

const WhyTitle = styled.h3`
  font-size: 1.3rem;
  color: #0b3a6f;
  margin-bottom: 0.8rem;
`;

const WhyText = styled.p`
  font-size: 0.93rem;
  color: #4b5563;
  margin-bottom: 1.2rem;
`;

const ReasonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.9rem;
`;

const ReasonItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
`;

const ReasonIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: #eef2ff;
  color: #0b3a6f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

const ReasonText = styled.div`
  font-size: 0.88rem;
  color: #374151;

  strong {
    display: block;
    font-size: 0.93rem;
    margin-bottom: 0.15rem;
    color: #111827;
  }
`;

/* collage images on right */

const WhyImagesCard = styled(Card)`
  padding: 1.2rem 1.2rem 1.4rem;
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr);
  gap: 0.6rem;
  align-items: stretch;
`;

const WhyMainImage = styled.img`
  width: 100%;
  height: 230px;
  border-radius: 18px;
  object-fit: cover;
`;

const WhySideImage = styled.img`
  width: 100%;
  height: 110px;
  border-radius: 18px;
  object-fit: cover;

  &:last-child {
    margin-top: 0.6rem;
  }
`;

/* ----------------- stats row ----------------- */

const StatsStrip = styled.div`
  margin-top: 2.7rem;
  padding: 1.4rem 1.2rem;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  justify-content: space-between;
`;

const StatBlock = styled.div`
  min-width: 120px;

  small {
    display: block;
    font-size: 0.76rem;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.14em;
  }

  strong {
    display: block;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    color: #111827;
  }
`;

/* ----------------- story banner ----------------- */

const StorySection = styled.section`
  margin-top: 3.6rem;
`;

const StorySplit = styled.div`
  display: grid;
  gap: 2.4rem;

  @media (min-width: 980px) {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1.1fr);
    align-items: center;
  }
`;

const StoryImageCard = styled(Card)`
  overflow: hidden;
`;

const StoryImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

  @media (min-width: 980px) {
    height: 320px;
  }
`;

const StoryTextTitle = styled.h3`
  font-size: 1.3rem;
  color: #0b3a6f;
  margin-bottom: 0.6rem;
`;

const StoryText = styled.p`
  font-size: 0.93rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

/* ----------------- team strip ----------------- */

const TeamSection = styled.section`
  margin-top: 3.4rem;
`;

const TeamHeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.6rem;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const TeamTitle = styled.h3`
  font-size: 1.3rem;
  color: #0b3a6f;
`;

const TeamSubtitle = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`;

const BrowseButton = styled.button`
  border-radius: 999px;
  padding: 0.55rem 1.2rem;
  font-size: 0.82rem;
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  cursor: pointer;
`;

const TeamGrid = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const MemberCard = styled(Card)`
  padding: 0.9rem 0.9rem 1.1rem;
  border-radius: 20px;
`;

const MemberPhoto = styled.img`
  width: 100%;
  border-radius: 16px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 0.55rem;
`;

const MemberName = styled.div`
  font-size: 0.92rem;
  font-weight: 600;
  color: #111827;
`;

const MemberRole = styled.div`
  font-size: 0.78rem;
  color: #6b7280;
  margin-top: 0.12rem;
`;

/* ----------------- component ----------------- */

export default function AboutContent(): JSX.Element {
  return (
    <PageSection>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* header / breadcrumb */}
          <HeaderRow>
            <PageTitle>About</PageTitle>
          </HeaderRow>

          {/* hero split */}
          <AboutSplit>
            {/* left image */}
            <HeroImageCard>
              <HeroImage
                src='/images/work.png'
                alt='Project team discussing highway program'
              />
              <FloatingNote>
                <strong>Narendra Kumar Nawin</strong>
                <span className='role'>
                  Intl PE – Highway &amp; Other Infrastructure Consultant
                </span>
                <p>
                  “We help owners see the full picture – contracts, progress and
                  risk – so decisions are timely and grounded.”
                </p>
              </FloatingNote>
            </HeroImageCard>

            {/* right copy */}
            <div>
              <Eyebrow>About the consultant</Eyebrow>
              <HeroHeading>
                Independent highway &amp; other program expertise.
              </HeroHeading>
              <HeroBody>
                Intl PE – Narendra Kumar Nawin is a civil engineer and project
                manager with over 35 years of international experience across
                India, Oman, Ethiopia, Tanzania and Nepal.
              </HeroBody>
              <HeroBodySmall>
                He has led and advised on large-scale highway programs funded by
                national governments and multilaterals – from greenfield
                expressways and OSBPs to complex corridor upgrades.
              </HeroBodySmall>

              <HeroButtons>
                <PrimaryButton type='button'>Learn more</PrimaryButton>
                <GhostButton type='button'>Intro video</GhostButton>
              </HeroButtons>
            </div>
          </AboutSplit>

          {/* why choose us */}
          <WhySection>
            <WhySplit>
              <div>
                <WhyTitle>Reasons why project owners choose Yenken.</WhyTitle>
                <WhyText>
                  Owners, concessionaires and lenders need practical guidance,
                  not just reports. We combine on-site experience with strong
                  contract and program governance skills.
                </WhyText>

                <ReasonList>
                  <ReasonItem>
                    <ReasonIcon>📋</ReasonIcon>
                    <ReasonText>
                      <strong>Process excellence</strong>
                      Robust review and reporting structures that keep
                      obligations, quality and progress aligned.
                    </ReasonText>
                  </ReasonItem>
                  <ReasonItem>
                    <ReasonIcon>📐</ReasonIcon>
                    <ReasonText>
                      <strong>Strategic planning</strong>
                      Support from pre-bid to commissioning so corridor
                      investments are realistic and bankable.
                    </ReasonText>
                  </ReasonItem>
                  <ReasonItem>
                    <ReasonIcon>🧭</ReasonIcon>
                    <ReasonText>
                      <strong>Experience on the ground</strong>
                      Decades spent on live sites, not just in offices, with a
                      deep understanding of constraints in the field.
                    </ReasonText>
                  </ReasonItem>
                  <ReasonItem>
                    <ReasonIcon>🤝</ReasonIcon>
                    <ReasonText>
                      <strong>Stakeholder alignment</strong>
                      Ability to work with MoRTH, NHAI, MSRDC, PWDs,
                      concessionaires, contractors and banks so everyone sees
                      the same picture.
                    </ReasonText>
                  </ReasonItem>
                </ReasonList>
              </div>

              <WhyImagesCard>
                <WhyGrid>
                  <WhyMainImage
                    src='https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt='Engineers reviewing drawings'
                  />
                  <div>
                    <WhySideImage
                      src='https://images.pexels.com/photos/3862371/pexels-photo-3862371.jpeg?auto=compress&cs=tinysrgb&w=1600'
                      alt='Engineer at laptop'
                    />
                    <WhySideImage
                      src='https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600'
                      alt='Team collaboration'
                    />
                  </div>
                </WhyGrid>
              </WhyImagesCard>
            </WhySplit>
          </WhySection>

          {/* stats strip */}
          <StatsStrip>
            <StatBlock>
              <small>Experience</small>
              <strong>35+ years</strong>
            </StatBlock>
            <StatBlock>
              <small>Highways &amp; other infra programs</small>
              <strong>7,000+ km</strong>
            </StatBlock>
            <StatBlock>
              <small>Programs delivered</small>
              <strong>USD 6Bn+</strong>
            </StatBlock>
            <StatBlock>
              <small>Countries worked in</small>
              <strong>5+</strong>
            </StatBlock>
          </StatsStrip>

          {/* story banner */}
          <StorySection>
            <StorySplit>
              <StoryImageCard>
                <StoryImage
                  src='https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt='Discussion about program performance'
                />
              </StoryImageCard>

              <div>
                <Eyebrow>Our story</Eyebrow>
                <StoryTextTitle>
                  Helping agencies move from individual projects to true
                  programs.
                </StoryTextTitle>
                <StoryText>
                  Over the past three decades, Narendra has supported expressway
                  authorities, PWDs and multilateral banks as they shifted from
                  single contracts to complex, multi-package corridor programs.
                </StoryText>
                <StoryText>
                  YICE distils that experience into clear advisory support –
                  from bid strategy and contract structuring to on-site
                  oversight, claims and other institutional strengthening.
                </StoryText>
              </div>
            </StorySplit>
          </StorySection>

          {/* team section (kept lean – can be expanded later) */}
          <TeamSection>
            <TeamHeaderRow>
              <div>
                <TeamTitle>Experience behind the advice.</TeamTitle>
                <TeamSubtitle>
                  A small, senior-led practice with the flexibility to plug into
                  your program as needed.
                </TeamSubtitle>
              </div>
              <BrowseButton type='button'>Browse services</BrowseButton>
            </TeamHeaderRow>

            <TeamGrid>
              <MemberCard>
                <MemberPhoto
                  src='/images/nknawin.png'
                  alt='Narendra Kumar Nawin'
                />
                <MemberName>Narendra Kumar Nawin</MemberName>
                <MemberRole>
                  Intl PE – Highway &amp; Other Infrastructure Consultant
                </MemberRole>
              </MemberCard>

              <MemberCard>
                <MemberPhoto
                  src='https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt='Contract specialist'
                />
                <MemberName>Contract Specialist</MemberName>
                <MemberRole>
                  Claims &amp; commercial advisory (associate)
                </MemberRole>
              </MemberCard>

              <MemberCard>
                <MemberPhoto
                  src='https://images.pexels.com/photos/3862606/pexels-photo-3862606.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt='Program analyst'
                />
                <MemberName>Program Analyst</MemberName>
                <MemberRole>Data &amp; reporting (associate)</MemberRole>
              </MemberCard>

              <MemberCard>
                <MemberPhoto
                  src='https://images.pexels.com/photos/3862621/pexels-photo-3862621.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt='Quality & safety lead'
                />
                <MemberName>Quality &amp; Safety Lead</MemberName>
                <MemberRole>Site quality / safety (associate)</MemberRole>
              </MemberCard>
            </TeamGrid>
          </TeamSection>
        </motion.div>
      </Container>
    </PageSection>
  );
}
