'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import TemplateThumb from './TemplateThumb';
import { catalogTemplates } from '../lib/templates';

export default function TemplateBrowse() {
  const all = catalogTemplates();
  const niches = useMemo(
    () => ['Öll', ...Array.from(new Set(all.map((t) => t.niche)))],
    [all]
  );
  const [filter, setFilter] = useState('Öll');

  const list = all.filter((t) => filter === 'Öll' || t.niche === filter);

  return (
    <div className="tpl-browse">
      <div className="tpl-browse-filters" role="tablist" aria-label="Greinar">
        {niches.map((n) => (
          <button
            key={n}
            type="button"
            className={filter === n ? 'on' : undefined}
            onClick={() => setFilter(n)}
          >
            {n}
          </button>
        ))}
      </div>

      {list.length > 0 ? (
        <div className="tpl-grid">
          {list.map((t, i) => {
            const body = (
              <>
                <div className="tpl-card-visual">
                  <TemplateThumb
                    name={t.name}
                    niche={t.niche}
                    cover={t.cover}
                    headline={t.headline}
                    tone={t.live ? t.tone : 'soon'}
                  />
                </div>
                <div className="tpl-card-meta">
                  <span>{t.niche}</span>
                  <strong>{t.name}</strong>
                  <em>{t.live ? 'Skoða sýnishorn →' : 'Kemur bráðum'}</em>
                </div>
              </>
            );

            return (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {t.live ? (
                  <Link
                    href={'/snidomot/' + t.slug}
                    className="tpl-card is-live"
                    data-tone={i % 4}
                  >
                    {body}
                  </Link>
                ) : (
                  <article className="tpl-card is-soon" data-tone={i % 4}>
                    {body}
                  </article>
                )}
              </motion.div>
            );
          })}
        </div>
      ) : (
        <p className="tpl-empty">Ekkert fannst í þessari grein.</p>
      )}
    </div>
  );
}
