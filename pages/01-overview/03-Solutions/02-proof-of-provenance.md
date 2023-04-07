---
sidebar_position: 3
title: Proof Of Provenance
description: Our instantly accessible immutable data layer with custom metadata tagging and verifiable timestamping helps you build irrefutable provenance chains.
slug: /solutions/proof-of-provenance
---

# Proof Of Provenance

While blockchains became popular in 2008 with the publication of Satoshi Nakamoto’s white paper, they were actually invented in 1991 as a way to verify and protect content through decentralized timestamps. This 1991 paper was famously prescient in its predictions that in an all-digital world, knowing when data was created would become an important issue.

This is where data provenance and Bundlr’s Proof of Provenance come into play.

**Data provenance** refers to the history, lineage, or origin of data. It is the information that describes where data came from, how it was created, and who has handled it. Data provenance provides transparency into the lifecycle of data and is critical for building trust in the data and making informed decisions based on it.

**Provenance chains** refer to the chain of custody or the history and evolution of data stored on a blockchain. In financial use-cases, provenance chains refer to the record of all the transactions and movements of an asset on the blockchain, starting from its creation or origin. When dealing with data stored on Arweave, provenance chains refer to how a digital asset changes and evolves over time.

For example, an illustrator could upload an image, and the timestamp received on upload would provide irrefutable proof they were the first to upload it. The timestamp would establish provenance. The illustrator could then edit the piece and re-upload it using a custom tag tying it back to the original. Taking the example further, there might be another series of edits requested by the illustrator’s client, all of which would be tied back to the original using metadata. All of this would create a chain of provenance showing the original artwork and all revisions. Were someone to use the work without permission, our Proof of Provenance would be all the evidence needed to prove true ownership of the work.

![](../../../static/img/learn/PoP2.png)

### Receipts / Timestamps

Before diving into receipts, let's look at how timestamps are handled on Bundlr and Arweave. Bundlr works by [bundling transactions and submitting that entire Bundle to Arweave.](/learn/transaction-lifecycle) That entire Bundle is given a timestamp by Arweave on finalization. As Arweave has a block time of roughly two minutes, this means the timestamp associated with the bundle upload is accurate to two minutes. As with all blockchains, there is always a risk of network forks or malicious attacks which can cause a transaction to not be finalized. In the event the transaction is not finalized, Bundlr resubmits the transaction, and the timestamp associated with the bundle is always the most recent one.

Independent of the bundle timestamp, Bundlr gives each upload a timestamp accurate to the millisecond. When uploading to Bundlr using `bundlr.upload()`, `bundlr.uploadFile()` and `bundlr.uploadFolder()`, you are given a response object containing a timestamp and a transaction id. The timestamp, while accurate to the millisecond, is not cryptographically signed.

To receive a receipt with a signed timestamp, use the function `bundlr.uploadWithReceipt()`. This gives you irrefutable proof that we actually provided the timestamp. When we move to a fully decentralized architecture, we will outsource signing to a collective, creating an additional level of guarantees.

To upload a request with a signed timestamp, use the optional `uploadWithReceipt()` function.

```js
const receipt = await bundlr.uploadWithReceipt("Hello, world!", {
	tags: [{ name: "Content-type", value: "text/plain" }],
});
```

Then on upload, you immediately receive a receipt in the following format.

```json
{
  id: '1Txlbl5NgEqUbIkDnnunHC0gFx0n8_Y92zAsoX54kI8',
  timestamp: 1676891681110,
  version: '1.0.0',
  public: '...',
  signature: '...',
  deadlineHeight: ...,
  block: ...,
  validatorSignatures: [],
  verify: [Function: bound verifyReceipt] AsyncFunction
}
```

| Field               | Description                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| id                  | Transaction id (used to download the data)                             |
| timestamp           | Timestamp (UNIX milliseconds) of when the transaction was created      |
| version             | The version of this JSON file, currently 1.0.0                         |
| public              | Public key of the bundler node used                                    |
| signature           | A signed deep hash of the JSON receipt                                 |
| deadlineHeight      | The block number by which the transaction must be finalized on Arweave |
| block               | Deprecated                                                             |
| validatorSignatures | Reserved for future use once we're decentralized                       |
| verify              | An async function called to verify the receipt is valid                |

This receipt compromises Bundlr’s Proof of Time and means you get an unfalsifiable guarantee of provenance. The timestamp establishes the original provenance of the data uploaded, accurate to the millisecond it provides irrefutable proof showing when the data was uploaded. The timestamp is a UNIX timestamp format in milliseconds and in JavaScript can be converted into a human-readable format using the following code.

```js
const date = new Date(1676865565551);
const dateString = date.toLocaleString();
```

All blockchains offer some sort of timestamping; however, it is only as granular as the underlying blockchain supports. While many blockchains stop at seconds, we offer deeper granularity by continuing on to milliseconds. Additionally, because uploads on Bundlr are so quick and affordable, establishing long provenance chains using Bundlr does not have the economic obstacles you’d experience attempting something similar on other blockchains.

### Querying Data

All metadata uploaded to Bundlr / Arweave is readily queryable using GraphQL and is **available forever**. You can query our nodes directly using either of these endpoints, you must query the endpoint associated with the node you uploaded to.

-   Node 1: https://node1.bundlr.network/graphql
-   Node 2: https://node2.bundlr.network/graphql
-   Devnet: https://devnet.bundlr.network/graphql

To query for the timestamp associated with a given transaction id, use the following query.

```graphql
query DataProvenanceQuery {
	transactions(order: ASC, ids: ["Yaa-ZPQQub_66joUJZ-2BDRbmaPj-q3SHdiSiHb06hc"]) {
		edges {
			node {
				id
				address
				timestamp
			}
			cursor
		}
	}
}
```

In our earlier example of an illustrator using Bundlr to create a provenance chain, we used a custom tag called `provenance-chain-id` that linked subsequent uploads back to a common base upload. In this example, to query for all subsequent uploads, use the following.

```graphql
query DataProvenanceQuery {
	transactions(
		order: ASC
		tags: [{ name: "provenance-chain-id", values: ["Yaa-ZPQQub_66joUJZ-2BDRbmaPj-q3SHdiSiHb06hc"] }]
	) {
		edges {
			node {
				id
				address
				timestamp
			}
			cursor
		}
	}
}
```

By adding custom metadata to your uploads, you can create **provenance chains** by building real-time relational links between uploads.

We’re able to do all of this because we’ve built an instantly accessible immutable data layer with custom metadata tagging and verifiable timestamping.
