import type { Metadata } from 'next';
import Link from 'next/link';
import TemplateBrowse from '../../components/TemplateBrowse';
import { catalogTemplates } from '../../lib/templates';

export const metadata: Metadata = { title: 'Sniðmát' };

export default function SnidomotPage() {
  const liveCount = catalogTemplates().filter((t) => t.live).length;

  return (
    <div className="page snidomot">
      <header className="wrap page-hero snidomot-hero">
        <p className="eyebrow">Sniðmát</p>
        <h1 className="display">
          Veldu þína <em>grein.</em>
        </h1>
        <p className="lede">
          Hér sérðu sýnishorn eftir tegund fyrirtækis.
          Við sérsníðum síðuna að þér — litir, texti og merki.
        </p>
        <div className="snidomot-hero-meta">
          <span>
            <i />
            {liveCount} live sýnishorn
          </span>
          <span>Fleiri greinar á leiðinni</span>
        </div>
      </header>

      <div className="wrap">
        <TemplateBrowse />
      </div>

      <section className="page-band">
        <div className="wrap page-band-inner">
          <h2 className="display">Finnurðu ekki þína grein?</h2>
          <p>Við smíðum samt. Segðu okkur hvað þú gerir.</p>
          <Link href="/hafa-samband" className="btn">
            Óska eftir síðu
          </Link>
        </div>
      </section>
    </div>
  );
}
