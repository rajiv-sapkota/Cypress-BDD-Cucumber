import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { assertUtils } from "../../utils/commonUtils";
import { clickUtils } from "../../utils/commonUtils";

// precondition: user is logged in
Given("i am logged in with valid credentials", () => {
  cy.login(Cypress.env("validUsername"), Cypress.env("validPassword"));
});

//assertion for successful login and redirection to inventory page
Then("i should be on the inventory page", () => {
  assertUtils.assertUrlContains("/inventory.html");
});

//assertion for inventory list visibility after successful login
Then("the inventory list should be displayed", () => {
  assertUtils.assertVisibleElement("#inventory_container");
});

//assertion for hamburger icon visiblility
Then("the hamburger menu icon should be visible",()=>{
  assertUtils.assertVisibleElement("#react-burger-menu-btn")
})

//assertion for cart icon
Then("the cart icon should be visible and cart count should not be visible",()=>{
  assertUtils.assertVisibleElement(".shopping_cart_link")
})

//assertion for filter dropdown visibility and default value
Then("the filter dropdown should be visible and have default value is visible",()=>{
  assertUtils.assertVisibleElement(".product_sort_container")
  assertUtils.assertVisibleText('.active_option',"Name (A to Z)")
})

//when user clicks on the hamburger menu icon
When("i click on the hamburger menu icon",()=>{
   clickUtils.clickElement("#react-burger-menu-btn")
})


// assert menu items to be visible
Then("the menu items should be visible",()=>{
  assertUtils.assertVisibleElement(".bm-item-list")
})

// click on About link from menu bar
When("i click on About",()=>{
     clickUtils.clickElement("#react-burger-menu-btn")
     
})

//assert i am on About Page
Then("i should be redirected to About Page",()=>{
  cy.get("#about_sidebar_link").should("have.attr","href","https://saucelabs.com/")
})

// click on Logout link from menu bar
When("i click on Logout link",()=>{
     clickUtils.clickElement("#react-burger-menu-btn")
     clickUtils.clickElementByText("Logout")
})


//assert for Confirm Modal of logout
Then("confirm log out modal should appear",()=>{
  assertUtils.assertVisibleElement("#logOutConfirmModal")
})






