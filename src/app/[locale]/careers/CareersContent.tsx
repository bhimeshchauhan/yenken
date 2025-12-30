'use client';

import { useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styled, { keyframes } from 'styled-components';

import Container from '@/components/Container';

/* ================= TYPES ================= */

type JobLevel = 'executive_trainee' | 'junior' | 'mid' | 'senior' | 'lead';
type WorkModel = 'onsite' | 'hybrid' | 'remote' | 'project_site';

type Job = {
  id: string;
  title: string;
  slug: string;
  discipline: string;
  level: JobLevel;
  min_years: number;
  max_years: number | null;
  work_model: WorkModel;
  location: string | null;
  summary: string | null;
  responsibilities: string[];
  qualifications: string[];
  nice_to_have: string[];
};

/* ================= SUPABASE ================= */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
const FUNCTIONS_URL = process.env.NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL ?? '';

const supabase =
  SUPABASE_URL && SUPABASE_ANON
    ? createClient(SUPABASE_URL, SUPABASE_ANON)
    : null;

/* ================= STYLES ================= */

const PageWrap = styled.section`
  padding: 2.25rem 0 3rem;
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #0b3a6f 0%, #0f172a 70%);
  border-radius: 18px;
  padding: 2rem 1.6rem;
  color: #ffffff;
  box-shadow: 0 16px 40px rgba(2, 6, 23, 0.22);

  h1 {
    margin: 0 0 0.6rem;
    font-size: 2rem;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0.25rem 0 0;
    color: rgba(255, 255, 255, 0.9);
    max-width: 70ch;
    line-height: 1.6;
    font-size: 0.98rem;
  }

  @media (min-width: 768px) {
    padding: 2.4rem 2.2rem;
    h1 {
      font-size: 2.35rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 980px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 1.2rem;
  }
`;

const Panel = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.1rem;
  box-shadow: 0 10px 28px rgba(2, 6, 23, 0.05);
`;

const PanelTitle = styled.div`
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.75rem;
  font-size: 1rem;
`;

const Small = styled.p`
  margin: 0;
  color: #334155;
  line-height: 1.7;
  font-size: 0.93rem;
`;

const Filters = styled.div`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 560px) {
    grid-template-columns: 1.3fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1.4fr 1fr;
  }
`;

const Row3 = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 0.75rem;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0.8rem 0.85rem;
  font-size: 0.95rem;
  color: #0f172a;
  background: #ffffff;
  outline: none;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #0b3a6f;
    box-shadow: 0 0 0 3px rgba(11, 58, 111, 0.12);
  }
`;

const Select = styled.select`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0.8rem 0.85rem;
  font-size: 0.95rem;
  color: #0f172a;
  background: #ffffff;
  outline: none;

  &:focus {
    border-color: #0b3a6f;
    box-shadow: 0 0 0 3px rgba(11, 58, 111, 0.12);
  }
`;

const Hint = styled.div`
  margin-top: 0.8rem;
  color: #64748b;
  font-size: 0.92rem;
  line-height: 1.6;
`;

const Cards = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1.25rem;
`;

const Card = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.2rem;
  background: #ffffff;
  box-shadow: 0 10px 28px rgba(2, 6, 23, 0.05);

  h3 {
    margin: 0 0 0.4rem;
    color: #0f172a;
    font-size: 1.12rem;
    letter-spacing: -0.01em;
  }

  p {
    margin: 0.35rem 0 0.75rem;
    color: #334155;
    line-height: 1.65;
    font-size: 0.95rem;
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 0.75rem;
`;

const Pill = styled.span`
  font-size: 0.78rem;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  border: 1px solid #e2e8f0;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  align-items: center;
`;

const Button = styled.button<{ $variant?: 'primary' | 'ghost' }>`
  border-radius: 999px;
  padding: 0.62rem 1.05rem;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid
    ${({ $variant }): string =>
      $variant === 'primary' ? '#0b3a6f' : '#e5e7eb'};
  background: ${({ $variant }): string =>
    $variant === 'primary' ? '#0b3a6f' : '#ffffff'};
  color: ${({ $variant }): string =>
    $variant === 'primary' ? '#ffffff' : '#0f172a'};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ================= LOADER ================= */

const shimmer = keyframes`
  0% { background-position: -420px 0; }
  100% { background-position: 420px 0; }
