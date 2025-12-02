'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

import Container from '@/components/Container';

const Section = styled.section`
  padding: 3rem 0 3.4rem;
  background: #f3f4f6;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.article`
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
`;

const Thumb = styled.div<{ src: string }>`
  height: 160px;
  background-image: ${(props): string => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;

const Body = styled.div`
  padding: 1.1rem 1.1rem 1rem;
  font-size: 0.9rem;
  color: #374151;

  h3 {
    margin: 0 0 0.4rem;
    font-size: 1rem;
    color: #0b3a6f;
  }

  span.meta {
    display: block;
    font-size: 0.76rem;
    color: #9ca3af;
    margin-bottom: 0.4rem;
  }
`;

const ReadMore = styled(Link)`
  margin-top: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: #0b3a6f;
`;

const posts = [
  {
    slug: 'structuring-epc-contracts-for-expressways',
    title: 'Structuring EPC contracts for expressway delivery',
    date: 'Aug 2025',
    category: 'Contracts',
    summary:
      'Key considerations when drafting and administering EPC contracts for access-controlled highways.',
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'managing-multilateral-funded-highway-programs',
    title: 'Managing multilateral-funded highway programs',
    date: 'Jul 2025',
    category: 'Program management',
    summary:
      'How to align government processes with World Bank, ADB and AfDB requirements for smoother implementation.',
    image:
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80'
  },
  {
    slug: 'improving-safety-on-corridor-projects',
    title: 'Improving safety outcomes on corridor projects',
    date: 'Jun 2025',
    category: 'Safety',
    summary:
      'Practical design and construction measures to reduce crashes and improve user experience on new corridors.',
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80'
  }
];

export default function BlogContent(): JSX.Element {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Grid>
            {posts.map((post) => (
              <Card key={post.slug}>
                <Thumb src={post.image} />
                <Body>
                  <span className='meta'>
                    {post.date} · {post.category}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <ReadMore href={`/blog/${post.slug}`}>
                    Read article →
                  </ReadMore>
                </Body>
              </Card>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
