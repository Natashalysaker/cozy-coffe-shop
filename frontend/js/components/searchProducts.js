import filterProducts from "../filterProducts.js"

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyuo = function (event) {
    const searchValue = event.target.trim().toLowerCase();
    const filterproducts = filterProducts(searchValue, products);
  }
}
