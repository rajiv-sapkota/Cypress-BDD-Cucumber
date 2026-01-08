Feature: Products Page Functionality

  Background:
    Given i am logged in with valid credentials
  
  @positive @smoke
  Scenario: i am directed to inventory page after login
    Then i should be on the inventory page
    And the inventory list should be displayed
    And the hamburger menu icon should be visible
    And the cart icon should be visible and cart count should not be visible
    And the filter dropdown should be visible and have default value is visible
  
  @positive
  Scenario: i click on the hamburger menu icon
    When i click on the hamburger menu icon
    Then the menu items should be visible 

  @positive
  Scenario: i click on About link from menu bar
    When i click on About 
    Then i should be redirected to About Page

  @positive
  Scenario: i click on Log Out link from menu bar
    When i click on Logout link
    Then confirm log out modal should appear

  
