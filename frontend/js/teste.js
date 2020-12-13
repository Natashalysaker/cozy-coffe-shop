import { baseUrl } from "./settings/api.js";

const url = baseUrl + "products";

const results = document.querySelector(".results");

async function getProducts (product) {
  const response = await fetch(url);
  const json = await response.json();

  results.innerHTML = "";

  json.forEach(function (product) {


    results.innerHTML += `<div class="products">
                            <div class="product-info">
                            <h5>${product.title}</h5>
                            <h5>${product.price}</h5>
                            <p> ${product.description}</p>
                            <button class="add">Add to cart</button>
                            <button class="gost-bnt">Read more</button>
                            </div>
                            <div class="img-product">
                            <img src="${product.image_url}" alt="product">
                            </div>
                            </div>`
  });

}

getProducts();
