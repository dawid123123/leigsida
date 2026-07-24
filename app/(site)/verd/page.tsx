import type { Metadata } from 'next';
import VerdPageClient from '@/components/VerdPageClient';

export const metadata: Metadata = { title: 'Verð' };

export default function VerdPage() {
  return <VerdPageClient />;
}
