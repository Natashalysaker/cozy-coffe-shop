import { getUserName } from "../utils/storage.js";

export default function createMenu() {
  const { pathname } = document.location;

  const conteiner = document.querySelector(".menu-container");

  const username = getUserName();

  console.log(username);


  let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`;

  if(username) {
   authLink = `<span>Hello <span class="admin-name">${username}</span></span>`;
  }
  //console.log(username);

  conteiner.innerHTML= `${authLink}
                        <a class="logout">logout</a>`;
}









