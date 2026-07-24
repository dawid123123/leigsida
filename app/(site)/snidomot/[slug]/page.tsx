import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TemplateDetailClient from '@/components/TemplateDetailClient';
import { getTemplate, publicTemplates } from '@/lib/templates';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return publicTemplates().map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const t = getTemplate(params.slug);
  return { title: t?.name || 'Sniðmát' };
}

export default function TemplatePage({ params }: Props) {
  const t = getTemplate(params.slug);
  if (!t) notFound();
  return <TemplateDetailClient template={t} />;
}
