
import {Builder, By} from "selenium-webdriver";
//import chrome from "selenium-webdriver/chrome";   

class base {
     constructor() {
         this.driver = new Builder().forBrowser("chrome").build();
         //this.registerlink = By.xpath("//a[@class='ico-register']");
         this.genderMale = By.id("gender-male");
         this.firstname = By.id("FirstName");
         this.lastname = By.id("LastName");
         this.Email = By.name("Email");
         this.password = By.id("Password");
         this.ConfirmPassword = By.id("ConfirmPassword");
         this.submitButtonLocator = By.id("register-button");
         this.registerlink = By.xpath("//a[@href='/register']");
         this.logout = By.xpath("//a[@class='ico-logout']");
     }  

     async openBrowser() {
          console.log("Opening the browser...");
           await this.driver.get("https://demowebshop.tricentis.com/register");
           await this.driver.manage().window().maximize();
     }



     async closeBrowser() {
          console.log("Closing the browser...");
               await this.driver.quit();
     }
}
export {base};
