 import { By } from "selenium-webdriver";
import {base} from "./base.js";    

class loginPage extends base {
     constructor() {
           super();
         //login page locators
         this.loginlink = By.xpath("//a[@href='/login']");
         this.emailField = By.id("Email");
         this.passwordField = By.id("Password");
         this.rememberMeCheckbox = By.id("RememberMe");
         this.loginButton = By.xpath("//input[@class='button-1 login-button']");
     } 

     //login page methods
     async clickLoginLink() {
          console.log("Clicking the login link...");
          await this.driver.findElement(this.loginlink).click();
     }

     async enterEmailField(email) {
          console.log("Entering the email in the login field...");
          await this.driver.findElement(this.emailField).sendKeys(email);
     }

     async enterPasswordField(password) {
          console.log("Entering the password in the login field...");
          await this.driver.findElement(this.passwordField).sendKeys(password);
     }

     async clickRememberMeCheckbox() {
          console.log("Clicking the 'Remember Me' checkbox...");
          await this.driver.findElement(this.rememberMeCheckbox).click();
     }

     async clickLoginButton() {
          console.log("Clicking the login button...");
          await this.driver.findElement(this.loginButton).click();
     }
}

export {loginPage};

