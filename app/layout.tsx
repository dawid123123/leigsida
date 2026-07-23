import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Providers from '../components/Providers';
import { site } from '../lib/site';

const display = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: {
    default: site.name + ' — vefsíður á Íslandi',
    template: '%s — ' + site.name,
  },
  description:
    'Vefsíða á áskrift frá 18.990 kr./mán. Við sjáum um síðuna. Þú þarft ekki að gera neitt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is" className={display.variable + ' ' + body.variable}>
      <body>
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
