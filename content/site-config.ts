// ============================================================
// site-config.ts — single source of truth for all copy + brand
// Edit this file to re-theme or update copy. Data shape is kept
// admin-upgrade compatible.
// ============================================================
//
// Generation manifest (locked + rolled axes):
//   archetype: G              g_render_mode: scrub-cinematic   style: S17
//   color_variant: deep-navy  voice_family: V4 (Humane Professional)
//   typography: Outfit + Figtree
//   header_variant: custom-light (warm club bar)   footer_variant: FT5
//   card_variant: CV-warm-image   cta_variant: CTA1
//   hero_overlay: HO3         hero_text: H2        hero_entrance: E2
//   scene_variant: SC5        motion_variant: M3   loading_variant: L3
//   services_variant: SV3     showcase_variant: n/a   hero_composition: HC2
//   manifesto_variant: MV3    value_prop_variant: VV3  process_variant: PRV2
//   hero_treatment: scrubbed-frames   motion_vocabulary: frame-scrub
//   glass_material: frosted-hairline  background_treatment: layered-photography-parallax
//   card_material_variant: ken-burns-image   motion_bg_pattern: gradient-mesh-flow (subtle)
//   narrative_shape: place-portrait   camera_vocabulary: forward-dolly
//   composition_pattern: lower-third  subject_position: mid
//   lighting_temperature: studio-controlled   industry_video_tone: fallback-warm-slow
//   industry: fitness   bookingVariant: n/a (contact-form only)   cartVariant: n/a
//   auth_strategy: none   customer_management_enabled: false   subscribers_enabled: true
//   about_variant: AB2   contact_variant: CT3   work_variant: WK2   stats_variant: ST2

