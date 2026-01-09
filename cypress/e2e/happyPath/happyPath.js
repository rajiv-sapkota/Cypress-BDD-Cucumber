import { loginPage } from "../../pages/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { assertUtils, clickUtils, typingUtils } from "../../utils/commonUtils";


//precondition: user is in login page
Given("I open the login page", () => {
    cy.visit("/");
    
});


// cases for valid login
When("i login with valid username and valid password", () => {
  
    cy.login(Cypress.env("validUsername"), Cypress.env("validPassword"));
  
})

//assertion for successful login and redirection to inventory page
Then("i should be on the inventory page", () => {
  assertUtils.assertUrlContains("/inventory.html");
  assertUtils.assertVisibleText("[data-test='title']", "Products");
});

//assertion for inventory list visibility after successful login
Then("the products list should be displayed", () => {
  assertUtils.assertVisibleElement("#inventory_container")
});


// adding products to cart
When("i add products to cart", () => {
    clickUtils.clickElementByText("Add to cart")

});


// clicking on cart icon
When("i click on cart", () => {
    clickUtils.clickElement(".shopping_cart_link");
});

//assertion for cart page and loaded products
Then("i should be in cart page with list of selected products", () => {
    assertUtils.assertCurretntUrl("https://www.saucedemo.com/cart.html");
    assertUtils.assertVisibleElement("[data-test='title']");
});

// clicking on next button
When("i click on checkout", () => {
    clickUtils.clickElementByText("Checkout");
});

//assertion for checkout step 1
Then("i should be in checkout step 1", () => {
    assertUtils.assertCurretntUrl("https://www.saucedemo.com/checkout-step-one.html");
    assertUtils.assertVisibleElement("[data-test='title']");
 
});

// filling up checkout form
When("i fill up the form and click continue button", () => {
    typingUtils.typeInField("#first-name","Rajiv")
    typingUtils.typeInField("#last-name","Sapkota")
    typingUtils.typeInField("#postal-code","1234")
    clickUtils.clickElement("#continue");
    
});

//assertion for checkout step 2
Then("i should be in checkout step 2 and checkout summary should be visible", () => {
        assertUtils.assertCurretntUrl("https://www.saucedemo.com/checkout-step-two.html");
        assertUtils.assertVisibleElement("#checkout_summary_container");
});

// clicking on finish button
When("i click finish", () => {
    clickUtils.clickElementByText("Finish");
});

//assertion for thank you page
Then("i should be in thank you page", () => {
    assertUtils.assertCurretntUrl("https://www.saucedemo.com/checkout-complete.html");
     assertUtils.assertVisibleText(
       "[data-test='complete-header']",
       "Thank you for your order!"
     );
});

// clicking on back home button
When("i click on back home", () => {
    clickUtils.clickElementByText("Back Home");
});

//back to products page
Then("i should be in products page", () => {
    assertUtils.assertCurretntUrl("https://www.saucedemo.com/inventory.html");
    
});



















