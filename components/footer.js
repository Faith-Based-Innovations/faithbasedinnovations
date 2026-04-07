import { logoMarkFooter } from "./logo.js";

export function renderFooter() {
  const el = document.querySelector("[data-site-footer]");
  if (!el) return;
  const year = new Date().getFullYear();
  el.className = "site-footer";
  el.innerHTML = `<div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand brand--footer" href="index.html">
        ${logoMarkFooter()}
        <span>Faith Based Innovations, LLC</span>
      </a>
      <p>Premium desktop software. Local-first, privacy-first, built for long-term control.</p>
    </div>
    <div>
      <h3>Products</h3>
      <a href="product-cfo.html">CFO</a>
      <a href="product-ledger.html">Ledger</a>
      <a href="product-eden.html">Eden</a>
      <a href="products.html">All products</a>
    </div>
    <div>
      <h3>Company</h3>
      <a href="about.html">About</a>
      <a href="journal.html">Journal</a>
    </div>
    <div>
      <h3>Trust / Legal</h3>
      <a href="security.html">Security</a>
      <a href="privacy.html">Privacy</a>
      <a href="terms.html">Terms</a>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>Copyright ${year} Faith Based Innovations, LLC</span>
    <span>Pre-release site. Commerce flows are staged for a future public release.</span>
  </div>`;
}
