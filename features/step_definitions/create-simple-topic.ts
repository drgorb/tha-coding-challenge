import { Given, Then, When } from "@cucumber/cucumber";
import { AccountBalanceQuery, AccountId, Client, PrivateKey } from "@hashgraph/sdk";
import { accounts } from "../../src/config";
import assert from "node:assert";

// Pre-configured client for test network (testnet)
const client = Client.forTestnet()

//Set the operator with the account ID and private key

Given(/^a first account with more than (\d+) hbars$/, async function (expectedBalance: number) {
  const account = accounts[0]
  const MY_ACCOUNT_ID = AccountId.fromString(account.id);
  const MY_PRIVATE_KEY = PrivateKey.fromStringED25519(account.privateKey);
  client.setOperator(MY_ACCOUNT_ID, MY_PRIVATE_KEY);

//Create the query request
  const query = new AccountBalanceQuery().setAccountId(MY_ACCOUNT_ID);
  const balance = await query.execute(client)
  assert.ok(balance.hbars.toBigNumber().toNumber() > expectedBalance)
});

When(/^A topic is created with the memo "([^"]*)" with the first account as the submit key$/, function () {

});

When(/^The message "([^"]*)" is published to the topic$/, function () {

});

Given(/^A first account with more than (\d+) hbars$/, function () {

});

Given(/^A second account with more than (\d+) hbars$/, function () {

});

Given(/^A (\d+) of (\d+) threshold key with the first and second account$/, function () {

});

When(/^A topic is created with the memo "([^"]*)" with the threshold key as the submit key$/, function () {

});

Then(/^The message "([^"]*)" is received by the topic and can be printed to the console$/, function (message: string) {

});
