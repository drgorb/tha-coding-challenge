import { Given, Then, When } from "@cucumber/cucumber";
import { accounts } from "../../src/config";
import { AccountBalanceQuery, AccountId, Client, PrivateKey } from "@hashgraph/sdk";
import assert from "node:assert";

const client = Client.forTestnet()

Given(/^A Hedera account with more than (\d+) hbar$/, async function (expectedBalance: number) {
  const account = accounts[0]
  const MY_ACCOUNT_ID = AccountId.fromString(account.id);
  const MY_PRIVATE_KEY = PrivateKey.fromStringED25519(account.privateKey);
  client.setOperator(MY_ACCOUNT_ID, MY_PRIVATE_KEY);

//Create the query request
  const query = new AccountBalanceQuery().setAccountId(MY_ACCOUNT_ID);
  const balance = await query.execute(client)
  assert.ok(balance.hbars.toBigNumber().toNumber() > expectedBalance)

});

When(/^I create a token named Test Token \(HTT\)$/, function () {

});

Then(/^The token has the name "([^"]*)"$/, function () {

});

Then(/^The token has the symbol "([^"]*)"$/, function () {

});

Then(/^The token has (\d+) decimals$/, function () {

});

Then(/^The token is owned by the account$/, function () {

});

Then(/^An attempt to mint (\d+) additional tokens succeeds$/, function () {

});
When(/^I create a fixed supply token named Test Token \(HTT\) with (\d+) tokens$/, function () {

});
Then(/^The total supply of the token is (\d+)$/, function () {

});
Then(/^An attempt to mint tokens fails$/, function () {

});
Given(/^A first hedera account with more than (\d+) hbar$/, function () {

});
Given(/^A second Hedera account$/, function () {

});
Given(/^A token named Test Token \(HTT\) with (\d+) tokens$/, function () {

});
Given(/^The first account holds (\d+) HTT tokens$/, function () {

});
Given(/^The second account holds (\d+) HTT tokens$/, function () {

});
When(/^The first account creates a transaction to transfer (\d+) HTT tokens to the second account$/, function () {

});
When(/^The first account submits the transaction$/, function () {

});
When(/^The second account creates a transaction to transfer (\d+) HTT tokens to the first account$/, function () {

});
Then(/^The first account has paid for the transaction fee$/, function () {

});
Given(/^A first hedera account with more than (\d+) hbar and (\d+) HTT tokens$/, function () {

});
Given(/^A second Hedera account with (\d+) hbar and (\d+) HTT tokens$/, function () {

});
Given(/^A third Hedera account with (\d+) hbar and (\d+) HTT tokens$/, function () {

});
Given(/^A fourth Hedera account with (\d+) hbar and (\d+) HTT tokens$/, function () {

});
When(/^A transaction is created to transfer (\d+) HTT tokens out of the first and second account and (\d+) HTT tokens into the third account and (\d+) HTT tokens into the fourth account$/, function () {

});
Then(/^The third account holds (\d+) HTT tokens$/, function () {

});
Then(/^The fourth account holds (\d+) HTT tokens$/, function () {

});
