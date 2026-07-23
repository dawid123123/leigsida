'use client';

import { useState } from 'react';
import { useLang } from '../lib/i18n/LanguageProvider';
import { site } from '../lib/site';
import type { PackageId, TermId } from '../lib/pricing';

export default function ContactForm({
  pack = 'stadall',
  term = 'askrift',
}: {
  pack?: PackageId;
  term?: TermId;
}) {
  const { t } = useLang();
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      t.contact.name + ': ' + fd.get('name'),
      t.contact.email + ': ' + fd.get('email'),
      t.contact.phone + ': ' + fd.get('phone'),
      t.contact.company + ': ' + fd.get('company'),
      'Package: ' + pack,
      'Term: ' + term,
      '',
      String(fd.get('message') || ''),
    ].join('\n');

    window.location.href =
      'mailto:' +
      site.email +
      '?subject=' +
      encodeURIComponent(t.contact.subject + ' — ' + (fd.get('name') || '')) +
      '&body=' +
      encodeURIComponent(lines);
    setDone(true);
  }

  return (
    <form className="cform" onSubmit={submit}>
      <label>
        <span>{t.contact.name}</span>
        <input name="name" required />
      </label>
      <label>
        <span>{t.contact.email}</span>
        <input name="email" type="email" required />
      </label>
      <label>
        <span>{t.contact.phone}</span>
        <input name="phone" />
      </label>
      <label>
        <span>{t.contact.company}</span>
        <input name="company" />
      </label>
      <label className="cform-full">
        <span>{t.contact.message}</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="btn cform-full">
        {t.cta.send}
      </button>
      {done ? (
        <p className="cform-done cform-full">
          {t.contact.done} {site.email}
        </p>
      ) : null}
    </form>
  );
}
