import products from "./data-base/products.json";
import createList from "./templates/products.hbs";
const html = createList(products);
console.log(html);