export type Lang = 'is' | 'en';

export const LANG_KEY = 'leigsida-lang';

export type Messages = {
  nav: { home: string; templates: string; pricing: string; about: string; contact: string };
  cta: {
    start: string;
    startNow: string;
    contact: string;
    seeDemo: string;
    seePricing: string;
    requestSite: string;
    chooseThis: string;
    openPreview: string;
    send: string;
    backPricing: string;
    allTemplates: string;
  };
  common: {
    menu: string;
    openMenu: string;
    closeMenu: string;
    paths: string;
    contact: string;
    iceland: string;
    perMonth: string;
    oneTime: string;
    from: string;
    comingSoon: string;
    all: string;
    reply: string;
    email: string;
    phone: string;
    replyTime: string;
    phoneNote: string;
    footerClaim: (price: string) => string;
    footerTag: string;
  };
  home: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    h1em: string;
    lede: string;
    synEyebrow: string;
    synTitle: string;
    synLede: string;
    priceEyebrow: string;
    priceTitle: string;
    rent: string;
    buy: string;
    includes: string[];
    processEyebrow: string;
    processTitle: string;
    steps: string[];
    endTitle: string;
    endLede: string;
  };
  heroVisual: {
    from: string;
    unit: string;
    chips: string[];
  };
  verd: {
    eyebrow: string;
    h1a: string;
    h1em: string;
    lede: string;
    getsTitle: string;
    getsLede: string;
    note: string;
    endTitle: string;
    endLede: string;
    rentSmall: string;
    buySmall: string;
  };
  about: {
    eyebrow: string;
    h1a: string;
    h1em: string;
    lede: string;
    metaSub: string;
    metaPlace: string;
    why: string;
    storyTitle: string;
    storyBody: string;
    howEyebrow: string;
    howTitle: string;
    pillars: { t: string; d: string }[];
    endTitle: string;
    endLede: string;
  };
  snidomot: {
    eyebrow: string;
    h1a: string;
    h1em: string;
    lede: string;
    liveCount: (n: number) => string;
    moreComing: string;
    bandTitle: string;
    bandLede: string;
    empty: string;
    viewSample: string;
    nichesLabel: string;
  };
  contact: {
    eyebrow: string;
    h1a: string;
    h1em: string;
    lede: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    done: string;
    subject: string;
  };
  byrja: {
    rent: string;
    buy: string;
    rentBlurb: string;
    buyBlurb: string;
    next: string;
    nextLede: string;
  };
  tpl: {
    note: string;
  };
  pricing: {
    includes: string[];
    buyIncludes: (renewal: string) => string[];
    askriftNote: string;
    kaupaNote: string;
  };
};

