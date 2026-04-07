import { PRODUCTS } from "./site-data.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";

function cartCount() {
  const raw = localStorage.getItem("fbi_cart");
  if (!raw) return 0;
  try {
    const items = JSON.parse(raw);
    return items.reduce((sum, item) => sum + item.qty, 0);
  } catch {
    return 0;
  }
}


function wireMobileNav() {
  const button = document.querySelector("[data-mobile-toggle]");
  const panel = document.querySelector("[data-mobile-panel]");
  if (!button || !panel) return;
  button.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
}

function wireAddToCart() {
  document.querySelectorAll("[data-product-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-product-action");
      const product = PRODUCTS[id];
      if (!product) return;

      if (!product.purchasable) {
        btn.textContent = product.status === "Join waitlist" ? "Waitlist Open" : "Coming Soon";
        setTimeout(() => (btn.textContent = product.actionLabel), 1100);
        return;
      }

      const raw = localStorage.getItem("fbi_cart");
      const list = raw ? JSON.parse(raw) : [];
      const existing = list.find((item) => item.id === id);
      if (existing) existing.qty += 1;
      else list.push({ id, qty: 1 });
      localStorage.setItem("fbi_cart", JSON.stringify(list));
      document.querySelectorAll("[data-cart-count]").forEach((slot) => (slot.textContent = String(cartCount())));
      btn.textContent = "Added";
      setTimeout(() => (btn.textContent = product.actionLabel), 900);
    });
  });
}

renderHeader(cartCount());
renderFooter();
wireMobileNav();
wireAddToCart();
