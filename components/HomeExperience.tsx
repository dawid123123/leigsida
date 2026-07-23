'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroVisual from './HeroVisual';
import HomeLiveStage from './HomeLiveStage';
import { useLang } from '../lib/i18n/LanguageProvider';
import { isk, lowestBuy, lowestMonthly } from '../lib/pricing';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomeExperience() {
  const { t } = useLang();
  const monthly = lowestMonthly();
  const buy = lowestBuy();

  return (
    <div className="home">
      <section className="home-hero wrap">
        <motion.div
          className="home-hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1 className="display">
            {t.home.h1a}
            <br />
            {t.home.h1b}
            <br />
            <em>{t.home.h1em}</em>
          </h1>
          <p className="lede">{t.home.lede}</p>
          <div className="home-hero-cta">
            <Link href="/hafa-samband" className="btn">
              {t.cta.start}
            </Link>
            <a href="#syn" className="btn-ghost">
              {t.cta.seeDemo}
            </a>
          </div>
        </motion.div>

        <HeroVisual />
      </section>

      <section id="syn" className="home-live wrap">
        <motion.div {...fade} className="home-live-head">
          <p className="eyebrow">{t.home.synEyebrow}</p>
          <h2 className="display">{t.home.synTitle}</h2>
          <p className="lede">{t.home.synLede}</p>
        </motion.div>
        <HomeLiveStage />
      </section>

      <section className="home-price wrap">
        <motion.div {...fade} className="home-price-grid">
          <div>
            <p className="eyebrow">{t.home.priceEyebrow}</p>
            <h2 className="display">{t.home.priceTitle}</h2>
          </div>
          <div className="home-price-cols">
            <div>
              <span>{t.home.rent}</span>
              <strong className="display">{isk(monthly)}</strong>
              <em>{t.common.perMonth}</em>
            </div>
            <div>
              <span>{t.home.buy}</span>
              <strong className="display">
                {t.common.from} {isk(buy)}
              </strong>
              <em>{t.common.oneTime}</em>
            </div>
          </div>
        </motion.div>
        <motion.ul {...fade} className="home-includes">
          {t.home.includes.map((item, i) => (
            <li key={item}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </motion.ul>
        <motion.div {...fade}>
          <Link href="/verd" className="btn-ghost">
            {t.cta.seePricing}
          </Link>
        </motion.div>
      </section>

      <section className="home-process wrap">
        <motion.div {...fade}>
          <p className="eyebrow">{t.home.processEyebrow}</p>
          <h2 className="display">{t.home.processTitle}</h2>
        </motion.div>
        <ol className="home-timeline">
          {t.home.steps.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="home-end">
        <div className="wrap">
          <motion.h2 {...fade} className="display">
            {t.home.endTitle}
          </motion.h2>
          <motion.p {...fade}>{t.home.endLede}</motion.p>
          <motion.div {...fade}>
            <Link href="/hafa-samband" className="btn">
              {t.cta.contact}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
