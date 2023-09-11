---
description: Frequently asked questions from our developer community.
---

# Developer FAQ

## What is the difference between Node 1 and 2.

Node 2 is ideal for early-stage projects, while larger projects typically prefer Node 1 as it can scale to a higher TPS. Uploads of less than 100 KiB are currently free on Node 2.

Nodes maintain [separate balances](/learn/funding-withdrawing); fund the node you intend to upload to.

## What is the difference between `Irys` and `WebIrys` classes?

The `Irys` class is used for server-side apps and `WebIrys` is used when [building with Irys in the browser](/developer-docs/sdk/bundlr-in-the-browser).

## How do I use WebBundlr in a create-react-app project?

Follow [this tutorial](https://docs.bundlr.network/hands-on/tutorials/react).

## Can I host a website using Bundlr?

Yes. You can host static websites. We have [a detailed tutorial on how to do it here.](/hands-on/tutorials/uploading-static-sites)

## Is it possible to assign an api key to a funded Irys account so that I can pay for my client's uploads?

No, but we do support [gassless uploads](/hands-on/tutorials/gassless-uploading).

## Which Ethereum Testnet is supported on Devnet?

[Sepolia](https://sepoliafaucet.com/).

## Which other Testnets does Bundlr support in other chains on Devnet?

Solana (devnet), Sepolia ETH, Matic, Fantom, BNB, Chainlink, Avalanche, Near, Algorand, arbEth, Aptos.

## Are Irys nodes rate-limited?

There is no limitation on the number of requests from one IP to a node.

## Is it possible to know an upload’s id before uploading?

Yes. You can create/sign/upload transactions in multiple steps.

## What is the format of the transaction id?

It is 32 bytes base64url encoded.

## Is there an expected max/min length of a transaction id?

43 bytes.
