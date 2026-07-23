'use client';

import Link from 'next/link';
import TemplateBrowse from './TemplateBrowse';
import { useLang } from '../lib/i18n/LanguageProvider';
import { catalogTemplates } from '../lib/templates';

export default function SnidomotPageClient() {
  const { t } = useLang();
  const liveCount = catalogTemplates().filter((x) => x.live).length;

  return (
    <div className="page snidomot">
      <header className="wrap page-hero snidomot-hero">
        <p className="eyebrow">{t.snidomot.eyebrow}</p>
        <h1 className="display">
          {t.snidomot.h1a} <em>{t.snidomot.h1em}</em>
        </h1>
        <p className="lede">{t.snidomot.lede}</p>
        <div className="snidomot-hero-meta">
          <span>
            <i />
            {t.snidomot.liveCount(liveCount)}
          </span>
          <span>{t.snidomot.moreComing}</span>
        </div>
      </header>

      <div className="wrap">
        <TemplateBrowse />
      </div>

      <section className="page-band">
        <div className="wrap page-band-inner">
          <h2 className="display">{t.snidomot.bandTitle}</h2>
          <p>{t.snidomot.bandLede}</p>
          <Link href="/hafa-samband" className="btn">
            {t.cta.requestSite}
          </Link>
        </div>
      </section>
    </div>
  );
}
