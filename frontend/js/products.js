import { displayMessage } from "./components/displayMessage.js";
import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";
import { getExistingCart } from "./utils/addToCart.js"

createMenu();



const url = baseUrl + "products";

const results = document.querySelector(".wraper-products");

async function getProducts (product) {
  const response = await fetch(url);
  const json = await response.json();

  results.innerHTML = "";

  json.forEach(function (product) {


    results.innerHTML += `
                            <div class="products">
                            <div class="img-product">
                            <img src="${product.image_url}" alt="product">
                            </div>
                            <div class="product-info">
                            <h5>${product.title}</h5>
                            <p> ${product.description}</p>
                            <h5 class="price">Price ${product.price}</h5>
                            <div>
                            <button class="add" data-id="${product.id}" data-title="${product.title}" data-img_url="${product.image_url}"
                            data-description="${product.description}">Add to cart</button>
                            <a  class="gost-bnt" href="product-detail.html?id=${product.id}">Read more</a>
                            </div>
                            </div>
                            </div>
                           `;
  });

const cartButton = document.querySelectorAll(".products .add");

cartButton.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  //event.target.classList.toggle("add"); //npr du trkke på denne så forsvinner classen som er på.
  const id = this.dataset.id;
  const title = this.dataset.title;
  const description = this.dataset.description;
  const image_url = this.dataset.image_url;

  const currentCart = getExistingCart();

  const producstExists = currentCart.find(function(cart) {
    return cart.id === id;
  });

  if(!producstExists) {
    const product = {id: id, title: title, description: description, image_url: image_url}
    currentCart.push(product);
    saveCart(currentCart);
  }
  else {
    const newCart = currentCart.filter(cart => cart.id !== id);
    saveCart(newCart);
  }
}

function saveCart(myCart) {
  localStorage.setItem("cart", JSON.stringify(myCart));
};
}

getProducts();






