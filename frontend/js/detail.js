import { baseUrl } from "./settings/api.js";
import createMenu from "./components/createMenu.js";

createMenu();


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if(!id){
  document.location.href = "/";
}

const url =  baseUrl + "products/" + id;

console.log(url);

async function getProducts (product) {
  const response = await fetch(url);
  const details = await response.json();

  document.title = details.title;

  const container = document.querySelector(".details");

  container.innerHTML =  `<div class="details-img">
                          <img class="details-img" src="${details.image_url}" alt="">
                          </div>
                          <div class="details-info">
                          <h2 class="h5">${details.title}</h2>
                          <p class="description">${details.description}</p>
                          <h5 class="price">Price ${details.price} NOK </h5>
                          <div class="details-button">
                          <button class="add">Add to cart</button>
                          </div>
                          </div>
                          `;

  console.log(details);
};


getProducts();
