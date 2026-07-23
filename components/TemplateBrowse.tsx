'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import TemplateThumb from './TemplateThumb';
import { useLang } from '../lib/i18n/LanguageProvider';
import { templateCopy } from '../lib/i18n/messages';
import { catalogTemplates } from '../lib/templates';

export default function TemplateBrowse() {
  const { lang, t } = useLang();
  const all = catalogTemplates();

  const niches = useMemo(() => {
    const keys = Array.from(new Set(all.map((x) => x.niche)));
    return [
      { key: '__all__', label: t.common.all },
      ...keys.map((k) => {
        const slug = all.find((x) => x.niche === k)?.slug || '';
        return {
          key: k,
          label: templateCopy[slug]?.niche[lang] || k,
        };
      }),
    ];
  }, [all, lang, t.common.all]);

  const [filter, setFilter] = useState('__all__');
  const list = all.filter((x) => filter === '__all__' || x.niche === filter);

  return (
    <div className="tpl-browse">
      <div className="tpl-browse-filters" role="tablist" aria-label={t.snidomot.nichesLabel}>
        {niches.map((n) => (
          <button
            key={n.key}
            type="button"
            className={filter === n.key ? 'on' : undefined}
            onClick={() => setFilter(n.key)}
          >
            {n.label}
          </button>
        ))}
      </div>

      {list.length > 0 ? (
        <div className="tpl-grid">
          {list.map((item, i) => {
            const c = templateCopy[item.slug];
            const name = c?.name[lang] || item.name;
            const niche = c?.niche[lang] || item.niche;
            const body = (
              <>
                <div className="tpl-card-visual">
                  <TemplateThumb
                    name={name}
                    niche={niche}
                    cover={item.cover}
                    headline={item.headline}
                    tone={item.live ? item.tone : 'soon'}
                  />
                </div>
                <div className="tpl-card-meta">
                  <span>{niche}</span>
                  <strong>{name}</strong>
                  <em>{item.live ? t.snidomot.viewSample : t.common.comingSoon}</em>
                </div>
              </>
            );

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {item.live ? (
                  <Link
                    href={'/snidomot/' + item.slug}
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
        <p className="tpl-empty">{t.snidomot.empty}</p>
      )}
    </div>
  );
}
