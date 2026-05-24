/** Single source of truth for nav + product metadata (EJS build + client bundle). */

export const SITE = {
  legalName: "Faith Based Innovations",
  brand: "Faith Based Innovations",
  abbrev: "FBI",
  tagline:
    "Separate focused applications with a shared local, user-trainable guidance layer. CFO, Sentinel, Eden, and Ledger each stand on their own. Steward connects them through consistent, permission-aware workflows on your machine.",
  logoFile: "FBI_Transparent.png",
  logoAlt: "Faith Based Innovations",
  suiteSectionTitle: "Separate products. Shared principles.",
  architectureHeadline: "Separate applications. Shared intelligence.",
  architectureLead:
    "Faith Based Innovations builds focused local-first software products. CFO, Sentinel, Eden, and Ledger each stand on their own. Steward is the shared local, user-trainable guidance layer that gives them a consistent way to assist, organize, and act with user permission.",
  architecturePillars: [
    "Focused apps.",
    "User-trainable guidance.",
    "User-controlled workflows.",
    "Local-first by design."
  ],
  steward: {
    name: "Steward",
    short:
      "Steward is the shared local, user-trainable operational guidance layer across our products: rules-based, deterministic, and permission-aware. It learns from your corrections, preferences, and approved actions inside each app. Not a generic chatbot. Not a cloud-trained model. Not a merged super-app.",
    homeBlurb:
      "Steward is connective tissue, not a monolith. The same local, user-trainable guidance pattern runs inside Sentinel, CFO, Eden, and Ledger: organize what you entered, surface relationships, adapt to workflows you approve, and pause for permission before anything sensitive.",
    trainabilityLine:
      "Steward is designed to become more useful as the user teaches it how they work.",
    traits: [
      "User-trainable local guidance layer inside each product",
      "Learns from your corrections, preferences, and approved actions",
      "Remembers preferred organization patterns and user-defined rules",
      "Adapts to workflows you approve; training belongs to you",
      "Asks before sensitive actions; you control what it may do",
      "Improves within your local environment, not from shared cloud training"
    ]
  },
  hero: {
    titleLine: "Premium software, built deliberately.",
    titleAccent: "Separate products. Shared intelligence.",
    lead:
      "Faith Based Innovations builds separate focused applications, not one giant app. CFO, Sentinel, Eden, and Ledger each solve a distinct problem. Steward is the shared local, user-trainable guidance layer that gives them a consistent interaction model on your machine."
  },
  availability: {
    badge: "In development",
    line:
      "CFO, Eden, and Ledger are actively being built and are not for sale or download yet. Sentinel is in advanced internal alpha. We share more as each title reaches a careful launch."
  }
};

export const NAV_PRIMARY = [
  { id: "home", href: "index.html", label: "Home" },
  { id: "products", href: "products.html", label: "Products" },
  { id: "compare", href: "compare.html", label: "Compare" }
];

export const NAV_PRODUCTS = [
  {
    id: "sentinel",
    href: "product-sentinel.html",
    label: "Sentinel",
    line: "Evidence organization and case-preparation workspace for attorney-ready review. Designed with Steward-guided, locally trainable workflows."
  },
  {
    id: "cfo",
    href: "product-cfo.html",
    label: "CFO",
    line: "Focused financial command center and local-first personal finance system. Designed with Steward-guided, locally trainable workflows."
  },
  {
    id: "eden",
    href: "product-eden.html",
    label: "Eden",
    line: "Structured research and knowledge organization workspace. Designed with Steward-guided, locally trainable workflows."
  },
  {
    id: "ledger",
    href: "product-ledger.html",
    label: "Ledger",
    line: "Local identity, document, and reusable information vault. Designed with Steward-guided, locally trainable workflows."
  }
];

export const PRODUCTS = {
  sentinel: {
    id: "sentinel",
    name: "Sentinel",
    path: "product-sentinel.html",
    tag: "Flagship · Evidence intelligence",
    statusBadge: "Advanced internal alpha",
    headline: "Evidence organization for professional review.",
    cardBlurb:
      "Evidence organization and case-preparation workspace for attorney-ready review. Ingest, connect, and timeline complex material on your machine. Designed with Steward-guided, locally trainable workflows.",
    subhead:
      "Sentinel is a standalone evidence organization application for investigative and review workflows. Structure complex evidence, build chronologies, map relationships, and prepare professional review materials. Your data stays under your control. Designed with Steward-guided, locally trainable workflows.",
    development: {
      asOf: "May 19, 2026",
      stage: "Advanced internal alpha",
      summary:
        "As of May 19, 2026, Sentinel is in advanced internal alpha: core architecture, ingestion pipelines, organizational structures, and operational direction are actively being built and integrated, not concept or prototype."
    },
    purchasable: false
  },
  cfo: {
    id: "cfo",
    name: "CFO",
    path: "product-cfo.html",
    tag: "Flagship · Finance",
    statusBadge: null,
    headline: "Focused financial command center.",
    cardBlurb:
      "Focused financial command center and local-first personal finance system. Budgets, plans, forecasts, and cash-flow clarity from your records. Designed with Steward-guided, locally trainable workflows.",
    subhead:
      "CFO is a standalone local-first personal finance application: your financial command center on your machine. Interpret, plan, and decide from structured data and transparent rules. Designed with Steward-guided, locally trainable workflows.",
    purchasable: false
  },
  eden: {
    id: "eden",
    name: "Eden",
    path: "product-eden.html",
    tag: "Research",
    statusBadge: null,
    headline: "Structured research workspace.",
    cardBlurb:
      "Structured research and knowledge organization workspace. Gather sources, compare claims, and see citations on your machine. Designed with Steward-guided, locally trainable workflows.",
    subhead:
      "Eden is a standalone research workspace: structured research and knowledge organization on your machine. Gather sources, compare claims, and prioritize what fits your question. Designed with Steward-guided, locally trainable workflows.",
    purchasable: false
  },
  ledger: {
    id: "ledger",
    name: "Ledger",
    path: "product-ledger.html",
    tag: "Identity & documents",
    statusBadge: null,
    headline: "Local identity and document vault.",
    cardBlurb:
      "Local identity, document, and reusable information vault. Encrypted storage and exact-fill forms from what you saved. Designed with Steward-guided, locally trainable workflows.",
    subhead:
      "Ledger is a standalone vault application for identity, documents, and reusable information on your machine. Steward helps match fields to stored values; blanks stay blank if you did not supply data. Designed with Steward-guided, locally trainable workflows.",
    purchasable: false
  }
};
