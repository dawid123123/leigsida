'use client';

import Link from 'next/link';
import ContactForm from './ContactForm';
import { useLang } from '../lib/i18n/LanguageProvider';
import {
  domainRenewalMonthly,
  isk,
  mainPackage,
  type TermId,
} from '../lib/pricing';

export default function ByrjaPageClient({ termId }: { termId: TermId }) {
  const { t } = useLang();
  const pack = mainPackage();
  const buying = termId === 'kaupa';
  const renewal = domainRenewalMonthly.toLocaleString('is-IS');
  const items = buying
    ? t.pricing.buyIncludes(renewal)
    : t.pricing.includes;
  const price = pack.prices[termId];
  const priceLabel = isk(price);
  const priceSub = buying ? t.common.oneTime : t.common.perMonth;

  return (
    <div className="page">
      <section className="wrap byrja">
        <div className="byrja-offer">
          <Link href="/verd" className="byrja-back">
            {t.cta.backPricing}
          </Link>
          <p className="eyebrow">{buying ? t.byrja.buy : t.byrja.rent}</p>
          <h1 className="display byrja-price">
            {priceLabel}
            <em>{priceSub}</em>
          </h1>
          <p className="byrja-blurb">
            {buying ? t.byrja.buyBlurb : t.byrja.rentBlurb}
          </p>
          <ul className="byrja-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="byrja-note">
            {buying ? t.pricing.kaupaNote : t.pricing.askriftNote}
          </p>
        </div>

        <div className="byrja-form">
          <h2 className="display">{t.byrja.next}</h2>
          <p>{t.byrja.nextLede}</p>
          <ContactForm pack="stadall" term={termId} />
        </div>
      </section>
    </div>
  );
}
