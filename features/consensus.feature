Feature: Use Cases for the consensus service and Threshold keys
  Scenario: Create a topic and publish a message
    Given a first account with more than 10 hbars
    When A topic is created with the memo "Taxi rides" with the first account as the submit key
    And The message "Ride from A to B" is published to the topic
    Then The message "Ride from A to B" is received by the topic and can be printed to the console

  Scenario: Create a topic and publish a message with a threshold key
    Given a first account with more than 10 hbars
    And A second account with more than 10 hbars
    And A 1 of 2 threshold key with the first and second account
    When A topic is created with the memo "Taxi rides" with the threshold key as the submit key
    And The message "Ride from A to B" is published to the topic
    Then The message "Ride from A to B" is received by the topic and can be printed to the console
