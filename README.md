# Faith Based Innovations — Site

Premium multi-page marketing site for **Faith Based Innovations, LLC** (CFO, Eden, Ledger).

## Develop

```bash
npm install
npm run dev
```

Edit **templates** and **`src/`**, then refresh. `npm run dev` renders EJS into **`.vite-input/`** (gitignored), mirrors **`assets/`** there for `./assets/…` links, and starts Vite with **`.vite-input/`** as the dev root.

**`templates/`** is the source of truth for markup. After **`npm run build`**, the same page names are emitted as **`*.html` at the project root** next to **`assets/`**. On Windows, **`npm run open`** builds and opens **`index.html`**.

## Production build

```bash
npm run build
```

Output: **project root** — the `*.html` files plus **`assets/`** (deploy that layout to static hosting). The build does **not** use a `dist/` folder.

- Source HTML is generated from `templates/pages/*.ejs` via `scripts/render-pages.mjs`.
- Product and navigation copy live in `src/data/site-config.mjs` (shared with the client bundle).
- If you add a Vite CSS/JS bundle later, `postbuild` runs **`scripts/stamp-root-html.mjs`** so every root **`*.html`** references the built files under **`./assets/`** (including `file://` use).

## Structure

| Path | Role |
|------|------|
| `templates/` | EJS partials + pages (source of truth) |
| `.vite-input/` | Render output + mirrored `assets/` for Vite dev/build (gitignored) |
| `src/` | CSS, JS, shared `site-config.mjs` |
| **`assets/`** | Static files (logos, images). Served at `/assets/…` in dev; referenced as **`./assets/…`** from root HTML. No `public/` folder required. |
| Root `*.html` | Produced by **`npm run build`** (keep in sync with templates) |

Optional hero image: put `hero-sphere.png` or `hero-sphere.webp` in `assets/` (same as the logo) to replace the CSS-only orb on the home page.