`;

const SkeletonCard = styled.div`
  height: 132px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: linear-gradient(90deg, #f1f5f9 25%, #e5e7eb 37%, #f1f5f9 63%);
  background-size: 420px 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

/* ================= PAGINATION ================= */

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
`;

const PageBtn = styled.button<{ $active?: boolean }>`
  padding: 0.45rem 0.75rem;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: ${({ $active }): string => ($active ? '#0b3a6f' : '#ffffff')};
  color: ${({ $active }): string => ($active ? '#ffffff' : '#0f172a')};
  font-weight: 800;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/* ================= MODAL + FORM ================= */

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.62);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 60;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 760px;
  background: #fff;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 24px 70px rgba(2, 6, 23, 0.35);
  overflow: hidden;
`;

const ModalHead = styled.div`
  padding: 1rem 1.1rem;
  background: #0f172a;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.02rem;
  }
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.35rem;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 1.1rem;
`;

const SectionTitle = styled.div`
  font-weight: 900;
  color: #0f172a;
  margin: 0.9rem 0 0.5rem;
`;

const Ul = styled.ul`
  margin: 0.25rem 0 0;
  padding-left: 1.15rem;
  color: #334155;
  line-height: 1.75;
  font-size: 0.95rem;
`;

const TwoCol = styled.div`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Field = styled.div`
  display: grid;
  gap: 0.35rem;

  label {
    font-size: 0.85rem;
    color: #334155;
    font-weight: 900;
  }

  input,
  textarea {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 0.75rem 0.85rem;
    font-size: 0.95rem;
    color: #0f172a;
    background: #e5e7eb;
    outline: none;

    &:focus {
      border-color: #0b3a6f;
      box-shadow: 0 0 0 3px rgba(11, 58, 111, 0.12);
    }
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`;

const ErrorText = styled.div`
  margin-top: 0.7rem;
  color: #b91c1c;
  font-weight: 800;
`;

const SuccessText = styled.div`
  margin-top: 0.7rem;
  color: #15803d;
  font-weight: 900;
`;

const LeftColumn = styled.div`
  display: grid;
  gap: 1rem;
`;

const RightColumn = styled.div`
  display: grid;
  gap: 1rem;
`;

/* ================= HIRING PROCESS ================= */

/* ================= HIRING PROCESS ================= */

const ProcessList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const ProcessItem = styled.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 0.9rem;
  padding: 0.85rem 0.95rem;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #ffffff;
`;

const ProcessIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #e0ecfa;
  color: #0b3a6f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
`;

const ProcessContent = styled.div`
  h4 {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 800;
    color: #0f172a;
  }

  p {
    margin: 0.25rem 0 0;
    font-size: 0.88rem;
    color: #334155;
    line-height: 1.55;
  }
`;

/* ================= HELPERS ================= */

const PAGE_SIZE = 4;

function formatLevel(level: JobLevel): string {
  switch (level) {
    case 'executive_trainee':
      return 'Executive Trainee';
    case 'junior':
      return 'Junior';
    case 'mid':
      return 'Mid-level';
    case 'senior':
      return 'Senior';
    case 'lead':
      return 'Lead';
    default:
      return level;
  }
}

