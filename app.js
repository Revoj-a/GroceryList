const form = document.querySelector("#groceryList");
const product = document.querySelector("#product");
const quantity = document.querySelector("#qty");
const list = document.querySelector("#list");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const productName = product.value;
  const quantityProduct = quantity.value;
  const newLI = document.createElement("LI");
  newLI.innerText = `${quantityProduct} ${productName}`;
  console.log(newLI);
  list.append(newLI);
  product.value = "";
  quantity.value = "";
});
