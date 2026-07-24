import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: '4rem 0' }}>
      <h1 className="display" style={{ fontSize: '2.4rem' }}>
        Fannst ekki
      </h1>
      <Link href="/" className="btn" style={{ marginTop: '1rem' }}>
        Forsíða
      </Link>
    </div>
  );
}
