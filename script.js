// Query selectors
const cleanser = document.querySelector("#cleanser");
const balm = document.querySelector("#balm");
const mascara = document.querySelector("#mascara");
const cartList = document.querySelector(".products-in-cart");

// ensure the cart displays what's in local storage on load. 
const keys = Object.keys(localStorage);
keys.forEach((key) => {
  const item = JSON.parse(localStorage.getItem(key));
  cartList.innerHTML += `${item.quantity} ${key} @ $${item.price}.00`;
});

// Event listeners
cleanser.addEventListener("click", () => {
  cartList.innerHTML += `<p>1 cleanser @ $18.00</p>`;
});

balm.addEventListener("click", () => {
  cartList.innerHTML += "<p>1 balm @ $12.00</p>";
});

mascara.addEventListener("click", () => {
  cartList.innerHTML += "<p>1 mascara @ $16.00</p>";
});

