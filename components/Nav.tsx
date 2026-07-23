'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLang } from '../lib/i18n/LanguageProvider';
import { nav, site } from '../lib/site';

export default function Nav() {
  const path = usePathname();
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={
        'gnav' +
        (scrolled || open ? ' is-scrolled' : '') +
        (open ? ' is-open' : '')
      }
    >
      <div className="wrap gnav-inner">
        <Link href="/" className="gnav-brand" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className="gnav-links" aria-label={t.common.menu}>
          {nav.map((item) => {
            const active =
              path === item.href || path.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? 'gnav-link is-active' : 'gnav-link'}
              >
                {t.nav[item.key]}
                {active ? (
                  <motion.i layoutId="gnav-pill" className="gnav-pill" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="gnav-actions">
          <div className="gnav-lang" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'is' ? 'on' : undefined}
              onClick={() => setLang('is')}
            >
              IS
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'on' : undefined}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <Link href="/byrja" className="btn btn-sm gnav-cta">
            {t.cta.start}
          </Link>
          <button
            type="button"
            className={'gnav-menu' + (open ? ' is-open' : '')}
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            aria-expanded={open}
            aria-controls="gnav-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="gnav-drawer"
            className="gnav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wrap gnav-drawer-inner">
              <nav aria-label={t.common.menu}>
                {nav.map((item, i) => {
                  const active =
                    path === item.href || path.startsWith(item.href + '/');
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 + i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className={active ? 'is-active' : undefined}
                        onClick={() => setOpen(false)}
                      >
                        <em>{String(i + 1).padStart(2, '0')}</em>
                        {t.nav[item.key]}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="gnav-drawer-lang">
                <button
                  type="button"
                  className={lang === 'is' ? 'on' : undefined}
                  onClick={() => setLang('is')}
                >
                  Íslenska
                </button>
                <button
                  type="button"
                  className={lang === 'en' ? 'on' : undefined}
                  onClick={() => setLang('en')}
                >
                  English
                </button>
              </div>
              <Link
                href="/byrja"
                className="btn gnav-drawer-cta"
                onClick={() => setOpen(false)}
              >
                {t.cta.startNow}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
