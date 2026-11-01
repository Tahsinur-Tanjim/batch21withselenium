import {addToCart} from "../pages/addToCart.js";

const cart = new addToCart();
     await cart.openBrowser("https://demowebshop.tricentis.com/");
     await cart.selectFromTheMenu();
     await cart.addToTheCartProduct();
  