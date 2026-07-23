'use client';

import ContactForm from './ContactForm';
import { useLang } from '../lib/i18n/LanguageProvider';
import type { PackageId, TermId } from '../lib/pricing';
import { site } from '../lib/site';

export default function ContactPageClient({
  pack,
  term,
}: {
  pack: PackageId;
  term: TermId;
}) {
  const { t } = useLang();

  return (
    <div className="page">
      <header className="wrap page-hero">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h1 className="display">
          {t.contact.h1a}
          <br />
          <em>{t.contact.h1em}</em>
        </h1>
        <p className="lede">{t.contact.lede}</p>
      </header>

      <section className="wrap contact-grid">
        <ContactForm pack={pack} term={term} />
        <aside className="contact-aside">
          <div>
            <span>{t.common.reply}</span>
            <strong>{t.common.replyTime}</strong>
          </div>
          <div>
            <span>{t.common.email}</span>
            <a href={'mailto:' + site.email}>{site.email}</a>
          </div>
          <div>
            <span>{t.common.phone}</span>
            <strong>{t.common.phoneNote}</strong>
          </div>
        </aside>
      </section>
    </div>
  );
}
