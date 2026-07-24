import '../globals.css';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Providers from '@/components/Providers';

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

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={display.variable + ' ' + body.variable}>
      <Providers>
        <Nav />
        <main>{children}</main>
        <Footer />
      </Providers>
    </div>
  );
}
