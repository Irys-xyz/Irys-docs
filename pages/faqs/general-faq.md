---
description: Frequently asked questions about Bundlr.
---

# General FAQ

## Where should I subscribe to receive the latest news?

Please follow us on [Discord](https://discord.gg/4AsTuQ8pp9) and [Twitter](https://twitter.com/BundlrNetwork) to keep up with the latest updates and news.

## What is Bundlr?

Bundlr is a new data layer for the internet. Through decentralized consensus, Bundlr transparently shows the source and time at which data originated and proves that it has not been censored. For censorship resistance and permanence, this data is stored on Arweave’s blockchain. Bundlr is the foundational infrastructure that enables the creation of solutions to data integrity issues.

## What is Arweave?

An incentivized/immutable storage protocol that lets users store their data permanently with a one-time fee. Arweave is a new type of storage that backs data with a sustainable and perpetual endowment, allowing users and developers to truly store data forever for the very first time.
As a collectively owned hard drive that never forgets, Arweave allows us to remember and preserve valuable information, apps, and history indefinitely. By preserving history, it prevents others from rewriting it.

## What does Bundlr solve?

Bundlr is solving the data integrity challenge by making permanent decentralized data storage performant and scalable. Bundlr allows you to upload data in ~8ms while being able to scale to tens of thousands of transactions per second.

## How does Bundlr work?

Please check out [the Bundlr docs](https://docs.bundlr.network/) to get a deeper understanding of how Bundlr works.

## What is a bundle?

A set of Bundlr transactions joined into a single Arweave transaction.

## What are bundlers?

Bundlers are nodes on the Bundlr network that receive Bundlr transactions, handle payment channels, and produce bundles.

## Why bundles?

Bundles allow for infinite transaction scaling. Arweave is limited to 1000 transactions per block (one every 2 minutes). This limits Arweave to an absolute maximum of 8.3 Arweave transactions per second. Bundles can contain an unlimited number of transactions, whilst only counting as one Arweave transaction. For example, If every one of those 1000 Arweave transactions was a bundle that contained 1000 transactions, Arweave would be effectively capable of 8,333 transactions per second. If the network needs higher transaction throughput, you simply have to increase the number of transactions per bundle.

## Is there a max size limit for a bundle?

Bundles do not have a size limit.

## How can I use Bundlr?

You can use [Bundlr via Nodejs on the server](/developer-docs/sdk) or [directly in the browser.](/developer-docs/sdk/bundlr-in-the-browser) View more on how to use Bundlr [in the CLI section.](/developer-docs/cli)

## How long does it take to upload data on Bundlr?

~8ms.

## How long does it take to retrieve my data?

Once the data is uploaded, you can instantly retrieve your data.

## Where can I see my data before it gets seeded onto Arweave?

`gateway.bundlr.network/tx/:txid/data` (Bundlr uploads only).
Or, `arweave.net/<your transaction id>`

## How long does it take for data to be seeded onto Arweave?

It takes ~100 minutes for a transaction to be final on Arweave.

## Is there an explorer for Bundlr/Arweave?

[Arweave Explorer](https://v2.viewblock.io/arweave) | [ViewBlock](https://v2.viewblock.io/arweave)

[SCAR](https://scar.vercel.app/)

## Is there any limitation for uploads/storage on Bundlr?

There’s no limitation on the number of uploads and you can store as much as data you need.

## Is there a public sale, Airdrop or etc?

We do not have a public token yet. Anyone claiming a presale, token airdrop, etc via DM is a scam. Please follow the announcements on [Discord](https://discord.gg/4AsTuQ8pp9) and [Twitter.](https://twitter.com/BundlrNetwork)

## What currencies does Bundlr support?

Please [view all supported currencies here.](/overview/supported-tokens)

## Does Bundlr offer free uploads?

Yes. Uploads below 100KB are free. Please note that free uploads are only on node2.

## Do I need to have a balance on my node for free uploads?

No. For uploads below 100KB you do not need a balance on your node.

## How does Bundlr facilitate payment in any token?

Bundlr registers funding / withdraw transactions off-chain in payment channels.
Example: With Polygon, you will send MATIC and the Polygon tx is recorded off-chain which will credit your Polygon (MATIC) account on Bundlr.

## How does the payment channel work?

You can submit an on-chain transaction using the chains we support via their own cryptography.
Then, this transaction is recorded off-chain by the bundlers and you receive the equivalent amount of token(s) in your Bundlr account.

## How are funds secure?

Each bundler stakes $BNDLR which acts as leverage for their balances. A bundler can’t hold more balance than a fraction of their stake. The higher the stake, the more balances they can handle.

## How long does the funding process take?

The funding process varies depending on which chain you use for funding and the speed of that network.
Example: Funding with Arweave takes ~20 minutes to show up, whereas funding with Polygon/Solana can be pretty instant.

## How does the fee function work on Bundlr?

Please check out [the fee function here.](/overview/fees)

## Is there a calculator for Arweave fees?

[Arweave Fees](https://ar-fees.arweave.dev/)