export const siteConfig = {
  company: {
    name: "Amsterdam Squash Club",
    tagline: "Where Amsterdam plays squash",
    description:
      "A modern squash club in the heart of Amsterdam — eight pro courts, friendly coaching, and a community that welcomes every level, from first-timer to county champion.",
    email: "hello@amsterdamsquashclub.nl",
    phone: "+31 20 123 4567",
    location: "Sportpark Zuid, Amsterdam",
  },

  brand: {
    primary: "#1F3252",
    accent: "#1F3252",
    bg: "#FAF6EE",
  },

  typography: {
    display: "Outfit",
    body: "Figtree",
    mono: "Figtree",
  },

  seo: {
    siteUrl: "https://amsterdamsquashclub.nl",
    locale: "en_NL",
    htmlLang: "en",
    defaultTitle: "Amsterdam Squash Club — Where Amsterdam plays squash",
    defaultDescription:
      "Eight pro courts, welcoming coaching, leagues and a junior academy in the heart of Amsterdam. Book a court or your first lesson today.",
    defaultOgImage: "",
    twitterHandle: "@amssquashclub",
    noindexPaths: ["/account", "/admin", "/auth", "/api"],
    googleSiteVerification: "",
    structuredData: {
      businessType: "SportsClub",
      address: {
        streetAddress: "Sportpark Zuid 12",
        addressLocality: "Amsterdam",
        addressRegion: "North Holland",
        postalCode: "1083 HJ",
        addressCountry: "NL",
      },
      hours: [
        { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "23:00" },
        { days: ["Saturday", "Sunday"], opens: "08:00", closes: "21:00" },
      ],
      priceRange: "€€",
      geo: { latitude: 52.3438, longitude: 4.8628 },
      rating: null,
      starRating: null,
      amenities: ["8 glass-back courts", "Pro shop", "Café & lounge", "Changing rooms", "Junior academy"],
      cuisine: [],
    },
  },

  socials: {
    instagram: "https://instagram.com/amsterdamsquashclub",
    twitter: "https://twitter.com/amssquashclub",
    facebook: "https://facebook.com/amsterdamsquashclub",
    linkedin: "",
    youtube: "",
    tiktok: "",
    whatsapp: "",
  },

  hero: {
    h1: [
      { text: "The court is", accent: false },
      { text: "always open", accent: true },
      { text: "for you", accent: false },
    ],
  },

  tagline: "Where Amsterdam plays squash",

  servicesHeading: "Everything the club offers",

  services: [
    {
      name: "Court Hire",
      slug: "court-hire",
      description:
        "Book one of our eight glass-back courts by the hour — peak or off-peak, members and guests welcome. Racquets and balls available at the desk if you travel light.",
      highlights: ["8 pro glass-back courts", "Online & desk booking", "Racquet hire on site", "Peak / off-peak rates"],
    },
    {
      name: "Coaching & Lessons",
      slug: "coaching",
      description:
        "One-to-one and small-group sessions with our PSA-qualified coaches. We start wherever you are and build a game you'll actually enjoy playing.",
      highlights: ["PSA-qualified coaches", "1:1 and small group", "Video analysis", "All levels welcome"],
    },
    {
      name: "Leagues & Ladders",
      slug: "leagues",
      description:
        "Internal box leagues and a rolling challenge ladder that match you with players of a similar standard. Competitive squash without the intimidation.",
      highlights: ["Monthly box leagues", "Rolling challenge ladder", "Friendly, fair matchmaking", "Seasonal finals night"],
    },
    {
      name: "Junior Academy",
      slug: "junior-academy",
      description:
        "Coaching pathways for ages 6–18, from first-swing fundamentals to county-level performance squads. Fun first, fundamentals always.",
      highlights: ["Ages 6–18", "Fundamentals to performance", "Holiday camps", "Safeguarded coaching"],
    },
    {
      name: "Squash Fitness",
      slug: "squash-fitness",
      description:
        "Conditioning classes built around the demands of the court — movement, footwork and stamina that show up the next time you step on.",
      highlights: ["Court-specific conditioning", "Movement & footwork", "Small-group classes", "Beginner to advanced"],
    },
    {
      name: "Membership",
      slug: "membership",
      description:
        "Flexible memberships with discounted court time, priority booking, league entry and a warm clubhouse to call home. Pay monthly, cancel anytime.",
      highlights: ["Discounted court time", "Priority booking", "Free league entry", "Pay monthly, cancel anytime"],
    },
  ] as Array<{ name: string; slug: string; description: string; highlights?: string[] }>,

  rooms: [] as Array<{
    slug: string; name: string; description: string; pricePerNight: number; currency: string;
    maxGuests: number; squareMeters?: number; image?: string; images?: string[]; amenities?: string[];
  }>,

  locations: [] as Array<{
    slug: string; name: string;
    address: { streetAddress: string; city: string; region?: string; postalCode?: string; country: string };
    phone?: string; email?: string; geo?: { latitude: number; longitude: number };
    hours?: Array<{ days: string[]; opens: string; closes: string }>; images?: string[]; description?: string;
  }>,

  gallery: [] as Array<{ src: string; alt: string; caption?: string; width?: number; height?: number }>,

  whyUs: {
    heading: "Why play here",
    items: [
      { title: "Eight courts, no waiting", description: "Glass-back show courts and a smart booking system mean a court when you want one — not whenever one frees up." },
      { title: "Coaches who get you playing", description: "PSA-qualified, genuinely friendly, and brilliant with beginners. We meet you at your level and take it from there." },
      { title: "A club, not just a gym", description: "A warm café, a real community, and leagues that make every game count. People stay because of the people." },
      { title: "In the heart of Amsterdam", description: "Easy to reach by bike, tram or car, with changing rooms and a pro shop so you can show up and just play." },
    ],
  },

  process: [
    { step: 1, title: "Get in touch", description: "Send us a message or drop by the desk. Tell us whether you're brand new to squash or coming back to it." },
    { step: 2, title: "Your first session", description: "Book a court or a taster lesson. Borrow a racquet, meet a coach, and hit some balls — no commitment needed." },
    { step: 3, title: "Find your level", description: "We point you toward the right league, class or coaching pathway so every game is a good game." },
    { step: 4, title: "Make it home", description: "Join as a member for discounted court time, priority booking and a clubhouse that's genuinely glad to see you." },
  ],

  aboutHeading: "A squash club built around its players",
  aboutStory:
    "Amsterdam Squash Club began with a simple idea: that the best squash clubs feel less like facilities and more like second homes. We restored eight glass-back courts at Sportpark Zuid, hired coaches who love teaching as much as winning, and built a community where a county champion and a complete beginner can share a court and a coffee afterwards. Today the club runs from early morning to late evening — leagues, lessons, junior squads and drop-in games — but the idea hasn't changed. Whoever you are, the court is always open for you.",
  manifesto: "Squash is a game of milliseconds and lifelong friendships. We look after both.",
  values: [
    { title: "Everyone on court", description: "Beginners, returners and champions share the same eight courts. No tiers, no attitude — just squash." },
    { title: "Coaching that cares", description: "We measure success by the players who keep coming back, not the trophies on the wall." },
    { title: "A real community", description: "Leagues, socials and a café that turns a quick game into a reason to stay." },
    { title: "Looked after", description: "Clean courts, working kit, fair prices and staff who know your name." },
  ],

  work: [] as Array<{ title: string; client: string; service: string; result: string }>,

  stats: [
    { value: "8", label: "Glass-back courts" },
    { value: "1,200+", label: "Active members" },
    { value: "16h", label: "Open every day" },
    { value: "40+", label: "Years of squash" },
  ],

  features: [
    { title: "Built for how you actually play.", description: "Smart booking, eight courts and coaches on hand — so the hardest part of your week is the third game, not finding one." },
    { title: "Smart court booking", description: "See live availability and reserve in seconds, online or at the desk." },
    { title: "Kit when you need it", description: "Racquet and ball hire at reception for guests and forgetful regulars alike." },
    { title: "Café & lounge", description: "Recover with a coffee and watch the show court from the gallery." },
  ],

  sectionThemeWord: "Play",

  narrative: [] as Array<{ speaker: string; text: string }>,

  mixedMedia: {
    skipSecondaryVideo: true,
    accentEyebrow: "On the court",
    accentLine: "Every level. Every day. One club.",
  },

  cta: {
    primary: "Book a court",
    secondary: "Explore the club",
  },

  ctaBlock: {
    heading: "Ready to play?",
    description: "Book a court, try a lesson, or just come and watch a game from the café. The first step onto the court is the only hard one.",
  },

  trustBar: ["8 glass-back courts", "PSA-qualified coaches", "All levels welcome", "Open 7 days"],

  scrollHero: {
    archetype: "G" as "A" | "B" | "C" | "D" | "E" | "F" | "G",
    styleId: "S17",
    assetMode: "live-generate" as "live-generate" | "prompt-only",
    imageUrl: "",
    frameCount: 192,
    scrollDistance: 6,
  },

  headerVariant: "custom-light" as const,

  footerVariant: "FT5" as const,

  motion: {
    scrollProgress: true,
    cursorFollower: false,
    intensity: "medium" as "low" | "medium" | "high",
  },
} as const;

export type SiteConfig = typeof siteConfig;
