/** Greinar fyrir gagnvirka sýn — aðeins þær sem eru á forsíðu */

export type IndustryId =
  | 'auto'
  | 'restaurant'
  | 'salon'
  | 'lawyer'
  | 'hotel'
  | 'electrician';

export type Industry = {
  id: IndustryId;
  label: string;
  brand: string;
  domain: string;
  accent: string;
  paper: string;
  ink: string;
  muted: string;
  soft: string;
  hero: [string, string];
  sub: string;
  nav: [string, string, string, string];
  services: { title: string; line: string }[];
  galleryTone: [string, string, string];
  priceLine: string;
  cta: string;
  photo: string;
};

export const industries: Industry[] = [
  {
    id: 'auto',
    label: 'Bílaþjónusta',
    brand: 'Bílavernd',
    domain: 'bilavernd.is',
    accent: '#b8e04a',
    paper: '#0a0a0a',
    ink: '#f4f4f0',
    muted: 'rgba(244,244,240,0.55)',
    soft: 'rgba(244,244,240,0.08)',
    hero: ['GLJÁI', 'OG VERND'],
    sub: 'PPF · rúðufilmur · grafín',
    nav: ['Heim', 'Þjónusta', 'Verð', 'Samband'],
    services: [
      { title: 'PPF', line: 'Verndarfilma sem heldur bílnum nýjum.' },
      { title: 'Rúðufilmur', line: 'Þægindi og útlit.' },
      { title: 'Grafín', line: 'Djúpur gljái sem endist.' },
    ],
    galleryTone: ['#161616', '#b8e04a', '#222'],
    priceLine: 'Frá 89.000 kr.',
    cta: 'Fá tilboð',
    photo:
      'https://images.pexels.com/photos/18354100/pexels-photo-18354100.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'restaurant',
    label: 'Veitingastaður',
    brand: 'Elda',
    domain: 'elda.is',
    accent: '#e8a87c',
    paper: '#140f0c',
    ink: '#f7efe8',
    muted: 'rgba(247,239,232,0.55)',
    soft: 'rgba(247,239,232,0.08)',
    hero: ['BORÐ', 'Í KVÖLD'],
    sub: 'Matseðill · bókun · stemning',
    nav: ['Heim', 'Matseðill', 'Verð', 'Bóka'],
    services: [
      { title: 'Matseðill', line: 'Árstíðarbundnir réttir.' },
      { title: 'Bókun', line: 'Auðvelt að festa borð.' },
      { title: 'Viðburðir', line: 'Einkaaðstaða fyrir hópa.' },
    ],
    galleryTone: ['#2a1f1a', '#e8a87c', '#3a2a22'],
    priceLine: 'Kvöldmatur frá 7.900 kr.',
    cta: 'Bóka borð',
    photo:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'salon',
    label: 'Snyrtistofa',
    brand: 'Lína',
    domain: 'lina.is',
    accent: '#c97b84',
    paper: '#faf6f4',
    ink: '#2a1f22',
    muted: 'rgba(42,31,34,0.55)',
    soft: 'rgba(42,31,34,0.06)',
    hero: ['FEGURÐ', 'ÁN RUGLS'],
    sub: 'Klipping · litun · húð',
    nav: ['Heim', 'Þjónusta', 'Verð', 'Bóka'],
    services: [
      { title: 'Klipping', line: 'Sniðið að þér.' },
      { title: 'Litun', line: 'Náttúruleg niðurstaða.' },
      { title: 'Húð', line: 'Mýkt og gljái.' },
    ],
    galleryTone: ['#efe6e3', '#c97b84', '#f5eeeb'],
    priceLine: 'Klipping frá 8.900 kr.',
    cta: 'Bóka tíma',
    photo:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'lawyer',
    label: 'Lögfræðingur',
    brand: 'Réttur',
    domain: 'rettur.is',
    accent: '#3d8b96',
    paper: '#f4f1ec',
    ink: '#141412',
    muted: 'rgba(20,20,18,0.55)',
    soft: 'rgba(20,20,18,0.06)',
    hero: ['SKÝR', 'RÁÐGJÖF'],
    sub: 'Fyrirtæki · samningar · úrlausn',
    nav: ['Heim', 'Sérsvið', 'Fólk', 'Samband'],
    services: [
      { title: 'Fyrirtæki', line: 'Ráðgjöf sem skilar.' },
      { title: 'Samningar', line: 'Skýrir og traustir.' },
      { title: 'Deilur', line: 'Úrlausn án rugls.' },
    ],
    galleryTone: ['#e8e4dc', '#3d8b96', '#f0ece4'],
    priceLine: 'Fyrsta samtal án endurgjalds',
    cta: 'Hafa samband',
    photo:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hotel',
    label: 'Hótel',
    brand: 'Norðurljós',
    domain: 'nordurljos.is',
    accent: '#7eb8c0',
    paper: '#0c1518',
    ink: '#eef6f7',
    muted: 'rgba(238,246,247,0.55)',
    soft: 'rgba(238,246,247,0.08)',
    hero: ['DVÖL', 'Á ÍSLANDI'],
    sub: 'Herbergi · spa · kyrrð',
    nav: ['Heim', 'Herbergi', 'Upplifun', 'Bóka'],
    services: [
      { title: 'Herbergi', line: 'Útsýni og þægindi.' },
      { title: 'Spa', line: 'Hvíld eftir daginn.' },
      { title: 'Morgunmatur', line: 'Ferskt og einfalt.' },
    ],
    galleryTone: ['#132228', '#7eb8c0', '#1c3038'],
    priceLine: 'Frá 29.900 kr. / nótt',
    cta: 'Sjá herbergi',
    photo:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'electrician',
    label: 'Rafvirki',
    brand: 'Straumur',
    domain: 'straumur.is',
    accent: '#f0c040',
    paper: '#0d1216',
    ink: '#eef3f6',
    muted: 'rgba(238,243,246,0.55)',
    soft: 'rgba(238,243,246,0.08)',
    hero: ['ÖRUGGT', 'RAFMAGN'],
    sub: 'Heimili · fyrirtæki · útkall',
    nav: ['Heim', 'Þjónusta', 'Verð', 'Kalla'],
    services: [
      { title: 'Uppsetning', line: 'Nýtt og traust.' },
      { title: 'Viðgerðir', line: 'Fljótlegt svar.' },
      { title: 'Skoðun', line: 'Öryggi í fyrirrúmi.' },
    ],
    galleryTone: ['#1a2228', '#f0c040', '#243038'],
    priceLine: 'Útkall frá 18.900 kr.',
    cta: 'Fá tíma',
    photo:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a8099?auto=format&fit=crop&w=1200&q=80',
  },
];

export function getIndustry(id: IndustryId) {
  return industries.find((x) => x.id === id) || industries[0];
}
