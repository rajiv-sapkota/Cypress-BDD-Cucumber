Feature: Login functionality

  Background:
    Given I open the login page
  
  @positive @smoke
  Scenario: Successful login with valid credentials
    When i login with valid username and valid password 
    Then i should be on the inventory page
    And the inventory list should be displayed
  
  @negative
  Scenario: Login attempt with invalid credentials
    When i login with invalid username and invalid password
    Then i should remain on the login page
    And i should see invalid credendials error message 

  @negative
  Scenario: Login attempt with valid username and invalid password
    When i login with valid username and invalid password
    Then i should remain on the login page
    And i should see invalid credendials error message 
   
  @negative
  Scenario: Login attempt with invalid username and valid password
    When i login with invalid username and valid password
    Then i should remain on the login page
    And i should see invalid credendials error message 

 @negative
 Scenario: Login attempt with valid username and empty password
    When i login with valid username and empty password
    Then i should remain on the login page
    And i should see password required error message

 @negative
 Scenario: Login attempt with empty username and empty password
    When i login with empty username and empty password
    Then i should remain on the login page
    And i should see username required error message
   

 @positive
 Scenario: Login attempt for locked_out_user 
    When i login with locked_out_user 
    Then i should remain on the login page
    And i should see locked_out_user error message