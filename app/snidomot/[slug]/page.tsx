import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LivePreview from '../../../components/LivePreview';
import { getTemplate, publicTemplates } from '../../../lib/templates';

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

  return (
    <div className="page">
      <div className="wrap">
        <Link href="/snidomot" className="tpl-back">
          ← Öll sniðmát
        </Link>

        <header className="tpl-hero">
          <p className="eyebrow">{t.niche}</p>
          <h1 className="display tpl-title">{t.name}</h1>
          <p className="tpl-lead">{t.about || t.line}</p>
          <div className="tpl-actions">
            <Link href="/byrja?term=askrift" className="btn">
              Velja þetta
            </Link>
            {t.previewUrl ? (
              <a href={t.previewUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                Opna sýn ↗
              </a>
            ) : null}
          </div>
        </header>

        <div className="tpl-preview">
          <LivePreview url={t.previewUrl} title={t.name} />
        </div>

        <p className="tpl-note">Sýnishorn. Merki, litir og texti verða þín.</p>
      </div>
    </div>
  );
}
