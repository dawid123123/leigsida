'use client';

import Link from 'next/link';
import LivePreview from './LivePreview';
import { useLang } from '../lib/i18n/LanguageProvider';
import { templateCopy } from '../lib/i18n/messages';
import type { Template } from '../lib/templates';

export default function TemplateDetailClient({ template }: { template: Template }) {
  const { lang, t } = useLang();
  const c = templateCopy[template.slug];
  const name = c?.name[lang] || template.name;
  const niche = c?.niche[lang] || template.niche;
  const about = c?.about[lang] || template.about || c?.line[lang] || template.line;

  return (
    <div className="page">
      <div className="wrap">
        <Link href="/snidomot" className="tpl-back">
          {t.cta.allTemplates}
        </Link>

        <header className="tpl-hero">
          <p className="eyebrow">{niche}</p>
          <h1 className="display tpl-title">{name}</h1>
          <p className="tpl-lead">{about}</p>
          <div className="tpl-actions">
            <Link href="/byrja?term=askrift" className="btn">
              {t.cta.chooseThis}
            </Link>
            {template.previewUrl ? (
              <a
                href={template.previewUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                {t.cta.openPreview}
              </a>
            ) : null}
          </div>
        </header>

        <div className="tpl-preview">
          <LivePreview url={template.previewUrl} title={name} />
        </div>

        <p className="tpl-note">{t.tpl.note}</p>
      </div>
    </div>
  );
}
