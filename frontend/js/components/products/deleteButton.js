import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../utils/storage.js";


export default function deleteButton(id) {
  const container = document.querySelector(".delete-container");

  container.innerHTML = `<button type="button" class="delete">Delete</button>`;

  const button = document.querySelector("button.delete");

  button.onclick = async function () {
    console.log(id);

    const doDelete = confirm("Are you sure you want to delete this product?");
    console.log(doDelete);

    if (doDelete) {
        const url = baseUrl + "products/" + id;

        const token = getToken();

        const option = {
          metod: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          const response = await fetch(url, option);
          const json = await response.json();

          location.herf = "/";

          console.log(json);
        } catch (error) {
          console.log(error);
        }
    }
  };
}
