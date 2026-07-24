import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';
import type { PackageId, TermId } from '@/lib/pricing';

export const metadata: Metadata = { title: 'Samband' };

type Props = {
  searchParams?: { package?: string; term?: string };
};

export default function ContactPage({ searchParams }: Props) {
  return (
    <ContactPageClient
      pack={(searchParams?.package as PackageId) || 'stadall'}
      term={(searchParams?.term as TermId) || 'askrift'}
    />
  );
}
