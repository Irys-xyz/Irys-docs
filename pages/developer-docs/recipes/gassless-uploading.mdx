---
description: Using Server-Side signing to implement gassless transactions.
---

# Gassless Uploading With Server-Side Signing

Server-side signing is a method to allow you to sign (and pay) for your users' data securely (without exposing your private key). It is a form of gassless transactions.

Server-side signing works in 4 main steps:

1. The client requests the required information from the server (mainly public key).
2. The client transfers the minimum amount of data required for signing (known as the signature info) to a server (which has access to the private key).
3. The server then signs this data and returns the resulting signature to the client.
4. The client then inserts this signature into their data, resulting in a signed transaction identical to if the client had access to the private key.

## Supported Currencies

Currently, server-side signing is supported for the following:

-   Ethereum
-   Matic
-   BNB
-   Fantom
-   Avalanche
-   Boba-Eth
-   Arbitrum
-   Chainlink
-   Boba
-   Solana

## Getting Started

We have a full demo app written in NextJS and TypeScript that demonstrates uploading an image using server-side signing. It's available in two versions

-   [A branch for Solana-based wallets](https://github.com/Bundlr-Network/tutorial-server-side-signing)
-   [A branch for ETH-based wallets](https://github.com/Bundlr-Network/tutorial-server-side-signing/tree/ethwallet)

The demo app completely hides the entire process of using Bundlr and any form of Web3 technology from the user. The user simply uploads an image, and an URL to preview the image on the permaweb is returned. Upload fees are paid by the private key owned by the server.

## API Routes

The [example app](https://github.com/Bundlr-Network/tutorial-server-side-signing) exposes three API routes, you can pick and choose which to use based on your own app design.

### `publicKey.ts`

The route `publicKey.ts` returns the public key for the server's wallet. This is the first route called by the client.

#### Solana-Based Wallets

```ts filename="publicKey.ts"
import Bundlr from "@bundlr-network/client/build/node";
import { NextApiRequest, NextApiResponse } from "next";

/**
 *
 * @returns The server's private key.
 */
export async function serverInit(): Promise<Buffer> {
	const key = process.env.PAYMENT_PRIVATE_KEY; // your private key
	const bundlrNodeAddress = process.env.BUNDLR_NODE_ADDRESS;
	const rpcUrl = process.env.RPC;

	const serverBundlr = new Bundlr(
		//@ts-ignore
		bundlrNodeAddress,
		"solana",
		key,
		{
			providerUrl: rpcUrl,
		},
	);
	const publicKey = serverBundlr.currencyConfig.getSigner().publicKey;
	return publicKey;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({ pubKey: (await serverInit()).toString("hex") });
}
```

#### ETH-Based Wallets

```ts filename="publicKey.ts"
import { TypedEthereumSigner } from "arbundles";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * @returns The server's private key.
 */
export async function serverInit(): Promise<Buffer> {
	const key = process.env.PAYMENT_PRIVATE_KEY; // your private key;
	if (!key) throw new Error("Private key is undefined!");
	const signer = new TypedEthereumSigner(key);
	return signer.publicKey;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({ pubKey: (await serverInit()).toString("hex") });
}
```

### `signData.ts`

The route `signData.ts` signs the data provided using the server's private key. This is the second route called by the client.

#### Solana-Based Wallets

```ts filename="signData.ts"
import Bundlr from "@bundlr-network/client/build/node";
import type { NextApiRequest, NextApiResponse } from "next";
import HexInjectedSolanaSigner from "arbundles/src/signing/chains/HexInjectedSolanaSigner";

/**
 *
 * @returns A signed version of the data, signatureData, as sent by the client.
 */
export async function signDataOnServer(signatureData: Buffer): Promise<Buffer> {
	const key = process.env.PAYMENT_PRIVATE_KEY; // your private key
	const bundlrNodeAddress = process.env.BUNDLR_NODE_ADDRESS;
	const rpcUrl = process.env.RPC;

	const serverBundlr = new Bundlr(
		//@ts-ignore
		bundlrNodeAddress,
		"solana",
		key,
		{
			providerUrl: rpcUrl,
		},
	);

	const encodedMessage = Buffer.from(signatureData);

	const signature = await serverBundlr.currencyConfig.sign(encodedMessage);

	const isValid = await HexInjectedSolanaSigner.verify(
		serverBundlr.currencyConfig.getPublicKey() as Buffer,
		signatureData,
		signature,
	);

	return Buffer.from(signature);
}
// req: NextApiRequest,
// res: NextApiResponse,
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = JSON.parse(req.body);
	const signatureData = Buffer.from(body.signatureData, "hex");
	const signature = await signDataOnServer(signatureData);
	res.status(200).json({ signature: signature.toString("hex") });
}
```

#### Eth-Based Wallets

```ts filename="signData.ts"
import type { NextApiRequest, NextApiResponse } from "next";
import { TypedEthereumSigner } from "arbundles";

/**
 *
 * @returns A signed version of the data, signatureData, as sent by the client.
 */
export async function signDataOnServer(signatureData: Buffer): Promise<Buffer> {
	const key = process.env.PAYMENT_PRIVATE_KEY; // your private key
	if (!key) throw new Error("Private key is undefined!");
	const signer = new TypedEthereumSigner(key);
	return Buffer.from(await signer.sign(signatureData));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = JSON.parse(req.body);
	const signatureData = Buffer.from(body.signatureData, "hex");
	const signature = await signDataOnServer(signatureData);
	res.status(200).json({ signature: signature.toString("hex") });
}
```

### `lazyFund.ts`

The route `lazyFund.ts` is an optional route used for lazy-funding uploads. Some projects using server-side signing prefer to do upfront funding where they transfer over a budget of tokens first and then slowly use those to pay for uploads. If you're using upfront funding, you can omit this step.

To perform lazy-funding of uploads, pass the exact number of bytes you want to fund to this route. The route will compute the current cost to upload those bytes and fund it using the server's private key.

#### Solana-Based Wallets

```ts filename="lazyFund.ts"
import Bundlr from "@bundlr-network/client/build/node";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Given a file of the specified size, get the cost to upload, then fund a node that amount
 * @param filesize The size of a file to fund for
 * @returns
 */
export async function lazyFund(filesize: string): Promise<string> {
	// nodeJS client
	const key = process.env.PAYMENT_PRIVATE_KEY; // your private key
	const bundlrNodeAddress = process.env.BUNDLR_NODE_ADDRESS;
	const rpcUrl = process.env.RPC;

	const serverBundlr = new Bundlr(
		//@ts-ignore
		bundlrNodeAddress,
		"solana",
		key,
		{
			providerUrl: rpcUrl,
		},
	);

	const price = await serverBundlr.getPrice(parseInt(filesize));
	const fundTx = await serverBundlr.fund(price);

	// return the transaction id
	return fundTx.id;
}
// req: NextApiRequest,
// res: NextApiResponse,
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = JSON.parse(req.body);
	const fundTx = await lazyFund(body);

	res.status(200).json({ txResult: fundTx });
}
```

#### Eth-Based Wallets

```ts
import Bundlr from "@bundlr-network/client";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Given a file of the specified size, get the cost to upload, then fund a node that amount
 * @param filesize The size of a file to fund for
 * @returns
 */
export async function lazyFund(filesize: string): Promise<string> {
	// nodeJS client
	const key = process.env.PAYMENT_PRIVATE_KEY; // your private key
	const bundlrNodeAddress = process.env.BUNDLR_NODE_ADDRESS;
	const rpcUrl = process.env.RPC;

	const serverBundlr = new Bundlr(
		//@ts-ignore
		bundlrNodeAddress,
		"matic",
		key,
		{
			providerUrl: rpcUrl,
		},
	);
	console.log(
		"serverBundlrPubKey",
		//@ts-ignore
		serverBundlr.currencyConfig.getPublicKey().toJSON(),
	);

	const price = await serverBundlr.getPrice(parseInt(filesize));
	console.log("price=", price.toString());
	const fundTx = await serverBundlr.fund(price);
	console.log("successfully funded fundTx=", fundTx);

	// return the transaction id
	return fundTx.id;
}
// req: NextApiRequest,
// res: NextApiResponse,
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = JSON.parse(req.body);
	console.log("lazyFund body=", body);
	const fundTx = await lazyFund(body);

	res.status(200).json({ txResult: fundTx });
}
```

## Client-Side Code

Below are snippets showing how to call each server route.

### Obtaining The Server's Public Key

#### For Solana and Eth-Based Wallets

```ts
// obtain the server's public key
const pubKeyRes = await(await fetch("/api/publicKey")).json() as unknown as {
	pubKey: string;
};
const pubKey = Buffer.from(pubKeyRes.pubKey, "hex");
```

### Creating A Provider Using The `signData` Route

#### For Solana-Based Wallets

```ts
// create a provider
const provider = {
	publicKey: {
		toBuffer: () => pubKey,
		byteLength: 32,
	},
	signMessage: async (message: Uint8Array) => {
		const convertedMsg = Buffer.from(message).toString("hex");
		const res = await fetch("/api/signData", {
			method: "POST",
			body: JSON.stringify({
				signatureData: convertedMsg,
			}),
		});
		const { signature } = await res.json();
		const bSig = Buffer.from(signature, "hex");
		return bSig;
	},
};
```

#### For Eth-Based Wallets

```ts
const provider = {
	// for ETH wallets
	getPublicKey: async () => {
		return pubKey;
	},
	getSigner: () => {
		return {
			getAddress: () => pubKey, // pubkey is address for TypedEthereumSigner
			_signTypedData: async (
				_domain: never,
				_types: never,
				message: { address: string; "Transaction hash": Uint8Array },
			) => {
				let convertedMsg = Buffer.from(message["Transaction hash"]).toString(
					"hex",
				);
				const res = await fetch("/api/signData", {
					method: "POST",
					body: JSON.stringify({ signatureData: convertedMsg }),
				});
				const { signature } = await res.json();
				const bSig = Buffer.from(signature, "hex");
				// pad & convert so it's in the format the signer expects to have to convert from.
				const pad = Buffer.concat([Buffer.from([0]), Buffer.from(bSig)]).toString(
					"hex",
				);
				return pad;
			},
		};
	},

	_ready: () => {},
};
```

### Lazy-Funding Uploads

#### For Solana and Eth-Based Wallets

```ts
// 1. first create the datastream and get the size
const dataStream = fileReaderStream(fileToUpload);

// 2. then pass the size to the lazyFund API route
const fundTx = await fetch("/api/lazyFund", {
	method: "POST",
	body: dataStream.size,
});
```
