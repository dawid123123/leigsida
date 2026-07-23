'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroVisual from './HeroVisual';
import HomeLiveStage from './HomeLiveStage';
import { isk, lowestBuy, lowestMonthly } from '../lib/pricing';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

const steps = [
  'Þú hefur samband.',
  'Við tölum saman.',
  'Við hönnum síðuna.',
  'Þú samþykkir.',
  'Við birtum síðuna.',
  'Við sjáum um hana áfram.',
];

const includes = [
  'Við sjáum um síðuna.',
  'Þú þarft ekki að gera neitt.',
  'Við uppfærum hana.',
  'Við höldum henni öruggri.',
  'Við tengjum .is-heitið.',
  'Við birtum síðuna.',
];

export default function HomeExperience() {
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
          <p className="eyebrow">Vefsíða á áskrift</p>
          <h1 className="display">
            Þú sérð um
            <br />
            reksturinn.
            <br />
            <em>Við sjáum um síðuna.</em>
          </h1>
          <p className="lede">
            Við hönnum, birtum og höldum úti.
            Þú þarft ekki að kunna neitt.
          </p>
          <div className="home-hero-cta">
            <Link href="/hafa-samband" className="btn">
              Byrja
            </Link>
            <a href="#syn" className="btn-ghost">
              Sjá sýn
            </a>
          </div>
        </motion.div>

        <HeroVisual />
      </section>

      <section id="syn" className="home-live wrap">
        <motion.div {...fade} className="home-live-head">
          <p className="eyebrow">Sýnishorn</p>
          <h2 className="display">Raunveruleg síða.</h2>
          <p className="lede">Smelltu á grein þegar fleiri bætast við.</p>
        </motion.div>
        <HomeLiveStage />
      </section>

      <section className="home-price wrap">
        <motion.div {...fade} className="home-price-grid">
          <div>
            <p className="eyebrow">Verð</p>
            <h2 className="display">Einfalt.</h2>
          </div>
          <div className="home-price-cols">
            <div>
              <span>Leigja</span>
              <strong className="display">{isk(monthly)}</strong>
              <em>/ mán.</em>
            </div>
            <div>
              <span>Kaupa</span>
              <strong className="display">frá {isk(buy)}</strong>
              <em>einskiptis</em>
            </div>
          </div>
        </motion.div>
        <motion.ul {...fade} className="home-includes">
          {includes.map((item, i) => (
            <li key={item}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </motion.ul>
        <motion.div {...fade}>
          <Link href="/verd" className="btn-ghost">
            Sjá nánar um verð
          </Link>
        </motion.div>
      </section>

      <section className="home-process wrap">
        <motion.div {...fade}>
          <p className="eyebrow">Ferlið</p>
          <h2 className="display">Svona einfaldlega.</h2>
        </motion.div>
        <ol className="home-timeline">
          {steps.map((step, i) => (
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
            Tilbúinn?
          </motion.h2>
          <motion.p {...fade}>Segðu okkur hvað þú gerir. Við gerum restina.</motion.p>
          <motion.div {...fade}>
            <Link href="/hafa-samband" className="btn">
              Hafa samband
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
