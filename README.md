# Faith Based Innovations — Site

Premium multi-page marketing site for **Faith Based Innovations, LLC** (CFO, Eden, Ledger).

## Develop

```bash
npm install
npm run dev
```

Edit **templates** and **`src/`**, then refresh. `npm run dev` renders EJS into **`generated/`** (gitignored), mirrors **`assets/`** there for `./assets/…` links, and starts Vite with **`generated/`** as the dev root.

There are **no** HTML files at the repo root—only **`templates/`** is the source of truth. After a build, open **`dist/index.html`** (or run `npm run open` on Windows).

## Production build

```bash
npm run build
```

Output: **`dist/`** (deploy this folder to static hosting, e.g. GitHub Pages).

Deploy **`dist/`** only. On Windows, `npm run open` builds and opens **`dist/index.html`**. If you add a Vite CSS/JS bundle to pages later, `postbuild` may stamp **`generated/*.html`** to reference `dist/assets/…` for `file://` use.

- Source HTML is generated from `templates/pages/*.ejs` via `scripts/render-pages.mjs`.
- Product and navigation copy live in `src/data/site-config.mjs` (shared with the client bundle).

## Structure

| Path | Role |
|------|------|
| `templates/` | EJS partials + pages (source of truth) |
| `generated/` | Render output + mirrored `assets/` for Vite dev/build (gitignored) |
| `src/` | CSS, JS, shared `site-config.mjs` |
| **`assets/`** | Static files (logos, images). Served at `/assets/…` in dev and copied into **`dist/assets/`** on build. No `public/` folder required. |
| `dist/` | Build output (gitignored) |

Optional hero image: put `hero-sphere.png` or `hero-sphere.webp` in `assets/` (same as the logo) to replace the CSS-only orb on the home page.
