import { loginPage } from "../../pages/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { assertUtils } from "../utils/commonUtils";


//precondition: user is in login page
Given("I open the login page", () => {
    cy.visit("/");
    
});


// cases for valid login
When("i login with valid username and valid password", () => {
  
    cy.login(Cypress.env("validUsername"), Cypress.env("validPassword"));
  
})

//case for invalid username and invalid password

When("i login with invalid username and invalid password", () => {
  loginPage.login("invalid_user", "wrong_password");
});



//case for valid username and invalid password
When("i login with valid username and invalid password", () => {
    loginPage.login(Cypress.env("validUsername"), "wrong_password");
})


//case for invalid username and valid password
When("i login with invalid username and valid password", () => {
    loginPage.login("standard_user1", Cypress.env("validPassword"));
})

//case for invalid username and empty password
When("i login with valid username and empty password", () => {
    loginPage.typeUsername(Cypress.env("validUsername"));
    loginPage.clickLoginButton();
})

//case for empty username and valid password
When("i login with empty username and valid password", () => {
    loginPage.typePassword(Cypress.env("validPassword"));
    loginPage.clickLoginButton();
   

})

//case for empty username and empty password
When("i login with empty username and empty password", () => {
    loginPage.clickLoginButton();
});

When("i login with locked_out_user", () => {
    loginPage.login("locked_out_user", Cypress.env("validPassword"));
});

//assertion for inventory list visibility after successful login
Then("the inventory list should be displayed", () => {
  assertUtils.assertVisibleElement("#inventory_container")
});

//assertion for successful login and redirection to inventory page
Then("i should be on the inventory page", () => {
  assertUtils.assertUrlContains("/inventory.html");
  assertUtils.assertVisibleText("[data-test='title']", "Products");
});

//assertion for user in login page after invalid login attempt
Then("i should remain on the login page", () => {
  assertUtils.assertCurretntUrl("https://www.saucedemo.com/");
});

//assertion for error message after invalid login attempt
Then("i should see invalid credendials error message", () => {
  assertUtils.assertErrorMessage(
    "[data-test='error']",
    "Epic sadface: Username and password do not match any user in this service"
  );
});

//assertion for username required error message
Then("i should see username required error message", () => {
  assertUtils.assertErrorMessage(
    "[data-test='error']",
    "Epic sadface: Username is required"
  );
});

//assertion for password required error message
Then("i should see password required error message", () => {
  assertUtils.assertErrorMessage(
    "[data-test='error']",
    "Epic sadface: Password is required"
  );
});

//assertion for locked out user error message
Then("i should see locked_out_user error message", () => {
    assertUtils.assertErrorMessage(
        "[data-test='error']",
        "Epic sadface: Sorry, this user has been locked out."
    );
})
