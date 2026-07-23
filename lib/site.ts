export const site = {
  name: 'Leigsíða',
  email: 'leigsida@leigsida.is',
  place: 'Ísland',
  tagline: 'Vefsíða á áskrift — við sjáum um allt.',
};

export const nav = [
  { href: '/', key: 'home' as const },
  { href: '/snidomot', key: 'templates' as const },
  { href: '/verd', key: 'pricing' as const },
  { href: '/um-mig', key: 'about' as const },
  { href: '/hafa-samband', key: 'contact' as const },
];
