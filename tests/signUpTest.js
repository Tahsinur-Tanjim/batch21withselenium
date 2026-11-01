import {signUpPage} from "../pages/signuppage.js";

describe("allure report generation", function(){ 
    it("it should be the first test", async function() {

const result = new signUpPage();
     await result.openBrowser();
     await result.clickRegisterLink();
     await result.clickGender();
     await result.enterFirstName("Tanjim");
     await result.enterLastName("Rahman");
     await result.enterEmail("rahman1@example.com");
     await result.enterPassword("Password1234");
     await result.enterConfirmPassword("Password1234");
     await result.clickSubmitButton();
     //await result.clickLogout();
     await result.closeBrowser();
    });
});  