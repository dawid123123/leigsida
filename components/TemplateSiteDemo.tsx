'use client';

import { useLang } from '../lib/i18n/LanguageProvider';
import type { Template } from '../lib/templates';

const navIs = ['Heim', 'Grafín', 'PPF', 'Tint', 'Netverslun', 'Um okkur'];
const navEn = ['Home', 'Graphene', 'PPF', 'Tint', 'Shop', 'About'];

const servicesIs = [
  { t: 'Grafín', d: 'Lakkvörn sem gefur djúpan gljáa' },
  { t: 'PPF', d: 'Lakkvarnarfilmur á útsett svæði' },
  { t: 'Tint', d: 'Rúðufilmur — þægindi og útlit' },
];
const servicesEn = [
  { t: 'Graphene', d: 'Coating with deep gloss' },
  { t: 'PPF', d: 'Paint protection film' },
  { t: 'Tint', d: 'Window film — comfort and look' },
];

const quickIs = ['PPF stillari', 'Tint stillari', 'Netverslun', 'Fá tilboð'];
const quickEn = ['PPF config', 'Tint config', 'Shop', 'Get quote'];

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
  const services = is ? servicesIs : servicesEn;
  const quick = is ? quickIs : quickEn;
  const image =
    cover ||
    template.cover ||
    'https://images.pexels.com/photos/18354100/pexels-photo-18354100.jpeg?auto=compress&cs=tinysrgb&w=1200';
  const [a, b, c] = template.headline || ['GLJÁI', 'OG', 'VERND'];

  return (
    <div className="tpl-demo" aria-hidden={false}>
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

      <div className="tpl-demo-scroll">
        <section className="tpl-demo-hero">
          <div className="tpl-demo-copy">
            <p className="tpl-demo-kicker">
              <span className="tpl-demo-kicker-dot" />
              {is ? 'Sniðmát · demo' : 'Template · demo'}
            </p>
            <h2>
              <span>{a}</span>
              <span className="accent">{b}</span>
              <span>{c}</span>
            </h2>
            <p>
              {is
                ? 'PPF lakkvarnarfilmur og grafínlakkvörn — fagleg uppsetning. Merki, litir og texti verða þín.'
                : 'PPF paint protection and graphene coating — professional install. Branding, colors, and copy become yours.'}
            </p>
            <div className="tpl-demo-cta">
              <button type="button">{is ? 'Fá ókeypis tilboð' : 'Get a free offer'}</button>
              <button type="button" className="ghost">
                {is ? 'Skoða þjónustu' : 'View services'} ↗
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
            <div className="tpl-demo-quick">
              {quick.map((q) => (
                <span key={q}>{q}</span>
              ))}
            </div>
          </div>
          <div className="tpl-demo-photo">
            <img src={image} alt="" />
            <span className="tpl-demo-badge">
              <b>12</b>
              {is ? 'ára ábyrgð' : 'yr warranty'}
            </span>
          </div>
        </section>

        <section className="tpl-demo-services">
          {services.map((s) => (
            <article key={s.t}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </section>

        <section className="tpl-demo-strip">
          <div>
            <p className="tpl-demo-kicker">{is ? 'Hafðu samband' : 'Get in touch'}</p>
            <strong>{is ? 'Bókaðu tíma — textinn verður þinn.' : 'Book a slot — copy becomes yours.'}</strong>
          </div>
          <div className="tpl-demo-strip-meta">
            <span>netfang@fyrirtaeki.is</span>
            <span>000 0000</span>
            <span>{is ? 'Heimilisfang, Reykjavík' : 'Address, Reykjavík'}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
