/** Single source of truth for nav + product metadata (EJS build + client bundle). */

export const SITE = {
  legalName: "Faith Based Innovations",
  brand: "Faith Based Innovations",
  abbrev: "FBI",
  tagline:
    "Premium local-first desktop software: CFO, Sentinel, Eden, and Ledger, with Steward as the shared workflow layer on your machine.",
  logoFile: "FBI_Transparent.png",
  logoAlt: "Faith Based Innovations",
  suiteSectionTitle: "Four products, one ecosystem",
  steward: {
    name: "Steward",
    short:
      "Steward is the shared local assistant across our apps: clear rules and your data, not open-ended generation. It helps organize, surface relationships, and keep outputs tied to what you actually entered.",
    homeBlurb:
      "Sentinel uses Steward for evidence workflows, CFO for finance, Eden for research, and Ledger for identity documents. The same disciplined local layer in each product."
  },
  hero: {
    titleLine: "Premium software, built deliberately.",
    titleAccent: "CFO, Sentinel, Eden, and Ledger. Each its own product.",
    lead:
      "Faith Based Innovations builds standalone desktop titles. CFO is the financial operating system; Sentinel is evidence intelligence for investigative and review workflows; Eden and Ledger serve research and identity. All are local-first, privacy-first, and powered by Steward."
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
    line: "Local-first evidence intelligence: ingest, organize, timeline, and export for professional review workflows."
  },
  {
    id: "cfo",
    href: "product-cfo.html",
    label: "CFO",
    line: "Flagship financial operating system: budgeting, planning, forecasting, Steward-guided."
  },
  {
    id: "eden",
    href: "product-eden.html",
    label: "Eden",
    line: "Research ingestion, analysis, prioritization, and source evaluation, powered by Steward."
  },
  {
    id: "ledger",
    href: "product-ledger.html",
    label: "Ledger",
    line: "Encrypted identity vault and deterministic document execution. Steward assists mapping, never invents data."
  }
];

export const PRODUCTS = {
  sentinel: {
    id: "sentinel",
    name: "Sentinel",
    path: "product-sentinel.html",
    tag: "Flagship · Evidence intelligence",
    statusBadge: "Advanced internal alpha",
    headline: "Local-first evidence intelligence.",
    cardBlurb:
      "Ingest, organize, connect, and review large evidence collections on your machine. Timelines, relationships, and structured exports built for investigative and professional review workflows.",
    subhead:
      "Sentinel is a local-first evidence intelligence and investigative organization platform. It helps you structure complex evidence, build chronologies, map relationships, and prepare professional review materials. Your data stays under your control.",
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
    headline: "The financial operating system.",
    cardBlurb:
      "Your money hub on your computer: budgets, plans, forecasts, and cash-flow clarity, with Steward helping you read your own numbers using clear rules (not guesswork).",
    subhead:
      "CFO is a financial operating system you run on your machine, powered by Steward, not a thin budgeting app. It helps you interpret, plan, and decide from structured data and transparent rules.",
    purchasable: false
  },
  eden: {
    id: "eden",
    name: "Eden",
    path: "product-eden.html",
    tag: "Research",
    statusBadge: null,
    headline: "Research intelligence and prioritization.",
    cardBlurb:
      "Bring articles, video, notes, and recordings into one place, then sort what matters. Steward ranks sources using your question and evidence (not hype).",
    subhead:
      "Eden is a standalone research workspace on your machine: gather sources, compare claims, and see citations. Steward helps prioritize what fits your question.",
    purchasable: false
  },
  ledger: {
    id: "ledger",
    name: "Ledger",
    path: "product-ledger.html",
    tag: "Identity & documents",
    statusBadge: null,
    headline: "Secure vault. Exact-fill documents.",
    cardBlurb:
      "Encrypted storage for sensitive info for up to two people, plus forms that fill only from what you saved. Steward helps match fields; it never invents answers.",
    subhead:
      "Ledger is an encrypted identity vault and document assistant on your machine, for example spouses sharing a household file. Steward helps line up form fields with stored values; blanks stay blank if you did not supply data.",
    purchasable: false
  }
};
