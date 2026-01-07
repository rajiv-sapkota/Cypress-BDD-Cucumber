import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { assertUtils } from "../utils/commonUtils";

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
