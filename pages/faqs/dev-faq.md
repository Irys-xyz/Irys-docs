---
description: Frequently asked questions from our developer community.
---

# Developer FAQ

## What is the difference between Node 1 and 2?

Node 2 is ideal for early-stage projects, while larger projects typically prefer Node 1 as it can scale to a higher TPS. Uploads of less than 100 KiB are currently free on Node 2.

Nodes maintain [separate balances](/learn/funding-withdrawing); fund the node you intend to upload to.

## Does Irys offer free uploads?

Yes. Uploads below 100KiB are free on Node 2 only. This is a public good for users to be encouraged to try Irys.

## How do I set up a Devnet wallet and fund it with free faucet tokens?

Our [Devnet](/developer-docs/using-devnet) is free to use, however to mirror the DX of working on our main nodes, you'll need to fund it with free faucet tokens. You can use any EVM or Solana wallet, however, beginners will likely want to use either [Metamask](https://metamask.io/) for EVM chains and [Phantom](https://phantom.app/) for both Solana and EVM chains.

Devnet tokens can be obtained for free from common faucets like the ones for [Solana](https://faucet.solana.com/), [Sepolia](https://sepoliafaucet.com/) and [Mumbai](https://mumbaifaucet.com/).

## What is the difference between `Irys` and `WebIrys` classes?

The `Irys` class is used for server-side apps and `WebIrys` is used when [building with Irys in the browser](/developer-docs/irys-sdk/irys-in-the-browser).

## How do I use WebIrys in a `create-react-app`` project?

Follow [this tutorial](/hands-on/tutorials/react).

## Can I host a website using Irys?

Yes. You can host static websites. We have [a tutorial on how to do it here.](/hands-on/tutorials/uploading-static-sites)

## Is it possible to assign an API key to a funded Irys account so that I can pay for my client's uploads?

No, but we do support [gassless uploads](/hands-on/tutorials/gassless-uploading).

## Which Ethereum Testnet is supported on Devnet?

[Sepolia](https://sepoliafaucet.com/).

## Are Irys nodes rate-limited?

There are no rate-limits on paid-for uploads.

Uploads below 100 KiB are free on Node 2, these uploads are rate-limited. If you upload more than 600 transactions within a minute and have a funded balance on Node 2 that balance will be used to pay for the transaction. If you don't have a balance, then you'll get a `402 - Free transaction limit exceeded, funds required` error.

## Is it possible to know an upload’s ID before uploading?

Yes. You can create/sign/upload transactions in multiple steps.

## What is the format of the transaction ID?

It is 32 bytes base64url encoded.

## Is there an expected max/min length of a transaction ID?

43 bytes.

## Is there a max size limit for an upload?

No

## How soon after I upload data is it available for download?

Our [optimistic cache](/learn/optimistic-cache) makes it available instantly.

## Where can I see my data before it gets seeded onto Arweave?

As soon as your upload is complete, the data can be requested from a [gateway](/overview/gateways).

## How does the Arweave endowment help ensure data permanence?

For data to be permanent, [it must be fault-tolerant, tamper-proof, and paid-for](https://irys.xyz/blog/irys-solution-provenance-trilemma). When you upload data to Irys, you pay a single up-front fee that covers paying for storage today and far into the future.

Arweave estimates storage costs using the Kryder+ rate, the exponential rate at which digital storage capacities increase over time. [Data from past years](https://arweave.net/wufZ10dlzwfPFTNKr3uRAyeMRfMdkNx1iG9yjolRbv8) shows the rate is 38%, meaning the physical cost to store 1 Gig of data has decreased by 38% yearly. Arweave charges a base fee that covers storing 20 replicas of your data for 200 years (assuming a very conservative 0.5% yearly decrease in storage costs). This base fee is then multiplied by 1.05, the additional 5% is paid to the miner who includes your transaction in a winning block, and the remainder is reserved for funding future storage via the [Arweave endowment](https://arwiki.wiki/#/en/endowment-simulation).

[Arweave's models](https://arwiki.wiki/#/en/endowment-simulation) demonstrate the endowment's longevity under various projections of decreasing storage costs with the main scenario indicating adequate funds for approximately 10,000 years of storage.

## What happens to storage costs if the price of AR moons?

Storage costs are denominated in AR and may rise temporarily with an increase in the token's price. However, this uptick in cost is offset as higher block rewards lead to more competition among miners. In response, miners expand their storage capacity, which, in turn, brings down the cost of data storage.

Short-term price fluctuations are also accounted for as down-side token volatility is offset by up-side token volatility. As people purchase storage, contributions to the endowment made when the token price is lower are offset by contributions made when the price is higher.
