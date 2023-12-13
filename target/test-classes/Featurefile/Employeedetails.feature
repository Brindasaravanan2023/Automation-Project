Feature: Employee functionlity testing

  Scenario Outline: Employee details to be add testing
    Given Employee should navigate the login page
    When Employee should click the addresource details
    And Employee should add the user details
    Then Employee Should verify the success message

    