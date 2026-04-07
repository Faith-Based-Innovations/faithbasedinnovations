import { logoMarkHeader } from "./logo.js";

const DESKTOP_NAV = [
  { href: "products.html", label: "Products" },
  { href: "security.html", label: "Security" },
  { href: "privacy.html", label: "Privacy" },
  { href: "about.html", label: "About" },
  { href: "journal.html", label: "Journal" },
  { href: "cart.html", label: "Cart", countKey: true }
];

function desktopNavHtml(current) {
  return DESKTOP_NAV.map((item) => {
    const active = current === item.href ? "active" : "";
    const count = item.countKey ? `<span class="nav-cart-count" data-cart-count>0</span>` : "";
    return `<a class="nav-link ${active}" href="${item.href}">${item.label}${count}</a>`;
  }).join("");
}

export function renderHeader(cartCount) {
  const el = document.querySelector("[data-site-header]");
  if (!el) return;
  const current = window.location.pathname.split("/").pop() || "index.html";
  el.className = "site-header";
  el.innerHTML = `<div class="container header-inner">
    <a class="brand" href="index.html" aria-label="Faith Based Innovations, LLC home">
      ${logoMarkHeader()}
      <span class="brand-text"><span class="brand-text-full">Faith Based Innovations, LLC</span><span class="brand-text-short">FBI, LLC</span></span>
    </a>
    <nav class="desktop-nav" aria-label="Primary">${desktopNavHtml(current)}</nav>
    <div class="header-utils">
      <a href="products.html" class="btn btn-primary cta">Explore products</a>
    </div>
  </div>`;
  el.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(cartCount);
  });
}
