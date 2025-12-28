import Link from 'next/link';

export default function IndexPage(): JSX.Element {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Yenken International Consulting Enterprises</h1>
      <p>Select language:</p>
      <ul>
        <li>
          <Link href='/en/'>English</Link>
        </li>
      </ul>
    </main>
  );
}
