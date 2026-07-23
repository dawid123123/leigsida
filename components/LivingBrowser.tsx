'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { isk, lowestMonthly } from '../lib/pricing';

const skins = [
  {
    id: 'auto',
    brand: 'Auto Protect',
    niche: 'Bílaþjónusta',
    ink: '#f4f4f0',
    paper: '#121212',
    accent: '#c8e84a',
    line1: 'GLJÁI',
    line2: 'OG',
    line3: 'VERND',
  },
  {
    id: 'verktaki',
    brand: 'Verktaki',
    niche: 'Iðnaður',
    ink: '#1c2428',
    paper: '#f3f0ea',
    accent: '#1f5c66',
    line1: 'VINNA',
    line2: 'SEM',
    line3: 'SKILAR',
  },
  {
    id: 'ferdir',
    brand: 'Norðurferðir',
    niche: 'Ferðaþjónusta',
    ink: '#f6efe6',
    paper: '#1b2a24',
    accent: '#d4a574',
    line1: 'FERÐ',
    line2: 'UM',
    line3: 'ÍSLAND',
  },
];

export default function LivingBrowser() {
  const [i, setI] = useState(0);
  const skin = skins[i];
  const from = lowestMonthly();

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % skins.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="lx-browser-stage">
      <div className="lx-float-tag" aria-hidden="true">
        <span className="lx-float-dot" />
        Á leigu · frá {isk(from)}/mán.
      </div>

      <div
        className="lx-browser"
        style={
          {
            '--lx-paper': skin.paper,
            '--lx-ink': skin.ink,
            '--lx-accent': skin.accent,
          } as CSSProperties
        }
      >
        <div className="lx-browser-bar">
          <i />
          <i />
          <i />
          <span>{skin.brand.toLowerCase().replace(' ', '')}.is</span>
        </div>
        <div className="lx-browser-body" key={skin.id}>
          <p className="lx-browser-niche">{skin.niche}</p>
          <h3>
            <span>{skin.line1}</span>
            <span style={{ color: 'var(--lx-accent)' }}>{skin.line2}</span>
            <span>{skin.line3}</span>
          </h3>
          <div className="lx-browser-cta" style={{ background: 'var(--lx-accent)' }} />
          <div className="lx-browser-grid">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="lx-browser-rail" aria-hidden="true">
        {skins.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={idx === i ? 'on' : undefined}
            onClick={() => setI(idx)}
            aria-label={s.brand}
          />
        ))}
      </div>

      <p className="lx-browser-caption">
        Sama sniðmát. Annað fyrirtæki.
        <Link href="/snidomot/ks-protect"> Sjá live sýn →</Link>
      </p>
    </div>
  );
}
