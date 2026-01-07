Feature: Products Page Functionality

  Background:
    Given i am logged in with valid credentials
  
  @positive @smoke
  Scenario: i am directed to inventory page after login
    Then i should be on the inventory page
    And the inventory list should be displayed