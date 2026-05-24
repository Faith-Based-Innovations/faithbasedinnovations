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
    cinemaKicker: "How it works",
    cinemaHeadline: "How Steward Works Across Every App",
    cinemaLead:
      "Steward is not a separate super-app. It is the shared local guidance layer inside each product: trainable by the user, permission-aware by design, and tied to the data the user controls.",
    cinemaTagline: "Separate apps. One guidance layer. Your machine.",
    appDemo: {
      kicker: "How it works",
      headline: "How Steward Works Across Every App",
      lead:
        "Steward is shared local guidance inside each product: trainable by you, permission-aware by design, and tied to data you control on your machine.",
      permissions: {
        cfo: "Create follow-up reminder?",
        sentinel: "Export review packet?",
        eden: "Confirm topic clusters?",
        ledger: "Allow autofill from vault?"
      },
      toasts: [
        "Rule saved locally.",
        "Merchant preference remembered.",
        "Permission required."
      ],
      windowTitles: {
        cfo: "Faith Based Innovations — CFO",
        sentinel: "Faith Based Innovations — Sentinel",
        eden: "Faith Based Innovations — Eden",
        ledger: "Faith Based Innovations — Ledger"
      },
      crumbs: {
        cfo: "Transactions",
        sentinel: "Evidence workspace",
        eden: "Research library",
        ledger: "Form fill"
      }
    },
    movieProcessOrder: ["rules", "memory", "permissions", "knowledge", "vault", "tools", "audit"],
    cinemaWorkflows: [
      {
        id: "cfo",
        product: "CFO",
        tagline: "Finance command",
        request: "Track my missing Amazon refund.",
        processing: ["rules", "memory", "permissions", "knowledge", "vault", "tools", "audit"],
        responses: [
          "Refund candidate matched to purchase history",
          "Merchant pattern applied from your rules",
          "CFO dashboard alert ready for review",
          "No account action without your approval"
        ],
        routeNote: "Routes to CFO only. Finance data stays in CFO.",
        outcomeTitle: "Refund tracker",
        outcomeRows: [
          { label: "Merchant", value: "Amazon" },
          { label: "Amount", value: "$47.12" },
          { label: "Status", value: "Missing refund flagged" }
        ]
      },
      {
        id: "sentinel",
        product: "Sentinel",
        tagline: "Evidence workspace",
        request: "Organize evidence related to medical records.",
        processing: ["rules", "memory", "permissions", "knowledge", "vault", "tools", "audit"],
        responses: [
          "Evidence grouped by matter and record type",
          "Timeline assembled from dated items",
          "Case folders updated on your machine",
          "Exports wait for your review"
        ],
        routeNote: "Routes to Sentinel only. Case data stays in Sentinel.",
        outcomeTitle: "Evidence workspace",
        outcomeRows: [
          { label: "Matter", value: "Medical records bundle" },
          { label: "Items", value: "24 nodes linked" },
          { label: "Timeline", value: "12 dated events sorted" }
        ]
      },
      {
        id: "eden",
        product: "Eden",
        tagline: "Research workspace",
        request: "Organize this research into topics.",
        processing: ["rules", "memory", "permissions", "knowledge", "vault", "tools", "audit"],
        responses: [
          "Sources clustered by themes you approve",
          "Related notes linked in your graph",
          "Topics saved on device for review",
          "Suggestions stay suggestions until you confirm"
        ],
        routeNote: "Routes to Eden only. Research stays in Eden.",
        outcomeTitle: "Topic map",
        outcomeRows: [
          { label: "Cluster A", value: "Primary sources (8)" },
          { label: "Cluster B", value: "Supporting notes (5)" },
          { label: "Status", value: "Awaiting your confirmation" }
        ]
      },
      {
        id: "ledger",
        product: "Ledger",
        tagline: "Identity vault",
        request: "Fill this form using my saved information.",
        processing: ["rules", "memory", "permissions", "knowledge", "vault", "tools", "audit"],
        responses: [
          "Vault fields matched to form labels",
          "Profile template applied from saved data",
          "Autofill preview ready before paste",
          "Sensitive fields gated by permission"
        ],
        routeNote: "Routes to Ledger only. Vault data stays in Ledger.",
        outcomeTitle: "Form autofill preview",
        outcomeRows: [
          { label: "Name", value: "From vault profile" },
          { label: "Address", value: "Matched 4 of 4 fields" },
          { label: "SSN", value: "Permission required" }
        ]
      }
    ],

    flowAriaLabel:
      "Flow diagram: user request to Steward processing nodes, routes to CFO Sentinel Eden and Ledger, grounded in local vault rules memory and tools",
    exampleRequests: [
      "Track refunds from Amazon.",
      "How much pressure will next month have?",
      "Compile my case notes.",
      "Organize this research."
    ],
    processNodes: [
      { id: "rules", label: "Rules" },
      { id: "memory", label: "Memory" },
      { id: "permissions", label: "Permissions" },
      { id: "knowledge", label: "Knowledge" },
      { id: "vault", label: "Vault" },
      { id: "tools", label: "Tools" },
      { id: "audit", label: "Audit" },
      { id: "training", label: "User Training" }
    ],
    responseItems: [
      "Suggested actions tied to your records",
      "Permission prompts before sensitive steps",
      "Local indicators you can audit and reset"
    ],
    cinemaChips: [
      "user-trainable",
      "permission-aware",
      "rules-based",
      "local-first",
      "modular",
      "deterministic where needed"
    ],
    foundationPillars: [
      "Local rules",
      "Memory",
      "Knowledge",
      "Permissions",
      "Tools",
      "Audit",
      "User training"
    ],
    trainabilityKicker: "Trainability",
    trainabilityHeadline: "More useful as you teach it how you work",
    trainabilityLead:
      "Steward improves from categorization you approve, merchant patterns you define, workflows you edit, and conversations that stay on your machine. Not from opaque provider training.",
    trainabilityFeatures: [
      {
        title: "User-trainable",
        body: "Corrections, naming choices, and approved actions shape how Steward assists inside each product."
      },
      {
        title: "Locally adaptive",
        body: "Patterns and preferences accumulate in your environment, not in a shared remote model."
      },
      {
        title: "Rule-aware",
        body: "Editable rules gate what Steward may suggest, surface, or prepare before you confirm."
      },
      {
        title: "Memory-aware",
        body: "Remembers organization you chose. Memory can be reviewed and reset when you need a clean slate."
      },
      {
        title: "Merchant and category patterns",
        body: "Finance and operations workflows can reflect how you actually label and group activity."
      },
      {
        title: "Approved workflows",
        body: "Repeatable sequences you trust become part of how Steward routes work across apps."
      }
    ],
    trainabilityStatements: [
      "You teach Steward how you work.",
      "Training belongs to the user.",
      "Rules can be edited.",
      "Memory can be reset.",
      "Your workflows stay yours."
    ],
    compareKicker: "Design contrast",
    compareHeadline: "Cloud convenience is not the same as local control",
    compareLead:
      "A professional engineering comparison. Steward is built for operators who need explainable, resettable, permission-gated guidance on their own hardware.",
    compareCloud: {
      title: "Typical cloud assistant pattern",
      lead: "Useful for quick answers. Harder to own, audit, or bound to your records.",
      items: [
        "Opaque reasoning and vendor-controlled updates",
        "Provider-controlled infrastructure and retention",
        "Shared training signals across many tenants",
        "Unpredictable outputs on sensitive work",
        "Hard to reset behavior to a known baseline"
      ]
    },
    compareSteward: {
      title: "Steward on your machine",
      lead: "Modular guidance across separate apps, tied to data you entered and rules you set.",
      items: [
        "Local processing oriented to your structured records",
        "Modular surfaces per product with shared operational logic",
        "Resettable memory and editable rules",
        "User-owned training from corrections you approve",
        "Permission-gated actions with deterministic paths where needed",
        "Explainable suggestions you can review before acting"
      ]
    },
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
    tag: "Flagship Ã‚Â· Evidence intelligence",
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
    tag: "Flagship Ã‚Â· Finance",
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
