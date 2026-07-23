'use client';

import Link from 'next/link';
import { useLang } from '../lib/i18n/LanguageProvider';
import { isk, lowestMonthly } from '../lib/pricing';
import { nav, site } from '../lib/site';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="gfoot">
      <div className="wrap gfoot-inner">
        <div className="gfoot-brand-col">
          <Link href="/" className="gfoot-brand">
            {site.name}
          </Link>
          <p className="gfoot-claim">
            {t.common.footerClaim(isk(lowestMonthly()))}
          </p>
          <Link href="/byrja" className="btn btn-sm gfoot-cta">
            {t.cta.startNow}
          </Link>
        </div>

        <nav className="gfoot-nav" aria-label={t.common.paths}>
          <p className="gfoot-label">{t.common.paths}</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{t.nav[item.key]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="gfoot-contact">
          <p className="gfoot-label">{t.common.contact}</p>
          <a href={'mailto:' + site.email}>{site.email}</a>
          <span>{t.common.iceland}</span>
        </div>
      </div>

      <div className="wrap gfoot-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{t.common.footerTag}</span>
      </div>
    </footer>
  );
}
