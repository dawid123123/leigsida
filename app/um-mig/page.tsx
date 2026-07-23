import type { Metadata } from 'next';
import AboutPageClient from '../../components/AboutPageClient';

export const metadata: Metadata = { title: 'Um okkur' };

export default function UmMigPage() {
  return <AboutPageClient />;
}
