import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import {
  isk,
  mainPackage,
  terms,
  type TermId,
} from '../../lib/pricing';

export const metadata: Metadata = { title: 'Byrja' };

type Props = {
  searchParams?: { term?: string };
};

export default function ByrjaPage({ searchParams }: Props) {
  const termId: TermId =
    searchParams?.term === 'kaupa' ? 'kaupa' : 'askrift';
  const pack = mainPackage();
  const term = terms.find((t) => t.id === termId)!;
  const buying = termId === 'kaupa';
  const items = buying ? pack.buyIncludes : pack.includes;
  const price = pack.prices[termId];
  const priceLabel = buying ? isk(price) : isk(price);
  const priceSub = buying ? 'einskiptis' : '/ mán.';

  return (
    <div className="page">
      <section className="wrap byrja">
        <div className="byrja-offer">
          <Link href="/verd" className="byrja-back">
            ← Til baka á verð
          </Link>
          <p className="eyebrow">{buying ? 'Kaup' : 'Leiga'}</p>
          <h1 className="display byrja-price">
            {priceLabel}
            <em>{priceSub}</em>
          </h1>
          <p className="byrja-blurb">
            {buying
              ? 'Þú greiðir einu sinni. Síðan verður þín.'
              : 'Þú greiðir mánaðarlega. Við sjáum um allt.'}
          </p>
          <ul className="byrja-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="byrja-note">{term.note}</p>
        </div>

        <div className="byrja-form">
          <h2 className="display">Næsta skref</h2>
          <p>Fylltu út — við svörum innan 1 virks dags.</p>
          <ContactForm pack="stadall" term={termId} />
        </div>
      </section>
    </div>
  );
}
