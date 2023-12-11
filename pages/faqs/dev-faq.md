---
description: Frequently asked questions from our developer community.
---

# Developer FAQ

## What is the difference between Node 1 and 2.

Node 2 is ideal for early-stage projects, while larger projects typically prefer Node 1 as it can scale to a higher TPS. Uploads of less than 100 KiB are currently free on Node 2.

Nodes maintain [separate balances](/learn/funding-withdrawing); fund the node you intend to upload to.

## Does Irys offer free uploads?

Yes. Uploads below 100KiB are free on Node 2 only. This is a public good for users to be encouraged to try Irys.

## What is the difference between `Irys` and `WebIrys` classes?

The `Irys` class is used for server-side apps and `WebIrys` is used when [building with Irys in the browser](/developer-docs/irys-sdk/irys-in-the-browser).

## How do I use WebIrys in a create-react-app project?

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
