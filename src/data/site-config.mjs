/** Single source of truth for nav + product metadata (EJS build + client bundle). */

export const SITE = {
  legalName: "Faith Based Innovations, LLC",
  brand: "Faith Based Innovations",
  abbrev: "FBI",
  tagline:
    "Three premium desktop apps—your data stays on your machine, with Steward as the built-in guide that follows clear rules.",
  logoFile: "FBI_Transparent.png",
  logoAlt: "Faith Based Innovations",
  suiteSectionTitle: "Three products, one ecosystem",
  /** Shared intelligence layer (not vague “AI”). */
  steward: {
    name: "Steward",
    short:
      "Steward is the shared guide inside our apps: it follows clear rules and your real data—not random chat-style answers. It helps organize what matters, explain tradeoffs, and keep results tied to what you actually entered.",
    homeBlurb:
      "CFO uses Steward for money sense, Eden for research sense, and Ledger for filling forms from your vault—same disciplined approach in each product."
  },
  hero: {
    titleLine: "Premium software, built deliberately.",
    titleAccent: "CFO, Eden, and Ledger—each its own product.",
    lead:
      "Faith Based Innovations is a multi-product company. CFO is the flagship financial operating system; Eden and Ledger are standalone titles with their own missions. All three are local-first, privacy-first, and powered by Steward."
  },
  /** Shown wherever purchase is implied; never a signup CTA. */
  availability: {
    badge: "Coming soon",
    line:
      "CFO, Eden, and Ledger are in active development—not for sale or download yet. We’re building toward a careful launch and will share more as each title is ready.",
    ctaLabel: "Stay tuned for release news"
  }
};

/** Primary chrome navigation (no pricing, no cart). */
export const NAV_PRIMARY = [
  { id: "home", href: "index.html", label: "Home" },
  { id: "products", href: "products.html", label: "Products" },
  { id: "compare", href: "compare.html", label: "Compare" }
];

export const NAV_PRODUCTS = [
  {
    id: "cfo",
    href: "product-cfo.html",
    label: "CFO",
    line: "Flagship financial operating system—budgeting, planning, forecasting, Steward-guided."
  },
  {
    id: "eden",
    href: "product-eden.html",
    label: "Eden",
    line: "Research ingestion, analysis, prioritization, and source evaluation—powered by Steward."
  },
  {
    id: "ledger",
    href: "product-ledger.html",
    label: "Ledger",
    line: "Encrypted identity vault and deterministic document execution—Steward assists mapping, never invents data."
  }
];

export const PRODUCTS = {
  cfo: {
    id: "cfo",
    name: "CFO",
    path: "product-cfo.html",
    tag: "Flagship · Finance",
    headline: "The financial operating system.",
    cardBlurb:
      "Your money hub on your computer: budgets, plans, forecasts, and cash-flow clarity—with Steward helping you read your own numbers using clear rules (not guesswork).",
    subhead:
      "CFO is a financial operating system you run on your machine, powered by Steward—not a thin budgeting app. It helps you interpret, plan, and decide from structured data and transparent rules.",
    purchasable: false
  },
  eden: {
    id: "eden",
    name: "Eden",
    path: "product-eden.html",
    tag: "Research",
    headline: "Research intelligence and prioritization.",
    cardBlurb:
      "Bring articles, video, notes, and recordings into one place, then sort what matters—with Steward ranking sources using your question and evidence (not hype).",
    subhead:
      "Eden is a standalone research workspace on your machine: gather sources, compare claims, and see citations—Steward helps prioritize what fits your question.",
    purchasable: false
  },
  ledger: {
    id: "ledger",
    name: "Ledger",
    path: "product-ledger.html",
    tag: "Identity & documents",
    headline: "Secure vault. Exact-fill documents.",
    cardBlurb:
      "Encrypted storage for sensitive info for up to two people, plus forms that fill only from what you saved—Steward helps match fields; it never invents answers.",
    subhead:
      "Ledger is an encrypted identity vault and document assistant on your machine—for example, spouses sharing a household file. Steward helps line up form fields with stored values; blanks stay blank if you didn’t supply data.",
    purchasable: false
  }
};
