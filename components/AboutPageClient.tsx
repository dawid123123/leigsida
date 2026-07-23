'use client';

import Link from 'next/link';
import { useLang } from '../lib/i18n/LanguageProvider';

export default function AboutPageClient() {
  const { t } = useLang();

  return (
    <div className="page about">
      <header className="wrap about-hero">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h1 className="display">
          {t.about.h1a}
          <br />
          <em>{t.about.h1em}</em>
        </h1>
        <p className="lede">{t.about.lede}</p>
        <div className="about-hero-meta">
          <span>
            <i />
            {t.about.metaSub}
          </span>
          <span>{t.about.metaPlace}</span>
        </div>
      </header>

      <section className="wrap about-story">
        <p className="about-story-kicker">{t.about.why}</p>
        <h2 className="display">{t.about.storyTitle}</h2>
        <p>{t.about.storyBody}</p>
      </section>

      <section className="wrap about-pillars">
        <div className="about-pillars-head">
          <p className="eyebrow">{t.about.howEyebrow}</p>
          <h2 className="display">{t.about.howTitle}</h2>
        </div>
        <ol className="about-pillar-list">
          {t.about.pillars.map((p, i) => (
            <li key={p.t}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{p.t}</strong>
                <p>{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-band">
        <div className="wrap page-band-inner">
          <h2 className="display">{t.about.endTitle}</h2>
          <p>{t.about.endLede}</p>
          <Link href="/byrja" className="btn">
            {t.cta.startNow}
          </Link>
        </div>
      </section>
    </div>
  );
}
