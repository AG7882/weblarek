import "./scss/styles.scss";

import { IProduct } from "./types/index";
import { Buyer } from "./components/Models/Buyer";
import { Cart } from "./components/Models/Cart";
import { Catalog } from "./components/Models/Catalog";
import { apiProducts } from "./utils/data";
import { ApiService } from "./components/api/ApiService";
import { Api } from "./components/base/Api";
import { API_URL } from "./utils/constants";

const products = new Catalog();
console.log("Пустой мсассив", products.getProducts());
products.setProducts(apiProducts.items);
console.log("Заполненный массив", products.getProducts());
console.log(
  "Поиск по id",
  products.getProductById("854cef69-976d-4c2a-a18c-2aa45046c390"),
);

const testProd = apiProducts.items[0];

console.log("Проверяем setSelectedProduct/getSelectedProduct()");
console.log("getSelectedProduct()", products.getSelectedProduct());

products.setSelectedProduct(testProd);

console.log("setSelectedProduct()");
console.log("getSelectedProduct()", products.getSelectedProduct());

const cart = new Cart();

console.log("cart addItem()");
cart.addItem(testProd);
console.log("cart getItems()", cart.getItems());
console.log("cart removeItem()");
cart.removeItem(testProd);
console.log("cart getItems()", cart.getItems());
console.log("cart addItem()");
cart.addItem(testProd);
console.log("cart getItems()", cart.getItems());
console.log("cart clearCart()");
cart.clearCart();
console.log("cart getItems()", cart.getItems());
console.log("cart addItem()");
cart.addItem(testProd);
console.log("cart getTotalPrice()", cart.getTotalPrice());
console.log("cart getCartCount()", cart.getCartCount());
console.log("cart hasItem()", cart.hasItem(testProd.id));

const john = new Buyer({
  payment: { method: "cash" },
  email: "1",
  phone: "1",
  address: "1",
});

console.log("Buyer getData()", john.getData());
console.log("Buyer clearData()");
john.clearData();
console.log("Buyer getData()", john.getData());
console.log("Buyer saveData()");
john.saveData({ method: "card" }, "2", "", "2");
console.log("Buyer getData()", john.getData());
console.log("Buyer validate()", john.validate());

const apiClient = new Api(API_URL);
const catalogService = new ApiService(apiClient);
const items = new Catalog();

catalogService.getProducts().then((data) => {
  items.setProducts(data.items);
  console.log('Каталог из API:', items.getProducts());
});

console.log("массив items", items.getProducts());
console.log("массив catalogService", catalogService.getProducts());

