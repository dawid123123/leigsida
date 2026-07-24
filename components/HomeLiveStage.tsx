'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import LivePreview from './LivePreview';
import TemplateThumb from './TemplateThumb';
import { useLang } from '../lib/i18n/LanguageProvider';
import { templateCopy } from '../lib/i18n/messages';
import { catalogTemplates } from '../lib/templates';

export default function HomeLiveStage() {
  const { lang, t } = useLang();
  const picks = catalogTemplates().slice(0, 4);
  const firstLive = picks.find((x) => x.live) || picks[0];
  const [activeSlug, setActiveSlug] = useState(firstLive.slug);
  const active = picks.find((x) => x.slug === activeSlug) || firstLive;
  const copy = templateCopy[active.slug];

  return (
    <div className="live-stage">
      <div className="live-stage-frame">
        <AnimatePresence mode="wait">
          {active.live ? (
            <motion.div
              key={active.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <LivePreview
                template={active}
                title={copy?.name[lang] || active.name}
              />
            </motion.div>
          ) : (
            <motion.div
              key={active.slug + '-soon'}
              className="live-stage-soon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <p>{copy?.niche[lang] || active.niche}</p>
              <strong>{copy?.name[lang] || active.name}</strong>
              <span>{t.common.comingSoon}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="live-stage-picks" role="listbox" aria-label={t.nav.templates}>
        {picks.map((item) => {
          const on = item.slug === active.slug;
          const c = templateCopy[item.slug];
          return (
            <button
              key={item.slug}
              type="button"
              role="option"
              aria-selected={on}
              className={
                'live-stage-pick' +
                (on ? ' on' : '') +
                (!item.live ? ' is-soon' : '')
              }
              onClick={() => setActiveSlug(item.slug)}
            >
              <TemplateThumb
                name={c?.name[lang] || item.name}
                niche={c?.niche[lang] || item.niche}
                cover={item.cover}
                headline={item.headline}
                tone={item.tone}
              />
              <span>{c?.niche[lang] || item.niche}</span>
              <strong>{c?.name[lang] || item.name}</strong>
              {!item.live ? <em>{t.common.comingSoon}</em> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
