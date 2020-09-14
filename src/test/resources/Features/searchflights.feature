@Search-Flights
Feature: Acceptance testing to validate search flights from origin to destination and validate
  the searched results on next page

  Scenario Outline: Search flight from origin to destination
    Given I am the Home Page "https://www.kayak.com/flights"
    #When I move to the menu "Flights"
    And User enter origin city "Origin_City"
    And User enter destination city "Destination_City"
    And User enter departure date "Deapature_Date"
    And User enter return date "Return_Date"
    And User click search buton
    Then I should see all flights related to my search
    And The page title should be "SFO to SJO, 10/2 &mdash; 10/9"
    Then Close browser

    Examples: 
      | Origin_City | Destination_City | Deapature_Date | Return_Date |
      | SFO         | New York         | 08/05/2020     | 09/20/2020  |
      | Los Angles  | California       | 08/05/2020     | 09/20/2020  |
      | California  | Navada           | 08/05/2020     | 09/20/2020  |
