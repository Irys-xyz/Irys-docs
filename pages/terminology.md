---
title: Terminology
description: Technical terms you'll need to know to understand Bundlr
---

# Terminology

[Bundle](/terminology#bundle) | [Bundlr](/terminology#bundler) | [Data Provenance](/terminology#data-provenance) | [Deep Hash](/terminology#deep-hash) | [Gateways](/terminology#gateways) | [Proof Of Provenance](/terminology#proof-of-provenance) | [Provenance Chain](/terminology#provenance-chain) | [Transaction](/terminology#transaction) | [Transaction Receipt](/terminology#transaction-receipt) | [Validator](/terminology#validator)

## Data Provenance

The history of data. It can describe where data came from, how it was created, and who has handled it. Data provenance provides transparency into the lifecycle of data and is critical for building trust in the data.

## Proof Of Provenance

The issuing of cryptographically signed receipts, including a timestamp accurate to the millisecond, that provide irrefutable proof of data provenance.

## Provenance Chain

The chain of custody or the history and evolution of data.

## Bundle

A set of Bundlr transactions joined into a single Arweave transaction.

## Bundler

A bundler is a node on Bundlr that receives Bundlr transactions, handles payment channels and produces bundles.

## Deep Hash

A hash algorithm which takes a nested list of values as input and produces a 384 bit hash, where a change of any value or the structure will affect the hash.

## Gateways

Gateways are nodes that listen to both bundlers and the Arweave L1 with the purpose of aggregating and indexing transactions. This allows you to retrieve and lookup Bundlr transactions from clusters of bundlers without maintaining your own index.

## Transaction

A single item sent to a specific address, usually contains a data payload.

## Transaction Receipt

A financial proof that a Bundlr transaction gets on to Arweave by an expected block.
The transaction receipt format is.

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

## Validator

A node on the network which aggregates transactions within a block period and validates that each item has reached the chain.
