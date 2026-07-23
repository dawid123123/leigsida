export type TermId = 'askrift' | 'kaupa';
export type PackageId = 'stadall';

export const terms = [
  {
    id: 'askrift' as const,
    label: 'Áskrift',
    months: 1,
    bindMonths: 3,
    oneTime: false,
    note: 'Þú greiðir mánaðarlega. Binditími er 3 mánuðir.',
  },
  {
    id: 'kaupa' as const,
    label: 'Kaupa',
    months: 1,
    bindMonths: 0,
    oneTime: true,
    note: 'Þú greiðir einu sinni. Síðan verður þín.',
  },
];

/** Endurnýjun .is eftir fyrsta árið (kaup) — sanngjarnt fyrir báða aðila */
export const domainRenewalMonthly = 990;
export const domainRenewalYearly = domainRenewalMonthly * 12;

/** Ein þjónusta: síða + eigið .is */
export const packages = [
  {
    id: 'stadall' as const,
    name: 'Vefsíða',
    forWho: 'Fyrir fyrirtæki sem vilja síðu án rugls.',
    blurb: 'Falleg síða á þínu eigin .is. Við sjáum um allt.',
    buyBlurb: 'Þú eignast síðuna. Við setjum hana upp.',
    featured: true,
    includes: [
      'Við hönnum og birtum síðuna',
      'Þitt eigið .is — við tengjum það',
      'Við höldum henni úti og uppfærum',
      'Stuðningur þegar þú þarft',
    ],
    buyIncludes: [
      'Við hönnum og birtum síðuna',
      'Þitt eigið .is ókeypis fyrsta árið — síðan ' +
        domainRenewalMonthly.toLocaleString('is-IS') +
        ' kr./mán.',
      'Þú eignast síðuna',
      'Stutt aðstoð eftir birtingu',
    ],
    prices: { askrift: 18990, kaupa: 299990 },
  },
];

export function isk(n: number) {
  return n.toLocaleString('is-IS') + ' kr.';
}

export function termTotal(packId: PackageId, termId: TermId) {
  const p = packages.find((x) => x.id === packId)!;
  const t = terms.find((x) => x.id === termId)!;
  if (t.oneTime) return p.prices[termId];
  return p.prices[termId] * t.months;
}

export function lowestMonthly() {
  return packages[0].prices.askrift;
}

export function lowestBuy() {
  return packages[0].prices.kaupa;
}

export function mainPackage() {
  return packages[0];
}