export const messages: Record<Lang, Messages> = {
  is: {
    nav: {
      home: 'Heim',
      templates: 'Sniðmát',
      pricing: 'Verð',
      about: 'Um okkur',
      contact: 'Samband',
    },
    cta: {
      start: 'Byrja',
      startNow: 'Byrja núna',
      contact: 'Hafa samband',
      seeDemo: 'Sjá sýn',
      seePricing: 'Sjá nánar um verð',
      requestSite: 'Óska eftir síðu',
      chooseThis: 'Velja þetta',
      openPreview: 'Opna sýn ↗',
      send: 'Senda',
      backPricing: '← Til baka á verð',
      allTemplates: '← Öll sniðmát',
    },
    common: {
      menu: 'Valmynd',
      openMenu: 'Opna valmynd',
      closeMenu: 'Loka valmynd',
      paths: 'Leiðir',
      contact: 'Samband',
      iceland: 'Ísland',
      perMonth: '/ mán.',
      oneTime: 'einskiptis',
      from: 'frá',
      comingSoon: 'Kemur bráðum',
      all: 'Öll',
      reply: 'Svörun',
      email: 'Netfang',
      phone: 'Sími',
      replyTime: 'Innan 1 virks dags',
      phoneNote: 'Í tölvupósti fyrst',
      footerClaim: (price) => `Vefsíða á áskrift — frá ${price}/mán.`,
      footerTag: 'Þú reksturinn. Við síðuna.',
    },
    home: {
      eyebrow: 'Vefsíða á áskrift',
      h1a: 'Þú sérð um',
      h1b: 'reksturinn.',
      h1em: 'Við sjáum um síðuna.',
      lede: 'Við hönnum, birtum og höldum úti. Þú þarft ekki að kunna neitt.',
      synEyebrow: 'Sýnishorn',
      synTitle: 'Raunveruleg síða.',
      synLede: 'Smelltu á grein þegar fleiri bætast við.',
      priceEyebrow: 'Verð',
      priceTitle: 'Einfalt.',
      rent: 'Leigja',
      buy: 'Kaupa',
      includes: [
        'Við sjáum um síðuna.',
        'Þú þarft ekki að gera neitt.',
        'Við uppfærum hana.',
        'Við höldum henni öruggri.',
        'Við tengjum .is-heitið.',
        'Við birtum síðuna.',
      ],
      processEyebrow: 'Ferlið',
      processTitle: 'Svona einfaldlega.',
      steps: [
        'Þú hefur samband.',
        'Við tölum saman.',
        'Við hönnum síðuna.',
        'Þú samþykkir.',
        'Við birtum síðuna.',
        'Við sjáum um hana áfram.',
      ],
      endTitle: 'Tilbúinn?',
      endLede: 'Segðu okkur hvað þú gerir. Við gerum restina.',
    },
    heroVisual: {
      from: 'Frá',
      unit: 'á mánuði · allt innifalið',
      chips: ['Hönnun', 'Birting', 'Umsjón', '.is'],
    },
    verd: {
      eyebrow: 'Verð',
      h1a: 'Ein þjónusta.',
      h1em: 'Tvær leiðir.',
      lede: 'Skýrt verð. Engin tækniorð. Þú veist alltaf hvað þú greiðir.',
      getsTitle: 'Þetta fylgir með',
      getsLede: 'Á áskrift. Allt sem þú þarft — ekkert sem þú þarft ekki.',
      note: '3 mánaða binditími. Greitt mánaðarlega.',
      endTitle: 'Tilbúinn?',
      endLede: 'Við staðfestum allt í pósti áður en vinna hefst.',
      rentSmall: 'Við sjáum um allt',
      buySmall: 'Þú eignast síðuna',
    },
    about: {
      eyebrow: 'Um Leigsíða',
      h1a: 'Þú reksturinn.',
      h1em: 'Við síðuna.',
      lede: 'Mánaðarleg áskrift. Engin forritun hjá þér. Engin tæknivinna — bara skýr síða sem vinnur fyrir þig.',
      metaSub: 'Áskrift frá 18.990 kr./mán.',
      metaPlace: 'Á Íslandi',
      why: 'Af hverju',
      storyTitle:
        'Flest fyrirtæki þurfa ekki flókið kerfi. Þau þurfa síðu sem lítur vel út og er alltaf í gangi.',
      storyBody:
        'Við hönnum, birtum og sjáum um. Þú greiðir mánaðarlega — eða kaupir síðuna út. Allt staðfest í pósti áður en vinna hefst.',
      howEyebrow: 'Svona vinnum við',
      howTitle: 'Þrjú skref. Ekkert rugl.',
      pillars: [
        {
          t: 'Hönnun',
          d: 'Útlit sem passar þinni grein — litir, texti og merki verða þín.',
        },
        {
          t: 'Birting',
          d: 'Við setjum síðuna upp, tengjum .is og birtum hana tilbúna.',
        },
        {
          t: 'Umsjón',
          d: 'Við höldum henni úti og uppfærum. Þú sérð um reksturinn.',
        },
      ],
      endTitle: 'Tilbúinn?',
      endLede: 'Segðu okkur hvað þú gerir. Við gerum restina.',
    },
    snidomot: {
      eyebrow: 'Sniðmát',
      h1a: 'Veldu þína',
      h1em: 'grein.',
      lede: 'Hér sérðu sýnishorn eftir tegund fyrirtækis. Við sérsníðum síðuna að þér — litir, texti og merki.',
      liveCount: (n) => `${n} live sýnishorn`,
      moreComing: 'Fleiri greinar á leiðinni',
      bandTitle: 'Finnurðu ekki þína grein?',
      bandLede: 'Við smíðum samt. Segðu okkur hvað þú gerir.',
      empty: 'Ekkert fannst í þessari grein.',
      viewSample: 'Skoða sýnishorn →',
      nichesLabel: 'Greinar',
    },
    contact: {
      eyebrow: 'Samband',
      h1a: 'Segðu okkur',
      h1em: 'frá þér.',
      lede: 'Stutt. Skýrt. Við svörum fljótt.',
      name: 'Nafn',
      email: 'Netfang',
      phone: 'Sími',
      company: 'Fyrirtæki',
      message: 'Segðu okkur frá verkefninu',
      done: 'Ef ekkert opnaðist — skrifaðu á',
      subject: 'Fyrirspurn',
    },
    byrja: {
      rent: 'Leiga',
      buy: 'Kaup',
      rentBlurb: 'Þú greiðir mánaðarlega. Við sjáum um allt.',
      buyBlurb: 'Þú greiðir einu sinni. Síðan verður þín.',
      next: 'Næsta skref',
      nextLede: 'Fylltu út — við svörum innan 1 virks dags.',
    },
    tpl: {
      note: 'Sýnishorn. Merki, litir og texti verða þín.',
    },
    pricing: {
      includes: [
        'Við hönnum og birtum síðuna',
        'Þitt eigið .is — við tengjum það',
        'Við höldum henni úti og uppfærum',
        'Stuðningur þegar þú þarft',
      ],
      buyIncludes: (renewal) => [
        'Við hönnum og birtum síðuna',
        `Þitt eigið .is ókeypis fyrsta árið — síðan ${renewal} kr./mán.`,
        'Þú eignast síðuna',
        'Stutt aðstoð eftir birtingu',
      ],
      askriftNote: 'Þú greiðir mánaðarlega. Binditími er 3 mánuðir.',
      kaupaNote: 'Þú greiðir einu sinni. Síðan verður þín.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      templates: 'Templates',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
    },
    cta: {
      start: 'Start',
      startNow: 'Start now',
      contact: 'Contact us',
      seeDemo: 'See demo',
      seePricing: 'See pricing',
      requestSite: 'Request a site',
      chooseThis: 'Choose this',
      openPreview: 'Open preview ↗',
      send: 'Send',
      backPricing: '← Back to pricing',
      allTemplates: '← All templates',
    },
    common: {
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      paths: 'Explore',
      contact: 'Contact',
      iceland: 'Iceland',
      perMonth: '/ mo.',
      oneTime: 'one-time',
      from: 'from',
      comingSoon: 'Coming soon',
      all: 'All',
      reply: 'Reply',
      email: 'Email',
      phone: 'Phone',
      replyTime: 'Within 1 business day',
      phoneNote: 'Email first',
      footerClaim: (price) => `Website subscription — from ${price}/mo.`,
      footerTag: 'You run the business. We run the site.',
    },
    home: {
      eyebrow: 'Website subscription',
      h1a: 'You run the',
      h1b: 'business.',
      h1em: 'We run the site.',
      lede: 'We design, publish, and maintain it. You don’t need to know tech.',
      synEyebrow: 'Preview',
      synTitle: 'A real site.',
      synLede: 'Tap a niche as more templates arrive.',
      priceEyebrow: 'Pricing',
      priceTitle: 'Simple.',
      rent: 'Subscribe',
      buy: 'Buy',
      includes: [
        'We take care of the site.',
        'You don’t have to do anything.',
        'We keep it updated.',
        'We keep it secure.',
        'We connect your .is domain.',
        'We publish the site.',
      ],
      processEyebrow: 'Process',
      processTitle: 'This simple.',
      steps: [
        'You get in touch.',
        'We talk it through.',
        'We design the site.',
        'You approve.',
        'We publish.',
        'We keep managing it.',
      ],
      endTitle: 'Ready?',
      endLede: 'Tell us what you do. We’ll handle the rest.',
    },
    heroVisual: {
      from: 'From',
      unit: 'per month · everything included',
      chips: ['Design', 'Publish', 'Care', '.is'],
    },
    verd: {
      eyebrow: 'Pricing',
      h1a: 'One service.',
      h1em: 'Two paths.',
      lede: 'Clear pricing. No jargon. You always know what you pay.',
      getsTitle: 'What’s included',
      getsLede: 'On subscription. Everything you need — nothing you don’t.',
      note: '3-month commitment. Billed monthly.',
      endTitle: 'Ready?',
      endLede: 'We confirm everything by email before work starts.',
      rentSmall: 'We handle everything',
      buySmall: 'You own the site',
    },
    about: {
      eyebrow: 'About Leigsíða',
      h1a: 'You the business.',
      h1em: 'We the site.',
      lede: 'Monthly subscription. No coding on your side. No tech work — just a clear site that works for you.',
      metaSub: 'Subscription from 18,990 kr./mo.',
      metaPlace: 'In Iceland',
      why: 'Why',
      storyTitle:
        'Most businesses don’t need a complex system. They need a site that looks good and stays online.',
      storyBody:
        'We design, publish, and maintain. You pay monthly — or buy the site. Everything is confirmed by email before work starts.',
      howEyebrow: 'How we work',
      howTitle: 'Three steps. No clutter.',
      pillars: [
        {
          t: 'Design',
          d: 'A look that fits your industry — colors, copy, and branding become yours.',
        },
        {
          t: 'Launch',
          d: 'We set up the site, connect .is, and publish it ready.',
        },
        {
          t: 'Care',
          d: 'We keep it live and updated. You focus on the business.',
        },
      ],
      endTitle: 'Ready?',
      endLede: 'Tell us what you do. We’ll handle the rest.',
    },
    snidomot: {
      eyebrow: 'Templates',
      h1a: 'Pick your',
      h1em: 'niche.',
      lede: 'Previews by business type. We customize the site for you — colors, copy, and branding.',
      liveCount: (n) => `${n} live preview${n === 1 ? '' : 's'}`,
      moreComing: 'More niches on the way',
      bandTitle: 'Don’t see your niche?',
      bandLede: 'We still build it. Tell us what you do.',
      empty: 'Nothing found in this niche.',
      viewSample: 'View preview →',
      nichesLabel: 'Niches',
    },
    contact: {
      eyebrow: 'Contact',
      h1a: 'Tell us',
      h1em: 'about you.',
      lede: 'Short. Clear. We reply fast.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      message: 'Tell us about the project',
      done: 'If nothing opened — write to',
      subject: 'Inquiry',
    },
    byrja: {
      rent: 'Subscribe',
      buy: 'Buy',
      rentBlurb: 'You pay monthly. We handle everything.',
      buyBlurb: 'You pay once. Then it’s yours.',
      next: 'Next step',
      nextLede: 'Fill this in — we reply within 1 business day.',
    },
    tpl: {
      note: 'Preview. Branding, colors, and copy become yours.',
    },
    pricing: {
      includes: [
        'We design and publish the site',
        'Your own .is — we connect it',
        'We maintain and update it',
        'Support when you need it',
      ],
      buyIncludes: (renewal) => [
        'We design and publish the site',
        `Your own .is free the first year — then ${renewal} kr./mo.`,
        'You own the site',
        'Short support after launch',
      ],
      askriftNote: 'You pay monthly. 3-month commitment.',
      kaupaNote: 'You pay once. Then it’s yours.',
    },
  },
};

