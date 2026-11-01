import {loginPage} from "../pages/loginPage.js";

const result = new loginPage();
      await result.openBrowser();
     // await result.clickRegisterLink();
     // await result.clickGender();
     // await result.enterFirstName("Tanjim");
     // await result.enterLastName("Rahman");
     // await result.enterEmail("rahman1@example.com");
     // await result.enterPassword("Password1234");
     // await result.enterConfirmPassword("Password1234");
     // await result.clickSubmitButton();
     // await result.clickLogout();

//login page
     await result.clickLoginLink();
     await result.enterEmailField("rahman1@example.com");
     await result.enterPasswordField("Password1234");
     await result.clickRememberMeCheckbox();
     await result.clickLoginButton();

     //await result.closeBrowser();