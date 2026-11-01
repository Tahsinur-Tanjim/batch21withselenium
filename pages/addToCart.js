
import {Builder, By} from "selenium-webdriver";
//import chrome from "selenium-webdriver/chrome";   
import {base} from "./base.js";    

class addToCart extends base {
     constructor() {
           super();
         //add to cart locators
         this.books = By.xpath("//a[@href='/books']");
         this.dropdown = By.id("product_attributes_1");
         this.shoppingCartLink = By.xpath("//a[@href='/cart']");
     } 

     async selectFromTheMenu() {
          console.log("Clicking the books link...");
          await this.driver.findElement(this.books).click();
          console.log("Selecting an option from the dropdown...");
          await this.driver.findElement(this.dropdown).sendKeys("Hardcover");
     }

     async addToTheCartProduct() {
          console.log("Clicking the books link...");
          await this.driver.findElement(this.dropdown).click();
          console.log("Selecting an option from the dropdown...");
          await this.driver.findElement(this.dropdown).sendKeys("Hardcover");
          console.log("Clicking the shopping cart link...");
          await this.driver.findElement(this.shoppingCartLink).click();
     }
}

export {addToCart};

