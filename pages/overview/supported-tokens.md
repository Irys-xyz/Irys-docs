---
description: Pay and sign for uploads with multiple tokens.
---

# Supported Tokens

## Mainnet Supported Tokens

On Nodes 1 and 2 can pay for uploads in any of these tokens:

| Token / Blockchain | Token | Parameter Value | Bundlr Support | WebBundlr Support |
| ------------------ | ----- | --------------- | -------------- | ----------------- |
| Aptos              | APT   | aptos           | yes            | yes               |
| Algorand           | ALGO  | algorand        | yes            | no                |
| Arbitrum           | ETH   | arbitrum        | yes            | yes               |
| Arweave            | AR    | arweave         | yes            | no                |
| Avalanche C-Chain  | AVAX  | avalanche       | yes            | yes               |
| Boba               | BOBA  | boba            | yes            | yes               |
| Boba-eth           | ETH   | boba-eth        | yes            | yes               |
| Chainlink          | LINK  | chainlink       | yes            | yes               |
| Ethereum           | ETH   | ethereum        | yes            | yes               |
| Fantom             | FTM   | fantom          | yes            | yes               |
| Near               | NEAR  | near            | yes            | yes               |
| Polygon            | MATIC | matic           | yes            | yes               |
| Solana             | SOL   | solana          | yes            | yes               |

## Devnet Supported Tokens

On [Devnet](/developer-docs/using-devnet), you can pay for uploads in any of these tokens:

| Token / Blockchain | Token | Parameter Value | Bundlr Support | WebBundlr Support |
| ------------------ | ----- | --------------- | -------------- | ----------------- |
| Aptos              | APT   | aptos           | yes            | yes               |
| Algorand           | ALGO  | algorand        | yes            | no                |
| Arbitrum           | ETH   | arbitrum        | yes            | yes               |
| Avalanche C-Chain  | AVAX  | avalanche       | yes            | yes               |
| Ethereum (Sepolia) | ETH   | ethereum        | yes            | yes               |
| Near               | NEAR  | near            | yes            | yes               |
| Polygon (Mumbai)   | MATIC | matic           | yes            | yes               |
| Solana             | SOL   | solana          | yes            | yes               |

## Specifying token

To use a different token, link your private key and supply the token name when creating a new Irys object. The accepted values for `token` are listed in the third column of the tables above.

Example:

```js copy
const getIrys = async () => {
	const url = "https://devnet.irys.xyz";
	const providerUrl = "https://rpc-mumbai.maticvigil.com";
	const token = "matic";

	const irys = new Irys({
		url, // URL of the node you want to connect to
		token, // Token used for payment
		key: process.env.ETH_PRIVATE_KEY, // ETH or SOL private key
		config: { providerUrl }, // Optional provider URL, only required when using Devnet
	});
	return irys;
};
```
