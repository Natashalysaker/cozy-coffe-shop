import createMenu from "./components/createMenu.js";
import { getExistingCart } from "./utils/addToCart.js"

createMenu();

const cartItem = getExistingCart();

const productsContainer = document.querySelector(".cart-result");


cartItem .forEach(product => {
  productsContainer.innerHTML +=`<div class="products">
                                <div class="img-product">
                                <img src="${product.image_url}" alt="product">
                                </div>
                                <div class="product-info">
                                <h5>${product.title}</h5>
                                <p> ${product.description}</p>
                                <h5 class="price">Price ${product.price}</h5>
                                <div>
                                <button class="add">Add to cart</button>
                                <button class="gost-bnt">Read more</button>
                                </div>
                                </div>
                                </div>`;
});




















/*const products = pushToCart();

const results = document.querySelector(".cart-result");


export function localCart() {
  if (products.length === 0) {
    results.innerHTML = "<h5> No products are added to cart yet </h5>";
  }

  products.forEach((product) => {
    results.innerHTML += `<div class="products-cart">
                          <h5>${product.title}</h5>
                          </div>`;

  });

}

localCart();


function clearbutton() {
  const clearBtn = document.querySelector(".clear");

  clearBtn.addEventListener("click", clearCart);
  function clearCart() {
    results.innerHTML = "The cart is empty";
    localStorage.clear();
    pushToCart();
  }
}

clearbutton();*/

