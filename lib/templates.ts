export type Template = {
  slug: string;
  name: string;
  line: string;
  about: string;
  niche: string;
  /** Optional photo; prefer TemplateThumb when empty */
  cover: string;
  /** Hero title lines shown in the mini preview (like the live demo) */
  headline?: [string, string, string];
  tone: 'dark' | 'light' | 'soon';
  demoHost: string;
  previewUrl: string;
  live: boolean;
  featured?: boolean;
};

/** Atmosphere for Leigsíða — websites / workspace, not client cars */
export const photos = {
  hero:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=75',
  desk:
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=75',
};

export const templates: Template[] = [
  {
    slug: 'ks-protect',
    name: 'Bílavernd',
    line: 'Fyrir bílaþjónustu — PPF, rúðufilmur og grafín.',
    about:
      'Upphafspunktur fyrir bílaþjónustu: PPF, rúðufilmur og grafín. Sýnin sýnir útlit og uppbyggingu — merki, litir og texti verða þín.',
    niche: 'Bílaþjónusta',
    headline: ['GLJÁI', 'OG', 'VERND'],
    // Same green AMG hero as the live demo
    cover:
      'https://images.pexels.com/photos/18354100/pexels-photo-18354100.jpeg?auto=compress&cs=tinysrgb&w=900',
    tone: 'dark',
    demoHost: 'synishorn · bilaverd · 1:1',
    previewUrl: '/synishorn/bilaverd',
    live: true,
    featured: true,
  },
  {
    slug: 'verktaki',
    name: 'Verktaki',
    line: 'Iðnaðarmenn og verktakar — síða sem fær símtöl.',
    about: '',
    niche: 'Iðnaður',
    cover: '',
    tone: 'soon',
    demoHost: 'synishorn',
    previewUrl: '',
    live: false,
  },
  {
    slug: 'ferdir',
    name: 'Ferðir',
    line: 'Tours og leiðsögn — skýr kynning og bókanir.',
    about: '',
    niche: 'Ferðaþjónusta',
    cover: '',
    tone: 'soon',
    demoHost: 'synishorn',
    previewUrl: '',
    live: false,
  },
  {
    slug: 'netverslun',
    name: 'Netverslun',
    line: 'Einföld netverslun — vörur, körfu og greiðslu.',
    about: '',
    niche: 'Netverslun',
    cover: '',
    tone: 'soon',
    demoHost: 'synishorn',
    previewUrl: '',
    live: false,
  },
];

export function publicTemplates() {
  return templates.filter((t) => t.live);
}

/** Live + upcoming — for home/work grids that preview the catalog */
export function catalogTemplates() {
  return templates;
}

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug && t.live);
}
