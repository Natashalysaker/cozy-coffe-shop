import { getHeroImg } from "./heroBanner.js";
import createMenu from "./components/createMenu.js";
import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";

getHeroImg();

createMenu();

 const productsUrl = baseUrl + "products";


(async function() {

const productsContainer = document.querySelector(".products-container");

try {
  const response = await fetch(productsUrl);
  const json = await response.json();

  productsContainer.innerHTML = "";

  json.forEach(function (product) {
    productsContainer.innerHTML += `<div class="products">
                                    <div class="product-info">
                                    <h5>${product.title}</h5>
                                    <h5>Price: ${product.price}</h5>
                                    <p>Description: ${product.description}</p>
                                    </div>
                                    <div class="img-product">
                                    <img src="${product.image_url}" alt="">
                                    </div>
                                    </div>`;

  });

} catch (error) {
  console.log(error);
  displayMessage("error", error, ".products-container");
}


})();

