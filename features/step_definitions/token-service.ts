import { Given, Then, When } from "@cucumber/cucumber";
import { accounts } from "../../src/config";
import {
  AccountBalanceQuery,
  AccountId,
  Client,
  PrivateKey,
  TokenCreateTransaction,
  TokenInfoQuery
} from "@hashgraph/sdk";
import assert from "node:assert";

const client = Client.forTestnet()

Given(/^A Hedera account with more than (\d+) hbar$/, async function (expectedBalance: number) {
  const account = accounts[0]
  const MY_ACCOUNT_ID = AccountId.fromString(account.id);
  const MY_PRIVATE_KEY = PrivateKey.fromStringED25519(account.privateKey);
  client.setOperator(MY_ACCOUNT_ID, MY_PRIVATE_KEY);
  this.accountId = client.getOperator()?.accountId

//Create the query request
  const query = new AccountBalanceQuery().setAccountId(MY_ACCOUNT_ID);
  const balance = await query.execute(client)
  assert.ok(balance.hbars.toBigNumber().toNumber() > expectedBalance)

});

When(/^I create a token named "([^"]*)" \("([^"]*)"\)$/, async function (name: string, symbol:string) {
  const ctt = await new TokenCreateTransaction()
      .setDecimals(2)
      .setTokenName(name)
      .setTokenSymbol(symbol)
      .setAdminKey(this.accountId.publicKey)
      .setTreasuryAccountId(this.accountId)
      .execute(client)
  const receipt = await ctt.getReceipt(client)
  this.tokenId = receipt.tokenId
});

Then(/^The token has the name "([^"]*)"$/, async function (name: string) {
  const tokenInfo = await new TokenInfoQuery().setTokenId(this.tokenId).execute(client);
  assert.ok(tokenInfo.name == name)
});

Then(/^The token has the symbol "([^"]*)"$/, async function (symbol: string) {
  const tokenInfo = await new TokenInfoQuery().setTokenId(this.tokenId).execute(client);
  assert.ok(tokenInfo.symbol == symbol)
});

Then(/^The token has (\d+) decimals$/, async function (decimals: number) {
  const tokenInfo = await new TokenInfoQuery().setTokenId(this.tokenId).execute(client);
  assert.ok(tokenInfo.decimals == decimals)
});

Then(/^The token is owned by the account$/, async function () {
  const tokenInfo = await new TokenInfoQuery().setTokenId(this.tokenId).execute(client);
  assert.ok(tokenInfo.treasuryAccountId?.equals(this.accountId))
});

Then(/^An attempt to mint (\d+) additional tokens succeeds$/, function (tokens: number) {

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
