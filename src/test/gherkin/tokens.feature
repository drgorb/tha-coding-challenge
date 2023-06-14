# Created by Micha Roon at 13.06.23
Feature: Token Service Use Cases
  Demonstration of the understanding of the Hedera Hashgraph Token Service and transaction model

  Scenario: Create a mintable token
    Given A Hedera account with more than 100 hbar
    When I create a token named Test Token (HTT)
    Then The token has the name "Test Token"
    And The token has the symbol "HTT"
    And The token has 2 decimals
    And The token is owned by the account
    And An attempt to mint 100 additional tokens succeeds

  Scenario: Create a fixed supply token
    Given A Hedera account with more than 100 hbar
    When I create a fixed supply token named Test Token (HTT) with 1000 tokens
    Then The total supply of the token is 1000
    And The token has the name "Test Token"
    And The token has the symbol "HTT"
    And The token has 2 decimals
    And The token is owned by the account
    And An attempt to mint tokens fails

  Scenario: Transfer tokens between 2 accounts
    Given A first hedera account with more than 100 hbar
    And A second Hedera account
    And A token named Test Token (HTT) with 1000 tokens
    And The first account holds 100 HTT tokens
    And The second account holds 0 HTT tokens
    When The first account creates a transaction to transfer 10 HTT tokens to the second account
    And The first account submits the transaction
    Then The second account holds 10 HTT tokens
    And The first account holds 90 HTT tokens

  Scenario: Create a token transfer transaction paid for by the recipient
    Given A first hedera account with more than 100 hbar
    And A second Hedera account
    And A token named Test Token (HTT) with 1000 tokens
    And The second account holds 100 HTT tokens
    And The first account holds 0 HTT tokens
    When The second account creates a transaction to transfer 10 HTT tokens to the first account
    And The first account submits the transaction
    Then The second account holds 90 HTT tokens
    And The first account holds 10 HTT tokens
    And The first account has paid for the transaction fee

  Scenario: Create a multi party token transfer transaction
    Given A token named Test Token (HTT) with 1000 tokens
    And A first hedera account with more than 100 hbar and 100 HTT tokens
    And A second Hedera account with 0 hbar and 100 HTT tokens
    And A third Hedera account with 0 hbar and 100 HTT tokens
    And A fourth Hedera account with 0 hbar and 100 HTT tokens
    When A transaction is created to transfer 10 HTT tokens out of the first and second account and 5 HTT tokens into the third account and 15 HTT tokens into the fourth account
    And The first account submits the transaction
    Then The first account holds 90 HTT tokens
    And The second account holds 90 HTT tokens
    And The third account holds 105 HTT tokens
    And The fourth account holds 115 HTT tokens

