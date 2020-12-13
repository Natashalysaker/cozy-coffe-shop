//dette er samme side som favFunctions

export function getExistingCart() {
  const myCart = localStorage.getItem("cart");

  if (!myCart) {
    return [];
  }
  else{
    return JSON.parse(myCart);
  }
}
