'use client';

import { useState } from 'react';
import { site } from '../lib/site';
import type { PackageId, TermId } from '../lib/pricing';

export default function ContactForm({
  pack = 'stadall',
  term = 'askrift',
}: {
  pack?: PackageId;
  term?: TermId;
}) {
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      'Nafn: ' + fd.get('name'),
      'Netfang: ' + fd.get('email'),
      'Sími: ' + fd.get('phone'),
      'Fyrirtæki: ' + fd.get('company'),
      'Pakki: ' + pack,
      'Leiga/kaup: ' + term,
      '',
      String(fd.get('message') || ''),
    ].join('\n');

    window.location.href =
      'mailto:' +
      site.email +
      '?subject=' +
      encodeURIComponent('Fyrirspurn — ' + (fd.get('name') || '')) +
      '&body=' +
      encodeURIComponent(lines);
    setDone(true);
  }

  return (
    <form className="cform" onSubmit={submit}>
      <label>
        <span>Nafn</span>
        <input name="name" required />
      </label>
      <label>
        <span>Netfang</span>
        <input name="email" type="email" required />
      </label>
      <label>
        <span>Sími</span>
        <input name="phone" />
      </label>
      <label>
        <span>Fyrirtæki</span>
        <input name="company" />
      </label>
      <label className="cform-full">
        <span>Segðu okkur frá verkefninu</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn cform-full">
        Senda
      </button>
      {done ? (
        <p className="cform-done cform-full">
          Ef ekkert opnaðist — skrifaðu á {site.email}
        </p>
      ) : null}
    </form>
  );
}
