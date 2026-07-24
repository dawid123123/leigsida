import type { Metadata } from 'next';
import SnidomotPageClient from '@/components/SnidomotPageClient';

export const metadata: Metadata = { title: 'Sniðmát' };

export default function SnidomotPage() {
  return <SnidomotPageClient />;
}
