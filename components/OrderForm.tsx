'use client';

import { useState } from 'react';
import { packages, terms, type PackageId, type TermId } from '../lib/pricing';
import { site } from '../lib/site';
import { publicTemplates } from '../lib/templates';

export default function OrderForm({
  template = '',
  pack = 'stadall',
  term = 'askrift',
}: {
  template?: string;
  pack?: PackageId;
  term?: TermId;
}) {
  const [done, setDone] = useState(false);
  const list = publicTemplates();
  const safePack = packages.some((p) => p.id === pack) ? pack : 'stadall';

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      'Nafn: ' + fd.get('name'),
      'Netfang: ' + fd.get('email'),
      'Sími: ' + fd.get('phone'),
      'Sniðmát: ' + fd.get('template'),
      'Pakki: ' + fd.get('package'),
      'Leiga/kaup: ' + fd.get('term'),
      'Grein: ' + fd.get('industry'),
      '',
      String(fd.get('message') || ''),
    ].join('\n');

    const mode = String(fd.get('term') || '');
    const subject =
      (mode === 'kaupa' ? 'Kaup á vefsíðu — ' : 'Vefsíðuleiga — ') +
      (fd.get('name') || '');

    window.location.href =
      'mailto:' +
      site.email +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(lines);
    setDone(true);
  }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: '0.9rem' }}>
      <input type="hidden" name="package" value={safePack} />
      <div style={{ display: 'grid', gap: '0.9rem' }} className="order-grid-2">
        <label>
          <span className="label">Nafn *</span>
          <input className="field" name="name" required />
        </label>
        <label>
          <span className="label">Netfang *</span>
          <input className="field" name="email" type="email" required />
        </label>
      </div>
      <label>
        <span className="label">Sími</span>
        <input className="field" name="phone" />
      </label>
      <div style={{ display: 'grid', gap: '0.9rem' }} className="order-grid-2">
        <label>
          <span className="label">Sniðmát</span>
          <select className="field" name="template" defaultValue={template}>
            <option value="">—</option>
            {list.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="label">Áskrift eða kaup *</span>
          <select className="field" name="term" defaultValue={term} required>
            {terms.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span className="label">Grein (t.d. bílaþjónusta, veitingastaður)</span>
        <input className="field" name="industry" />
      </label>
      <label>
        <span className="label">Skilaboð</span>
        <textarea className="field" name="message" rows={4} />
      </label>
      <button type="submit" className="btn">
        Senda
      </button>
      {done ? (
        <p style={{ color: 'var(--dim)', margin: 0 }}>
          Ef ekkert opnaðist — skrifaðu á {site.email}
        </p>
      ) : null}
    </form>
  );
}
