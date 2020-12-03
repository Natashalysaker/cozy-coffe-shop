import { getUserName } from "../utils/storage.js";

export default function createMenu() {
  const { pathname } = document.location;

  const conteiner = document.querySelector(".menu-container");

  const username = getUserName();

  let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

  if(username) {
    authLink = `<a href="edit-products.html" class="${pathname === "/edit-products.html" ? "active" : ""}">Add Product</a>
    <span>Hi ${username}</span>`;
  }
  console.log(username);

  conteiner.innerHTML= `<div class="menu">
                        <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a>
                        ${authLink}</div>`;
}
