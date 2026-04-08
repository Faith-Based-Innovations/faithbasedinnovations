import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as site from "../src/data/site-config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const ROOT_PAGES = [
  "index.html",
  "products.html",
  "product-cfo.html",
  "product-eden.html",
  "product-ledger.html",
  "compare.html",
  "support.html",
  "about.html",
  "security.html",
  "privacy.html",
  "terms.html"
];

const distIndex = path.join(root, "dist", "index.html");
if (!fs.existsSync(distIndex)) {
  console.warn("stamp-root-html: dist/index.html missing; skip (run vite build first).");
  process.exit(0);
}

const sample = fs.readFileSync(distIndex, "utf8");
const cssM = sample.match(/href="\.\/assets\/([^"]+\.css)"/);
const jsM = sample.match(/src="\.\/assets\/([^"]+\.js)"/);
const logoFile = site.SITE.logoFile;
const imgExt = /\.(svg|png|jpe?g|webp|gif)$/i;
const assetSrcs = [...sample.matchAll(/src="(?:\.\/)?assets\/([^"]+)"/g)].map((m) => m[1]);
const logoFromDist = assetSrcs.find((ref) => imgExt.test(ref) && !ref.endsWith(".js"));
const logoSrc = logoFromDist
  ? `dist/assets/${logoFromDist}`
  : fs.existsSync(path.join(root, "dist", "assets", logoFile))
    ? `dist/assets/${logoFile}`
    : null;

if (!cssM || !jsM) {
  console.error("stamp-root-html: could not parse CSS/JS paths from dist/index.html");
  process.exit(1);
}

const cssHref = `dist/assets/${cssM[1]}`;
const jsSrc = `dist/assets/${jsM[1]}`;

for (const name of ROOT_PAGES) {
  const filePath = path.join(root, name);
  if (!fs.existsSync(filePath)) continue;

  let html = fs.readFileSync(filePath, "utf8");
  const hasDevEntry = html.includes('src="/src/main.js"');
  const hasStampedBundle =
    /src="dist\/assets\/chunks\/[^"]+\.js"/.test(html) || html.includes("dist/assets/main.css");

  if (!hasDevEntry && !hasStampedBundle) continue;

  if (hasDevEntry) {
    if (!html.includes(cssHref)) {
      html = html.replace("</head>", `  <link rel="stylesheet" href="${cssHref}" />\n</head>`);
    }
    html = html.replace(
      /\s*<script type="module" src="\/src\/main\.js"><\/script>\s*/,
      `\n  <script type="module" src="${jsSrc}"></script>\n`
    );
  } else {
    /* Prebuild stamp already ran; Vite may have emitted a new chunk name — refresh paths. */
    html = html.replace(
      /<link rel="stylesheet" href="dist\/assets\/[^"]+\.css" \/>/,
      `<link rel="stylesheet" href="${cssHref}" />`
    );
    html = html.replace(
      /<script type="module" src="dist\/assets\/chunks\/[^"]+\.js"><\/script>/,
      `<script type="module" src="${jsSrc}"></script>`
    );
  }

  if (logoSrc) {
    const esc = logoFile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp(`src="assets/${esc}"`, "g"), `src="${logoSrc}"`);
  }

  fs.writeFileSync(filePath, html, "utf8");
}

console.log("stamp-root-html: root HTML now references built assets in dist/ (file:// friendly).");
