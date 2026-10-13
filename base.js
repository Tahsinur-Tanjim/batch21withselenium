console.log("Hello World");
import {Builder, By} from "selenium-webdriver";

class Base {
     constructor() {
         this.driver = new Builder().forBrowser("chrome").build();
     }  
     async openBrowser() {
          console.log("Opening the browser...");
           await this.driver.get("https://www.npmjs.com/");
     }
     async closeBrowser() {
          console.log("Closing the browser...");
               await this.driver.quit();
     }
}
const result = new Base();
      result.openBrowser();
      result.closeBrowser();
