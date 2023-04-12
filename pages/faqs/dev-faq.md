---
sidebar_position: 2
sidebar_label: Developer FAQ
description: Frequently asked questions from our developer community.
---

# Developer FAQ

## What is the difference between node1 and node2?

Each node has different pricing. From network design, it creates competition.
Higher Competition = Higher user value for money (to a point). Nodes do not share funding balances, you can only upload to a node you have funded.

## What is the difference between `<uploadFile>` and `<uploadFolder>` ?

`<uploadFile>` is one by one.
`<uploadFolder>` uploads all + a manifest. A manifest is a way to describe a directory accessible via `https://arweave.net/<tx-id>/<filename>`
After a successful folder upload, two files are written to your local project directory [folder_name].csv and [folder_name].json, each contains the transaction id for each file uploaded. That transaction id can be used to retrieve the uploaded data by forming an URL with this format: `[https://arweave.net]/[transaction_id]`. You can also retrieve the uploaded data using the manifest id combined with the original relative file URL.
We have [a detailed guide here](/sdk/basic-features/uploading-folder)

## What is the difference between Bundlr class and WebBundlr class?

The Bundlr class is used for NodeJS applications on the server.
Whereas WebBundlr is used in the browser. To learn more, we have tutorials on working with [Bundlr+NodeJS.](/tutorials/bundlr-nodejs)
and [WebBundlr+React](/tutorials/file-uploader)

## How do I use WebBundlr in a create-react-app project?

Bundlr and WebBundlr are fully compatible with React. However, if you are using npx create-react-app, you will need to do a few extra steps when setting up your project. We have [a fully detailed recipe here.](/recipes/bundlr-react)

## How do I use WebBundlr when working with RainbowKit?

Internally, WebBundlr and RainbowKit use a slightly different Provider class with different function signatures. It is possible to make the classes compatible, however it takes one extra step. We have [a detailed recipe here.](/recipes/bundlr-rainbowkit)

## Can I host a website using Bundlr?

Yes. You can host static websites. We have [a detailed recipe on how to do it here.](/recipes/bundlr-uploading-static-sites)

## What is the difference between two npm packages - arbundles and bundlr/js-client?

Arbundles is a package designed to create cryptographically verifiable ANS104 bundles with supported cryptocurrencies and is specialized for this use case. The js-client is a client designed to allow you to programmatically interact with bundler nodes, including funding, withdrawals, and uploads.

## Is there a way to mint atomic NFTs via Bundlr?

Yes. It is possible with Warp.cc

## What is optimistic finalization?

Optimistic finalization is an incentive mechanism used by Bundlr to provide instant upload times.

When working directly with Arweave, a block is considered confirmed after 50 block confirmations. Data is considered seeded after it is stored by a minimum number of miners. This all can take up to to 100 minutes.

When you post a transaction to Bundlr, you are given back a signed receipt from the node you upload to. At this point, we can optimistically consider the transaction final because there is a greater financial incentive for nodes to behave honestly than there is for malicious behavior. If your transaction does not make it to Arweave, you can submit your transaction receipt to Bundlr and that node’s stake gets slashed.

## How does optimistic finalization work?

When you post a transaction, a set of validators co-sign the transaction which acts as a proof of existence/data availability. At that point, if a bundler does not get the data on-chain, the bundler’s stake in question is slashed.

## Is it possible to assign an api key to a funded Bundlr account so that I as a service provider can pay for my client's uploads?

No, but it is possible to pay for your client's uploads using Server-Side Signing.

## What is Server-Side Signing?

Server-Side Signing is a method that allows you to sign and pay for your user’s data securely without exposing your private key.
You can [learn more about Server-Side Signing here.](/recipes/server-side-signing)

## Which Ethereum Testnet is supported on Devnet?

Goerli.

## Which other Testnets does Bundlr support in other chains on Devnet?

Solana (devnet), GoerliEth, Matic, Fantom, BNB, Chainlink, Avalanche, Near, Algorand, arbEth, Aptos.

## Is it possible to use Bundlr to interact with contracts?

If you add the required SmartWeave tags to your bundlr transaction, it will allow you to interact with smartweave contracts.

## Are node1 and node2 interconnected?

No. The nodes are separate from each other. You can only upload to the actual nodes you have funded.

## Is there any kind of limitation on the number of requests from one IP to a node?

There is no limitation on the number of requests from one IP to a node.

## Is it possible to know an upload’s id before uploading?

Yes. You can create/sign/upload transactions in multiple steps.

## What is the format of the transaction id?

It is 32 bytes base64url encoded.

## Is there an expected max/min length of a transaction id?

43 bytes.
