import type { Metadata } from 'next';
import ByrjaPageClient from '@/components/ByrjaPageClient';
import type { TermId } from '@/lib/pricing';

export const metadata: Metadata = { title: 'Byrja' };

type Props = {
  searchParams?: { term?: string };
};

export default function ByrjaPage({ searchParams }: Props) {
  const termId: TermId =
    searchParams?.term === 'kaupa' ? 'kaupa' : 'askrift';

  return <ByrjaPageClient termId={termId} />;
}
