export default function (searchValue, products) {
  return products.filter(product => {
    const productTitle = prodcut.title;
    if (productTitle.toLowerCase().startsWith(searchValue)) return true;
  });
}
