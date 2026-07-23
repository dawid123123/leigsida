import type { Metadata } from 'next';
import Link from 'next/link';
import PriceVisual from '../../components/PriceVisual';
import { mainPackage } from '../../lib/pricing';

export const metadata: Metadata = { title: 'Verð' };

export default function VerdPage() {
  const p = mainPackage();

  return (
    <div className="page">
      <header className="wrap page-hero page-hero-split">
        <div className="page-hero-copy">
          <p className="eyebrow">Verð</p>
          <h1 className="display">
            Ein þjónusta.
            <br />
            <em>Tvær leiðir.</em>
          </h1>
          <p className="lede">
            Skýrt verð. Engin tækniorð. Þú veist alltaf hvað þú greiðir.
          </p>
        </div>
        <PriceVisual />
      </header>

      <section className="wrap price-gets">
        <div className="price-gets-head">
          <h2 className="display">Þetta fylgir með</h2>
          <p>Á áskrift. Allt sem þú þarft — ekkert sem þú þarft ekki.</p>
        </div>
        <ul className="price-gets-grid">
          {p.includes.map((item, i) => (
            <li key={item}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
        <p className="price-note">3 mánaða binditími. Greitt mánaðarlega.</p>
      </section>

      <section className="page-band">
        <div className="wrap">
          <h2 className="display">Tilbúinn?</h2>
          <p>Við staðfestum allt í pósti áður en vinna hefst.</p>
          <Link href="/hafa-samband" className="btn">
            Hafa samband
          </Link>
        </div>
      </section>
    </div>
  );
}