function formatWorkModel(model: WorkModel): string {
  switch (model) {
    case 'project_site':
      return 'Project Site';
    case 'onsite':
      return 'On-site';
    case 'hybrid':
      return 'Hybrid';
    case 'remote':
      return 'Remote';
    default:
      return model;
  }
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function fileLooksOk(file: File): { ok: boolean; msg?: string } {
  const maxBytes = 6 * 1024 * 1024; // 6MB
  const allowed = new Set([
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]);
  if (file.size > maxBytes)
    return { ok: false, msg: 'Resume must be under 6MB.' };
  if (!allowed.has(file.type))
    return { ok: false, msg: 'Upload a PDF, DOC, or DOCX.' };
  return { ok: true };
}

/* ================= COMPONENT ================= */

type ModalMode = 'details' | 'apply';

export default function CareersContent(): JSX.Element {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string>('');

  const [q, setQ] = useState('');
  const [level, setLevel] = useState<JobLevel | 'all'>('all');
  const [disc, setDisc] = useState<string>('all');
  const [page, setPage] = useState(1);

  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [modalMode, setModalMode] = useState<ModalMode>('details');

  // form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [submitError, setSubmitError] = useState<string>('');
  const [submitOk, setSubmitOk] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function load(): Promise<void> {
      setLoading(true);
      setLoadError('');

      if (!supabase) {
        if (mounted) {
          setLoading(false);
          setLoadError(
            'Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY env vars.'
          );
        }
        return;
      }

      const { data, error } = await supabase
        .from('jobs')
        .select(
          'id,title,slug,discipline,level,min_years,max_years,work_model,location,summary,responsibilities,qualifications,nice_to_have'
        )
        .order('title', { ascending: true });

      if (!mounted) return;

      if (error) {
        setLoadError(error.message);
        setJobs([]);
      } else {
        setJobs((data as Job[]) ?? []);
      }

      setLoading(false);
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  const disciplines = useMemo(() => {
    const s = new Set<string>();
    jobs.forEach((j) => s.add(j.discipline));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [jobs]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return jobs.filter((j) => {
      const matchQ =
        !query ||
        j.title.toLowerCase().includes(query) ||
        (j.summary ?? '').toLowerCase().includes(query);

      const matchLevel = level === 'all' ? true : j.level === level;
      const matchDisc = disc === 'all' ? true : j.discipline === disc;

      return matchQ && matchLevel && matchDisc;
    });
  }, [jobs, q, level, disc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pagedJobs = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  useEffect(() => {
    // keep page valid when filters change
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, level, disc]);

  function openModal(job: Job, mode: ModalMode): void {
    setActiveJob(job);
    setModalMode(mode);
    setSubmitError('');
    setSubmitOk('');
  }

  function closeModal(): void {
    setActiveJob(null);
    setSubmitError('');
    setSubmitOk('');
  }

  async function submitApplication(): Promise<void> {
    if (!activeJob) return;

    setSubmitError('');
    setSubmitOk('');

    if (!FUNCTIONS_URL) {
      setSubmitError('Missing NEXT_PUBLIC_SUPABASE_FUNCTIONS_URL env var.');
      return;
    }

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setSubmitError('Please fill your name, email, and phone.');
      return;
    }

    if (!isValidEmail(email)) {
      setSubmitError('Please enter a valid email.');
      return;
    }

    if (!file) {
      setSubmitError('Please upload your resume (PDF/DOC/DOCX).');
      return;
    }

    const check = fileLooksOk(file);
    if (!check.ok) {
      setSubmitError(check.msg ?? 'Invalid file.');
      return;
    }

    setSubmitting(true);

    try {
      // Step 1: create application + get signed upload URL (Edge Function)
      const res = await fetch(`${FUNCTIONS_URL}/careers-apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobId: activeJob.id,
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          linkedinUrl: linkedinUrl.trim() || undefined,
          coverLetter: coverLetter.trim() || undefined,
          fileName: file.name,
          fileType: file.type
        })
      });

      const json: unknown = await res.json().catch(() => ({}));
      const asAny = json as { signedUrl?: string; error?: string };

      if (!res.ok || !asAny?.signedUrl) {
        throw new Error(asAny?.error || 'Failed to create application.');
      }

      // Step 2: upload resume to signed URL
      const upload = await fetch(asAny.signedUrl, {
        method: 'PUT',
        headers: {
          'content-type': file.type,
          'x-upsert': 'true'
        },
        body: file
      });

      if (!upload.ok) {
        throw new Error('Resume upload failed.');
      }

      setSubmitOk(
        'Application submitted successfully. Suitable candidates will be contacted as requirements arise.'
      );

      // reset form
      setFullName('');
      setEmail('');
      setPhone('');
      setLinkedinUrl('');
      setCoverLetter('');
      setFile(null);
      setModalMode('details');
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageWrap>
      <Container>
        <Hero>
          <h1>Careers at YICE</h1>
          <p>
            We’re assembling expert teams for upcoming highway and
            infrastructure assignments — including bid-stage projects. Explore
            open roles and apply in minutes.
          </p>
          <p style={{ marginTop: '0.6rem' }}>
            <strong>Experience bands:</strong> 15+ yrs (Senior/Lead), 5–15 yrs
            (Mid), 1–5 yrs (Junior), Fresh (Executive Trainee).
          </p>
        </Hero>

        <Grid>
          {/* LEFT COLUMN */}
          <LeftColumn>
            <Panel>
              <PanelTitle>Culture & ways of working</PanelTitle>
              <Small>
                YICE values clear communication, practical engineering judgment,
                and dependable delivery. We work with multidisciplinary teams
                across design, construction supervision, contracts, safety,
                environment, and program management — always with an owner’s
                mindset.
              </Small>
              <Hint style={{ marginTop: '0.65rem' }}>
                Work models vary by assignment (office / hybrid / project site).
                We encourage respectful teams, ethical practice, and inclusive
                collaboration.
              </Hint>
            </Panel>

            <Panel>
              <PanelTitle>Filter roles</PanelTitle>

              <Filters>
                <Input
                  placeholder="Search roles (e.g. 'Bridge', 'Contracts', 'BIM')"
                  value={q}
                  onChange={(e): void => setQ(e.target.value)}
                />
                <Select
                  value={level}
                  onChange={(e): void =>
                    setLevel(e.target.value as JobLevel | 'all')
                  }
                >
                  <option value='all'>All levels</option>
                  <option value='lead'>Lead</option>
                  <option value='senior'>Senior</option>
                  <option value='mid'>Mid-level</option>
                  <option value='junior'>Junior</option>
                  <option value='executive_trainee'>Executive Trainee</option>
                </Select>
              </Filters>

              <Row3>
                <Select
                  value={disc}
                  onChange={(e): void => setDisc(e.target.value)}
                >
                  <option value='all'>All disciplines</option>
                  {disciplines.map((d) => (
                    <option key={d} value={d}>
                      {d.replaceAll('_', ' ')}
                    </option>
                  ))}
                </Select>

                <Select disabled value='experience'>
                  <option value='experience'>Experience: as per role</option>
                </Select>

                <Select disabled value='model'>
                  <option value='model'>Work model: role dependent</option>
                </Select>
              </Row3>

              <Hint>
                Tip: If you don’t see an exact match, apply to the closest role
                — we map profiles to upcoming needs as projects mature.
              </Hint>
            </Panel>
          </LeftColumn>

          {/* RIGHT COLUMN */}
          <RightColumn>
            <Panel>
              <PanelTitle>Hiring process</PanelTitle>

              <ProcessList>
                <ProcessItem>
                  <ProcessIcon>1</ProcessIcon>
                  <ProcessContent>
                    <h4>Apply</h4>
                    <p>
                      Submit your resume for roles aligned with your expertise,
                      experience band, and interest area.
                    </p>
                  </ProcessContent>
                </ProcessItem>

                <ProcessItem>
                  <ProcessIcon>2</ProcessIcon>
                  <ProcessContent>
                    <h4>Screening call</h4>
                    <p>
                      A short introductory call to understand your background,
                      availability, and role expectations.
                    </p>
                  </ProcessContent>
                </ProcessItem>

                <ProcessItem>
                  <ProcessIcon>3</ProcessIcon>
                  <ProcessContent>
                    <h4>Technical discussion</h4>
                    <p>
                      Deeper discussion on domain expertise, relevant projects,
                      problem-solving approach, and delivery experience.
                    </p>
                  </ProcessContent>
                </ProcessItem>

                <ProcessItem>
                  <ProcessIcon>4</ProcessIcon>
                  <ProcessContent>
                    <h4>Project / client match</h4>
                    <p>
                      Alignment with suitable ongoing or upcoming highway,
                      infrastructure, or advisory assignments.
                    </p>
                  </ProcessContent>
                </ProcessItem>

                <ProcessItem>
                  <ProcessIcon>5</ProcessIcon>
                  <ProcessContent>
                    <h4>Offer & onboarding</h4>
                    <p>
                      Final discussion, formal engagement, and onboarding into
                      the project team.
                    </p>
                  </ProcessContent>
                </ProcessItem>
              </ProcessList>
            </Panel>
          </RightColumn>
        </Grid>

        <div style={{ marginTop: '1.25rem' }}>
          {loadError ? <Panel>{loadError}</Panel> : null}

          <Cards>
            {loading
              ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : pagedJobs.map((j) => (
                  <Card key={j.id}>
                    <h3>{j.title}</h3>

                    <MetaRow>
                      <Pill>{formatLevel(j.level)}</Pill>
                      <Pill>
                        {j.min_years}–{j.max_years ?? '∞'} yrs
                      </Pill>
                      <Pill>{formatWorkModel(j.work_model)}</Pill>
                      <Pill>{j.discipline.replaceAll('_', ' ')}</Pill>
                      {j.location ? <Pill>{j.location}</Pill> : null}
                    </MetaRow>

                    {j.summary ? <p>{j.summary}</p> : null}

                    <Actions>
                      <Button
                        $variant='primary'
                        onClick={(): void => openModal(j, 'apply')}
                      >
                        Apply
                      </Button>
                      <Button
                        $variant='ghost'
                        onClick={(): void => openModal(j, 'details')}
                      >
                        View details
                      </Button>
                    </Actions>
                  </Card>
                ))}

            {!loading && filtered.length === 0 ? (
              <Panel>No roles match your filters right now.</Panel>
            ) : null}
          </Cards>

          {!loading && filtered.length > 0 && totalPages > 1 ? (
            <Pagination>
              <PageBtn
                disabled={safePage <= 1}
                onClick={(): void => setPage((p) => Math.max(1, p - 1))}
              >
                Prev
              </PageBtn>

              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const show =
                  p === 1 ||
                  p === totalPages ||
                  Math.abs(p - safePage) <= 1 ||
                  (safePage <= 3 && p <= 4) ||
                  (safePage >= totalPages - 2 && p >= totalPages - 3);

                if (!show) {
                  // simple spacer dots
                  if (p === 2 && safePage > 4)
                    return (
                      <span key='dots-start' style={{ color: 'black' }}>
                        …
                      </span>
                    );
                  if (p === totalPages - 1 && safePage < totalPages - 3)
                    return (
                      <span key='dots-end' style={{ color: 'black' }}>
                        …
                      </span>
                    );
                  return null;
                }

                return (
                  <PageBtn
                    key={p}
                    $active={p === safePage}
                    onClick={(): void => setPage(p)}
                  >
                    {p}
                  </PageBtn>
                );
              })}

              <PageBtn
                disabled={safePage >= totalPages}
                onClick={(): void =>
                  setPage((p) => Math.min(totalPages, p + 1))
                }
              >
                Next
              </PageBtn>
            </Pagination>
          ) : null}
        </div>
      </Container>

      {activeJob ? (
        <ModalOverlay onClick={closeModal}>
          <Modal onClick={(e): void => e.stopPropagation()}>
            <ModalHead>
              <strong>{activeJob.title}</strong>
              <CloseBtn aria-label='Close' onClick={closeModal}>
                ×
              </CloseBtn>
            </ModalHead>

            <ModalBody>
              <MetaRow>
                <Pill>{formatLevel(activeJob.level)}</Pill>
                <Pill>
                  {activeJob.min_years}–{activeJob.max_years ?? '∞'} yrs
                </Pill>
                <Pill>{formatWorkModel(activeJob.work_model)}</Pill>
                <Pill>{activeJob.discipline.replaceAll('_', ' ')}</Pill>
                {activeJob.location ? <Pill>{activeJob.location}</Pill> : null}
              </MetaRow>

              {activeJob.summary ? (
                <p
                  style={{
                    color: '#334155',
                    lineHeight: 1.7,
                    marginTop: '0.35rem'
                  }}
                >
                  {activeJob.summary}
                </p>
              ) : null}

              <div
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  flexWrap: 'wrap',
                  marginTop: '0.8rem'
                }}
              >
                <Button
                  $variant={modalMode === 'apply' ? 'primary' : 'ghost'}
                  onClick={(): void => setModalMode('apply')}
                >
                  Apply
                </Button>
              </div>

              <div style={{ marginTop: '0.95rem' }}>
                <SectionTitle>Responsibilities</SectionTitle>
                <Ul>
                  {(activeJob.responsibilities ?? []).length ? (
                    activeJob.responsibilities.map((x) => <li key={x}>{x}</li>)
                  ) : (
                    <li>
                      Support project delivery, coordination, and reporting as
                      per assignment needs.
                    </li>
                  )}
                </Ul>

                <SectionTitle>Qualifications</SectionTitle>
                <Ul>
                  {(activeJob.qualifications ?? []).length ? (
                    activeJob.qualifications.map((x) => <li key={x}>{x}</li>)
                  ) : (
                    <>
                      <li>Relevant engineering / technical qualification.</li>
                      <li>
                        Experience aligned to the role’s discipline and level.
                      </li>
                    </>
                  )}
                </Ul>

                {(activeJob.nice_to_have ?? []).length ? (
                  <>
                    <SectionTitle>Nice to have</SectionTitle>
                    <Ul>
                      {activeJob.nice_to_have.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </Ul>
                  </>
                ) : null}
              </div>

              {modalMode === 'apply' ? (
                <div style={{ marginTop: '1.15rem' }}>
                  <SectionTitle>Apply now</SectionTitle>

                  <TwoCol>
                    <Field>
                      <label>Full name *</label>
                      <input
                        value={fullName}
                        onChange={(e): void => setFullName(e.target.value)}
                      />
                    </Field>

                    <Field>
                      <label>Email *</label>
                      <input
                        type='email'
                        value={email}
                        onChange={(e): void => setEmail(e.target.value)}
                      />
                    </Field>

                    <Field>
                      <label>Phone *</label>
                      <input
                        value={phone}
                        onChange={(e): void => setPhone(e.target.value)}
                      />
                    </Field>

                    <Field>
                      <label>LinkedIn (optional)</label>
                      <input
                        value={linkedinUrl}
                        onChange={(e): void => setLinkedinUrl(e.target.value)}
                        placeholder='https://linkedin.com/in/…'
                      />
                    </Field>
                  </TwoCol>

                  <div style={{ marginTop: '0.75rem' }}>
                    <Field>
                      <label>Cover note (optional)</label>
                      <textarea
                        value={coverLetter}
                        onChange={(e): void => setCoverLetter(e.target.value)}
                        placeholder='Brief context (availability, key projects, certifications)…'
                      />
                    </Field>
                  </div>

                  <div style={{ marginTop: '0.75rem' }}>
                    <Field>
                      <label>Resume (PDF/DOC/DOCX) *</label>
                      <input
                        type='file'
                        accept='.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                        onChange={(e): void =>
                          setFile(e.target.files?.[0] ?? null)
                        }
                      />
                    </Field>
                    <Hint style={{ marginTop: '0.5rem' }}>
                      We’ll keep your details confidential and use them only for
                      recruitment for YICE assignments.
                    </Hint>
                  </div>

                  <div
                    style={{
                      marginTop: '0.95rem',
                      display: 'flex',
                      gap: '0.6rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    <Button
                      $variant='primary'
                      disabled={submitting}
                      onClick={submitApplication}
                    >
                      {submitting ? 'Submitting…' : 'Submit application'}
                    </Button>
                    <Button
                      $variant='ghost'
                      onClick={(): void => setModalMode('details')}
                    >
                      Back to details
                    </Button>
                  </div>

                  {submitError ? <ErrorText>{submitError}</ErrorText> : null}
                  {submitOk ? <SuccessText>{submitOk}</SuccessText> : null}
                </div>
              ) : null}
            </ModalBody>
          </Modal>
        </ModalOverlay>
      ) : null}
    </PageWrap>
  );
}
