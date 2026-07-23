import Link from 'next/link';
import { isk, lowestMonthly } from '../lib/pricing';
import { nav, site } from '../lib/site';

export default function Footer() {
  return (
    <footer className="gfoot">
      <div className="wrap gfoot-inner">
        <div className="gfoot-brand-col">
          <Link href="/" className="gfoot-brand">
            {site.name}
          </Link>
          <p className="gfoot-claim">
            Vefsíða á áskrift — frá {isk(lowestMonthly())}/mán.
          </p>
          <Link href="/byrja" className="btn btn-sm gfoot-cta">
            Byrja núna
          </Link>
        </div>

        <nav className="gfoot-nav" aria-label="Leiðir">
          <p className="gfoot-label">Leiðir</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="gfoot-contact">
          <p className="gfoot-label">Samband</p>
          <a href={'mailto:' + site.email}>{site.email}</a>
          <span>{site.place}</span>
        </div>
      </div>

      <div className="wrap gfoot-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Þú reksturinn. Við síðuna.</span>
      </div>
    </footer>
  );
}
