'use client';

import { useLang } from '../lib/i18n/LanguageProvider';
import type { Template } from '../lib/templates';

const navIs = ['Heim', 'Grafín', 'PPF', 'Tint', 'Netverslun', 'Um okkur'];
const navEn = ['Home', 'Graphene', 'PPF', 'Tint', 'Shop', 'About'];

export default function TemplateSiteDemo({
  template,
  cover,
}: {
  template: Template;
  cover?: string;
}) {
  const { lang } = useLang();
  const is = lang === 'is';
  const nav = is ? navIs : navEn;
  const image =
    cover ||
    template.cover ||
    'https://images.pexels.com/photos/18354100/pexels-photo-18354100.jpeg?auto=compress&cs=tinysrgb&w=1200';
  const [a, b, c] = template.headline || ['GLJÁI', 'OG', 'VERND'];

  return (
    <div className="tpl-demo">
      <header className="tpl-demo-nav">
        <strong>Logo</strong>
        <nav>
          {nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
        <div className="tpl-demo-nav-end">
          <em>{is ? 'IS' : 'EN'}</em>
          <button type="button">{is ? 'Fá tilboð' : 'Get offer'}</button>
        </div>
      </header>

      <section className="tpl-demo-hero">
        <div className="tpl-demo-copy">
          <p className="tpl-demo-kicker">{is ? 'Sniðmát · demo' : 'Template · demo'}</p>
          <h2>
            {a} <i>{b}</i> {c}
          </h2>
          <p>
            {is
              ? 'PPF lakkvarnarfilmur og grafínlakkvörn — fagleg uppsetning. Merki, litir og texti verða þín.'
              : 'PPF paint protection and graphene coating — professional install. Branding, colors, and copy become yours.'}
          </p>
          <div className="tpl-demo-cta">
            <button type="button">{is ? 'Fá ókeypis tilboð' : 'Get a free offer'}</button>
            <button type="button" className="ghost">
              {is ? 'Skoða þjónustu' : 'View services'}
            </button>
          </div>
          <div className="tpl-demo-stats">
            <div>
              <strong>7+</strong>
              <span>{is ? 'ára reynsla' : 'years experience'}</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>{is ? 'varðir bílar' : 'protected cars'}</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>{is ? 'ánægja' : 'satisfaction'}</span>
            </div>
          </div>
        </div>
        <div className="tpl-demo-photo">
          <img src={image} alt="" />
          <span>{is ? '12 ára ábyrgð' : '12-year warranty'}</span>
        </div>
      </section>

      <footer className="tpl-demo-foot">
        <span>netfang@fyrirtaeki.is</span>
        <span>000 0000</span>
        <span>{is ? 'Heimilisfang, Reykjavík' : 'Address, Reykjavík'}</span>
      </footer>
    </div>
  );
}
