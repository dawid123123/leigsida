'use client';

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import {
  getIndustry,
  industries,
  type IndustryId,
} from '../lib/industries';

type View = 'heim' | 'thjonusta' | 'verd' | 'samband';

export default function IndustryPreview() {
  const [industryId, setIndustryId] = useState<IndustryId>('auto');
  const [view, setView] = useState<View>('heim');
  const theme = getIndustry(industryId);
  const views: View[] = ['heim', 'thjonusta', 'verd', 'samband'];

  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  function onMove(e: MouseEvent) {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="ip">
      <aside className="ip-cats" aria-label="Greinar">
        {industries.map((ind) => (
          <button
            key={ind.id}
            type="button"
            className={industryId === ind.id ? 'on' : undefined}
            onClick={() => {
              setIndustryId(ind.id);
              setView('heim');
            }}
          >
            {ind.label}
          </button>
        ))}
      </aside>

      <motion.div
        ref={cardRef}
        className="ip-stage"
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="ip-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{theme.domain}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={theme.id}
            className="ip-site"
            style={
              {
                '--s-paper': theme.paper,
                '--s-ink': theme.ink,
                '--s-muted': theme.muted,
                '--s-soft': theme.soft,
                '--s-accent': theme.accent,
              } as CSSProperties
            }
            initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.985 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(6px)', scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="ip-nav">
              <strong>{theme.brand}</strong>
              <nav>
                {theme.nav.map((label, idx) => (
                  <button
                    key={label}
                    type="button"
                    className={view === views[idx] ? 'on' : undefined}
                    onClick={() => setView(views[idx])}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </header>

            <div className="ip-scroll">
              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                >
                  {view === 'heim' ? (
                    <>
                      <section className="ip-hero">
                        <div>
                          <p>{theme.sub}</p>
                          <h3>
                            <span>{theme.hero[0]}</span>
                            <span className="accent">{theme.hero[1]}</span>
                          </h3>
                          <button
                            type="button"
                            className="ip-cta"
                            onClick={() => setView('samband')}
                          >
                            {theme.cta}
                          </button>
                        </div>
                        <motion.div
                          className="ip-hero-media"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.35 }}
                        >
                          <img src={theme.photo} alt="" />
                        </motion.div>
                      </section>
                      <section className="ip-cards">
                        {theme.services.map((s, i) => (
                          <motion.article
                            key={s.title}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.25 }}
                            style={{ transitionDelay: `${i * 40}ms` }}
                          >
                            <b>{s.title}</b>
                            <span>{s.line}</span>
                          </motion.article>
                        ))}
                      </section>
                    </>
                  ) : null}

                  {view === 'thjonusta' ? (
                    <section className="ip-block">
                      <h4>{theme.nav[1]}</h4>
                      <div className="ip-services">
                        {theme.services.map((s) => (
                          <article key={s.title}>
                            <b>{s.title}</b>
                            <p>{s.line}</p>
                          </article>
                        ))}
                      </div>
                      <div className="ip-gallery">
                        <img src={theme.photo} alt="" />
                        <span style={{ background: theme.galleryTone[1] }} />
                        <span style={{ background: theme.galleryTone[0] }} />
                        <span style={{ background: theme.galleryTone[2] }} />
                      </div>
                    </section>
                  ) : null}

                  {view === 'verd' ? (
                    <section className="ip-block">
                      <h4>{theme.nav[2]}</h4>
                      <p className="ip-price">{theme.priceLine}</p>
                      <button
                        type="button"
                        className="ip-cta"
                        onClick={() => setView('samband')}
                      >
                        {theme.cta}
                      </button>
                    </section>
                  ) : null}

                  {view === 'samband' ? (
                    <section className="ip-block">
                      <h4>{theme.nav[3]}</h4>
                      <p className="ip-mail">hallo@{theme.domain}</p>
                      <div className="ip-form">
                        <input readOnly value="Dæmi Jónsson" />
                        <input readOnly value="demi@netfang.is" />
                        <button type="button" className="ip-cta">
                          Senda
                        </button>
                      </div>
                    </section>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
