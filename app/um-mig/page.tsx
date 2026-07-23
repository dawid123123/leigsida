import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '../../lib/site';

export const metadata: Metadata = { title: 'Um okkur' };

const pillars = [
  {
    n: '01',
    t: 'Hönnun',
    d: 'Útlit sem passar þinni grein — litir, texti og merki verða þín.',
  },
  {
    n: '02',
    t: 'Birting',
    d: 'Við setjum síðuna upp, tengjum .is og birtum hana tilbúna.',
  },
  {
    n: '03',
    t: 'Umsjón',
    d: 'Við höldum henni úti og uppfærum. Þú sérð um reksturinn.',
  },
];

export default function UmMigPage() {
  return (
    <div className="page about">
      <header className="wrap about-hero">
        <p className="eyebrow">Um {site.name}</p>
        <h1 className="display">
          Þú reksturinn.
          <br />
          <em>Við síðuna.</em>
        </h1>
        <p className="lede">
          Mánaðarleg áskrift. Engin forritun hjá þér.
          Engin tæknivinna — bara skýr síða sem vinnur fyrir þig.
        </p>
        <div className="about-hero-meta">
          <span>
            <i />
            Áskrift frá 18.990 kr./mán.
          </span>
          <span>Á Íslandi</span>
        </div>
      </header>

      <section className="wrap about-story">
        <p className="about-story-kicker">Af hverju</p>
        <h2 className="display">
          Flest fyrirtæki þurfa ekki flókið kerfi.
          Þau þurfa síðu sem lítur vel út og er alltaf í gangi.
        </h2>
        <p>
          Við hönnum, birtum og sjáum um. Þú greiðir mánaðarlega —
          eða kaupir síðuna út. Allt staðfest í pósti áður en vinna hefst.
        </p>
      </section>

      <section className="wrap about-pillars">
        <div className="about-pillars-head">
          <p className="eyebrow">Svona vinnum við</p>
          <h2 className="display">Þrjú skref. Ekkert rugl.</h2>
        </div>
        <ol className="about-pillar-list">
          {pillars.map((p) => (
            <li key={p.n}>
              <span>{p.n}</span>
              <div>
                <strong>{p.t}</strong>
                <p>{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-band">
        <div className="wrap page-band-inner">
          <h2 className="display">Tilbúinn?</h2>
          <p>Segðu okkur hvað þú gerir. Við gerum restina.</p>
          <Link href="/byrja" className="btn">
            Byrja núna
          </Link>
        </div>
      </section>
    </div>
  );
}
