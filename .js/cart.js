import { PRODUCTS } from "./site-data.js";

function getCart() {
  const raw = localStorage.getItem("fbi_cart");
  if (!raw) return [];
  try { return JSON.parse(raw); } catch { return []; }
}

function setCart(items) { localStorage.setItem("fbi_cart", JSON.stringify(items)); }

function normalizedCart(items) {
  return items.filter((entry) => PRODUCTS[entry.id]?.purchasable);
}

function renderCartRows(container, items) {
  if (!container) return;
  if (!items.length) {
    container.innerHTML = '<p class="muted">Your cart is empty. Quietly efficient, but not very productive.</p>';
    return;
  }
  container.innerHTML = items.map((entry) => {
    const product = PRODUCTS[entry.id];
    if (!product) return "";
    return `<article class="card"><span class="status">${product.status}</span><h3>${product.name}</h3><p>${product.short}</p><p class="muted">${product.priceLabel}</p><div class="qty-row"><button class="btn" data-cart-dec="${entry.id}">-</button><p>Quantity: ${entry.qty}</p><button class="btn" data-cart-inc="${entry.id}">+</button></div></article>`;
  }).join("");
}

function renderPurchaseSummary(container, items) {
  if (!container) return;
  if (!items.length) {
    container.innerHTML = '<p class="muted">No items selected yet.</p>';
    return;
  }
  container.innerHTML = `<ul class="bullets">${items.map((item) => `<li>${PRODUCTS[item.id]?.name || item.id} x ${item.qty}</li>`).join("")}</ul><p class="muted">Payment integration is not live yet. This flow is checkout-intent ready and built for expansion.</p>`;
}

function wireQty(container) {
  if (!container) return;
  container.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const id = target.getAttribute("data-cart-inc") || target.getAttribute("data-cart-dec");
    if (!id) return;
    const items = normalizedCart(getCart());
    const row = items.find((entry) => entry.id === id);
    if (!row) return;
    if (target.hasAttribute("data-cart-inc")) row.qty += 1;
    if (target.hasAttribute("data-cart-dec")) row.qty -= 1;
    const next = items.filter((entry) => entry.qty > 0);
    setCart(next);
    renderCartRows(container, next);
    const checkoutSummary = document.querySelector("[data-purchase-summary]");
    renderPurchaseSummary(checkoutSummary, next);
  });
}

const cartContainer = document.querySelector("[data-cart-items]");
const summary = document.querySelector("[data-purchase-summary]");
const cartItems = normalizedCart(getCart());
setCart(cartItems);
renderCartRows(cartContainer, cartItems);
renderPurchaseSummary(summary, cartItems);
wireQty(cartContainer);
