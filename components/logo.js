/** Official mark: PNG only (no SVG, no inline reconstruction). */
export const LOGO_SRC = "assets/FBI.png";

export function logoMarkHeader() {
  return `<span class="logo-mark logo-mark--header"><img src="${LOGO_SRC}" alt="" decoding="async" fetchpriority="high" /></span>`;
}

export function logoMarkFooter() {
  return `<span class="logo-mark logo-mark--footer"><img src="${LOGO_SRC}" alt="" decoding="async" /></span>`;
}
