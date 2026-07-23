'use client';

import Link from 'next/link';
import PriceVisual from './PriceVisual';
import { useLang } from '../lib/i18n/LanguageProvider';

export default function VerdPageClient() {
  const { t } = useLang();
  const includes = t.pricing.includes;

  return (
    <div className="page">
      <header className="wrap page-hero page-hero-split">
        <div className="page-hero-copy">
          <p className="eyebrow">{t.verd.eyebrow}</p>
          <h1 className="display">
            {t.verd.h1a}
            <br />
            <em>{t.verd.h1em}</em>
          </h1>
          <p className="lede">{t.verd.lede}</p>
        </div>
        <PriceVisual />
      </header>

      <section className="wrap price-gets">
        <div className="price-gets-head">
          <h2 className="display">{t.verd.getsTitle}</h2>
          <p>{t.verd.getsLede}</p>
        </div>
        <ul className="price-gets-grid">
          {includes.map((item, i) => (
            <li key={item}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
        <p className="price-note">{t.verd.note}</p>
      </section>

      <section className="page-band">
        <div className="wrap">
          <h2 className="display">{t.verd.endTitle}</h2>
          <p>{t.verd.endLede}</p>
          <Link href="/hafa-samband" className="btn">
            {t.cta.contact}
          </Link>
        </div>
      </section>
    </div>
  );
}
