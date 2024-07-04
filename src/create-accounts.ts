import { accounts } from "./config";
import { AccountCreateTransaction, AccountId, Client, PrivateKey } from "@hashgraph/sdk";

const client = Client.forTestnet()

async function main() {
  const account = {id: "0.0.3672483", privateKey: process.env.DEV_KEY || "empty"}
  const MY_ACCOUNT_ID = AccountId.fromString(account.id);
  const MY_PRIVATE_KEY = PrivateKey.fromStringED25519(account.privateKey);
  client.setOperator(MY_ACCOUNT_ID, MY_PRIVATE_KEY);

  for (let i = 0; i < 5; i++) {
    const newPrivateKey = PrivateKey.generate()
    const receipt = await (await new AccountCreateTransaction().setInitialBalance(100).setKey(newPrivateKey)
        .execute(client)).getReceipt(client)
    console.log(`{id: "${receipt.accountId}", privateKey: "${newPrivateKey}"},`)
  }
}

main().then(console.log).catch(console.error)
