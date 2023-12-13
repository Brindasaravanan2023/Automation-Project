Feature: Facebook functionlity testing

  Scenario Outline: Facebook login credential testings
    Given User is on the login page
    When User should enter "<username>" and "<password>"
    And User should enter login button
    Then User Should verify the success message

    Examples: 
      | username      |  | password   |
      | Saravanan     |  | 9791849575 |
      | Brinda        |  | Sar@1999   |
      | Nigaazhini    |  | Brin@2022  |
      | Panneerselvam |  | Meena@2022 |
      | Nimalan       |  | Nimal@2022 |