/** Official mark: use bundled SVG asset (do not approximate in code). */
export const LOGO_SRC = "assets/FBI.svg";

export function logoMarkHeader() {
  return `<span class="logo-mark logo-mark--header"><img src="${LOGO_SRC}" alt="" decoding="async" /></span>`;
}

export function logoMarkFooter() {
  return `<span class="logo-mark logo-mark--footer"><img src="${LOGO_SRC}" alt="" decoding="async" /></span>`;
}
