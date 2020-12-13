import { clearStorage } from "../utils/storage.js"

export default function logoutButton() {
  const logout = document.querySelector(".logout");

  if(logout) {
    logout.onclick = function () {
      const doLogout = confirm("You are about to log out, are you sure?");
      //hide module menu
      // refrech page



      if(doLogout) {
        clearStorage();
        localStorage.herf = "/index.html";
      }
    };
  }
}

