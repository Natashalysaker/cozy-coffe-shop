import { baseUrl } from "./settings/api.js";
import {displayMessage} from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import {getToken} from "./utils/storage.js";
import deleteButton from "./components/products/deleteButton.js"

createMenu();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if(!id) {
  document.location.herf = "/";
}

const productUrl = baseUrl + "products/" + id;

console.log(productUrl);

const form = document.querySelector(".edit-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const image_url = document.querySelector("#image_url");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");


(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    console.log(productUrl);

    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    image_url.value = details.image_url;
    idInput.value = details.idInput;

    deleteButton(details.id);

    console.log(details.id);
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "noen";
    form.style.display = "block";
  }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = name.value.trim();
  const priceValue = parseFloat(price.value);
  const image_urlValue =  image_url.value.trim();
  const descriptionValue = description.value.trim();
  const idValue = idInput.value.trim();

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || image_urlValue.length === 0 || descriptionValue.length === 0) {
       return displayMessage("warning", "Please supply proper values", ".displayMessage");
  }

  updateProduct(titleValue, priceValue, image_urlValue, descriptionValue, idValue);
}

async function updateProduct(title, price, image_url, description, id) {
  const url = baseUrl + "products/" + id;
  const data = JSON.stringify({title: title, price: price, image_url: image_url,  description: description });

  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if(json.updated_at) {
      displayMessage("success", "Product is updated", ".displayMessage");
    }

    if (json.error) {
        displayMessage("error", json.message, ".displayMessage");
    }
  } catch (error) {
    console.log(error);
  }

}
