
import {Builder, By} from "selenium-webdriver";
//import chrome from "selenium-webdriver/chrome";  
import {base} from "./base.js";

class signUpPage extends base {
     constructor() {
         super();
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

     async clickRegisterLink() {
          console.log("Clicking the register link...");
          await this.driver.findElement(this.registerlink).click();
     }

     async clickSubmitButton() {
          console.log("Clicking the submit button...");
          await this.driver.findElement(this.submitButtonLocator).click();
     }

     async clickGender() {
          console.log("Clicking the gender radio button...");
          await this.driver.findElement(this.genderMale).click();
     }

     async enterFirstName(firstName) {
          console.log("Entering the first name...");
          await this.driver.findElement(this.firstname).sendKeys(firstName);
     }

     async enterLastName(lastName) {
          console.log("Entering the last name...");
          await this.driver.findElement(this.lastname).sendKeys(lastName);
     }

     async enterEmail(email) {
          console.log("Entering the email...");
          await this.driver.findElement(this.Email).sendKeys(email);
     }

     async enterPassword(password) {
          console.log("Entering the password...");
          await this.driver.findElement(this.password).sendKeys(password);
     }

     async enterConfirmPassword(confirmPassword) {
          console.log("Entering the confirm password...");
          await this.driver.findElement(this.ConfirmPassword).sendKeys(confirmPassword);
     }

     async clickLogout() {
          console.log("Clicking the logout link...");
          await this.driver.findElement(this.logout).click();
     }

}
export {signUpPage};
