// products page
import {baseUrl} from "./settings/api.js";
import {displayMessage} from "./components/displayMessage.js";
import {getToken} from "./utils/storage.js"
import createMenu from "./components/createMenu.js";

createMenu();

const form = document.querySelector(".edit-form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
//const url = document.querySelector("#url");
//const submit = document.querySelector("#submit");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);


function submitForm(event) {
  event.preventDefault();


  message.innerHTML = "";

  const nameValue = name.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

    console.log("priceValue", priceValue);

  if(nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
   return displayMessage("warning", "please supply proper values", ".message-container");
  }

  addProducts(nameValue, priceValue, descriptionValue);

}

async function addProducts(name, price, description) {
  const productsUrl = baseUrl + "products";


  const data = JSON.stringify({ name: name, price: price, description: description});

  const token = getToken(); // problem her


  const options = {
    method:"POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
        Authorization: `Bearer${token}`
    },
  };


  try {
    const response = await fetch(productsUrl, options);
    const json = await response.json();
    console.log(json);

  if (json.created_at) {
    displayMessage("success", "Products created", ".message-container");
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
