import '../../../../template-bilaverd/app/globals.css';
import { Inter } from 'next/font/google';
import PageBackground from '../../../../template-bilaverd/components/PageBackground';
import PageEffects from '../../../../template-bilaverd/components/PageEffects';
import Providers from '../../../../template-bilaverd/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sniðmát · PPF, Tint & Grafín',
  description:
    'Sýnishorn af sniðmáti — PPF, tint og grafín. Merki og texti verða sérsniðin.',
  robots: { index: false, follow: false },
};

/** Full 1:1 Bílavernd template embed (no Leigsíða chrome) */
export default function BilaverdEmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className + ' ks-v2 bilaverd-embed'}>
      <Providers>
        <PageBackground />
        <PageEffects />
        <div className="site-shell">{children}</div>
      </Providers>
    </div>
  );
}
