// products page
import {baseUrl} from "./settings/api.js";
import {displayMessage} from "./components/displayMessage.js";
import {getToken} from "./utils/storage.js"
import createMenu from "./components/createMenu.js";

createMenu();

const form = document.querySelector(".edit-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const imageUrl = document.querySelector("#Image_url");
//const submit = document.querySelector("#submit");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);


function submitForm(event) {
  event.preventDefault();


  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const imageUrlValue = imageUrl.value.trim();

    console.log("priceValue", priceValue);

  if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageUrlValue.length === 0) {
   return displayMessage("warning", "please supply proper values", ".message-container");
  }

  addProducts(titleValue, priceValue, descriptionValue, imageUrlValue);// problemer

}

async function addProducts(title, price, description, imageUrl) {
  const productsUrl = baseUrl + "products";

      console.log(productsUrl);

  const data = JSON.stringify({ title: title, price: price, description: description, imageUrl: imageUrl});

  const token = getToken(); // problem her


  const options = {
    method:"POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
  };


  try {
    const response = await fetch(productsUrl, options); // Problemer
    const json = await response.json();
    console.log(json);

  if (json.created_at) {
    displayMessage("success", "Product created", ".message-container");
    form.reset();
  }
  if(json.error) {
    displayMessage("error", json.message, ".message-container");
  }
    console.log(json);
  } catch(error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");
  }
}
