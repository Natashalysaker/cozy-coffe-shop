import { getUserName } from "../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const conteiner = document.querySelector(".menu-container");

  const username = getUserName();


  let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

  if(username) {
   authLink = ` <span> Hi ${username}</span>
   <a href="./add.html" class="${pathname === "./add.html" ? "active" : ""}">Add Product</a>
                <button class="logout">Logout ${username}</button>`;
  }

  conteiner.innerHTML = `${authLink}`;

  logoutButton();

}









