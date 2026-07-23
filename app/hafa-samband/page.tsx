import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';
import type { PackageId, TermId } from '../../lib/pricing';
import { site } from '../../lib/site';

export const metadata: Metadata = { title: 'Samband' };

type Props = {
  searchParams?: { package?: string; term?: string };
};

export default function ContactPage({ searchParams }: Props) {
  return (
    <div className="page">
      <header className="wrap page-hero">
        <p className="eyebrow">Samband</p>
        <h1 className="display">
          Segðu okkur
          <br />
          <em>frá þér.</em>
        </h1>
        <p className="lede">Stutt. Skýrt. Við svörum fljótt.</p>
      </header>

      <section className="wrap contact-grid">
        <ContactForm
          pack={(searchParams?.package as PackageId) || 'stadall'}
          term={(searchParams?.term as TermId) || 'askrift'}
        />
        <aside className="contact-aside">
          <div>
            <span>Svörun</span>
            <strong>Innan 1 virks dags</strong>
          </div>
          <div>
            <span>Netfang</span>
            <a href={'mailto:' + site.email}>{site.email}</a>
          </div>
          <div>
            <span>Sími</span>
            <strong>Í tölvupósti fyrst</strong>
          </div>
        </aside>
      </section>
    </div>
  );
}
