import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: site.name + ' — vefsíður á Íslandi',
    template: '%s — ' + site.name,
  },
  description:
    'Vefsíða á áskrift frá 18.990 kr./mán. Við sjáum um síðuna. Þú þarft ekki að gera neitt.',
};

/** Minimal root — chrome lives in (site); template embed has its own layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
