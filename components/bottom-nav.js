const PRIMARY = [
  { href: "index.html", label: "Home" },
  { href: "products.html", label: "Products" },
  { href: "security.html", label: "Security" },
  { href: "about.html", label: "About" },
  { href: "cart.html", label: "Cart", badge: true }
];

export function renderBottomNav(cartCount) {
  const existing = document.querySelector("[data-site-bottom-nav]");
  if (existing) existing.remove();

  const current = window.location.pathname.split("/").pop() || "index.html";
  const nav = document.createElement("nav");
  nav.className = "site-bottom-nav";
  nav.setAttribute("aria-label", "Mobile primary navigation");
  nav.dataset.siteBottomNav = "";

  const primary = PRIMARY.map((item) => {
    const active = current === item.href ? "active" : "";
    const badge = item.badge ? `<span class="bottom-nav-badge" data-cart-count>${cartCount}</span>` : "";
    return `<a class="bottom-nav-link ${active}" href="${item.href}"><span class="bottom-nav-label">${item.label}</span>${badge}</a>`;
  }).join("");

  const journalActive = current === "journal.html" ? "active" : "";
  nav.innerHTML = `<div class="site-bottom-nav-primary">${primary}</div><a class="bottom-nav-journal ${journalActive}" href="journal.html">Journal</a>`;

  document.body.appendChild(nav);
}
