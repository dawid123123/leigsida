'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import LivePreview from './LivePreview';
import TemplateThumb from './TemplateThumb';
import { catalogTemplates } from '../lib/templates';

/** Stór live sýn + 3–4 val neðst */
export default function HomeLiveStage() {
  const picks = catalogTemplates().slice(0, 4);
  const firstLive = picks.find((t) => t.live) || picks[0];
  const [activeSlug, setActiveSlug] = useState(firstLive.slug);
  const active = picks.find((t) => t.slug === activeSlug) || firstLive;

  return (
    <div className="live-stage">
      <div className="live-stage-frame">
        <AnimatePresence mode="wait">
          {active.live && active.previewUrl ? (
            <motion.div
              key={active.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <LivePreview url={active.previewUrl} title={active.name} />
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
              <p>{active.niche}</p>
              <strong>{active.name}</strong>
              <span>Kemur bráðum</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="live-stage-picks" role="listbox" aria-label="Sniðmát">
        {picks.map((t) => {
          const on = t.slug === active.slug;
          return (
            <button
              key={t.slug}
              type="button"
              role="option"
              aria-selected={on}
              className={
                'live-stage-pick' +
                (on ? ' on' : '') +
                (!t.live ? ' is-soon' : '')
              }
              onClick={() => setActiveSlug(t.slug)}
            >
              <TemplateThumb
                name={t.name}
                niche={t.niche}
                cover={t.cover}
                headline={t.headline}
                tone={t.tone}
              />
              <span>{t.niche}</span>
              <strong>{t.name}</strong>
              {!t.live ? <em>Kemur bráðum</em> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