/** Template copy by slug */
export const templateCopy: Record<
  string,
  { name: { is: string; en: string }; niche: { is: string; en: string }; line: { is: string; en: string }; about: { is: string; en: string } }
> = {
  'ks-protect': {
    name: { is: 'Bílavernd', en: 'Car protection' },
    niche: { is: 'Bílaþjónusta', en: 'Auto service' },
    line: {
      is: 'Fyrir bílaþjónustu — PPF, rúðufilmur og grafín.',
      en: 'For auto studios — PPF, window tint, and graphene.',
    },
    about: {
      is: 'Upphafspunktur fyrir bílaþjónustu: PPF, rúðufilmur og grafín. Sýnin sýnir útlit og uppbyggingu — merki, litir og texti verða þín.',
      en: 'A starting point for auto service: PPF, tint, and graphene. The preview shows layout and look — branding, colors, and copy become yours.',
    },
  },
  verktaki: {
    name: { is: 'Verktaki', en: 'Contractor' },
    niche: { is: 'Iðnaður', en: 'Trades' },
    line: {
      is: 'Iðnaðarmenn og verktakar — síða sem fær símtöl.',
      en: 'Trades and contractors — a site that gets calls.',
    },
    about: { is: '', en: '' },
  },
  ferdir: {
    name: { is: 'Ferðir', en: 'Tours' },
    niche: { is: 'Ferðaþjónusta', en: 'Tourism' },
    line: {
      is: 'Tours og leiðsögn — skýr kynning og bókanir.',
      en: 'Tours and guiding — clear intro and bookings.',
    },
    about: { is: '', en: '' },
  },
  netverslun: {
    name: { is: 'Netverslun', en: 'Webshop' },
    niche: { is: 'Netverslun', en: 'E-commerce' },
    line: {
      is: 'Einföld netverslun — vörur, körfu og greiðslu.',
      en: 'A simple shop — products, cart, and checkout.',
    },
    about: { is: '', en: '' },
  },
};
