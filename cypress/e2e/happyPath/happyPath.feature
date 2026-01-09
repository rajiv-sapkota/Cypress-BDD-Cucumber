Feature: Happy Path

  Background:
    Given I open the login page
  
  @positive @smoke
  Scenario: Successful login, add to cart, checkout step 1, checkout step 2 
    When i login with valid username and valid password 
    Then i should be on the inventory page
    And the products list should be displayed
    When i add products to cart
    When i click on cart
    Then i should be in cart page with list of selected products
    When i click on checkout
    Then i should be in checkout step 1
    When i fill up the form and click continue button
    Then i should be in checkout step 2 and checkout summary should be visible
    When i click finish
    Then i should be in thank you page
    When i click on back home
    Then i should be in products page
   
